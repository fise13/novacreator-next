import { ServiceSiloPage } from "@/components/sections/ServiceSiloPage";
import { createServiceSiloMetadata } from "@/lib/service-silo-pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return createServiceSiloMetadata(locale, "web-design-almaty");
}

export default async function WebDesignAlmatyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ServiceSiloPage locale={locale} siloKey="web-design-almaty" />;
}
