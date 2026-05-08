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
    <section id="services" className="px-4 py-20 text-black dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div data-gsap="reveal" className="grid gap-3 md:grid-cols-3">
          {content.outcomes.items.map((item) => (
            <article
              key={item.title}
              data-gsap-tilt
              className="rounded-[1.5rem] border border-black/10 bg-white/65 p-5 shadow-[0_12px_38px_rgba(0,0,0,0.04)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
            >
              <h3 className="text-xl font-bold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/58 dark:text-white/55">{item.description}</p>
            </article>
          ))}
        </div>

        <div data-gsap="reveal" className="mt-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff5a45]">
              {content.services.eyebrow}
            </p>
            <h2 className="mt-3 max-w-4xl text-balance font-radio text-4xl font-black tracking-[-0.07em] sm:text-6xl">
              {content.services.title}
            </h2>
          </div>
          <p className="max-w-sm text-base font-medium leading-7 text-black/60 dark:text-white/55">
            {content.services.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {content.services.items.map((item, index) => (
            <Link
              key={item.title}
              href={localizedHref(item.href)}
              data-gsap="reveal"
              data-gsap-tilt
              className="group relative min-h-60 overflow-hidden rounded-[1.65rem] border border-black/10 bg-white p-6 shadow-[0_16px_54px_rgba(0,0,0,0.05)] transition duration-500 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#ff5a45] opacity-0 transition group-hover:opacity-100" />
              <span className="font-geist text-xs text-black/35 dark:text-white/35">
                0{index + 1}
              </span>
              <div className="relative mt-14">
                <h3 className="text-3xl font-black tracking-[-0.06em]">{item.title}</h3>
                <p className="mt-3 text-base font-medium leading-6 text-black/58 dark:text-white/55">
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
