import type { Metadata } from "next";
import { getMarketingPageContent, type MarketingPageKey } from "@/lib/marketing-page-content";
import { siteConfig } from "@/lib/site-config";

export type SeoLocale = "ru" | "en";

type SeoRoute = {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

type SeoEntry = {
  title: string;
  description: string;
};

export const marketingPageRoutes: Record<MarketingPageKey, string> = {
  services: "/services",
  about: "/about",
  contact: "/contact",
  faq: "/faq",
  vacancies: "/vacancies",
  privacy: "/privacy",
  seo: "/seo",
  ads: "/ads",
  landing: "/landing-page-development",
  ecommerce: "/ecommerce-development",
  corporate: "/corporate-website-development",
  ios: "/ios-razrabotka-swift-swiftui",
  calculator: "/calculator",
  blog: "/blog",
  portfolio: "/portfolio",
};

export const staticSeoRoutes: SeoRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/seo", changeFrequency: "weekly", priority: 0.85 },
  { path: "/ads", changeFrequency: "weekly", priority: 0.85 },
  { path: "/landing-page-development", changeFrequency: "weekly", priority: 0.8 },
  { path: "/ecommerce-development", changeFrequency: "weekly", priority: 0.8 },
  { path: "/corporate-website-development", changeFrequency: "weekly", priority: 0.8 },
  { path: "/ios-razrabotka-swift-swiftui", changeFrequency: "weekly", priority: 0.75 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/calculator", changeFrequency: "monthly", priority: 0.65 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.65 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.75 },
  { path: "/vacancies", changeFrequency: "monthly", priority: 0.45 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.25 },
];

export const portfolioSeoEntries: Record<string, Record<SeoLocale, SeoEntry>> = {
  "motor-land": {
    ru: {
      title: "Motor-Land.kz - кейс разработки сайта",
      description: "Кейс NovaCreator Studio: структура каталога, доверие и заявки для сайта автозапчастей Motor-Land.kz.",
    },
    en: {
      title: "Motor-Land.kz - website development case study",
      description: "NovaCreator Studio case study: catalog structure, trust blocks and lead flow for Motor-Land.kz.",
    },
  },
  autocore: {
    ru: {
      title: "AutoCore - кейс iOS и macOS приложения",
      description: "Кейс NovaCreator Studio: SwiftUI-приложение для автомобильных B2B-процессов и синхронизации.",
    },
    en: {
      title: "AutoCore - iOS and macOS app case study",
      description: "NovaCreator Studio case study: SwiftUI app for automotive B2B workflows and synchronization.",
    },
  },
  urbanframe: {
    ru: {
      title: "UrbanFrame Development - кейс лендинга",
      description: "Кейс лендинга для недвижимости: премиальная подача, структура преимуществ и быстрый путь к заявке.",
    },
    en: {
      title: "UrbanFrame Development - landing page case study",
      description: "Real estate landing case study with premium presentation, clear benefits and fast lead scenario.",
    },
  },
  lakeview: {
    ru: {
      title: "LakeView Hotel - кейс сайта отеля",
      description: "Кейс страницы бутик-отеля: атмосфера, номера, сезонные предложения и сценарий бронирования.",
    },
    en: {
      title: "LakeView Hotel - hotel website case study",
      description: "Boutique hotel page case study with atmosphere, room cards, seasonal offers and booking flow.",
    },
  },
  bodycraft: {
    ru: {
      title: "BodyCraft Studio - кейс фитнес-лендинга",
      description: "Кейс фитнес-лендинга с программами, социальным доказательством, квизом и быстрым сбором заявок.",
    },
    en: {
      title: "BodyCraft Studio - fitness landing case study",
      description: "Fitness landing page case study with programs, social proof, quiz flow and fast lead capture.",
    },
  },
  technest: {
    ru: {
      title: "TechNest Retail - кейс e-commerce",
      description: "Кейс интернет-магазина техники: каталог, карточки товаров, checkout-сценарий и аналитика.",
    },
    en: {
      title: "TechNest Retail - e-commerce case study",
      description: "Electronics e-commerce case study with catalog, product cards, checkout flow and analytics.",
    },
  },
  medline: {
    ru: {
      title: "MedLine Clinic - кейс сайта клиники",
      description: "Кейс сайта клиники с услугами, врачами, FAQ, формой записи и локальной SEO-структурой.",
    },
    en: {
      title: "MedLine Clinic - clinic website case study",
      description: "Clinic website case study with services, doctors, FAQ, appointment form and local SEO structure.",
    },
  },
  finpilot: {
    ru: {
      title: "FinPilot Analytics - кейс SaaS-страницы",
      description: "Кейс SaaS-страницы для финансовой аналитики: dashboards, продуктовая подача и заявка на демо.",
    },
    en: {
      title: "FinPilot Analytics - SaaS page case study",
      description: "SaaS page case study for financial analytics with dashboards, product story and demo request.",
    },
  },
};

export const blogSeoEntries: Record<string, Partial<Record<SeoLocale, SeoEntry>>> = {
  "kak-vyvesti-sait-v-top-za-6-mesyatsev": {
    ru: {
      title: "Как вывести сайт в топ за 6 месяцев",
      description: "Практическое руководство по SEO-продвижению: техника, контент, семантика, аналитика и заявки.",
    },
  },
  "10-oshibok-v-google-ads-kotorye-stoyat-vam-deneg": {
    ru: {
      title: "10 ошибок в Google Ads, которые стоят вам денег",
      description: "Разбираем настройки, цели, минус-слова и отчётность, которые чаще всего портят рекламные кампании.",
    },
  },
  "chek-list-seo-optimizatsii-saita-pri-razrabotke": {
    ru: {
      title: "Чек-лист SEO-оптимизации сайта при разработке",
      description: "Что проверить до релиза сайта, чтобы не потерять индексацию, скорость и органический потенциал.",
    },
  },
  "how-to-rank-website-top-10-6-months": {
    en: {
      title: "How to rank a website in 6 months",
      description: "A practical SEO growth guide covering technical optimization, content, semantics, analytics and leads.",
    },
  },
  "10-google-ads-mistakes-cost-money": {
    en: {
      title: "10 Google Ads mistakes that damage leads",
      description: "Campaign settings, goals, negative keywords and reports that often drain paid traffic quality.",
    },
  },
  "seo-optimization-checklist-website-development": {
    en: {
      title: "SEO checklist during website development",
      description: "What to check before launch to preserve indexing, speed and organic potential.",
    },
  },
};

export const blogSlugAlternates = [
  {
    ru: "kak-vyvesti-sait-v-top-za-6-mesyatsev",
    en: "how-to-rank-website-top-10-6-months",
  },
  {
    ru: "10-oshibok-v-google-ads-kotorye-stoyat-vam-deneg",
    en: "10-google-ads-mistakes-cost-money",
  },
  {
    ru: "chek-list-seo-optimizatsii-saita-pri-razrabotke",
    en: "seo-optimization-checklist-website-development",
  },
] as const;

export function normalizeSeoLocale(locale: string): SeoLocale {
  return locale === "en" ? "en" : "ru";
}

export function localizePath(path: string, locale: SeoLocale) {
  const normalizedPath = path === "/" ? "" : path;
  return locale === "en" ? `/en${normalizedPath}` : normalizedPath || "/";
}

export function absoluteUrl(path: string, locale: SeoLocale = "ru") {
  return new URL(localizePath(path, locale), siteConfig.url).toString();
}

export function alternateLanguages(path: string) {
  return {
    ru: absoluteUrl(path, "ru"),
    en: absoluteUrl(path, "en"),
    "x-default": absoluteUrl(path, "ru"),
  };
}

export function alternateLanguagesForPaths(paths: Partial<Record<SeoLocale, string>>) {
  const ruPath = paths.ru ?? paths.en ?? "/";
  const languages: Record<string, string> = {
    "x-default": absoluteUrl(ruPath, "ru"),
  };

  if (paths.ru) {
    languages.ru = absoluteUrl(paths.ru, "ru");
  }

  if (paths.en) {
    languages.en = absoluteUrl(paths.en, "en");
  }

  return languages;
}

export function createSeoMetadata({
  locale,
  path,
  title,
  description,
  alternatePaths,
  noIndex = false,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  alternatePaths?: Partial<Record<SeoLocale, string>>;
  noIndex?: boolean;
}): Metadata {
  const normalizedLocale = normalizeSeoLocale(locale);
  const url = absoluteUrl(path, normalizedLocale);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternatePaths ? alternateLanguagesForPaths(alternatePaths) : alternateLanguages(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: normalizedLocale === "ru" ? "ru_KZ" : "en_US",
      alternateLocale: normalizedLocale === "ru" ? ["en_US"] : ["ru_KZ"],
      type: "website",
      images: [
        {
          url: "/opengraph-image.svg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.svg"],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function createMarketingMetadata(locale: string, pageKey: MarketingPageKey): Metadata {
  const content = getMarketingPageContent(locale, pageKey);

  return createSeoMetadata({
    locale,
    path: marketingPageRoutes[pageKey],
    title: content.title,
    description: content.description,
  });
}
