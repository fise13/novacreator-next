import type { Metadata } from "next";
import { ArrowUpRight, HelpCircle, MessageCircle, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { PageMotionShell } from "@/components/layout/PageMotionShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { createMarketingMetadata } from "@/lib/seo";

const faqGroups = {
  ru: [
    {
      label: "SEO",
      icon: Search,
      questions: [
        ["Когда появятся результаты SEO?", "Первые сигналы обычно видны через 3-4 месяца: улучшается индексация, растут отдельные группы запросов, появляются первые органические заявки. Сильный и стабильный эффект чаще занимает 6-12 месяцев, потому что SEO зависит от конкуренции, возраста домена, качества контента и технического состояния сайта."],
        ["Можно ли гарантировать топ?", "Честно гарантировать конкретную позицию нельзя: поисковая выдача меняется, конкуренты тоже работают, алгоритмы обновляются. Мы гарантируем прозрачный процесс: аудит, план, внедрения, отчёты и понятные метрики роста."],
        ["Что входит в SEO?", "Технический аудит, структура страниц, семантика, контент, внутренняя перелинковка, локальное SEO, базовая ссылочная стратегия и ежемесячная аналитика по позициям, трафику и заявкам."],
      ],
    },
    {
      label: "Разработка",
      icon: Sparkles,
      questions: [
        ["Сколько делается лендинг?", "Обычно 10-14 рабочих дней. Если нужны интеграции, сложные формы, калькулятор, несколько языков или много контента, срок может вырасти до 15-20 рабочих дней."],
        ["Что лучше: лендинг или корпоративный сайт?", "Лендинг подходит для одного оффера, рекламы или быстрой проверки спроса. Корпоративный сайт нужен, если важно раскрыть компанию, услуги, кейсы, блог, FAQ, SEO-структуру и доверие."],
        ["Вы подключаете формы и аналитику?", "Да. Формы, цели, события, Telegram/CRM-направление заявок и базовая аналитика закладываются в запуск, чтобы сайт сразу можно было измерять."],
      ],
    },
    {
      label: "Реклама",
      icon: HelpCircle,
      questions: [
        ["Когда лучше запускать Google Ads?", "Когда нужен быстрый спрос или проверка оффера. Но реклама работает лучше, если посадочная страница уже объясняет ценность, закрывает возражения и быстро ведёт к заявке."],
        ["Как понять стартовый формат?", "Формат зависит от ниши, города, конкуренции и цели. Обычно сначала запускаем управляемый тест: понятная посадочная, цели, аналитика и гипотезы для первых заявок."],
        ["Можно ли совмещать SEO и рекламу?", "Да, это лучший сценарий: реклама даёт быстрые данные и заявки, SEO постепенно снижает зависимость от платного трафика и усиливает долгосрочный спрос."],
      ],
    },
    {
      label: "Процесс",
      icon: MessageCircle,
      questions: [
        ["С чего начинается проект?", "С короткой диагностики: ниша, текущий сайт, цели, сроки, конкуренты, аналитика и каналы. После этого предлагаем структуру и следующий шаг."],
        ["Можно начать маленько?", "Да. Часто лучше запустить MVP: одну сильную страницу, базовую аналитику и форму, а затем расширять проект по данным."],
        ["Что происходит после запуска?", "Проверяем скорость, формы, события, индексацию, первые заявки и точки улучшения. Затем усиливаем страницы, рекламу, SEO и аналитику."],
      ],
    },
  ],
  en: [
    {
      label: "SEO",
      icon: Search,
      questions: [
        ["When will SEO show results?", "First signals usually appear in 3-4 months: indexing improves, some query groups grow and first organic leads may appear. Strong stable growth often takes 6-12 months."],
        ["Can you guarantee top positions?", "No honest SEO can guarantee fixed rankings. We guarantee a transparent process: audit, plan, implementation, reports and clear growth metrics."],
        ["What is included in SEO?", "Technical audit, page structure, semantics, content, internal linking, local SEO, basic link strategy and monthly analytics."],
      ],
    },
    {
      label: "Development",
      icon: Sparkles,
      questions: [
        ["How long does a landing page take?", "Usually 10-14 business days. Integrations, calculators, multiple languages or lots of content can increase the timeline."],
        ["Landing page or corporate website?", "A landing page is best for one offer or paid traffic. A corporate website is better for services, cases, blog, FAQ, SEO and trust."],
        ["Do you connect forms and analytics?", "Yes. Forms, goals, events, Telegram/CRM lead delivery and basic analytics are part of launch."],
      ],
    },
    {
      label: "Ads",
      icon: HelpCircle,
      questions: [
        ["When should we launch Google Ads?", "When you need fast demand or offer validation. Ads work better if the landing page already explains value and leads to a request quickly."],
        ["How do we choose the starting format?", "It depends on niche, city, competition and goal. We usually begin with a controlled test: clear landing page, goals, analytics and first lead hypotheses."],
        ["Can SEO and ads work together?", "Yes. Ads give fast data and leads, SEO gradually lowers dependence on paid traffic."],
      ],
    },
    {
      label: "Process",
      icon: MessageCircle,
      questions: [
        ["How does a project start?", "With short diagnostics: niche, current website, goals, timing, competitors, analytics and channels."],
        ["Can we start small?", "Yes. Often the best move is an MVP: one strong page, basic analytics and form, then expansion based on data."],
        ["What happens after launch?", "We check speed, forms, events, indexing, first leads and improvement points, then strengthen pages, ads, SEO and analytics."],
      ],
    },
  ],
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMarketingMetadata(locale, "faq");
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const content = getHomeContent(normalizedLocale);
  const groups = faqGroups[normalizedLocale];
  const isEn = normalizedLocale === "en";
  const featured = groups[0].questions[0];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((group) =>
      group.questions.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    ),
  };
  const localizedHref = (href: string) =>
    normalizedLocale === "en" && href.startsWith("/") ? `/en${href === "/" ? "" : href}` : href;

  return (
    <PageMotionShell>
      <JsonLd data={faqJsonLd} id={`faq-json-ld-${normalizedLocale}`} />
      <PremiumNavbar content={content} locale={normalizedLocale} />
      <main id="main-content" className="relative pt-24 sm:pt-28">
        <section className="relative overflow-hidden px-3 py-16 sm:px-4 sm:py-32">
          <div data-gsap-parallax data-depth="42" className="pointer-events-none absolute left-[8%] top-28 h-32 w-32 rounded-full bg-[#ff5a45]/10 blur-2xl" />
          <div data-gsap-parallax data-depth="-38" className="pointer-events-none absolute right-[10%] top-40 h-44 w-44 rounded-full bg-white/50 blur-2xl dark:bg-white/[0.07]" />
          <div className="relative mx-auto max-w-7xl">
            <p data-gsap="clip" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a45] sm:text-sm sm:tracking-[0.28em]">FAQ</p>
            <h1 data-gsap="clip" className="mt-4 max-w-5xl text-balance font-radio text-4xl font-black leading-[0.95] tracking-[-0.08em] min-[380px]:text-5xl sm:mt-5 sm:text-8xl">
              {isEn ? "Questions that usually decide the project" : "Вопросы, которые обычно решают проект"}
            </h1>
            <p data-gsap="soft-scale" className="mt-5 max-w-3xl text-base font-semibold leading-7 text-black/62 dark:text-white/90 sm:mt-6 sm:text-xl sm:leading-8">
              {isEn
                ? "No generic support page. Here are the answers we usually explain on first calls: timing, SEO, ads, development and what happens after launch."
                : "Это не справочная страница ради галочки. Здесь ответы, которые мы обычно объясняем на первых созвонах: сроки, SEO, реклама, разработка и что происходит после запуска."}
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-3 pb-20 sm:px-4 sm:pb-24 lg:grid-cols-[0.34fr_0.66fr]">
          <aside data-gsap="soft-scale" data-gsap-pin-sidebar className="h-fit rounded-[1.5rem] border border-black/10 bg-white/75 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.05)] backdrop-blur dark:border-white/12 dark:bg-[#171a22] sm:rounded-[2rem] sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/64 dark:text-white/90">
              {isEn ? "Topics" : "Темы"}
            </p>
            <div className="mt-4 grid gap-2">
              {groups.map((group) => {
                const Icon = group.icon;
                return (
                  <a key={group.label} href={`#${group.label}`} data-gsap="stagger-row" className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-3 text-sm font-bold transition hover:border-[#ff5a45]/40 dark:border-white/12 dark:bg-[#11141b]">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ffebe6] text-[#ff5a45] dark:bg-white/[0.1]">
                      <Icon className="h-4 w-4" />
                    </span>
                    {group.label}
                  </a>
                );
              })}
            </div>
            <div className="mt-5 rounded-[1.4rem] bg-black p-5 text-white dark:bg-[#161a22] dark:text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/82">
                {isEn ? "No answer?" : "Нет ответа?"}
              </p>
              <p className="mt-3 text-lg font-black tracking-[-0.04em]">
                {isEn ? "Send your specific situation." : "Напишите вашу конкретную ситуацию."}
              </p>
              <Link href={localizedHref("/contact")} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#ff5a45] px-4 py-2.5 text-sm font-bold text-white">
                {isEn ? "Ask us" : "Задать вопрос"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>

          <div className="space-y-6">
            <article data-gsap="clip" className="rounded-[1.6rem] border border-black/10 bg-white/80 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.06)] backdrop-blur dark:border-white/12 dark:bg-[#171a22] sm:rounded-[2.4rem] sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ff5a45]">
                {isEn ? "Featured answer" : "Главный ответ"}
              </p>
              <h2 className="mt-4 font-radio text-3xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl">{featured[0]}</h2>
              <p className="mt-4 text-base font-semibold leading-7 text-black/62 dark:text-white/90 sm:mt-5 sm:text-lg sm:leading-8">{featured[1]}</p>
            </article>

            {groups.map((group) => (
              <section key={group.label} id={group.label} className="scroll-mt-32">
                <div data-gsap="draw-line" className="mb-4 h-px w-full origin-left bg-black/15 dark:bg-white/15" />
                <h2 data-gsap="clip" className="mb-4 font-radio text-3xl font-black tracking-[-0.07em] sm:text-5xl">{group.label}</h2>
                <div className="grid gap-3">
                  {group.questions.map(([question, answer], index) => (
                    <details key={question} data-gsap="stagger-row" data-gsap-faq-detail className="group rounded-[1.3rem] border border-black/10 bg-white/75 p-4 shadow-[0_12px_44px_rgba(0,0,0,0.04)] transition dark:border-white/12 dark:bg-[#11141b] sm:rounded-[1.5rem] sm:p-5" open={index === 0}>
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black tracking-[-0.04em] sm:text-lg">
                        {question}
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ffebe6] text-[#ff5a45] transition group-open:rotate-45 dark:bg-white/[0.08]">+</span>
                      </summary>
                      <p data-gsap-faq-answer className="mt-4 max-w-3xl overflow-hidden text-base font-semibold leading-8 text-black/62 dark:text-white/90">{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <HomeFooter content={content} locale={normalizedLocale} />
    </PageMotionShell>
  );
}
