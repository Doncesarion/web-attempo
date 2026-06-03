"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { especialidades } from "@/lib/especialidades"

/* ── SVG icons por especialidad ───────────────────────────────────────── */
const icons: Record<string, React.ReactNode> = {
  psicologos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7z" />
      <path d="M9 21h6M10 17v4M14 17v4" />
    </svg>
  ),
  psiquiatras: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 12.5c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5" />
      <path d="M4.5 12.5C4.5 16.64 7.86 20 12 20s7.5-3.36 7.5-7.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  ),
  "medicos-generales": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "centros-clinicos": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V8l9-6 9 6v13H3z" />
      <path d="M9 21V12h6v9" />
      <path d="M12 7v4M10 9h4" />
    </svg>
  ),
  barberias: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  ),
  derecho: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 7l4 9H3m14-9l4 9h-4" />
      <path d="M5 16h6m2 0h6" />
    </svg>
  ),
  nutricion: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a9 9 0 110 18A9 9 0 0112 2z" />
      <path d="M12 2c-2.5 2.5-3 5-3 8s.5 5.5 3 8" />
      <path d="M12 2c2.5 2.5 3 5 3 8s-.5 5.5-3 8" />
      <path d="M3 10h18" />
    </svg>
  ),
  matronas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      <circle cx="12" cy="13" r="2.5" />
    </svg>
  ),
  esteticas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a1 1 0 010 2 1 1 0 010-2zM12 19a1 1 0 010 2 1 1 0 010-2zM3 12a1 1 0 012 0 1 1 0 01-2 0zM19 12a1 1 0 012 0 1 1 0 01-2 0z" />
      <path d="M5.64 5.64a1 1 0 011.41 1.41 1 1 0 01-1.41-1.41zM16.95 16.95a1 1 0 011.41 1.41 1 1 0 01-1.41-1.41zM5.64 18.36a1 1 0 01-1.41-1.41 1 1 0 011.41 1.41zM16.95 7.05a1 1 0 01-1.41-1.41 1 1 0 011.41 1.41z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  fisioterapeutas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v6l4 4M12 12l-4 4" />
      <path d="M8 21l2-5M16 21l-2-5" />
    </svg>
  ),
  yoga: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6c0 4-3 6-6 6M12 6c0 4 3 6 6 6" />
      <path d="M6 12l-2 8M18 12l2 8" />
      <path d="M8 17h8" />
    </svg>
  ),
}

/* ── Categorías ───────────────────────────────────────────────────────── */
const categorias = [
  { id: "todas", label: "Todas" },
  { id: "salud", label: "Salud" },
  { id: "bienestar", label: "Bienestar" },
  { id: "servicios", label: "Servicios" },
]

const categoriaPor: Record<string, string> = {
  psicologos: "salud",
  psiquiatras: "salud",
  "medicos-generales": "salud",
  matronas: "salud",
  fisioterapeutas: "salud",
  "centros-clinicos": "salud",
  nutricion: "bienestar",
  yoga: "bienestar",
  esteticas: "bienestar",
  barberias: "servicios",
  derecho: "servicios",
}

/* ── Animations ───────────────────────────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94] as const
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

/* ── Main component ───────────────────────────────────────────────────── */
export default function SolucionesContent() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas")

  const filtradas =
    categoriaActiva === "todas"
      ? especialidades
      : especialidades.filter((e) => categoriaPor[e.slug] === categoriaActiva)

  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-gradient-to-b from-[#f5f3ff] to-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#6C5CE4] text-xs font-semibold uppercase tracking-widest mb-4">
            Soluciones
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5 leading-tight"
          >
            Diseñado para tu especialidad
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-gray-500 max-w-xl mx-auto">
            attempo se adapta a cualquier tipo de profesional. Menos tiempo en la agenda, más tiempo en lo que importa.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Grid de especialidades ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Filtro de categorías */}
          <div className="flex gap-2 justify-center flex-wrap mb-10">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaActiva(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  categoriaActiva === cat.id
                    ? "bg-[#6C5CE4] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-[#f5f3ff] hover:text-[#6C5CE4]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtradas.map((e) => (
                <motion.div
                  key={e.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease }}
                >
                  <Link
                    href={`/soluciones/${e.slug}`}
                    className="group flex flex-col h-full p-6 border border-gray-200 rounded-2xl hover:border-[#6C5CE4] hover:shadow-lg transition-all duration-200 cursor-pointer bg-white"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#6C5CE4]/10 text-[#6C5CE4] flex items-center justify-center mb-4 group-hover:bg-[#6C5CE4] group-hover:text-white transition-colors duration-200 flex-shrink-0">
                      <div className="w-6 h-6">
                        {icons[e.slug] ?? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                            <circle cx="12" cy="12" r="9" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <h2 className="font-semibold text-gray-900 text-base mb-2 group-hover:text-[#6C5CE4] transition-colors duration-200">
                      {e.nombre}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{e.descripcion}</p>
                    <div className="flex items-center gap-1 text-[#6C5CE4] text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Ver solución
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Beneficios comunes ────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#fafafa] border-t border-gray-100">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-[#6C5CE4] text-xs font-semibold uppercase tracking-widest mb-3">Para todas las especialidades</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Lo mismo que usan todos, adaptado a ti
            </h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                titulo: "Agenda online",
                desc: "Link propio para que tus pacientes reserven solos.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                ),
                titulo: "Recordatorios",
                desc: "Automáticos por WhatsApp, email y SMS.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                titulo: "Cobro online",
                desc: "Webpay integrado. El pago llega antes de la cita.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                titulo: "Reportes",
                desc: "Ingresos, asistencia y rendimiento en tiempo real.",
              },
            ].map((item) => (
              <motion.div
                key={item.titulo}
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE4]/10 text-[#6C5CE4] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{item.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#6C5CE4]">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white tracking-tight mb-4">
            ¿No encuentras tu especialidad?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 mb-8">
            attempo funciona para cualquier profesional que trabaje con citas. Escríbenos y te ayudamos.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://app.attempo.cl/registro"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#6C5CE4] font-semibold rounded-xl hover:bg-[#f5f3ff] transition-colors duration-200 cursor-pointer"
            >
              Probar gratis 12 días
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/15 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/25 transition-colors duration-200 cursor-pointer"
            >
              Hablar con el equipo
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}
