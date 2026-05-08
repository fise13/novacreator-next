import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "NovaCreator",
    description: siteConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.themes.background,
    theme_color: siteConfig.themes.primary,
    lang: "ru",
  };
}
