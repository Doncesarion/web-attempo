"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ─── Datos de planes ────────────────────────────────────────────────
const planes = [
  {
    id: "basico",
    nombre: "Básico",
    uf: "0,6",
    mensual: 29020,
    anual: 289039,
    ufAnual: "6",
    desc: "Para profesionales que quieren digitalizar su agenda desde el primer día.",
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
    id: "profesional",
    nombre: "Profesional",
    uf: "1",
    mensual: 48367,
    anual: 483670,
    ufAnual: "10",
    desc: "Para profesionales consolidados que necesitan más herramientas de gestión.",
    popular: true,
    cta: "Empieza gratis",
    href: "https://app.attempo.cl/registro",
    nota: null,
    features: [
      "Todo lo del plan Básico",
      "Sin costo en transferencias",
      "Transcriptor IA de consultas",
      "Integración con FONASA",
      "Emisión de boletas electrónicas",
      "Pagos en dólares",
      "Vitrina de talleres y contenido",
    ],
  },
  {
    id: "full",
    nombre: "Full IA",
    uf: "3",
    mensual: 145101,
    anual: 1451010,
    ufAnual: "30",
    desc: "Para centros y clínicas que quieren automatización total con inteligencia artificial.",
    popular: false,
    cta: "Más información",
    href: "/contacto",
    nota: null,
    features: [
      "Todo lo del plan Profesional",
      "Chatbot IA en WhatsApp 24/7",
      "Cobro automático por WhatsApp",
      "Recuperación de citas por IA",
      "WhatsApps de confirmación automáticos",
      "WhatsApp de evaluación post-cita",
      "Reportes avanzados de tu consulta",
      "Personalización de colores del perfil",
      "Correos masivos ilimitados",
      "Recetas médicas electrónicas",
      "Soporte prioritario (chat, correo y WhatsApp)",
    ],
  },
]

// ─── Tabla comparativa ───────────────────────────────────────────────
type CeldaVal = boolean | string
const categorias: { nombre: string; features: { label: string; basico: CeldaVal; pro: CeldaVal; full: CeldaVal }[] }[] = [
  {
    nombre: "Agenda y gestión",
    features: [
      { label: "Perfil de agendamiento online", basico: true, pro: true, full: true },
      { label: "Agenda y calendario digital", basico: true, pro: true, full: true },
      { label: "Servicios ilimitados", basico: true, pro: true, full: true },
      { label: "Recordatorios por correo y WhatsApp", basico: true, pro: true, full: true },
      { label: "Fichas clínicas", basico: true, pro: true, full: true },
      { label: "Marcar citas como pagadas", basico: true, pro: true, full: true },
      { label: "Evaluaciones en tu perfil", basico: true, pro: true, full: true },
      { label: "Reportes avanzados", basico: false, pro: false, full: true },
      { label: "Personalización de colores del perfil", basico: false, pro: false, full: true },
    ],
  },
  {
    nombre: "Pagos y facturación",
    features: [
      { label: "Pagos por transferencia y WebPay", basico: true, pro: true, full: true },
      { label: "Costo en transferencias", basico: "1%", pro: "Sin costo", full: "Sin costo" },
      { label: "Comisión débito (WebPay)", basico: "1,49% + IVA", pro: "1,49% + IVA", full: "1,49% + IVA" },
      { label: "Comisión crédito (WebPay)", basico: "2,95% + IVA", pro: "2,95% + IVA", full: "2,95% + IVA" },
      { label: "Emisión de boletas electrónicas", basico: false, pro: true, full: true },
      { label: "Pagos en dólares", basico: false, pro: true, full: true },
      { label: "Cobro automático por WhatsApp", basico: false, pro: false, full: true },
    ],
  },
  {
    nombre: "Contenido y marketing",
    features: [
      { label: "Vitrina de talleres y contenido", basico: false, pro: true, full: true },
      { label: "Integración con FONASA", basico: false, pro: true, full: true },
      { label: "Correos masivos ilimitados", basico: false, pro: false, full: true },
      { label: "Recetas médicas electrónicas", basico: false, pro: false, full: true },
    ],
  },
  {
    nombre: "Inteligencia artificial",
    features: [
      { label: "Transcriptor IA de consultas", basico: false, pro: true, full: true },
      { label: "Chatbot IA en WhatsApp 24/7", basico: false, pro: false, full: true },
      { label: "Recuperación de citas por IA", basico: false, pro: false, full: true },
      { label: "WhatsApps de confirmación automáticos", basico: false, pro: false, full: true },
      { label: "WhatsApp de evaluación post-cita", basico: false, pro: false, full: true },
    ],
  },
  {
    nombre: "Soporte",
    features: [
      { label: "Soporte vía chat", basico: true, pro: true, full: true },
      { label: "Soporte vía correo y WhatsApp", basico: false, pro: false, full: true },
    ],
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "¿Cómo funciona el cobro?",
    a: "Si pagas mensual, el cobro es automático cada mes. Si eliges anual, pagas una sola vez y equivale a 10 meses del plan (ahorras 2 meses). Siempre recibirás un correo antes de cada cobro. Puedes cancelar en cualquier momento.",
  },
  {
    q: "¿Puedo pagar el plan anual en cuotas?",
    a: "Sí. Tenemos convenio de hasta 12 cuotas sin interés con tarjeta de crédito de cualquier banco. Puedes darte de baja en cualquier momento.",
  },
  {
    q: "¿El precio de los planes es fijo?",
    a: "Los planes están en UF, que varía diariamente con la inflación. Si pagas anual, fijas el precio por 12 meses y te proteges de los reajustes.",
  },
  {
    q: "¿Qué pasa cuando termina la prueba gratis?",
    a: "Al terminar los 12 días, te pediremos que elijas un plan. Si no lo haces, tu cuenta queda en modo limitado. No se te cobra nada automáticamente sin que lo confirmes.",
  },
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí. Puedes subir o bajar de plan cuando quieras. Los cambios aplican al siguiente ciclo de facturación.",
  },
  {
    q: "¿Hay comisión en los pagos con tarjeta?",
    a: "Sí. Los pagos con WebPay tienen una comisión de 1,49% + IVA para tarjeta de débito y 2,95% + IVA para crédito. Esto aplica en todos los planes y lo paga el profesional.",
  },
  {
    q: "¿Los precios incluyen IVA?",
    a: "No. Los precios mostrados son antes de IVA (19%). El total con IVA se muestra al momento de suscribirte.",
  },
  {
    q: "¿Qué es la UF y por qué se usa en los planes?",
    a: "La UF es una unidad de cuenta reajustable que se actualiza diariamente. La usamos para mantener precios estables en el tiempo, igual que la mayoría de los servicios profesionales y arriendos en Chile.",
  },
]

