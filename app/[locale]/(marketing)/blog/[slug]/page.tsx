import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { PageMotionShell } from "@/components/layout/PageMotionShell";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { BlogMdxContent } from "@/components/seo/BlogMdxContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { createSeoMetadata } from "@/lib/seo";
import { getBlogPostAlternates, getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/seo/blog-content";
import { createPageUrl, generateSchema } from "@/lib/seo/schema";
import { normalizeSeoLocale } from "@/lib/seo/url";

export async function generateStaticParams() {
  const alternates = await getBlogPostAlternates();
  return alternates.flatMap((entry) => [{ slug: entry.ru }, { slug: entry.en }]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const normalizedLocale = normalizeSeoLocale(locale);
  const post = await getBlogPostBySlug(normalizedLocale, slug);

  if (!post) {
    notFound();
  }

  return createSeoMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    keywords: post.keywords,
    alternatePaths: {
      ru: `/blog/${post.locale === "ru" ? post.slug : post.alternateSlug}`,
      en: `/blog/${post.locale === "en" ? post.slug : post.alternateSlug}`,
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const homeContent = getHomeContent(normalizedLocale);
  const post = await getBlogPostBySlug(normalizedLocale, slug);

  if (!post) {
    notFound();
  }
  const relatedPosts = await getRelatedBlogPosts(post, 3);
  const pageUrl = createPageUrl(`/blog/${slug}`, normalizedLocale);
  const localizeHref = (href: string) =>
    normalizedLocale === "en" && href.startsWith("/") ? `/en${href === "/" ? "" : href}` : href;
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateSchema("breadcrumb", {
        id: `${pageUrl}#breadcrumb`,
        items: [
          { name: locale === "en" ? "Home" : "Главная", item: createPageUrl("/", normalizedLocale) },
          { name: locale === "en" ? "Blog" : "Блог", item: createPageUrl("/blog", normalizedLocale) },
          { name: post.title, item: pageUrl },
        ],
      }),
      generateSchema("blogPosting", {
        id: `${pageUrl}#blogposting`,
        url: pageUrl,
        title: post.title,
        description: post.description,
        locale: normalizedLocale,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        keywords: post.keywords,
      }),
      generateSchema("article", {
        id: `${pageUrl}#article`,
        url: pageUrl,
        title: post.title,
        description: post.description,
        locale: normalizedLocale,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        keywords: post.keywords,
      }),
    ],
  };

  return (
    <PageMotionShell>
      <JsonLd data={blogSchema} id={`blog-json-ld-${normalizedLocale}-${slug}`} />
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main id="main-content" className="px-3 pb-16 pt-28 sm:px-4 sm:pb-20 sm:pt-36">
        <article className="mx-auto max-w-7xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-black/60 transition hover:text-[#ff5a45] dark:text-white/90">
            <ArrowLeft className="h-4 w-4" />
            {locale === "en" ? "Back to blog" : "Назад в блог"}
          </Link>

          <div data-gsap="reveal" className="relative mt-6 overflow-hidden rounded-[1.55rem] border border-black/10 bg-white/75 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur dark:border-white/12 dark:bg-[#171a22] sm:mt-8 sm:rounded-[2rem] sm:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ff5a45]/10 blur-3xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.28em] text-[#ff5a45]">{post.category}</p>
            <h1 className="relative mt-4 font-radio text-4xl font-black leading-[0.98] tracking-[-0.08em] sm:text-7xl">{post.title}</h1>
            <p className="relative mt-5 text-base font-semibold leading-7 text-black/62 dark:text-white/90 sm:mt-6 sm:text-lg sm:leading-8">{post.excerpt}</p>
            <div className="relative mt-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-black/55 dark:text-white/70">
              <span>{new Date(post.publishedAt).toLocaleDateString(locale === "en" ? "en-US" : "ru-RU")}</span>
              <span className="h-1 w-1 rounded-full bg-black/25 dark:bg-white/25" />
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-3.5 w-3.5" />
                {locale === "en" ? `${post.readingTimeMinutes} min read` : `${post.readingTimeMinutes} мин чтения`}
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section
              data-gsap="reveal"
              className="rounded-[1.5rem] border border-black/10 bg-white/75 p-6 shadow-[0_14px_42px_rgba(0,0,0,0.04)] dark:border-white/12 dark:bg-[#171a22] sm:p-8"
            >
              <BlogMdxContent source={post.body} />
            </section>

            <aside className="space-y-4">
              <section className="rounded-[1.3rem] border border-black/10 bg-white/75 p-5 dark:border-white/12 dark:bg-[#171a22]">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#ff5a45]">
                  {locale === "en" ? "On this page" : "Содержание"}
                </h2>
                <ul className="mt-4 grid gap-2 text-sm font-semibold leading-6">
                  {post.headings.map((heading) => (
                    <li key={heading.id} className={heading.level === 3 ? "pl-4 text-black/65 dark:text-white/75" : ""}>
                      <a href={`#${heading.id}`} className="transition hover:text-[#ff5a45]">
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {post.serviceLinks && post.serviceLinks.length > 0 ? (
                <section className="rounded-[1.3rem] border border-black/10 bg-white/75 p-5 dark:border-white/12 dark:bg-[#171a22]">
                  <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#ff5a45]">
                    {locale === "en" ? "Related services" : "Связанные услуги"}
                  </h2>
                  <div className="mt-4 grid gap-2">
                    {post.serviceLinks.map((link) => (
                      <a
                        key={link.href}
                        href={localizeHref(link.href)}
                        className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-bold transition hover:border-[#ff5a45] hover:text-[#ff5a45] dark:border-white/15"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}
            </aside>
          </div>

          {relatedPosts.length > 0 ? (
            <section className="mt-6 rounded-[1.5rem] border border-black/10 bg-white/75 p-6 dark:border-white/12 dark:bg-[#171a22] sm:p-8">
              <h2 className="font-radio text-3xl font-black tracking-[-0.06em]">
                {locale === "en" ? "Related articles" : "Похожие статьи"}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {relatedPosts.map((related) => (
                  <a
                    key={related.slug}
                    href={localizeHref(`/blog/${related.slug}`)}
                    className="rounded-2xl border border-black/10 bg-white p-4 text-sm font-semibold leading-6 transition hover:-translate-y-1 hover:border-[#ff5a45]/40 dark:border-white/12 dark:bg-[#11141b]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a45]">{related.category}</p>
                    <h3 className="mt-2 text-base font-black tracking-[-0.03em]">{related.title}</h3>
                    <p className="mt-2 text-black/62 dark:text-white/85">{related.excerpt}</p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          <section data-gsap="soft-scale" className="mt-6 rounded-[1.5rem] bg-black p-6 text-white dark:bg-[#161a22] dark:text-white">
            <h2 className="font-radio text-3xl font-black tracking-[-0.06em]">
              {locale === "en" ? "Want this applied to your project?" : "Хотите применить это к своему проекту?"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 opacity-70">
              {locale === "en"
                ? "We can audit your website, ads and analytics, then suggest a practical growth plan."
                : "Мы можем разобрать ваш сайт, рекламу и аналитику, а затем предложить практичный план роста."}
            </p>
            <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[#ff5a45] px-5 py-3 text-sm font-bold text-white">
              {locale === "en" ? "Request audit" : "Запросить аудит"}
            </Link>
          </section>
        </article>
      </main>
      <HomeFooter content={homeContent} locale={normalizedLocale} />
    </PageMotionShell>
  );
}
