import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import { getEspecialidadBySlug, especialidades } from "@/lib/especialidades"

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
    ],
  }

  return (
    <>
      <Script id={`jsonld-${especialidad}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col">

        {/* Hero */}
        <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl mb-4 block">{data.emoji}</span>
            <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">
              Solución para
            </p>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{data.nombre}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{data.descripcion}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/precios"
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
                {data.features.map((f) => (
                  <div
                    key={f.title}
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-3"
                  >
                    <span className="text-3xl">{f.icon}</span>
                    <h3 className="text-white font-semibold text-base">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
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
                href="/precios"
                className="inline-block px-8 py-4 bg-[#6C5CE4] hover:bg-[#4F46E5] text-white font-semibold rounded-xl transition-colors text-lg"
              >
                Prueba gratis 12 días
              </a>
            </div>
          </div>
        </section>

        {/* Otras soluciones */}
        <section className="py-16 px-4 bg-gray-50">
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
                    {e.emoji} {e.nombre}
                  </a>
                ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
