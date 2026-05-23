import type { Metadata } from "next";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { PageMotionShell } from "@/components/layout/PageMotionShell";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { createMarketingMetadata } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/seo/blog-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMarketingMetadata(locale, "blog");
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const homeContent = getHomeContent(normalizedLocale);
  const posts = await getAllBlogPosts(normalizedLocale);
  const localizeHref = (href: string) =>
    normalizedLocale === "en" && href.startsWith("/") ? `/en${href === "/" ? "" : href}` : href;

  return (
    <PageMotionShell>
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main id="main-content" className="px-3 pb-16 pt-28 sm:px-4 sm:pb-20 sm:pt-36">
        <section className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ff5a45]">
            {locale === "en" ? "NovaCreator Journal" : "Журнал NovaCreator"}
          </p>
          <h1 className="mt-4 max-w-5xl font-radio text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-7xl">
            {locale === "en"
              ? "SEO, Ads and web growth for Kazakhstan businesses"
              : "SEO, реклама и рост сайтов для бизнеса в Казахстане"}
          </h1>
          <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-black/62 dark:text-white/90 sm:text-xl sm:leading-8">
            {locale === "en"
              ? "Actionable articles with frameworks, checklists and implementation patterns."
              : "Практические статьи с чек-листами, фреймворками и рабочими подходами к внедрению."}
          </p>
        </section>

        <section className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[1.5rem] border border-black/10 bg-white/75 p-6 shadow-[0_14px_42px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#ff5a45]/40 dark:border-white/12 dark:bg-[#171a22]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a45]">{post.category}</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">{post.title}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-black/62 dark:text-white/90">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black/55 dark:text-white/70">
                <Clock3 className="h-3.5 w-3.5" />
                {locale === "en" ? `${post.readingTimeMinutes} min` : `${post.readingTimeMinutes} мин`}
              </div>
              <a
                href={localizeHref(`/blog/${post.slug}`)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#ff5a45]"
              >
                {locale === "en" ? "Read article" : "Читать статью"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </section>
      </main>
      <HomeFooter content={homeContent} locale={normalizedLocale} />
    </PageMotionShell>
  );
}
