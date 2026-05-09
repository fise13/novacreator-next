"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LangSwitcher } from "./LangSwitcher";

const navItems = [
  { href: "/", label: "home" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/services", label: "services" },
  { href: "/about", label: "about" },
  { href: "/calculator", label: "calculator" },
  { href: "/contact", label: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue text-sm font-black text-white shadow-neon-purple">
            NC
          </span>
          <span className="font-radio text-lg font-bold tracking-tight">
            NovaCreator
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? "text-neon-purple" : "text-text-secondary hover:text-text"
                }`}
              >
                {t(item.label)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitcher />
        </div>

        <Dialog.Root>
          <Dialog.Trigger className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">{t("menu")}</span>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border bg-bg p-6 shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <Dialog.Title className="font-radio text-lg font-bold">
                  NovaCreator
                </Dialog.Title>
                <Dialog.Close className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <X className="h-5 w-5" />
                </Dialog.Close>
              </div>
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Dialog.Close asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-2xl border border-border bg-surface px-4 py-3 text-base font-medium"
                    >
                      {t(item.label)}
                    </Link>
                  </Dialog.Close>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3">
                <LangSwitcher />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
