import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import Script from "next/script"
import { headers } from "next/headers"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ClientProviders from "@/components/ClientProviders"
import WhatsAppButton from "@/components/WhatsAppButton"
import ChatWidget from "@/components/ChatWidget"

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6C5CE4",
}

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
    title: "attempo — Todo a tu tiempo",
    description:
      "Plataforma de agendamiento para profesionales de la salud en Chile. Agenda online, recordatorios automáticos por WhatsApp y cobro con Webpay.",
    url: "https://attempo.cl",
    images: [{ url: "https://attempo.cl/opengraph-image", width: 1200, height: 630, alt: "attempo — Todo a tu tiempo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "attempo — Todo a tu tiempo",
    description:
      "Plataforma de agendamiento para profesionales de la salud en Chile. Agenda online, recordatorios automáticos por WhatsApp y cobro con Webpay.",
    images: ["https://attempo.cl/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://attempo.cl",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined
  return (
    <html lang="es-CL" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://attempo.cl/#organization",
                  "name": "attempo",
                  "url": "https://attempo.cl",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://attempo.cl/icon.png",
                    "width": 512,
                    "height": 512,
                  },
                  "description": "Plataforma de agendamiento de citas con IA para profesionales de la salud y servicios en Chile. Agenda online, recordatorios automáticos por WhatsApp y chatbot inteligente.",
                  "foundingDate": "2025",
                  "foundingLocation": {
                    "@type": "Place",
                    "name": "Santiago, Chile",
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Chile",
                  },
                  "email": "contacto@attempo.cl",
                  "sameAs": [
                    "https://www.linkedin.com/company/attempo",
                    "https://www.producthunt.com/products/attempo",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://attempo.cl/#website",
                  "url": "https://attempo.cl",
                  "name": "attempo",
                  "description": "Todo a tu tiempo",
                  "inLanguage": "es-CL",
                  "publisher": { "@id": "https://attempo.cl/#organization" },
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://attempo.cl/#software",
                  "name": "attempo",
                  "applicationCategory": "BusinessApplication",
                  "applicationSubCategory": "AppointmentScheduling",
                  "operatingSystem": "Web",
                  "url": "https://app.attempo.cl",
                  "offers": {
                    "@type": "Offer",
                    "price": "19990",
                    "priceCurrency": "CLP",
                    "availability": "https://schema.org/InStock",
                  },
                  "description": "Sistema de agendamiento online con chatbot IA, recordatorios automáticos por WhatsApp y email, integración con Google Calendar y cobro con Webpay.",
                  "featureList": [
                    "Agenda online 24/7",
                    "Recordatorios automáticos por WhatsApp y email",
                    "Chatbot IA para atención de pacientes",
                    "Integración con Google Calendar",
                    "Pagos online con Webpay",
                    "Multi-especialista",
                  ],
                  "publisher": { "@id": "https://attempo.cl/#organization" },
                },
              ],
            }),
          }}
        />
        <Script
          id="gtm-script"
          nonce={nonce}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MG8HBR7P');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MG8HBR7P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientProviders>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <ChatWidget />
          <WhatsAppButton />
        </ClientProviders>
      </body>
    </html>
  )
}
