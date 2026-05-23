import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import { siteHosts } from "./lib/site-config";

const isProduction = process.env.NODE_ENV === "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com",
  "frame-src 'self' https://www.googletagmanager.com",
  ...(isProduction ? ["upgrade-insecure-requests"] : []),
].join("; ");

const trustedTypesPolicy = [
  "require-trusted-types-for 'script'",
  "trusted-types default nextjs",
].join("; ");

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: siteHosts.www }],
        destination: `https://${siteHosts.canonical}/:path*`,
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services.php",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/calculator.php",
        destination: "/calculator",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/portfolio-motor-land",
        destination: "/portfolio/motor-land",
        permanent: true,
      },
      {
        source: "/portfolio-autocore",
        destination: "/portfolio/autocore",
        permanent: true,
      },
      {
        source: "/en/portfolio-motor-land",
        destination: "/en/portfolio/motor-land",
        permanent: true,
      },
      {
        source: "/en/portfolio-autocore",
        destination: "/en/portfolio/autocore",
        permanent: true,
      },
    ];
  },
  async headers() {
    const baseSecurityHeaders = [
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Content-Security-Policy",
        value: contentSecurityPolicy,
      },
      {
        key: "Content-Security-Policy-Report-Only",
        value: trustedTypesPolicy,
      },
      {
        key: "Cross-Origin-Opener-Policy",
        value: "same-origin",
      },
      {
        key: "Cross-Origin-Embedder-Policy",
        value: "credentialless",
      },
      {
        key: "Cross-Origin-Resource-Policy",
        value: "same-origin",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
      },
      {
        key: "X-DNS-Prefetch-Control",
        value: "on",
      },
    ];
    const productionSecurityHeaders = isProduction
      ? [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ]
      : [];

    return [
      {
        source: "/(.*)",
        headers: [...baseSecurityHeaders, ...productionSecurityHeaders],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
  },
});

export default withNextIntl(withMDX(nextConfig));
