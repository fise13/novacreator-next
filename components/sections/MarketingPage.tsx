import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { getMarketingPageContent, type MarketingPageKey, type MarketingSection } from "@/lib/marketing-page-content";
import { GsapHomeAnimations } from "../home/GsapHomeAnimations";
import { HomeFooter } from "../home/HomeFooter";
import { PremiumNavbar } from "../home/PremiumNavbar";
import { SmoothScroll } from "../home/SmoothScroll";
import { getHomeContent, type HomeLocale } from "../home/home-content";

type MarketingPageProps = {
  locale: string;
  pageKey: MarketingPageKey;
};

export async function MarketingPage({ locale, pageKey }: MarketingPageProps) {
  setRequestLocale(locale);
  const normalizedLocale: HomeLocale = locale === "en" ? "en" : "ru";
  const content = getMarketingPageContent(locale, pageKey);
  const homeContent = getHomeContent(normalizedLocale);
  const localizedHref = (href: string) =>
    locale === "en" && href.startsWith("/") ? `/en${href === "/" ? "" : href}` : href;
  const isEn = normalizedLocale === "en";
  const pricePattern =
    /(KZT|₸|USD|RUB|руб|доллар|from\s+\d[\d\s,.]*(KZT|USD|RUB|₸)|от\s+\d[\d\s,.]*(KZT|USD|RUB|₸|руб)|pricing|price|цена|цене|пакет|пакеты)/i;
  const isPriceLike = (...values: Array<string | undefined>) =>
    values.some((value) => (value ? pricePattern.test(value) : false));

  const resolveVariant = (section: MarketingSection, index: number): NonNullable<MarketingSection["variant"]> => {
    if (section.variant) {
      return section.variant;
    }

    if (section.steps) {
      return "timeline";
    }

    if (section.cards && index % 4 === 0) {
      return "split";
    }

    if (section.cards && index % 3 === 1) {
      return "mosaic";
    }

    if (section.list) {
      return "plain";
    }

    return "default";
  };

  const renderCard = (card: {
    title: string;
    text: string;
    href?: string;
    meta?: string;
    bullets?: string[];
  }, variant: NonNullable<MarketingSection["variant"]> = "default", index = 0) => {
    const content = (
      <>
        {card.meta && !isPriceLike(card.meta) && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#ff5a45]">
            {card.meta}
          </p>
        )}
        <h3 className="text-xl font-bold tracking-[-0.04em]">{card.title}</h3>
        <p className="mt-3 text-sm font-medium leading-6 text-black/55 dark:text-white/50">{card.text}</p>
        {card.bullets && (
          <ul className="mt-4 space-y-2 text-sm font-medium leading-6 text-black/50 dark:text-white/48">
            {card.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a45]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        {card.href && (
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#ff5a45]">
            {isEn ? "Open" : "Открыть"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        )}
      </>
    );
    const mosaicClass = variant === "mosaic" && index === 0 ? "md:col-span-2 md:row-span-2 md:p-8" : "";
    const plainClass = variant === "plain" ? "border-transparent bg-transparent p-0 shadow-none hover:translate-y-0 dark:bg-transparent" : "";
    const cardClass = `group rounded-[1.5rem] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-[#ff5a45]/40 dark:border-white/10 dark:bg-white/[0.05] ${mosaicClass} ${plainClass}`;

    return card.href ? (
      <Link
        key={card.title}
        href={localizedHref(card.href)}
        data-gsap={variant === "mosaic" ? "soft-scale" : "stagger-row"}
        className={cardClass}
      >
        {content}
      </Link>
    ) : (
      <article
        key={card.title}
        data-gsap={variant === "mosaic" ? "soft-scale" : "stagger-row"}
        className={cardClass}
      >
        {content}
      </article>
    );
  };

  const renderSectionContent = (section: MarketingSection, variant: NonNullable<MarketingSection["variant"]>) => {
    const facts = section.facts?.filter((fact) => !isPriceLike(fact.title, fact.text));
    const cards = section.cards?.filter((card) => !isPriceLike(card.title, card.text, card.meta));
    const list = section.list?.filter((item) => !isPriceLike(item));

    return (
    <>
      {facts && facts.length > 0 && (
        <div className={`mt-8 grid gap-3 ${variant === "featureBand" ? "md:grid-cols-3" : "sm:grid-cols-3"}`}>
          {facts.map((fact) => (
            <div key={fact.title} data-gsap="stagger-row" className="rounded-[1.35rem] border border-black/10 bg-[#f7f4ed] p-5 transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a45]">{fact.title}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-black/65 dark:text-white/60">{fact.text}</p>
            </div>
          ))}
        </div>
      )}

      {cards && cards.length > 0 && (
        <div className={`mt-8 grid gap-4 ${
          variant === "mosaic"
            ? "md:grid-cols-3"
            : variant === "split"
              ? "md:grid-cols-1"
              : "md:grid-cols-2 xl:grid-cols-4"
        }`}>
          {cards.map((card, index) => renderCard(card, variant, index))}
        </div>
      )}

      {list && list.length > 0 && (
        <ul className={`mt-7 grid gap-3 text-sm font-medium leading-6 text-black/55 dark:text-white/50 ${
          variant === "plain" ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}>
          {list.map((item) => (
            <li key={item} data-gsap="stagger-row" className="border-b border-black/10 py-4 dark:border-white/10">
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.steps && (
        <div className="relative mt-8 grid gap-4">
          <div data-gsap="draw-line" className="absolute left-5 top-0 hidden h-full w-px origin-top bg-black/15 dark:bg-white/15 sm:block" />
          {section.steps.map((step, index) => (
            <div key={step.title} data-gsap="stagger-row" className="relative grid gap-4 rounded-[1.35rem] border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05] sm:grid-cols-[auto_1fr]">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-black text-sm font-black text-white dark:bg-white dark:text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-[-0.04em]">{step.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-black/55 dark:text-white/50">{step.text}</p>
                {step.meta && <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a45]">{step.meta}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {section.faq && (
        <div className="mt-7 grid gap-3">
          {section.faq.map((item) => (
            <article key={item.title} data-gsap="stagger-row" className="rounded-[1.25rem] border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
              <h3 className="text-lg font-bold tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-black/55 dark:text-white/50">{item.text}</p>
            </article>
          ))}
        </div>
      )}

      {section.form === "contact" && (
        <form data-gsap="soft-scale" className="mt-7 grid gap-4 rounded-[1.5rem] bg-[#dcf5df] p-5 dark:bg-[#102018]">
          <input type="hidden" name="type" value="contact" />
          <input type="hidden" name="form_name" value="Contact Page Form" />
          <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-label="Website" />
          <div className="grid gap-4 md:grid-cols-2">
            <input name="name" required minLength={2} placeholder={isEn ? "Name" : "Имя"} className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm font-semibold text-black outline-none focus:ring-4 focus:ring-[#ff5a45]/20" />
            <input name="email" required type="email" placeholder="Email" className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm font-semibold text-black outline-none focus:ring-4 focus:ring-[#ff5a45]/20" />
            <input name="phone" required type="tel" placeholder={isEn ? "Phone" : "Телефон"} className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm font-semibold text-black outline-none focus:ring-4 focus:ring-[#ff5a45]/20" />
            <select name="service" className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm font-semibold text-black outline-none focus:ring-4 focus:ring-[#ff5a45]/20">
              <option>{isEn ? "Website development" : "Разработка сайта"}</option>
              <option>SEO</option>
              <option>Google Ads</option>
              <option>{isEn ? "iOS development" : "iOS-разработка"}</option>
            </select>
          </div>
          <textarea name="message" required minLength={10} placeholder={isEn ? "Tell us about the project" : "Расскажите о проекте"} className="min-h-32 rounded-xl border border-black/15 bg-white px-4 py-3 text-sm font-semibold text-black outline-none focus:ring-4 focus:ring-[#ff5a45]/20" />
          <button type="submit" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff5a45] px-6 text-sm font-bold text-white">
            {isEn ? "Send request" : "Отправить заявку"}
          </button>
        </form>
      )}

      {section.cta && (
        <div data-gsap="clip" className="mt-7 rounded-[1.5rem] bg-black p-6 text-white dark:bg-white dark:text-black">
          <h3 className="font-radio text-3xl font-black tracking-[-0.06em]">{section.cta.title}</h3>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-6 opacity-70">{section.cta.text}</p>
          <Link href={localizedHref(section.cta.href)} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#ff5a45] px-5 py-3 text-sm font-bold text-white">
            {section.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </>
    );
  };

  const renderSection = (section: MarketingSection, index: number) => {
    if (isPriceLike(section.title) && !section.steps && !section.faq && !section.cta) {
      return null;
    }

    const variant = resolveVariant(section, index);
    const isPlain = variant === "plain" || variant === "editorial";
    const isQuote = variant === "quote";
    const isSplit = variant === "split";
    const isFeatureBand = variant === "featureBand";
    const sectionClass = isPlain
      ? "py-10 sm:py-14"
      : isQuote
        ? "overflow-hidden rounded-[2.25rem] bg-black p-8 text-white dark:bg-white dark:text-black sm:p-10"
        : isFeatureBand
          ? "overflow-hidden rounded-[2.25rem] bg-[#dcf5df] p-8 dark:bg-[#102018] sm:p-10"
          : variant === "mosaic"
            ? "py-10 sm:py-14"
            : variant === "split"
              ? "py-10 sm:py-16"
              : "overflow-hidden border-y border-black/10 py-10 dark:border-white/10 sm:py-14";
    const animation =
      variant === "mosaic"
        ? "drift-up"
        : variant === "plain"
          ? "clip"
          : variant === "split"
            ? "slide-stack"
            : variant === "featureBand"
              ? "soft-scale"
              : "reveal";

    return (
      <section key={section.title} id={section.id} data-gsap={animation} className={sectionClass}>
        <div className={isSplit ? "grid gap-8 lg:grid-cols-[0.38fr_0.62fr]" : ""}>
          <div data-gsap={isSplit ? "pin-label" : undefined} className={`${variant === "editorial" ? "max-w-5xl" : "max-w-3xl"} ${isSplit ? "lg:sticky lg:top-28 lg:h-fit" : ""}`}>
            {section.eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff5a45]">
                {section.eyebrow}
              </p>
            )}
            <h2 className={`${variant === "editorial" ? "font-radio text-5xl sm:text-7xl" : "font-radio text-4xl sm:text-6xl"} font-black tracking-[-0.07em]`}>
              {isQuote ? `“${section.title}”` : section.title}
            </h2>
            {section.body && (
              <p className={`${variant === "editorial" ? "mt-6 text-2xl leading-10" : "mt-5 text-lg leading-8"} font-medium text-black/58 dark:text-white/55 ${isQuote ? "text-white/70 dark:text-black/65" : ""}`}>
                {section.body}
              </p>
            )}
          </div>
          <div>{renderSectionContent(section, variant)}</div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-black dark:bg-[#07080b] dark:text-white">
      <SmoothScroll />
      <GsapHomeAnimations />
      <PremiumNavbar content={homeContent} locale={normalizedLocale} />
      <main id="main-content" className="relative pt-28">
        <section className="relative overflow-hidden px-4 py-24 sm:py-32">
          <div className="pointer-events-none absolute left-1/2 top-4 h-80 w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-[#ff5a45]/10 blur-3xl dark:bg-[#ff5a45]/15" />
          <div className="relative mx-auto max-w-7xl">
            <p data-gsap="reveal" className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff5a45]">
              {content.eyebrow}
            </p>
            <h1 data-gsap="reveal" className="mt-5 max-w-5xl text-balance font-radio text-5xl font-black tracking-[-0.08em] sm:text-7xl lg:text-8xl">
              {content.title}
            </h1>
            <p data-gsap="reveal" className="mt-6 max-w-3xl text-lg font-medium leading-8 text-black/60 dark:text-white/58 sm:text-xl">
              {content.description}
            </p>
            <div data-gsap="reveal" className="mt-9 flex flex-wrap gap-3">
              <Link
                href={localizedHref("/contact")}
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02] dark:bg-white dark:text-black"
              >
                {content.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {content.secondaryCta && (
                <Link
                  href={localizedHref("/calculator")}
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/40 px-5 py-3 text-sm font-bold text-black transition hover:border-black dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:border-white"
                >
                  {content.secondaryCta}
                </Link>
              )}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-8 px-4 pb-24">
          {content.sections.map(renderSection)}
        </div>
      </main>
      <HomeFooter content={homeContent} locale={normalizedLocale} />
    </div>
  );
}
