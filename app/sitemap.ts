import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  alternateLanguages,
  alternateLanguagesForPaths,
  getIndexableBlogSlugAlternates,
  portfolioSeoEntries,
  staticSeoRoutes,
} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticSeoRoutes.flatMap((route) => [
    {
      url: absoluteUrl(route.path, "ru"),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages(route.path),
      },
    },
    {
      url: absoluteUrl(route.path, "en"),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages(route.path),
      },
    },
  ]);

  const portfolioEntries = Object.keys(portfolioSeoEntries).flatMap((slug) => {
    const path = `/portfolio/${slug}`;

    return [
      {
        url: absoluteUrl(path, "ru"),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.65,
        alternates: {
          languages: alternateLanguages(path),
        },
      },
      {
        url: absoluteUrl(path, "en"),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.65,
        alternates: {
          languages: alternateLanguages(path),
        },
      },
    ];
  });

  const blogEntries = getIndexableBlogSlugAlternates().flatMap((entry) => {
    const paths = {
      ru: `/blog/${entry.ru}`,
      en: `/blog/${entry.en}`,
    };

    return [
      {
        url: absoluteUrl(paths.ru, "ru"),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.55,
        alternates: {
          languages: alternateLanguagesForPaths(paths),
        },
      },
      {
        url: absoluteUrl(paths.en, "en"),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.55,
        alternates: {
          languages: alternateLanguagesForPaths(paths),
        },
      },
    ];
  });

  return [...staticEntries, ...portfolioEntries, ...blogEntries];
}
