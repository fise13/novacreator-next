import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B0D13 0%, #1B1328 52%, #FF5A45 100%)",
          color: "white",
          fontSize: 220,
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
