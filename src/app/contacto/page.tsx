import type { Metadata } from "next"
import ContactoContent from "./ContactoContent"

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "¿Tienes dudas sobre attempo? Escríbenos y te respondemos en menos de 24 horas hábiles. Soporte en español para profesionales en Chile.",
  alternates: { canonical: "https://attempo.cl/contacto" },
  openGraph: {
    title: "Contacto — attempo",
    description: "¿Tienes dudas sobre attempo? Escríbenos y te respondemos en menos de 24 horas hábiles.",
    url: "https://attempo.cl/contacto",
    type: "website",
  },
}

export default function ContactoPage() {
  return <ContactoContent />
}
