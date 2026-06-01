import type { Metadata } from "next"
import ContactoContent from "./ContactoContent"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes dudas sobre attempo? Escríbenos y te respondemos en menos de 24 horas hábiles. Soporte en español para profesionales en Chile.",
}

export default function ContactoPage() {
  return <ContactoContent />
}
