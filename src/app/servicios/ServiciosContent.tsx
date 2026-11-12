"use client"

import { m, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const servicios = [
  {
    num: "01",
    tag: "Desarrollo web",
    title: "Sitios rápidos que convierten visitas en clientes",
    desc: "Creamos sitios WordPress, landing pages y e-commerce optimizados para SEO, velocidad y conversión. Código limpio, diseño profesional, sin plantillas genéricas.",
    items: ["WordPress / Elementor / WooCommerce", "Landing pages de alto rendimiento", "E-commerce con Webpay y pagos online", "Seguridad, caché y optimización técnica"],
    accent: "#6C5CE4",
    bg: "from-[#6C5CE4] to-[#4834d4]",
    span: "md:col-span-2",
  },
  {
    num: "02",
    tag: "Automatización",
    title: "Procesos que corren solos",
    desc: "Conectamos tus herramientas y eliminamos el trabajo manual: reportes automáticos, flujos de onboarding, integraciones entre plataformas.",
    items: ["Integraciones con APIs y Zapier / Make", "Reportes automáticos de campañas", "Flujos de clientes y seguimiento"],
    accent: "#F59E0B",
    bg: "from-[#F59E0B] to-[#D97706]",
    span: "md:col-span-1",
  },
  {
    num: "03",
    tag: "Campañas digitales",
    title: "Pauta que rinde con datos reales",
    desc: "Administramos Google Ads y Meta Ads con foco en resultados medibles. Configuramos GA4 y dashboards para tomar decisiones con evidencia.",
    items: ["Google Ads Search y Performance Max", "Meta Ads (Facebook e Instagram)", "Analítica con GA4 y Looker Studio"],
    accent: "#3B82F6",
    bg: "from-[#3B82F6] to-[#1D4ED8]",
    span: "md:col-span-1",
  },
  {
    num: "04",
    tag: "Seguridad web",
    title: "Tu sitio blindado sin dolores de cabeza",
    desc: "Auditamos y protegemos WordPress y aplicaciones web. Cerramos brechas, configuramos HTTPS y mantenemos tus datos y los de tus clientes seguros.",
    items: ["Auditoría de vulnerabilidades WordPress", "Bloqueo de endpoints y vectores de ataque", "Configuración HTTPS, cabeceras y robots.txt", "Monitoreo continuo"],
    accent: "#10B981",
    bg: "from-[#10B981] to-[#059669]",
    span: "md:col-span-2",
  },
]

const pasos = [
  { n: "01", title: "Diagnóstico", desc: "Revisamos tu situación, identificamos qué necesitas y qué no." },
  { n: "02", title: "Propuesta", desc: "Alcance, plazo y precio fijo. Sin sorpresas ni letra chica." },
  { n: "03", title: "Ejecución", desc: "Implementamos, probamos y ajustamos con comunicación directa." },
  { n: "04", title: "Entrega", desc: "Deploy, traspaso y soporte post-lanzamiento incluido." },
]

const stats = [
  { val: "+50", label: "proyectos entregados en Chile" },
  { val: "100%", label: "precio fijo, sin cobros inesperados" },
  { val: "24h", label: "para recibir tu propuesta" },
]

export default function ServiciosContent() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ── HERO DARK ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center px-4 bg-[#07070F] overflow-hidden"
      >
        {/* Animated gradient blobs */}
        <m.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#6C5CE4] rounded-full opacity-20 blur-[120px] pointer-events-none"
        />
        <m.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#4834d4] rounded-full opacity-15 blur-[100px] pointer-events-none"
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(108,92,228,0.5) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        <m.div style={{ y: heroY, opacity: heroOpacity }} className="relative max-w-4xl mx-auto text-center">
          <m.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <m.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE4] animate-pulse" />
              Servicios digitales · Chile
            </m.span>

            <m.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
            >
              Tu negocio digital,{" "}
              <span className="bg-gradient-to-r from-[#6C5CE4] via-[#8B7CF8] to-[#A78BFA] bg-clip-text text-transparent">
                construido para crecer
              </span>
            </m.h1>

            <m.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Desarrollo web, automatización de procesos, campañas digitales y seguridad. Un solo equipo local que conoce tu negocio.
            </m.p>

            <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#6C5CE4] text-white font-semibold rounded-xl hover:bg-[#5a4cd0] transition-all hover:scale-[1.02] cursor-pointer"
              >
                Cotizar proyecto
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 text-white/80 font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                Ver servicios
              </Link>
            </m.div>
          </m.div>
        </m.div>

        {/* Scroll indicator */}
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/20" />
        </m.div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────────── */}
      <section className="bg-[#6C5CE4] py-10 px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {stats.map(({ val, label }) => (
            <m.div key={label} variants={fadeUp} className="flex flex-col items-center gap-1">
              <span className="text-4xl font-black text-white">{val}</span>
              <span className="text-white/70 text-sm">{label}</span>
            </m.div>
          ))}
        </m.div>
      </section>

      {/* ── BENTO GRID ─────────────────────────────────────────── */}
      <section id="servicios" className="py-24 px-4 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Qué hacemos
            </m.h2>
            <m.p variants={fadeUp} className="text-gray-500 text-lg max-w-lg mx-auto">
              Cuatro áreas de trabajo, un solo equipo que entiende tu negocio.
            </m.p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {servicios.map(({ num, tag, title, desc, items, accent, bg, span }) => (
              <m.article
                key={num}
                variants={scaleIn}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.25 }}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default flex flex-col ${span}`}
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-br ${bg} p-7 flex items-end justify-between min-h-[130px]`}>
                  <span className="text-6xl font-black text-white/20 leading-none select-none">{num}</span>
                  <span className="text-xs font-bold text-white/70 uppercase tracking-widest">{tag}</span>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  <ul className="mt-auto space-y-2 pt-2 border-t border-gray-100">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </m.article>
            ))}
          </m.div>
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#07070F]">
        <div className="max-w-5xl mx-auto">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              Cómo trabajamos
            </m.h2>
            <m.p variants={fadeUp} className="text-white/40 text-lg">
              Proceso simple, resultado concreto.
            </m.p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {pasos.map(({ n, title, desc }, i) => (
              <m.div key={n} variants={fadeUp} className="relative">
                {/* Connecting line (desktop) */}
                {i < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-0px)] w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}
                <div className="relative z-10 rounded-2xl bg-white/5 border border-white/8 p-6 hover:bg-white/8 hover:border-white/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#6C5CE4]/20 flex items-center justify-center mb-4">
                    <span className="text-[#8B7CF8] font-bold text-sm">{n}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ── POR QUÉ NOSOTROS ───────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Left: headline */}
            <m.div variants={fadeUp} className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
                Equipo local.<br />
                <span className="text-[#6C5CE4]">Resultados reales.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Somos el mismo equipo detrás de attempo, una plataforma usada por profesionales en Chile. Sabemos lo que funciona porque lo construimos todos los días.
              </p>
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 text-[#6C5CE4] font-semibold hover:gap-3 transition-all w-fit cursor-pointer"
              >
                Conocer al equipo <ArrowRight className="w-4 h-4" />
              </Link>
            </m.div>

            {/* Right: feature list */}
            <m.div variants={fadeUp} className="grid grid-cols-1 gap-3">
              {[
                { title: "Precio fijo y por escrito", desc: "Cotización detallada antes de empezar. Sin cobros extras al final." },
                { title: "Sin intermediarios", desc: "Hablas directo con quien hace el trabajo. Nada de cuentas de agencia." },
                { title: "Hecho en Chile", desc: "Entendemos el mercado local, los medios de pago y las necesidades reales." },
                { title: "Código que heredas", desc: "Cuando terminamos, el sitio y el código son 100% tuyos." },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#6C5CE4]/30 hover:bg-[#6C5CE4]/3 transition-all duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-[#6C5CE4] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#6C5CE4] via-[#5a4cd0] to-[#4834d4] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center relative"
        >
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            ¿Tienes un proyecto en mente?
          </m.h2>
          <m.p variants={fadeUp} className="text-white/70 text-lg mb-8">
            Cuéntanos qué necesitas y te enviamos una propuesta detallada en menos de 24 horas.
          </m.p>
          <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#6C5CE4] font-bold rounded-xl hover:bg-gray-50 hover:scale-[1.02] transition-all text-lg cursor-pointer"
            >
              Hablar con el equipo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:hola@attempo.cl"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all text-lg cursor-pointer"
            >
              hola@attempo.cl
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </m.div>
        </m.div>
      </section>

    </div>
  )
}
