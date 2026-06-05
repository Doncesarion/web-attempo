import type { Metadata } from "next"
import Script from "next/script"
import PlataformaContent from "./PlataformaContent"

export const metadata: Metadata = {
  title: "Plataforma — attempo",
  description: "Agenda online, recordatorios automáticos por WhatsApp, cobro con Webpay, boleta de honorarios y chatbot IA. Todo en un solo lugar para profesionales de la salud en Chile.",
  alternates: { canonical: "https://attempo.cl/plataforma" },
  openGraph: {
    title: "Plataforma — attempo",
    description: "Agenda online, recordatorios automáticos por WhatsApp, cobro con Webpay, boleta de honorarios y chatbot IA. Todo en un solo lugar para profesionales de la salud en Chile.",
    url: "https://attempo.cl/plataforma",
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
  inLanguage: "es",
  areaServed: { "@type": "Country", name: "Chile" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "CLP",
    lowPrice: "24990",
    highPrice: "119990",
    offerCount: "3",
  },
  featureList: [
    "Agenda online",
    "Recordatorios automáticos por WhatsApp",
    "Chatbot IA 24/7",
    "Cobro con Webpay",
    "Boleta de honorarios SII",
    "Portal de reservas online",
    "Base de pacientes",
    "Reportes y métricas",
  ],
}

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "attempo", item: "https://attempo.cl" },
    { "@type": "ListItem", position: 2, name: "Plataforma", item: "https://attempo.cl/plataforma" },
  ],
}

export default function PlataformaPage() {
  return (
    <>
      <Script id="jsonld-plataforma" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="jsonld-plataforma-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PlataformaContent />
    </>
  )
}
