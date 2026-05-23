import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 32,
          background: "#0B0D13",
          color: "#FF5A45",
          fontSize: 88,
          fontWeight: 900,
          letterSpacing: "-0.08em",
        }}
      >
        N
      </div>
    ),
    {
      ...size,
    },
  );
}
