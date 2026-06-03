import type { Metadata } from "next"
import Script from "next/script"
import FaqContent from "./FaqContent"

export const metadata: Metadata = {
  title: "Preguntas frecuentes — attempo",
  description: "Resolvemos tus dudas sobre attempo: prueba gratis, planes, recordatorios automáticos, seguridad y soporte en Chile.",
  alternates: { canonical: "https://attempo.cl/faq" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Puedo probar attempo gratis?", acceptedAnswer: { "@type": "Answer", text: "Sí. Tienes 12 días de prueba completa en cualquier plan, sin necesidad de ingresar una tarjeta de crédito." } },
    { "@type": "Question", name: "¿Cuánto cuesta attempo?", acceptedAnswer: { "@type": "Answer", text: "Hay tres planes: Inicio a $24.990/mes, Pro a $44.990/mes y Clínica IA a $119.990/mes. Todos los precios son + IVA. Con pago anual tienes 20% de descuento." } },
    { "@type": "Question", name: "¿Hay descuento por pago anual?", acceptedAnswer: { "@type": "Answer", text: "Sí, al pagar el año completo obtienes un 20% de descuento en cualquier plan." } },
    { "@type": "Question", name: "¿Puedo cambiar de plan en cualquier momento?", acceptedAnswer: { "@type": "Answer", text: "Sí. Puedes subir o bajar de plan cuando quieras. El cambio se aplica de forma inmediata." } },
    { "@type": "Question", name: "¿Cómo funcionan los recordatorios automáticos?", acceptedAnswer: { "@type": "Answer", text: "attempo envía recordatorios automáticos a tus pacientes antes de cada cita por WhatsApp, email o SMS. Tú defines con cuánta anticipación se envían." } },
    { "@type": "Question", name: "¿Los datos de mis pacientes están seguros?", acceptedAnswer: { "@type": "Answer", text: "Sí. Usamos cifrado TLS y almacenamos los datos en servidores seguros. La información de tus pacientes nunca se comparte con terceros." } },
    { "@type": "Question", name: "¿Necesito instalar alguna aplicación?", acceptedAnswer: { "@type": "Answer", text: "No. attempo es 100% web y funciona en cualquier navegador, desde tu computador, tablet o celular." } },
    { "@type": "Question", name: "¿Cómo obtengo ayuda si tengo un problema?", acceptedAnswer: { "@type": "Answer", text: "Puedes contactarnos por el chat dentro de la plataforma o por email. Somos un equipo chileno que responde en español." } },
  ],
}

export default function FaqPage() {
  return (
    <>
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqContent />
    </>
  )
}
