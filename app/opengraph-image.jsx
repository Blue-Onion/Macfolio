import { ImageResponse } from "next/og";
import { author, defaultTitle } from "@/lib/site";

// Auto-generated OG image (1200x630) — replaces the 4.9MB previewPic.png.
export const alt = `${defaultTitle} — macOS-style interactive portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0a0a0a 0%, #1c2340 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9ca3af",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {author} — Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.1,
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 8,
            lineHeight: 1.1,
            fontStyle: "italic",
            background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Macƒolio
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#d1d5db", marginTop: 32 }}>
          Next.js · React · Go · PostgreSQL
        </div>
      </div>
    ),
    { ...size }
  );
}
