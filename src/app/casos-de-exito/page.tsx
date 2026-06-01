import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description: "Conoce cómo Attempo ha transformado la gestión de agendas de profesionales en Chile.",
}

export default function CasosDeExitoPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Casos de éxito</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Historias reales de éxito</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo otros profesionales han transformado su gestión con Attempo.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">Casos de éxito próximamente</p>
        </div>
      </section>
    </div>
  )
}
