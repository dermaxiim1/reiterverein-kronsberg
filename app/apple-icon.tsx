import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: "#3F5A3A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FBF6EA",
          fontFamily: "serif",
          fontStyle: "italic",
          fontWeight: 600,
          letterSpacing: "-0.04em",
        }}
      >
        RVK
      </div>
    ),
    size,
  );
}
