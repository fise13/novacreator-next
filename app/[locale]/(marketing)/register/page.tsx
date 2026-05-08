import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { GsapHomeAnimations } from "@/components/home/GsapHomeAnimations";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { Link } from "@/i18n/navigation";
import { createSeoMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return createSeoMetadata({
    locale,
    path: "/register",
    title: locale === "en" ? "Registration" : "Регистрация",
    description: locale === "en" ? "NovaCreator Studio project registration page." : "Страница регистрации проекта NovaCreator Studio.",
    noIndex: true,
  });
}

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";
  const normalizedLocale: HomeLocale = isEn ? "en" : "ru";
  const homeContent = getHomeContent(normalizedLocale);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-black dark:bg-[#07080b] dark:text-white">
      <SmoothScroll />
      <GsapHomeAnimations />
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main id="main-content" className="px-4 pb-20 pt-36">
        <section className="mx-auto max-w-xl">
          <div data-gsap="reveal" className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff5a45]">
              {isEn ? "Account" : "Аккаунт"}
            </p>
            <h1 className="mt-4 font-radio text-4xl font-black tracking-[-0.06em]">
              {isEn ? "Registration" : "Регистрация"}
            </h1>
            <p className="mt-3 text-sm font-medium leading-6 text-black/58 dark:text-white/55">
              {isEn
                ? "Project registration will be connected with the client cabinet. Submit a request to start a project now."
                : "Регистрация проектов будет подключена вместе с клиентским кабинетом. Оставьте заявку, чтобы начать проект сейчас."}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-bold text-white dark:bg-white dark:text-black"
            >
              {isEn ? "Start project" : "Начать проект"}
            </Link>
          </div>
        </section>
      </main>
      <HomeFooter content={homeContent} locale={normalizedLocale} />
    </div>
  );
}
