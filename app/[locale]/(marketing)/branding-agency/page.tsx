import { ServiceSiloPage } from "@/components/sections/ServiceSiloPage";
import { createServiceSiloMetadata } from "@/lib/service-silo-pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return createServiceSiloMetadata(locale, "branding-agency");
}

export default async function BrandingAgencyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ServiceSiloPage locale={locale} siloKey="branding-agency" />;
}
