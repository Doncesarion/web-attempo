import type { Metadata } from "next"
import Script from "next/script"
import PreciosContent from "./PreciosContent"

export const metadata: Metadata = {
  title: "Precios — attempo",
  description: "Planes flexibles para profesionales y centros de salud en Chile. Empieza gratis 12 días sin tarjeta de crédito.",
  alternates: { canonical: "https://attempo.cl/precios" },
  openGraph: {
    title: "Precios — attempo",
    description: "Planes flexibles para profesionales y centros de salud en Chile. Empieza gratis 12 días sin tarjeta de crédito.",
    url: "https://attempo.cl/precios",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "attempo",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://attempo.cl",
  description: "Plataforma de agendamiento de citas para profesionales de la salud y servicios en Chile.",
  offers: [
    {
      "@type": "Offer",
      name: "Inicio",
      price: "24990",
      priceCurrency: "CLP",
      description: "Plan para profesionales independientes. Agenda, recordatorios y gestión básica.",
      url: "https://attempo.cl/precios",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "44990",
      priceCurrency: "CLP",
      description: "Plan profesional con Webpay, chatbot IA, boleta de honorarios y más.",
      url: "https://attempo.cl/precios",
    },
    {
      "@type": "Offer",
      name: "Clínica IA",
      price: "119990",
      priceCurrency: "CLP",
      description: "Plan para centros y clínicas con múltiples profesionales y todas las funcionalidades.",
      url: "https://attempo.cl/precios",
    },
  ],
}

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "attempo", item: "https://attempo.cl" },
    { "@type": "ListItem", position: 2, name: "Precios", item: "https://attempo.cl/precios" },
  ],
}

export default function PreciosPage() {
  return (
    <>
      <Script id="jsonld-precios" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="jsonld-precios-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PreciosContent />
    </>
  )
}
