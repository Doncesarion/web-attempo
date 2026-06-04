import type { Metadata } from "next"
import SolucionesContent from "./SolucionesContent"

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
  return <SolucionesContent />
}
