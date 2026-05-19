import { siteConfig } from "@/lib/site-config";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

export function buildOrganizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: ["ru-KZ", "en"],
        publisher: { "@id": organizationId },
      },
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": organizationId,
        name: siteConfig.name,
        legalName: siteConfig.legal.organization,
        url: siteConfig.url,
        image: `${siteConfig.url}/opengraph-image`,
        email: siteConfig.contacts.email,
        telephone: siteConfig.contacts.phone,
        foundingDate: siteConfig.legal.foundedYear,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.city,
          addressRegion: "Алматы",
          addressCountry: siteConfig.address.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.238949,
          longitude: 76.889709,
        },
        areaServed: [
          { "@type": "City", name: "Алматы" },
          { "@type": "Country", name: siteConfig.address.country },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        sameAs: Object.values(siteConfig.social),
        knowsAbout: [
          "Web design",
          "SEO",
          "Branding",
          "UI/UX design",
          "Google Ads",
          "Mobile app development",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO promotion" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads management" } },
          ],
        },
      },
    ],
  };
}

export { organizationId, websiteId };
