import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getEspecialidadBySlug, especialidades } from "@/lib/especialidades"

export async function generateStaticParams() {
  return especialidades.map((e) => ({ especialidad: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ especialidad: string }>
}): Promise<Metadata> {
  const { especialidad } = await params
  const data = getEspecialidadBySlug(especialidad)
  if (!data) return { title: "No encontrado" }
  return {
    title: `Attempo para ${data.nombre}`,
    description: data.descripcion,
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

  return (
    <div className="flex flex-col">
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

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Funcionalidades para {data.nombre}
          </h2>
          <p className="text-gray-500">Contenido específico próximamente</p>
        </div>
      </section>

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
  )
}
