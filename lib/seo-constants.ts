export const OG_IMAGE_PATH = "/opengraph-image";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const NOINDEX_PATHS = new Set([
  "/tabs",
  "/login",
  "/register",
]);

export const SERVICE_SILO_PATHS = [
  "/web-design-almaty",
  "/seo-agency-almaty",
  "/branding-agency",
  "/ui-ux-design",
  "/mobile-app-development",
  "/google-ads-management",
] as const;

export type ServiceSiloPath = (typeof SERVICE_SILO_PATHS)[number];
