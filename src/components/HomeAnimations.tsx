"use client"

import { m, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, CreditCard, Zap, Smartphone, CalendarDays, CheckCircle2, Check, Users, BarChart2, Settings, Banknote, Lock, Bell, Bot, Globe, Package, FileText, type LucideIcon } from "lucide-react"

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
  const [demoOpen, setDemoOpen] = useState(false)
  return (
    <>
    {demoOpen && <DemoModal onClose={() => setDemoOpen(false)} />}
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

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-20">
        {/* Left — CSS animations, visible immediately for LCP */}
        <div className="text-center lg:text-left order-1 lg:order-1">
          <div style={{ animation: "fade-in-up 0.6s ease both 0ms" }}>
            <span className="inline-flex items-center gap-2 bg-[#6C5CE4]/10 text-[#6C5CE4] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#6C5CE4] rounded-full animate-pulse" />
              Agenda online · Webpay · IA que agenda sola 24/7
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
            Con solo 3 inasistencias al mes pierdes más de $100.000. attempo cobra antes de confirmar la hora, envía recordatorios automáticos y, cuando no estás, agenda por ti las 24 horas.
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
            <button
              onClick={() => setDemoOpen(true)}
              className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-all text-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Ver demo
            </button>
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
          className="flex justify-center lg:justify-end relative order-2 lg:order-2"
        >
          <div className="relative scale-[0.78] sm:scale-90 lg:scale-100 origin-top">
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
                    <Lock className="w-2.5 h-2.5" /> Pago seguro con Webpay
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
    </>
  )
}

