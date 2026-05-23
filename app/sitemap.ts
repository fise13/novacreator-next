import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  alternateLanguages,
  portfolioSeoEntries,
  staticSeoRoutes,
} from "@/lib/seo";
import { getBlogPostAlternates, getBlogPostBySlug } from "@/lib/seo/blog-content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const alternates = await getBlogPostAlternates();
  const blogEntries = (
    await Promise.all(
      alternates.map(async (entry) => {
        const ruPost = await getBlogPostBySlug("ru", entry.ru);
        const enPost = await getBlogPostBySlug("en", entry.en);
        if (!ruPost || !enPost) {
          return [];
        }

        const paths = {
          ru: `/blog/${entry.ru}`,
          en: `/blog/${entry.en}`,
        };
        const lastModified = new Date(enPost.updatedAt ?? ruPost.updatedAt ?? enPost.publishedAt);

        return [
          {
            url: absoluteUrl(paths.ru, "ru"),
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.55,
            alternates: {
              languages: {
                ru: absoluteUrl(paths.ru, "ru"),
                en: absoluteUrl(paths.en, "en"),
                "x-default": absoluteUrl(paths.ru, "ru"),
              },
            },
          },
          {
            url: absoluteUrl(paths.en, "en"),
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.55,
            alternates: {
              languages: {
                ru: absoluteUrl(paths.ru, "ru"),
                en: absoluteUrl(paths.en, "en"),
                "x-default": absoluteUrl(paths.ru, "ru"),
              },
            },
          },
        ];
      }),
    )
  ).flat();

  return [...staticEntries, ...portfolioEntries, ...blogEntries];
}
