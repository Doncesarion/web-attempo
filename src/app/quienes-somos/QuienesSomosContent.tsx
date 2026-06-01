"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const valores = [
  { icon: "🎯", title: "Simplicidad", desc: "Sin curvas de aprendizaje. La plataforma está lista para usarse en menos de 5 minutos." },
  { icon: "🤝", title: "Cercanía", desc: "Soporte humano en español. Construido en Chile, pensado para la realidad chilena." },
  { icon: "🔒", title: "Confianza", desc: "Datos protegidos y pagos seguros con los mismos estándares de la banca en Chile." },
  { icon: "🚀", title: "Innovación", desc: "IA y automatización que trabajan para ti, liberando tu tiempo para lo que importa." },
]

const cambios = [
  { before: "📱 WhatsApps sin responder", after: "🤖 Chatbot atiende 24/7" },
  { before: "📋 Agenda en Excel o papel", after: "📅 Agenda digital en tiempo real" },
  { before: "💸 Cobros pendientes", after: "💳 Pago al reservar con Webpay" },
  { before: "⏰ Inasistencias sin aviso", after: "🔔 Recordatorios automáticos" },
]

export default function QuienesSomosContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-28 px-4 bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(108,92,228,0.11) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
          }}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block bg-[#6C5CE4]/10 text-[#6C5CE4] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            Quiénes somos
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Nacimos para simplificar<br />
            <span className="text-[#6C5CE4]">la agenda de Chile</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos un equipo chileno que construyó la herramienta que los profesionales de salud y servicios necesitaban y no encontraban.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mt-10 text-sm text-gray-500"
          >
            <span className="flex items-center gap-1.5">📍 Santiago, Chile</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="flex items-center gap-1.5">🗓 Desde 2025</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="flex items-center gap-1.5">🇨🇱 Hecho para Chile</span>
          </motion.div>
        </motion.div>
      </section>

      {/* El origen */}
      <section className="py-24 px-4 bg-white">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: story */}
          <motion.div variants={fadeUp}>
            <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">El origen</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Todo partió de una frustración real</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Vimos cómo psicólogos, nutricionistas, médicos y otros profesionales dedicaban horas de su día a responder WhatsApps, coordinar horarios y perseguir cobros pendientes. Tiempo valioso que podría estar con sus pacientes.
              </p>
              <p>
                Las herramientas que existían no estaban pensadas para Chile: sin Webpay, sin boleta de honorarios, sin WhatsApp nativo, sin soporte en español.
              </p>
              <blockquote className="border-l-4 border-[#6C5CE4] pl-5 py-3 bg-purple-50/60 rounded-r-xl my-6">
                <p className="text-[#6C5CE4] font-medium italic">"Si no lo usaríamos nosotros mismos, no lo lanzamos."</p>
                <p className="text-sm text-gray-400 mt-1">El principio que guía cada decisión en attempo</p>
              </blockquote>
              <p>
                Construimos attempo desde cero con una premisa simple: resolver el problema real de los profesionales chilenos con tecnología accesible y soporte cercano.
              </p>
            </div>
          </motion.div>

          {/* Right: before/after visual */}
          <motion.div variants={fadeUp} className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">El cambio que hacemos</p>
            {cambios.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                className="flex items-center gap-3"
              >
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500">
                  {item.before}
                </div>
                <span className="text-[#6C5CE4] font-bold text-lg flex-shrink-0">→</span>
                <div className="flex-1 bg-[#6C5CE4]/5 border border-[#6C5CE4]/20 rounded-xl px-4 py-3 text-sm text-[#6C5CE4] font-medium">
                  {item.after}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Misión y visión */}
      <section className="py-24 px-4 bg-gray-50">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">Lo que nos mueve</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Misión y visión</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-[#6C5CE4]/10 rounded-2xl flex items-center justify-center text-2xl mb-5">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Devolver el tiempo a los profesionales para que puedan enfocarse en lo que más importa: su trabajo y las personas que atienden.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#6C5CE4] rounded-3xl p-8 shadow-lg shadow-[#6C5CE4]/20"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mb-5">
                🌎
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Visión</h3>
              <p className="text-purple-100 leading-relaxed">
                Ser la plataforma de agendamiento de referencia para profesionales de salud y servicios en Latinoamérica.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Valores */}
      <section className="py-24 px-4 bg-white">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider">Cómo trabajamos</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Nuestros valores</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Los principios que guían cada decisión de producto, diseño y atención.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#6C5CE4]/30 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-[#6C5CE4] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ¿Listo para trabajar menos?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-purple-200 mb-10 text-xl">
            Únete a los profesionales chilenos que ya usan attempo.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
