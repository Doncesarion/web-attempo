import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "attempo — Todo a tu tiempo"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #6C5CE4 0%, #8B7FF0 50%, #5A4BD1 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        {/* Logo circle */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 24,
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <span style={{ fontSize: 48, color: "white", fontWeight: 800 }}>a</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          attempo
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
            fontWeight: 400,
            letterSpacing: "0.5px",
            marginBottom: 48,
          }}
        >
          Todo a tu tiempo
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Agenda online", "Recordatorios automáticos", "Chile 🇨🇱"].map((text) => (
            <div
              key={text}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 100,
                padding: "10px 24px",
                fontSize: 18,
                color: "white",
                fontWeight: 500,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
