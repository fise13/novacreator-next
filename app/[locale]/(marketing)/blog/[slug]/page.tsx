import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { GsapHomeAnimations } from "@/components/home/GsapHomeAnimations";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { Link } from "@/i18n/navigation";
import { blogSeoEntries, blogSlugAlternates, createSeoMetadata, normalizeSeoLocale } from "@/lib/seo";

type LocalizedPost = {
  category: string;
  title: string;
  excerpt: string;
  takeaways: string[];
};

const posts: Record<string, Partial<Record<"ru" | "en", LocalizedPost>>> = {
  "kak-vyvesti-sait-v-top-za-6-mesyatsev": {
    ru: {
      category: "SEO",
      title: "Как вывести сайт в топ за 6 месяцев",
      excerpt: "Практическое руководство по SEO-продвижению: что делать с техникой, контентом и аналитикой.",
      takeaways: ["Начните с технического аудита", "Соберите коммерческую семантику", "Публикуйте контент системно", "Смотрите не только позиции, но и заявки"],
    },
  },
  "10-oshibok-v-google-ads-kotorye-stoyat-vam-deneg": {
    ru: {
      category: "Google Ads",
      title: "10 ошибок в Google Ads, которые стоят вам денег",
      excerpt: "Разбираем настройки, цели и отчётность, которые чаще всего портят рекламные кампании.",
      takeaways: ["Проверяйте цели до запуска", "Разделяйте кампании по намерению", "Работайте с минус-словами", "Оптимизируйте по стоимости заявки"],
    },
  },
  "chek-list-seo-optimizatsii-saita-pri-razrabotke": {
    ru: {
      category: "Разработка",
      title: "Чек-лист SEO-оптимизации сайта при разработке",
      excerpt: "Что проверить до релиза сайта, чтобы не потерять индексацию, скорость и органический потенциал.",
      takeaways: ["Продумайте URL заранее", "Проверьте metadata и sitemap", "Не забывайте redirects", "Тестируйте скорость до релиза"],
    },
  },
  "how-to-rank-website-top-10-6-months": {
    en: {
      category: "SEO",
      title: "How to rank a website in 6 months",
      excerpt: "A practical SEO growth guide covering technical work, content and analytics.",
      takeaways: ["Start with technical audit", "Collect commercial semantics", "Publish content consistently", "Track leads, not only rankings"],
    },
  },
  "10-google-ads-mistakes-cost-money": {
    en: {
      category: "Google Ads",
      title: "10 Google Ads mistakes that damage leads",
      excerpt: "Campaign settings, goals and reports that often drain paid traffic quality.",
      takeaways: ["Check goals before launch", "Split campaigns by intent", "Work with negative keywords", "Optimize by lead quality"],
    },
  },
  "seo-optimization-checklist-website-development": {
    en: {
      category: "Development",
      title: "SEO checklist during website development",
      excerpt: "What to check before release to preserve indexing, speed and organic potential.",
      takeaways: ["Plan URLs early", "Check metadata and sitemap", "Do not forget redirects", "Test speed before release"],
    },
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const normalizedLocale = normalizeSeoLocale(locale);
  const seo = blogSeoEntries[slug]?.[normalizedLocale];

  if (!seo) {
    notFound();
  }

  const alternateSlugs = blogSlugAlternates.find((entry) => entry.ru === slug || entry.en === slug);

  return createSeoMetadata({
    locale,
    path: `/blog/${slug}`,
    title: seo.title,
    description: seo.description,
    alternatePaths: alternateSlugs
      ? {
          ru: `/blog/${alternateSlugs.ru}`,
          en: `/blog/${alternateSlugs.en}`,
        }
      : undefined,
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

  const post = posts[slug as keyof typeof posts]?.[locale === "en" ? "en" : "ru"];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-black dark:bg-[#07080b] dark:text-white">
      <SmoothScroll />
      <GsapHomeAnimations />
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main id="main-content" className="px-3 pb-16 pt-28 sm:px-4 sm:pb-20 sm:pt-36">
        <article className="mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-black/60 transition hover:text-[#ff5a45] dark:text-white/90">
            <ArrowLeft className="h-4 w-4" />
            {locale === "en" ? "Back to blog" : "Назад в блог"}
          </Link>

          <div data-gsap="reveal" className="relative mt-6 overflow-hidden rounded-[1.55rem] border border-black/10 bg-white/75 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur dark:border-white/12 dark:bg-[#171a22] sm:mt-8 sm:rounded-[2rem] sm:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ff5a45]/10 blur-3xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.28em] text-[#ff5a45]">{post.category}</p>
            <h1 className="relative mt-4 font-radio text-4xl font-black leading-[0.98] tracking-[-0.08em] sm:text-7xl">{post.title}</h1>
            <p className="relative mt-5 text-base font-semibold leading-7 text-black/62 dark:text-white/90 sm:mt-6 sm:text-lg sm:leading-8">{post.excerpt}</p>
          </div>

          <div data-gsap="reveal" className="mt-8 rounded-[1.5rem] border border-black/10 bg-white/75 p-6 text-base font-semibold leading-8 text-black/62 shadow-[0_14px_42px_rgba(0,0,0,0.04)] dark:border-white/12 dark:bg-[#171a22] dark:text-white/90 sm:p-8">
            <p>
              {locale === "en"
                ? "The full article content will be migrated from data/blog.json into MDX or a content store. This page keeps the SEO route, localized metadata direction and article layout ready for the remaining content import."
                : "Полный текст статьи будет перенесён из data/blog.json в MDX или контентное хранилище. Сейчас страница сохраняет SEO-маршрут, локализованное направление и готовую структуру статьи для дальнейшего импорта контента."}
            </p>
          </div>

          <section data-gsap="reveal" className="mt-6 rounded-[1.5rem] border border-black/10 bg-white/75 p-6 shadow-[0_14px_42px_rgba(0,0,0,0.04)] dark:border-white/12 dark:bg-[#171a22] sm:p-8">
            <h2 className="font-radio text-3xl font-black tracking-[-0.06em]">
              {locale === "en" ? "Key takeaways" : "Главные выводы"}
            </h2>
            <ul className="mt-5 grid gap-3 text-sm font-semibold leading-6 text-black/62 dark:text-white/90 sm:grid-cols-2">
              {post.takeaways.map((item) => (
                <li key={item} className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/12 dark:bg-[#11141b]">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section data-gsap="reveal" className="mt-6 rounded-[1.5rem] bg-black p-6 text-white dark:bg-[#161a22] dark:text-white">
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
    </div>
  );
}
