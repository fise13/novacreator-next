"use client";

import { ArrowRight, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import type { HomeContent } from "./home-content";

export function FinalCta({
  content,
  variant = "home",
}: {
  content: HomeContent;
  variant?: "home" | "page";
}) {
  const isEn = content.contact.eyebrow === "Contact";
  const phone = content.contact.channels[0];
  const email = content.contact.channels[1];
  const whatsapp = content.contact.channels[2];
  const telegram = content.contact.channels[3];

  return (
    <section id="contact-form" className={`relative overflow-hidden px-4 text-black dark:text-white ${variant === "page" ? "pb-24 pt-6" : "py-20"}`}>
      <div className="mx-auto max-w-7xl">
        <h2 data-gsap="clip" className="font-radio text-[4.4rem] font-black leading-[0.92] tracking-[-0.09em] sm:text-[6.8rem] lg:text-[8rem]">
          {isEn ? "So, shall we start?" : "Ну что, работаем?"}
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.32fr_0.12fr_0.56fr] lg:items-start">
          <aside data-gsap="slide-stack" className="space-y-7">
            <div>
              <p className="text-xl font-bold tracking-[-0.04em]">
                {isEn ? "Our phone" : "Наш телефон"}
              </p>
              <a href={phone.href} className="mt-2 inline-flex text-2xl font-black tracking-[-0.05em] text-[#ff7b6f]">
                {phone.value}
              </a>
            </div>

            <div>
              <p className="text-xl font-bold tracking-[-0.04em]">
                {isEn ? "Write us" : "Написать — можно!"}
              </p>
              <div className="mt-3 grid gap-2 text-xl font-black tracking-[-0.04em] text-[#ff7b6f]">
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
              <div className="absolute left-2 top-0 h-20 w-16 rounded-bl-[4rem] border-b border-l border-black/50 dark:border-white/50" />
              <ArrowRight className="absolute bottom-1 right-1 h-7 w-7 rotate-45 text-black/70 dark:text-white/70" />
            </div>
          </div>

          <form
            data-gsap="soft-scale"
            className="relative overflow-hidden rounded-[1.25rem] bg-[#dcf5df] p-5 dark:bg-[#102018] sm:p-7"
          >
            <h3 className="text-2xl font-black tracking-[-0.05em]">
              {isEn ? "Leave a request" : "Оставить заявку"}
            </h3>

            <input type="hidden" name="type" value="contact" />
            <input type="hidden" name="form_name" value="Compact Contact Form" />
            <input type="hidden" name="phone_full" value="" />
            <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-label={content.contact.fields.honeypot} />

            <div className="mt-6 grid gap-4">
              <input
                name="name"
                required
                minLength={2}
                placeholder={content.contact.fields.namePlaceholder}
                className="h-12 rounded-xl border border-black/45 bg-white px-4 text-base text-black outline-none transition placeholder:text-black/35 focus:ring-4 focus:ring-[#ff7b6f]/20"
              />

              <div className="grid gap-3 sm:grid-cols-[0.24fr_0.76fr]">
                <select
                  name="country_code"
                  defaultValue="+7"
                  className="h-12 rounded-xl border border-black/45 bg-white px-3 text-base text-black outline-none transition focus:ring-4 focus:ring-[#ff7b6f]/20"
                >
                  <option value="+7">🇰🇿</option>
                  <option value="+7">🇷🇺</option>
                  <option value="+1">🇺🇸</option>
                  <option value="+44">🇬🇧</option>
                </select>
                <input
                  name="phone"
                  required
                  type="tel"
                  inputMode="tel"
                  pattern="^\\+?[0-9\\s\\-()]{7,15}$"
                  placeholder="+7 (000) 000-00-00"
                  className="h-12 rounded-xl border border-black/45 bg-white px-4 text-base text-black outline-none transition placeholder:text-black/35 focus:ring-4 focus:ring-[#ff7b6f]/20"
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-[1fr_0.8fr] sm:items-center">
                <div className="grid gap-1 text-sm font-semibold text-black/80">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="contact_method" value="messenger" defaultChecked />
                    {content.contact.fields.messenger}
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="contact_method" value="call" />
                    {content.contact.fields.call}
                  </label>
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff7b6f] px-6 text-base font-bold text-white transition hover:bg-[#ff5a45]"
                >
                  {isEn ? "Send" : "Отправить"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
