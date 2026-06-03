import type { Metadata } from "next"
import PlataformaContent from "./PlataformaContent"

export const metadata: Metadata = {
  title: "Plataforma — attempo",
  description: "Agenda online, recordatorios automáticos por WhatsApp, cobro con Webpay, boleta de honorarios y chatbot IA. Todo en un solo lugar para profesionales de la salud en Chile.",
  alternates: { canonical: "https://attempo.cl/plataforma" },
}

export default function PlataformaPage() {
  return <PlataformaContent />
}