function formatCLP(n: number) {
  return "$" + n.toLocaleString("es-CL")
}

function Celda({ val, popular }: { val: CeldaVal; popular?: boolean }) {
  if (val === true) return <span className={`text-lg ${popular ? "text-green-300" : "text-[#6C5CE4]"}`}>✓</span>
  if (val === false) return <span className="text-gray-300 text-lg">—</span>
  return <span className={`text-xs font-semibold ${popular ? "text-purple-200" : "text-gray-500"}`}>{val}</span>
}

export default function PreciosContent() {
  const [ciclo, setCiclo] = useState<"mensual" | "anual">("mensual")
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null)

  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-[#6C5CE4] text-sm font-semibold uppercase tracking-widest mb-4">
            Precios
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Planes para cada necesidad
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-500 mb-8">
            Sin sorpresas. Escala cuando lo necesites.
          </motion.p>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#6C5CE4]/10 text-[#6C5CE4] text-sm font-semibold px-4 py-2 rounded-full mb-10">
            <span>🎁</span> 12 días de prueba gratis — sin tarjeta de crédito
          </motion.div>

          {/* Toggle */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${ciclo === "mensual" ? "text-gray-900" : "text-gray-400"}`}>Mensual</span>
            <button
              onClick={() => setCiclo(ciclo === "mensual" ? "anual" : "mensual")}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none ${ciclo === "anual" ? "bg-[#6C5CE4]" : "bg-gray-300"}`}
            >
              <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${ciclo === "anual" ? "translate-x-8" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm font-semibold ${ciclo === "anual" ? "text-gray-900" : "text-gray-400"}`}>Anual</span>
            {ciclo === "anual" && (
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">17% descuento</span>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Cards ────────────────────────────────────────── */}
      <section className="pb-16 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          initial="hidden" animate="visible" variants={stagger}
        >
          {planes.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              className={`relative rounded-2xl flex flex-col ${plan.popular
                ? "bg-[#6C5CE4] text-white shadow-2xl shadow-purple-300/40 scale-105"
                : "bg-white border border-purple-100 shadow-sm"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-[#6C5CE4] text-xs font-bold px-4 py-1.5 rounded-full shadow-md">⭐ Más popular</span>
                </div>
              )}
              <div className="p-8 flex flex-col flex-1">
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.popular ? "text-purple-200" : "text-[#6C5CE4]"}`}>{plan.nombre}</p>
                <p className={`text-sm mb-6 ${plan.popular ? "text-purple-200" : "text-gray-500"}`}>{plan.desc}</p>

                <div className="mb-1">
                  <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {formatCLP(ciclo === "mensual" ? plan.mensual : Math.round(plan.anual / 12))}
                  </span>
                  <span className={`text-sm ml-1 ${plan.popular ? "text-purple-200" : "text-gray-400"}`}>/mes</span>
                </div>
                <p className={`text-xs mb-1 ${plan.popular ? "text-purple-200" : "text-gray-400"}`}>
                  {ciclo === "mensual"
                    ? `${plan.uf} UF + IVA /mes`
                    : `${plan.ufAnual} UF + IVA /año — ${formatCLP(plan.anual)}`}
                </p>
                {ciclo === "anual" && (
                  <p className={`text-xs font-semibold mb-1 ${plan.popular ? "text-green-300" : "text-green-600"}`}>
                    Ahorras {formatCLP(plan.mensual * 12 - plan.anual)} al año
                  </p>
                )}

                <div className={`my-6 border-t ${plan.popular ? "border-white/20" : "border-purple-100"}`} />

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 text-sm ${plan.popular ? "text-green-300" : "text-[#6C5CE4]"}`}>✓</span>
                      <span className={`text-sm ${plan.popular ? "text-purple-100" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                  {plan.nota && (
                    <li className="flex items-start gap-2.5 opacity-60">
                      <span className="mt-0.5 text-sm text-gray-400">·</span>
                      <span className="text-sm text-gray-400">{plan.nota}</span>
                    </li>
                  )}
                </ul>

                <a
                  href={plan.href}
                  className={`block text-center text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-200 ${plan.popular
                    ? "bg-white text-[#6C5CE4] hover:bg-purple-50"
                    : "bg-[#6C5CE4] text-white hover:bg-[#5b4dd0]"}`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-center text-xs text-gray-400 mt-8">Todos los precios en pesos chilenos. Valores no incluyen IVA.</p>
      </section>

      {/* ── Tabla comparativa ────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 text-center mb-2">
            Compara los planes
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-center mb-12">
            Todo lo que incluye cada plan, sin letra chica.
          </motion.p>

          <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-purple-100 shadow-sm">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-purple-100">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium w-1/2">Característica</th>
                  <th className="text-center py-4 px-4 text-gray-700 font-bold">Básico</th>
                  <th className="text-center py-4 px-4 bg-[#6C5CE4] text-white font-bold rounded-t-xl">Profesional</th>
                  <th className="text-center py-4 px-4 text-gray-700 font-bold">Full IA</th>
                </tr>
              </thead>
              <tbody>
                {categorias.map((cat, ci) => (
                  <>
                    <tr key={`cat-${ci}`} className="bg-purple-50">
                      <td colSpan={4} className="py-3 px-6 text-xs font-bold text-[#6C5CE4] uppercase tracking-widest">
                        {cat.nombre}
                      </td>
                    </tr>
                    {cat.features.map((f, fi) => (
                      <tr key={`f-${ci}-${fi}`} className="border-t border-purple-50 hover:bg-purple-50/30 transition-colors">
                        <td className="py-3.5 px-6 text-gray-600">{f.label}</td>
                        <td className="text-center py-3.5 px-4"><Celda val={f.basico} /></td>
                        <td className="text-center py-3.5 px-4 bg-[#6C5CE4]/5"><Celda val={f.pro} popular /></td>
                        <td className="text-center py-3.5 px-4"><Celda val={f.full} /></td>
                      </tr>
                    ))}
                  </>
                ))}
                {/* Fila precio */}
                <tr className="border-t-2 border-purple-200 bg-purple-50">
                  <td className="py-4 px-6 font-bold text-gray-900">Precio mensual</td>
                  <td className="text-center py-4 px-4 font-bold text-gray-700">{formatCLP(29020)}</td>
                  <td className="text-center py-4 px-4 bg-[#6C5CE4] text-white font-bold">{formatCLP(48367)}</td>
                  <td className="text-center py-4 px-4 font-bold text-gray-700">{formatCLP(145101)}</td>
                </tr>
                <tr className="border-t border-purple-100 bg-purple-50">
                  <td className="py-4 px-6 text-gray-500 text-xs">UF + IVA /mes</td>
                  <td className="text-center py-4 px-4 text-xs text-gray-500">0,6 UF</td>
                  <td className="text-center py-4 px-4 bg-[#6C5CE4]/10 text-xs text-[#6C5CE4] font-semibold">1 UF</td>
                  <td className="text-center py-4 px-4 text-xs text-gray-500">3 UF</td>
                </tr>
                <tr className="border-t border-purple-100 bg-purple-50">
                  <td className="py-4 px-6 text-gray-500 text-xs"></td>
                  <td className="text-center py-4 px-4">
                    <a href="https://app.attempo.cl/registro" className="inline-block text-xs font-bold text-[#6C5CE4] border border-[#6C5CE4] px-4 py-2 rounded-lg hover:bg-[#6C5CE4] hover:text-white transition-colors">
                      Empieza gratis
                    </a>
                  </td>
                  <td className="text-center py-4 px-4 bg-[#6C5CE4]/5">
                    <a href="https://app.attempo.cl/registro" className="inline-block text-xs font-bold bg-[#6C5CE4] text-white px-4 py-2 rounded-lg hover:bg-[#5b4dd0] transition-colors">
                      Empieza gratis
                    </a>
                  </td>
                  <td className="text-center py-4 px-4">
                    <a href="/contacto" className="inline-block text-xs font-bold text-[#6C5CE4] border border-[#6C5CE4] px-4 py-2 rounded-lg hover:bg-[#6C5CE4] hover:text-white transition-colors">
                      Más información
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ¿Tienes equipo o centro? ─────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#6C5CE4] to-[#4c3abf]">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div variants={fadeUp} className="flex-1 text-center md:text-left">
              <p className="text-purple-300 text-sm font-semibold uppercase tracking-widest mb-3">Para equipos y centros</p>
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                ¿Trabajas con un equipo<br />o tienes un centro?
              </h2>
              <p className="text-purple-200 text-lg mb-8">
                Tenemos planes multi-profesional con gestión centralizada, facturación del centro y soporte dedicado. Cuéntanos tu caso y te armamos una propuesta.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="/contacto"
                  className="inline-block bg-white text-[#6C5CE4] font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  Hablar con el equipo →
                </a>
                <a
                  href="mailto:contacto@attempo.cl"
                  className="inline-block border border-white/40 text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  contacto@attempo.cl
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex-shrink-0 grid grid-cols-2 gap-4">
              {[
                { icon: "🏥", label: "Centros médicos" },
                { icon: "🦷", label: "Clínicas dentales" },
                { icon: "🧠", label: "Centros de salud mental" },
                { icon: "💆", label: "Centros de bienestar" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-white text-xs font-semibold">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Garantía ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-5xl mb-6">🛡️</motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-4">Sin riesgos. Empieza gratis.</motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-lg mb-10">
            12 días de prueba gratis en cualquier plan. Sin tarjeta de crédito.<br />Si no es para ti, no pagas nada.
          </motion.p>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { icon: "⚡", title: "Listo en 5 minutos", desc: "Configura tu perfil y empieza a recibir citas en minutos." },
              { icon: "💬", title: "Soporte en español", desc: "Equipo chileno disponible por chat para ayudarte en cada paso." },
              { icon: "🔓", title: "Sin permanencia", desc: "Cancela cuando quieras. Sin letras chicas ni compromisos." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-purple-50 rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── FAQ accordion ────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 text-center mb-12">
            Preguntas frecuentes
          </motion.h2>

          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} className="border-b border-purple-100">
              <button
                onClick={() => setFaqAbierta(faqAbierta === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-[#6C5CE4] transition-colors">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-purple-200 flex items-center justify-center text-[#6C5CE4] font-bold transition-transform duration-200 ${faqAbierta === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {faqAbierta === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA final ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#6C5CE4]">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-4">¿Listo para empezar?</motion.h2>
          <motion.p variants={fadeUp} className="text-purple-200 text-lg mb-8">12 días gratis. Sin tarjeta. Sin letra chica.</motion.p>
          <motion.a
            variants={fadeUp}
            href="https://app.attempo.cl/registro"
            className="inline-block bg-white text-[#6C5CE4] font-bold text-base px-8 py-4 rounded-xl hover:bg-purple-50 transition-colors"
          >
            Crear cuenta gratis →
          </motion.a>
        </motion.div>
      </section>

    </div>
  )
}
