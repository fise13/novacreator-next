"use client";

import { CinematicHero } from "./CinematicHero";
import { FinalCta } from "./FinalCta";
import { HomeFaqSection } from "./HomeFaqSection";
import { GsapHomeAnimations } from "./GsapHomeAnimations";
import { HomeFooter } from "./HomeFooter";
import { ProcessTimeline } from "./ProcessTimeline";
import { PremiumNavbar } from "./PremiumNavbar";
import { ScrollMesmerisingSection } from "./ScrollMesmerisingSection";
import { SelectedWorkSection } from "./SelectedWorkSection";
import { ServicesShowcase } from "./ServicesShowcase";
import { SmoothScroll } from "./SmoothScroll";
import { getHomeContent, type HomeLocale } from "./home-content";

export function PremiumHomePage({ locale }: { locale: string }) {
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const content = getHomeContent(normalizedLocale);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-[#111111] dark:bg-[#07080b] dark:text-white">
      <SmoothScroll />
      <GsapHomeAnimations />
      <PremiumNavbar content={content} locale={normalizedLocale} />
      <CinematicHero content={content} locale={normalizedLocale} />
      <ScrollMesmerisingSection locale={normalizedLocale} />
      <ServicesShowcase content={content} locale={normalizedLocale} />
      <SelectedWorkSection content={content} locale={normalizedLocale} />
      <ProcessTimeline content={content} />
      <HomeFaqSection content={content} locale={normalizedLocale} />
      <FinalCta content={content} />
      <HomeFooter content={content} locale={normalizedLocale} />
    </div>
  );
}
