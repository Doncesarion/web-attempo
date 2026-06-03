import type { Metadata } from "next"
import SolucionesContent from "./SolucionesContent"

export const metadata: Metadata = {
  title: "Soluciones — attempo",
  description: "attempo para psicólogos, médicos, nutricionistas, barberías, abogados y más. Agenda online, recordatorios automáticos y cobro con Webpay para cualquier profesional en Chile.",
  alternates: { canonical: "https://attempo.cl/soluciones" },
}

export default function SolucionesPage() {
  return <SolucionesContent />
}
