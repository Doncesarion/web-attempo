"use client"

import { m, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ShieldCheck, CreditCard, Zap, Smartphone, CalendarDays, CheckCircle2, Check, Users, BarChart2, Settings, Banknote, type LucideIcon } from "lucide-react"

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
              Agenda online · Cobro con Webpay · Recordatorios automáticos
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
            Una inasistencia sin aviso es dinero que no vuelve. attempo cobra antes de confirmar la hora, recuerda automáticamente a tus clientes y, cuando no estás, agenda por ti las 24 horas.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            style={{ animation: "fade-in-up 0.6s ease both 300ms" }}
          >
            <a
              href="https://app.attempo.cl/registro"
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
          <p
            className="text-sm text-gray-400 mt-2 text-center lg:text-left"
            style={{ animation: "fade-in-up 0.6s ease both 400ms" }}
          >
            12 días gratis · desde $24.990/mes · sin tarjeta
          </p>

          <div
            className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500"
            style={{ animation: "fade-in-up 0.6s ease both 400ms" }}
          >
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Listo en 5 minutos</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Soporte en español</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Pago con Webpay</span>
          </div>
        </div>

        {/* Right — coded phone mockup, visible immediately */}
        <m.div
          initial={{ x: 40, y: 10 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#6C5CE4]/20 blur-3xl rounded-full scale-75 pointer-events-none" />
            {/* Phone frame */}
            <div className="relative w-[270px] bg-gray-900 rounded-[3rem] p-[10px] shadow-2xl ring-1 ring-white/10">
              {/* Camera notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-[18px] bg-gray-900 rounded-full z-10" />
              {/* Screen */}
              <div className="rounded-[2.4rem] overflow-hidden bg-[#f8f7ff] flex flex-col" style={{ height: 540 }}>
                {/* App header */}
                <div className="bg-[#6C5CE4] px-4 pt-9 pb-4 flex-shrink-0">
                  <p className="text-white/60 text-[9px] uppercase tracking-widest mb-0.5">attempo</p>
                  <p className="text-white font-bold text-sm leading-tight">Dra. Valentina Mora</p>
                  <p className="text-white/60 text-[10px] mt-0.5">Psicóloga clínica · Consulta online</p>
                </div>
                {/* Day selector */}
                <div className="px-3 pt-3 pb-2 bg-white border-b border-gray-100 flex-shrink-0">
                  <p className="text-[8px] text-gray-400 uppercase tracking-wider mb-2">Julio 2025</p>
                  <div className="flex gap-1 justify-between">
                    {[
                      { d: "L", n: "28" },
                      { d: "M", n: "29" },
                      { d: "X", n: "30", active: true },
                      { d: "J", n: "31" },
                      { d: "V", n: "1" },
                    ].map(({ d, n, active }) => (
                      <div key={d} className={`flex-1 flex flex-col items-center gap-0.5 rounded-xl py-1.5 ${active ? "bg-[#6C5CE4]" : "bg-gray-50"}`}>
                        <span className={`text-[8px] font-medium ${active ? "text-white/70" : "text-gray-400"}`}>{d}</span>
                        <span className={`text-xs font-bold ${active ? "text-white" : "text-gray-700"}`}>{n}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Time slots */}
                <div className="flex-1 px-3 py-3 overflow-hidden">
                  <p className="text-[8px] text-gray-400 uppercase tracking-wider mb-2">Horarios disponibles</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { hora: "09:00", libre: false },
                      { hora: "10:30", libre: false },
                      { hora: "11:00", libre: true },
                      { hora: "12:30", libre: true },
                      { hora: "14:00", libre: true },
                    ].map(({ hora, libre }) => (
                      <div
                        key={hora}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl border transition-all ${
                          libre
                            ? "border-[#6C5CE4]/25 bg-white shadow-sm"
                            : "border-gray-100 bg-gray-50 opacity-40"
                        }`}
                      >
                        <span className={`text-sm font-bold ${libre ? "text-gray-900" : "text-gray-300"}`}>{hora}</span>
                        {libre ? (
                          <span className="text-[9px] font-semibold text-[#6C5CE4] bg-[#6C5CE4]/10 px-2 py-0.5 rounded-full">Disponible</span>
                        ) : (
                          <span className="text-[9px] text-gray-300 bg-gray-100 px-2 py-0.5 rounded-full">Ocupado</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* CTA button */}
                <div className="px-3 pb-6 pt-1 flex-shrink-0">
                  <div className="bg-[#6C5CE4] rounded-2xl py-3 text-center shadow-lg shadow-[#6C5CE4]/30">
                    <p className="text-white text-sm font-bold">Reservar 11:00 →</p>
                  </div>
                  <p className="text-[9px] text-gray-400 text-center mt-1.5 flex items-center justify-center gap-1">
                    <span>🔒</span> Pago seguro con Webpay
                  </p>
                </div>
              </div>
            </div>
            {/* Floating cards — desktop only */}
            <m.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-16 top-1/4 bg-white rounded-2xl shadow-lg p-3 hidden lg:flex items-center gap-3 w-44"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0"><CalendarDays className="w-5 h-5 text-green-600" /></div>
              <div>
                <p className="text-xs font-semibold text-gray-800">Nueva reserva</p>
                <p className="text-xs text-gray-500">Hoy 11:00</p>
              </div>
            </m.div>
            <m.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-12 bottom-1/4 bg-white rounded-2xl shadow-lg p-3 hidden lg:flex items-center gap-3 w-44"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-5 h-5 text-[#6C5CE4]" /></div>
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
    { n: "01", title: "Agenda inteligente", desc: "Vista semanal, diaria y en lista. Gestiona citas, bloqueos y disponibilidad en tiempo real." },
    { n: "02", title: "Recordatorios automáticos", desc: "WhatsApp y email antes de cada cita. Reduce las inasistencias sin hacer nada." },
    { n: "03", title: "Chatbot IA", desc: "Attia atiende y agenda por ti en WhatsApp, Instagram y Messenger las 24 horas." },
    { n: "04", title: "Control de ventas", desc: "Registra pagos, revisa ingresos por día y lleva el control de citas sin cobrar." },
    { n: "05", title: "Base de clientes", desc: "Ficha completa por paciente con historial, datos de contacto y citas anteriores." },
    { n: "06", title: "Reportes y métricas", desc: "Evolución de reservas, servicios más populares y rendimiento de tu negocio." },
    { n: "07", title: "Paquetes de sesiones", desc: "Vende sesiones en bloque y controla el avance de cada paquete por cliente." },
    { n: "08", title: "Boleta de honorarios", desc: "Genera boletas de honorarios directamente desde la plataforma. Integración SII." },
    { n: "09", title: "Página de reservas online", desc: "Tu propio link de reservas personalizado para compartir con tus pacientes." },
    { n: "10", title: "Sincronización Google Calendar", desc: "Vincula tu cuenta y cada cita aparece en tu Google Calendar al instante. Al cancelar, desaparece automáticamente." },
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
        <m.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-100">
          <div>
            <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">Funcionalidades</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Todo lo que necesitas<br className="hidden sm:block" /> en un solo lugar</h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs lg:text-right">
            Sin apps extra, sin integraciones complicadas. attempo centraliza todo tu flujo de trabajo.
          </p>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((f) => (
            <m.div key={f.title} variants={fadeUp} className="group">
              <span className="block text-6xl font-bold text-gray-300 group-hover:text-[#6C5CE4]/30 transition-colors leading-none mb-4 tabular-nums">
                {f.n}
              </span>
              <h3 className="font-semibold text-gray-900 text-base mb-2 group-hover:text-[#6C5CE4] transition-colors">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </m.div>
          ))}
        </div>
        <m.div variants={fadeUp} className="mt-14 text-center">
          <a href="/plataforma" className="inline-flex items-center gap-2 text-[#6C5CE4] font-medium hover:underline text-sm">
            Ver la plataforma completa →
          </a>
        </m.div>
      </m.div>
    </section>
  )
}

export function ScreenshotsSection() {
  const [active, setActive] = useState(0)

  const tabs: { Icon: LucideIcon; label: string; desc: string }[] = [
    { Icon: CalendarDays, label: "Agenda",   desc: "Vista semanal y diaria de tus citas" },
    { Icon: Users,        label: "Clientes", desc: "Ficha completa por cada paciente" },
    { Icon: Banknote,     label: "Ventas",   desc: "Controla ingresos y cobros pendientes" },
    { Icon: BarChart2,    label: "Reportes", desc: "Métricas y evolución de tu negocio" },
    { Icon: Settings,     label: "Config",   desc: "Configura servicios, horarios y canales" },
  ]

  function AgendaUI() {
    const slots = [
      { hora: "09:00", paciente: null },
      { hora: "10:00", paciente: "Valentina M.", servicio: "Consulta", cls: "bg-purple-50 border-purple-200 text-purple-800" },
      { hora: "11:00", paciente: "Carlos Bravo", servicio: "Control",  cls: "bg-blue-50 border-blue-200 text-blue-800" },
      { hora: "12:00", paciente: null },
      { hora: "14:00", paciente: "María G.",     servicio: "Evaluación", cls: "bg-green-50 border-green-200 text-green-800" },
      { hora: "15:00", paciente: "Roberto F.",   servicio: "Consulta",   cls: "bg-purple-50 border-purple-200 text-purple-800" },
    ]
    return (
      <div className="flex flex-col h-full gap-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-800">Semana del 28 jul</p>
          <div className="flex gap-1">
            <div className="w-6 h-6 rounded-lg bg-gray-100 text-gray-400 text-xs flex items-center justify-center">‹</div>
            <div className="w-6 h-6 rounded-lg bg-gray-100 text-gray-400 text-xs flex items-center justify-center">›</div>
          </div>
        </div>
        <div className="flex gap-1.5">
          {[{d:"L",n:"28"},{d:"M",n:"29"},{d:"X",n:"30",a:true},{d:"J",n:"31"},{d:"V",n:"1"}].map(({d,n,a}) => (
            <div key={d} className={`flex-1 flex flex-col items-center py-1.5 rounded-xl ${a ? "bg-[#6C5CE4]" : "bg-gray-50"}`}>
              <span className={`text-[9px] font-medium ${a ? "text-white/70" : "text-gray-400"}`}>{d}</span>
              <span className={`text-xs font-bold ${a ? "text-white" : "text-gray-700"}`}>{n}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {slots.map(({ hora, paciente, servicio, cls }) => (
            <div key={hora} className="flex gap-2 items-center">
              <span className="text-[10px] text-gray-400 w-9 flex-shrink-0 font-mono">{hora}</span>
              {paciente ? (
                <div className={`flex-1 rounded-lg border px-2.5 py-1.5 flex items-center justify-between ${cls}`}>
                  <span className="text-[11px] font-semibold">{paciente}</span>
                  <span className="text-[9px] opacity-60">{servicio}</span>
                </div>
              ) : (
                <div className="flex-1 border-b border-gray-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  function ClientesUI() {
    const pacientes = [
      { ini: "VM", nombre: "Valentina Mora",   det: "Psicología · 12 citas", ult: "Hoy"   },
      { ini: "CB", nombre: "Carlos Bravo",     det: "Control · 3 citas",     ult: "Ayer"  },
      { ini: "MG", nombre: "María González",   det: "Evaluación · 8 citas",  ult: "20 jul"},
      { ini: "RF", nombre: "Roberto Fuentes",  det: "Consulta · 5 citas",    ult: "15 jul"},
    ]
    return (
      <div className="flex flex-col h-full gap-3">
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
          <span className="text-gray-400 text-xs">🔍</span>
          <span className="text-xs text-gray-400">Buscar paciente...</span>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {pacientes.map(({ ini, nombre, det, ult }) => (
            <div key={nombre} className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-[#6C5CE4]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold text-[#6C5CE4]">{ini}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-gray-800 truncate">{nombre}</p>
                <p className="text-[9px] text-gray-500">{det}</p>
              </div>
              <span className="text-[9px] text-gray-400 flex-shrink-0">{ult}</span>
              <span className="text-gray-300 text-xs">›</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex-1 text-[10px] text-[#6C5CE4] bg-[#6C5CE4]/8 rounded-lg py-2 font-medium text-center">Exportar CSV</div>
          <div className="flex-1 text-[10px] text-gray-600 bg-gray-100 rounded-lg py-2 font-medium text-center">Recordatorio</div>
        </div>
      </div>
    )
  }

  function VentasUI() {
    const pagos = [
      { nombre: "Valentina M.",   monto: "$45.000", metodo: "Flow",   ok: true },
      { nombre: "Carlos Bravo",   monto: "$35.000", metodo: "Webpay", ok: true },
      { nombre: "Roberto F.",     monto: "$45.000", metodo: "—",      ok: false },
      { nombre: "María González", monto: "$25.000", metodo: "Flow",   ok: true },
    ]
    const bars = [35, 60, 45, 80, 65, 40, 90]
    return (
      <div className="flex flex-col h-full gap-3">
        <div>
          <p className="text-[9px] text-gray-500 uppercase tracking-wider">Ingresos julio 2025</p>
          <div className="flex items-end gap-2 mt-0.5">
            <p className="text-2xl font-bold text-gray-900">$482.000</p>
            <span className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-semibold mb-1">↑ 18%</span>
          </div>
        </div>
        <div className="flex items-end gap-1 h-14">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div className={`w-full rounded-sm ${i === 6 ? "bg-[#6C5CE4]" : "bg-[#6C5CE4]/20"}`} style={{ height: `${h}%` }} />
              <span className="text-[8px] text-gray-400">{["L","M","X","J","V","S","D"][i]}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider">Últimos pagos</p>
          {pagos.map(({ nombre, monto, metodo, ok }) => (
            <div key={nombre} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white border border-gray-50">
              <span className={`text-[11px] flex-shrink-0 ${ok ? "text-green-500" : "text-amber-400"}`}>{ok ? "✓" : "⏳"}</span>
              <span className="flex-1 text-[10px] text-gray-700 truncate">{nombre}</span>
              <span className="text-[9px] text-gray-400 flex-shrink-0">{metodo}</span>
              <span className={`text-[10px] font-semibold flex-shrink-0 ${ok ? "text-gray-800" : "text-amber-600"}`}>{monto}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  function ReportesUI() {
    const metricas = [
      { label: "Reservas", valor: "24",    delta: "↑ 12%", verde: true },
      { label: "Ingresos", valor: "$482k", delta: "↑ 18%", verde: true },
      { label: "No-shows", valor: "2",     delta: "↓ 60%", verde: false },
    ]
    const servicios = [
      { nombre: "Consulta inicial", pct: 48, color: "bg-[#6C5CE4]" },
      { nombre: "Control",          pct: 31, color: "bg-[#8B7FF0]" },
      { nombre: "Evaluación",       pct: 21, color: "bg-[#C4B5FD]" },
    ]
    return (
      <div className="flex flex-col h-full gap-3">
        <div className="grid grid-cols-3 gap-2">
          {metricas.map(({ label, valor, delta, verde }) => (
            <div key={label} className="bg-white border border-gray-100 rounded-xl p-2 text-center">
              <p className="text-[8px] text-gray-500 uppercase tracking-wider">{label}</p>
              <p className="text-sm font-bold text-gray-900">{valor}</p>
              <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${verde ? "text-green-600 bg-green-50" : "text-red-500 bg-red-50"}`}>{delta}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-2">Servicios más solicitados</p>
          <div className="flex flex-col gap-2">
            {servicios.map(({ nombre, pct, color }) => (
              <div key={nombre}>
                <div className="flex justify-between mb-0.5">
                  <span className="text-[10px] text-gray-600">{nombre}</span>
                  <span className="text-[10px] font-semibold text-gray-800">{pct}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-1.5">Reservas últimos 7 días</p>
          <div className="flex items-end gap-1 h-14">
            {[4,7,3,6,8,2,5].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div className="w-full bg-[#6C5CE4]/25 rounded-sm" style={{ height: `${(h/8)*100}%` }} />
                <span className="text-[8px] text-gray-400">{["L","M","X","J","V","S","D"][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  function ConfigUI() {
    const servicios = [
      { nombre: "Consulta inicial", dur: "45 min", precio: "$35.000", on: true  },
      { nombre: "Control",          dur: "30 min", precio: "$25.000", on: true  },
      { nombre: "Evaluación",       dur: "60 min", precio: "$45.000", on: false },
    ]
    const horario = [
      { dia: "Lun – Vie", horas: "09:00 – 18:00", on: true  },
      { dia: "Sábado",    horas: "09:00 – 13:00", on: true  },
      { dia: "Domingo",   horas: "—",              on: false },
    ]
    return (
      <div className="flex flex-col h-full gap-3">
        <div>
          <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-2">Servicios</p>
          <div className="flex flex-col gap-1.5">
            {servicios.map(({ nombre, dur, precio, on }) => (
              <div key={nombre} className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-gray-800 truncate">{nombre}</p>
                  <p className="text-[9px] text-gray-400">{dur} · {precio}</p>
                </div>
                <div className={`w-8 h-4 rounded-full flex-shrink-0 relative ${on ? "bg-[#6C5CE4]" : "bg-gray-200"}`}>
                  <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${on ? "left-[18px]" : "left-0.5"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-2">Horario de atención</p>
          <div className="flex flex-col gap-1.5">
            {horario.map(({ dia, horas, on }) => (
              <div key={dia} className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2">
                <div className="flex-1">
                  <p className="text-[10px] font-semibold text-gray-700">{dia}</p>
                  <p className="text-[9px] text-gray-400">{horas}</p>
                </div>
                <div className={`w-8 h-4 rounded-full flex-shrink-0 relative ${on ? "bg-[#6C5CE4]" : "bg-gray-200"}`}>
                  <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${on ? "left-[18px]" : "left-0.5"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#6C5CE4]/8 rounded-xl p-3 flex items-center gap-2 mt-auto">
          <span className="text-base">🔗</span>
          <div>
            <p className="text-[10px] font-semibold text-[#6C5CE4]">Tu link de reservas</p>
            <p className="text-[9px] text-gray-500">app.attempo.cl/tu-negocio</p>
          </div>
        </div>
      </div>
    )
  }

  const previews = [AgendaUI, ClientesUI, VentasUI, ReportesUI, ConfigUI]
  const Preview = previews[active]

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

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Tabs */}
          <m.div variants={fadeUp} className="lg:col-span-2 flex flex-row overflow-x-auto gap-2 pb-2 lg:flex-col lg:overflow-visible lg:gap-0 lg:space-y-2 -mx-4 px-4 lg:mx-0 lg:px-0">
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
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${active === i ? "bg-white/20" : "bg-white/10"}`}>
                  <t.Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.label}</p>
                  <p className={`text-xs mt-0.5 ${active === i ? "text-purple-200" : "text-gray-500"}`}>{t.desc}</p>
                </div>
                {active === i && (
                  <m.div layoutId="active-indicator" className="ml-auto w-1.5 h-8 bg-white/40 rounded-full flex-shrink-0" />
                )}
              </button>
            ))}
          </m.div>

          {/* Coded UI preview */}
          <m.div variants={fadeUp} className="lg:col-span-3">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#6C5CE4]/20 blur-3xl rounded-full pointer-events-none" />
              <div className="relative bg-[#12102a] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-3 bg-white/5 rounded-full h-5 flex items-center px-3">
                    <span className="text-gray-500 text-[10px]">app.attempo.cl</span>
                  </div>
                </div>
                {/* UI content */}
                <div className="bg-[#f8f7ff] p-5" style={{ minHeight: 320 }}>
                  <m.div
                    key={active}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Preview />
                  </m.div>
                </div>
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
    { Icon: ShieldCheck, title: "Pago 100% seguro", desc: "Tecnología SSL y estándares de seguridad bancaria de Transbank." },
    { Icon: CreditCard, title: "Débito y crédito", desc: "Acepta todas las tarjetas: Visa, Mastercard, American Express y más." },
    { Icon: Zap, title: "Cobro inmediato", desc: "El pago se acredita directamente en tu cuenta. Sin intermediarios." },
    { Icon: Smartphone, title: "Link de pago", desc: "Envía el link de cobro por WhatsApp o email al confirmar la cita." },
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
                  <div className="w-9 h-9 rounded-xl bg-[#6C5CE4]/10 flex items-center justify-center flex-shrink-0">
                    <b.Icon className="w-5 h-5 text-[#6C5CE4]" />
                  </div>
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
  const featured = {
    name: "Valentina Mora",
    role: "Psicóloga clínica",
    initials: "VM",
    text: "Antes llevaba todo en papel y me perdía citas. Con attempo organicé mi agenda en una tarde. Mis pacientes reciben el recordatorio por WhatsApp y ya casi no tengo inasistencias.",
  }
  const others = [
    { name: "Diego Fuentes", role: "Barbería The Cut", initials: "DF", text: "El chatbot responde solito por Instagram. Me ahorró contratar a alguien solo para tomar reservas." },
    { name: "Camila Reyes", role: "Nutricionista", initials: "CR", text: "El historial de pacientes y los paquetes de sesiones, todo en un solo lugar. Sin mil archivos de Excel." },
    { name: "Sofía Castillo", role: "Peluquería Studio Sofía", initials: "SC", text: "Antes perdía turnos de uñas y pestañas porque la gente no confirmaba. Con attempo pagan la seña al reservar y casi no tengo ausencias." },
  ]

  return (
    <section className="py-24 px-4 bg-gray-950">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto"
      >
        <m.div variants={fadeUp} className="mb-16">
          <span className="text-[#8B7FF0] text-sm font-medium uppercase tracking-wider">Testimonios</span>
          <h2 className="text-4xl font-bold text-white mt-2">Lo que dicen quienes ya usan attempo</h2>
        </m.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <m.div variants={fadeUp} className="lg:col-span-2 border border-white/10 rounded-3xl p-10 flex flex-col">
            <span className="text-[#6C5CE4] text-8xl font-serif leading-none select-none -mt-4 mb-2">"</span>
            <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed flex-1">
              {featured.text}
            </p>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#6C5CE4] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {featured.initials}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{featured.name}</p>
                <p className="text-gray-500 text-xs">{featured.role}</p>
              </div>
            </div>
          </m.div>

          <div className="flex flex-col gap-4">
            {others.map((t) => (
              <m.div key={t.name} variants={fadeUp} className="border border-white/10 rounded-2xl p-6 flex flex-col flex-1">
                <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </m.div>
    </section>
  )
}

export function EspecialidadesSection() {
  const clusters = [
    {
      nombre: "Salud",
      numero: "01",
      items: [
        { slug: "psicologos",      nombre: "Psicólogos" },
        { slug: "psiquiatras",     nombre: "Psiquiatras" },
        { slug: "medicos",         nombre: "Médicos" },
        { slug: "matronas",        nombre: "Matronas" },
        { slug: "fisioterapeutas", nombre: "Kinesiólogos" },
        { slug: "dentistas",       nombre: "Dentistas" },
      ],
    },
    {
      nombre: "Bienestar y Estética",
      numero: "02",
      items: [
        { slug: "nutricionistas",  nombre: "Nutricionistas" },
        { slug: "yoga",            nombre: "Yoga y Pilates" },
        { slug: "esteticas",       nombre: "Estéticas" },
        { slug: "belleza",         nombre: "Peluquerías" },
        { slug: "barberias",       nombre: "Barberías" },
      ],
    },
    {
      nombre: "Fitness y Deporte",
      numero: "03",
      items: [
        { slug: "personal-trainer", nombre: "Entrenador personal" },
        { slug: "yoga",             nombre: "Clases grupales" },
      ],
    },
    {
      nombre: "Consultoría y Legal",
      numero: "04",
      items: [
        { slug: "derecho",   nombre: "Abogados" },
        { slug: "coach",     nombre: "Coach" },
        { slug: "consultor", nombre: "Consultores" },
      ],
    },
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
        <m.div variants={fadeUp} className="text-center mb-14">
          <span className="text-[#6C5CE4] text-sm font-medium tracking-wider">Para quién</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Si cobras por tu tiempo,<br className="hidden sm:block" /> attempo es para ti</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Cualquier profesional o negocio que trabaje con citas, horas o reservas puede digitalizarse con attempo en menos de 5 minutos.</p>
        </m.div>

        <m.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {clusters.map((cluster) => (
            <div key={cluster.nombre} className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#6C5CE4]/30 transition-all group">
              <div className="h-1 w-full bg-[#6C5CE4]" />
              <div className="px-6 pt-5 pb-4">
                <span className="text-5xl font-black text-gray-300 leading-none block mb-1 group-hover:text-[#6C5CE4]/30 transition-colors">
                  {cluster.numero}
                </span>
                <h3 className="font-bold text-gray-900 text-base leading-snug">{cluster.nombre}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{cluster.items.length} especialidades</p>
              </div>
              <div className="px-6 pb-6 flex flex-col gap-2.5">
                {cluster.items.map((item) => (
                  <a
                    key={item.slug}
                    href={`/soluciones/${item.slug}`}
                    className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#6C5CE4] transition-colors group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-[#6C5CE4] transition-colors flex-shrink-0" />
                    {item.nombre}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </m.div>

        <m.div variants={fadeUp} className="text-center">
          <p className="text-sm text-gray-400 mb-4">¿No ves tu rubro? Igual puedes empezar.</p>
          <a
            href="https://app.attempo.cl/registro"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#6C5CE4] text-white font-semibold rounded-xl hover:bg-[#5A4BD1] transition-colors text-sm shadow-lg shadow-[#6C5CE4]/20"
          >
            Probar gratis 12 días →
          </a>
          <p className="text-xs text-gray-400 mt-3">Sin tarjeta · Listo en 5 minutos</p>
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
          Es hora de estar a tiempo
        </m.h2>
        <m.p variants={fadeUp} className="text-purple-200 mb-10 text-xl">
          12 días gratis. Sin compromiso. Listo en 5 minutos.
        </m.p>
        <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.attempo.cl/registro" className="px-8 py-4 bg-white text-[#6C5CE4] font-bold rounded-xl hover:bg-purple-50 transition-all text-lg shadow-lg hover:-translate-y-0.5">
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

export function SeguridadSection() {
  const puntos = [
    {
      titulo: "Datos cifrados en tránsito y en reposo",
      desc: "Toda la información se transmite con TLS 1.3 y se almacena cifrada. Nadie sin autorización accede a los datos de tus pacientes.",
    },
    {
      titulo: "Cumplimiento Ley 19.628",
      desc: "attempo cumple con la Ley de Protección de Datos Personales de Chile. Tus pacientes saben cómo se usan sus datos y pueden solicitar su eliminación.",
    },
    {
      titulo: "Acceso controlado por cuenta",
      desc: "Solo tú y las personas que autoricen acceden a tu agenda y fichas de pacientes. Sin acceso cruzado entre negocios.",
    },
    {
      titulo: "Backups automáticos diarios",
      desc: "Tu información se respalda automáticamente cada 24 horas. Sin riesgo de pérdida de datos.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto"
      >
        <m.div variants={fadeUp} className="text-center mb-12">
          <span className="text-[#6C5CE4] text-sm font-medium tracking-wider block mb-3">Seguridad y privacidad</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Los datos de tus pacientes<br className="hidden sm:block" /> están seguros con nosotros</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Construido desde el primer día con estándares de seguridad para el manejo de datos sensibles de salud.</p>
        </m.div>
        <m.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {puntos.map((p) => (
            <div key={p.titulo} className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="w-8 h-8 rounded-xl bg-[#6C5CE4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#6C5CE4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{p.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </m.div>
      </m.div>
    </section>
  )
}

export function AttiaSection() {
  return (
    <section className="py-20 px-4 bg-[#f5f3ff]">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto"
      >
        <m.div variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#6C5CE4] text-sm font-medium tracking-wider block mb-3">Para negocios sin agenda</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
              ¿Vendes por Instagram<br className="hidden sm:block" /> pero no necesitas agenda?
            </h2>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
              attia responde automáticamente en WhatsApp, Instagram y Messenger las 24 horas. Ideal para pastelerías, tiendas online, emprendimientos y cualquier negocio que reciba consultas pero no gestione citas.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Responde preguntas de producto, precios y disponibilidad",
                "Atiende mientras duermes o produces",
                "Sin agenda · Solo chatbot IA",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#6C5CE4]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#6C5CE4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/precios#attia"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#6C5CE4] text-white font-semibold rounded-xl hover:bg-[#5A4BD1] transition-colors text-sm"
            >
              Ver planes Attia →
            </a>
          </div>
          <div className="bg-white rounded-3xl border border-[#6C5CE4]/10 shadow-xl p-8">
            <p className="text-xs font-semibold text-gray-400 tracking-wider mb-6">Attia responde por ti</p>
            <div className="flex flex-col gap-4">
              {[
                { quien: "Cliente", texto: "Tienen disponible el servicio el sábado a las 10:00?", lado: "izq" },
                { quien: "Attia", texto: "Hola! Sí, tenemos disponibilidad el sábado a las 10:00. ¿Deseas agendar?", lado: "der" },
                { quien: "Cliente", texto: "Sí, por favor.", lado: "izq" },
                { quien: "Attia", texto: "Perfecto, te reservé la hora. En un momento recibirás la confirmación con los detalles.", lado: "der" },
              ].map((msg, i) => (
                <div key={i} className={`flex ${msg.lado === "der" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.lado === "der"
                      ? "bg-[#6C5CE4] text-white rounded-tr-sm"
                      : "bg-gray-100 text-gray-700 rounded-tl-sm"
                  }`}>
                    {msg.lado === "der" && <p className="text-[10px] text-white/60 mb-1 font-semibold">Attia</p>}
                    {msg.texto}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </m.div>
      </m.div>
    </section>
  )
}

export function ContrasteSection() {
  const filas = [
    {
      antes: "WhatsApp sin responder · reservas que se pierden",
      despues: "Chatbot IA agenda en WhatsApp, Instagram y Messenger las 24 horas",
    },
    {
      antes: "Excel o libreta para llevar la agenda a mano",
      despues: "Agenda digital en tiempo real. Todos los profesionales sincronizados",
    },
    {
      antes: "Recordar citas manualmente o no recordarlas",
      despues: "Recordatorios automáticos por WhatsApp antes de cada cita",
    },
    {
      antes: "Cobrar después o perseguir al cliente por el pago",
      despues: "Cobro con Webpay al momento de reservar. Sin cuentas pendientes",
    },
    {
      antes: "Ver citas en attempo y en el calendario del celular por separado",
      despues: "Todo sincronizado con Google Calendar. Una cita en attempo, aparece en todos tus dispositivos",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-950 overflow-hidden">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto"
      >
        <m.div variants={fadeUp} className="text-center mb-12">
          <span className="inline-block bg-[#6C5CE4]/20 text-[#8B7FF0] text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-6">
            Por qué attempo
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Nacimos para que te{" "}
            <span className="text-[#8B7FF0]">enfoques en lo tuyo</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Sin WhatsApp interminable. Sin planillas. Sin cobros pendientes.
          </p>
        </m.div>

        {/* Header columnas */}
        <m.div variants={fadeUp} className="grid grid-cols-2 gap-3 mb-3">
          <div className="flex items-center gap-2 px-5 py-3 bg-white/5 rounded-2xl border border-white/10">
            <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs font-bold flex-shrink-0">✕</span>
            <span className="text-white/50 text-sm font-semibold tracking-wider">Sin attempo</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-[#6C5CE4]/15 rounded-2xl border border-[#6C5CE4]/30">
            <span className="w-6 h-6 bg-[#6C5CE4]/30 rounded-full flex items-center justify-center text-[#8B7FF0] text-xs font-bold flex-shrink-0">✓</span>
            <span className="text-[#8B7FF0] text-sm font-semibold tracking-wider">Con attempo</span>
          </div>
        </m.div>

        {/* Filas comparativas */}
        <div className="flex flex-col gap-3">
          {filas.map((fila, i) => (
            <m.div key={i} variants={fadeUp} className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 px-5 py-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-1.5 h-1.5 bg-red-400/50 rounded-full flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">{fila.antes}</p>
              </div>
              <div className="flex items-center gap-3 px-5 py-4 bg-[#6C5CE4]/10 rounded-2xl border border-[#6C5CE4]/20">
                <div className="w-1.5 h-1.5 bg-[#6C5CE4] rounded-full flex-shrink-0" />
                <p className="text-white text-sm leading-relaxed font-medium">{fila.despues}</p>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  )
}
