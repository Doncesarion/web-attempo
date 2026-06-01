import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Precios",
  description: "Planes flexibles para profesionales y centros de salud en Chile. Empieza gratis con Attempo.",
}

export default function PreciosPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Precios</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Planes para cada necesidad</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sin sorpresas. Elige el plan que se adapta a tu práctica y escala cuando lo necesites.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">Tabla de precios — próximamente</p>
        </div>
      </section>
    </div>
  )
}
