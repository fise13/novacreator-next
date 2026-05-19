import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { PremiumHomePage } from "@/components/home/PremiumHomePage";
import { getHomeContent } from "@/components/home/home-content";
import { createSeoMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return createSeoMetadata({
    locale,
    path: "/",
    title:
      locale === "en"
        ? "Web Design & SEO Agency in Almaty | NovaCreator Studio"
        : "Веб-дизайн и SEO в Алматы | NovaCreator Studio",
    description:
      locale === "en"
        ? "Web design, SEO, Google Ads and mobile apps in Almaty, Kazakhstan. Websites built for leads, analytics and search visibility."
        : "Веб-дизайн, SEO, Google Ads и приложения в Алматы. Сайты под заявки, аналитику и рост в поиске по Казахстану.",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getHomeContent(locale);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} id={`home-faq-json-ld-${locale}`} />
      <PremiumHomePage locale={locale} />
    </>
  );
}
