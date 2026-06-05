import type { Metadata } from "next"
import Script from "next/script"
import SolucionesContent from "./SolucionesContent"

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "attempo", item: "https://attempo.cl" },
    { "@type": "ListItem", position: 2, name: "Soluciones", item: "https://attempo.cl/soluciones" },
  ],
}

export const metadata: Metadata = {
  title: "Soluciones — attempo",
  description: "attempo para psicólogos, médicos, nutricionistas, barberías, abogados y más. Agenda online, recordatorios automáticos y cobro con Webpay para cualquier profesional en Chile.",
  alternates: { canonical: "https://attempo.cl/soluciones" },
  openGraph: {
    title: "Soluciones — attempo",
    description: "attempo para psicólogos, médicos, nutricionistas, barberías, abogados y más. Agenda online, recordatorios automáticos y cobro con Webpay.",
    url: "https://attempo.cl/soluciones",
    type: "website",
  },
}

export default function SolucionesPage() {
  return (
    <>
      <Script id="jsonld-soluciones-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SolucionesContent />
    </>
  )
}
