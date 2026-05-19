import Link from "next/link";
import type { HomeContent, HomeLocale } from "./home-content";

export function HomeFaqSection({
  content,
  locale,
}: {
  content: HomeContent;
  locale: HomeLocale;
}) {
  const isEn = locale === "en";
  const localizedHref = (href: string) =>
    locale === "en" && href.startsWith("/") ? `/en${href === "/" ? "" : href}` : href;

  return (
    <section id="faq" className="px-3 py-14 text-black dark:text-white sm:px-4 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p data-gsap="reveal" className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff5a45]">
          {content.faq.eyebrow}
        </p>
        <h2
          data-gsap="reveal"
          className="mt-4 max-w-4xl font-radio text-4xl font-black leading-[0.98] tracking-[-0.07em] sm:text-6xl"
        >
          {content.faq.title}
        </h2>
        <p data-gsap="reveal" className="mt-4 max-w-2xl text-base font-medium leading-7 text-black/60 dark:text-white/90">
          {content.faq.subtitle}
        </p>
        <div
          data-gsap="soft-scale"
          className="mt-8 divide-y divide-black/10 rounded-[1.5rem] border border-black/10 bg-white/75 dark:divide-white/10 dark:border-white/12 dark:bg-[#171a22]"
        >
          {content.faq.items.map((item) => (
            <details key={item.question} data-gsap="stagger-row" className="group px-5 py-4 sm:px-6">
              <summary className="cursor-pointer list-none text-base font-bold tracking-[-0.02em] marker:content-none">
                {item.question}
              </summary>
              <p className="mt-3 text-sm font-semibold leading-6 text-black/62 dark:text-white/90">{item.answer}</p>
            </details>
          ))}
        </div>
        <Link
          href={localizedHref("/faq")}
          className="mt-6 inline-flex text-sm font-bold text-[#ff5a45] hover:underline"
        >
          {content.faq.viewAll}
        </Link>
      </div>
    </section>
  );
}
