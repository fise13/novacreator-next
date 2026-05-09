"use client";

import { BarChart3, Rocket, Search, Sparkles } from "lucide-react";
import type { HomeContent } from "./home-content";

const processIcons = [Search, Sparkles, Rocket, BarChart3];

export function ProcessTimeline({ content }: { content: HomeContent }) {
  return (
    <section id="system" className="px-3 py-14 text-black dark:text-white sm:px-4 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div data-gsap="reveal" className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff5a45]">
            {content.process.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-radio text-4xl font-black leading-[0.98] tracking-[-0.07em] sm:text-6xl">
            {content.process.title}
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {content.process.steps.map(([number, title, body], index) => {
            const Icon = processIcons[index] ?? Sparkles;

            return (
            <article
              key={number}
              data-gsap="reveal"
              data-gsap-tilt
              className="relative overflow-hidden rounded-[1.35rem] border border-black/10 bg-white/70 p-5 text-black shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:border-white/12 dark:bg-[#171a22] dark:text-white sm:rounded-[1.5rem]"
            >
              <div className="flex items-center justify-between">
                <span className="font-geist text-xs font-bold text-black/66 dark:text-white/90">{number}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffebe6] text-[#ff5a45] dark:bg-white/[0.08]">
                  <Icon className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-[-0.04em] sm:mt-8">{title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-black/60 dark:text-white/90">{body}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
