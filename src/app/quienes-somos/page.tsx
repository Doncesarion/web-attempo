import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Conoce el equipo detrás de Attempo y nuestra misión de hacer el agendamiento más simple para los profesionales chilenos.",
}

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Quiénes somos</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Nacimos para simplificar tu agenda</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos un equipo chileno apasionado por la tecnología y el bienestar de los profesionales de la salud.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra historia</h2>
          <p className="text-gray-500">Contenido próximamente</p>
        </div>
      </section>
    </div>
  )
}
