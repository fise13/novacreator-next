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
    <section className="relative overflow-hidden px-4 py-20 text-black dark:text-white">
      <div className="absolute inset-x-0 top-1/2 h-px bg-black/10 dark:bg-white/10" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <div data-gsap="clip" className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-bold text-black/60 backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:text-white/60">
            <Sparkles className="h-4 w-4 text-[#ff5a45]" />
            {isEn ? "Growth system" : "Система роста"}
          </div>
          <h2 className="mt-5 font-radio text-5xl font-black leading-[0.92] tracking-[-0.08em] sm:text-7xl">
            {isEn ? "From first click to a real request" : "От первого клика до заявки"}
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-black/58 dark:text-white/55">
            {isEn
              ? "We connect positioning, website structure, traffic and analytics into one clear path, so the page does not just look good but helps people take action."
              : "Мы связываем упаковку, структуру сайта, трафик и аналитику в один понятный путь, чтобы страница не просто выглядела хорошо, а помогала человеку оставить заявку."}
          </p>
        </div>

        <div className="relative min-h-[420px] rounded-[2.4rem] border border-black/10 bg-white/60 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
          <div className="absolute left-1/2 top-8 h-[340px] w-px -translate-x-1/2 bg-black/10 dark:bg-white/10" />
          <div data-gsap-speed="0.62" className="absolute left-8 top-8 rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white dark:bg-white dark:text-black">
            {isEn ? "Full funnel" : "Полная воронка"}
          </div>
          <div data-gsap-speed="1.42" className="absolute bottom-8 right-8 grid h-16 w-16 place-items-center rounded-full bg-[#ff5a45] text-white">
            <ArrowDown className="h-6 w-6" />
          </div>

          {layers.map((item, index) => (
            <article
              key={item.labelEn}
              data-gsap-speed={item.speed}
              className={`absolute w-[min(250px,72vw)] rounded-[1.6rem] border border-black/10 bg-[#f7f4ed] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#0b0d13] ${
                index === 0
                  ? "left-6 top-24"
                  : index === 1
                    ? "right-6 top-28"
                    : index === 2
                      ? "bottom-24 left-14"
                      : "bottom-20 right-16"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff5a45]">
                {isEn ? item.labelEn : item.labelRu}
              </p>
              <p className="mt-3 font-radio text-3xl font-black tracking-[-0.07em]">
                {isEn ? item.valueEn : item.valueRu}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
