"use client";

import { ArrowUpRight, BarChart3, Code2, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import type { HomeContent, HomeLocale } from "./home-content";

const floatingIcons = [Search, Code2, BarChart3];
const launchSteps = [
  { number: "01", ru: "Аудит", en: "Audit" },
  { number: "02", ru: "Структура", en: "Structure" },
  { number: "03", ru: "Дизайн", en: "Design" },
  { number: "04", ru: "Запуск", en: "Launch" },
];

export function CinematicHero({
  content,
  locale,
}: {
  content: HomeContent;
  locale: HomeLocale;
}) {
  const servicesHref = locale === "en" ? "/en/services" : "/services";

  return (
    <section className="relative overflow-hidden px-3 pb-14 pt-28 text-black dark:text-white sm:px-4 sm:pb-20 sm:pt-40 lg:min-h-[125vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,90,69,0.14),transparent_30%),radial-gradient(circle_at_90%_12%,rgba(37,99,235,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.6),transparent_42%)] dark:bg-[radial-gradient(circle_at_18%_12%,rgba(255,90,69,0.16),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(0,194,255,0.12),transparent_30%)]" />
      <div data-gsap-parallax data-depth="34" className="pointer-events-none absolute left-[8%] top-36 h-24 w-24 rounded-full border border-[#ff5a45]/20 bg-[#ff5a45]/10 blur-sm" />
      <div data-gsap-parallax data-depth="-46" className="pointer-events-none absolute right-[10%] top-28 h-36 w-36 rounded-full border border-black/10 bg-white/35 blur-md dark:border-white/10 dark:bg-[#171a22]" />
      <div data-gsap-parallax data-depth="58" className="pointer-events-none absolute bottom-12 left-[44%] h-20 w-20 rounded-[2rem] border border-black/10 bg-[#dcf5df]/60 blur-[1px] dark:border-white/10 dark:bg-[#143121]/50" />
      <div className="absolute inset-x-6 top-24 h-px bg-black/10 dark:bg-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div data-gsap="hero-fade" className="mb-7 flex flex-col items-start justify-between gap-3 sm:mb-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2.5 text-xs font-semibold shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#171a22] sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
            <Sparkles className="h-4 w-4" />
            {content.hero.eyebrow}
          </div>
          <div className="max-w-full rounded-full border border-black/10 bg-white/80 px-4 py-2.5 text-xs font-medium shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#171a22] sm:px-6 sm:py-3 sm:text-sm">
            {content.hero.trustLine}
          </div>
        </div>

        <div data-gsap-pin-wrap className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <h1 className="max-w-5xl overflow-hidden font-radio text-[3.25rem] font-black leading-[0.9] tracking-[-0.08em] min-[380px]:text-[3.65rem] sm:text-[6.6rem] lg:text-[7.4rem] xl:text-[8.7rem]">
              <span className="block overflow-hidden pb-3">
                <span data-gsap="hero-line" className="block">
                  {content.hero.headline.first}
                </span>
              </span>
              <span className="block overflow-hidden pb-4">
                <span data-gsap="hero-line" className="block text-black/62 dark:text-white/90">
                  {content.hero.headline.second}
                </span>
              </span>
            </h1>

            <div data-gsap="hero-fade" className="mt-6 max-w-3xl">
              <p className="text-balance text-lg font-medium leading-tight tracking-[-0.03em] text-black/75 dark:text-white/90 sm:text-3xl">
                {content.hero.descriptions[0]}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-black/64 dark:text-white/90 sm:mt-5 sm:text-base sm:leading-7">
                {content.hero.note}
              </p>
            </div>

            <div data-gsap="hero-fade" className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href="#contact-form"
                data-gsap-magnetic
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#ff3d2e] px-6 py-4 text-base font-bold text-white shadow-[0_18px_40px_rgba(255,61,46,0.24)] transition hover:-translate-y-1"
              >
                {content.hero.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href={servicesHref}
                data-gsap-magnetic
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-black/20 px-6 py-4 text-base font-bold text-black transition hover:-translate-y-1 hover:border-black dark:border-white/20 dark:text-white dark:hover:border-white"
              >
                {content.hero.secondaryCta}
              </Link>
            </div>

            <div data-gsap="hero-fade" className="mt-7 grid max-w-2xl grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-9">
              {content.hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/10 bg-white/70 p-4 text-black backdrop-blur dark:border-white/12 dark:bg-[#171a22] dark:text-white">
                  <p
                    className="text-2xl font-black tracking-[-0.05em]"
                    data-gsap-counter={Number.parseInt(stat.value, 10) ? Number.parseInt(stat.value, 10) : undefined}
                    data-counter-suffix={stat.value.replace(String(Number.parseInt(stat.value, 10)), "")}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-tight text-black/62 dark:text-white/90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-gsap="hero-fade" data-gsap-pin-sidebar data-pin-start="top 118px" data-pin-end="+=560" className="relative">
            <div className="rounded-[1.65rem] border border-black/10 bg-white/80 p-2.5 shadow-[0_28px_90px_rgba(0,0,0,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-[#171a22] sm:rounded-[2rem] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.35rem] border border-black/10 bg-[#f7f4ed] p-4 dark:border-white/10 dark:bg-[#0b0d13] sm:rounded-[1.5rem] sm:p-6">
                <div data-gsap-speed="0.82" className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#ff5a45]/15 blur-3xl" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/66 dark:text-white/90">
                        {locale === "en" ? "Launch map" : "Карта запуска"}
                      </p>
                      <h2 className="mt-2 max-w-sm font-radio text-3xl font-black leading-none tracking-[-0.08em] sm:text-4xl">
                        {locale === "en" ? "One path from idea to request" : "Один путь от идеи до заявки"}
                      </h2>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-black text-white dark:bg-[#ffebe6] dark:text-[#ff5a45]">
                      <Sparkles className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {launchSteps.map((step, index) => (
                      <div
                        key={step.number}
                        data-gsap-speed={index % 2 === 0 ? "0.94" : "1.08"}
                        className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-2xl bg-white p-3 text-black dark:bg-[#171a22] dark:text-white sm:grid-cols-[auto_1fr_auto]"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffebe6] text-xs font-black text-[#ff5a45] dark:bg-white/[0.08]">
                          {step.number}
                        </span>
                        <span>
                          <span className="block text-sm font-black tracking-[-0.04em]">
                            {locale === "en" ? step.en : step.ru}
                          </span>
                          <span className="mt-1 block text-xs font-semibold text-black/66 dark:text-white/90">
                            {content.process.steps[index]?.[2]}
                          </span>
                        </span>
                        <span className="hidden h-px w-10 bg-black/15 dark:bg-white/15 sm:block" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2 min-[420px]:grid-cols-3">
                    {content.hero.floating.map((card, index) => {
                      const Icon = floatingIcons[index] ?? Sparkles;

                      return (
                        <div key={card.label} className="rounded-2xl border border-black/10 bg-white/70 p-3 text-black dark:border-white/12 dark:bg-[#171a22] dark:text-white">
                          <Icon className="h-4 w-4 text-[#ff5a45]" />
                          <p className="mt-5 text-[11px] font-semibold leading-tight text-black/66 dark:text-white/90">{card.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 rounded-2xl bg-black p-4 text-white dark:bg-[#161a22] dark:text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/82">
                      {locale === "en" ? "Next action" : "Следующий шаг"}
                    </p>
                    <p className="mt-2 text-xl font-black tracking-[-0.05em]">
                      {locale === "en" ? "Understand the funnel first" : "Сначала понять воронку"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
