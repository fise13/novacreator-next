"use client";

import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { HomeContent } from "./home-content";

const phoneRegions = [
  { label: "KZ +7", value: "+7" },
  { label: "RU +7", value: "+7" },
  { label: "US +1", value: "+1" },
  { label: "UK +44", value: "+44" },
  { label: "TR +90", value: "+90" },
  { label: "UAE +971", value: "+971" },
  { label: "UZ +998", value: "+998" },
  { label: "KG +996", value: "+996" },
  { label: "DE +49", value: "+49" },
  { label: "CN +86", value: "+86" },
] as const;

const numericKeys = new Set([
  "Backspace",
  "Delete",
  "Tab",
  "Escape",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
]);

export function FinalCta({
  content,
  variant = "home",
}: {
  content: HomeContent;
  variant?: "home" | "page";
}) {
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const isEn = content.contact.eyebrow === "Contact";
  const phone = content.contact.channels[0];
  const email = content.contact.channels[1];
  const whatsapp = content.contact.channels[2];
  const telegram = content.contact.channels[3];
  const isSending = submitState === "sending";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const countryCode = String(formData.get("country_code") ?? "").trim();
    const phoneNumber = String(formData.get("phone") ?? "").trim();

    formData.set("phone_full", `${countryCode} ${phoneNumber}`.trim());
    setSubmitState("sending");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        body: formData,
        headers: {
          Accept: "application/json",
        },
        method: "POST",
      });
      const result = await response.json().catch(() => null) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || "Contact form request failed");
      }

      form.reset();
      setSubmitState("success");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "");
      setSubmitState("error");
    }
  };

  return (
    <section id="contact-form" className={`relative overflow-hidden px-3 text-black dark:text-white sm:px-4 ${variant === "page" ? "pb-20 pt-4 sm:pb-24 sm:pt-6" : "py-14 sm:py-20"}`}>
      <div className="mx-auto max-w-7xl">
        <h2 data-gsap="clip" className="font-radio text-[3.25rem] font-black leading-[0.94] tracking-[-0.09em] min-[380px]:text-[3.75rem] sm:text-[6.8rem] lg:text-[8rem]">
          {isEn ? "So, shall we start?" : "Ну что, работаем?"}
        </h2>

        <div className="mt-7 grid gap-7 sm:mt-8 lg:grid-cols-[0.32fr_0.12fr_0.56fr] lg:items-start">
          <aside data-gsap="slide-stack" className="space-y-6 sm:space-y-7">
            <div>
              <p className="text-xl font-bold tracking-[-0.04em]">
                {isEn ? "Our phone" : "Наш телефон"}
              </p>
              <a href={phone.href} className="mt-2 inline-flex text-xl font-black tracking-[-0.05em] text-[#ff7b6f] sm:text-2xl">
                {phone.value}
              </a>
            </div>

            <div>
              <p className="text-xl font-bold tracking-[-0.04em]">
                {isEn ? "Write us" : "Написать — можно!"}
              </p>
              <div className="mt-3 grid gap-2 text-lg font-black tracking-[-0.04em] text-[#ff7b6f] sm:text-xl">
                <a href={whatsapp.href} className="inline-flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a href={telegram.href} className="inline-flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Telegram
                </a>
                <a href={email.href} className="inline-flex items-center gap-2 text-base tracking-[-0.02em]">
                  <Mail className="h-5 w-5" />
                  {email.value}
                </a>
              </div>
            </div>

            <div>
              <p className="inline-flex items-center gap-2 text-base font-semibold">
                <MapPin className="h-4 w-4 text-[#ff7b6f]" />
                {isEn ? "Almaty, Kazakhstan" : "Алматы, Казахстан"}
              </p>
              <a
                href={telegram.href}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-black/25 px-4 py-3 text-sm font-bold transition hover:border-[#ff7b6f] hover:text-[#ff7b6f] dark:border-white/25"
              >
                <MapPin className="h-4 w-4" />
                {isEn ? "Open contact" : "Открыть контакт"}
              </a>
            </div>
          </aside>

          <div data-gsap="draw-line" className="hidden lg:block">
            <div className="relative mx-auto mt-2 h-28 w-24">
              <svg
                viewBox="0 0 96 112"
                fill="none"
                className="h-full w-full text-black/64 dark:text-white/90"
                aria-hidden="true"
              >
                <path
                  d="M18 4C14 34 19 58 34 70C46 79.6 65 77 80 91M80 91L66 90M80 91L78 77"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <form
            action="/api/contact"
            data-gsap="soft-scale"
            method="post"
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[1.25rem] border border-black/10 bg-[#dcf5df] p-4 text-black shadow-[0_18px_70px_rgba(0,0,0,0.08)] dark:!border-white/12 dark:!bg-[#0d1513] dark:!text-white dark:shadow-[0_22px_80px_rgba(0,0,0,0.35)] sm:p-7"
          >
            <h3 className="text-2xl font-black tracking-[-0.05em] text-black dark:!text-white">
              {isEn ? "Leave a request" : "Оставить заявку"}
            </h3>

            <input type="hidden" name="type" value="contact" />
            <input type="hidden" name="form_name" value="Compact Contact Form" />
            <input type="hidden" name="phone_full" value="" />
            <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-label={content.contact.fields.honeypot} />

            <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4">
              <input
                name="name"
                required
                minLength={2}
                placeholder={content.contact.fields.namePlaceholder}
                className="h-12 rounded-xl border border-black/20 bg-white px-4 text-base text-black outline-none transition placeholder:text-black/66 focus:border-[#ff7b6f] focus:ring-4 focus:ring-[#ff7b6f]/20 dark:!border-white/15 dark:!bg-[#1a2723] dark:!text-white dark:placeholder:!text-white/80"
              />

              <div className="grid grid-cols-[128px_1fr] gap-2 sm:grid-cols-[154px_1fr] sm:gap-3">
                <label className="relative block">
                  <span className="sr-only">{isEn ? "Region" : "Регион"}</span>
                  <select
                    name="country_code"
                    defaultValue="+7"
                    className="h-12 w-full appearance-none rounded-xl border border-black/15 bg-white px-3 pr-7 text-sm font-black text-black outline-none transition focus:border-[#ff7b6f] focus:ring-4 focus:ring-[#ff7b6f]/20 dark:!border-white/15 dark:!bg-[#1a2723] dark:!text-white dark:[color-scheme:dark]"
                  >
                    {phoneRegions.map((region) => (
                      <option key={region.label} value={region.value}>
                        {region.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-black/66 dark:text-white/90">
                    ▾
                  </span>
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{5,15}"
                  maxLength={15}
                  autoComplete="tel-national"
                  placeholder={isEn ? "Phone number" : "Номер телефона"}
                  onKeyDown={(event) => {
                    if (
                      numericKeys.has(event.key) ||
                      event.metaKey ||
                      event.ctrlKey
                    ) {
                      return;
                    }

                    if (!/^\d$/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onInput={(event) => {
                    event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "");
                  }}
                  className="h-12 rounded-xl border border-black/20 bg-white px-4 text-base font-semibold text-black outline-none transition placeholder:text-black/66 focus:border-[#ff7b6f] focus:ring-4 focus:ring-[#ff7b6f]/20 dark:!border-white/15 dark:!bg-[#1a2723] dark:!text-white dark:placeholder:!text-white/80"
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-[1fr_0.8fr] sm:items-center">
                <div className="grid gap-1 text-sm font-bold text-black/75 dark:!text-[#dce5e0]">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="contact_method" value="messenger" defaultChecked className="accent-[#ff7b6f]" />
                    {content.contact.fields.messenger}
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="contact_method" value="call" className="accent-[#ff7b6f]" />
                    {content.contact.fields.call}
                  </label>
                </div>
                <button
                  disabled={isSending}
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff7b6f] px-6 text-base font-bold text-white transition hover:bg-[#ff5a45] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? (isEn ? "Sending..." : "Отправляем...") : isEn ? "Send" : "Отправить"}
                </button>
              </div>
              {submitState === "success" && (
                <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-700 dark:text-emerald-200">
                  {isEn ? "Request sent. We will contact you soon." : "Заявка отправлена. Скоро свяжемся с вами."}
                </p>
              )}
              {submitState === "error" && (
                <p className="rounded-xl border border-[#ff5a45]/25 bg-[#ff5a45]/10 px-4 py-3 text-sm font-bold text-[#d63d2a] dark:text-[#ffb0a6]">
                  {submitError || (isEn ? "Could not send the request. Please try again or write to us directly." : "Не удалось отправить заявку. Попробуйте еще раз или напишите нам напрямую.")}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
