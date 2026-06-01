import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "attempo — Todo a tu tiempo",
    template: "%s | attempo",
  },
  description:
    "attempo es la plataforma de agendamiento de citas para profesionales de la salud y servicios en Chile. Recordatorios automáticos por WhatsApp, chatbot IA, cobro con Webpay y agenda online. Listo en 5 minutos.",
  metadataBase: new URL("https://attempo.cl"),
  openGraph: {
    siteName: "attempo",
    locale: "es_CL",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
