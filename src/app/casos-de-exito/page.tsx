import type { Metadata } from "next"
import Link from "next/link"
import { TrendingDown, Clock, CalendarCheck, ArrowRight, MessageCircle, Brain, Scissors, Activity, Leaf, Building2, Briefcase, type LucideIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Casos de éxito — attempo",
  description: "Descubre cómo profesionales de la salud y servicios en Chile reducen inasistencias, automatizan su agenda y aumentan sus ingresos con attempo.",
  alternates: { canonical: "https://attempo.cl/casos-de-exito" },
  openGraph: {
    title: "Casos de éxito — attempo",
    description: "Resultados reales de profesionales que usan attempo en Chile.",
    url: "https://attempo.cl/casos-de-exito",
    type: "website",
  },
}

const stats = [
  {
    Icon: TrendingDown,
    valor: "hasta 80%",
    label: "menos inasistencias",
    desc: "Los recordatorios automáticos y el cobro anticipado eliminan los no-shows.",
  },
  {
    Icon: CalendarCheck,
    valor: "24/7",
    label: "reservas sin intervención",
    desc: "Los pacientes agendan solos online, incluso fuera del horario de atención.",
  },
  {
    Icon: Clock,
    valor: "+4 horas",
    label: "recuperadas por semana",
    desc: "Menos tiempo gestionando agenda manualmente, más tiempo para atender.",
  },
  {
    Icon: MessageCircle,
    valor: "3×",
    label: "más reservas desde redes",
    desc: "El chatbot Attia convierte mensajes de Instagram y WhatsApp en reservas confirmadas.",
  },
]

const rubros: { Icon: LucideIcon; nombre: string; desc: string; href: string }[] = [
  {
    Icon: Brain,
    nombre: "Psicólogos y Psiquiatras",
    desc: "Cobro anticipado por sesión, seguimiento de paquetes y recordatorios que reducen las cancelaciones de último minuto.",
    href: "/soluciones/psicologos",
  },
  {
    Icon: Scissors,
    nombre: "Barberías y Belleza",
    desc: "Seña anticipada con Webpay, reservas desde Instagram con Attia y confirmación automática 2 horas antes del turno.",
    href: "/soluciones/barberias",
  },
  {
    Icon: Activity,
    nombre: "Kinesiólogos y Fisioterapeutas",
    desc: "Planes de rehabilitación como paquetes con cobro al inicio, recordatorios de continuidad y ficha de avance por sesión.",
    href: "/soluciones/kinesiologos",
  },
  {
    Icon: Leaf,
    nombre: "Nutricionistas",
    desc: "Paquetes de consultas con control de sesiones usadas, recordatorios entre controles y cobro desde la primera cita.",
    href: "/soluciones/nutricionistas",
  },
  {
    Icon: Building2,
    nombre: "Centros Clínicos",
    desc: "Panel centralizado para múltiples profesionales, reportes por especialista y gestión de salas sin conflictos.",
    href: "/soluciones/centros-clinicos",
  },
  {
    Icon: Briefcase,
    nombre: "Abogados y Consultores",
    desc: "Cobro anticipado de consultas, confirmación activa antes de cada reunión y ficha de cliente con historial.",
    href: "/soluciones/derecho",
  },
]

export default function CasosDeExitoPage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">Casos de éxito</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Resultados reales<br />con attempo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesionales de la salud y servicios en Chile que automatizaron su agenda, redujeron inasistencias y recuperaron tiempo para lo que importa.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ Icon, valor, label, desc }) => (
              <div key={label} className="flex flex-col gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 bg-[#6C5CE4]/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#6C5CE4]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{valor}</p>
                  <p className="text-sm font-semibold text-[#6C5CE4]">{label}</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rubros */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resultados por rubro</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              attempo está diseñado para los desafíos específicos de cada tipo de práctica profesional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rubros.map(({ Icon, nombre, desc, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-3 p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#6C5CE4] hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-[#6C5CE4]/10 rounded-xl flex items-center justify-center text-[#6C5CE4]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-[#6C5CE4] transition-colors">
                  {nombre}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
                <span className="text-xs font-semibold text-[#6C5CE4] flex items-center gap-1 mt-1">
                  Ver solución <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#6C5CE4]">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white">
            ¿Usas attempo y quieres compartir tu experiencia?
          </h2>
          <p className="text-purple-200 text-lg">
            Estamos documentando las historias de los primeros profesionales que transformaron su práctica con attempo. Si quieres ser parte, escríbenos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:contacto@attempo.cl?subject=Quiero compartir mi caso de éxito con attempo"
              className="px-6 py-3 bg-white text-[#6C5CE4] font-semibold rounded-xl hover:bg-purple-50 transition-colors"
            >
              Cuéntanos tu historia →
            </a>
            <Link
              href="/registro"
              className="px-6 py-3 bg-transparent border border-purple-300 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors"
            >
              Empieza gratis 12 días
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
