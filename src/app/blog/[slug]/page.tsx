import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Script from "next/script"
import { posts, getPostBySlug, type Bloque } from "@/lib/blog"

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.titulo} — attempo`,
    description: post.excerpt,
    alternates: { canonical: `https://attempo.cl/blog/${post.slug}` },
    openGraph: {
      title: post.titulo,
      description: post.excerpt,
      type: "article",
      publishedTime: post.fecha,
      authors: [post.autor],
    },
  }
}

function formatFecha(fecha: string) {
  return new Date(fecha).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function RenderBloque({ bloque }: { bloque: Bloque }) {
  switch (bloque.tipo) {
    case "intro":
      return <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-[#6C5CE4] pl-5 my-8">{bloque.texto}</p>
    case "p":
      return <p className="text-gray-700 leading-relaxed my-5">{bloque.texto}</p>
    case "h2":
      return <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 tracking-tight">{bloque.texto}</h2>
    case "h3":
      return <h3 className="text-lg font-semibold text-gray-900 mt-7 mb-3">{bloque.texto}</h3>
    case "ul":
      return (
        <ul className="my-5 space-y-2.5">
          {bloque.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <svg className="w-5 h-5 text-[#6C5CE4] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      )
    case "destacado":
      return (
        <blockquote className="my-8 bg-[#f5f3ff] border border-[#e0d9ff] rounded-2xl px-6 py-5">
          <p className="text-gray-700 italic leading-relaxed">{bloque.texto}</p>
        </blockquote>
      )
    case "cta":
      return (
        <div className="my-10 bg-[#6C5CE4] rounded-2xl px-8 py-8 text-center">
          <p className="text-white font-bold text-xl mb-2">¿Quieres probarlo en tu consulta?</p>
          <p className="text-white/80 mb-5 text-sm">12 días gratis en cualquier plan. Sin tarjeta de crédito.</p>
          <Link
            href="https://app.attempo.cl/registro"
            className="inline-flex items-center justify-center px-7 py-3 bg-white text-[#6C5CE4] font-semibold rounded-xl hover:bg-[#f5f3ff] transition-colors duration-200 cursor-pointer"
          >
            Crear cuenta gratis →
          </Link>
        </div>
      )
    default:
      return null
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.excerpt,
    datePublished: post.fecha,
    author: { "@type": "Organization", name: post.autor },
    publisher: {
      "@type": "Organization",
      name: "attempo",
      logo: { "@type": "ImageObject", url: "https://attempo.cl/logo_attempo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://attempo.cl/blog/${post.slug}` },
  }

  return (
    <>
      <Script id={`jsonld-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#f5f3ff] to-white">
          <div className="max-w-2xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-[#6C5CE4] font-medium hover:underline mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver al blog
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold text-[#6C5CE4] bg-[#6C5CE4]/10 px-3 py-1 rounded-full">
                {post.categoria}
              </span>
              <span className="text-xs text-gray-400">{post.tiempoLectura} min de lectura</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
              {post.titulo}
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{post.autor}</span>
              <span>·</span>
              <span>{formatFecha(post.fecha)}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            {post.contenido.map((bloque, i) => (
              <RenderBloque key={i} bloque={bloque} />
            ))}
          </div>
        </section>

        {/* Related / back */}
        <section className="py-12 px-4 bg-[#fafafa] border-t border-gray-100">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/blog" className="text-sm font-medium text-[#6C5CE4] hover:underline flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Ver todos los artículos
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6C5CE4] text-white text-sm font-semibold rounded-xl hover:bg-[#5A4BD1] transition-colors duration-200 cursor-pointer"
            >
              Ver planes de attempo
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
