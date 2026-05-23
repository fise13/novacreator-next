import { SEO_DEFAULT_LOCALE, SEO_SITE_URL, type SeoLocale } from "@/config/seo/constants";

export function normalizeSeoLocale(locale: string): SeoLocale {
  return locale === "en" ? "en" : "ru";
}

export function localizePath(path: string, locale: SeoLocale) {
  const normalizedPath = path === "/" ? "" : path;
  return locale === "en" ? `/en${normalizedPath}` : normalizedPath || "/";
}

export function generateCanonicalUrl(path: string, locale: SeoLocale = SEO_DEFAULT_LOCALE) {
  return new URL(localizePath(path, locale), SEO_SITE_URL).toString();
}

export function alternateLanguages(path: string) {
  return {
    ru: generateCanonicalUrl(path, "ru"),
    en: generateCanonicalUrl(path, "en"),
    "x-default": generateCanonicalUrl(path, SEO_DEFAULT_LOCALE),
  };
}

export function alternateLanguagesForPaths(paths: Partial<Record<SeoLocale, string>>) {
  const ruPath = paths.ru ?? paths.en ?? "/";
  const languages: Record<string, string> = {
    "x-default": generateCanonicalUrl(ruPath, "ru"),
  };

  if (paths.ru) {
    languages.ru = generateCanonicalUrl(paths.ru, "ru");
  }

  if (paths.en) {
    languages.en = generateCanonicalUrl(paths.en, "en");
  }

  return languages;
}
