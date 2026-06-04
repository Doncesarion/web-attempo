import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "attempo — Todo a tu tiempo"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const fontData = await fetch(
    "https://fonts.bunny.net/inter/files/inter-latin-500-normal.woff"
  ).then((r) => r.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          gap: 0,
        }}
      >
        {/* Barra morada superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #6C5CE4, #4F46E5)",
          }}
        />

        {/* Logo completo — fondo blanco, se integra perfecto */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://attempo.cl/og-logo.jpg"
          width={620}
          height={326}
          style={{ display: "block" }}
        />

        {/* Línea divisora */}
        <div
          style={{
            width: 560,
            height: 1,
            background: "#e5e7eb",
            marginTop: 8,
            marginBottom: 32,
          }}
        />

        {/* Pills de features */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Agenda online", "Recordatorios WhatsApp", "Chatbot IA", "Webpay"].map((t) => (
            <div
              key={t}
              style={{
                background: "#f5f3ff",
                border: "1.5px solid #e0d9ff",
                borderRadius: 100,
                padding: "9px 20px",
                fontSize: 17,
                color: "#6C5CE4",
                fontWeight: 500,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            fontSize: 16,
            color: "#9ca3af",
            letterSpacing: "0.5px",
          }}
        >
          attempo.cl
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: fontData, weight: 500, style: "normal" }],
    }
  )
}
