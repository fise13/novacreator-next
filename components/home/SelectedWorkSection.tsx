"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { HomeContent, HomeLocale } from "./home-content";
import { MotorLandPreview } from "./MotorLandPreview";

export function SelectedWorkSection({
  content,
  locale,
}: {
  content: HomeContent;
  locale: HomeLocale;
}) {
  const localizedHref = (href: string) =>
    locale === "en" && href.startsWith("/") ? `/en${href}` : href;

  return (
    <section id="work" className="relative overflow-hidden px-3 py-14 text-black dark:text-white sm:px-4 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div data-gsap="reveal" className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff5a45]">
              {content.work.eyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl text-balance font-radio text-4xl font-black leading-[0.98] tracking-[-0.07em] sm:text-6xl">
              {content.work.title}
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-base font-medium leading-7 text-black/60 dark:text-white/90">{content.work.subtitle}</p>
            <Link
              href={localizedHref("/portfolio")}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {content.work.viewAll}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4">
          {content.work.items.map((item, index) => (
            <Link
              key={item.title}
              href={localizedHref(item.href)}
              data-gsap="reveal"
              data-gsap-tilt
              className="group grid overflow-hidden rounded-[1.55rem] border border-black/10 bg-white/80 text-black shadow-[0_18px_70px_rgba(0,0,0,0.05)] transition duration-500 hover:-translate-y-1 dark:border-white/12 dark:bg-[#171a22] dark:text-white sm:rounded-[2rem] lg:grid-cols-[0.95fr_1.25fr]"
            >
              <div className="flex min-h-[235px] flex-col justify-between p-5 sm:min-h-64 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="max-w-[75%] truncate rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-black/64 dark:border-white/12 dark:bg-white/[0.08] dark:text-white/90 sm:tracking-[0.2em]">
                    {item.industry}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-black/20 bg-white transition group-hover:bg-black group-hover:text-white dark:border-white/20 dark:bg-transparent dark:group-hover:bg-white dark:group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div>
                  <p className="font-geist text-xs font-bold text-black/66 dark:text-white/90">0{index + 1}</p>
                  <h3 className="mt-3 text-3xl font-black leading-none tracking-[-0.06em] sm:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base font-semibold leading-7 text-black/60 dark:text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="relative min-h-56 overflow-hidden bg-[#f1efe8] p-3 dark:bg-[#10131a] sm:min-h-72 sm:p-5">
                {item.href.includes("motor-land") ? (
                  <MotorLandPreview compact />
                ) : (
                  <div className="h-full rounded-[1.35rem] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#07080b]">
                    <div className="flex h-10 items-center gap-2 border-b border-black/10 px-4 dark:border-white/10">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5a45]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f5c542]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#41c777]" />
                      <span className="ml-3 h-4 flex-1 rounded-full bg-black/[0.04] dark:bg-white/[0.08]" />
                    </div>
                    <div className="grid gap-4 p-4">
                      <div className="h-24 rounded-2xl bg-gradient-to-br from-[#ffcabd] to-[#e6f6dc] dark:from-[#4d241f] dark:to-[#122118]" />
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-16 rounded-xl bg-black/[0.05] dark:bg-white/[0.08]" />
                        <div className="h-16 rounded-xl bg-black/[0.05] dark:bg-white/[0.08]" />
                        <div className="h-16 rounded-xl bg-black/[0.05] dark:bg-white/[0.08]" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-3/4 rounded-full bg-black/10 dark:bg-white/10" />
                        <div className="h-3 w-1/2 rounded-full bg-black/10 dark:bg-white/10" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
