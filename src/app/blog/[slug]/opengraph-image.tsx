import { ImageResponse } from "next/og"
import { getPostBySlug } from "@/lib/blog"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const titulo = post?.titulo ?? "Blog — attempo"
  const categoria = post?.categoria ?? "Recursos"

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
          style={{ display: "block", marginBottom: 40 }}
          alt=""
        />

        {/* Categoría */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              background: "#f5f3ff",
              border: "1.5px solid #e0d9ff",
              borderRadius: 100,
              padding: "6px 18px",
              fontSize: 18,
              color: "#6C5CE4",
              fontWeight: 500,
            }}
          >
            {categoria}
          </div>
        </div>

        {/* Título */}
        <div
          style={{
            fontSize: titulo.length > 60 ? 38 : 46,
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.25,
            flex: 1,
            maxWidth: 960,
          }}
        >
          {titulo}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #e5e7eb",
            paddingTop: 24,
            marginTop: 32,
          }}
        >
          <div style={{ fontSize: 18, color: "#6b7280", fontWeight: 500 }}>
            attempo.cl/blog
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
            Leer artículo →
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
