import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CostCalculator } from "@/components/calculator/CostCalculator";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { createMarketingMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMarketingMetadata(locale, "calculator");
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const content = getHomeContent(normalizedLocale);
  const isEn = normalizedLocale === "en";

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-black dark:bg-[#07080b] dark:text-white">
      <PremiumNavbar content={content} locale={normalizedLocale} />
      <main id="main-content" className="relative pt-24 sm:pt-28">
        <section className="relative overflow-hidden px-3 py-16 sm:px-4 sm:py-32">
          <div className="pointer-events-none absolute left-1/2 top-4 h-80 w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-[#ff5a45]/10 blur-3xl dark:bg-[#ff5a45]/15" />
          <div className="relative mx-auto max-w-7xl">
            <p data-gsap="reveal" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a45] sm:text-sm sm:tracking-[0.28em]">
              {isEn ? "Calculator" : "Калькулятор"}
            </p>
            <h1 data-gsap="reveal" className="mt-4 max-w-5xl text-balance font-radio text-4xl font-black leading-[0.95] tracking-[-0.08em] min-[380px]:text-5xl sm:mt-5 sm:text-7xl lg:text-8xl">
              {isEn ? "Estimate your project budget" : "Рассчитайте стоимость проекта"}
            </h1>
            <p data-gsap="reveal" className="mt-5 max-w-3xl text-base font-medium leading-7 text-black/60 dark:text-white/90 sm:mt-6 sm:text-xl sm:leading-8">
              {isEn
                ? "Choose SEO, development, ads or iOS, adjust the key parameters and see an approximate budget in KZT, RUB or USD."
                : "Выберите SEO, разработку, рекламу или iOS, настройте параметры и получите ориентир бюджета в KZT, RUB или USD."}
            </p>
          </div>
        </section>
        <CostCalculator locale={normalizedLocale} />
      </main>
      <HomeFooter content={content} locale={normalizedLocale} />
    </div>
  );
}
