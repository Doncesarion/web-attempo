import { ImageResponse } from "next/og"
import { getEspecialidadBySlug } from "@/lib/especialidades"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ especialidad: string }>
}) {
  const { especialidad } = await params
  const data = getEspecialidadBySlug(especialidad)

  const nombre = data?.nombre ?? "Profesionales de la salud"

  const fontData = await fetch(
    "https://fonts.bunny.net/inter/files/inter-latin-700-normal.woff"
  ).then((r) => r.arrayBuffer())

  const fontDataNormal = await fetch(
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
          background: "#ffffff",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          padding: "64px 72px",
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

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://attempo.cl/og-logo.jpg"
          width={186}
          height={98}
          style={{ display: "block", marginBottom: 36 }}
          alt=""
        />

        {/* Etiqueta */}
        <div style={{ fontSize: 22, color: "#6b7280", fontWeight: 500, marginBottom: 16 }}>
          Agenda online para
        </div>

        {/* Nombre especialidad */}
        <div
          style={{
            fontSize: nombre.length > 30 ? 54 : 64,
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.15,
            flex: 1,
          }}
        >
          {nombre}
        </div>

        {/* Pills de beneficios */}
        <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
          {["Recordatorios automáticos", "Cobro con Webpay", "Chatbot IA"].map((t) => (
            <div
              key={t}
              style={{
                background: "#f5f3ff",
                border: "1.5px solid #e0d9ff",
                borderRadius: 100,
                padding: "8px 18px",
                fontSize: 16,
                color: "#6C5CE4",
                fontWeight: 500,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #e5e7eb",
            paddingTop: 24,
          }}
        >
          <div style={{ fontSize: 18, color: "#6b7280", fontWeight: 500 }}>
            attempo.cl/soluciones
          </div>
          <div
            style={{
              background: "#6C5CE4",
              borderRadius: 10,
              padding: "10px 24px",
              fontSize: 17,
              color: "#ffffff",
              fontWeight: 600,
            }}
          >
            Prueba gratis 12 días →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: fontData, weight: 700, style: "normal" },
        { name: "Inter", data: fontDataNormal, weight: 500, style: "normal" },
      ],
    }
  )
}
