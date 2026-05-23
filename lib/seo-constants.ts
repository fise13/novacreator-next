import { OG_IMAGE, NOINDEX_PATHS, SERVICE_SILO_PATHS } from "@/config/seo/constants";

export const OG_IMAGE_PATH = OG_IMAGE.path;
export const OG_IMAGE_WIDTH = OG_IMAGE.width;
export const OG_IMAGE_HEIGHT = OG_IMAGE.height;

export { NOINDEX_PATHS, SERVICE_SILO_PATHS };
export type ServiceSiloPath = (typeof SERVICE_SILO_PATHS)[number];
