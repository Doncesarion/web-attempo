"use client"

import React, { useState } from "react"
import { m } from "framer-motion"
import Link from "next/link"

/* ── Icons ────────────────────────────────────────────────────────────── */
const SparklesIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)
const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#6C5CE4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)
const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)
const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)
const InstagramIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)
const MessengerIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
  </svg>
)
const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)
const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)
const SlidersIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
)
const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)
const InboxIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
)

/* ── Animation variants ───────────────────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94] as const
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── Fake chat bubble component ───────────────────────────────────────── */
function ChatBubble({ from, text, delay = 0 }: { from: "bot" | "user"; text: string; delay?: number }) {
  return (
    <m.div
      className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {from === "bot" && (
        <div className="w-7 h-7 rounded-full bg-[#6C5CE4] flex items-center justify-center mr-2 flex-shrink-0 mt-auto">
          <span className="text-white text-xs font-bold">A</span>
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          from === "bot"
            ? "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-sm"
            : "bg-[#6C5CE4] text-white rounded-tr-sm"
        }`}
      >
        {text}
      </div>
    </m.div>
  )
}

/* ── FAQ Item ─────────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-gray-900 font-medium group-hover:text-[#6C5CE4] transition-colors">{q}</span>
        <ChevronDownIcon open={open} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

/* ── Step pill ────────────────────────────────────────────────────────── */
function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <m.div variants={fadeUp} className="flex gap-5">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6C5CE4]/10 text-[#6C5CE4] font-bold text-lg flex items-center justify-center">
        {n}
      </div>
      <div className="pt-1">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
      </div>
    </m.div>
  )
}

/* ── Specialty card ───────────────────────────────────────────────────── */
function SpecialtyCard({ emoji, name, desc }: { emoji: string; name: string; desc: string }) {
  return (
    <m.div variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#6C5CE4]/30 hover:shadow-md transition-all duration-200">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </m.div>
  )
}

/* ── Benefit card ─────────────────────────────────────────────────────── */
function BenefitCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <m.div variants={fadeUp} className="flex gap-4">
      <div className="w-12 h-12 rounded-xl bg-[#6C5CE4]/10 flex items-center justify-center text-[#6C5CE4] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </m.div>
  )
}

/* ── Main component ───────────────────────────────────────────────────── */
export default function ChatbotIAContent() {
  const faqs = [
    {
      q: "¿Qué es el chatbot IA de attempo?",
      a: "Attia es el asistente virtual con inteligencia artificial de attempo. Responde automáticamente las consultas de tus pacientes, agenda citas en tiempo real y opera en WhatsApp, Instagram y Messenger las 24 horas del día, los 7 días de la semana.",
    },
    {
      q: "¿En qué canales funciona el chatbot?",
      a: "Attia opera en WhatsApp Business, Instagram Direct y Facebook Messenger. Todos los mensajes llegan a una bandeja unificada dentro de attempo, donde puedes ver el historial de cada conversación.",
    },
    {
      q: "¿El chatbot puede agendar citas automáticamente?",
      a: "Sí. Attia consulta la disponibilidad real de tu agenda y puede confirmar una cita directamente desde la conversación de chat, sin que el profesional tenga que intervenir manualmente.",
    },
    {
      q: "¿Cómo se configura el chatbot?",
      a: "Desde el panel de administración de attempo puedes definir el nombre del asistente, su género, tono de voz, saludo inicial, preguntas frecuentes con sus respuestas y una base de conocimiento personalizada con información de tu consulta o clínica.",
    },
    {
      q: "¿Qué pasa cuando el paciente necesita atención humana?",
      a: "El asistente detecta cuándo una consulta requiere intervención humana y puede pausar el bot para que el profesional o su equipo retome la conversación directamente desde la bandeja de mensajes de attempo.",
    },
    {
      q: "¿El chatbot IA tiene costo adicional?",
      a: "No. El chatbot Attia está incluido en los planes Pro y Clínica IA de attempo sin costo adicional. Tampoco requiere conocimientos técnicos para configurarlo.",
    },
    {
      q: "¿Es seguro usar inteligencia artificial con datos de pacientes?",
      a: "Sí. attempo no almacena datos clínicos sensibles en el chatbot. La IA responde con la información que tú mismo configuras (horarios, servicios, precios, ubicación), sin acceso a fichas médicas ni historial clínico.",
    },
    {
      q: "¿Funciona para psicólogos, dentistas y otras especialidades?",
      a: "Sí. Attia está diseñado para cualquier profesional de la salud: médicos generales, psicólogos, psiquiatras, nutricionistas, matronas, fisioterapeutas, dentistas y más. Cada profesional personaliza el asistente para su especialidad.",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <m.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-xl"
            >
              <m.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#6C5CE4]/10 text-[#6C5CE4] text-sm font-medium px-3 py-1.5 rounded-full mb-6">
                <SparklesIcon />
                Inteligencia Artificial para la salud
              </m.div>

              <m.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Chatbot IA para{" "}
                <span className="text-[#6C5CE4]">médicos y clínicas</span>{" "}
                en Chile
              </m.h1>

              <m.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>Attia</strong> es el asistente virtual con inteligencia artificial de attempo. Responde las consultas de tus pacientes las 24 horas, agenda citas automáticamente y opera en WhatsApp, Instagram y Messenger.
              </m.p>
              <m.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
                Sin programación. Sin costo extra. Listo en minutos desde tu panel de administración.
              </m.p>

              <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/precios"
                  className="inline-flex items-center justify-center bg-[#6C5CE4] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#5a4bd1] transition-colors"
                >
                  Ver planes que incluyen Attia
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-xl hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-colors"
                >
                  Solicitar demo
                </Link>
              </m.div>
            </m.div>

            {/* Right: chat mockup */}
            <m.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-50 max-w-sm mx-auto lg:ml-auto">
                {/* Header */}
                <div className="bg-[#6C5CE4] px-5 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Attia</p>
                    <p className="text-white/70 text-xs">Asistente virtual · En línea</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
                </div>

                {/* Messages */}
                <div className="p-4 space-y-3 bg-gray-50 min-h-[280px]">
                  <ChatBubble from="bot" text="¡Hola! Soy Attia, asistente virtual de la Clínica Salud. ¿En qué puedo ayudarte hoy?" delay={0.3} />
                  <ChatBubble from="user" text="Necesito agendar una hora con el Dr. Ramírez para esta semana" delay={0.7} />
                  <ChatBubble from="bot" text="Claro, tengo disponible el miércoles 18 a las 10:00 o el jueves 19 a las 15:30. ¿Cuál te acomoda mejor?" delay={1.1} />
                  <ChatBubble from="user" text="El jueves a las 15:30 perfecto" delay={1.5} />
                  <ChatBubble from="bot" text="¡Listo! Tu cita queda confirmada para el jueves 19 a las 15:30 con el Dr. Ramírez. Te enviaré un recordatorio el día anterior 🗓" delay={1.9} />
                </div>

                {/* Input bar */}
                <div className="bg-white px-4 py-3 flex items-center gap-3 border-t border-gray-100">
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                    <span className="text-gray-400 text-sm">Escribe un mensaje...</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#6C5CE4] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Channel badges */}
              <div className="flex justify-center gap-3 mt-5">
                {[
                  { icon: <WhatsAppIcon />, label: "WhatsApp", color: "text-green-600 bg-green-50 border-green-200" },
                  { icon: <InstagramIcon />, label: "Instagram", color: "text-pink-600 bg-pink-50 border-pink-200" },
                  { icon: <MessengerIcon />, label: "Messenger", color: "text-blue-600 bg-blue-50 border-blue-200" },
                ].map(({ icon, label, color }) => (
                  <div key={label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${color}`}>
                    <span className="w-4 h-4 [&>svg]:w-4 [&>svg]:h-4">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── Qué es Attia ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
              ¿Qué es el chatbot IA de attempo?
            </m.h2>
            <m.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed text-center mb-6">
              <strong>Attia</strong> es un asistente virtual con inteligencia artificial diseñado específicamente para profesionales de la salud en Chile. A diferencia de los chatbots genéricos, Attia conoce tu especialidad, tus horarios de atención, tus servicios y tus tarifas porque tú mismo lo configuras desde el panel de attempo.
            </m.p>
            <m.p variants={fadeUp} className="text-gray-600 leading-relaxed text-center mb-6">
              Cuando un paciente escribe por WhatsApp a las 11 de la noche preguntando por una hora disponible, Attia responde de inmediato, verifica tu agenda en tiempo real y confirma la cita automáticamente. Sin que tengas que revisar el teléfono. Sin que el paciente quede esperando hasta el día siguiente.
            </m.p>
            <m.p variants={fadeUp} className="text-gray-600 leading-relaxed text-center">
              Attia es parte de attempo, la plataforma integral de gestión para consultas y clínicas. Está incluido en los planes <strong>Pro</strong> y <strong>Clínica IA</strong> sin costo adicional y se conecta automáticamente a tu agenda, a tu base de pacientes y a los canales digitales de tu consulta.
            </m.p>
          </m.div>
        </div>
      </section>

      {/* ── Beneficios ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              ¿Para qué sirve un chatbot IA en tu consulta?
            </m.h2>
            <m.p variants={fadeUp} className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
              Un asistente virtual con inteligencia artificial resuelve las tareas repetitivas de atención al paciente para que tú te concentres en lo que importa: la consulta.
            </m.p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <ClockIcon />,
                  title: "Atención 24/7 sin horario",
                  desc: "Attia responde consultas a cualquier hora, incluidos fines de semana y festivos. Tus pacientes nunca quedan sin respuesta, aunque sea de madrugada.",
                },
                {
                  icon: <CalendarIcon />,
                  title: "Agendamiento automático",
                  desc: "El chatbot consulta tu disponibilidad en tiempo real y confirma citas directamente en la conversación, sin intervención manual.",
                },
                {
                  icon: <InboxIcon />,
                  title: "Bandeja unificada de mensajes",
                  desc: "Todos los mensajes de WhatsApp, Instagram y Messenger llegan a un solo lugar en attempo. Sin apps adicionales, sin cambiar de pantalla.",
                },
                {
                  icon: <SlidersIcon />,
                  title: "Totalmente personalizable",
                  desc: "Define el nombre del asistente, su tono, su saludo y sus respuestas. Puedes cargar una base de conocimiento con la información específica de tu consulta.",
                },
                {
                  icon: <UserIcon />,
                  title: "Traspaso a atención humana",
                  desc: "Cuando la consulta lo requiere, Attia pausa el bot y avisa al equipo para que retome la conversación personalmente desde la bandeja.",
                },
                {
                  icon: <ShieldIcon />,
                  title: "Sin datos clínicos en la IA",
                  desc: "El chatbot responde solo con la información que tú configuras. No accede ni almacena fichas médicas, diagnósticos ni historial clínico.",
                },
              ].map((b) => (
                <BenefitCard key={b.title} {...b} />
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* ── Canales ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <m.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Un chatbot en todos tus canales digitales
            </m.h2>
            <m.p variants={fadeUp} className="text-gray-600 max-w-2xl mx-auto">
              Attia se integra con los canales de mensajería más usados en Chile. Tus pacientes pueden escribirte desde la plataforma que prefieran y siempre recibirán una respuesta inmediata.
            </m.p>
          </m.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <WhatsAppIcon />,
                color: "text-green-600 bg-green-50 border-green-100",
                name: "WhatsApp Business",
                desc: "El canal más usado en Chile para comunicarse con profesionales de salud. Attia responde automáticamente los mensajes de tu número de WhatsApp Business, agenda citas y envía la confirmación al instante.",
                tags: ["Agendamiento", "Recordatorios", "FAQs"],
              },
              {
                icon: <InstagramIcon />,
                color: "text-pink-600 bg-pink-50 border-pink-100",
                name: "Instagram Direct",
                desc: "Muchos pacientes contactan a sus médicos por Instagram antes de buscar el número de teléfono. Attia responde los mensajes directos de tu cuenta profesional con la misma calidad que en WhatsApp.",
                tags: ["Mensajes directos", "Preguntas de perfil", "Derivación"],
              },
              {
                icon: <MessengerIcon />,
                color: "text-blue-600 bg-blue-50 border-blue-100",
                name: "Facebook Messenger",
                desc: "Para profesionales y clínicas con página de Facebook activa, Attia gestiona los mensajes entrantes y responde automáticamente sin que el equipo deba estar pendiente.",
                tags: ["Página de empresa", "Consultas", "Agendamiento"],
              },
            ].map(({ icon, color, name, desc, tags }) => (
              <m.div
                key={name}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:border-gray-200 transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${color}`}>
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <m.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Cómo se configura el chatbot IA?
              </m.h2>
              <m.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-10">
                No necesitas saber de tecnología. Desde el panel de attempo configuras todo en minutos.
              </m.p>

              <div className="space-y-8">
                <Step n={1} title="Conecta tus canales" desc="Vincula tu cuenta de WhatsApp Business, Instagram o Facebook desde el panel de Bandeja en attempo. El proceso toma menos de 5 minutos." />
                <Step n={2} title="Personaliza a Attia" desc="Define el nombre del asistente, su género, tono de voz y el mensaje de bienvenida. Puedes hacer que suene exactamente como quieres que represente a tu consulta." />
                <Step n={3} title="Carga tu base de conocimiento" desc="Agrega las preguntas frecuentes de tus pacientes con sus respuestas, tu dirección, tus servicios, tarifas, horarios de atención y cualquier información que Attia necesite para responder correctamente." />
                <Step n={4} title="Activa el bot" desc="Con un solo clic activas Attia. Desde ese momento responde automáticamente los mensajes entrantes, consulta tu agenda y agenda citas sin que tengas que intervenir." />
                <Step n={5} title="Revisa y ajusta" desc="Desde la bandeja de mensajes puedes ver todas las conversaciones, intervenir cuando quieras y ajustar las respuestas de Attia en cualquier momento." />
              </div>
            </m.div>

            {/* Right: included features */}
            <m.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 bg-[#6C5CE4]/10 text-[#6C5CE4] text-sm font-medium px-3 py-1.5 rounded-full mb-6">
                <SparklesIcon />
                Incluido en tu plan
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Todo lo que incluye Attia</h3>
              <ul className="space-y-4">
                {[
                  "Chatbot IA con inteligencia artificial (Claude Haiku)",
                  "Integración con WhatsApp Business",
                  "Integración con Instagram Direct",
                  "Integración con Facebook Messenger",
                  "Agendamiento automático desde el chat",
                  "Base de conocimiento personalizable",
                  "Preguntas frecuentes con respuestas",
                  "Nombre, tono y personalidad configurables",
                  "Bandeja unificada de conversaciones",
                  "Traspaso a atención humana",
                  "Sin costo extra en planes Pro y Clínica IA",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/precios"
                  className="w-full inline-flex items-center justify-center bg-[#6C5CE4] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#5a4bd1] transition-colors"
                >
                  Ver planes con Attia incluido
                </Link>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── Especialidades ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Chatbot IA para todas las especialidades de salud
            </m.h2>
            <m.p variants={fadeUp} className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
              Attia se adapta al lenguaje y necesidades de cada especialidad. Cada profesional configura su propio asistente virtual con la información específica de su consulta.
            </m.p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {[
                { emoji: "🧠", name: "Psicólogos y psiquiatras", desc: "Responde consultas sobre la primera sesión, tarifas, modalidad y agenda bloques de 50 minutos automáticamente." },
                { emoji: "🩺", name: "Médicos generales", desc: "Gestiona la agenda de consultas y controles. Informa sobre exámenes requeridos y documentos necesarios." },
                { emoji: "🦷", name: "Dentistas", desc: "Agenda horas de limpieza, ortodoncia o urgencias y responde dudas sobre tratamientos y precios." },
                { emoji: "🥗", name: "Nutricionistas", desc: "Confirma citas de primera consulta, explica qué llevar a la sesión y responde dudas sobre el proceso." },
                { emoji: "👶", name: "Matronas", desc: "Atiende consultas de embarazadas sobre controles prenatales, ecografías y disponibilidad." },
                { emoji: "💪", name: "Fisioterapeutas", desc: "Gestiona sesiones de kinesiología y responde sobre las técnicas disponibles y tiempos de recuperación." },
                { emoji: "🏥", name: "Centros y clínicas", desc: "Para equipos con múltiples especialistas: cada profesional tiene su propia agenda, Attia gestiona todo." },
                { emoji: "✨", name: "Estética y bienestar", desc: "Agenda procedimientos estéticos, responde sobre tratamientos y gestiona el tiempo entre citas." },
              ].map((s) => (
                <SpecialtyCard key={s.name} {...s} />
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* ── Por qué chatbot IA vs respuesta manual ───────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Chatbot IA vs. respuesta manual: ¿por qué importa?
            </m.h2>
            <m.p variants={fadeUp} className="text-gray-600 text-center mb-12">
              En Chile, el 68% de las consultas médicas por mensajería llegan fuera del horario de atención. Sin un asistente virtual, esos pacientes esperan hasta el día siguiente para obtener una respuesta, y muchos terminan agendando con otro profesional.
            </m.p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Without Attia */}
              <m.div variants={fadeUp} className="bg-white rounded-2xl border border-red-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 text-xs flex items-center justify-center font-bold">✕</span>
                  Sin chatbot IA
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Mensajes sin respuesta fuera del horario",
                    "El profesional revisa WhatsApp manualmente",
                    "Errores de agendamiento por mensajes cruzados",
                    "Pacientes que se van con otro médico",
                    "Tiempo de secretaría ocupado en consultas repetitivas",
                    "Sin historial unificado de conversaciones",
                  ].map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </m.div>

              {/* With Attia */}
              <m.div variants={fadeUp} className="bg-white rounded-2xl border border-[#6C5CE4]/20 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#6C5CE4]/10 text-[#6C5CE4] text-xs flex items-center justify-center font-bold">✓</span>
                  Con Attia (chatbot IA de attempo)
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Respuesta inmediata las 24 horas, 7 días",
                    "Agendamiento automático sin intervención",
                    "Sin errores: cada cita confirmada en la agenda",
                    "Paciente satisfecho desde el primer mensaje",
                    "El equipo se enfoca en atención de calidad",
                    "Historial de conversaciones en bandeja unificada",
                  ].map((i) => (
                    <li key={i} className="flex gap-2">
                      <CheckIcon />
                      {i}
                    </li>
                  ))}
                </ul>
              </m.div>
            </div>
          </m.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Preguntas frecuentes sobre el chatbot IA
            </m.h2>
            <m.p variants={fadeUp} className="text-gray-600 text-center mb-12">
              Resolvemos las dudas más comunes sobre Attia, el asistente virtual con inteligencia artificial de attempo.
            </m.p>

            <m.div variants={fadeUp} className="bg-gray-50 rounded-2xl border border-gray-100 px-6">
              {faqs.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#6C5CE4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <SparklesIcon />
              Attia incluido en tu plan
            </m.div>
            <m.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Empieza a atender pacientes las 24 horas
            </m.h2>
            <m.p variants={fadeUp} className="text-white/80 text-lg leading-relaxed mb-8">
              Activa tu chatbot IA hoy. Sin programación, sin costo extra. Attia se configura en minutos desde tu panel de attempo.
            </m.p>
            <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/precios"
                className="inline-flex items-center justify-center bg-white text-[#6C5CE4] font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Ver planes con Attia
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center border border-white/30 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                Hablar con el equipo
              </Link>
            </m.div>
          </m.div>
        </div>
      </section>
    </div>
  )
}
