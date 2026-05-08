import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-border bg-bg-lighter">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
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
        <div className="grid gap-3 text-sm text-text-secondary">
          <a href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phone}</a>
          <a href={`mailto:${siteConfig.contacts.email}`}>
            {siteConfig.contacts.email}
          </a>
          <a href={siteConfig.contacts.telegram}>Telegram</a>
          <Link href="/privacy" className="hover:text-text">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
