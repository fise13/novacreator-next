import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContentSection } from "./ContentSection";
import type { PageContentKey } from "@/lib/page-content";

type MarketingPageProps = {
  locale: string;
  pageKey: PageContentKey;
};

export async function MarketingPage({ locale, pageKey }: MarketingPageProps) {
  setRequestLocale(locale);
  const t = await getTranslations(`pages.${pageKey}`);

  return (
    <ContentSection
      label="NovaCreator Studio"
      title={t("title")}
      description={t("description")}
    />
  );
}
