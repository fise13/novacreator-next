import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";

const serviceCards = [
  { key: "seo", href: "/seo" },
  { key: "ads", href: "/ads" },
  { key: "landing", href: "/landing-page-development" },
  { key: "ecommerce", href: "/ecommerce-development" },
  { key: "corporate", href: "/corporate-website-development" },
  { key: "ios", href: "/ios-razrabotka-swift-swiftui" },
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const home = await getTranslations("home");
  const pages = await getTranslations("pages");

  return (
    <>
      <HeroSection
        eyebrow={home("eyebrow")}
        title={home("title")}
        subtitle={home("subtitle")}
        primaryCta={{ label: home("primaryCta"), href: "/calculator" }}
        secondaryCta={{ label: home("secondaryCta"), href: "/services" }}
      />
      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Migration P1"
            title={pages("services.title")}
            description={pages("services.description")}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <ServiceCard
                key={service.key}
                href={service.href}
                title={pages(`${service.key}.title`)}
                description={pages(`${service.key}.description`)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
