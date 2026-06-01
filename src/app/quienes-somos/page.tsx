import type { Metadata } from "next"
import QuienesSomosContent from "./QuienesSomosContent"

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Somos un equipo chileno que nació en 2025 con una misión: devolver el tiempo a los profesionales de salud y servicios. Conoce la historia, misión y valores de attempo.",
}

export default function QuienesSomosPage() {
  return <QuienesSomosContent />
}
