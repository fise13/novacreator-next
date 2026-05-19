import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { PageMotionShell } from "@/components/layout/PageMotionShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeFooter } from "@/components/home/HomeFooter";
import { PremiumNavbar } from "@/components/home/PremiumNavbar";
import { getHomeContent, type HomeLocale } from "@/components/home/home-content";
import { organizationId, websiteId } from "@/lib/organization-schema";
import {
  getServiceSilo,
  type ServiceSiloKey,
} from "@/lib/service-silo-content";
import { absoluteUrl } from "@/lib/seo";

type ServiceSiloPageProps = {
  locale: string;
  siloKey: ServiceSiloKey;
};

export async function ServiceSiloPage({ locale, siloKey }: ServiceSiloPageProps) {
  setRequestLocale(locale);
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const content = getServiceSilo(siloKey, locale);
  const homeContent = getHomeContent(normalizedLocale);
  const isEn = normalizedLocale === "en";
  const pageUrl = absoluteUrl(content.path, normalizedLocale);

  const localizedHref = (href: string) =>
    normalizedLocale === "en" && href.startsWith("/") ? `/en${href === "/" ? "" : href}` : href;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.h1,
        description: content.metaDescription,
        inLanguage: isEn ? "en" : "ru-KZ",
        isPartOf: { "@id": websiteId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isEn ? "Home" : "Главная",
            item: absoluteUrl("/", normalizedLocale),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: content.h1,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: content.h1,
        description: content.intro,
        serviceType: content.serviceType,
        url: pageUrl,
        provider: { "@id": organizationId },
        areaServed: [
          { "@type": "City", name: "Алматы" },
          { "@type": "Country", name: "Казахстан" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <PageMotionShell>
      <JsonLd data={jsonLd} id={`silo-json-ld-${siloKey}-${normalizedLocale}`} />
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main id="main-content" className="relative pt-24 sm:pt-28">
        <section className="relative overflow-hidden px-3 py-16 sm:px-4 sm:py-24">
          <div
            data-gsap-parallax
            data-depth="34"
            className="pointer-events-none absolute left-[8%] top-28 h-24 w-24 rounded-full bg-[#ff5a45]/10 blur-sm"
          />
          <div
            data-gsap-parallax
            data-depth="-42"
            className="pointer-events-none absolute right-[10%] top-32 h-36 w-36 rounded-full border border-black/10 bg-white/35 blur-md dark:border-white/10 dark:bg-[#171a22]"
          />
          <div className="relative mx-auto max-w-7xl">
            <nav
              data-gsap="reveal"
              aria-label="Breadcrumb"
              className="text-sm font-semibold text-black/55 dark:text-white/80"
            >
              <Link href={localizedHref("/")} className="hover:text-[#ff5a45]">
                {isEn ? "Home" : "Главная"}
              </Link>
              <span className="mx-2">/</span>
              <Link href={localizedHref("/services")} className="hover:text-[#ff5a45]">
                {isEn ? "Services" : "Услуги"}
              </Link>
            </nav>
            <p data-gsap="clip" className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a45] sm:text-sm">
              {content.eyebrow}
            </p>
            <h1
              data-gsap="clip"
              className="mt-4 max-w-5xl text-balance font-radio text-4xl font-black leading-[0.95] tracking-[-0.08em] sm:text-7xl lg:text-8xl"
            >
              {content.h1}
            </h1>
            <p
              data-gsap="reveal"
              className="mt-5 max-w-3xl text-base font-semibold leading-7 text-black/62 dark:text-white/90 sm:text-xl sm:leading-8"
            >
              {content.intro}
            </p>
            <div data-gsap="reveal" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localizedHref("/contact")}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white dark:bg-[#ffebe6] dark:text-[#ff5a45]"
              >
                {isEn ? "Get a quote" : "Получить расчёт"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={localizedHref("/portfolio")}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-bold dark:border-white/15"
              >
                {isEn ? "View cases" : "Смотреть кейсы"}
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-12 px-3 pb-16 sm:space-y-16 sm:px-4 sm:pb-24">
          {content.sections.map((section) => (
            <section
              key={section.title}
              data-gsap="reveal"
              className="rounded-[1.5rem] border border-black/10 bg-white/75 p-6 dark:border-white/12 dark:bg-[#171a22] sm:p-8"
            >
              <h2 className="font-radio text-3xl font-black tracking-[-0.06em] sm:text-5xl">{section.title}</h2>
              <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-black/62 dark:text-white/90">
                {section.body}
              </p>
              {section.bullets && (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      data-gsap="stagger-row"
                      className="flex gap-2 rounded-2xl border border-black/10 bg-[#f7f4ed] p-4 text-sm font-semibold leading-6 dark:border-white/10 dark:bg-[#0b0d13]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a45]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section
            data-gsap="reveal"
            className="rounded-[1.5rem] border border-black/10 bg-white/75 p-6 dark:border-white/12 dark:bg-[#171a22] sm:p-8"
          >
            <h2 className="font-radio text-3xl font-black tracking-[-0.06em] sm:text-5xl">
              {isEn ? "FAQ" : "Частые вопросы"}
            </h2>
            <div className="mt-6 divide-y divide-black/10 dark:divide-white/10">
              {content.faq.map((item) => (
                <details key={item.question} className="group py-4">
                  <summary className="cursor-pointer list-none text-base font-bold tracking-[-0.02em] marker:content-none">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm font-semibold leading-6 text-black/62 dark:text-white/90">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section data-gsap="reveal">
            <h2 className="font-radio text-2xl font-black tracking-[-0.05em]">
              {isEn ? "Related services" : "Связанные услуги"}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  data-gsap="stagger-row"
                  href={localizedHref(link.href)}
                  className="rounded-full border border-black/15 px-4 py-2 text-sm font-bold transition hover:border-[#ff5a45] hover:text-[#ff5a45] dark:border-white/15"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <section data-gsap="soft-scale" className="rounded-[1.5rem] bg-black p-8 text-white dark:bg-[#161a22]">
            <h2 className="font-radio text-3xl font-black tracking-[-0.06em]">{content.ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-white/70">{content.ctaText}</p>
            <Link
              href={localizedHref("/contact")}
              className="mt-6 inline-flex rounded-full bg-[#ff5a45] px-6 py-3 text-sm font-bold text-white"
            >
              {isEn ? "Contact us" : "Связаться"}
            </Link>
          </section>
        </div>
      </main>
      <HomeFooter content={homeContent} locale={normalizedLocale} />
    </PageMotionShell>
  );
}
