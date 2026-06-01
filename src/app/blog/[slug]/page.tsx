import type { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Artículo",
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <div className="flex flex-col">
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <a href="/blog" className="text-[#6C5CE4] text-sm hover:underline mb-8 inline-block">
            ← Volver al blog
          </a>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Artículo: {slug}</h1>
          <p className="text-gray-500">Contenido del artículo próximamente</p>
        </div>
      </section>
    </div>
  )
}
