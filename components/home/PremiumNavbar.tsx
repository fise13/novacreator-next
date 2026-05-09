"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Phone, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/components/layout/theme";
import logoMark from "@/assets/logo-mark-transparent.png";
import { siteConfig } from "@/lib/site-config";
import type { HomeContent, HomeLocale } from "./home-content";

export function PremiumNavbar({
  content,
  locale,
}: {
  content: HomeContent;
  locale: HomeLocale;
}) {
  const { resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingLocale, setPendingLocale] = useState<HomeLocale | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 160], [0, 16]);
  const opacity = useTransform(scrollY, [0, 120], [0.78, 0.96]);
  const localizedHref = (href: string) =>
    locale === "en" && href.startsWith("/") ? `/en${href === "/" ? "" : href}` : href;
  const localizedPathname = (nextLocale: HomeLocale) => {
    const pathWithoutLocale = pathname.replace(/^\/en(?=\/|$)/, "") || "/";

    return nextLocale === "en" ? `/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}` : pathWithoutLocale;
  };
  const activeLocale = pendingLocale ?? locale;
  const setLocaleCookie = (nextLocale: HomeLocale) => {
    const cookieSetter =
      Object.getOwnPropertyDescriptor(Document.prototype, "cookie")?.set ??
      Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie")?.set;

    cookieSetter?.call(document, `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`);
  };
  const switchLocale = (nextLocale: HomeLocale) => {
    if (nextLocale === locale) {
      return;
    }

    const targetPath = localizedPathname(nextLocale);
    setLocaleCookie(nextLocale);
    setPendingLocale(nextLocale);
    window.setTimeout(() => {
      window.location.assign(targetPath);
    }, 140);
  };
  const isDark = resolvedTheme === "dark";
  const localeOptions = [
    { label: "RU", locale: "ru" },
    { label: "EN", locale: "en" },
  ] as const;

  return (
    <>
      <motion.header
        data-gsap="nav"
        data-no-button-motion
        style={{ backdropFilter: useTransform(blur, (value) => `blur(${value}px)`) }}
        className="fixed left-0 right-0 top-3 z-[60] px-3 sm:top-4 sm:px-4"
      >
        <motion.nav
          style={{ backgroundColor: useTransform(opacity, (value) => isDark ? `rgba(10, 12, 18, ${value})` : `rgba(255, 255, 255, ${value})`) }}
          className="relative mx-auto flex h-[62px] max-w-7xl items-center justify-between overflow-hidden rounded-[1.65rem] border border-black/10 px-2.5 shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:border-white/10 dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:h-[68px] sm:rounded-full sm:px-3"
        >
          <span
            data-gsap-scroll-progress
            className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#ff5a45] via-[#ff9a6b] to-[#7c5cff]"
            aria-hidden="true"
          />
          <Link href={localizedHref("/")} data-gsap-nav-button className="flex min-w-0 items-center gap-2 rounded-full py-1 pl-1.5 pr-2 sm:gap-3 sm:pl-2 sm:pr-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center overflow-visible">
              <Image src={logoMark} alt="" className="h-12 w-12 object-contain drop-shadow-[0_6px_14px_rgba(65,191,234,0.22)]" priority />
            </span>
            <span className="truncate text-base font-black uppercase tracking-[-0.07em] text-black dark:text-white sm:text-lg">
              NovaCreator
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full bg-black/[0.04] p-1 dark:bg-[#171a22] md:flex">
            {content.nav.desktop.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(item.href)}
                data-gsap-nav-button
                className="rounded-full px-4 py-2 text-sm font-semibold text-black/60 transition hover:bg-white hover:text-black dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={siteConfig.contacts.phoneHref}
              data-gsap-nav-button
              className="mr-2 inline-flex items-center gap-2 text-sm font-bold text-black dark:text-white"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contacts.phone}
            </a>
            <div className="inline-flex rounded-full border border-black/10 p-1 dark:border-white/10">
              {localeOptions.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => switchLocale(item.locale)}
                  data-gsap-nav-button
                  className={`relative overflow-hidden rounded-full px-2.5 py-1 text-xs font-black transition ${
                    (activeLocale === "ru" && item.label === "RU") ||
                    (activeLocale === "en" && item.label === "EN")
                      ? "text-white dark:text-black"
                      : "text-black/64 hover:text-black dark:text-white/90 dark:hover:text-white"
                  }`}
                >
                  {((activeLocale === "ru" && item.label === "RU") || (activeLocale === "en" && item.label === "EN")) && (
                    <motion.span
                      layoutId="desktop-locale-pill"
                      className="absolute inset-0 rounded-full bg-black dark:bg-white"
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger data-gsap-nav-button className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-black transition hover:border-black dark:border-white/10 dark:text-white dark:hover:border-white">
                <UserRound className="h-4 w-4" />
                <span className="sr-only">{content.nav.account.label}</span>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                align="end"
                className="z-[80] min-w-44 rounded-2xl border border-black/10 bg-white p-2 text-sm text-black shadow-2xl dark:border-white/10 dark:bg-[#11131a] dark:text-white"
              >
                <DropdownMenu.Item asChild>
                  <Link data-gsap-nav-button className="block rounded-xl px-3 py-2 text-black/70 outline-none transition hover:bg-black/5 hover:text-black dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white" href={localizedHref("/login")}>
                    {content.nav.account.login}
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link data-gsap-nav-button className="block rounded-xl px-3 py-2 text-black/70 outline-none transition hover:bg-black/5 hover:text-black dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white" href={localizedHref("/register")}>
                    {content.nav.account.register}
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            <Link
              href={localizedHref("/contact")}
              data-gsap-nav-button
              className="rounded-full bg-[#ff5a45] px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
            >
              {content.nav.cta}
            </Link>
          </div>

          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger data-gsap-nav-button className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10 bg-white/35 text-black shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#171a22] dark:text-white md:hidden">
              <span className="relative h-4 w-5" aria-hidden="true">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.12, ease: "easeOut" }}
                  className="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current"
                />
              </span>
              <span className="sr-only">{content.nav.menu}</span>
            </Dialog.Trigger>
            <AnimatePresence>
              {menuOpen && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="fixed inset-0 z-[75] bg-black/35 backdrop-blur-md md:hidden"
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild>
                    <motion.div
                      initial={{ opacity: 0, y: -18, scale: 0.97, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, scale: 0.98, filter: "blur(8px)" }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="fixed inset-x-3 top-3 z-[80] max-h-[calc(100dvh-1.5rem)] overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 text-black shadow-2xl dark:border-white/10 dark:bg-[#101219] dark:text-white md:hidden"
                    >
                      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ff5a45]/15 blur-3xl" />
                      <div className="pointer-events-none absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-[#41bfea]/10 blur-3xl" />

                      <div className="relative max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain pr-1">
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <Dialog.Title className="flex min-w-0 items-center gap-3">
                            <span className="grid h-12 w-12 shrink-0 place-items-center overflow-visible">
                              <Image src={logoMark} alt="" className="h-12 w-12 object-contain drop-shadow-[0_6px_14px_rgba(65,191,234,0.22)]" />
                            </span>
                            <span className="truncate font-radio text-xl font-black tracking-[-0.07em]">
                              NovaCreator
                            </span>
                          </Dialog.Title>
                          <Dialog.Close className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-[#171a22]">
                            <X className="h-4 w-4" />
                          </Dialog.Close>
                        </div>

                        <div className="mb-4 rounded-[1.4rem] border border-black/10 bg-black/[0.03] p-2 dark:border-white/10 dark:bg-[#171a22]">
                          <div className="inline-flex rounded-full border border-black/10 bg-white/60 p-1 dark:border-white/10 dark:bg-black/20">
                            {localeOptions.map((item) => (
                              <button
                                  key={item.label}
                                  type="button"
                                  onClick={() => switchLocale(item.locale)}
                                  data-gsap-nav-button
                                  className={`relative overflow-hidden rounded-full px-3 py-1.5 text-xs font-black transition ${
                                    (activeLocale === "ru" && item.label === "RU") ||
                                    (activeLocale === "en" && item.label === "EN")
                                      ? "text-white dark:text-black"
                                      : "text-black/64 dark:text-white/90"
                                  }`}
                                >
                                  {((activeLocale === "ru" && item.label === "RU") || (activeLocale === "en" && item.label === "EN")) && (
                                    <motion.span
                                      layoutId="mobile-locale-pill"
                                      className="absolute inset-0 rounded-full bg-black dark:bg-white"
                                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                  )}
                                  <span className="relative z-10">{item.label}</span>
                                </button>
                            ))}
                          </div>
                        </div>

                        <motion.div
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={{
                            open: { transition: { staggerChildren: 0.022, delayChildren: 0.02 } },
                            closed: { transition: { staggerChildren: 0.012, staggerDirection: -1 } },
                          }}
                          className="grid gap-2"
                        >
                          {content.nav.burger.map((item, index) => (
                            <motion.div
                              key={item.href}
                              variants={{
                                open: { opacity: 1, y: 0 },
                                closed: { opacity: 0, y: 10 },
                              }}
                              transition={{ duration: 0.14, ease: "easeOut" }}
                            >
                              <Dialog.Close asChild>
                                <Link
                                  href={localizedHref(item.href)}
                                  data-gsap-nav-button
                                  className="group flex min-h-14 items-center justify-between rounded-[1.25rem] border border-black/10 bg-white/70 px-4 py-3 text-base font-black tracking-[-0.04em] text-black/78 transition active:scale-[0.98] dark:border-white/12 dark:bg-[#171a22] dark:text-white"
                                >
                                  <span>{item.label}</span>
                                  <span className="text-xs font-black text-black/66 dark:text-white/90">
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                </Link>
                              </Dialog.Close>
                            </motion.div>
                          ))}
                        </motion.div>

                        <div className="mt-4 grid gap-2">
                          <a
                            href={siteConfig.contacts.phoneHref}
                            className="flex min-h-12 items-center justify-center gap-2 rounded-[1.1rem] border border-black/10 bg-black/[0.03] text-sm font-bold text-black/70 dark:border-white/12 dark:bg-[#171a22] dark:text-white/90"
                          >
                            <Phone className="h-4 w-4" />
                            {siteConfig.contacts.phone}
                          </a>
                          <Dialog.Close asChild>
                            <Link
                              href={localizedHref("/contact")}
                              data-gsap-nav-button
                              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-[1.2rem] bg-[#ff5a45] px-5 py-4 text-base font-black text-white shadow-[0_16px_38px_rgba(255,90,69,0.28)] active:scale-[0.98]"
                            >
                              {content.nav.burgerCta}
                            </Link>
                          </Dialog.Close>
                        </div>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </motion.nav>
      </motion.header>
    </>
  );
}
