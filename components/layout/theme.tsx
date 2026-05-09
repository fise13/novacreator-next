"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemePreference) => void;
};

const storageKey = "novacreator-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);
const subscribeToHydration = (callback: () => void) => {
  window.queueMicrotask(callback);

  return () => undefined;
};
const getHydratedSnapshot = () => true;
const getServerHydrationSnapshot = () => false;
const subscribeToSystemTheme = (callback: () => void) => {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);

  return () => media.removeEventListener("change", callback);
};
const getSystemThemeSnapshot = (): ResolvedTheme => resolveSystemTheme();
const getServerSystemThemeSnapshot = (): ResolvedTheme => "light";

function resolveSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: ResolvedTheme) {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const resolvedTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemThemeSnapshot,
    getServerSystemThemeSnapshot,
  );

  useEffect(() => {
    applyTheme(resolvedTheme);
    window.localStorage.removeItem(storageKey);
  }, [resolvedTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme: "system",
      resolvedTheme,
      setTheme: () => undefined,
    }),
    [resolvedTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

export function useIsHydrated() {
  return useSyncExternalStore(subscribeToHydration, getHydratedSnapshot, getServerHydrationSnapshot);
}
