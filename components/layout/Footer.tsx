import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

export async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();
  const isEn = locale === "en";
  const serviceLinks = [
    { href: "/seo", label: "SEO" },
    { href: "/ads", label: "Google Ads" },
    { href: "/landing-page-development", label: isEn ? "Landing pages" : "Лендинги" },
    { href: "/ecommerce-development", label: "E-commerce" },
    { href: "/corporate-website-development", label: isEn ? "Corporate websites" : "Корпоративные сайты" },
    { href: "/ios-razrabotka-swift-swiftui", label: isEn ? "iOS development" : "iOS-разработка" },
  ] as const;
  const companyLinks = [
    { href: "/about", label: isEn ? "About" : "О нас" },
    { href: "/portfolio", label: isEn ? "Portfolio" : "Портфолио" },
    { href: "/blog", label: isEn ? "Blog" : "Блог" },
    { href: "/faq", label: "FAQ" },
    { href: "/vacancies", label: isEn ? "Careers" : "Вакансии" },
    { href: "/calculator", label: isEn ? "Calculator" : "Калькулятор" },
    { href: "/privacy", label: isEn ? "Privacy" : "Политика" },
  ] as const;

  return (
    <footer className="border-t border-border bg-bg-lighter">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 font-radio text-2xl font-bold">
            {siteConfig.name}
          </div>
          <p className="max-w-xl text-sm leading-6 text-text-secondary">
            {t("description")}
          </p>
          <p className="mt-6 text-sm text-text-secondary">
            © {new Date().getFullYear()} {siteConfig.name}. {t("rights")}
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold text-text">{isEn ? "Services" : "Услуги"}</h3>
          <div className="grid gap-3 text-sm text-text-secondary">
            {serviceLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-text">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold text-text">{isEn ? "Company" : "Компания"}</h3>
          <div className="grid gap-3 text-sm text-text-secondary">
            {companyLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-text">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid gap-3 text-sm text-text-secondary">
          <h3 className="text-sm font-bold text-text">{isEn ? "Contacts" : "Контакты"}</h3>
          <a href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phone}</a>
          <a href={`mailto:${siteConfig.contacts.email}`}>
            {siteConfig.contacts.email}
          </a>
          <a href={siteConfig.contacts.telegram}>Telegram</a>
          <span>{isEn ? "Mon-Fri, 10:00-19:00" : "Пн-Пт, 10:00-19:00"}</span>
        </div>
      </div>
    </footer>
  );
}
