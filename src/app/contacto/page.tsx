import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con el equipo de Attempo. Estamos para ayudarte.",
}

export default function ContactoPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Contacto</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">¿Cómo podemos ayudarte?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escríbenos y te responderemos a la brevedad.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-gray-500">Formulario de contacto — próximamente</p>
            <a
              href="mailto:contacto@attempo.cl"
              className="mt-4 inline-block text-[#6C5CE4] font-medium hover:underline"
            >
              contacto@attempo.cl
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
