import { ServiceSiloPage } from "@/components/sections/ServiceSiloPage";
import { createServiceSiloMetadata } from "@/lib/service-silo-pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return createServiceSiloMetadata(locale, "ui-ux-design");
}

export default async function UiUxDesignPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ServiceSiloPage locale={locale} siloKey="ui-ux-design" />;
}
