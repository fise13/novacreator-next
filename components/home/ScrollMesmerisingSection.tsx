"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import type { HomeLocale } from "./home-content";

const layers = [
  { labelRu: "Аудит", labelEn: "Audit", valueRu: "точка роста", valueEn: "growth point", speed: 0.72 },
  { labelRu: "Упаковка", labelEn: "Packaging", valueRu: "ясный оффер", valueEn: "clear offer", speed: 1.18 },
  { labelRu: "Запуск", labelEn: "Launch", valueRu: "сайт + трафик", valueEn: "site + traffic", speed: 0.86 },
  { labelRu: "Рост", labelEn: "Growth", valueRu: "аналитика", valueEn: "analytics", speed: 1.34 },
];

export function ScrollMesmerisingSection({ locale }: { locale: HomeLocale }) {
  const isEn = locale === "en";

  return (
    <section className="relative overflow-hidden px-3 py-14 text-black dark:text-white sm:px-4 sm:py-20">
      <div className="absolute inset-x-0 top-1/2 h-px bg-black/10 dark:bg-white/10" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <div data-gsap="clip" className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-bold text-black/60 backdrop-blur dark:border-white/10 dark:bg-[#171a22] dark:text-white/90 sm:text-sm">
            <Sparkles className="h-4 w-4 text-[#ff5a45]" />
            {isEn ? "Growth system" : "Система роста"}
          </div>
          <h2 className="mt-5 font-radio text-4xl font-black leading-[0.95] tracking-[-0.08em] min-[380px]:text-5xl sm:text-7xl">
            {isEn ? "From first click to a real request" : "От первого клика до заявки"}
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-black/66 dark:text-white/90 sm:mt-5 sm:text-lg sm:leading-8">
            {isEn
              ? "We connect positioning, website structure, traffic and analytics into one clear path, so the page does not just look good but helps people take action."
              : "Мы связываем упаковку, структуру сайта, трафик и аналитику в один понятный путь, чтобы страница не просто выглядела хорошо, а помогала человеку оставить заявку."}
          </p>
        </div>

        <div className="relative grid gap-3 rounded-[1.8rem] border border-black/10 bg-white/60 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.06)] backdrop-blur dark:border-white/10 dark:bg-[#171a22] sm:min-h-[420px] sm:rounded-[2.4rem] sm:p-5">
          <div className="absolute left-1/2 top-8 hidden h-[340px] w-px -translate-x-1/2 bg-black/10 dark:bg-white/10 sm:block" />
          <div data-gsap-speed="0.62" className="relative w-fit rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white dark:bg-[#ffebe6] dark:text-[#ff5a45] sm:absolute sm:left-8 sm:top-8">
            {isEn ? "Full funnel" : "Полная воронка"}
          </div>
          <div data-gsap-speed="1.42" className="hidden h-16 w-16 place-items-center rounded-full bg-[#ff5a45] text-white sm:absolute sm:bottom-8 sm:right-8 sm:grid">
            <ArrowDown className="h-6 w-6" />
          </div>

          {layers.map((item, index) => (
            <article
              key={item.labelEn}
              data-gsap-speed={item.speed}
              className={`relative rounded-[1.25rem] border border-black/10 bg-[#f7f4ed] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#0b0d13] sm:absolute sm:w-[min(250px,72vw)] sm:rounded-[1.6rem] sm:p-5 ${
                index === 0
                  ? "sm:left-6 sm:top-24"
                  : index === 1
                    ? "sm:right-6 sm:top-28"
                    : index === 2
                      ? "sm:bottom-24 sm:left-14"
                      : "sm:bottom-20 sm:right-16"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff5a45]">
                {isEn ? item.labelEn : item.labelRu}
              </p>
              <p className="mt-2 font-radio text-2xl font-black tracking-[-0.07em] sm:mt-3 sm:text-3xl">
                {isEn ? item.valueEn : item.valueRu}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
