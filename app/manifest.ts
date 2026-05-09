import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "NovaCreator",
    description: siteConfig.defaultDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: siteConfig.themes.backgroundLight,
    theme_color: siteConfig.themes.backgroundLight,
    lang: "ru",
    categories: ["business", "marketing", "productivity"],
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
