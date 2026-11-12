import type { Metadata } from "next"
import Script from "next/script"
import ServiciosContent from "./ServiciosContent"

export const metadata: Metadata = {
  title: "Servicios digitales — attempo",
  description:
    "Desarrollo web, automatización de procesos, campañas digitales y seguridad web para empresas en Chile. Proyectos a medida con un equipo local.",
  alternates: { canonical: "https://attempo.cl/servicios" },
  openGraph: {
    title: "Servicios digitales — attempo",
    description: "Desarrollo web, automatización de procesos, campañas digitales y seguridad web para empresas en Chile.",
    url: "https://attempo.cl/servicios",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://attempo.cl/servicios",
  url: "https://attempo.cl/servicios",
  name: "Servicios digitales — attempo",
  description: "Desarrollo web, automatización de procesos, campañas digitales y seguridad web.",
  inLanguage: "es-CL",
  provider: { "@id": "https://attempo.cl/#organization" },
  areaServed: "CL",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "attempo", item: "https://attempo.cl" },
      { "@type": "ListItem", position: 2, name: "Servicios digitales", item: "https://attempo.cl/servicios" },
    ],
  },
}

export default function ServiciosPage() {
  return (
    <>
      <Script id="jsonld-servicios" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiciosContent />
    </>
  )
}
