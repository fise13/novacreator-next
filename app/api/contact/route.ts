import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const DEFAULT_TO_EMAIL = "victhewise@icloud.com";

class ContactConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactConfigurationError";
  }
}

const contactSchema = z.object({
  contact_method: z.string().max(40).optional(),
  country_code: z.string().max(12).optional(),
  email: z.preprocess(
    (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
    z.string().trim().email().optional(),
  ),
  form_name: z.string().trim().max(100).optional(),
  message: z.string().trim().max(3000).optional(),
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(5).max(30),
  phone_full: z.string().trim().max(40).optional(),
  service: z.string().trim().max(120).optional(),
  type: z.string().trim().max(40).optional(),
  website: z.string().trim().max(200).optional(),
});

type ContactPayload = z.infer<typeof contactSchema>;

function wantsJson(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  const contentType = request.headers.get("content-type") ?? "";

  return accept.includes("application/json") || contentType.includes("application/json");
}

async function parseRequestBody(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  const formData = await request.formData();
  return Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [
      key,
      typeof value === "string" ? value : value.name,
    ]),
  );
}

function redirectBack(request: NextRequest, status: "success" | "error") {
  const referer = request.headers.get("referer");
  const fallback = new URL("/", request.url);
  const target = referer ? new URL(referer) : fallback;
  const current = new URL(request.url);

  if (target.origin !== current.origin) {
    fallback.searchParams.set("contact", status);
    return NextResponse.redirect(fallback, { status: 303 });
  }

  target.searchParams.set("contact", status);
  return NextResponse.redirect(target, { status: 303 });
}

function createTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? "587");

  if (!host || !user || !pass) {
    throw new ContactConfigurationError("SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS.");
  }

  return nodemailer.createTransport({
    auth: { pass, user },
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatPhone(data: ContactPayload) {
  if (data.phone_full) {
    return data.phone_full;
  }

  return `${data.country_code ?? ""} ${data.phone}`.trim();
}

function createMessage(data: ContactPayload) {
  const rows = [
    ["Форма", data.form_name ?? "Заявка с сайта"],
    ["Имя", data.name],
    ["Телефон", formatPhone(data)],
    ["Email", data.email || "Не указан"],
    ["Услуга", data.service || "Не указана"],
    ["Связаться через", data.contact_method === "call" ? "Звонок" : "Мессенджер"],
    ["Сообщение", data.message || "Без сообщения"],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #ececec;color:#666;font-weight:700;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #ececec;color:#111;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  return {
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
        <h2 style="margin:0 0 16px;font-size:22px;">Новая заявка с сайта NovaCreator Studio</h2>
        <table style="border-collapse:collapse;width:100%;max-width:720px;border:1px solid #ececec;border-radius:12px;overflow:hidden;">
          ${htmlRows}
        </table>
      </div>
    `,
    text,
  };
}

export async function POST(request: NextRequest) {
  const jsonResponse = wantsJson(request);

  try {
    const body = await parseRequestBody(request);
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      if (jsonResponse) {
        return NextResponse.json(
          { error: "Проверьте поля формы и попробуйте снова." },
          { status: 400 },
        );
      }

      return redirectBack(request, "error");
    }

    if (parsed.data.website) {
      if (jsonResponse) {
        return NextResponse.json({ ok: true });
      }

      return redirectBack(request, "success");
    }

    const transporter = createTransport();
    const message = createMessage(parsed.data);
    const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
    const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;

    await transporter.verify();
    await transporter.sendMail({
      from: `"NovaCreator Studio" <${fromEmail}>`,
      html: message.html,
      replyTo: parsed.data.email || undefined,
      subject: `Новая заявка: ${parsed.data.name}`,
      text: message.text,
      to: toEmail,
    });

    if (jsonResponse) {
      return NextResponse.json({ ok: true });
    }

    return redirectBack(request, "success");
  } catch (error) {
    console.error("Contact form send failed:", error);

    if (jsonResponse) {
      if (error instanceof ContactConfigurationError) {
        return NextResponse.json(
          {
            code: "EMAIL_NOT_CONFIGURED",
            error:
              process.env.NODE_ENV === "production"
                ? "Email delivery is not configured on the server."
                : "Почта не настроена: добавьте SMTP_HOST, SMTP_USER и SMTP_PASS в .env.local и перезапустите сервер.",
          },
          { status: 503 },
        );
      }

      return NextResponse.json(
        { error: "Не удалось отправить заявку. Попробуйте еще раз или напишите нам напрямую." },
        { status: 500 },
      );
    }

    return redirectBack(request, "error");
  }
}
