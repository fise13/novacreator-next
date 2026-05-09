import type { Metadata } from "next";
import { Geist_Mono, Inter, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "marketing",
  keywords: [
    "NovaCreator Studio",
    "SEO Алматы",
    "разработка сайтов Алматы",
    "Google Ads Казахстан",
    "маркетинговое агентство",
    "создание сайтов",
    "контекстная реклама",
  ],
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      ru: siteConfig.url,
      en: `${siteConfig.url}/en`,
      "x-default": siteConfig.url,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.defaultDescription,
    locale: "ru_KZ",
    alternateLocale: ["en_US"],
    images: [
      {
          url: "/opengraph-image.svg",
          width: 1200,
          height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.defaultDescription,
    images: ["/opengraph-image.svg"],
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
    other: {
      "yandex-verification": siteConfig.verification.yandex,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${inter.variable} ${sourceSerif.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                name: siteConfig.name,
                url: siteConfig.url,
                inLanguage: ["ru-KZ", "en"],
                publisher: {
                  "@id": `${siteConfig.url}/#organization`,
                },
              },
              {
                "@type": ["Organization", "LocalBusiness"],
                "@id": `${siteConfig.url}/#organization`,
                name: siteConfig.name,
                legalName: siteConfig.legal.organization,
                url: siteConfig.url,
                email: siteConfig.contacts.email,
                telephone: siteConfig.contacts.phone,
                foundingDate: siteConfig.legal.foundedYear,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: siteConfig.address.city,
                  addressCountry: siteConfig.address.countryCode,
                },
                areaServed: [
                  {
                    "@type": "Country",
                    name: siteConfig.address.country,
                  },
                ],
                sameAs: Object.values(siteConfig.social),
              },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
