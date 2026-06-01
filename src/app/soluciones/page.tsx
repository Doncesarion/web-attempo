import type { Metadata } from "next"
import Link from "next/link"
import { especialidades } from "@/lib/especialidades"

export const metadata: Metadata = {
  title: "Soluciones",
  description: "Attempo tiene una solución para cada tipo de profesional: psicólogos, médicos, barberías, nutricionistas y más.",
}

export default function SolucionesPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Soluciones</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Diseñado para tu especialidad</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Attempo se adapta a cualquier tipo de profesional. Encuentra tu especialidad y descubre cómo podemos ayudarte.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {especialidades.map((e) => (
            <Link
              key={e.slug}
              href={`/soluciones/${e.slug}`}
              className="group p-6 border border-gray-200 rounded-2xl hover:border-[#6C5CE4] hover:shadow-md transition-all"
            >
              <span className="text-4xl mb-4 block">{e.emoji}</span>
              <h2 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#6C5CE4] transition-colors">
                {e.nombre}
              </h2>
              <p className="text-sm text-gray-500">{e.descripcion}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
