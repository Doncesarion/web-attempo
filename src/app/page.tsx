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
  title: "attempo — Todo a tu tiempo",
  description:
    "Plataforma de agendamiento de citas para profesionales de la salud y servicios en Chile. Recordatorios automáticos, chatbot IA, agenda online y más.",
  alternates: { canonical: "https://attempo.cl" },
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
