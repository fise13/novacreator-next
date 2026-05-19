import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
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
    <div className="min-h-screen bg-[#f7f4ed] text-black dark:bg-[#07080b] dark:text-white">
      <JsonLd data={jsonLd} id={`silo-json-ld-${siloKey}-${normalizedLocale}`} />
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main id="main-content" className="relative pt-24 sm:pt-28">
        <section className="px-3 py-16 sm:px-4 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-black/55 dark:text-white/80">
              <Link href={localizedHref("/")} className="hover:text-[#ff5a45]">
                {isEn ? "Home" : "Главная"}
              </Link>
              <span className="mx-2">/</span>
              <Link href={localizedHref("/services")} className="hover:text-[#ff5a45]">
                {isEn ? "Services" : "Услуги"}
              </Link>
            </nav>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a45] sm:text-sm">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl text-balance font-radio text-4xl font-black leading-[0.95] tracking-[-0.08em] sm:text-7xl lg:text-8xl">
              {content.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-black/62 dark:text-white/90 sm:text-xl sm:leading-8">
              {content.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <section className="rounded-[1.5rem] border border-black/10 bg-white/75 p-6 dark:border-white/12 dark:bg-[#171a22] sm:p-8">
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

          <section>
            <h2 className="font-radio text-2xl font-black tracking-[-0.05em]">
              {isEn ? "Related services" : "Связанные услуги"}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(link.href)}
                  className="rounded-full border border-black/15 px-4 py-2 text-sm font-bold transition hover:border-[#ff5a45] hover:text-[#ff5a45] dark:border-white/15"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] bg-black p-8 text-white dark:bg-[#161a22]">
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
    </div>
  );
}
