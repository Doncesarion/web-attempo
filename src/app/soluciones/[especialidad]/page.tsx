import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import {
  Package, CreditCard, MessageCircle, ClipboardList, Bell, Pill, RefreshCw,
  Globe, CheckCircle2, CalendarDays, Bot, Users, Monitor, BarChart2, Building2,
  Smartphone, Clock, FolderOpen, Brain, Stethoscope, Scissors, Scale,
  Leaf, Baby, Sparkles, Activity, Flower2, Smile, type LucideIcon,
} from "lucide-react"
import { getEspecialidadBySlug, especialidades } from "@/lib/especialidades"

const featureIconMap: Record<string, LucideIcon> = {
  Package, CreditCard, MessageCircle, ClipboardList, Bell, Pill, RefreshCw,
  Globe, CheckCircle2, CalendarDays, Bot, Users, Monitor, BarChart2, Building2,
  Smartphone, Clock, FolderOpen,
}

const heroIconMap: Record<string, LucideIcon> = {
  psicologos: Brain,
  psiquiatras: Stethoscope,
  "medicos-generales": Stethoscope,
  "centros-clinicos": Building2,
  barberias: Scissors,
  derecho: Scale,
  nutricion: Leaf,
  matronas: Baby,
  esteticas: Sparkles,
  fisioterapeutas: Activity,
  yoga: Flower2,
  nutricionistas: Leaf,
  kinesiologos: Activity,
  dentistas: Smile,
  medicos: Stethoscope,
  belleza: Scissors,
  "personal-trainer": Activity,
}

export const dynamicParams = false

export async function generateStaticParams() {
  return especialidades.map((e) => ({ especialidad: e.slug }))
}

