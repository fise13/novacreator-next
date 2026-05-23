/**
 * Blog posts with full article body (1500+ words). Only these slugs are indexable.
 * All other published routes remain reachable but use noindex until migrated.
 */
export const INDEXABLE_BLOG_SLUGS = new Set<string>([
  "kak-vyvesti-sait-v-top-za-6-mesyatsev",
  "10-oshibok-v-google-ads-kotorye-stoyat-vam-deneg",
  "chek-list-seo-optimizatsii-saita-pri-razrabotke",
  "how-to-rank-website-top-10-6-months",
  "10-google-ads-mistakes-cost-money",
  "seo-optimization-checklist-website-development",
]);

export function isBlogPostIndexable(slug: string) {
  return INDEXABLE_BLOG_SLUGS.has(slug);
}

/** Slugs that exist but are placeholder / thin content */
export const PLACEHOLDER_BLOG_SLUGS = [
] as const;
