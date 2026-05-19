import { ServiceSiloPage } from "@/components/sections/ServiceSiloPage";
import { createServiceSiloMetadata } from "@/lib/service-silo-pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return createServiceSiloMetadata(locale, "google-ads-management");
}

export default async function GoogleAdsManagementPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ServiceSiloPage locale={locale} siloKey="google-ads-management" />;
}
