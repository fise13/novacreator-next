"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const locales: Locale[] = ["ru", "en"];

export function LangSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div className="inline-flex rounded-full border border-border bg-surface p-1">
      {locales.map((item) => {
        const href = item === "ru" ? pathname : `/en${pathname === "/" ? "" : pathname}`;

        return (
          <a
            key={item}
            href={href}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition ${
              locale === item
                ? "bg-neon-purple text-white"
                : "text-text-secondary hover:text-text"
            }`}
          >
            {item}
          </a>
        );
      })}
    </div>
  );
}
