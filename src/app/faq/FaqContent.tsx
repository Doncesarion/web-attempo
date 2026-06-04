"use client"

import React, { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import Link from "next/link"

const ChevronIcon = () => (
  <svg className="w-5 h-5 text-[#6C5CE4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const MessageIcon = () => (
  <svg className="w-6 h-6 text-[#6C5CE4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

type Pregunta = { id: string; q: string; a: string }
type Categoria = { id: string; titulo: string; preguntas: Pregunta[] }

const categorias: Categoria[] = [
  {
    id: "prueba",
    titulo: "Prueba gratuita y primeros pasos",
    preguntas: [
      {
        id: "p1",
        q: "¿Puedo probar attempo gratis?",
        a: "Sí. Tienes 12 días de prueba completa en cualquier plan, sin necesidad de ingresar una tarjeta de crédito. Puedes explorar todas las funcionalidades sin compromiso.",
      },
      {
        id: "p2",
        q: "¿Cuánto tiempo tarda configurar mi cuenta?",
        a: "Menos de 5 minutos. Solo creas tu perfil, defines tu disponibilidad horaria y ya puedes compartir tu link de agendamiento con tus pacientes o clientes.",
      },
      {
        id: "p3",
        q: "¿Necesito instalar alguna aplicación?",
        a: "No. attempo es 100% web y funciona en cualquier navegador, desde tu computador, tablet o celular. No requiere instalación de ningún tipo.",
      },
      {
        id: "p4",
        q: "¿Qué pasa cuando termina la prueba gratuita?",
        a: "Te avisamos antes de que termine. Si decides continuar, eliges el plan que más se ajuste a ti. Si no es para ti, tu cuenta se pausa y no se te cobra nada.",
      },
    ],
  },
  {
    id: "precios",
    titulo: "Planes y precios",
    preguntas: [
      {
        id: "pr1",
        q: "¿Cuánto cuesta attempo?",
        a: "Hay tres planes: Inicio a $24.990/mes, Pro a $44.990/mes y Clínica IA a $119.990/mes. Todos los precios son + IVA. Con pago anual tienes 20% de descuento.",
      },
      {
        id: "pr2",
        q: "¿Hay descuento por pago anual?",
        a: "Sí, al pagar el año completo obtienes un 20% de descuento en cualquier plan. El cobro se hace en un solo pago al inicio del período.",
      },
      {
        id: "pr3",
        q: "¿Puedo cambiar de plan en cualquier momento?",
        a: "Sí. Puedes subir o bajar de plan cuando quieras. El cambio se aplica de forma inmediata y el cobro se ajusta de manera proporcional.",
      },
      {
        id: "pr4",
        q: "¿Emiten boleta o factura?",
        a: "Sí. Emitimos boleta y factura electrónica para personas naturales y empresas. Puedes solicitarla desde tu cuenta al momento del pago.",
      },
    ],
  },
  {
    id: "funcionalidades",
    titulo: "Funcionalidades",
    preguntas: [
      {
        id: "f1",
        q: "¿Cómo funciona el agendamiento en línea?",
        a: "Tienes un link único (por ejemplo attempo.cl/tu-nombre) que puedes compartir por WhatsApp, redes sociales o tu sitio web. Tus pacientes eligen el horario disponible y la cita se registra automáticamente en tu agenda.",
      },
      {
        id: "f2",
        q: "¿Puedo gestionar varios profesionales en una cuenta?",
        a: "Sí, en los planes Pro y Clínica IA puedes añadir múltiples profesionales al mismo centro, cada uno con su propia agenda y disponibilidad.",
      },
      {
        id: "f3",
        q: "¿Los pacientes tienen un portal propio?",
        a: "Sí. Tus pacientes pueden acceder a su historial de citas, reagendar o cancelar sin necesidad de llamarte. Esto reduce las llamadas y mejora la experiencia.",
      },
      {
        id: "f4",
        q: "¿Puedo bloquear días o cambiar mi disponibilidad?",
        a: "Sí. Puedes bloquear días completos, horarios específicos y actualizar tu disponibilidad en tiempo real desde cualquier dispositivo.",
      },
    ],
  },
  {
    id: "recordatorios",
    titulo: "Recordatorios y comunicación",
    preguntas: [
      {
        id: "r1",
        q: "¿Cómo funcionan los recordatorios automáticos?",
        a: "attempo envía recordatorios automáticos a tus pacientes antes de cada cita por WhatsApp, email o SMS. Tú defines con cuánta anticipación se envían (24h, 48h, 1 semana).",
      },
      {
        id: "r2",
        q: "¿Puedo personalizar los mensajes de recordatorio?",
        a: "Sí. Puedes editar el texto con tu nombre, el nombre del paciente, la fecha y hora de la cita, y cualquier indicación adicional que necesites incluir.",
      },
      {
        id: "r3",
        q: "¿Qué pasa si un paciente cancela su cita?",
        a: "Recibes una notificación inmediata y el horario queda disponible automáticamente para que otro paciente pueda reservarlo.",
      },
    ],
  },
  {
    id: "seguridad",
    titulo: "Seguridad y privacidad",
    preguntas: [
      {
        id: "s1",
        q: "¿Los datos de mis pacientes están seguros?",
        a: "Sí. Usamos cifrado TLS para toda la comunicación y almacenamos los datos en servidores seguros. La información de tus pacientes nunca se comparte con terceros.",
      },
      {
        id: "s2",
        q: "¿Cumplen con la ley de protección de datos en Chile?",
        a: "Sí. Cumplimos con la Ley 19.628 sobre Protección de la Vida Privada. Puedes revisar nuestra política de privacidad para más detalles.",
      },
      {
        id: "s3",
        q: "¿Puedo exportar mis datos si decido no seguir usando attempo?",
        a: "Sí. Puedes exportar toda tu información (agenda, historial de citas, fichas de pacientes) en formato Excel o CSV en cualquier momento.",
      },
    ],
  },
  {
    id: "soporte",
    titulo: "Soporte",
    preguntas: [
      {
        id: "so1",
        q: "¿Cómo obtengo ayuda si tengo un problema?",
        a: "Puedes contactarnos por el chat dentro de la plataforma o por email. Somos un equipo chileno y respondemos siempre en español.",
      },
      {
        id: "so2",
        q: "¿En qué horario está disponible el soporte?",
        a: "Lunes a viernes de 9:00 a 18:00 horas (Chile). Para consultas fuera de horario, respondemos dentro de las próximas 24 horas hábiles.",
      },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

function AccordionItem({ item, isOpen, onToggle }: { item: Pregunta; isOpen: boolean; onToggle: () => void }) {
  return (
    <m.div variants={fadeUp} className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-[#f5f3ff] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE4] focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 text-base leading-snug">{item.q}</span>
        <m.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronIcon />
        </m.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
              {item.a}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  )
}

export default function FaqContent() {
  const [abierta, setAbierta] = useState<string | null>(null)
  const [categoriaActiva, setCategoriaActiva] = useState<string>("todas")

  const categoriasFiltradas =
    categoriaActiva === "todas"
      ? categorias
      : categorias.filter((c) => c.id === categoriaActiva)

  const totalPreguntas = categorias.reduce((acc, c) => acc + c.preguntas.length, 0)

  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-gradient-to-b from-[#f5f3ff] to-white">
        <m.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden" animate="visible" variants={stagger}
        >
          <m.p variants={fadeUp} className="text-[#6C5CE4] text-xs font-semibold uppercase tracking-widest mb-4">
            Preguntas frecuentes
          </m.p>
          <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Todo lo que necesitas saber
          </m.h1>
          <m.p variants={fadeUp} className="text-lg text-gray-500">
            {totalPreguntas} preguntas respondidas. Si no encuentras lo que buscas, escríbenos.
          </m.p>
        </m.div>
      </section>

      {/* ── Filtro de categorías ────────────────────────────────────────────── */}
      <section className="px-4 pb-2 bg-white sticky top-0 z-10 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 overflow-x-auto py-3 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap scrollbar-none">
            {[{ id: "todas", titulo: "Todas" }, ...categorias].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaActiva(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  categoriaActiva === cat.id
                    ? "bg-[#6C5CE4] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-[#f5f3ff] hover:text-[#6C5CE4]"
                }`}
              >
                {cat.titulo}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Acordeón ────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <AnimatePresence mode="wait">
            {categoriasFiltradas.map((cat) => (
              <m.div
                key={cat.id}
                initial="hidden" animate="visible" variants={stagger}
              >
                <m.h2
                  variants={fadeUp}
                  className="text-sm font-semibold text-[#6C5CE4] uppercase tracking-widest mb-5"
                >
                  {cat.titulo}
                </m.h2>
                <div className="space-y-3">
                  {cat.preguntas.map((item) => (
                    <AccordionItem
                      key={item.id}
                      item={item}
                      isOpen={abierta === item.id}
                      onToggle={() => setAbierta(abierta === item.id ? null : item.id)}
                    />
                  ))}
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#6C5CE4]">
        <m.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={stagger}
        >
          <m.div variants={fadeUp} className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-6">
            <MessageIcon />
          </m.div>
          <m.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-3 tracking-tight">
            ¿Tienes otra pregunta?
          </m.h2>
          <m.p variants={fadeUp} className="text-white/80 mb-8">
            Nuestro equipo chileno está disponible para ayudarte. Sin bots, sin demoras.
          </m.p>
          <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#6C5CE4] font-semibold rounded-xl hover:bg-[#f5f3ff] transition-colors duration-200 cursor-pointer"
            >
              Escribirnos
            </Link>
            <Link
              href="https://app.attempo.cl/registro"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/15 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/25 transition-colors duration-200 cursor-pointer"
            >
              Probar gratis 12 días
            </Link>
          </m.div>
        </m.div>
      </section>

    </div>
  )
}
