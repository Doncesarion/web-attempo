import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Attempo — Todo a tu tiempo",
  description:
    "Plataforma de agendamiento de citas para profesionales de la salud y servicios en Chile.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-[#6C5CE4] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#6C5CE4] rounded-full"></span>
            Nuevo: Integración con WhatsApp e Instagram
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Todo a tu{" "}
            <span className="text-[#6C5CE4]">tiempo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            La plataforma de agendamiento más completa para profesionales de la salud y servicios en Chile. Agenda, recuerda y cobra sin esfuerzo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/precios"
              className="px-8 py-4 bg-[#6C5CE4] hover:bg-[#4F46E5] text-white font-semibold rounded-xl transition-colors text-lg"
            >
              Empieza gratis
            </a>
            <a
              href="/plataforma"
              className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-colors text-lg"
            >
              Ver plataforma
            </a>
          </div>
        </div>
      </section>

      {/* Features placeholder */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Funcionalidades</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Todo lo que necesitas en un solo lugar</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Sección de features — próximamente</p>
        </div>
      </section>

      {/* Soluciones placeholder */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Soluciones</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Diseñado para tu especialidad</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Grid de especialidades — próximamente</p>
        </div>
      </section>

      {/* Testimonios placeholder */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Testimonios</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Testimonios — próximamente</p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 px-4 bg-[#6C5CE4]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">¿Listo para empezar?</h2>
          <p className="text-purple-200 mb-8 text-lg">Únete a los profesionales que ya confían en Attempo</p>
          <a
            href="/precios"
            className="px-8 py-4 bg-white text-[#6C5CE4] font-semibold rounded-xl hover:bg-purple-50 transition-colors text-lg inline-block"
          >
            Empieza ahora
          </a>
        </div>
      </section>
    </div>
  )
}
