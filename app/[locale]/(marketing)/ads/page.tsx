import { MarketingPage } from "@/components/sections/MarketingPage";

export default async function AdsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MarketingPage locale={locale} pageKey="ads" />;
}
