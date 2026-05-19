import type { Metadata } from "next";
import { Geist_Mono, Inter, Source_Serif_4 } from "next/font/google";
import { headers } from "next/headers";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildOrganizationGraph } from "@/lib/organization-schema";
import { OG_IMAGE_HEIGHT, OG_IMAGE_PATH, OG_IMAGE_WIDTH } from "@/lib/seo-constants";
import { absoluteUrl, alternateLanguages } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
});

const defaultTitle =
  "Web Design & SEO Agency in Almaty | NovaCreator Studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: absoluteUrl("/", "ru"),
    languages: alternateLanguages("/"),
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: defaultTitle,
    description: siteConfig.defaultDescription,
    locale: "ru_KZ",
    alternateLocale: ["en_US"],
    images: [
      {
        url: OG_IMAGE_PATH,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.defaultDescription,
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: siteConfig.verification.google || undefined,
    other: {
      "yandex-verification": siteConfig.verification.yandex,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const localeHeader = headersList.get("x-site-locale");
  const lang = localeHeader === "en" ? "en" : "ru";

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${sourceSerif.variable} ${geistMono.variable}`}
    >
      <body>
        <JsonLd data={buildOrganizationGraph()} id="ld-organization" />
        {children}
      </body>
    </html>
  );
}
