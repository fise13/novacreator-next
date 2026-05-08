import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ru", "en"],
  defaultLocale: "ru",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/services": "/services",
    "/about": "/about",
    "/seo": "/seo",
    "/ads": "/ads",
    "/landing-page-development": "/landing-page-development",
    "/ecommerce-development": "/ecommerce-development",
    "/corporate-website-development": "/corporate-website-development",
    "/ios-razrabotka-swift-swiftui": "/ios-razrabotka-swift-swiftui",
    "/calculator": "/calculator",
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/portfolio": "/portfolio",
    "/portfolio/[slug]": "/portfolio/[slug]",
    "/login": "/login",
    "/register": "/register",
    "/contact": "/contact",
    "/faq": "/faq",
    "/vacancies": "/vacancies",
    "/privacy": "/privacy",
  },
});

export type Locale = (typeof routing.locales)[number];
