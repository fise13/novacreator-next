import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildOrganizationGraph } from "@/lib/organization-schema";
import { OG_IMAGE_HEIGHT, OG_IMAGE_PATH, OG_IMAGE_WIDTH } from "@/lib/seo-constants";
import { alternateLanguages, generateCanonicalUrl } from "@/lib/seo/url";
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

const defaultTitle =
  "Digital Growth Studio in Almaty | NovaCreator";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  title: {
    default: defaultTitle,
    template: "%s | NovaCreator",
  },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: generateCanonicalUrl("/", "ru"),
    languages: alternateLanguages("/"),
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    shortcut: "/icon",
    apple: "/apple-icon",
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
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body>
        <JsonLd data={buildOrganizationGraph()} id="ld-organization" />
        {children}
      </body>
    </html>
  );
}
