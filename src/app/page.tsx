import type { Metadata } from "next"
import Script from "next/script"
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  ScreenshotsSection,
  WebpaySection,
  TestimonialsSection,
  EspecialidadesSection,
  CTASection,
} from "@/components/HomeAnimations"

export const metadata: Metadata = {
  title: "attempo — Sistema de Agendamiento Online para Profesionales de Salud en Chile",
  description:
    "Sistema de agendamiento online para profesionales de la salud en Chile. Agenda 24/7, recordatorios automáticos por WhatsApp, cobro anticipado con Webpay y chatbot IA. Prueba gratis 12 días.",
  alternates: { canonical: "https://attempo.cl" },
  keywords: [
    "sistema de agendamiento online Chile",
    "agenda online profesionales salud Chile",
    "software agendamiento médico Chile",
    "plataforma agendamiento citas Chile",
    "recordatorios automáticos WhatsApp",
    "agenda online psicólogos Chile",
    "cobro anticipado Webpay citas",
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://attempo.cl/#organization",
      name: "attempo",
      url: "https://attempo.cl",
      logo: {
        "@type": "ImageObject",
        url: "https://attempo.cl/logo_attempo.png",
        width: 512,
        height: 512,
      },
      description:
        "Plataforma de agendamiento de citas para profesionales de la salud y servicios en Chile.",
      email: "contacto@attempo.cl",
      foundingDate: "2025",
      areaServed: { "@type": "Country", name: "Chile" },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contacto@attempo.cl",
        contactType: "customer support",
        availableLanguage: "Spanish",
        areaServed: "CL",
      },
      sameAs: [
        "https://www.instagram.com/attempo.app/",
        "https://www.facebook.com/people/Attempo/61561292586875/",
        "https://linkedin.com/company/attempo",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://attempo.cl/#website",
      url: "https://attempo.cl",
      name: "attempo",
      description: "Todo a tu tiempo",
      publisher: { "@id": "https://attempo.cl/#organization" },
      inLanguage: "es-CL",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://attempo.cl/#product",
      name: "attempo",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: [
        {
          "@type": "Offer",
          name: "Plan Inicio",
          price: "24990",
          priceCurrency: "CLP",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingDuration: "P1M",
          },
        },
        {
          "@type": "Offer",
          name: "Plan Pro",
          price: "44990",
          priceCurrency: "CLP",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingDuration: "P1M",
          },
        },
        {
          "@type": "Offer",
          name: "Plan Clínica IA",
          price: "119990",
          priceCurrency: "CLP",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingDuration: "P1M",
          },
        },
      ],
      provider: { "@id": "https://attempo.cl/#organization" },
      url: "https://attempo.cl",
      description:
        "Agenda online, recordatorios automáticos por WhatsApp, cobro con Webpay y chatbot IA para profesionales de la salud en Chile.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es attempo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "attempo es un sistema de agendamiento online para profesionales de la salud y servicios en Chile. Incluye agenda online 24/7, recordatorios automáticos por WhatsApp, cobro anticipado con Webpay y chatbot con inteligencia artificial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta attempo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "attempo tiene planes desde $24.990 CLP al mes. Incluye una prueba gratuita de 12 días con acceso a todas las funcionalidades, sin necesidad de tarjeta de crédito.",
          },
        },
        {
          "@type": "Question",
          name: "¿attempo tiene integración con Webpay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, attempo integra Webpay (Transbank) de forma nativa en el flujo de reserva. El paciente puede pagar con tarjeta de crédito o débito al momento de agendar su cita, antes de confirmarla.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué profesionales de salud está pensado attempo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "attempo está diseñado para psicólogos, psiquiatras, médicos generales, nutricionistas, matronas, kinesiólogos, dermatólogos, abogados, y cualquier profesional independiente o pequeño centro que necesite gestionar citas online en Chile.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo funcionan los recordatorios automáticos de attempo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "attempo envía recordatorios automáticos por WhatsApp: una confirmación inmediata al reservar, un recordatorio 48 horas antes y otro 2 horas antes de la cita. Todo sin intervención del profesional, lo que reduce las inasistencias entre un 70% y un 80%.",
          },
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <Script
        id="jsonld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <WebpaySection />
        <EspecialidadesSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  )
}
