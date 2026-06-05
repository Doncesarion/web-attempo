import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Centro de ayuda",
  description: "Encuentra guías, tutoriales y soporte para sacar el máximo provecho de attempo.",
  alternates: { canonical: "https://attempo.cl/centro-de-ayuda" },
  openGraph: {
    title: "Centro de ayuda — attempo",
    description: "Encuentra guías, tutoriales y soporte para sacar el máximo provecho de attempo.",
    url: "https://attempo.cl/centro-de-ayuda",
    type: "website",
  },
}

// ---------------------------------------------------------------------------
// Tipos y datos
// ---------------------------------------------------------------------------

interface Articulo {
  icon: string
  title: string
  desc: string
}

interface Categoria {
  icon: string
  title: string
  articulos: Articulo[]
}

const categorias: Categoria[] = [
  {
    icon: "🚀",
    title: "Primeros pasos",
    articulos: [
      {
        icon: "👤",
        title: "Cómo crear tu cuenta en attempo",
        desc: "Regístrate con tu correo o Google y configura tu perfil profesional en menos de 2 minutos.",
      },
      {
        icon: "⚙️",
        title: "Configura tus servicios y horarios en 5 minutos",
        desc: "Define tus tipos de atención, duración, precio y los días y horas en que estás disponible.",
      },
      {
        icon: "🔗",
        title: "Comparte tu link de reservas con tus pacientes",
        desc: "Obtén tu link personalizado y compártelo por WhatsApp, Instagram o tu sitio web.",
      },
      {
        icon: "💬",
        title: "Conecta tu WhatsApp para recordatorios automáticos",
        desc: "Vincula tu número de WhatsApp Business para que attempo envíe confirmaciones y recordatorios.",
      },
      {
        icon: "🎁",
        title: "Cómo funciona el período de prueba de 12 días",
        desc: "Usa todas las funciones de attempo gratis durante 12 días, sin necesidad de tarjeta de crédito.",
      },
    ],
  },
  {
    icon: "📅",
    title: "Agenda y citas",
    articulos: [
      {
        icon: "🚫",
        title: "Cómo bloquear horarios en tu agenda",
        desc: "Marca períodos como no disponibles para vacaciones, reuniones o descansos.",
      },
      {
        icon: "🔄",
        title: "Gestiona reagendamientos y cancelaciones",
        desc: "Configura la política de cancelación y permite que tus pacientes reagenden desde su confirmación.",
      },
      {
        icon: "⏰",
        title: "Configura la anticipación de los recordatorios",
        desc: "Elige cuántas horas antes se envía el recordatorio automático: 2h, 12h o 24h antes de la cita.",
      },
      {
        icon: "🔁",
        title: "Crea citas recurrentes para controles periódicos",
        desc: "Programa series de controles para un mismo paciente con fechas automáticas según la frecuencia.",
      },
      {
        icon: "👁️",
        title: "Cómo usar la vista semanal y diaria",
        desc: "Navega entre la vista de día y semana para tener una visión completa de tu agenda.",
      },
    ],
  },
  {
    icon: "💳",
    title: "Pagos y Webpay",
    articulos: [
      {
        icon: "🔐",
        title: "Cómo activar Webpay en tu cuenta",
        desc: "Conecta tu cuenta Webpay Plus y recibe pagos online directamente desde attempo.",
      },
      {
        icon: "💰",
        title: "Configura el cobro obligatorio antes de la cita",
        desc: "Activa el pago anticipado para que ninguna reserva quede confirmada sin cobro.",
      },
      {
        icon: "🧾",
        title: "Genera boletas de honorarios desde attempo",
        desc: "Emite boletas de honorarios electrónicas para cada pago recibido a través de la plataforma.",
      },
      {
        icon: "📊",
        title: "Revisa tus ingresos y cobros pendientes",
        desc: "Accede al panel de finanzas para ver tus ingresos del mes y los pagos aún no completados.",
      },
      {
        icon: "🏛️",
        title: "Integración con el SII para boletas",
        desc: "Conecta tu RUT profesional con el SII para emitir boletas de honorarios electrónicas válidas.",
      },
    ],
  },
  {
    icon: "🤖",
    title: "Chatbot IA (Attia)",
    articulos: [
      {
        icon: "💡",
        title: "Qué es Attia y cómo funciona",
        desc: "Attia es el asistente IA de attempo que responde consultas y gestiona reservas de forma autónoma.",
      },
      {
        icon: "📸",
        title: "Conecta Attia con tu Instagram",
        desc: "Vincula tu cuenta de Instagram para que Attia responda mensajes directos y gestione reservas.",
      },
      {
        icon: "💬",
        title: "Conecta Attia con tu Messenger",
        desc: "Activa Attia en tu Facebook Messenger para recibir reservas desde tu página profesional.",
      },
      {
        icon: "✏️",
        title: "Personaliza las respuestas de Attia",
        desc: "Edita el tono, los servicios disponibles y las respuestas predefinidas de tu chatbot.",
      },
      {
        icon: "❓",
        title: "Qué preguntas puede responder Attia",
        desc: "Attia responde preguntas sobre horarios, precios, servicios, ubicación y disponibilidad en tiempo real.",
      },
    ],
  },
  {
    icon: "👤",
    title: "Cuenta y planes",
    articulos: [
      {
        icon: "🔄",
        title: "Cómo cambiar o cancelar tu plan",
        desc: "Sube, baja o cancela tu plan desde la sección de facturación en cualquier momento.",
      },
      {
        icon: "📋",
        title: "Diferencias entre Plan Inicio, Pro y Clínica IA",
        desc: "Compara las funciones incluidas en cada plan para elegir el que mejor se adapta a tu práctica.",
      },
      {
        icon: "👥",
        title: "Cómo invitar profesionales adicionales (Plan Clínica IA)",
        desc: "Agrega a tu equipo enviando una invitación por correo desde el panel de administración del centro.",
      },
      {
        icon: "📥",
        title: "Descarga tus datos y exporta tu agenda",
        desc: "Exporta tus citas y datos de pacientes en formato CSV desde la sección de configuración.",
      },
      {
        icon: "🛟",
        title: "Contactar soporte técnico",
        desc: "Escríbenos a contacto@attempo.cl o usa el chat de soporte para resolver cualquier problema.",
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// Componentes internos (sin Framer Motion — server component)
// ---------------------------------------------------------------------------

function ArticuloCard({ articulo }: { articulo: Articulo }) {
  return (
    <a
      href="/contacto"
      className="group flex gap-4 items-start p-5 rounded-2xl border border-gray-100 hover:border-[#6C5CE4] hover:shadow-sm transition-all bg-white"
    >
      <span className="text-2xl mt-0.5 shrink-0">{articulo.icon}</span>
      <div className="flex flex-col gap-1">
        <h3 className="text-gray-900 font-semibold text-sm group-hover:text-[#6C5CE4] transition-colors">
          {articulo.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{articulo.desc}</p>
      </div>
      <span className="ml-auto text-gray-300 group-hover:text-[#6C5CE4] transition-colors shrink-0 mt-0.5">
        →
      </span>
    </a>
  )
}

function CategoriaSection({ categoria }: { categoria: Categoria }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{categoria.icon}</span>
        <h2 className="text-xl font-bold text-gray-900">{categoria.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {categoria.articulos.map((a) => (
          <ArticuloCard key={a.title} articulo={a} />
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CentroDeAyudaPage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-sm font-medium uppercase tracking-wider mb-4">
            Centro de Ayuda
          </p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">¿Cómo podemos ayudarte?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guías, tutoriales y documentación para sacar el máximo provecho de attempo.
          </p>
        </div>
      </section>

      {/* Contact banner */}
      <section className="py-6 px-4 bg-[#6C5CE4]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-medium text-sm sm:text-base">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="mailto:contacto@attempo.cl"
            className="text-white font-semibold text-sm sm:text-base underline underline-offset-2 hover:no-underline transition-all"
          >
            Escríbenos a contacto@attempo.cl →
          </a>
        </div>
      </section>

      {/* Help categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {categorias.map((c) => (
            <CategoriaSection key={c.title} categoria={c} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-900">
            ¿Necesitas ayuda personalizada?
          </h2>
          <p className="text-gray-500">
            Nuestro equipo está disponible para ayudarte a configurar attempo según tu práctica.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
            <a
              href="/contacto"
              className="px-6 py-3 bg-[#6C5CE4] hover:bg-[#4F46E5] text-white font-semibold rounded-xl transition-colors"
            >
              Contactar soporte
            </a>
            <a
              href="mailto:contacto@attempo.cl"
              className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#6C5CE4] hover:text-[#6C5CE4] transition-colors"
            >
              contacto@attempo.cl
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
