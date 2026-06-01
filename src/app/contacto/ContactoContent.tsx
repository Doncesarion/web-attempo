"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { sendContactEmail, type ContactFormData } from "./actions"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const asuntos = [
  "Quiero conocer attempo",
  "Soporte técnico",
  "Tengo un negocio o centro clínico",
  "Alianzas comerciales",
  "Otro",
]

const infoCards = [
  {
    icon: "📧",
    title: "Email",
    value: "contacto@attempo.cl",
    href: "mailto:contacto@attempo.cl",
  },
  {
    icon: "🕐",
    title: "Horario de atención",
    value: "Lun – Vie, 9:00 – 18:00",
    href: null,
  },
  {
    icon: "⚡",
    title: "Tiempo de respuesta",
    value: "Menos de 24 horas hábiles",
    href: null,
  },
]

export default function ContactoContent() {
  const [form, setForm] = useState<ContactFormData>({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    asunto: "",
    mensaje: "",
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.asunto || !form.mensaje) {
      setError("Por favor completa todos los campos.")
      return
    }
    setSending(true)
    try {
      await sendContactEmail(form)
      setSent(true)
    } catch {
      setError("Ocurrió un error al enviar. Escríbenos a contacto@attempo.cl")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-28 px-4 bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(108,92,228,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
          }}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center relative"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block bg-[#6C5CE4]/10 text-[#6C5CE4] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            Contacto
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-5 leading-tight"
          >
            ¿En qué podemos<br />
            <span className="text-[#6C5CE4]">ayudarte?</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-500 max-w-xl mx-auto">
            Cuéntanos tu consulta y te respondemos en menos de 24 horas hábiles.
          </motion.p>
        </motion.div>
      </section>

      {/* Contenido principal */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">

          {/* Left: info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Estamos para ayudarte</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sea una duda, un problema técnico o que quieras conocer attempo — escríbenos y te atendemos rápido.
              </p>
            </motion.div>

            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <div className="w-10 h-10 bg-[#6C5CE4]/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{card.title}</p>
                  {card.href ? (
                    <a href={card.href} className="text-sm font-medium text-[#6C5CE4] hover:underline">
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-700">{card.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="bg-[#6C5CE4] rounded-2xl p-5 text-white">
              <p className="font-semibold mb-1">¿Prefieres hablar ahora?</p>
              <p className="text-purple-200 text-sm mb-4">Revisa nuestras preguntas frecuentes — puede que tu respuesta ya esté ahí.</p>
              <a
                href="/faq"
                className="inline-block bg-white text-[#6C5CE4] text-sm font-bold px-4 py-2 rounded-xl hover:bg-purple-50 transition-colors"
              >
                Ver preguntas frecuentes →
              </a>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                      ✅
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">¡Mensaje enviado!</h3>
                    <p className="text-gray-500 mb-6">
                      Gracias por escribirnos, <strong className="text-gray-700">{form.nombre.split(" ")[0]}</strong>. Te responderemos a la brevedad en <strong className="text-gray-700">{form.email}</strong>.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ nombre: "", email: "", telefono: "", empresa: "", asunto: "", mensaje: "" }) }}
                      className="text-sm text-[#6C5CE4] hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nombre completo
                        </label>
                        <input
                          name="nombre"
                          value={form.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C5CE4]/40 focus:border-[#6C5CE4] transition-all placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email de contacto
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C5CE4]/40 focus:border-[#6C5CE4] transition-all placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Teléfono
                        </label>
                        <input
                          name="telefono"
                          type="tel"
                          value={form.telefono}
                          onChange={handleChange}
                          placeholder="+56 9 1234 5678"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C5CE4]/40 focus:border-[#6C5CE4] transition-all placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Empresa
                        </label>
                        <input
                          name="empresa"
                          value={form.empresa}
                          onChange={handleChange}
                          placeholder="Nombre de tu negocio"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C5CE4]/40 focus:border-[#6C5CE4] transition-all placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Asunto
                      </label>
                      <select
                        name="asunto"
                        value={form.asunto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C5CE4]/40 focus:border-[#6C5CE4] transition-all text-gray-700 bg-white"
                      >
                        <option value="">Selecciona un asunto...</option>
                        {asuntos.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mensaje
                      </label>
                      <textarea
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C5CE4]/40 focus:border-[#6C5CE4] transition-all placeholder-gray-400 resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm bg-red-50 px-4 py-2.5 rounded-xl border border-red-100">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3.5 bg-[#6C5CE4] hover:bg-[#4F46E5] disabled:opacity-60 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#6C5CE4]/25 text-sm"
                    >
                      {sending ? "Enviando..." : "Enviar mensaje →"}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      También puedes escribirnos directo a{" "}
                      <a href="mailto:contacto@attempo.cl" className="text-[#6C5CE4] hover:underline">
                        contacto@attempo.cl
                      </a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
