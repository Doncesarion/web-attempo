"use client"

import { m, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function useCountUp(end: number, duration = 1500, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger || end === 0) return
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [trigger, end, duration])
  return count
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const match = value.match(/^([+]?)(\d+)(.*)$/)
  const prefix = match?.[1] ?? ""
  const num = parseInt(match?.[2] ?? "0")
  const suffix = match?.[3] ?? ""
  const count = useCountUp(num, 1500, isInView)
  return (
    <m.div ref={ref} variants={fadeUp}>
      <p className="text-4xl font-bold text-[#6C5CE4] mb-1">
        {num > 0 ? `${prefix}${count}${suffix}` : value}
      </p>
      <p className="text-sm text-gray-500">{label}</p>
    </m.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe] px-4">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(108,92,228,0.13) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
        }}
      />
      {/* Blobs — CSS only (compositable) */}
      <m.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.17, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#6C5CE4] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      <m.div
        animate={{ scale: [1, 0.88, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4F46E5] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-10 lg:py-20">
        {/* Left — CSS animations, visible immediately for LCP */}
        <div className="text-center lg:text-left">
          <div style={{ animation: "fade-in-up 0.6s ease both 0ms" }}>
            <span className="inline-flex items-center gap-2 bg-[#6C5CE4]/10 text-[#6C5CE4] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#6C5CE4] rounded-full animate-pulse" />
              Chatbot IA · WhatsApp · Instagram · Messenger
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            style={{ animation: "fade-in-up 0.6s ease both 100ms" }}
          >
            Tu agenda,{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #6C5CE4 0%, #8B7FF0 45%, #4F46E5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              todo a tu tiempo
            </span>
          </h1>

          <p
            className="text-xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0"
            style={{ animation: "fade-in-up 0.6s ease both 200ms" }}
          >
            La plataforma de agendamiento para profesionales de la salud y servicios en Chile. Recuerda, cobra y atiende sin esfuerzo.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            style={{ animation: "fade-in-up 0.6s ease both 300ms" }}
          >
            <a
              href="/precios"
              className="px-8 py-4 bg-[#6C5CE4] hover:bg-[#4F46E5] text-white font-semibold rounded-xl transition-all text-lg shadow-lg shadow-[#6C5CE4]/25 hover:shadow-[#6C5CE4]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Empieza gratis
            </a>
            <a
              href="https://app.attempo.cl"
              className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-all text-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Ver demo
            </a>
          </div>

          <div
            className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500"
            style={{ animation: "fade-in-up 0.6s ease both 400ms" }}
          >
            <span className="flex items-center gap-1.5">✅ Listo en 5 minutos</span>
            <span className="flex items-center gap-1.5">✅ Soporte en español</span>
            <span className="flex items-center gap-1.5">✅ Pago con Webpay</span>
          </div>
        </div>

        {/* Right — phone visible immediately (no opacity:0), only slides in */}
        <m.div
          initial={{ x: 40, y: 10 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#6C5CE4]/20 blur-3xl rounded-full scale-75 pointer-events-none" />
            <div className="relative w-[280px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/10">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />
              <div className="rounded-[2.4rem] overflow-hidden">
                <Image
                  src="/screenshot-agenda.jpeg"
                  alt="attempo agenda"
                  width={280}
                  height={560}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>
            <m.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-16 top-1/4 bg-white rounded-2xl shadow-lg p-3 hidden lg:flex items-center gap-3 w-44"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">📅</div>
              <div>
                <p className="text-xs font-semibold text-gray-800">Nueva cita</p>
                <p className="text-xs text-gray-500">Hoy 15:00</p>
              </div>
            </m.div>
            <m.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-12 bottom-1/4 bg-white rounded-2xl shadow-lg p-3 hidden lg:flex items-center gap-3 w-44"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-xl">✅</div>
              <div>
                <p className="text-xs font-semibold text-gray-800">Recordatorio enviado</p>
                <p className="text-xs text-gray-500">WhatsApp</p>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}

export function StatsSection() {
  const stats = [
    { value: "+11", label: "Especialidades" },
    { value: "3", label: "Canales de comunicación" },
    { value: "0%", label: "Comisión por cita" },
    { value: "5 min", label: "Para configurar" },
  ]

  return (
    <section className="py-16 px-4 bg-white border-y border-gray-100">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
      >
        {stats.map((s) => (
          <AnimatedStat key={s.label} value={s.value} label={s.label} />
        ))}
      </m.div>
    </section>
  )
}

export function FeaturesSection() {
  const features = [
    { icon: "📅", title: "Agenda inteligente", desc: "Vista semanal, diaria y en lista. Gestiona citas, bloqueos y disponibilidad en tiempo real." },
    { icon: "🔔", title: "Recordatorios automáticos", desc: "WhatsApp y email antes de cada cita. Reduce las inasistencias sin hacer nada." },
    { icon: "🤖", title: "Chatbot IA", desc: "Attia atiende y agenda por ti en WhatsApp, Instagram y Messenger las 24 horas." },
    { icon: "💰", title: "Control de ventas", desc: "Registra pagos, revisa ingresos por día y lleva el control de citas sin cobrar." },
    { icon: "👥", title: "Base de clientes", desc: "Ficha completa por paciente con historial, datos de contacto y citas anteriores." },
    { icon: "📊", title: "Reportes y métricas", desc: "Evolución de reservas, servicios más populares y rendimiento de tu negocio." },
    { icon: "📦", title: "Paquetes de sesiones", desc: "Vende sesiones en bloque y controla el avance de cada paquete por cliente." },
    { icon: "📄", title: "Boleta de honorarios", desc: "Genera boletas de honorarios directamente desde la plataforma. Integración SII." },
    { icon: "🌐", title: "Página de reservas online", desc: "Tu propio link de reservas personalizado para compartir con tus pacientes." },
  ]

  return (
    <section className="py-24 px-4 bg-gray-50">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto"
      >
        <m.div variants={fadeUp} className="text-center mb-16">
          <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">Funcionalidades</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Todo lo que necesitas en un solo lugar</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Sin apps extra, sin integraciones complicadas. attempo centraliza todo tu flujo de trabajo.</p>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <m.div
              key={f.title}
              variants={fadeUp}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#6C5CE4]/30 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#6C5CE4] transition-colors">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  )
}

export function ScreenshotsSection() {
  const [active, setActive] = useState(0)
  const tabs = [
    { label: "📅 Agenda",   mobile: "/screenshot-agenda.jpeg",   desktop: "/desktop-agenda.png",   desc: "Vista semanal y diaria de tus citas" },
    { label: "👥 Clientes", mobile: "/screenshot-clientes.jpeg", desktop: "/desktop-clientes.png", desc: "Ficha completa por cada paciente" },
    { label: "💰 Ventas",   mobile: "/screenshot-ventas.jpeg",   desktop: "/desktop-ventas.png",   desc: "Controla ingresos y cobros pendientes" },
    { label: "📊 Reportes", mobile: "/screenshot-reportes.jpeg", desktop: "/desktop-reportes.png", desc: "Métricas y evolución de tu negocio" },
    { label: "⚙️ Config",   mobile: "/screenshot-config.jpeg",   desktop: "/desktop-config.png",   desc: "Configura servicios, horarios y canales" },
  ]

  return (
    <section className="py-24 px-4 bg-gray-950 overflow-visible">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="max-w-7xl mx-auto"
      >
        <m.div variants={fadeUp} className="text-center mb-16">
          <span className="inline-block bg-[#6C5CE4]/20 text-[#8B7FF0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            La plataforma
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Diseñada para que<br />
            <span className="text-[#8B7FF0]">trabajes menos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Interfaz limpia, rápida y en español. Disponible en computador y celular.</p>
        </m.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <m.div variants={fadeUp} className="lg:col-span-2 flex flex-row overflow-x-auto gap-2 pb-2 lg:flex-col lg:overflow-visible lg:gap-0 lg:space-y-3 -mx-4 px-4 lg:mx-0 lg:px-0">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 lg:flex-shrink lg:w-full text-left px-4 py-3 lg:px-5 lg:py-4 rounded-2xl transition-all flex items-center gap-3 lg:gap-4 ${
                  active === i
                    ? "bg-[#6C5CE4] text-white shadow-lg shadow-[#6C5CE4]/30"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-2xl flex-shrink-0">{t.label.split(" ")[0]}</span>
                <div>
                  <p className="font-semibold text-sm">{t.label.split(" ").slice(1).join(" ")}</p>
                  <p className={`text-xs mt-0.5 ${active === i ? "text-purple-200" : "text-gray-500"}`}>{t.desc}</p>
                </div>
                {active === i && (
                  <m.div layoutId="active-indicator" className="ml-auto w-1.5 h-8 bg-white/40 rounded-full flex-shrink-0" />
                )}
              </button>
            ))}
          </m.div>

          <m.div variants={fadeUp} className="lg:col-span-3 relative pb-4 lg:pb-16">
            <div className="absolute inset-0 bg-[#6C5CE4]/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <div className="bg-gray-800 rounded-t-2xl p-3 ring-1 ring-white/10 shadow-2xl">
                <div className="flex items-center gap-1.5 mb-2.5 px-1">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="flex-1 mx-3 bg-gray-700 rounded-full h-5 flex items-center px-3">
                    <span className="text-gray-400 text-[11px]">app.attempo.cl</span>
                  </div>
                </div>
                <m.div
                  key={`desktop-${active}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-lg overflow-hidden"
                >
                  <Image src={tabs[active].desktop} alt={`${tabs[active].label} desktop`} width={1200} height={750} className="w-full object-cover object-top" />
                </m.div>
              </div>
              <div className="bg-gray-700 h-4 rounded-b-xl mx-6 shadow-lg" />
              <div className="bg-gray-600 h-2 rounded-b-2xl mx-12" />
            </div>

            <div className="absolute -bottom-2 -right-4 w-[160px] hidden lg:block">
              <div className="bg-gray-800 rounded-[2.5rem] p-2.5 shadow-2xl ring-1 ring-white/20">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-gray-800 rounded-full z-10" />
                <m.div
                  key={`mobile-${active}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-[2rem] overflow-hidden"
                >
                  <Image src={tabs[active].mobile} alt={`${tabs[active].label} mobile`} width={160} height={320} className="w-full object-cover" />
                </m.div>
              </div>
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  )
}

export function WebpaySection() {
  const beneficios = [
    { icon: "🔒", title: "Pago 100% seguro", desc: "Tecnología SSL y estándares de seguridad bancaria de Transbank." },
    { icon: "💳", title: "Débito y crédito", desc: "Acepta todas las tarjetas: Visa, Mastercard, American Express y más." },
    { icon: "⚡", title: "Cobro inmediato", desc: "El pago se acredita directamente en tu cuenta. Sin intermediarios." },
    { icon: "📲", title: "Link de pago", desc: "Envía el link de cobro por WhatsApp o email al confirmar la cita." },
  ]

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <m.div variants={fadeUp}>
            <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">Pagos en línea</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Cobra con Webpay,<br />el estándar de Chile
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Integra el método de pago más utilizado en Chile directamente en tu flujo de agendamiento. Tus clientes pagan al reservar y tú cobras sin perseguir a nadie.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {beneficios.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{b.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/precios" className="inline-flex items-center gap-2 px-6 py-3 bg-[#6C5CE4] text-white font-semibold rounded-xl hover:bg-[#4F46E5] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#6C5CE4]/25">
              Activar Webpay en mi cuenta →
            </a>
          </m.div>

          <m.div variants={fadeUp} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative bg-white rounded-3xl p-8 w-80 shadow-2xl border border-gray-100">
                <div className="mb-6">
                  <Image src="/webpay-logo.png" alt="Webpay Transbank" width={180} height={60} className="object-contain" />
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
                  <p className="text-gray-400 text-xs mb-1">Monto a cobrar</p>
                  <p className="text-gray-900 text-3xl font-bold">$45.000</p>
                  <p className="text-gray-400 text-xs mt-1">Consulta psicológica · 60 min</p>
                </div>
                <div className="flex gap-2 mb-6">
                  {["Visa", "Mastercard", "Débito"].map((card) => (
                    <span key={card} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1.5 rounded-lg font-medium">{card}</span>
                  ))}
                </div>
                <div className="bg-[#6C5CE4] rounded-2xl p-3.5 flex items-center justify-between">
                  <span className="text-white font-bold text-sm">Pagar ahora</span>
                  <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
              <m.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
              >
                ✓ Pago confirmado
              </m.div>
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  )
}

export function TestimonialsSection() {
  const testimonials = [
    { name: "Valentina Mora", role: "Psicóloga clínica", avatar: "VM", text: "Antes llevaba todo en papel y me perdía citas. Con attempo organicé mi agenda en una tarde. Mis pacientes reciben el recordatorio por WhatsApp y ya casi no tengo inasistencias." },
    { name: "Diego Fuentes", role: "Barbería The Cut", avatar: "DF", text: "Empecé a usar attempo cuando abrí mi barbería. Me ahorró contratar a alguien solo para tomar reservas. El chatbot responde solito por Instagram." },
    { name: "Camila Reyes", role: "Nutricionista", avatar: "CR", text: "Lo que más me gusta es ver el historial de mis pacientes y los paquetes de sesiones. Todo en un solo lugar, sin andar con mil archivos de Excel." },
  ]

  return (
    <section className="py-24 px-4 bg-gray-50">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto"
      >
        <m.div variants={fadeUp} className="text-center mb-16">
          <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">Testimonios</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Lo que dicen quienes ya usan attempo</h2>
        </m.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <m.div key={t.name} variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-lg">★</span>)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6C5CE4] rounded-full flex items-center justify-center text-white text-sm font-bold">{t.avatar}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  )
}

export function EspecialidadesSection() {
  const items = [
    { slug: "psicologos", nombre: "Psicólogos", emoji: "🧠" },
    { slug: "psiquiatras", nombre: "Psiquiatras", emoji: "🩺" },
    { slug: "medicos-generales", nombre: "Médicos", emoji: "👨‍⚕️" },
    { slug: "centros-clinicos", nombre: "Centros Clínicos", emoji: "🏥" },
    { slug: "barberias", nombre: "Barberías", emoji: "✂️" },
    { slug: "nutricion", nombre: "Nutricionistas", emoji: "🥗" },
    { slug: "matronas", nombre: "Matronas", emoji: "🤱" },
    { slug: "esteticas", nombre: "Estéticas", emoji: "💆" },
    { slug: "fisioterapeutas", nombre: "Fisioterapeutas", emoji: "🦴" },
    { slug: "yoga", nombre: "Yoga", emoji: "🧘" },
    { slug: "derecho", nombre: "Abogados", emoji: "⚖️" },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto"
      >
        <m.div variants={fadeUp} className="text-center mb-12">
          <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">Soluciones</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Diseñado para tu especialidad</h2>
          <p className="text-gray-500 max-w-xl mx-auto">attempo se adapta a cualquier profesional o negocio de servicios en Chile.</p>
        </m.div>
        <m.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
          {items.map((e) => (
            <a key={e.slug} href={`/soluciones/${e.slug}`} className="flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#6C5CE4] hover:text-[#6C5CE4] hover:bg-purple-50 transition-all">
              <span>{e.emoji}</span>
              {e.nombre}
            </a>
          ))}
          <a href="/soluciones" className="flex items-center gap-2 px-5 py-3 bg-[#6C5CE4]/10 border border-[#6C5CE4]/20 rounded-full text-sm font-medium text-[#6C5CE4] hover:bg-[#6C5CE4] hover:text-white transition-all">
            Ver todas →
          </a>
        </m.div>
      </m.div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-[#6C5CE4] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative"
      >
        <m.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Empieza hoy, gratis
        </m.h2>
        <m.p variants={fadeUp} className="text-purple-200 mb-10 text-xl">
          Sin tarjeta de crédito. Sin complicaciones. Listo en 5 minutos.
        </m.p>
        <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/precios" className="px-8 py-4 bg-white text-[#6C5CE4] font-bold rounded-xl hover:bg-purple-50 transition-all text-lg shadow-lg hover:-translate-y-0.5">
            Crear cuenta gratis
          </a>
          <a href="/contacto" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-lg border border-white/20">
            Hablar con nosotros
          </a>
        </m.div>
      </m.div>
    </section>
  )
}
