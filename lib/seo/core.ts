import type { Metadata } from "next";
import { OG_IMAGE, SEO_DESCRIPTION_LIMITS, SEO_SITE_NAME, SEO_TITLE_LIMITS } from "@/config/seo/constants";
import { siteConfig } from "@/lib/site-config";
import { alternateLanguages, alternateLanguagesForPaths, generateCanonicalUrl, normalizeSeoLocale } from "@/lib/seo/url";

type SeoMetadataInput = {
  locale: string;
  path: string;
  title: string;
  description: string;
  noIndex?: boolean;
  alternatePaths?: Partial<Record<"ru" | "en", string>>;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
};

function shouldNoIndexByEnvironment() {
  const vercelEnv = process.env.VERCEL_ENV;
  if (!vercelEnv) {
    return false;
  }

  return vercelEnv !== "production";
}

function normalizeTitle(rawTitle: string) {
  const trimmed = rawTitle.trim().replace(/\s+/g, " ");
  const withBrand = /novacreator/i.test(trimmed)
    ? trimmed.replace(/(?:\s*\|\s*)?novacreator(?:\s+studio)?/i, "NovaCreator")
    : `${trimmed} | NovaCreator`;

  if (withBrand.length <= SEO_TITLE_LIMITS.max) {
    return withBrand;
  }

  return withBrand.slice(0, SEO_TITLE_LIMITS.max - 1).trimEnd() + "…";
}

function normalizeDescription(rawDescription: string) {
  const value = rawDescription.trim().replace(/\s+/g, " ");
  if (value.length <= SEO_DESCRIPTION_LIMITS.max) {
    return value;
  }

  return value.slice(0, SEO_DESCRIPTION_LIMITS.max - 1).trimEnd() + "…";
}

export function createSeoMetadata({
  locale,
  path,
  title,
  description,
  noIndex = false,
  alternatePaths,
  type = "website",
  publishedTime,
  modifiedTime,
  keywords,
}: SeoMetadataInput): Metadata {
  const normalizedLocale = normalizeSeoLocale(locale);
  const canonical = generateCanonicalUrl(path, normalizedLocale);
  const effectiveNoIndex = noIndex || shouldNoIndexByEnvironment();
  const normalizedTitle = normalizeTitle(title);
  const normalizedDescription = normalizeDescription(description);

  return {
    title: { absolute: normalizedTitle },
    description: normalizedDescription,
    keywords,
    alternates: {
      canonical,
      languages: alternatePaths ? alternateLanguagesForPaths(alternatePaths) : alternateLanguages(path),
    },
    openGraph: {
      type,
      title: normalizedTitle,
      description: normalizedDescription,
      url: canonical,
      siteName: SEO_SITE_NAME,
      locale: normalizedLocale === "ru" ? "ru_KZ" : "en_US",
      alternateLocale: normalizedLocale === "ru" ? ["en_US"] : ["ru_KZ"],
      images: [
        {
          url: OG_IMAGE.path,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: SEO_SITE_NAME,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: normalizedTitle,
      description: normalizedDescription,
      images: [OG_IMAGE.path],
    },
    robots: effectiveNoIndex
      ? { index: false, follow: false, nocache: true }
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
    metadataBase: new URL(siteConfig.url),
  };
}
