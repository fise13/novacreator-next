import type { Metadata } from "next";
import { ArrowUpRight, BarChart3, Bot, Layers3, Sparkles } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { PremiumTabs, type PremiumTabItem } from "@/components/ui/PremiumTabs";
import { createSeoMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return createSeoMetadata({
    locale,
    path: "/tabs",
    title: "Premium Tabs",
    description: "A polished Framer Motion tab navigation and content transition system.",
    noIndex: true,
  });
}

const tabItems: PremiumTabItem[] = [
  {
    value: "overview",
    label: "Overview",
    content: (
      <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_0.82fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-black/66 dark:border-white/10 dark:bg-[#171a22] dark:text-white/90">
            <Sparkles className="h-3.5 w-3.5 text-[#ff5a45]" />
            Executive layer
          </div>
          <h2 className="mt-5 max-w-2xl font-radio text-4xl font-black leading-[0.95] tracking-[-0.07em] text-black dark:text-white sm:text-6xl">
            One command center for every growth signal.
          </h2>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-black/66 dark:text-white/90">
            A quiet overview for teams that need clarity: campaigns, product work, SEO movement and lead quality in one calm interface.
          </p>
        </div>
        <div className="rounded-[1.4rem] border border-black/10 bg-[#f7f4ed] p-4 dark:border-white/10 dark:bg-[#171a22]">
          <div className="grid gap-3">
            {["Pipeline health", "Organic lift", "Creative velocity"].map((item, index) => (
              <div key={item} className="rounded-2xl bg-white p-4 shadow-[0_12px_36px_rgba(0,0,0,0.04)] dark:bg-[#0b0d12]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-bold text-black dark:text-white">{item}</p>
                  <span className="text-xs font-black text-[#ff5a45]">0{index + 1}</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/8 dark:bg-white/10">
                  <div className="h-full rounded-full bg-[#ff5a45]" style={{ width: `${72 - index * 12}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "automation",
    label: "Automation",
    content: (
      <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[0.8fr_1fr]">
        <div className="rounded-[1.4rem] bg-black p-5 text-white dark:bg-[#0b0d12]">
          <Bot className="h-8 w-8 text-[#ff7b6f]" />
          <h2 className="mt-5 font-radio text-4xl font-black leading-none tracking-[-0.07em]">
            Intelligent workflows without visual noise.
          </h2>
          <p className="mt-4 text-sm font-medium leading-6 text-white/62">
            Automations are presented as calm steps, not a busy flowchart.
          </p>
        </div>
        <div className="grid content-start gap-3">
          {["Lead routed to Telegram", "CRM status enriched", "Analytics event confirmed", "Follow-up task created"].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#171a22]">
              <span className="text-sm font-bold text-black/70 dark:text-white/90">{item}</span>
              <span className="rounded-full bg-[#dcf5df] px-3 py-1 text-xs font-black text-[#167142] dark:bg-[#17352a] dark:text-[#8df0b4]">
                Live
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    value: "insights",
    label: "Insights",
    content: (
      <div className="p-5 sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <BarChart3 className="h-8 w-8 text-[#ff5a45]" />
            <h2 className="mt-5 max-w-2xl font-radio text-4xl font-black leading-[0.95] tracking-[-0.07em] text-black dark:text-white sm:text-6xl">
              Metrics that feel editorial, not overwhelming.
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium leading-6 text-black/64 dark:text-white/90">
            Designed for quick executive reads: fewer decorations, stronger hierarchy, clearer decisions.
          </p>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {[
            ["42%", "Lead quality lift"],
            ["3.8x", "Faster page decisions"],
            ["18", "Tracked growth signals"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[1.3rem] border border-black/10 bg-[#f7f4ed] p-5 dark:border-white/10 dark:bg-[#171a22]">
              <p className="font-radio text-4xl font-black tracking-[-0.06em] text-black dark:text-white">{value}</p>
              <p className="mt-2 text-sm font-bold text-black/60 dark:text-white/90">{label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    value: "stack",
    label: "Stack",
    content: (
      <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <Layers3 className="h-8 w-8 text-[#ff5a45]" />
          <h2 className="mt-5 font-radio text-4xl font-black leading-none tracking-[-0.07em] text-black dark:text-white sm:text-6xl">
            Built for reusable product surfaces.
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-black/66 dark:text-white/90">
            The tab system is a reusable component with shared layout animations, keyboard support and stable layout transitions.
          </p>
        </div>
        <div className="grid content-start gap-3">
          {["Framer Motion layoutId", "Animated height continuity", "Accessible keyboard navigation", "Responsive pill navigation"].map((item) => (
            <div key={item} className="rounded-2xl border border-black/10 bg-white p-4 text-sm font-bold text-black/68 dark:border-white/10 dark:bg-[#171a22] dark:text-white/90">
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default async function TabsDemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const homeContent = getHomeContent(normalizedLocale);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-black dark:bg-[#07080b] dark:text-white">
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main className="px-3 pb-16 pt-28 sm:px-4 sm:pb-24 sm:pt-36">
        <section className="mx-auto max-w-7xl">
          <div data-gsap="reveal" className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#ff5a45]">
              Premium tabs
            </p>
            <h1 className="mt-4 font-radio text-5xl font-black leading-[0.92] tracking-[-0.08em] sm:text-7xl lg:text-8xl">
              Smooth SaaS tabs with intelligent motion.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-black/66 dark:text-white/90 sm:text-lg sm:leading-8">
              A reusable Next.js and TailwindCSS tab system designed for polished dashboards, AI products and premium marketing pages.
            </p>
          </div>

          <div data-gsap="soft-scale" className="mt-10 sm:mt-12">
            <PremiumTabs items={tabItems} ariaLabel="Premium SaaS product sections" />
          </div>

          <div data-gsap="reveal" className="mt-8 flex flex-col gap-3 rounded-[1.5rem] border border-black/10 bg-white/70 p-5 dark:border-white/10 dark:bg-[#171a22] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-bold text-black/60 dark:text-white/90">
              Reuse this component anywhere: dashboards, feature sections, process pages or product comparisons.
            </p>
            <a href="https://www.framer.com/motion/" className="inline-flex items-center gap-2 text-sm font-black text-[#ff5a45]">
              Framer Motion
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <HomeFooter content={homeContent} locale={normalizedLocale} />
    </div>
  );
}
