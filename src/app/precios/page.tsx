import type { Metadata } from "next"
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

export default function PreciosPage() {
  return <PreciosContent />
}
