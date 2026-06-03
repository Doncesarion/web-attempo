"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

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

function formatCLP(n: number) {
  return "$" + n.toLocaleString("es-CL")
}

export default function PreciosContent() {
  const [ciclo, setCiclo] = useState<"mensual" | "anual">("mensual")

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#6C5CE4] text-sm font-semibold uppercase tracking-widest mb-4">
            Precios
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Planes para cada necesidad
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-500 mb-8">
            Sin sorpresas. Escala cuando lo necesites.
          </motion.p>

          {/* Badge prueba gratis */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#6C5CE4]/10 text-[#6C5CE4] text-sm font-semibold px-4 py-2 rounded-full mb-10">
            <span>🎁</span> 12 días de prueba gratis — sin tarjeta de crédito
          </motion.div>

          {/* Toggle */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${ciclo === "mensual" ? "text-gray-900" : "text-gray-400"}`}>
              Mensual
            </span>
            <button
              onClick={() => setCiclo(ciclo === "mensual" ? "anual" : "mensual")}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none ${
                ciclo === "anual" ? "bg-[#6C5CE4]" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
                  ciclo === "anual" ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-semibold ${ciclo === "anual" ? "text-gray-900" : "text-gray-400"}`}>
              Anual
            </span>
            {ciclo === "anual" && (
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                17% descuento
              </span>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="pb-24 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {planes.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              className={`relative rounded-2xl flex flex-col ${
                plan.popular
                  ? "bg-[#6C5CE4] text-white shadow-2xl shadow-purple-300/40 scale-105"
                  : "bg-white border border-purple-100 shadow-sm"
              }`}
            >
              {/* Badge popular */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-[#6C5CE4] text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    ⭐ Más popular
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Nombre y descripción */}
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.popular ? "text-purple-200" : "text-[#6C5CE4]"}`}>
                  {plan.nombre}
                </p>
                <p className={`text-sm mb-6 ${plan.popular ? "text-purple-200" : "text-gray-500"}`}>
                  {plan.desc}
                </p>

                {/* Precio */}
                <div className="mb-2">
                  <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {formatCLP(ciclo === "mensual" ? plan.mensual : Math.round(plan.anual / 12))}
                  </span>
                  <span className={`text-sm ml-1 ${plan.popular ? "text-purple-200" : "text-gray-400"}`}>
                    /mes
                  </span>
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

                {/* Separador */}
                <div className={`my-6 border-t ${plan.popular ? "border-white/20" : "border-purple-100"}`} />

                {/* Features */}
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

                {/* CTA */}
                <a
                  href={plan.href}
                  className={`block text-center text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-200 ${
                    plan.popular
                      ? "bg-white text-[#6C5CE4] hover:bg-purple-50"
                      : "bg-[#6C5CE4] text-white hover:bg-[#5b4dd0]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota IVA */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Todos los precios en pesos chilenos. Valores no incluyen IVA.
        </p>
      </section>

      {/* Garantía */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-5xl mb-6">🛡️</motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-4">
            Sin riesgos. Empieza gratis.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-lg mb-10">
            12 días de prueba gratis en cualquier plan. Sin tarjeta de crédito.<br />
            Si no es para ti, no pagas nada.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { icon: "⚡", title: "Listo en 5 minutos", desc: "Configura tu perfil y empieza a recibir citas en menos de 5 minutos." },
              { icon: "💬", title: "Soporte en español", desc: "Equipo chileno disponible por chat para ayudarte en cada paso." },
              { icon: "🔓", title: "Sin permanencia", desc: "Cancela cuando quieras. Sin letras chicas ni compromisos forzados." },
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

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 text-center mb-12">
            Preguntas frecuentes
          </motion.h2>

          {[
            {
              q: "¿Qué pasa después de los 12 días de prueba?",
              a: "Al terminar la prueba te pediremos que elijas un plan. Si no lo haces, tu cuenta pasa al plan Básico con funciones limitadas.",
            },
            {
              q: "¿Puedo cambiar de plan en cualquier momento?",
              a: "Sí. Puedes subir o bajar de plan cuando quieras. Los cambios aplican al siguiente ciclo de facturación.",
            },
            {
              q: "¿Los precios incluyen IVA?",
              a: "No. Los precios mostrados son antes de IVA (19%). El total con IVA se muestra al momento de suscribirte.",
            },
            {
              q: "¿Qué es la UF y por qué cotizan en UF?",
              a: "La UF (Unidad de Fomento) es una unidad de cuenta reajustable que se actualiza diariamente. Usamos UF para mantener precios estables en el tiempo, como hace la mayoría de los servicios profesionales en Chile.",
            },
          ].map((faq) => (
            <motion.div key={faq.q} variants={fadeUp} className="border-b border-purple-100 py-6">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 bg-[#6C5CE4]">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-4">
            ¿Listo para empezar?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-purple-200 text-lg mb-8">
            12 días gratis. Sin tarjeta. Sin letra chica.
          </motion.p>
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
