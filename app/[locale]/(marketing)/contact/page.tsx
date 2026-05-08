import type { Metadata } from "next";
import { ArrowDownRight, Clock3, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { FinalCta } from "@/components/home/FinalCta";
import { GsapHomeAnimations } from "@/components/home/GsapHomeAnimations";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { createMarketingMetadata } from "@/lib/seo";

const icons = [MessageCircle, Clock3, ShieldCheck];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMarketingMetadata(locale, "contact");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const content = getHomeContent(normalizedLocale);
  const isEn = normalizedLocale === "en";
  const cards = isEn
    ? [
        ["Start in any format", "Send a short message, reference or current website. We will understand the context first."],
        ["Clear next step", "You get a practical answer: what to do first, what can wait and how to launch calmly."],
        ["No template replies", "We answer around your niche, goals, channels and current digital system."],
      ]
    : [
        ["Начните в любом формате", "Отправьте короткое сообщение, референс или текущий сайт. Сначала поймём контекст."],
        ["Понятный следующий шаг", "Вы получите практичный ответ: что делать первым, что можно отложить и как спокойно запуститься."],
        ["Без шаблонных ответов", "Отвечаем вокруг вашей ниши, целей, каналов и текущей digital-системы."],
      ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-black dark:bg-[#07080b] dark:text-white">
      <SmoothScroll />
      <GsapHomeAnimations />
      <PremiumNavbar content={content} locale={normalizedLocale} />
      <main id="main-content" className="relative pt-28">
        <section className="relative overflow-hidden px-4 py-24 sm:py-32">
          <div data-gsap-speed="0.72" className="pointer-events-none absolute left-[8%] top-24 h-32 w-32 rounded-full bg-[#ff5a45]/10 blur-3xl" />
          <div data-gsap-speed="1.2" className="pointer-events-none absolute right-[10%] top-40 h-44 w-44 rounded-full bg-white/60 blur-3xl dark:bg-white/[0.06]" />
          <div className="relative mx-auto max-w-7xl">
            <p data-gsap="clip" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-[#ff5a45] backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
              <Sparkles className="h-4 w-4" />
              {isEn ? "Contact" : "Контакты"}
            </p>
            <h1 data-gsap="clip" className="mt-6 max-w-5xl text-balance font-radio text-6xl font-black leading-[0.9] tracking-[-0.08em] sm:text-8xl">
              {isEn ? "Let’s turn your idea into a clear launch plan" : "Превратим вашу идею в понятный план запуска"}
            </h1>
            <p data-gsap="soft-scale" className="mt-6 max-w-3xl text-xl font-medium leading-8 text-black/60 dark:text-white/58">
              {isEn
                ? "Tell us what you want to build, improve or promote. We will reply with the right questions, not a generic sales pitch."
                : "Расскажите, что хотите разработать, улучшить или продвинуть. Мы ответим правильными вопросами, а не шаблонной продажей."}
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-8 md:grid-cols-3">
          {cards.map(([title, text], index) => {
            const Icon = icons[index] ?? MessageCircle;

            return (
              <article key={title} data-gsap="stagger-row" className="group rounded-[1.6rem] border border-black/10 bg-white/75 p-5 shadow-[0_14px_50px_rgba(0,0,0,0.045)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ffebe6] text-[#ff5a45] dark:bg-white/[0.08]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowDownRight className="h-5 w-5 text-black/20 transition group-hover:text-[#ff5a45] dark:text-white/20" />
                </div>
                <h2 className="mt-5 text-xl font-black tracking-[-0.05em]">{title}</h2>
                <p className="mt-2 text-sm font-medium leading-6 text-black/55 dark:text-white/50">{text}</p>
              </article>
            );
          })}
        </section>

        <FinalCta content={content} variant="page" />
      </main>
      <HomeFooter content={content} locale={normalizedLocale} />
    </div>
  );
}
