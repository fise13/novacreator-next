import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import type { SeoLocale } from "@/config/seo/constants";
import { generateCanonicalUrl } from "@/lib/seo/url";

const BLOG_CONTENT_ROOT = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 210;

export type BlogPostFrontmatter = {
  slug: string;
  locale: SeoLocale;
  alternateSlug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  keywords: string[];
  relatedSlugs?: string[];
  serviceLinks?: Array<{ label: string; href: string }>;
};

export type BlogPostMeta = BlogPostFrontmatter & {
  canonicalPath: string;
  canonicalUrl: string;
  filePath: string;
  readingTimeMinutes: number;
  headings: BlogHeading[];
};

export type BlogPost = BlogPostMeta & {
  body: string;
};

type BlogHeading = { id: string; text: string; level: 2 | 3 };

function headingToId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractHeadings(markdownBody: string) {
  const headings: BlogHeading[] = [];

  markdownBody.split("\n").forEach((line) => {
    if (line.startsWith("## ")) {
      const text = line.replace(/^##\s+/, "").trim();
      headings.push({ id: headingToId(text), text, level: 2 });
      return;
    }

    if (line.startsWith("### ")) {
      const text = line.replace(/^###\s+/, "").trim();
      headings.push({ id: headingToId(text), text, level: 3 });
    }
  });

  return headings;
}

function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

async function readLocaleContentFiles(locale: SeoLocale) {
  const localeDir = path.join(BLOG_CONTENT_ROOT, locale);
  const filenames = await fs.readdir(localeDir);
  return filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => path.join(localeDir, filename));
}

async function parseBlogFile(filePath: string): Promise<BlogPost> {
  const source = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(source);
  const frontmatter = data as BlogPostFrontmatter;
  const canonicalPath = `/blog/${frontmatter.slug}`;
  const headings = extractHeadings(content);
  const readingTimeMinutes = estimateReadingTime(content);

  return {
    ...frontmatter,
    canonicalPath,
    canonicalUrl: generateCanonicalUrl(canonicalPath, frontmatter.locale),
    filePath,
    body: content,
    headings,
    readingTimeMinutes,
  };
}

export const getAllBlogPosts = cache(async (locale: SeoLocale) => {
  const files = await readLocaleContentFiles(locale);
  const posts = await Promise.all(files.map(parseBlogFile));
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
});

export const getBlogPostBySlug = cache(async (locale: SeoLocale, slug: string) => {
  const posts = await getAllBlogPosts(locale);
  return posts.find((post) => post.slug === slug) ?? null;
});

export async function getBlogPostAlternates() {
  const ruPosts = await getAllBlogPosts("ru");
  return ruPosts.map((ruPost) => ({
    ru: ruPost.slug,
    en: ruPost.alternateSlug,
  }));
}

export async function getRelatedBlogPosts(post: BlogPostMeta, limit = 3) {
  const posts = await getAllBlogPosts(post.locale);
  const preferred = new Set(post.relatedSlugs ?? []);
  const related = posts.filter(
    (candidate) =>
      candidate.slug !== post.slug &&
      (preferred.has(candidate.slug) || candidate.category === post.category),
  );
  return related.slice(0, limit);
}
