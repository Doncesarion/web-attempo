import type { Metadata } from "next"
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  ScreenshotsSection,
  TestimonialsSection,
  EspecialidadesSection,
  CTASection,
} from "@/components/HomeAnimations"

export const metadata: Metadata = {
  title: "Attempo — Todo a tu tiempo",
  description:
    "Plataforma de agendamiento de citas para profesionales de la salud y servicios en Chile. Recordatorios automáticos, chatbot IA, agenda online y más.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <EspecialidadesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
