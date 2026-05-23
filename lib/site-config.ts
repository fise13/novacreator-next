const siteOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://novacreatorstudio.com",
);

export const siteConfig = {
  name: "NovaCreator Studio",
  url: siteOrigin.origin,
  defaultDescription:
    "NovaCreator Studio — веб-дизайн, SEO, Google Ads и разработка сайтов в Алматы, Казахстан. Сайты и продвижение под заявки.",
  contacts: {
    email: "contact@novacreatorstudio.com",
    privacyEmail: "privacy@novacreatorstudio.com",
    phone: "+7 706 606 39 21",
    phoneHref: "tel:+77066063921",
    whatsapp: "https://wa.me/77066063921",
    telegram: "https://t.me/victhefise",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/novacreator-studio",
    vk: "https://vk.com/novacreatorstudio",
    instagram: "https://www.instagram.com/novacreatorstudio.iv",
  },
  address: {
    city: "Алматы",
    country: "Казахстан",
    countryCode: "KZ",
  },
  legal: {
    organization: "NovaCreator Studio",
    foundedYear: "2014",
  },
  themes: {
    primary: "#8B5CF6",
    secondary: "#06B6D4",
    background: "#0E0E14",
    backgroundLight: "#FFFFFF",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    yandex: "edd889cc7878b9f3",
  },
  analytics: {
    gtm: "GTM-K3638CM2",
  },
} as const;

export const siteHosts = {
  canonical: siteOrigin.hostname,
  www: `www.${siteOrigin.hostname}`,
} as const;

export function isWwwHost(host: string | null | undefined) {
  if (!host) {
    return false;
  }

  const hostname = host.split(":")[0]?.toLowerCase() ?? "";
  return hostname === siteHosts.www;
}

export function isLocalDevHost(host: string | null | undefined) {
  if (!host) {
    return false;
  }

  const hostname = host.split(":")[0]?.toLowerCase() ?? "";
  return hostname === "localhost" || hostname === "127.0.0.1";
}
