import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { posts } from "@/lib/blog"

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "attempo", item: "https://attempo.cl" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://attempo.cl/blog" },
  ],
}

export const metadata: Metadata = {
  title: "Blog — attempo",
  description: "Guías, consejos y recursos para profesionales de la salud que quieren optimizar su tiempo y hacer crecer su consulta en Chile.",
  alternates: { canonical: "https://attempo.cl/blog" },
  openGraph: {
    title: "Blog — attempo",
    description: "Guías, consejos y recursos para profesionales de la salud que quieren optimizar su tiempo y hacer crecer su consulta en Chile.",
    url: "https://attempo.cl/blog",
    type: "website",
  },
}

function formatFecha(fecha: string) {
  return new Date(fecha).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

const categoriaColor: Record<string, string> = {
  Productividad: "bg-blue-50 text-blue-700",
  Gestión: "bg-green-50 text-green-700",
  Tecnología: "bg-purple-50 text-purple-700",
}

export default function BlogPage() {
  return (
    <>
      <Script id="jsonld-blog-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 lg:py-28 px-4 bg-gradient-to-b from-[#f5f3ff] to-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-xs font-semibold uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Recursos para tu práctica
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Guías, consejos y novedades para profesionales que quieren optimizar su tiempo y hacer crecer su consulta.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:border-[#6C5CE4] hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                {/* Color header */}
                <div className="h-3 bg-gradient-to-r from-[#6C5CE4] to-[#8B7FF0]" />

                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoriaColor[post.categoria] ?? "bg-gray-100 text-gray-600"}`}>
                      {post.categoria}
                    </span>
                    <span className="text-xs text-gray-400">{post.tiempoLectura} min de lectura</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#6C5CE4] transition-colors duration-200">
                    {post.titulo}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{formatFecha(post.fecha)}</span>
                    <span className="text-sm font-semibold text-[#6C5CE4] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Leer artículo
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-500 mb-6">¿Quieres probar attempo en tu consulta?</p>
          <Link
            href="https://app.attempo.cl/registro"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#6C5CE4] text-white font-semibold rounded-xl hover:bg-[#5A4BD1] transition-colors duration-200 cursor-pointer"
          >
            Probar gratis 12 días
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
