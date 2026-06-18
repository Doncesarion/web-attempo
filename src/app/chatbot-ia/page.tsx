import type { Metadata } from "next"
import Script from "next/script"
import ChatbotIAContent from "./ChatbotIAContent"

export const metadata: Metadata = {
  title: "Chatbot IA para médicos y clínicas en Chile — attempo",
  description:
    "Attia es el asistente virtual con inteligencia artificial de attempo. Responde consultas de pacientes las 24 horas, agenda citas automáticamente y opera en WhatsApp, Instagram y Messenger. Sin costo extra.",
  alternates: { canonical: "https://attempo.cl/chatbot-ia" },
  keywords: [
    "chatbot ia médicos chile",
    "chatbot inteligencia artificial clínicas",
    "asistente virtual salud chile",
    "bot whatsapp médicos",
    "atención automática pacientes",
    "chatbot para psicólogos chile",
    "respuesta automática consultas médicas",
    "agendamiento automático whatsapp",
    "chatbot ia agendamiento citas",
  ],
  openGraph: {
    title: "Chatbot IA para médicos y clínicas en Chile — attempo",
    description:
      "Attia responde a tus pacientes las 24 horas, agenda citas en tiempo real y opera en WhatsApp, Instagram y Messenger. Configurado en minutos.",
    url: "https://attempo.cl/chatbot-ia",
    type: "website",
  },
}

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Attia — Chatbot IA de attempo",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, WhatsApp, Instagram, Facebook Messenger",
  url: "https://attempo.cl/chatbot-ia",
  description:
    "Asistente virtual con inteligencia artificial para profesionales de la salud en Chile. Atiende consultas de pacientes 24/7, agenda citas automáticamente y responde por WhatsApp, Instagram y Messenger.",
  inLanguage: "es",
  areaServed: { "@type": "Country", name: "Chile" },
  publisher: {
    "@type": "Organization",
    name: "attempo",
    url: "https://attempo.cl",
  },
  featureList: [
    "Atención de pacientes 24/7",
    "Agendamiento automático de citas por chat",
    "Integración con WhatsApp Business",
    "Integración con Instagram Direct",
    "Integración con Facebook Messenger",
    "Respuestas personalizadas por especialidad",
    "Base de conocimiento configurable",
    "Traspaso a atención humana cuando se requiere",
    "Sin costo adicional en planes Pro y Clínica IA",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CLP",
    description: "Incluido en planes Pro y Clínica IA de attempo",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el chatbot IA de attempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Attia es el asistente virtual con inteligencia artificial de attempo. Responde automáticamente las consultas de tus pacientes, agenda citas en tiempo real y opera en WhatsApp, Instagram y Messenger las 24 horas del día, los 7 días de la semana.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué canales funciona el chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Attia opera en WhatsApp Business, Instagram Direct y Facebook Messenger. Todos los mensajes llegan a una bandeja unificada dentro de attempo, donde puedes ver el historial de cada conversación.",
      },
    },
    {
      "@type": "Question",
      name: "¿El chatbot puede agendar citas automáticamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Attia consulta la disponibilidad real de tu agenda y puede confirmar una cita directamente desde la conversación de chat, sin que el profesional tenga que intervenir manualmente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se configura el chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desde el panel de administración de attempo puedes definir el nombre del asistente, su género, tono de voz, saludo inicial, preguntas frecuentes con sus respuestas y una base de conocimiento personalizada con información de tu consulta o clínica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa cuando el paciente necesita atención humana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El asistente detecta cuándo una consulta requiere intervención humana y puede pausar el bot para que el profesional o su equipo retome la conversación directamente desde la bandeja de mensajes de attempo.",
      },
    },
    {
      "@type": "Question",
      name: "¿El chatbot IA tiene costo adicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El chatbot Attia está incluido en los planes Pro y Clínica IA de attempo sin costo adicional. Tampoco requiere conocimientos técnicos para configurarlo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro usar inteligencia artificial con datos de pacientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. attempo no almacena datos clínicos sensibles en el chatbot. La IA responde con la información que tú mismo configuras (horarios, servicios, precios, ubicación), sin acceso a fichas médicas ni historial clínico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona para psicólogos, dentistas y otras especialidades?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Attia está diseñado para cualquier profesional de la salud: médicos generales, psicólogos, psiquiatras, nutricionistas, matronas, fisioterapeutas, dentistas y más. Cada profesional personaliza el asistente para su especialidad.",
      },
    },
  ],
}

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "attempo", item: "https://attempo.cl" },
    { "@type": "ListItem", position: 2, name: "Chatbot IA", item: "https://attempo.cl/chatbot-ia" },
  ],
}

export default function ChatbotIAPage() {
  return (
    <>
      <Script id="jsonld-chatbot-software" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }} />
      <Script id="jsonld-chatbot-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <Script id="jsonld-chatbot-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <ChatbotIAContent />
    </>
  )
}
