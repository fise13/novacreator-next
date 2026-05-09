"use client";

import { NextIntlClientProvider } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./theme";

type ProvidersProps = {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
};

type SmoothScrollInstance = {
  scrollTo: (target: number, options?: { immediate?: boolean; force?: boolean }) => void;
  resize?: () => void;
};

function ScrollToTopOnRouteChange() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) {
      return;
    }

    previousPathname.current = pathname;

    const resetScroll = () => {
      const smoothScroll = (window as Window & { __novacreatorLenis?: SmoothScrollInstance }).__novacreatorLenis;

      smoothScroll?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      smoothScroll?.resize?.();
    };

    resetScroll();
    window.requestAnimationFrame(resetScroll);
    const shortTimer = window.setTimeout(resetScroll, 60);
    const finalTimer = window.setTimeout(resetScroll, 180);

    return () => {
      window.clearTimeout(shortTimer);
      window.clearTimeout(finalTimer);
    };
  }, [pathname]);

  return null;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <ScrollToTopOnRouteChange />
        {children}
        <Toaster richColors position="top-right" />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
