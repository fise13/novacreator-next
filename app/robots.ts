import type { MetadataRoute } from "next";
import { NOINDEX_PATHS } from "@/config/seo/constants";
import { siteConfig, siteHosts } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const disallow = [...NOINDEX_PATHS].flatMap((path) => [path, `/en${path}`]);
  const canonicalSitemap = `${siteConfig.url}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", ...disallow],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "CCBot", "ClaudeBot"],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [canonicalSitemap, `https://${siteHosts.www}/sitemap.xml`],
    host: siteConfig.url,
  };
}
