import { LOCAL_SEO, SEO_SITE_NAME, SEO_SITE_URL, type SeoLocale } from "@/config/seo/constants";
import { siteConfig } from "@/lib/site-config";
import { generateCanonicalUrl } from "@/lib/seo/url";

export type BreadcrumbItem = { name: string; item: string };
export type FaqItem = { question: string; answer: string };

export type SchemaKind =
  | "organization"
  | "localBusiness"
  | "professionalService"
  | "website"
  | "webPage"
  | "service"
  | "faq"
  | "breadcrumb"
  | "article"
  | "blogPosting"
  | "review";

type OrganizationPayload = { id?: string };
type WebsitePayload = { locale: SeoLocale };
type WebPagePayload = { id: string; url: string; name: string; description: string; locale: SeoLocale; aboutId?: string };
type ServicePayload = {
  id: string;
  name: string;
  description: string;
  serviceType: string;
  url: string;
};
type BreadcrumbPayload = { id?: string; items: BreadcrumbItem[] };
type FaqPayload = { id?: string; items: FaqItem[] };
type ArticlePayload = {
  id?: string;
  url: string;
  title: string;
  description: string;
  locale: SeoLocale;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  keywords?: string[];
};
type BlogPostingPayload = ArticlePayload;
type ReviewPayload = { id?: string; itemName: string; reviewBody: string; locale: SeoLocale; url: string };

type SchemaPayloadMap = {
  organization: OrganizationPayload;
  localBusiness: OrganizationPayload;
  professionalService: OrganizationPayload;
  website: WebsitePayload;
  webPage: WebPagePayload;
  service: ServicePayload;
  faq: FaqPayload;
  breadcrumb: BreadcrumbPayload;
  article: ArticlePayload;
  blogPosting: BlogPostingPayload;
  review: ReviewPayload;
};

const organizationId = `${SEO_SITE_URL}/#organization`;
const websiteId = `${SEO_SITE_URL}/#website`;

export function generateSchema<K extends SchemaKind>(kind: K, payload: SchemaPayloadMap[K]) {
  switch (kind) {
    case "organization":
      return {
        "@type": "Organization",
        "@id": (payload as OrganizationPayload).id ?? organizationId,
        name: SEO_SITE_NAME,
        legalName: siteConfig.legal.organization,
        url: SEO_SITE_URL,
        image: `${SEO_SITE_URL}/opengraph-image`,
        email: siteConfig.contacts.email,
        telephone: siteConfig.contacts.phone,
        foundingDate: siteConfig.legal.foundedYear,
        sameAs: Object.values(siteConfig.social),
      } as const;
    case "localBusiness":
      return {
        "@type": "LocalBusiness",
        "@id": (payload as OrganizationPayload).id ?? `${organizationId}-local`,
        name: SEO_SITE_NAME,
        url: SEO_SITE_URL,
        email: siteConfig.contacts.email,
        telephone: siteConfig.contacts.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: LOCAL_SEO.city,
          addressRegion: LOCAL_SEO.region,
          addressCountry: LOCAL_SEO.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: LOCAL_SEO.geo.latitude,
          longitude: LOCAL_SEO.geo.longitude,
        },
        areaServed: [
          { "@type": "City", name: LOCAL_SEO.city },
          { "@type": "Country", name: LOCAL_SEO.country },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: LOCAL_SEO.openingHours.days,
            opens: LOCAL_SEO.openingHours.opens,
            closes: LOCAL_SEO.openingHours.closes,
          },
        ],
      } as const;
    case "professionalService":
      return {
        "@type": "ProfessionalService",
        "@id": (payload as OrganizationPayload).id ?? `${organizationId}-service`,
        name: SEO_SITE_NAME,
        url: SEO_SITE_URL,
        areaServed: [
          { "@type": "City", name: LOCAL_SEO.city },
          { "@type": "Country", name: LOCAL_SEO.country },
        ],
      } as const;
    case "website": {
      const { locale } = payload as WebsitePayload;
      return {
        "@type": "WebSite",
        "@id": websiteId,
        name: SEO_SITE_NAME,
        url: SEO_SITE_URL,
        inLanguage: locale === "ru" ? "ru-KZ" : "en",
        publisher: { "@id": organizationId },
      } as const;
    }
    case "webPage": {
      const { id, url, name, description, locale, aboutId } = payload as WebPagePayload;
      return {
        "@type": "WebPage",
        "@id": id,
        url,
        name,
        description,
        inLanguage: locale === "ru" ? "ru-KZ" : "en",
        isPartOf: { "@id": websiteId },
        about: aboutId ? { "@id": aboutId } : { "@id": organizationId },
      } as const;
    }
    case "service": {
      const { id, name, description, serviceType, url } = payload as ServicePayload;
      return {
        "@type": "Service",
        "@id": id,
        name,
        description,
        serviceType,
        url,
        provider: { "@id": organizationId },
        areaServed: [
          { "@type": "City", name: LOCAL_SEO.city },
          { "@type": "Country", name: LOCAL_SEO.country },
        ],
      } as const;
    }
    case "faq": {
      const { id, items } = payload as FaqPayload;
      return {
        "@type": "FAQPage",
        ...(id ? { "@id": id } : {}),
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      } as const;
    }
    case "breadcrumb": {
      const { id, items } = payload as BreadcrumbPayload;
      return {
        "@type": "BreadcrumbList",
        ...(id ? { "@id": id } : {}),
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      } as const;
    }
    case "article":
    case "blogPosting": {
      const { id, url, title, description, locale, publishedAt, updatedAt, image, keywords } = payload as ArticlePayload;
      return {
        "@type": kind === "blogPosting" ? "BlogPosting" : "Article",
        ...(id ? { "@id": id } : {}),
        headline: title,
        description,
        inLanguage: locale === "ru" ? "ru-KZ" : "en",
        mainEntityOfPage: url,
        url,
        datePublished: publishedAt,
        dateModified: updatedAt ?? publishedAt,
        author: {
          "@type": "Organization",
          "@id": organizationId,
          name: SEO_SITE_NAME,
        },
        publisher: {
          "@id": organizationId,
        },
        image: image ? [image] : [`${SEO_SITE_URL}/opengraph-image`],
        keywords,
      } as const;
    }
    case "review": {
      const { id, itemName, reviewBody, locale, url } = payload as ReviewPayload;
      return {
        "@type": "Review",
        ...(id ? { "@id": id } : {}),
        inLanguage: locale === "ru" ? "ru-KZ" : "en",
        itemReviewed: {
          "@type": "CreativeWork",
          name: itemName,
          url,
        },
        author: {
          "@type": "Organization",
          "@id": organizationId,
          name: SEO_SITE_NAME,
        },
        reviewBody,
      } as const;
    }
  }
}

export function buildOrganizationGraph(locale: SeoLocale = "ru") {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateSchema("website", { locale }),
      generateSchema("organization", {}),
      generateSchema("professionalService", {}),
      generateSchema("localBusiness", {}),
    ],
  };
}

export { organizationId, websiteId };

export function createPageUrl(path: string, locale: SeoLocale) {
  return generateCanonicalUrl(path, locale);
}
