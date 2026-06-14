import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "attempo — Todo a tu tiempo",
    short_name: "attempo",
    description:
      "Plataforma de agendamiento de citas para profesionales de la salud en Chile. Agenda online, recordatorios WhatsApp y cobro con Webpay.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6C5CE4",
    lang: "es-CL",
    icons: [
      {
        src: "/logo_attempo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo_attempo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
