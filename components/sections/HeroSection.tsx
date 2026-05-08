import { Link } from "@/i18n/navigation";
import type { MarketingHref } from "@/lib/routes";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta?: {
    label: string;
    href: MarketingHref;
  };
  secondaryCta?: {
    label: string;
    href: MarketingHref;
  };
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-purple/30 blur-3xl" />
      <div className="absolute right-12 top-32 -z-10 h-56 w-56 rounded-full bg-neon-blue/20 blur-3xl" />

      <div className="container-page">
        <div className="max-w-4xl animate-slide-up">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-neon-blue">
            {eyebrow}
          </p>
          <h1 className="font-radio text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary sm:text-xl">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-neon-purple px-6 py-3 font-semibold text-white shadow-neon-purple transition hover:bg-neon-purple-dark"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-semibold transition hover:border-neon-blue hover:text-neon-blue"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
