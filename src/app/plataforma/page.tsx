import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plataforma",
  description: "Conoce todas las funcionalidades de Attempo: recordatorios, paquetes de sesiones, boleta de honorarios y más.",
}

export default function PlataformaPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Plataforma</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Todo lo que necesitas para gestionar tu agenda</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desde recordatorios automáticos hasta boletas de honorarios — Attempo cubre cada parte de tu flujo de trabajo.
          </p>
        </div>
      </section>

      <section id="recordatorios" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recordatorios automáticos</h2>
          <p className="text-gray-500">Contenido próximamente</p>
        </div>
      </section>

      <section id="paquetes" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Paquete de sesiones</h2>
          <p className="text-gray-500">Contenido próximamente</p>
        </div>
      </section>

      <section id="boleta" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Boleta de honorarios</h2>
          <p className="text-gray-500">Contenido próximamente</p>
        </div>
      </section>
    </div>
  )
}
