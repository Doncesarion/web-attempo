import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Centro de Ayuda",
  description: "Encuentra guías, tutoriales y soporte para sacar el máximo provecho de Attempo.",
}

export default function CentroDeAyudaPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Centro de Ayuda</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">¿Cómo podemos ayudarte?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guías, tutoriales y documentación para sacar el máximo provecho de Attempo.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">Artículos de ayuda próximamente</p>
          <a
            href="/contacto"
            className="mt-6 inline-block px-6 py-3 bg-[#6C5CE4] text-white rounded-xl hover:bg-[#4F46E5] transition-colors"
          >
            Contactar soporte
          </a>
        </div>
      </section>
    </div>
  )
}
