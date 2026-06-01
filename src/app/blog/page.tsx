import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog y Artículos",
  description: "Artículos, guías y recursos para profesionales de la salud y servicios en Chile.",
}

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Blog</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Recursos para tu práctica</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guías, consejos y novedades para profesionales que quieren optimizar su tiempo.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">Artículos próximamente</p>
        </div>
      </section>
    </div>
  )
}
