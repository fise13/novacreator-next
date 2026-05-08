"use client";

import { BarChart3, Rocket, Search, Sparkles } from "lucide-react";
import type { HomeContent } from "./home-content";

const processIcons = [Search, Sparkles, Rocket, BarChart3];

export function ProcessTimeline({ content }: { content: HomeContent }) {
  return (
    <section id="system" className="px-4 py-20 text-black dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div data-gsap="reveal" className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff5a45]">
            {content.process.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-radio text-4xl font-black tracking-[-0.07em] sm:text-6xl">
            {content.process.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.process.steps.map(([number, title, body], index) => {
            const Icon = processIcons[index] ?? Sparkles;

            return (
            <article
              key={number}
              data-gsap="reveal"
              data-gsap-tilt
              className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/70 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="font-geist text-xs text-black/35 dark:text-white/35">{number}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffebe6] text-[#ff5a45] dark:bg-white/[0.08]">
                  <Icon className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold tracking-[-0.04em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/55 dark:text-white/55">{body}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
