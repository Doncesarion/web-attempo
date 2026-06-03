import { MetadataRoute } from "next"

const BASE = "https://attempo.cl"

const especialidades = [
  "psicologos", "psiquiatras", "medicos-generales", "centros-clinicos",
  "barberias", "derecho", "nutricion", "matronas", "esteticas",
  "fisioterapeutas", "yoga",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/plataforma`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/precios`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/soluciones`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/quienes-somos`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`, priority: 0.6, changeFrequency: "weekly" as const },
    { url: `${BASE}/contacto`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${BASE}/casos-de-exito`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE}/centro-de-ayuda`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${BASE}/privacidad`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE}/terminos`, priority: 0.3, changeFrequency: "yearly" as const },
  ]

  const especialidadPages = especialidades.map((slug) => ({
    url: `${BASE}/soluciones/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  return [...staticPages, ...especialidadPages].map((page) => ({
    ...page,
    lastModified: now,
  }))
}
