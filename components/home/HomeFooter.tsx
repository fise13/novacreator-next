import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import logoMark from "@/assets/logo-mark-transparent.png";
import type { HomeContent, HomeLocale } from "./home-content";

export function HomeFooter({
  content,
  locale,
}: {
  content: HomeContent;
  locale: HomeLocale;
}) {
  const localizedHref = (href: string) =>
    locale === "en" && href.startsWith("/") ? `/en${href === "/" ? "" : href}` : href;

  return (
    <footer className="px-4 py-14 text-black dark:text-white">
      <div className="mx-auto max-w-7xl border-t border-black/10 pt-12 dark:border-white/10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 shrink-0 place-items-center overflow-visible">
                <Image src={logoMark} alt="" className="h-14 w-14 object-contain drop-shadow-[0_6px_14px_rgba(65,191,234,0.22)]" />
              </span>
              <span className="font-radio text-2xl font-black tracking-[-0.07em] sm:text-3xl">{siteConfig.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-black/62 dark:text-white/90">
              {content.footer.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-black/66 dark:text-white/90">
              <a className="transition hover:text-[#ff5a45]" href={siteConfig.social.linkedin}>
                LinkedIn
              </a>
              <a className="transition hover:text-[#ff5a45]" href={siteConfig.social.vk}>
                VK
              </a>
              <a className="transition hover:text-[#ff5a45]" href={siteConfig.social.instagram}>
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black dark:text-white">
              {content.footer.servicesTitle}
            </h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-black/60 dark:text-white/90">
              {content.footer.services.map((item) => (
                <a key={item.href} className="transition hover:text-[#ff5a45]" href={localizedHref(item.href)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black dark:text-white">
              {content.footer.companyTitle}
            </h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-black/60 dark:text-white/90">
              {content.footer.company.map((item) => (
                <a key={item.href} className="transition hover:text-[#ff5a45]" href={localizedHref(item.href)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black dark:text-white">
              {content.footer.contactsTitle}
            </h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-black/60 dark:text-white/90">
              <a className="transition hover:text-[#ff5a45]" href={siteConfig.contacts.phoneHref}>
                {siteConfig.contacts.phone}
              </a>
              <a className="transition hover:text-[#ff5a45]" href={`mailto:${siteConfig.contacts.email}`}>
                {siteConfig.contacts.email}
              </a>
              <span>{content.footer.workingHours}</span>
            </div>
            <a
              href="#main-content"
              className="mt-6 inline-flex rounded-full border border-black px-4 py-2 text-xs font-semibold text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {content.footer.backToTop}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-black/10 pt-6 text-xs font-semibold text-black/62 dark:border-white/10 dark:text-white/90 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {content.footer.rights}
          </p>
          <p>Almaty, Kazakhstan</p>
        </div>
      </div>
    </footer>
  );
}
