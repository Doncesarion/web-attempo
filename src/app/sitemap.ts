import { MetadataRoute } from "next"
import { posts } from "@/lib/blog"

const BASE = "https://attempo.cl"

const especialidades = [
  "psicologos", "psiquiatras", "medicos-generales", "centros-clinicos",
  "barberias", "derecho", "nutricion", "matronas", "esteticas",
  "fisioterapeutas", "yoga",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${BASE}/plataforma`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${BASE}/precios`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${BASE}/soluciones`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${BASE}/quienes-somos`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${BASE}/faq`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${BASE}/blog`, priority: 0.6, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${BASE}/contacto`, priority: 0.6, changeFrequency: "yearly" as const, lastModified: now },
    { url: `${BASE}/casos-de-exito`, priority: 0.6, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${BASE}/centro-de-ayuda`, priority: 0.5, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${BASE}/privacidad`, priority: 0.3, changeFrequency: "yearly" as const, lastModified: now },
    { url: `${BASE}/terminos`, priority: 0.3, changeFrequency: "yearly" as const, lastModified: now },
  ]

  const especialidadPages = especialidades.map((slug) => ({
    url: `${BASE}/soluciones/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }))

  const blogPages = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(post.fecha),
  }))

  return [...staticPages, ...especialidadPages, ...blogPages]
}
