import type { Metadata } from "next"
import Script from "next/script"
import QuienesSomosContent from "./QuienesSomosContent"

export const metadata: Metadata = {
  title: "Quiénes somos — attempo",
  description:
    "Somos un equipo chileno que nació en 2025 con una misión: devolver el tiempo a los profesionales de salud y servicios. Conoce la historia, misión y valores de attempo.",
  alternates: { canonical: "https://attempo.cl/quienes-somos" },
  openGraph: {
    title: "Quiénes somos — attempo",
    description: "Somos un equipo chileno que nació en 2025 para devolver el tiempo a los profesionales de salud y servicios.",
    url: "https://attempo.cl/quienes-somos",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://attempo.cl/quienes-somos",
  url: "https://attempo.cl/quienes-somos",
  name: "Quiénes somos — attempo",
  description: "Somos un equipo chileno que nació en 2025 para devolver el tiempo a los profesionales de salud y servicios.",
  inLanguage: "es-CL",
  isPartOf: { "@id": "https://attempo.cl/#website" },
  about: { "@id": "https://attempo.cl/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "attempo", item: "https://attempo.cl" },
      { "@type": "ListItem", position: 2, name: "Quiénes somos", item: "https://attempo.cl/quienes-somos" },
    ],
  },
}

export default function QuienesSomosPage() {
  return (
    <>
      <Script id="jsonld-quienes-somos" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <QuienesSomosContent />
    </>
  )
}
