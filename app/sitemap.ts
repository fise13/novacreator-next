import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "",
  "/services",
  "/about",
  "/contact",
  "/faq",
  "/vacancies",
  "/privacy",
  "/seo",
  "/ads",
  "/landing-page-development",
  "/ecommerce-development",
  "/corporate-website-development",
  "/ios-razrabotka-swift-swiftui",
  "/calculator",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.flatMap((route) => [
    {
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      alternates: {
        languages: {
          ru: `${siteConfig.url}${route}`,
          en: `${siteConfig.url}/en${route}`,
        },
      },
    },
    {
      url: `${siteConfig.url}/en${route}`,
      lastModified: now,
      alternates: {
        languages: {
          ru: `${siteConfig.url}${route}`,
          en: `${siteConfig.url}/en${route}`,
        },
      },
    },
  ]);
}
