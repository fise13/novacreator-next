"use client";

import { CinematicHero } from "./CinematicHero";
import { FinalCta } from "./FinalCta";
import { HomeFaqSection } from "./HomeFaqSection";
import { PageMotionShell } from "@/components/layout/PageMotionShell";
import { HomeFooter } from "./HomeFooter";
import { ProcessTimeline } from "./ProcessTimeline";
import { PremiumNavbar } from "./PremiumNavbar";
import { ScrollMesmerisingSection } from "./ScrollMesmerisingSection";
import { SelectedWorkSection } from "./SelectedWorkSection";
import { ServicesShowcase } from "./ServicesShowcase";
import { getHomeContent, type HomeLocale } from "./home-content";

export function PremiumHomePage({ locale }: { locale: string }) {
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const content = getHomeContent(normalizedLocale);

  return (
    <PageMotionShell className="text-[#111111]">
      <PremiumNavbar content={content} locale={normalizedLocale} />
      <main id="main-content">
        <CinematicHero content={content} locale={normalizedLocale} />
        <ScrollMesmerisingSection locale={normalizedLocale} />
        <ServicesShowcase content={content} locale={normalizedLocale} />
        <SelectedWorkSection content={content} locale={normalizedLocale} />
        <ProcessTimeline content={content} />
        <HomeFaqSection content={content} locale={normalizedLocale} />
        <FinalCta content={content} />
      </main>
      <HomeFooter content={content} locale={normalizedLocale} />
    </PageMotionShell>
  );
}
