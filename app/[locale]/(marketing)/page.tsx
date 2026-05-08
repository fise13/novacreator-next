import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PremiumHomePage } from "@/components/home/PremiumHomePage";
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
    title: locale === "en" ? "NovaCreator Studio - SEO, websites and Google Ads" : "NovaCreator Studio - SEO, сайты и Google Ads",
    description:
      locale === "en"
        ? "Marketing studio for SEO, website development and Google Ads campaigns in Kazakhstan."
        : "Маркетинговая студия в Алматы: SEO-продвижение, разработка сайтов и Google Ads для роста заявок.",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PremiumHomePage locale={locale} />;
}
