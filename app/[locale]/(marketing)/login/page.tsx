import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PageMotionShell } from "@/components/layout/PageMotionShell";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
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
    path: "/login",
    title: locale === "en" ? "Login" : "Вход",
    description: locale === "en" ? "NovaCreator Studio client cabinet login." : "Вход в клиентский кабинет NovaCreator Studio.",
    noIndex: true,
  });
}

export default async function LoginPage({
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
    <PageMotionShell>
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main id="main-content" className="px-3 pb-16 pt-28 sm:px-4 sm:pb-20 sm:pt-36">
        <section className="mx-auto max-w-xl">
          <div data-gsap="reveal" className="rounded-[1.55rem] border border-black/10 bg-white/75 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur dark:border-white/10 dark:bg-[#171a22] sm:rounded-[2rem] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff5a45]">
              {isEn ? "Account" : "Аккаунт"}
            </p>
            <h1 className="mt-4 font-radio text-4xl font-black tracking-[-0.06em]">
              {isEn ? "Login" : "Вход"}
            </h1>
            <p className="mt-3 text-sm font-medium leading-6 text-black/66 dark:text-white/90">
              {isEn
                ? "The client cabinet is being prepared. For now, contact the team to access project materials."
                : "Клиентский кабинет готовится. Пока напишите команде, чтобы получить доступ к материалам проекта."}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-bold text-white dark:bg-white dark:text-black"
            >
              {isEn ? "Contact team" : "Связаться с командой"}
            </Link>
          </div>
        </section>
      </main>
      <HomeFooter content={homeContent} locale={normalizedLocale} />
    </PageMotionShell>
  );
}