const metaOverrides: Record<string, { title: string; description: string }> = {
  psicologos: {
    title: "Agenda Online para Psicólogos en Chile 2026 | attempo",
    description:
      "Software de agendamiento para psicólogos en Chile. Cobra anticipado con Webpay, gestiona paquetes de sesiones y reduce inasistencias con recordatorios automáticos por WhatsApp. Prueba gratis 12 días.",
  },
  psiquiatras: {
    title: "Agenda Online para Psiquiatras en Chile 2026 | attempo",
    description:
      "Sistema de agendamiento para psiquiatras en Chile. Lista de espera automática, controles de seguimiento y recordatorios por WhatsApp. Prueba gratis 12 días.",
  },
  "medicos-generales": {
    title: "Sistema de Agendamiento para Médicos Generales en Chile | attempo",
    description:
      "Agenda online para médicos generales en Chile. Gestiona citas presenciales y telemedicina, cobro anticipado Webpay y recordatorios automáticos. Prueba gratis 12 días.",
  },
  "centros-clinicos": {
    title: "Software de Gestión para Centros Clínicos en Chile | attempo",
    description:
      "Sistema de agendamiento online para centros clínicos en Chile. Agenda múltiples profesionales, cobros y recordatorios automáticos desde una sola plataforma. Prueba gratis.",
  },
  barberias: {
    title: "Agenda Online para Barberías en Chile 2026 | attempo",
    description:
      "Software de agendamiento para barberías en Chile. Reservas online 24/7, recordatorios automáticos y cobro anticipado. Elimina los no-shows. Prueba gratis 12 días.",
  },
  derecho: {
    title: "Sistema de Citas para Abogados y Estudios Jurídicos en Chile | attempo",
    description:
      "Agenda online para abogados en Chile. Gestiona consultas y reuniones, cobra anticipadamente y automatiza los recordatorios a clientes. Prueba gratis 12 días.",
  },
  nutricion: {
    title: "Agenda Online para Nutricionistas en Chile 2026 | attempo",
    description:
      "Software de agendamiento para nutricionistas en Chile. Paquetes de sesiones, cobro anticipado Webpay y recordatorios automáticos por WhatsApp. Prueba gratis 12 días.",
  },
  matronas: {
    title: "Sistema de Agendamiento para Matronas en Chile | attempo",
    description:
      "Agenda online para matronas en Chile. Gestiona controles, ecografías y consultas con recordatorios automáticos y cobro anticipado integrado. Prueba gratis.",
  },
  esteticas: {
    title: "Agenda Online para Centros Estéticos en Chile 2026 | attempo",
    description:
      "Software de agendamiento para centros estéticos y spas en Chile. Reservas 24/7, recordatorios WhatsApp y cobro anticipado. Reduce cancelaciones de último minuto. Prueba gratis.",
  },
  fisioterapeutas: {
    title: "Agenda Online para Fisioterapeutas y Kinesiólogos en Chile | attempo",
    description:
      "Sistema de agendamiento para fisioterapeutas y kinesiólogos en Chile. Paquetes de sesiones, cobro Webpay y recordatorios automáticos. Prueba gratis 12 días.",
  },
  yoga: {
    title: "Sistema de Agendamiento para Clases de Yoga y Pilates en Chile | attempo",
    description:
      "Agenda online para profesores de yoga y pilates en Chile. Gestiona clases individuales y grupales, cobro anticipado y recordatorios automáticos. Prueba gratis.",
  },
  nutricionistas: {
    title: "Agenda Online para Nutricionistas en Chile 2026 | attempo",
    description:
      "Sistema de agendamiento para nutricionistas en Chile. Gestiona paquetes de consultas, cobra anticipado con Webpay y reduce el abandono de tratamientos con recordatorios automáticos. Prueba gratis 12 días.",
  },
  kinesiologos: {
    title: "Agenda Online para Kinesiólogos en Chile 2026 | attempo",
    description:
      "Software de agendamiento para kinesiólogos en Chile. Gestiona planes de rehabilitación, cobra el paquete completo anticipado y elimina el abandono de tratamientos. Prueba gratis 12 días.",
  },
  dentistas: {
    title: "Sistema de Agendamiento para Dentistas en Chile 2026 | attempo",
    description:
      "Agenda online para dentistas y clínicas dentales en Chile. Confirmación automática por WhatsApp, lista de espera activa y control de tratamientos de múltiples sesiones. Prueba gratis 12 días.",
  },
  medicos: {
    title: "Agenda Online para Médicos en Chile 2026 | attempo",
    description:
      "Sistema de agendamiento para médicos en Chile. Reservas online 24/7, chatbot IA para consultas, recordatorios automáticos y ficha del paciente integrada. Prueba gratis 12 días.",
  },
  belleza: {
    title: "Agenda Online para Peluquerías y Salones de Belleza en Chile 2026 | attempo",
    description:
      "Software de agendamiento para peluquerías, salones de uñas, extensiones de pestañas y botox en Chile. Seña anticipada con Webpay, reservas 24/7 desde Instagram y recordatorios automáticos. Elimina los no-shows. Prueba gratis 12 días.",
  },
  "personal-trainer": {
    title: "Agenda Online para Entrenadores Personales en Chile 2026 | attempo",
    description:
      "Sistema de agendamiento para entrenadores personales en Chile. Paquetes de sesiones, cobro anticipado con Webpay y recordatorios automáticos por WhatsApp. Elimina las cancelaciones de último minuto. Prueba gratis 12 días.",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ especialidad: string }>
}): Promise<Metadata> {
  const { especialidad } = await params
  const data = getEspecialidadBySlug(especialidad)
  if (!data) return { title: "No encontrado" }
  const override = metaOverrides[especialidad]
  const title = override?.title ?? `Agenda Online para ${data.nombre} en Chile | attempo`
  const description =
    override?.description ??
    `Sistema de agendamiento para ${data.nombre} en Chile. ${data.descripcion} Recordatorios automáticos, cobro con Webpay y chatbot IA. Prueba gratis 12 días.`
  return {
    title,
    description,
    alternates: { canonical: `https://attempo.cl/soluciones/${especialidad}` },
    openGraph: {
      title,
      description,
      url: `https://attempo.cl/soluciones/${especialidad}`,
      type: "website",
    },
  }
}

