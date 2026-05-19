import { ServiceSiloPage } from "@/components/sections/ServiceSiloPage";
import { createServiceSiloMetadata } from "@/lib/service-silo-pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return createServiceSiloMetadata(locale, "seo-agency-almaty");
}

export default async function SeoAgencyAlmatyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ServiceSiloPage locale={locale} siloKey="seo-agency-almaty" />;
}
