"use client"

import { m } from "framer-motion"
import Link from "next/link"
import {
  Globe,
  Zap,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Code2,
  Workflow,
  TrendingUp,
  Lock,
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const servicios = [
  {
    Icon: Globe,
    color: "from-violet-500 to-purple-600",
    tag: "Desarrollo web",
    title: "Sitios y aplicaciones a medida",
    desc: "Diseñamos y desarrollamos sitios WordPress, landing pages de alto rendimiento, e-commerce y aplicaciones web. Desde la arquitectura hasta el deploy, optimizados para velocidad, SEO y conversión.",
    items: [
      "WordPress + Elementor / WooCommerce",
      "Landing pages y micrositios",
      "E-commerce con integración de pagos",
      "Optimización de rendimiento y seguridad",
    ],
  },
  {
    Icon: Zap,
    color: "from-orange-400 to-pink-500",
    tag: "Automatización",
    title: "Automatización de procesos digitales",
    desc: "Eliminamos el trabajo manual repetitivo conectando tus herramientas y flujos de datos. Integraciones entre CRMs, plataformas de pago, reportes automáticos y bots que trabajan por ti.",
    items: [
      "Integraciones entre plataformas (Zapier, Make, APIs)",
      "Reportes automáticos de campañas y ventas",
      "Flujos de onboarding y seguimiento de clientes",
      "Alertas y paneles de datos en tiempo real",
    ],
  },
  {
    Icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    tag: "Campañas digitales",
    title: "Gestión de campañas y analítica",
    desc: "Administramos campañas en Google Ads y Meta con foco en resultados medibles. Configuramos GA4, dashboards de rendimiento y tomamos decisiones basadas en datos reales.",
    items: [
      "Google Ads (Search, Display, Performance Max)",
      "Meta Ads (Facebook e Instagram)",
      "Dashboards de analítica (GA4, Looker Studio)",
      "Optimización mensual orientada a CPA",
    ],
  },
  {
    Icon: ShieldCheck,
    color: "from-emerald-500 to-teal-600",
    tag: "Seguridad web",
    title: "Hardening y auditoría de seguridad",
    desc: "Auditamos y protegemos tu presencia digital: desde el servidor WordPress hasta las credenciales de acceso y la configuración de cabeceras HTTP. Sin brechas visibles, sin datos expuestos.",
    items: [
      "Auditoría de vulnerabilidades en WordPress",
      "Bloqueo de endpoints y vectores de ataque",
      "Configuración de HTTPS, cabeceras y robots.txt",
      "Monitoreo y respuesta ante incidentes",
    ],
  },
]

const pasos = [
  { n: "01", title: "Diagnóstico", desc: "Revisamos tu situación actual, identifica mos brechas y definimos qué necesitas realmente." },
  { n: "02", title: "Propuesta", desc: "Te enviamos una propuesta clara con alcance, plazo y precio fijo. Sin sorpresas." },
  { n: "03", title: "Ejecución", desc: "Implementamos, probamos y ajustamos. Comunicación directa en todo momento." },
  { n: "04", title: "Entrega y soporte", desc: "Deploy, capacitación básica y acompañamiento post-lanzamiento." },
]

export default function ServiciosContent() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-32 px-4 bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(108,92,228,0.11) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
          }}
        />
        <m.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6C5CE4] rounded-full blur-3xl pointer-events-none"
        />
        <m.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center relative"
        >
          <m.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6C5CE4]/10 text-[#6C5CE4] text-sm font-medium mb-6"
          >
            <Code2 className="w-4 h-4" />
            Servicios digitales
          </m.span>
          <m.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Tecnología que{" "}
            <span className="text-[#6C5CE4]">hace el trabajo</span>{" "}
            por ti
          </m.h1>
          <m.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Desarrollamos, automatizamos y optimizamos tu presencia digital. Desde el sitio web hasta las campañas y la seguridad, en un solo equipo.
          </m.p>
          <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#6C5CE4] text-white font-semibold rounded-xl hover:bg-[#5a4cd0] transition-colors"
            >
              Cotizar proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-colors"
            >
              Ver servicios
            </Link>
          </m.div>
        </m.div>
      </section>

      {/* ── SERVICIOS GRID ─────────────────────────────── */}
      <section id="servicios" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Qué hacemos
            </m.h2>
            <m.p variants={fadeUp} className="text-gray-500 text-lg max-w-xl mx-auto">
              Cuatro áreas de trabajo, un solo equipo que conoce tu negocio.
            </m.p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {servicios.map(({ Icon, color, tag, title, desc, items }) => (
              <m.div
                key={tag}
                variants={fadeUp}
                className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-[#6C5CE4]/20 transition-all duration-300 group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} mb-5`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold text-[#6C5CE4] uppercase tracking-wider">{tag}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#6C5CE4] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4">
              Cómo trabajamos
            </m.h2>
            <m.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl mx-auto">
              Proceso claro, comunicación directa, entrega puntual.
            </m.p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pasos.map(({ n, title, desc }) => (
              <m.div
                key={n}
                variants={fadeUp}
                className="relative rounded-2xl bg-gray-900 p-6 border border-gray-800"
              >
                <span className="text-4xl font-black text-[#6C5CE4]/30 mb-3 block leading-none">{n}</span>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ── POR QUÉ ATTEMPO ─────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { Icon: Workflow, val: "100%", label: "Proyectos entregados a tiempo" },
              { Icon: TrendingUp, val: "Chile", label: "Equipo local, sin intermediarios" },
              { Icon: Lock, val: "24/7", label: "Sitios monitoreados y seguros" },
            ].map(({ Icon, val, label }) => (
              <m.div key={label} variants={fadeUp} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#6C5CE4]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#6C5CE4]" />
                </div>
                <span className="text-3xl font-black text-gray-900">{val}</span>
                <span className="text-gray-500 text-sm">{label}</span>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#6C5CE4] to-[#4834d4]">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </m.h2>
          <m.p variants={fadeUp} className="text-white/80 text-lg mb-8">
            Cuéntanos qué necesitas y te enviamos una propuesta en 24 horas.
          </m.p>
          <m.div variants={fadeUp}>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#6C5CE4] font-bold rounded-xl hover:bg-gray-50 transition-colors text-lg"
            >
              Hablar con el equipo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </m.div>
        </m.div>
      </section>

    </div>
  )
}
