import { siteConfig } from "@/lib/site-config";

export const SEO_BRAND_NAME = "NovaCreator";
export const SEO_SITE_NAME = siteConfig.name;
export const SEO_SITE_URL = siteConfig.url;
export const SEO_DEFAULT_LOCALE = "ru" as const;
export const SEO_SUPPORTED_LOCALES = ["ru", "en"] as const;

export const SEO_TITLE_LIMITS = {
  min: 35,
  max: 65,
} as const;

export const SEO_DESCRIPTION_LIMITS = {
  min: 120,
  max: 160,
} as const;

export const OG_IMAGE = {
  path: "/opengraph-image",
  width: 1200,
  height: 630,
} as const;

export const LOCAL_SEO = {
  city: siteConfig.address.city,
  region: "Алматы",
  country: siteConfig.address.country,
  countryCode: siteConfig.address.countryCode,
  // Keep as explicit config fields to avoid fake data.
  geo: {
    latitude: 43.238949,
    longitude: 76.889709,
  },
  openingHours: {
    opens: "10:00",
    closes: "19:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
} as const;

export const NOINDEX_PATHS = new Set(["/tabs", "/login", "/register"]);

export const SERVICE_SILO_PATHS = [
  "/web-design-almaty",
  "/seo-agency-almaty",
  "/branding-agency",
  "/ui-ux-design",
  "/mobile-app-development",
  "/google-ads-management",
] as const;

export type SeoLocale = (typeof SEO_SUPPORTED_LOCALES)[number];
export type ServiceSiloPath = (typeof SERVICE_SILO_PATHS)[number];
