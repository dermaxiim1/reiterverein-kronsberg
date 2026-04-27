import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #2c4129 0%, #231c13 100%)",
          color: "#FBF6EA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "serif",
        }}
      >
        {/* top mark */}
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: 0.85,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 36,
              height: 1,
              background: "#FBF6EA",
              opacity: 0.5,
            }}
          />
          {SITE.region}
        </div>

        {/* big italic title */}
        <div
          style={{
            fontSize: 100,
            fontStyle: "italic",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <span>{SITE.name}</span>
          <span style={{ color: "#D9C89A", fontSize: 48, fontStyle: "italic" }}>
            {SITE.tagline}
          </span>
        </div>

        {/* footer line */}
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            opacity: 0.75,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>{SITE.address.street}, {SITE.address.city}</span>
          <span>RVK · seit {SITE.founded}</span>
        </div>
      </div>
    ),
    size,
  );
}
