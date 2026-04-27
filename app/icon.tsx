import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 30,
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
