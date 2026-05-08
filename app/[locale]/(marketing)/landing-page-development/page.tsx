import { MarketingPage } from "@/components/sections/MarketingPage";

export default async function LandingPageDevelopmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MarketingPage locale={locale} pageKey="landing" />;
}
