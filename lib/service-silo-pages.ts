import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";
import { getServiceSilo, type ServiceSiloKey } from "@/lib/service-silo-content";

export function createServiceSiloMetadata(locale: string, key: ServiceSiloKey): Metadata {
  const content = getServiceSilo(key, locale);
  return createSeoMetadata({
    locale,
    path: content.path,
    title: content.metaTitle,
    description: content.metaDescription,
  });
}
