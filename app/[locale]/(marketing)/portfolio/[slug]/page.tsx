import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { PageMotionShell } from "@/components/layout/PageMotionShell";
import { HomeFooter } from "@/components/home/HomeFooter";
import { MotorLandPreview } from "@/components/home/MotorLandPreview";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { createSeoMetadata, normalizeSeoLocale, portfolioSeoEntries } from "@/lib/seo";
import { createPageUrl, generateSchema } from "@/lib/seo/schema";

type LocalizedProject = {
  kicker: string;
  title: string;
  intro: string;
  challenge: string;
  solution: string;
  outcome: string;
  stack: string[];
  next: string[];
  primary: string;
  href: string;
};

const projects: Record<string, Record<"ru" | "en", LocalizedProject>> = {
  "motor-land": {
    ru: {
      kicker: "ecommerce · development",
      title: "Motor-Land.kz",
      intro:
        "Корпоративный веб-проект по продаже контрактных двигателей и автозапчастей: понятная структура каталога, блоки доверия и адаптивный интерфейс.",
      challenge: "Клиенту нужна была понятная витрина для сложного автомобильного ассортимента и быстрый путь к обращению.",
      solution:
        "Собрали структуру страниц, оформили продуктовые блоки, усилили доверие и подготовили сайт к дальнейшему SEO-развитию.",
      outcome: "Проект получил более аккуратную упаковку, ясные сценарии заявки и основу для масштабирования каталога.",
      stack: ["Responsive web", "Catalog UX", "SEO-база", "Lead forms"],
      next: ["Расширение каталога", "SEO-кластеры по категориям", "Интеграция заявок"],
      primary: "Открыть сайт",
      href: "https://motor-land.kz",
    },
    en: {
      kicker: "ecommerce · development",
      title: "Motor-Land.kz",
      intro:
        "Corporate web project for contract engines and automotive parts sales: clear catalog structure, trust blocks and responsive interface.",
      challenge: "The client needed a clear showcase for a complex automotive range and a fast path to request.",
      solution:
        "We shaped page structure, product blocks, trust sections and prepared the website for future SEO growth.",
      outcome: "The project received clearer packaging, request scenarios and a base for catalog scaling.",
      stack: ["Responsive web", "Catalog UX", "SEO base", "Lead forms"],
      next: ["Catalog expansion", "SEO clusters by category", "Lead integration"],
      primary: "Open website",
      href: "https://motor-land.kz",
    },
  },
  autocore: {
    ru: {
      kicker: "b2b · swiftui · firebase",
      title: "AutoCore (iOS + macOS)",
      intro:
        "Кроссплатформенное приложение для iOS и macOS для управления автомобильными процессами: авторизация, рабочие сценарии и синхронизация.",
      challenge: "Нужно было превратить операционные процессы в удобный цифровой инструмент для команды.",
      solution:
        "Спроектировали приложение на SwiftUI с понятной архитектурой, Firebase-интеграцией и сценариями ежедневной работы.",
      outcome: "Команда получила базу для дальнейшего развития B2B-продукта и автоматизации внутренних процессов.",
      stack: ["SwiftUI", "macOS", "Firebase", "B2B workflows"],
      next: ["Расширение ролей", "Синхронизация данных", "Отчёты и аналитика"],
      primary: "Открыть репозиторий",
      href: "https://github.com",
    },
    en: {
      kicker: "b2b · swiftui · firebase",
      title: "AutoCore (iOS + macOS)",
      intro:
        "Cross-platform iOS and macOS app for automotive workflow management: authorization, work scenarios and synchronization.",
      challenge: "Operational processes had to become a convenient digital tool for the team.",
      solution:
        "We designed a SwiftUI app with clear architecture, Firebase integration and everyday work scenarios.",
      outcome: "The team received a foundation for further B2B product growth and internal process automation.",
      stack: ["SwiftUI", "macOS", "Firebase", "B2B workflows"],
      next: ["Role expansion", "Data synchronization", "Reports and analytics"],
      primary: "Open repository",
      href: "https://github.com",
    },
  },
  urbanframe: {
    ru: {
      kicker: "real estate · landing",
      title: "UrbanFrame Development",
      intro:
        "Лендинг для застройщика с акцентом на премиальную подачу жилого комплекса, удобную навигацию по преимуществам и быстрый сценарий заявки.",
      challenge: "Нужно было упаковать сложный продукт недвижимости так, чтобы пользователь быстро понял локацию, выгоды, планировки и следующий шаг.",
      solution:
        "Собрали сильный hero, блоки инфраструктуры, roadmap строительства, карточки планировок, доверие и CTA на консультацию.",
      outcome: "Проект получил понятную структуру для рекламного трафика и основу для дальнейшего SEO-продвижения по жилым комплексам.",
      stack: ["Landing UX", "Lead forms", "Real estate SEO", "Motion UI"],
      next: ["Калькулятор ипотеки", "Интерактивные планировки", "CRM-интеграция"],
      primary: "Обсудить похожий проект",
      href: "/contact",
    },
    en: {
      kicker: "real estate · landing",
      title: "UrbanFrame Development",
      intro:
        "Developer landing page focused on premium residential presentation, clear benefit navigation and fast lead scenario.",
      challenge: "A complex real estate offer had to explain location, benefits, floor plans and next steps quickly.",
      solution:
        "We built a strong hero, infrastructure blocks, construction roadmap, floor plan cards, trust signals and consultation CTA.",
      outcome: "The project received a clear structure for paid traffic and a base for future residential SEO growth.",
      stack: ["Landing UX", "Lead forms", "Real estate SEO", "Motion UI"],
      next: ["Mortgage calculator", "Interactive floor plans", "CRM integration"],
      primary: "Discuss similar project",
      href: "/contact",
    },
  },
  lakeview: {
    ru: {
      kicker: "hospitality · booking",
      title: "LakeView Hotel",
      intro:
        "Премиальная страница бутик-отеля с атмосферной подачей, карточками номеров, сезонными предложениями и сценарием бронирования.",
      challenge: "Отелю нужна была страница, которая продаёт не только номер, но и ощущение отдыха: вид, сервис, детали и спокойствие.",
      solution:
        "Собрали визуальный сторителлинг, блоки номеров, преимущества, отзывы, FAQ и CTA на бронирование.",
      outcome: "Страница стала понятной посадочной для рекламы и прямых бронирований без перегруза интерфейса.",
      stack: ["Hospitality UX", "Booking flow", "Seasonal offers", "Trust blocks"],
      next: ["Модуль бронирования", "Мультиязычность", "Интеграция с PMS"],
      primary: "Обсудить похожий проект",
      href: "/contact",
    },
    en: {
      kicker: "hospitality · booking",
      title: "LakeView Hotel",
      intro:
        "Premium boutique hotel page with atmospheric story, room cards, seasonal offers and booking scenario.",
      challenge: "The hotel needed a page selling not only a room, but the feeling of rest: view, service, details and calm.",
      solution:
        "We built visual storytelling, room blocks, benefits, reviews, FAQ and booking CTA.",
      outcome: "The page became a clear landing for ads and direct bookings without interface overload.",
      stack: ["Hospitality UX", "Booking flow", "Seasonal offers", "Trust blocks"],
      next: ["Booking module", "Multilingual content", "PMS integration"],
      primary: "Discuss similar project",
      href: "/contact",
    },
  },
  bodycraft: {
    ru: {
      kicker: "fitness · leadgen",
      title: "BodyCraft Studio",
      intro:
        "Энергичный лендинг для фитнес-тренера с программами, результатами клиентов, квизом и быстрым сбором заявок.",
      challenge: "Нужно было выделить тренера среди однотипных фитнес-страниц и показать понятный путь от интереса к первой тренировке.",
      solution:
        "Создали динамичную структуру с программами, прогрессом, социальным доказательством, FAQ и квизом под подбор формата.",
      outcome: "Лендинг стал яркой точкой входа для рекламы и социальных сетей, где пользователь быстро выбирает программу.",
      stack: ["Leadgen", "Quiz flow", "Fitness content", "Motion UI"],
      next: ["Онлайн-оплата", "Личный кабинет", "Автоворонка сообщений"],
      primary: "Обсудить похожий проект",
      href: "/contact",
    },
    en: {
      kicker: "fitness · leadgen",
      title: "BodyCraft Studio",
      intro:
        "Energetic landing page for a fitness coach with programs, client results, quiz and fast lead capture.",
      challenge: "The coach needed to stand out from generic fitness pages and show a clear path to the first workout.",
      solution:
        "We created a dynamic structure with programs, progress proof, social trust, FAQ and a format-selection quiz.",
      outcome: "The landing became a bright entry point for ads and social traffic where users quickly choose a program.",
      stack: ["Leadgen", "Quiz flow", "Fitness content", "Motion UI"],
      next: ["Online payment", "Client cabinet", "Message automation"],
      primary: "Discuss similar project",
      href: "/contact",
    },
  },
  technest: {
    ru: {
      kicker: "retail · ecommerce",
      title: "TechNest Retail",
      intro:
        "Концепт интернет-магазина техники с каталогом, карточками товаров, checkout-сценарием и аналитикой e-commerce.",
      challenge: "Нужно было сделать каталог понятным, быстрым и готовым к масштабированию по категориям, брендам и акциям.",
      solution:
        "Собрали логику категорий, промо-блоки, карточки товаров, корзину, сценарий оформления и основу для аналитики.",
      outcome: "Проект получил структуру магазина, которую можно развивать в полноценный e-commerce с SEO и рекламой.",
      stack: ["Catalog UX", "Checkout", "Product cards", "Analytics"],
      next: ["Оплата", "Личный кабинет", "SEO по категориям"],
      primary: "Обсудить похожий проект",
      href: "/contact",
    },
    en: {
      kicker: "retail · ecommerce",
      title: "TechNest Retail",
      intro:
        "Electronics e-commerce concept with catalog, product cards, checkout scenario and e-commerce analytics.",
      challenge: "The catalog had to be clear, fast and ready to scale across categories, brands and promos.",
      solution:
        "We built category logic, promo blocks, product cards, cart, checkout scenario and analytics base.",
      outcome: "The project received store structure ready to grow into full e-commerce with SEO and ads.",
      stack: ["Catalog UX", "Checkout", "Product cards", "Analytics"],
      next: ["Payments", "Customer cabinet", "Category SEO"],
      primary: "Discuss similar project",
      href: "/contact",
    },
  },
  medline: {
    ru: {
      kicker: "medical · corporate",
      title: "MedLine Clinic",
      intro:
        "Сайт клиники с услугами, врачами, FAQ, формой записи и локальной SEO-структурой для города.",
      challenge: "Пациентам нужно быстро понять услуги, доверие к врачам, условия записи и получить понятный путь к консультации.",
      solution:
        "Собрали страницы услуг, карточки специалистов, блоки доверия, FAQ, форму записи и локальные SEO-точки.",
      outcome: "Сайт стал спокойной и понятной системой записи, которую можно расширять новыми направлениями и статьями.",
      stack: ["Medical UX", "Local SEO", "Appointments", "FAQ"],
      next: ["Онлайн-запись", "Статьи врачей", "Карточки услуг"],
      primary: "Обсудить похожий проект",
      href: "/contact",
    },
    en: {
      kicker: "medical · corporate",
      title: "MedLine Clinic",
      intro:
        "Clinic website with services, doctors, FAQ, appointment form and local city SEO structure.",
      challenge: "Patients needed to quickly understand services, doctor trust, appointment conditions and consultation path.",
      solution:
        "We built service pages, doctor cards, trust blocks, FAQ, appointment form and local SEO points.",
      outcome: "The website became a calm appointment system that can grow with new directions and articles.",
      stack: ["Medical UX", "Local SEO", "Appointments", "FAQ"],
      next: ["Online booking", "Doctor articles", "Service pages"],
      primary: "Discuss similar project",
      href: "/contact",
    },
  },
  finpilot: {
    ru: {
      kicker: "saas · product",
      title: "FinPilot Analytics",
      intro:
        "SaaS-страница для финансовой аналитики с дашбордами, продуктовыми планами, onboarding-сценарием и заявкой на демо.",
      challenge: "Нужно было объяснить сложный аналитический продукт простым языком и показать ценность до демонстрации.",
      solution:
        "Собрали product story, блоки фич, mockup-дашборды, планы продукта, FAQ и сценарий заявки на демо.",
      outcome: "Страница стала понятной витриной продукта для B2B-аудитории и основой для performance-кампаний.",
      stack: ["SaaS UX", "Dashboard mockups", "Plans", "Demo CTA"],
      next: ["Онбординг", "Документация", "Product-led growth"],
      primary: "Обсудить похожий проект",
      href: "/contact",
    },
    en: {
      kicker: "saas · product",
      title: "FinPilot Analytics",
      intro:
        "SaaS page for financial analytics with dashboards, product plans, onboarding scenario and demo request.",
      challenge: "A complex analytics product had to be explained simply and show value before the demo.",
      solution:
        "We built product story, feature blocks, dashboard mockups, product plans, FAQ and demo request scenario.",
      outcome: "The page became a clear B2B product showcase and base for performance campaigns.",
      stack: ["SaaS UX", "Dashboard mockups", "Plans", "Demo CTA"],
      next: ["Onboarding", "Documentation", "Product-led growth"],
      primary: "Discuss similar project",
      href: "/contact",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const normalizedLocale = normalizeSeoLocale(locale);
  const seo = portfolioSeoEntries[slug]?.[normalizedLocale];

  if (!seo) {
    notFound();
  }

  return createSeoMetadata({
    locale,
    path: `/portfolio/${slug}`,
    title: seo.title,
    description: seo.description,
  });
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const homeContent = getHomeContent(normalizedLocale);

  const project = projects[slug as keyof typeof projects]?.[locale === "en" ? "en" : "ru"];

  if (!project) {
    notFound();
  }

  const pageUrl = createPageUrl(`/portfolio/${slug}`, normalizedLocale);
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateSchema("breadcrumb", {
        id: `${pageUrl}#breadcrumb`,
        items: [
          { name: locale === "en" ? "Home" : "Главная", item: createPageUrl("/", normalizedLocale) },
          { name: locale === "en" ? "Portfolio" : "Портфолио", item: createPageUrl("/portfolio", normalizedLocale) },
          { name: project.title, item: pageUrl },
        ],
      }),
      generateSchema("article", {
        id: `${pageUrl}#case-study`,
        url: pageUrl,
        title: project.title,
        description: project.intro,
        locale: normalizedLocale,
        publishedAt: "2026-05-01",
        updatedAt: "2026-05-01",
        keywords: [project.kicker, "case study", "digital studio"],
      }),
      generateSchema("review", {
        id: `${pageUrl}#review`,
        itemName: project.title,
        reviewBody: project.outcome,
        locale: normalizedLocale,
        url: pageUrl,
      }),
    ],
  };

  return (
    <PageMotionShell>
      <JsonLd data={projectSchema} id={`portfolio-json-ld-${normalizedLocale}-${slug}`} />
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main id="main-content" className="px-3 pb-16 pt-28 sm:px-4 sm:pb-20 sm:pt-36">
        <article className="mx-auto max-w-7xl">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-black/60 transition hover:text-[#ff5a45] dark:text-white/90">
            <ArrowLeft className="h-4 w-4" />
            {locale === "en" ? "Back to portfolio" : "Назад в портфолио"}
          </Link>

          <div data-gsap="reveal" className="relative mt-6 overflow-hidden rounded-[1.55rem] border border-black/10 bg-white/75 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur dark:border-white/12 dark:bg-[#171a22] sm:mt-8 sm:rounded-[2rem] sm:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ff5a45]/10 blur-3xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.28em] text-[#ff5a45]">{project.kicker}</p>
            <h1 className="relative mt-4 font-radio text-4xl font-black leading-[0.98] tracking-[-0.08em] sm:text-7xl">{project.title}</h1>
            <p className="relative mt-5 max-w-3xl text-base font-semibold leading-7 text-black/62 dark:text-white/90 sm:mt-6 sm:text-lg sm:leading-8">{project.intro}</p>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white dark:bg-white dark:text-black"
            >
              {project.primary}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {slug === "motor-land" && (
            <section data-gsap="soft-scale" className="mt-6 overflow-hidden rounded-[1.55rem] border border-black/10 bg-[#f1efe8] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#10131a] sm:rounded-[2rem] sm:p-5">
              <div className="min-h-[430px]">
                <MotorLandPreview />
              </div>
            </section>
          )}

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [locale === "en" ? "Challenge" : "Задача", project.challenge],
              [locale === "en" ? "Solution" : "Решение", project.solution],
              [locale === "en" ? "Outcome" : "Результат", project.outcome],
            ].map(([title, text]) => (
              <section key={title} data-gsap="reveal" className="rounded-[1.5rem] border border-black/10 bg-white/75 p-5 shadow-[0_14px_42px_rgba(0,0,0,0.04)] dark:border-white/12 dark:bg-[#171a22]">
                <h2 className="text-xl font-bold tracking-[-0.04em]">{title}</h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/62 dark:text-white/90">{text}</p>
              </section>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <section data-gsap="reveal" className="rounded-[1.5rem] border border-black/10 bg-white/75 p-6 shadow-[0_14px_42px_rgba(0,0,0,0.04)] dark:border-white/12 dark:bg-[#171a22]">
              <h2 className="font-radio text-3xl font-black tracking-[-0.06em]">
                {locale === "en" ? "Stack and scope" : "Стек и объём"}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-black/62 dark:border-white/12 dark:bg-white/[0.08] dark:text-white/90">
                    {item}
                  </span>
                ))}
              </div>
            </section>
            <section data-gsap="reveal" className="rounded-[1.5rem] border border-black/10 bg-white/75 p-6 shadow-[0_14px_42px_rgba(0,0,0,0.04)] dark:border-white/12 dark:bg-[#171a22]">
              <h2 className="font-radio text-3xl font-black tracking-[-0.06em]">
                {locale === "en" ? "Growth opportunities" : "Куда развивать дальше"}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm font-semibold leading-6 text-black/62 dark:text-white/90">
                {project.next.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ff5a45]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section data-gsap="reveal" className="mt-6 rounded-[1.5rem] bg-black p-6 text-white dark:bg-[#161a22] dark:text-white">
            <h2 className="font-radio text-3xl font-black tracking-[-0.06em]">
              {locale === "en" ? "Want a case like this?" : "Хотите похожий проект?"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 opacity-70">
              {locale === "en"
                ? "Send your niche, current website and goals. We will suggest structure, timeline and launch format."
                : "Отправьте нишу, текущий сайт и цели. Мы предложим структуру, сроки и формат запуска."}
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#ff5a45] px-5 py-3 text-sm font-bold text-white">
              {locale === "en" ? "Discuss project" : "Обсудить проект"}
              <ExternalLink className="h-4 w-4" />
            </Link>
          </section>
        </article>
      </main>
      <HomeFooter content={homeContent} locale={normalizedLocale} />
    </PageMotionShell>
  );
}
