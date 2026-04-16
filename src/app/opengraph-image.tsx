import { ImageResponse } from "next/og";
import { site } from "@/shared/config/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#EEE8DA",
        backgroundImage:
          "radial-gradient(60% 55% at 85% -10%, rgba(184, 135, 58, 0.35) 0%, transparent 60%), radial-gradient(50% 45% at -5% 10%, rgba(59, 79, 224, 0.22) 0%, transparent 60%)",
        color: "#0E1116",
        fontFamily: "serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            background: "#B8873A",
          }}
        />
        <div style={{ fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em" }}>{site.name}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "#B8873A",
            fontWeight: 600,
            fontFamily: "sans-serif",
          }}
        >
          AI · LEGAL · RU
        </div>
        <div
          style={{
            fontSize: 82,
            lineHeight: 1.03,
            letterSpacing: "-0.03em",
            fontWeight: 500,
            maxWidth: 960,
          }}
        >
          Больше, чем ИИ — партнёр в юридической практике.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          opacity: 0.7,
          fontFamily: "sans-serif",
        }}
      >
        <div>{site.description}</div>
      </div>
    </div>,
    { ...size },
  );
}
