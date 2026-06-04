"use client"

import { m } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const valores = [
  {
    num: "01",
    icon: "🎯",
    title: "Simplicidad",
    desc: "Sin curvas de aprendizaje. La plataforma está lista para usarse en menos de 5 minutos. Si necesitas un manual, algo está mal.",
  },
  {
    num: "02",
    icon: "🤝",
    title: "Cercanía",
    desc: "Soporte humano en español. Construido en Chile, pensado para la realidad chilena. No somos un ticket en una cola.",
  },
  {
    num: "03",
    icon: "🔒",
    title: "Confianza",
    desc: "Datos protegidos y pagos seguros con los mismos estándares de la banca en Chile. Tu información y la de tus pacientes, segura.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Innovación",
    desc: "IA y automatización que trabajan para ti, liberando tu tiempo. La tecnología debe simplificar, nunca complicar.",
  },
]

const cambios = [
  { before: "WhatsApps sin responder a toda hora", after: "Chatbot atiende y agenda 24/7" },
  { before: "Agenda en Excel o libreta de papel", after: "Agenda digital en tiempo real" },
  { before: "Cobros pendientes y pagos que no llegan", after: "Pago al reservar con Webpay" },
  { before: "Inasistencias sin previo aviso", after: "Recordatorios automáticos previos" },
]

