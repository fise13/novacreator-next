import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
    return [
      {
        source: "/(.*)",
        headers: [
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
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
