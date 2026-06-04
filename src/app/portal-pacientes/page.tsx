import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portal Pacientes — attempo",
  description: "Accede al portal de pacientes de attempo para ver y gestionar tus citas online.",
  alternates: { canonical: "https://attempo.cl/portal-pacientes" },
  openGraph: {
    title: "Portal Pacientes — attempo",
    description: "Accede al portal de pacientes de attempo para ver y gestionar tus citas online.",
    url: "https://attempo.cl/portal-pacientes",
    type: "website",
  },
  robots: { index: false, follow: false },
}

export default function PortalPacientesPage() {
  return (
    <div className="flex flex-col">
      <section className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#6C5CE4] flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Portal Pacientes</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gestiona tus citas</h1>
          <p className="text-gray-600 mb-8">
            Accede al portal de pacientes para ver, confirmar o cancelar tus citas fácilmente.
          </p>
          <a
            href="https://app.attempo.cl"
            className="px-8 py-4 bg-[#6C5CE4] hover:bg-[#4F46E5] text-white font-semibold rounded-xl transition-colors text-lg inline-block"
          >
            Ingresar al portal
          </a>
        </div>
      </section>
    </div>
  )
}
