"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

/* ── Icons ────────────────────────────────────────────────────────────── */
const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)
const BellIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
)
const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)
const CreditCardIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
)
const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)
const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)
const SparklesIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)
const PackageIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
)
const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#6C5CE4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)
const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)

/* ── Animation variants ───────────────────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94] as const
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}
const fadeUpSlow = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── Browser frame wrapper ────────────────────────────────────────────── */
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-full px-3 py-1 ml-2 max-w-xs mx-auto">
          <span className="text-xs text-gray-400 font-mono">app.attempo.cl</span>
        </div>
      </div>
      {children}
    </div>
  )
}

/* ── Feature block: 40/60 text/image asimétrico ──────────────────────── */
function FeatureBlock({
  id,
  badge,
  title,
  description,
  bullets,
  image,
  imageAlt,
  reverse = false,
  bg = "bg-white",
}: {
  id?: string
  badge: string
  title: string
  description: string
  bullets: string[]
  image: string
  imageAlt: string
  reverse?: boolean
  bg?: string
}) {
  return (
    <section id={id} className={`py-20 px-4 ${bg}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}>

          {/* Texto — 40% */}
          <motion.div
            className="w-full lg:w-2/5 flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-semibold text-[#6C5CE4] uppercase tracking-widest bg-[#6C5CE4]/10 px-3 py-1 rounded-full mb-4"
            >
              {badge}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-6">
              {description}
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3">
              {bullets.map((b) => (
                <motion.li key={b} variants={fadeUp} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                  <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Screenshot — 60% */}
          <motion.div
            className="w-full lg:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpSlow}
          >
            <BrowserFrame>
              <Image
                src={image}
                alt={imageAlt}
                width={900}
                height={560}
                className="w-full h-auto block"
                quality={95}
              />
            </BrowserFrame>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ── Main page ────────────────────────────────────────────────────────── */
export default function PlataformaContent() {
  const features = [
    { icon: <CalendarIcon />, label: "Agenda online" },
    { icon: <BellIcon />, label: "Recordatorios automáticos" },
    { icon: <UsersIcon />, label: "Portal de pacientes" },
    { icon: <CreditCardIcon />, label: "Cobro con Webpay" },
    { icon: <PackageIcon />, label: "Paquetes de sesiones" },
    { icon: <DocumentIcon />, label: "Boleta de honorarios" },
    { icon: <SparklesIcon />, label: "Chatbot IA" },
    { icon: <ChartIcon />, label: "Reportes y estadísticas" },
  ]

  return (
    <div className="flex flex-col">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-gradient-to-b from-[#f5f3ff] to-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#6C5CE4] text-xs font-semibold uppercase tracking-widest mb-4">
            Plataforma
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5 leading-tight"
          >
            Todo lo que necesitas,<br className="hidden sm:block" /> en un solo lugar
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Desde que agendas una cita hasta que emites la boleta — attempo cubre cada paso de tu flujo de trabajo sin complicaciones.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://app.attempo.cl/registro"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#6C5CE4] text-white font-semibold rounded-xl hover:bg-[#5A4BD1] transition-colors duration-200 cursor-pointer"
            >
              Probar gratis 12 días
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-colors duration-200 cursor-pointer"
            >
              Ver planes <ArrowRightIcon />
            </Link>
          </motion.div>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          className="max-w-3xl mx-auto mt-14"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {features.map((f) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
              >
                <span className="text-[#6C5CE4]">{f.icon}</span>
                <span className="text-sm font-medium text-gray-700">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Agenda online ──────────────────────────────────────────────── */}
      <FeatureBlock
        badge="Agenda online"
        title="Tu calendario inteligente, disponible 24/7"
        description="Comparte tu link de agendamiento y tus pacientes reservan solos en segundos. Sin llamadas, sin WhatsApp de ida y vuelta."
        bullets={[
          "Link personalizado para compartir donde quieras",
          "Vista diaria, semanal y mensual",
          "Bloquea días y horarios en segundos",
          "Acepta o rechaza citas con un clic",
        ]}
        image="/desktop-agenda.png"
        imageAlt="Vista de agenda en attempo"
        bg="bg-white"
      />

      {/* ── Recordatorios ──────────────────────────────────────────────── */}
      <FeatureBlock
        id="recordatorios"
        badge="Recordatorios automáticos"
        title="Reduce las inasistencias hasta un 80%"
        description="attempo envía recordatorios automáticos por WhatsApp, email y SMS antes de cada cita. Sin que tengas que hacer nada."
        bullets={[
          "WhatsApp, correo electrónico y SMS",
          "24h, 48h o 1 semana antes — tú decides",
          "Mensajes con el nombre del paciente y detalles de la cita",
          "Confirmación de asistencia desde el mensaje",
        ]}
        image="/desktop-config.png"
        imageAlt="Configuración de recordatorios en attempo"
        reverse={true}
        bg="bg-[#fafafa]"
      />

      {/* ── Portal pacientes ───────────────────────────────────────────── */}
      <FeatureBlock
        badge="Portal de pacientes"
        title="Tus pacientes gestionan sus propias citas"
        description="Cada paciente tiene acceso a su historial, puede reagendar o cancelar sin necesidad de llamarte. Menos interrupciones, más orden."
        bullets={[
          "Historial completo de citas pasadas y próximas",
          "Reagendamiento y cancelación con un clic",
          "Ficha básica con notas y documentos",
          "Acceso seguro sin crear cuenta",
        ]}
        image="/desktop-clientes.png"
        imageAlt="Portal de pacientes attempo"
        bg="bg-white"
      />

      {/* ── Cobro online ───────────────────────────────────────────────── */}
      <FeatureBlock
        id="cobros"
        badge="Cobro online"
        title="Cobra con Webpay sin salir de attempo"
        description="Integración nativa con Webpay de Transbank. Envía el link de pago por email y recibe el dinero directo en tu cuenta."
        bullets={[
          "Tarjetas de crédito y débito (Webpay / Transbank)",
          "Link de pago automático al confirmar la cita",
          "Estado de pago registrado en cada cita",
          "Compatible con cuotas sin interés",
        ]}
        image="/desktop-ventas.png"
        imageAlt="Módulo de cobro y ventas en attempo"
        reverse={true}
        bg="bg-[#fafafa]"
      />

      {/* ── Paquetes de sesiones ───────────────────────────────────────── */}
      <section id="paquetes" className="py-20 px-4 bg-[#6C5CE4]">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-semibold text-white/70 uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full mb-4"
            >
              Paquetes de sesiones
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Vende paquetes de sesiones con descuento
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 max-w-xl mx-auto leading-relaxed">
              Ofrece paquetes de 4, 8 o 12 sesiones a precio especial. Tus pacientes pagan por adelantado y tú garantizas la continuidad del tratamiento.
            </motion.p>
          </div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                titulo: "Para el profesional",
                puntos: [
                  "Crea paquetes con precio y número de sesiones",
                  "El paciente paga el paquete completo al inicio",
                  "attempo descuenta sesiones automáticamente",
                ],
              },
              {
                titulo: "Para el paciente",
                puntos: [
                  "Precio más conveniente por sesión",
                  "Agendamiento prioritario incluido",
                  "Historial de sesiones usadas y disponibles",
                ],
              },
              {
                titulo: "Para tu negocio",
                puntos: [
                  "Ingresos asegurados por adelantado",
                  "Mayor fidelización y retención",
                  "Control total del saldo de sesiones",
                ],
              },
            ].map((card) => (
              <motion.div
                key={card.titulo}
                variants={fadeUp}
                className="bg-white/15 border border-white/20 rounded-2xl p-6"
              >
                <h3 className="font-bold text-white mb-4">{card.titulo}</h3>
                <ul className="space-y-2.5">
                  {card.puntos.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/85 text-sm leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Boleta de honorarios ───────────────────────────────────────── */}
      <FeatureBlock
        id="boleta"
        badge="Boleta de honorarios"
        title="Emite boletas electrónicas desde attempo"
        description="Integración directa con el SII. Emite boletas de honorarios electrónicas al finalizar cada sesión, sin salir de la plataforma ni usar el portal del SII."
        bullets={[
          "Emisión con un clic al término de la sesión",
          "Sincronización automática con el SII",
          "Registro contable por mes y por paciente",
          "Descarga en PDF para enviar al paciente",
        ]}
        image="/desktop-config.png"
        imageAlt="Módulo de boleta de honorarios en attempo"
        bg="bg-white"
      />

      {/* ── Reportes ───────────────────────────────────────────────────── */}
      <FeatureBlock
        badge="Reportes y estadísticas"
        title="Entiende tu negocio de un vistazo"
        description="Visualiza tus ingresos, tasa de inasistencia, pacientes más frecuentes y el rendimiento de tu agenda. Todo en tiempo real."
        bullets={[
          "Ingresos del día, semana, mes y año",
          "Tasa de asistencia y análisis de cancelaciones",
          "Ranking de pacientes por frecuencia y monto",
          "Exportación en Excel o CSV",
        ]}
        image="/desktop-reportes.png"
        imageAlt="Reportes y estadísticas en attempo"
        reverse={true}
        bg="bg-[#fafafa]"
      />

      {/* ── Chatbot IA ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <div className="bg-gradient-to-br from-[#6C5CE4] to-[#5A4BD1] rounded-3xl p-8 lg:p-14 text-center">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full mb-6"
            >
              <SparklesIcon />
              Chatbot IA — Plan Clínica
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Un asistente que agenda por ti las 24 horas
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 max-w-xl mx-auto leading-relaxed mb-10">
              El chatbot de IA responde a tus pacientes, consulta disponibilidad y confirma citas automáticamente — incluso cuando estás atendiendo o durmiendo.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
              {[
                "Responde preguntas frecuentes en segundos",
                "Agenda citas según tu disponibilidad real",
                "Disponible por WhatsApp, Instagram y web",
                "Aprende de tus preferencias con el tiempo",
              ].map((b) => (
                <motion.div
                  key={b}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-white/15 border border-white/20 rounded-xl px-4 py-3"
                >
                  <svg className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 text-sm leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#fafafa] border-t border-gray-100">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Empieza gratis hoy
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 mb-8">
            12 días de prueba en cualquier plan. Sin tarjeta de crédito. Sin compromiso.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://app.attempo.cl/registro"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6C5CE4] text-white font-semibold rounded-xl hover:bg-[#5A4BD1] transition-colors duration-200 cursor-pointer text-base"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-colors duration-200 cursor-pointer text-base"
            >
              Ver planes y precios <ArrowRightIcon />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}