// ─── Demo Modal ───────────────────────────────────────────────────────────────
function DemoModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<"paciente" | "profesional">("paciente")
  const [paso, setPaso] = useState(0)

  const pasosPaciente = [
    {
      titulo: "Hace clic en tu link de reservas",
      desc: "Desde tu bio de Instagram, un mensaje de WhatsApp o tu sitio web.",
      screen: (
        <div className="bg-[#f8f7ff] rounded-2xl overflow-hidden border border-[#6C5CE4]/10">
          <div className="bg-[#6C5CE4] px-4 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/40" />
            <p className="text-white/60 text-[10px] tracking-widest flex-1 text-center">app.attempo.cl/dra-valentina</p>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#6C5CE4]/20 flex items-center justify-center text-[#6C5CE4] font-bold text-lg">VM</div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Dra. Valentina Mora</p>
                <p className="text-xs text-gray-500">Psicóloga clínica · Santiago</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {["Terapia individual", "Primera consulta", "Terapia de pareja", "Evaluación"].map(s => (
                <div key={s} className="border border-[#6C5CE4]/20 rounded-xl px-3 py-2.5 text-center cursor-pointer hover:bg-[#6C5CE4]/5">
                  <p className="text-xs font-semibold text-gray-700">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      titulo: "Elige servicio, fecha y hora",
      desc: "El sistema muestra solo los horarios disponibles. Sin llamadas, sin WhatsApp.",
      screen: (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="bg-[#6C5CE4] px-4 py-3">
            <p className="text-white font-semibold text-sm">Terapia individual · $35.000</p>
            <p className="text-white/60 text-xs">Selecciona fecha y hora</p>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {["Lun 18", "Mar 19", "Mié 20", "Jue 21", "Vie 22"].map((d, i) => (
                <div key={d} className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl text-xs font-bold ${i === 2 ? "bg-[#6C5CE4] text-white" : "bg-gray-50 text-gray-500"}`}>
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[["09:00", false], ["10:30", false], ["11:00", true], ["12:00", true], ["15:30", true], ["17:00", false]].map(([h, libre]) => (
                <div key={String(h)} className={`py-2 rounded-xl text-center text-xs font-semibold ${libre ? "bg-[#6C5CE4]/10 text-[#6C5CE4] border border-[#6C5CE4]/20" : "bg-gray-50 text-gray-300"}`}>
                  {String(h)}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      titulo: "Paga con Mercado Pago antes de confirmar",
      desc: "El pago es obligatorio para reservar. Sin pago, no hay hora. Así se eliminan los no-shows.",
      screen: (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="bg-[#009ee3] px-4 py-3 flex items-center justify-between">
            <span className="text-white font-bold text-sm tracking-tight">Mercado Pago</span>
            <span className="text-white/80 text-[10px] flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              Pago seguro
            </span>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <div className="bg-gray-50 rounded-xl px-4 py-3 flex justify-between items-center border border-gray-100">
              <div>
                <p className="text-xs text-gray-500">Terapia individual — Mié 20, 11:00</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">Dra. Valentina Mora</p>
              </div>
              <p className="text-lg font-bold text-gray-900">$35.000</p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: "Tarjeta de crédito", icon: "💳" },
                { label: "Débito / Redcompra", icon: "🏦" },
                { label: "Transferencia bancaria", icon: "🔄" },
              ].map((m, i) => (
                <div key={m.label} className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${i === 0 ? "border-[#009ee3] bg-blue-50" : "border-gray-100 hover:border-gray-200"}`}>
                  <span>{m.icon}</span>
                  <span className="text-sm text-gray-700 font-medium">{m.label}</span>
                  {i === 0 && <span className="ml-auto text-[#009ee3] text-xs font-bold">✓</span>}
                </div>
              ))}
            </div>
            <div className="bg-[#009ee3] rounded-xl py-3 text-center">
              <p className="text-white text-sm font-bold">Pagar $35.000</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      titulo: "Recibe confirmación por WhatsApp",
      desc: "Tu paciente recibe el comprobante al instante. Tú no haces nada — la cita ya está en tu agenda.",
      screen: (
        <div className="bg-[#e5ddd5] rounded-2xl overflow-hidden">
          <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">A</div>
            <div>
              <p className="text-white text-sm font-semibold">attempo</p>
              <p className="text-white/60 text-xs">en línea</p>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
              <p className="text-gray-800 text-xs leading-relaxed">
                ✅ <strong>¡Reserva confirmada!</strong><br /><br />
                📅 Miércoles 20 de agosto, 11:00<br />
                👩‍⚕️ Dra. Valentina Mora<br />
                💬 Terapia individual<br />
                💳 Pago recibido: $35.000<br /><br />
                Te recordaremos 24h antes. ¡Nos vemos!
              </p>
              <p className="text-gray-400 text-[9px] text-right mt-1">11:03 ✓✓</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const pasosProfesional = [
    {
      titulo: "La cita aparece en tu agenda al instante",
      desc: "No tienes que hacer nada. En cuanto el paciente paga, la cita queda confirmada en tu calendario.",
      img: "/desktop-agenda.png",
    },
    {
      titulo: "El pago queda registrado automáticamente",
      desc: "Sin perseguir pagos. Sin anotaciones manuales. El ingreso se registra solo en tu módulo de ventas.",
      img: "/desktop-ventas.png",
    },
    {
      titulo: "Los recordatorios salen solos",
      desc: "24h y 2h antes de cada cita, tu paciente recibe un WhatsApp automático. Tú no tocas nada.",
      img: "/desktop-config.png",
    },
    {
      titulo: "Tienes el historial completo del paciente",
      desc: "Cada cita, cada pago y cada nota queda guardada en la ficha del paciente para consultar cuando quieras.",
      img: "/desktop-clientes.png",
    },
  ]

  const pasos = tab === "paciente" ? pasosPaciente : pasosProfesional
  const total = pasos.length

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Cómo funciona attempo</h2>
            <p className="text-sm text-gray-500 mt-0.5">Ve el flujo completo desde ambos lados</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-500 cursor-pointer flex-shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-7 pt-5 gap-3">
          {[
            { key: "paciente", label: "👤 Tu paciente reserva" },
            { key: "profesional", label: "📊 Tú lo ves todo" },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => { setTab(t.key as "paciente" | "profesional"); setPaso(0) }}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${tab === t.key ? "bg-[#6C5CE4] text-white shadow-md shadow-[#6C5CE4]/20" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Stepper dots */}
        <div className="flex items-center justify-center gap-2 px-7 pt-5">
          {pasos.map((_, i) => (
            <button key={i} onClick={() => setPaso(i)} className={`transition-all rounded-full cursor-pointer ${i === paso ? "w-6 h-2 bg-[#6C5CE4]" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"}`} />
          ))}
        </div>

        {/* Contenido */}
        <div className="px-7 py-6">
          <div className="mb-5">
            <p className="text-xs font-semibold text-[#6C5CE4] uppercase tracking-wider mb-1">Paso {paso + 1} de {total}</p>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">{pasos[paso].titulo}</h3>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">{pasos[paso].desc}</p>
          </div>

          {/* Screen */}
          <div className="mb-6">
            {tab === "paciente"
              ? (pasos[paso] as typeof pasosPaciente[0]).screen
              : <Image src={(pasos[paso] as typeof pasosProfesional[0]).img} alt={pasos[paso].titulo} width={900} height={560} className="w-full rounded-2xl border border-gray-100 shadow-sm" />
            }
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setPaso(p => Math.max(0, p - 1))}
              disabled={paso === 0}
              className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              ← Anterior
            </button>
            {paso < total - 1
              ? <button onClick={() => setPaso(p => p + 1)} className="flex-1 py-3 rounded-xl bg-[#6C5CE4] text-white text-sm font-semibold hover:bg-[#5A4BD1] transition-all cursor-pointer">Siguiente →</button>
              : <a href="https://app.attempo.cl/registro" className="flex-1 py-3 rounded-xl bg-[#6C5CE4] text-white text-sm font-bold text-center hover:bg-[#5A4BD1] transition-all">Empieza gratis →</a>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export function StatsSection() {
  const stats = [
    { value: "-80%", label: "Inasistencias con cobro anticipado" },
    { value: "3", label: "Canales de chatbot IA" },
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
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
        <m.p variants={fadeUp} className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-400">
          Sin comisión por cita · Sin contrato anual obligatorio · Sin sorpresas de precio
        </m.p>
      </m.div>
    </section>
  )
}

export function FeaturesSection() {
  const features: { Icon: LucideIcon; title: string; desc: string; href: string; color: string; bg: string }[] = [
    { Icon: CalendarDays, title: "Agenda inteligente",        desc: "Vista semanal, diaria y en lista. Gestiona citas, bloqueos y disponibilidad en tiempo real.",                             href: "/plataforma#agenda",        color: "text-[#6C5CE4]", bg: "bg-[#6C5CE4]/10" },
    { Icon: Bell,         title: "Recordatorios automáticos", desc: "WhatsApp y email antes de cada cita. Reduce las inasistencias sin hacer nada.",                                           href: "/plataforma#recordatorios", color: "text-emerald-600", bg: "bg-emerald-50" },
    { Icon: Bot,          title: "Chatbot IA",                desc: "Attia agenda, cobra y recupera citas por ti en WhatsApp, Instagram y Messenger las 24 horas. Ya activo.",               href: "/chatbot-ia",              color: "text-violet-600",  bg: "bg-violet-50" },
    { Icon: Banknote,     title: "Control de ventas",         desc: "Registra pagos, revisa ingresos por día y lleva el control de citas sin cobrar.",                                         href: "/plataforma#cobros",        color: "text-sky-600",    bg: "bg-sky-50" },
    { Icon: Users,        title: "Base de clientes",          desc: "Ficha completa por paciente con historial, datos de contacto y citas anteriores.",                                        href: "/plataforma#clientes",      color: "text-orange-600",  bg: "bg-orange-50" },
    { Icon: BarChart2,    title: "Reportes y métricas",       desc: "Evolución de reservas, servicios más populares y rendimiento de tu negocio.",                                             href: "/plataforma#reportes",      color: "text-pink-600",    bg: "bg-pink-50" },
    { Icon: Package,      title: "Paquetes de sesiones",      desc: "Vende sesiones en bloque y controla el avance de cada paquete por cliente.",                                             href: "/plataforma#paquetes",      color: "text-amber-600",   bg: "bg-amber-50" },
    { Icon: FileText,     title: "Boleta de honorarios",      desc: "Genera boletas de honorarios directamente desde la plataforma. Integración SII.",                                        href: "/plataforma#boleta",        color: "text-teal-600",    bg: "bg-teal-50" },
    { Icon: Globe,        title: "Página de reservas online", desc: "Tu propio link de reservas personalizado para compartir con tus pacientes.",                                              href: "/plataforma#agenda",        color: "text-indigo-600",  bg: "bg-indigo-50" },
    { Icon: CalendarDays, title: "Google Calendar",           desc: "Vincula tu cuenta y cada cita aparece al instante. Al cancelar, desaparece automáticamente.",                            href: "/plataforma#google-calendar", color: "text-red-500",   bg: "bg-red-50" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <m.div key={f.title} variants={fadeUp}>
              <Link href={f.href} className="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#6C5CE4]/30 hover:bg-white hover:shadow-md transition-all duration-200 h-full">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${f.bg}`}>
                  <f.Icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base mb-1.5 group-hover:text-[#6C5CE4] transition-colors flex items-center gap-1.5">
                    {f.title}
                    <span className="text-gray-300 group-hover:text-[#6C5CE4] transition-all opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 text-sm">→</span>
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </Link>
            </m.div>
          ))}
        </div>
        <m.div variants={fadeUp} className="mt-10 text-center">
          <Link href="/plataforma" className="inline-flex items-center gap-2 text-[#6C5CE4] font-medium hover:underline text-sm">
            Ver la plataforma completa →
          </Link>
        </m.div>
      </m.div>
    </section>
  )
}

export function ScreenshotsSection() {
  const [active, setActive] = useState(0)
  const tabs: { Icon: LucideIcon; label: string; mobile: string; desktop: string; desc: string }[] = [
    { Icon: CalendarDays, label: "Agenda",   mobile: "/screenshot-agenda.jpeg",   desktop: "/desktop-agenda.png",   desc: "Vista semanal y diaria de tus citas" },
    { Icon: Users,        label: "Clientes", mobile: "/screenshot-clientes.jpeg", desktop: "/desktop-clientes.png", desc: "Ficha completa por cada paciente" },
    { Icon: Banknote,     label: "Ventas",   mobile: "/screenshot-ventas.jpeg",   desktop: "/desktop-ventas.png",   desc: "Controla ingresos y cobros pendientes" },
    { Icon: BarChart2,    label: "Reportes", mobile: "/screenshot-reportes.jpeg", desktop: "/desktop-reportes.png", desc: "Métricas y evolución de tu negocio" },
    { Icon: Settings,     label: "Config",   mobile: "/screenshot-config.jpeg",   desktop: "/desktop-config.png",   desc: "Configura servicios, horarios y canales" },
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

          {/* Laptop + phone mockup */}
          <m.div variants={fadeUp} className="lg:col-span-3 relative pb-20">
            {/* Multi-layer glow */}
            <div className="absolute inset-0 bg-[#6C5CE4]/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 right-1/4 bottom-0 bg-[#8B7FF0]/15 blur-2xl rounded-full pointer-events-none" />

            {/* ── Laptop ── */}
            <div className="relative z-10">
              {/* Screen lid */}
              <div
                className="rounded-t-2xl overflow-hidden shadow-2xl"
                style={{ background: "linear-gradient(160deg,#2a2a3e 0%,#1a1a2e 100%)", padding: "3px 3px 0" }}
              >
                {/* Inner bezel */}
                <div className="rounded-t-xl overflow-hidden bg-[#0d0d1a]">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111128] border-b border-white/5">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 mx-3 bg-white/6 rounded-full h-5 flex items-center px-3">
                      <span className="text-gray-500 text-[10px]">app.attempo.cl</span>
                    </div>
                    <div className="w-16 h-3 rounded bg-white/5" />
                  </div>
                  {/* Screenshot */}
                  <m.div
                    key={`desk-${active}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Image
                      src={tabs[active].desktop}
                      alt={`attempo ${tabs[active].label}`}
                      width={1200}
                      height={750}
                      className="w-full object-cover object-top"
                      priority={active === 0}
                    />
                  </m.div>
                </div>
              </div>
              {/* Hinge line */}
              <div className="h-px bg-white/5" />
              {/* Keyboard base — MacBook silver gradient */}
              <div
                className="rounded-b-2xl shadow-xl"
                style={{
                  background: "linear-gradient(180deg,#c8c8ce 0%,#aeaeb4 40%,#9a9aa0 100%)",
                  padding: "0 4px 4px",
                  height: 28,
                }}
              >
                {/* Trackpad indentation */}
                <div className="mx-auto mt-2 w-24 h-3 rounded-sm" style={{ background: "rgba(0,0,0,0.08)" }} />
              </div>
              {/* Base shadow strip */}
              <div className="h-1 rounded-b-3xl mx-6" style={{ background: "linear-gradient(90deg,transparent,rgba(0,0,0,0.35),transparent)" }} />
            </div>

            {/* ── Phone ── */}
            <div className="absolute -bottom-4 -right-2 lg:-right-6 z-20 w-[148px] hidden sm:block">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.10), 0 20px 40px rgba(0,0,0,0.5)", background: "#111" }}
              >
                {/* Screen — altura fija */}
                <div className="relative overflow-hidden" style={{ height: 310 }}>
                  <m.div
                    key={`mob-${active}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={tabs[active].mobile}
                      alt={`attempo ${tabs[active].label} mobile`}
                      width={736}
                      height={1600}
                      className="w-full h-full object-cover object-top"
                    />
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

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function IconMessenger() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
      <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.498 1.745 6.617 4.472 8.653V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111S18.626 0 12 0zm1.194 14.963l-3.057-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.558 6.963z" />
    </svg>
  )
}

function IconWebpay() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
      <rect x="1" y="4" width="22" height="16" rx="3" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M1 9h22" stroke="white" strokeWidth="2"/>
      <rect x="3" y="13" width="5" height="2" rx="1" fill="white"/>
      <rect x="10" y="13" width="3" height="2" rx="1" fill="white"/>
    </svg>
  )
}

function IconGoogleCalendar() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" fill="white"/>
      <path d="M3 9h18" stroke="#4285F4" strokeWidth="1.5"/>
      <path d="M8 2v4M16 2v4" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 13h2v2H7zM11 13h2v2h-2zM15 13h2v2h-2zM7 17h2v2H7zM11 17h2v2h-2z" fill="#4285F4"/>
    </svg>
  )
}

export function IntegracionesSection() {
  const integraciones = [
    { nombre: "WhatsApp",        tipo: "Chatbot IA 24/7",         bg: "bg-[#25D366]",                                  Icon: IconWhatsApp },
    { nombre: "Instagram",       tipo: "DMs automáticos",          bg: "bg-gradient-to-br from-[#833AB4] to-[#E1306C]", Icon: IconInstagram },
    { nombre: "Messenger",       tipo: "Conversaciones IA",        bg: "bg-[#0084FF]",                                  Icon: IconMessenger },
    { nombre: "Webpay",          tipo: "Cobro al reservar",        bg: "bg-[#E10600]",                                  Icon: IconWebpay },
    { nombre: "Google Calendar", tipo: "Sincronización de agenda", bg: "bg-[#4285F4]",                                  Icon: IconGoogleCalendar },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <m.div variants={fadeUp}>
          <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">Integraciones</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Una plataforma.<br className="sm:hidden" /> Todos tus canales.
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-12">
            Conecta attempo con las herramientas que ya usas. Sin configuraciones complejas ni intermediarios.
          </p>
        </m.div>

        <m.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-10">
          {integraciones.map((canal) => (
            <div
              key={canal.nombre}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${canal.bg}`}>
                <canal.Icon />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-sm">{canal.nombre}</p>
                <p className="text-xs text-gray-400">{canal.tipo}</p>
              </div>
            </div>
          ))}
        </m.div>

        <m.p variants={fadeUp} className="text-sm text-gray-400 font-medium">
          Sin comisión por cita · Sin contrato anual obligatorio · Sin sorpresas de precio
        </m.p>
      </m.div>
    </section>
  )
}

export function TestimonialsSection() {
  const featured = {
    name: "Valentina Mora",
    role: "Psicóloga clínica · Santiago",
    initials: "VM",
    metrics: ["−83% inasistencias", "+$180.000/mes"],
    text: "Tenía entre 4 y 6 inasistencias al mes. Con el cobro anticipado bajé a 1. Recuperé cerca de $180.000 mensuales que antes simplemente desaparecían. attempo se paga solo en la primera semana.",
  }
  const others = [
    { name: "Diego Fuentes", role: "Barbería The Cut · Ñuñoa", initials: "DF", metric: "−3 hrs/semana en admin", text: "El chatbot responde solo por Instagram. Me ahorré contratar a alguien para tomar reservas — tres horas semanales que ahora uso en lo mío." },
    { name: "Camila Reyes", role: "Nutricionista · Online", initials: "CR", metric: "2% tasa de inasistencia", text: "Mi tasa de inasistencia bajó al 2%. Historial, sesiones y cobros en un solo lugar. Cerré para siempre mis 12 archivos de Excel." },
    { name: "Sofía Castillo", role: "Studio Sofía · Providencia", initials: "SC", metric: "+$90.000/mes recuperados", text: "Pasé de 5 ausencias semanales a casi cero. La seña obligatoria al reservar lo cambió todo. Recupero unos $90.000 al mes que antes perdía." },
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
            <div className="flex flex-wrap gap-2 mb-5">
              {featured.metrics.map((m) => (
                <span key={m} className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">{m}</span>
              ))}
            </div>
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
                <span className="self-start bg-[#6C5CE4]/20 text-[#8B7FF0] text-xs font-bold px-2.5 py-1 rounded-full mb-3">{t.metric}</span>
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
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#6C5CE4] text-sm font-medium tracking-wider">Chatbot IA · Activo ahora</span>
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                En producción
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
              La IA que agenda,<br className="hidden sm:block" /> cobra y recupera citas<br className="hidden sm:block" /> por ti.
            </h2>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
              attia responde en WhatsApp, Instagram y Messenger las 24 horas. Agenda, confirma el pago y recupera citas canceladas — sin que tú hagas nada. No es "próximamente": ya está activo.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Agenda turnos y cobra la seña en automático",
                "Recupera citas canceladas ofreciendo horarios alternativos",
                "Atiende mientras atiendes — o mientras duermes",
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
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-semibold text-gray-400 tracking-wider">Attia — conversación real</p>
              <span className="flex items-center gap-1.5 text-xs text-green-600 font-semibold">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> En línea
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { quien: "Cliente", texto: "Hola, ¿tienen hora disponible el viernes a las 18:00?", lado: "izq" },
                { quien: "Attia", texto: "¡Hola! Sí, tenemos disponibilidad el viernes 22 a las 18:00. ¿Lo reservamos? El costo es $35.000.", lado: "der" },
                { quien: "Cliente", texto: "Sí, perfecto.", lado: "izq" },
                { quien: "Attia", texto: "Listo 🎉 Te envío el link de pago por Webpay para confirmar la reserva →", lado: "der" },
                { quien: "Attia", texto: "✅ Pago recibido. Tu hora está confirmada para el viernes 22 a las 18:00. ¡Te esperamos!", lado: "der" },
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

// ─── ROI Calculator ───────────────────────────────────────────────────────────
export function ROISection() {
  const [citas, setCitas] = useState(3)
  const [precio, setPrecio] = useState(35000)
  const perdida = citas * precio
  const costo = 24990
  const recuperado = perdida - costo
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 px-4 bg-white">
      <m.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-4xl mx-auto"
      >
        <m.div variants={fadeUp} className="text-center mb-12">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Calculadora de inasistencias
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
            ¿Cuánto dinero pierdes<br className="hidden sm:block" /> cada mes por inasistencias?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Mueve los controles y calcula en segundos lo que te cuesta no tener cobro anticipado.
          </p>
        </m.div>

        <m.div variants={fadeUp} className="bg-[#f8f7ff] border border-[#6C5CE4]/10 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Sliders */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-semibold text-gray-700">Citas que pierdes al mes</label>
                  <span className="text-2xl font-bold text-[#6C5CE4]">{citas}</span>
                </div>
                <input
                  type="range" min={1} max={20} step={1} value={citas}
                  onChange={e => setCitas(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#6C5CE4]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1 cita</span><span>20 citas</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-semibold text-gray-700">Precio por cita</label>
                  <span className="text-2xl font-bold text-[#6C5CE4]">${precio.toLocaleString("es-CL")}</span>
                </div>
                <input
                  type="range" min={10000} max={150000} step={5000} value={precio}
                  onChange={e => setPrecio(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#6C5CE4]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$10.000</span><span>$150.000</span>
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div className="flex flex-col gap-4">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Dinero que pierdes cada mes</p>
                <p className="text-4xl font-bold text-red-600">${perdida.toLocaleString("es-CL")}</p>
                <p className="text-xs text-red-400 mt-1">{citas} cita{citas !== 1 ? "s" : ""} × ${precio.toLocaleString("es-CL")}</p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">attempo cuesta</p>
                  <p className="text-2xl font-bold text-gray-800">$24.990<span className="text-sm font-normal text-gray-400">/mes</span></p>
                </div>
                <span className="text-3xl">→</span>
                <div className="text-right">
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">Recuperas</p>
                  <p className={`text-2xl font-bold ${recuperado > 0 ? "text-emerald-600" : "text-gray-400"}`}>
                    ${Math.max(0, recuperado).toLocaleString("es-CL")}
                  </p>
                </div>
              </div>

              <a
                href="https://app.attempo.cl/registro"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#6C5CE4] hover:bg-[#5A4BD1] text-white font-bold rounded-2xl transition-colors text-sm shadow-lg shadow-[#6C5CE4]/20"
              >
                Empieza gratis y deja de perder ese dinero →
              </a>
              <p className="text-center text-xs text-gray-400">12 días gratis · Sin tarjeta · Listo en 5 minutos</p>
            </div>
          </div>
        </m.div>
      </m.div>
    </section>
  )
}

// ─── Onboarding Steps ─────────────────────────────────────────────────────────
export function OnboardingSection() {
  const pasos = [
    {
      n: "01",
      titulo: "Crea tu cuenta gratis",
      desc: "Registra tu negocio en 2 minutos. Sin tarjeta, sin letra chica. Tienes 12 días para probar todo.",
      detalle: "Solo tu nombre, email y tipo de negocio. Listo.",
    },
    {
      n: "02",
      titulo: "Configura tu agenda",
      desc: "Agrega tus servicios, precios y horarios disponibles. El sistema genera tu link de reservas al instante.",
      detalle: "La mayoría lo termina en menos de 10 minutos.",
    },
    {
      n: "03",
      titulo: "Comparte tu link y empieza a recibir citas",
      desc: "Ponlo en tu bio de Instagram, WhatsApp o donde quieras. Tus pacientes reservan solos, tú ves todo en tiempo real.",
      detalle: "El cobro anticipado y los recordatorios corren solos desde el primer día.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#f8f7ff]">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-4xl mx-auto"
      >
        <m.div variants={fadeUp} className="text-center mb-14">
          <span className="inline-block bg-[#6C5CE4]/10 text-[#6C5CE4] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Configuración en 5 minutos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
            ¿Qué pasa después de registrarte?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Sin onboarding eterno. Sin asistente que te explique todo. Solo tres pasos y ya estás recibiendo citas.
          </p>
        </m.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pasos.map((p, i) => (
            <m.div key={p.n} variants={fadeUp} className="relative">
              <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm h-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#6C5CE4] text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {p.n}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base leading-tight">{p.titulo}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.desc}</p>
                <p className="text-xs text-[#6C5CE4] font-semibold bg-[#6C5CE4]/8 px-3 py-2 rounded-xl">{p.detalle}</p>
              </div>
            </m.div>
          ))}
        </div>

        <m.div variants={fadeUp} className="text-center mt-10">
          <a
            href="https://app.attempo.cl/registro"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6C5CE4] hover:bg-[#5A4BD1] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#6C5CE4]/20"
          >
            Empieza gratis ahora →
          </a>
          <p className="text-xs text-gray-400 mt-3">Sin tarjeta · 12 días de prueba · Cancela cuando quieras</p>
        </m.div>
      </m.div>
    </section>
  )
}
