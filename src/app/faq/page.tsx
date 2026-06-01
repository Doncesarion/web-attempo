import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Respuestas a las preguntas más comunes sobre Attempo, la plataforma de agendamiento para profesionales en Chile.",
}

const faqs = [
  {
    pregunta: "¿Qué es Attempo?",
    respuesta:
      "Attempo es una plataforma de agendamiento de citas para profesionales de la salud y servicios en Chile. Permite gestionar tu agenda, enviar recordatorios automáticos y mucho más.",
  },
  {
    pregunta: "¿Puedo probarlo gratis?",
    respuesta:
      "Sí, ofrecemos un período de prueba para que puedas conocer todas las funcionalidades sin compromiso.",
  },
  {
    pregunta: "¿Cómo funcionan los recordatorios?",
    respuesta:
      "Attempo envía recordatorios automáticos a tus pacientes o clientes por WhatsApp, Instagram o correo electrónico antes de cada cita.",
  },
  {
    pregunta: "¿Puedo usar Attempo desde mi celular?",
    respuesta:
      "Sí, la plataforma está optimizada para funcionar en dispositivos móviles y de escritorio.",
  },
  {
    pregunta: "¿Mis datos están seguros?",
    respuesta:
      "Absolutamente. Usamos cifrado de extremo a extremo y seguimos las mejores prácticas de seguridad para proteger la información de tus pacientes.",
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">FAQ</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre Attempo.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-3">{faq.pregunta}</h3>
              <p className="text-gray-600">{faq.respuesta}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