export default async function EspecialidadPage({
  params,
}: {
  params: Promise<{ especialidad: string }>
}) {
  const { especialidad } = await params
  const data = getEspecialidadBySlug(especialidad)

  if (!data) notFound()

  const HeroIcon = heroIconMap[especialidad] ?? Stethoscope

  const jsonLdGraph: object[] = [
    {
      "@type": "WebPage",
      "@id": `https://attempo.cl/soluciones/${especialidad}`,
      url: `https://attempo.cl/soluciones/${especialidad}`,
      name: `attempo para ${data.nombre}`,
      description: data.descripcion,
      inLanguage: "es-CL",
      isPartOf: { "@id": "https://attempo.cl/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "attempo", item: "https://attempo.cl" },
        { "@type": "ListItem", position: 2, name: "Soluciones", item: "https://attempo.cl/soluciones" },
        { "@type": "ListItem", position: 3, name: data.nombre, item: `https://attempo.cl/soluciones/${especialidad}` },
      ],
    },
  ]

  if (data.faqs && data.faqs.length > 0) {
    jsonLdGraph.push({
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    })
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": jsonLdGraph }

  return (
    <>
      <Script id={`jsonld-${especialidad}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col">

        {/* Hero */}
        <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#6C5CE4]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HeroIcon className="w-10 h-10 text-[#6C5CE4]" />
            </div>
            <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">
              Solución para
            </p>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{data.nombre}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{data.descripcion}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.attempo.cl/registro"
                className="px-8 py-4 bg-[#6C5CE4] hover:bg-[#4F46E5] text-white font-semibold rounded-xl transition-colors text-lg"
              >
                Empieza gratis
              </a>
              <a
                href="/contacto"
                className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-colors text-lg"
              >
                Hablar con un experto
              </a>
            </div>
          </div>
        </section>

        {/* Section A — El problema */}
        <section className="py-24 px-4 bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left: dolor quote */}
              <div className="flex flex-col justify-center">
                <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-6">
                  El problema real
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-6">
                  &ldquo;{data.dolor}&rdquo;
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {data.dolorDesc}
                </p>
              </div>

              {/* Right: 2×2 features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.features.map((f) => {
                  const FeatureIcon = featureIconMap[f.icon] ?? Package
                  return (
                    <div
                      key={f.title}
                      className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-3"
                    >
                      <div className="w-10 h-10 bg-[#6C5CE4]/20 rounded-xl flex items-center justify-center">
                        <FeatureIcon className="w-5 h-5 text-[#8B7FF0]" />
                      </div>
                      <h3 className="text-white font-semibold text-base">{f.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Section B — Cómo lo resuelve attempo */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">
                La solución
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                La solución para {data.nombre}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.beneficios.map((b) => (
                <div
                  key={b.n}
                  className="group flex flex-col gap-4 p-8 rounded-2xl border border-gray-100 hover:border-[#6C5CE4] transition-colors"
                >
                  <span className="text-6xl font-bold text-gray-100 group-hover:text-[#6C5CE4]/20 transition-colors leading-none select-none">
                    {b.n}
                  </span>
                  <h3 className="text-gray-900 font-semibold text-lg leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href="https://app.attempo.cl/registro"
                className="inline-block px-8 py-4 bg-[#6C5CE4] hover:bg-[#4F46E5] text-white font-semibold rounded-xl transition-colors text-lg"
              >
                Prueba gratis 12 días
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="py-24 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">
                  Preguntas frecuentes
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Lo que nos preguntan los {data.nombre.toLowerCase()}
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {data.faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8">
                    <h3 className="text-gray-900 font-semibold text-lg mb-3">{faq.q}</h3>
                    <p className="text-gray-500 text-base leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <a
                  href="/faq"
                  className="text-[#6C5CE4] font-medium hover:underline text-sm"
                >
                  Ver todas las preguntas frecuentes →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Otras soluciones */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Otras soluciones</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {especialidades
                .filter((e) => e.slug !== data.slug)
                .map((e) => (
                  <a
                    key={e.slug}
                    href={`/soluciones/${e.slug}`}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-colors"
                  >
                    {e.nombre}
                  </a>
                ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