export default function QuienesSomosContent() {
  return (
    <div className="flex flex-col">

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-32 px-4 bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe] overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(108,92,228,0.11) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
          }}
        />
        {/* Glow blob */}
        <m.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6C5CE4] rounded-full blur-3xl pointer-events-none"
        />

        <m.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative"
        >
          <m.span
            variants={fadeUp}
            className="inline-block bg-[#6C5CE4]/10 text-[#6C5CE4] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
          >
            Quiénes somos
          </m.span>
          <m.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 lg:mb-8 leading-[1.05]"
          >
            Nacimos para que los<br />
            profesionales puedan<br />
            <span className="text-[#6C5CE4]">enfocarse en lo suyo</span>
          </m.h1>
          <m.p variants={fadeUp} className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Somos un equipo chileno que construyó la herramienta que los profesionales de salud y servicios necesitaban y no encontraban.
          </m.p>

          {/* Data chips */}
          <m.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 mt-12"
          >
            {[
              { icon: "📍", label: "Santiago, Chile" },
              { icon: "🗓", label: "Desde 2025" },
              { icon: "🇨🇱", label: "Hecho para Chile" },
              { icon: "💜", label: "Soporte en español" },
            ].map((chip) => (
              <span
                key={chip.label}
                className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm text-gray-600 text-sm font-medium px-4 py-2 rounded-full"
              >
                {chip.icon} {chip.label}
              </span>
            ))}
          </m.div>
        </m.div>
      </section>

      {/* ── 2. ORIGEN ───────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left: story */}
          <m.div variants={fadeUp}>
            <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">El origen</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-7 leading-tight">
              Todo partió de<br />una frustración real
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-[1.05rem]">
              <p>
                Vimos cómo psicólogos, nutricionistas, médicos y otros profesionales dedicaban horas de su día a responder WhatsApps, coordinar horarios y perseguir cobros. Tiempo valioso que podría estar con sus pacientes.
              </p>
              <p>
                Las herramientas que existían no estaban pensadas para Chile: sin Webpay, sin boleta de honorarios, sin WhatsApp nativo, sin soporte en español.
              </p>
              <p>
                Decidimos construir attempo desde cero, con una premisa simple:
              </p>
            </div>
            <div className="mt-7 bg-gradient-to-br from-[#6C5CE4] to-[#4F46E5] rounded-2xl p-6 shadow-lg shadow-[#6C5CE4]/20 text-center">
              <p className="text-white text-xl font-semibold leading-snug">
                "Si no lo usaríamos nosotros mismos, no lo lanzamos."
              </p>
              <p className="text-purple-200 text-sm mt-2">
                El principio que guía cada decisión en attempo
              </p>
            </div>
          </m.div>

          {/* Right: comparison card */}
          <m.div variants={fadeUp}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">El problema que resolvemos</p>
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
              {/* Header row */}
              <div className="grid grid-cols-2">
                <div className="bg-gray-100 px-4 py-3 text-center">
                  <span className="text-xs font-bold tracking-wide text-gray-400">Sin attempo</span>
                </div>
                <div className="bg-[#6C5CE4] px-4 py-3 text-center">
                  <span className="text-xs font-bold tracking-wide text-white">Con attempo</span>
                </div>
              </div>
              {/* Rows */}
              {cambios.map((item, i) => (
                <div key={i} className="grid grid-cols-2 border-t border-gray-100">
                  <div className="bg-white px-3 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm text-gray-500 flex items-start gap-1.5">
                    <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                    <span>{item.before}</span>
                  </div>
                  <div className="bg-[#6C5CE4]/5 px-3 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm text-[#6C5CE4] font-medium flex items-start gap-1.5">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>{item.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </m.div>
      </section>

      {/* ── 3. MISIÓN — sección oscura ──────────────────────── */}
      <section className="py-28 px-4 bg-gray-950 relative overflow-hidden">
        {/* Decorative large quote */}
        <div className="absolute top-4 left-8 text-[220px] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
          "
        </div>
        {/* Purple glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6C5CE4]/20 rounded-full blur-3xl pointer-events-none" />

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <m.span
            variants={fadeUp}
            className="inline-block bg-[#6C5CE4]/20 text-[#8B7FF0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
          >
            Nuestra misión
          </m.span>
          <m.p
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8"
          >
            Devolver el tiempo a los profesionales para que puedan enfocarse en lo que más importa.
          </m.p>
          <m.p variants={fadeUp} className="text-2xl font-light text-[#8B7FF0]">
            Su trabajo. Sus pacientes. Su vida.
          </m.p>

          <m.div
            variants={fadeUp}
            className="mt-14 pt-14 border-t border-white/10"
          >
            <p className="text-gray-500 text-sm uppercase tracking-widest font-medium mb-6">Nuestra visión</p>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Ser la plataforma de agendamiento de referencia para profesionales de salud y servicios en Latinoamérica.
            </p>
          </m.div>
        </m.div>
      </section>

      {/* ── 4. VALORES ──────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#f8f7ff]">
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto"
        >
          <m.div variants={fadeUp} className="mb-14">
            <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">Cómo trabajamos</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Nuestros valores</h2>
          </m.div>

          <div className="space-y-4">
            {valores.map((v) => (
              <m.div
                key={v.num}
                variants={fadeUp}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-[#6C5CE4]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center gap-5 px-6 py-6">
                  <span className="text-3xl font-black text-[#6C5CE4]/15 group-hover:text-[#6C5CE4]/30 transition-colors w-9 text-center flex-shrink-0">
                    {v.num}
                  </span>
                  <span className="text-2xl flex-shrink-0 hidden sm:block">{v.icon}</span>
                  <p className="font-bold text-gray-900 text-base group-hover:text-[#6C5CE4] transition-colors w-28 flex-shrink-0">
                    {v.title}
                  </p>
                  <div className="hidden sm:block h-7 border-l border-gray-100 flex-shrink-0" />
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{v.desc}</p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </section>

      {/* ── 5. CTA ──────────────────────────────────────────── */}
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
            ¿Listo para trabajar menos?
          </m.h2>
          <m.p variants={fadeUp} className="text-purple-200 mb-10 text-xl">
            Únete a los profesionales chilenos que ya usan attempo.
          </m.p>
          <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/precios"
              className="px-8 py-4 bg-white text-[#6C5CE4] font-bold rounded-xl hover:bg-purple-50 transition-all text-lg shadow-lg hover:-translate-y-0.5"
            >
              Crear cuenta gratis
            </a>
            <a
              href="/contacto"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-lg border border-white/20"
            >
              Hablar con nosotros
            </a>
          </m.div>
        </m.div>
      </section>
    </div>
  )
}
