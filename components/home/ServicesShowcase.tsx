"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { HomeContent, HomeLocale } from "./home-content";

export function ServicesShowcase({
  content,
  locale,
}: {
  content: HomeContent;
  locale: HomeLocale;
}) {
  const localizedHref = (href: string) =>
    locale === "en" && href.startsWith("/") ? `/en${href}` : href;

  return (
    <section id="services" className="px-3 py-14 text-black dark:text-white sm:px-4 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div data-gsap="reveal" className="grid gap-3 md:grid-cols-3">
          {content.outcomes.items.map((item) => (
            <article
              key={item.title}
              data-gsap-tilt
              className="rounded-[1.5rem] border border-black/10 bg-white/65 p-5 text-black shadow-[0_12px_38px_rgba(0,0,0,0.04)] backdrop-blur dark:border-white/12 dark:bg-[#171a22] dark:text-white"
            >
              <h3 className="text-xl font-bold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-black/60 dark:text-white/90">{item.description}</p>
            </article>
          ))}
        </div>

        <div data-gsap="reveal" className="mt-14 flex flex-col justify-between gap-5 sm:mt-20 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff5a45]">
              {content.services.eyebrow}
            </p>
            <h2 className="mt-3 max-w-4xl text-balance font-radio text-4xl font-black leading-[0.98] tracking-[-0.07em] sm:text-6xl">
              {content.services.title}
            </h2>
          </div>
          <p className="max-w-sm text-base font-medium leading-7 text-black/60 dark:text-white/90">
            {content.services.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-3">
          {content.services.items.map((item, index) => (
            <Link
              key={item.title}
              href={localizedHref(item.href)}
              data-gsap="reveal"
              data-gsap-tilt
              className="group relative min-h-[210px] overflow-hidden rounded-[1.45rem] border border-black/10 bg-white p-5 text-black shadow-[0_16px_54px_rgba(0,0,0,0.05)] transition duration-500 hover:-translate-y-1 dark:border-white/12 dark:bg-[#171a22] dark:text-white sm:min-h-60 sm:rounded-[1.65rem] sm:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#ff5a45] opacity-0 transition group-hover:opacity-100" />
              <span className="font-geist text-xs font-bold text-black/66 dark:text-white/90">
                0{index + 1}
              </span>
              <div className="relative mt-11 sm:mt-14">
                <h3 className="text-2xl font-black tracking-[-0.06em] sm:text-3xl">{item.title}</h3>
                <p className="mt-3 text-base font-semibold leading-6 text-black/60 dark:text-white/90">
                  {item.description}
                </p>
              </div>
              <span className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-black/30 transition group-hover:bg-black group-hover:text-white dark:border-white/30 dark:group-hover:bg-white dark:group-hover:text-black">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
