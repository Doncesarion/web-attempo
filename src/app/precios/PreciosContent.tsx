"use client"

import React, { useState } from "react"
import { m, AnimatePresence } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.15" />
    <path d="M4.5 8l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const DashIcon = () => (
  <svg className="w-4 h-4 text-gray-300" viewBox="0 0 16 16" fill="none"><path d="M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
)
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg className={`w-5 h-5 text-[#6C5CE4] transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const GiftIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
  </svg>
)
const ShieldIcon = () => (
  <svg className="w-8 h-8 text-[#6C5CE4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
)
const ZapIcon = () => (
  <svg className="w-6 h-6 text-[#6C5CE4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)
const ChatIcon = () => (
  <svg className="w-6 h-6 text-[#6C5CE4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
)
const UnlockIcon = () => (
  <svg className="w-6 h-6 text-[#6C5CE4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 019.9-1" />
  </svg>
)
const BuildingIcon = () => (
  <svg className="w-10 h-10 text-white opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

// ─── Datos ────────────────────────────────────────────────────────────────────
const planes = [
  {
    id: "inicio",
    nombre: "Inicio",
    tag: "Para empezar",
    mensual: 24990,
    anual: 239900,
    desc: "Todo lo que necesitas para digitalizar tu agenda y empezar a cobrar online.",
    popular: false,
    cta: "Empieza gratis",
    href: "https://app.attempo.cl/registro",
    nota: "1% de costo en transferencias",
    features: [
      "Perfil de agendamiento online",
      "Agenda y calendario digital",
      "Servicios ilimitados",
      "Recordatorios por correo y WhatsApp",
      "Pagos por transferencia y WebPay",
      "Evaluaciones en tu perfil",
      "Fichas clínicas",
      "Marcar citas como pagadas",
      "Soporte vía chat",
    ],
  },
  {
    id: "pro",
    nombre: "Pro",
    tag: "Para profesionales",
    mensual: 44990,
    anual: 431900,
    desc: "Herramientas avanzadas para profesionales consolidados que quieren crecer.",
    popular: true,
    cta: "Empieza gratis",
    href: "https://app.attempo.cl/registro",
    nota: null,
    features: [
      "Todo lo del plan Inicio",
      "Sin costo en transferencias",
      "Transcriptor IA de consultas",
      "Integración con FONASA",
      "Emisión de boletas electrónicas",
      "Pagos en dólares",
      "Vitrina de talleres y contenido",
    ],
  },
  {
    id: "clinica",
    nombre: "Clínica IA",
    tag: "Para centros",
    mensual: 119990,
    anual: 1151900,
    desc: "Automatización total con IA para centros médicos y clínicas con múltiples profesionales.",
    popular: false,
    cta: "Hablar con ventas",
    href: "/contacto",
    nota: null,
    features: [
      "Todo lo del plan Pro",
      "Chatbot IA en WhatsApp 24/7",
      "Cobro automático por WhatsApp",
      "Recuperación de citas por IA",
      "WhatsApps de confirmación automáticos",
      "WhatsApp de evaluación post-cita",
      "Reportes avanzados",
      "Personalización de colores del perfil",
      "Correos masivos ilimitados",
      "Recetas médicas electrónicas",
      "Soporte prioritario (chat, correo y WhatsApp)",
    ],
  },
]

type CeldaVal = boolean | string
const categorias: { nombre: string; rows: { label: string; inicio: CeldaVal; pro: CeldaVal; clinica: CeldaVal }[] }[] = [
  {
    nombre: "Agenda y gestión",
    rows: [
      { label: "Perfil de agendamiento online",     inicio: true,     pro: true,        clinica: true },
      { label: "Agenda y calendario digital",       inicio: true,     pro: true,        clinica: true },
      { label: "Servicios ilimitados",              inicio: true,     pro: true,        clinica: true },
      { label: "Recordatorios correo y WhatsApp",   inicio: true,     pro: true,        clinica: true },
      { label: "Fichas clínicas",                   inicio: true,     pro: true,        clinica: true },
      { label: "Marcar citas como pagadas",         inicio: true,     pro: true,        clinica: true },
      { label: "Evaluaciones en tu perfil",         inicio: true,     pro: true,        clinica: true },
      { label: "Reportes avanzados",                inicio: false,    pro: false,       clinica: true },
      { label: "Personalización de colores",        inicio: false,    pro: false,       clinica: true },
    ],
  },
  {
    nombre: "Pagos y facturación",
    rows: [
      { label: "Pagos por transferencia y WebPay",  inicio: true,          pro: true,           clinica: true },
      { label: "Costo en transferencias",           inicio: "1% costo",    pro: "Sin costo",    clinica: "Sin costo" },
      { label: "Comisión débito (WebPay)",          inicio: "1,49% + IVA", pro: "1,49% + IVA",  clinica: "1,49% + IVA" },
      { label: "Comisión crédito (WebPay)",         inicio: "2,95% + IVA", pro: "2,95% + IVA",  clinica: "2,95% + IVA" },
      { label: "Emisión de boletas electrónicas",   inicio: false,         pro: true,           clinica: true },
      { label: "Pagos en dólares",                  inicio: false,         pro: true,           clinica: true },
      { label: "Cobro automático por WhatsApp",     inicio: false,         pro: false,          clinica: true },
    ],
  },
  {
    nombre: "Contenido y herramientas",
    rows: [
      { label: "Vitrina de talleres y contenido",   inicio: false, pro: true,  clinica: true },
      { label: "Integración con FONASA",            inicio: false, pro: true,  clinica: true },
      { label: "Correos masivos ilimitados",        inicio: false, pro: false, clinica: true },
      { label: "Recetas médicas electrónicas",      inicio: false, pro: false, clinica: true },
    ],
  },
  {
    nombre: "Inteligencia artificial",
    rows: [
      { label: "Transcriptor IA de consultas",         inicio: false, pro: true,  clinica: true },
      { label: "Chatbot IA en WhatsApp 24/7",          inicio: false, pro: false, clinica: true },
      { label: "Recuperación de citas por IA",         inicio: false, pro: false, clinica: true },
      { label: "WhatsApps de confirmación automáticos",inicio: false, pro: false, clinica: true },
    ],
  },
  {
    nombre: "Soporte",
    rows: [
      { label: "Soporte vía chat",                     inicio: true,  pro: true,  clinica: true },
      { label: "Soporte vía correo y WhatsApp",        inicio: false, pro: false, clinica: true },
    ],
  },
]

const faqs = [
  { q: "¿Cómo funciona el cobro?", a: "Si pagas mensual, el cobro es automático cada mes. Si eliges anual, pagas una sola vez y equivale a 10 meses (ahorras 2 meses completos). Siempre recibirás un correo antes de cada cobro. Puedes cancelar en cualquier momento." },
  { q: "¿Puedo pagar el plan anual en cuotas?", a: "Sí. Tenemos convenio de hasta 12 cuotas sin interés con tarjeta de crédito de cualquier banco. Puedes darte de baja en cualquier momento sin costo adicional." },
  { q: "¿Hay comisión en los pagos con tarjeta?", a: "Sí. Los pagos con WebPay tienen una comisión de 1,49% + IVA para débito y 2,95% + IVA para crédito. Esto aplica en todos los planes y lo asume el profesional." },
  { q: "¿Qué pasa cuando termina la prueba gratis?", a: "Al terminar los 12 días, te pedimos que elijas un plan. Si no lo haces, tu cuenta pasa a modo limitado. No se cobra nada sin que tú lo confirmes primero." },
  { q: "¿Puedo cambiar de plan?", a: "Sí, en cualquier momento. Si subes de plan, el cambio aplica de inmediato. Si bajas, aplica al inicio del siguiente período." },
  { q: "¿Los precios incluyen IVA?", a: "No. Los precios mostrados son antes de IVA (19%). El total con IVA se detalla al momento de suscribirte." },
  { q: "¿Los precios son fijos?", a: "Sí. A diferencia de otras plataformas que usan UF, en attempo los precios están en pesos chilenos fijos. Lo que ves es lo que pagas, sin sorpresas por variaciones de la UF." },
]

function formatCLP(n: number) {
  return "$" + n.toLocaleString("es-CL")
}

function Celda({ val, popular }: { val: CeldaVal; popular?: boolean }) {
  if (val === true) return <CheckIcon className={`w-5 h-5 mx-auto ${popular ? "text-[#6C5CE4]" : "text-[#6C5CE4]"}`} />
  if (val === false) return <span className="flex justify-center"><DashIcon /></span>
  return <span className={`text-xs font-medium ${popular ? "text-[#6C5CE4]" : "text-gray-500"}`}>{val}</span>
}

export default function PreciosContent() {
  const [ciclo, setCiclo] = useState<"mensual" | "anual">("mensual")
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null)

  return (
    <div className="flex flex-col bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-20 pb-10 lg:pt-24 lg:pb-16 px-4 bg-gradient-to-b from-[#f5f3ff] to-white">
        <m.div className="max-w-2xl mx-auto text-center" initial="hidden" animate="visible" variants={stagger}>
          <m.span variants={fadeUp} className="inline-flex items-center gap-2 bg-[#6C5CE4]/10 text-[#6C5CE4] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <GiftIcon /> 12 días de prueba gratis · Sin tarjeta de crédito
          </m.span>
          <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-[1.1] tracking-tight">
            Planes claros,<br />sin sorpresas
          </m.h1>
          <m.p variants={fadeUp} className="text-lg text-gray-500 mb-10">
            Precios en pesos fijos. Sin UF, sin variaciones. Lo que ves es lo que pagas.
          </m.p>

          {/* Toggle */}
          <m.div variants={fadeUp} className="inline-flex items-center gap-3 bg-gray-100 rounded-full p-1.5">
            <button
              onClick={() => setCiclo("mensual")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${ciclo === "mensual" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              Mensual
            </button>
            <button
              onClick={() => setCiclo("anual")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${ciclo === "anual" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              Anual
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">−20%</span>
            </button>
          </m.div>

          {ciclo === "anual" && (
            <m.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-green-600 font-medium mt-3">
              Pagas 10 meses, te regalamos 2 — el descuento más alto del mercado
            </m.p>
          )}
        </m.div>
      </section>

      {/* ── Cards ──────────────────────────────────────────────────────────── */}
      <section className="pb-20 px-4">
        <m.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          initial="hidden" animate="visible" variants={stagger}
        >
          {planes.map((plan) => (
            <m.div
              key={plan.id}
              variants={fadeUp}
              className={`relative rounded-2xl flex flex-col border transition-shadow hover:shadow-lg ${
                plan.popular
                  ? "border-[#6C5CE4] shadow-xl shadow-purple-100"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                  <span className="bg-[#6C5CE4] text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                    Más popular
                  </span>
                </div>
              )}

              <div className={`p-7 flex flex-col flex-1 ${plan.popular ? "pt-9" : ""}`}>
                {/* Header */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6C5CE4] mb-0.5">{plan.tag}</p>
                  <h2 className="text-2xl font-bold text-gray-900">{plan.nombre}</h2>
                  <p className="text-sm text-gray-400 mt-1 leading-snug">{plan.desc}</p>
                </div>

                {/* Precio */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
                      {formatCLP(ciclo === "mensual" ? plan.mensual : Math.round(plan.anual / 12))}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">/mes + IVA</span>
                  </div>
                  {ciclo === "anual" ? (
                    <p className="text-sm text-green-600 font-medium mt-1">
                      {formatCLP(plan.anual)}/año · ahorras {formatCLP(plan.mensual * 12 - plan.anual)}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-400 mt-1">
                      o {formatCLP(Math.round(plan.anual / 12))}/mes pagando anual
                    </p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={plan.href}
                  className={`block text-center text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-150 cursor-pointer mb-6 ${
                    plan.popular
                      ? "bg-[#6C5CE4] text-white hover:bg-[#5b4dd0] shadow-sm"
                      : "border-2 border-gray-200 text-gray-700 hover:border-[#6C5CE4] hover:text-[#6C5CE4]"
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Separator */}
                <div className="border-t border-gray-100 mb-5" />

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#6C5CE4]" />
                      <span className="text-sm text-gray-600 leading-snug">{f}</span>
                    </li>
                  ))}
                  {plan.nota && (
                    <li className="flex items-start gap-2.5 mt-1 opacity-50">
                      <span className="text-gray-400 text-xs mt-0.5">·</span>
                      <span className="text-xs text-gray-400">{plan.nota}</span>
                    </li>
                  )}
                </ul>
              </div>
            </m.div>
          ))}
        </m.div>

        <p className="text-center text-xs text-gray-400 mt-6">Todos los precios en pesos chilenos + IVA.</p>
      </section>

      {/* ── Tabla comparativa ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <m.div
          className="max-w-5xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger}
        >
          <m.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 text-center mb-2 tracking-tight">
            Todo lo que incluye cada plan
          </m.h2>
          <m.p variants={fadeUp} className="text-gray-500 text-center mb-10">Sin letra chica.</m.p>

          <m.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[540px] text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium w-1/2">Característica</th>
                  <th className="text-center py-4 px-5 text-gray-600 font-bold">Inicio</th>
                  <th className="text-center py-4 px-5 text-[#6C5CE4] font-bold bg-[#6C5CE4]/5 border-x border-[#6C5CE4]/10">Pro</th>
                  <th className="text-center py-4 px-5 text-gray-600 font-bold">Clínica IA</th>
                </tr>
              </thead>
              <tbody>
                {categorias.map((cat, ci) => (
                  <React.Fragment key={`cat-${ci}`}>
                    <tr className="bg-gray-50 border-y border-gray-100">
                      <td colSpan={4} className="py-2.5 px-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        {cat.nombre}
                      </td>
                    </tr>
                    {cat.rows.map((row, ri) => (
                      <tr key={`r-${ci}-${ri}`} className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors">
                        <td className="py-3 px-6 text-gray-600 text-sm">{row.label}</td>
                        <td className="text-center py-3 px-5"><Celda val={row.inicio} /></td>
                        <td className="text-center py-3 px-5 bg-[#6C5CE4]/5 border-x border-[#6C5CE4]/10"><Celda val={row.pro} popular /></td>
                        <td className="text-center py-3 px-5"><Celda val={row.clinica} /></td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
                {/* Precios finales */}
                <tr className="border-t-2 border-gray-200 bg-gray-50">
                  <td className="py-5 px-6 font-bold text-gray-900">
                    {ciclo === "mensual" ? "Precio mensual + IVA" : "Precio anual + IVA"}
                  </td>
                  <td className="text-center py-5 px-5 font-bold text-gray-700">
                    {formatCLP(ciclo === "mensual" ? 24990 : 239900)}
                  </td>
                  <td className="text-center py-5 px-5 bg-[#6C5CE4]/5 border-x border-[#6C5CE4]/10 font-bold text-[#6C5CE4]">
                    {formatCLP(ciclo === "mensual" ? 44990 : 431900)}
                  </td>
                  <td className="text-center py-5 px-5 font-bold text-gray-700">
                    {formatCLP(ciclo === "mensual" ? 119990 : 1151900)}
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6" />
                  <td className="text-center py-4 px-5">
                    <a href="https://app.attempo.cl/registro" className="inline-block min-h-[44px] leading-[44px] text-xs font-bold text-[#6C5CE4] border border-[#6C5CE4] px-5 rounded-xl hover:bg-[#6C5CE4] hover:text-white transition-colors cursor-pointer">
                      Empieza gratis
                    </a>
                  </td>
                  <td className="text-center py-4 px-5 bg-[#6C5CE4]/5 border-x border-[#6C5CE4]/10">
                    <a href="https://app.attempo.cl/registro" className="inline-block min-h-[44px] leading-[44px] text-xs font-bold bg-[#6C5CE4] text-white px-5 rounded-xl hover:bg-[#5b4dd0] transition-colors cursor-pointer">
                      Empieza gratis
                    </a>
                  </td>
                  <td className="text-center py-4 px-5">
                    <a href="/contacto" className="inline-block min-h-[44px] leading-[44px] text-xs font-bold text-[#6C5CE4] border border-[#6C5CE4] px-5 rounded-xl hover:bg-[#6C5CE4] hover:text-white transition-colors cursor-pointer">
                      Contactar
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </m.div>
        </m.div>
      </section>

      {/* ── Para equipos ────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#6C5CE4]">
        <m.div
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}
        >
          <m.div variants={fadeUp} className="flex-1 text-center md:text-left">
            <p className="text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">Para equipos y centros</p>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              ¿Tienes un equipo<br />o un centro médico?
            </h2>
            <p className="text-purple-200 text-lg mb-8 leading-relaxed">
              Plan multi-profesional con gestión centralizada, facturación del centro y soporte dedicado. Cuéntanos tu caso y armamos una propuesta a medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="/contacto" className="inline-flex items-center justify-center min-h-[48px] bg-white text-[#6C5CE4] font-bold text-sm px-7 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer">
                Hablar con el equipo →
              </a>
              <a href="mailto:contacto@attempo.cl" className="inline-flex items-center justify-center min-h-[48px] border border-white/30 text-white font-medium text-sm px-7 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                contacto@attempo.cl
              </a>
            </div>
          </m.div>
          <m.div variants={fadeUp} className="grid grid-cols-2 gap-3 flex-shrink-0">
            {["Centros médicos", "Clínicas dentales", "Salud mental", "Bienestar y spa"].map((label) => (
              <div key={label} className="bg-white/10 rounded-2xl p-5 text-center w-36">
                <BuildingIcon />
                <p className="text-white text-xs font-semibold mt-2 leading-tight">{label}</p>
              </div>
            ))}
          </m.div>
        </m.div>
      </section>

      {/* ── Garantía ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <m.div
          className="max-w-3xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}
        >
          <m.div variants={fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6C5CE4]/10 rounded-2xl mb-4">
              <ShieldIcon />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Sin riesgos. Empieza gratis.</h2>
            <p className="text-gray-500">12 días de prueba en cualquier plan. Sin tarjeta. Si no es para ti, no pagas nada.</p>
          </m.div>
          <m.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: <ZapIcon />, title: "Listo en 5 minutos", desc: "Configura tu perfil y empieza a recibir citas en menos de 5 minutos." },
              { icon: <ChatIcon />, title: "Soporte en español", desc: "Equipo chileno disponible por chat. Una persona real, no un bot." },
              { icon: <UnlockIcon />, title: "Sin permanencia", desc: "Cancela cuando quieras. Sin letras chicas ni compromisos forzados." },
            ].map((item) => (
              <m.div key={item.title} variants={fadeUp} className="bg-[#f5f3ff] rounded-2xl p-6">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </m.div>
            ))}
          </m.div>
        </m.div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <m.div
          className="max-w-2xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}
        >
          <m.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
            Preguntas frecuentes
          </m.h2>
          <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
            {faqs.map((faq, i) => (
              <m.div key={i} variants={fadeUp}>
                <button
                  onClick={() => setFaqAbierta(faqAbierta === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 px-6 text-left gap-4 cursor-pointer hover:bg-gray-50 transition-colors min-h-[56px]"
                >
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <ChevronIcon open={faqAbierta === i} />
                </button>
                <AnimatePresence>
                  {faqAbierta === i && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            ))}
          </div>
        </m.div>
      </section>

      {/* ── CTA final ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <m.div
          className="max-w-xl mx-auto text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}
        >
          <m.h2 variants={fadeUp} className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">¿Listo para empezar?</m.h2>
          <m.p variants={fadeUp} className="text-gray-500 mb-8">12 días gratis. Sin tarjeta. Sin letra chica.</m.p>
          <m.a
            variants={fadeUp}
            href="https://app.attempo.cl/registro"
            className="inline-flex items-center justify-center min-h-[52px] bg-[#6C5CE4] text-white font-bold text-base px-10 rounded-xl hover:bg-[#5b4dd0] transition-colors cursor-pointer shadow-lg shadow-purple-200"
          >
            Crear cuenta gratis →
          </m.a>
        </m.div>
      </section>

    </div>
  )
}
