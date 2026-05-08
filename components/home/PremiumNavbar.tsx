"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Moon, Phone, Sun, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Link as LocaleLink } from "@/i18n/navigation";
import logoMark from "@/assets/logo-mark.png";
import { siteConfig } from "@/lib/site-config";
import type { HomeContent, HomeLocale } from "./home-content";

export function PremiumNavbar({
  content,
  locale,
}: {
  content: HomeContent;
  locale: HomeLocale;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 160], [0, 16]);
  const opacity = useTransform(scrollY, [0, 120], [0.78, 0.96]);
  const localizedHref = (href: string) =>
    locale === "en" && href.startsWith("/") ? `/en${href === "/" ? "" : href}` : href;
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
        className="fixed left-0 right-0 top-4 z-[60] px-4"
      >
        <motion.nav
          style={{ backgroundColor: useTransform(opacity, (value) => isDark ? `rgba(10, 12, 18, ${value})` : `rgba(255, 255, 255, ${value})`) }}
          className="relative mx-auto flex h-[68px] max-w-7xl items-center justify-between overflow-hidden rounded-full border border-black/10 px-3 shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:border-white/10 dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
        >
          <span
            data-gsap-scroll-progress
            className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#ff5a45] via-[#ff9a6b] to-[#7c5cff]"
            aria-hidden="true"
          />
          <Link href={localizedHref("/")} data-gsap-nav-button className="flex items-center gap-3 rounded-full py-1 pl-2 pr-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-black shadow-[0_10px_30px_rgba(0,0,0,0.12)] dark:bg-white">
              <Image src={logoMark} alt="" className="h-7 w-7 rounded-full object-cover" priority />
            </span>
            <span className="text-lg font-black uppercase tracking-[-0.07em] text-black dark:text-white">
              NovaCreator
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full bg-black/[0.04] p-1 dark:bg-white/[0.06] md:flex">
            {content.nav.desktop.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(item.href)}
                data-gsap-nav-button
                className="rounded-full px-4 py-2 text-sm font-semibold text-black/60 transition hover:bg-white hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
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
            <button
              type="button"
              data-gsap-nav-button
              suppressHydrationWarning
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-black transition hover:border-black dark:border-white/10 dark:text-white dark:hover:border-white"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <div className="inline-flex rounded-full border border-black/10 p-1 dark:border-white/10">
              {localeOptions.map((item) => (
                <LocaleLink
                  key={item.label}
                  href="/"
                  locale={item.locale}
                  data-gsap-nav-button
                  className={`rounded-full px-2.5 py-1 text-xs font-black transition ${
                    (locale === "ru" && item.label === "RU") ||
                    (locale === "en" && item.label === "EN")
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-black/45 hover:text-black dark:text-white/45 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </LocaleLink>
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
                  <Link data-gsap-nav-button className="block rounded-xl px-3 py-2 text-black/70 outline-none transition hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white" href={localizedHref("/login")}>
                    {content.nav.account.login}
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link data-gsap-nav-button className="block rounded-xl px-3 py-2 text-black/70 outline-none transition hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white" href={localizedHref("/register")}>
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

          <Dialog.Root>
            <Dialog.Trigger data-gsap-nav-button className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-black dark:border-white/10 dark:text-white md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">{content.nav.menu}</span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[75] bg-black/30 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-x-4 top-4 z-[80] rounded-[2rem] border border-black/10 bg-white p-5 text-black shadow-2xl dark:border-white/10 dark:bg-[#101219] dark:text-white md:hidden">
                <div className="mb-8 flex items-center justify-between">
                  <Dialog.Title className="font-radio text-lg font-bold">
                    NovaCreator
                  </Dialog.Title>
                  <Dialog.Close className="grid h-10 w-10 place-items-center rounded-full border border-black/10 dark:border-white/10">
                    <X className="h-4 w-4" />
                  </Dialog.Close>
                </div>
                <div className="grid gap-2">
                  <div className="mb-2 inline-flex w-fit rounded-full border border-black/10 p-1 dark:border-white/10">
                    {localeOptions.map((item) => (
                      <Dialog.Close asChild key={item.label}>
                        <LocaleLink
                          href="/"
                          locale={item.locale}
                          data-gsap-nav-button
                          className={`rounded-full px-3 py-1.5 text-xs font-black transition ${
                            (locale === "ru" && item.label === "RU") ||
                            (locale === "en" && item.label === "EN")
                              ? "bg-black text-white dark:bg-white dark:text-black"
                              : "text-black/45 dark:text-white/45"
                          }`}
                        >
                          {item.label}
                        </LocaleLink>
                      </Dialog.Close>
                    ))}
                  </div>
                  {content.nav.burger.map((item) => (
                    <Dialog.Close asChild key={item.href}>
                      <Link
                        href={localizedHref(item.href)}
                        data-gsap-nav-button
                        className="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm font-medium text-black/70 transition hover:text-black dark:border-white/10 dark:bg-white/[0.05] dark:text-white/70 dark:hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                </div>
                <Dialog.Close asChild>
                  <a
                    href={localizedHref("/contact")}
                    data-gsap-nav-button
                    className="mt-5 inline-flex w-full justify-center rounded-full bg-[#ff5a45] px-5 py-3 text-sm font-bold text-white"
                  >
                    {content.nav.burgerCta}
                  </a>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </motion.nav>
      </motion.header>
    </>
  );
}
