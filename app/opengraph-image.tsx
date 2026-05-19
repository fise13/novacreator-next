import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0e0e14 0%, #1a1030 48%, #0e0e14 100%)",
          color: "#ffffff",
          padding: 64,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#ff5a45",
            }}
          />
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900 }}>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.06em" }}>
            Web design, SEO & Google Ads
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.78)" }}>
            Almaty, Kazakhstan · Commercial digital agency
          </div>
        </div>
        <div style={{ fontSize: 22, color: "rgba(255,255,255,0.55)" }}>novacreatorstudio.com</div>
      </div>
    ),
    { ...size },
  );
}
