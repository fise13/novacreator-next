export const pageContentKeys = {
  services: "services",
  about: "about",
  contact: "contact",
  faq: "faq",
  vacancies: "vacancies",
  privacy: "privacy",
  seo: "seo",
  ads: "ads",
  landing: "landing",
  ecommerce: "ecommerce",
  corporate: "corporate",
  ios: "ios",
  calculator: "calculator",
} as const;

export type PageContentKey = keyof typeof pageContentKeys;
