export type Bloque =
  | { tipo: "intro"; texto: string }
  | { tipo: "p"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "h3"; texto: string }
  | { tipo: "ul"; items: string[] }
  | { tipo: "destacado"; texto: string }
  | { tipo: "cta" }

export type Post = {
  slug: string
  titulo: string
  excerpt: string
  fecha: string
  categoria: string
  tiempoLectura: number
  autor: string
  contenido: Bloque[]
}

export const posts: Post[] = [
  {
    slug: "agenda-online-profesionales-2026",
    titulo: "Tu agenda en 2026: por qué los profesionales que más crecen ya automatizaron todo",
    excerpt:
      "En 2026, gestionar tu agenda desde WhatsApp no solo es ineficiente — te está costando pacientes, tiempo y energía mental. Descubre qué cambió y qué están haciendo diferente los profesionales más exitosos.",
    fecha: "2026-06-01",
    categoria: "Productividad",
    tiempoLectura: 5,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "Hace cinco años, gestionar citas por WhatsApp era \"suficiente\". Hoy, en 2026, es el equivalente a llevar la contabilidad en papel: funciona, pero a un costo que ya no tiene sentido pagar.",
      },
      {
        tipo: "h2",
        texto: "El nuevo estándar que tus pacientes ya esperan",
      },
      {
        tipo: "p",
        texto:
          "Los pacientes de 2026 reservan hora en el dentista a las 11 de la noche, confirman su consulta con un mensaje automático de WhatsApp y reciben el link de pago antes de llegar. Todo sin que el profesional haya movido un dedo. Eso no es tecnología de punta — es el estándar mínimo que los pacientes ya dan por sentado.",
      },
      {
        tipo: "p",
        texto:
          "Cuando alguien llega a tu perfil y no puede reservar en línea, no te llama. Busca al siguiente profesional que sí tiene agenda online. En un mercado donde la primera impresión ocurre en el celular, la fricción en el agendamiento se traduce directamente en pacientes perdidos.",
      },
      {
        tipo: "h2",
        texto: "Lo que realmente te cuesta gestionar por WhatsApp",
      },
      {
        tipo: "p",
        texto:
          "No es solo el tiempo de responder mensajes — aunque ese tiempo suma más de lo que parece. Un profesional promedio que gestiona su agenda manualmente invierte entre 45 minutos y 2 horas diarias en confirmaciones, reagendamientos y recordatorios. En un mes, eso es hasta 40 horas: una semana laboral completa.",
      },
      {
        tipo: "ul",
        items: [
          "Citas que se olvidan porque el recordatorio dependía de ti",
          "Horas bloqueadas que nadie canceló a tiempo y no pudiste reasignar",
          "Pacientes que nunca llegaron porque el día anterior no hubo recordatorio",
          "Energía mental gastada en coordinar, en vez de atender",
        ],
      },
      {
        tipo: "destacado",
        texto:
          "\"Recuperé casi dos horas diarias solo con automatizar los recordatorios. Esas horas ahora las uso en atender más pacientes o simplemente descansar.\" — Psicóloga, Santiago",
      },
      {
        tipo: "h2",
        texto: "Qué hace diferente una agenda online en 2026",
      },
      {
        tipo: "p",
        texto:
          "Las agendas online de hoy no son simplemente un calendario en la nube. En 2026, un buen sistema de agendamiento integra automatización, inteligencia artificial y pagos en un solo flujo. El resultado: el profesional aparece disponible 24/7 sin estar disponible 24/7.",
      },
      {
        tipo: "h3",
        texto: "Automatización del ciclo completo",
      },
      {
        tipo: "p",
        texto:
          "Desde que el paciente reserva hasta que sale de la consulta, cada paso puede estar automatizado: confirmación inmediata, recordatorio 24 horas antes, link de pago, y encuesta post-sesión si la quieres. Todo ocurre sin que tengas que recordar hacerlo.",
      },
      {
        tipo: "h3",
        texto: "IA que agenda en tu nombre",
      },
      {
        tipo: "p",
        texto:
          "Los sistemas más avanzados ya incluyen chatbots con inteligencia artificial que responden preguntas de pacientes, verifican disponibilidad en tiempo real y confirman citas directamente por WhatsApp o Instagram — sin intervención humana. No es ciencia ficción: es lo que ya usan los consultorios que atienden alto volumen.",
      },
      {
        tipo: "h3",
        texto: "Cobro integrado antes de la cita",
      },
      {
        tipo: "p",
        texto:
          "Una de las fricciones más costosas en salud independiente es el cobro post-sesión. Los sistemas de 2026 permiten cobrar antes de la cita — con tarjeta de crédito o débito, sin complicaciones. Así reduces tanto las inasistencias como las incomodidades del cobro en persona.",
      },
      {
        tipo: "h2",
        texto: "La transición es más rápida de lo que crees",
      },
      {
        tipo: "p",
        texto:
          "El mayor freno para adoptar una agenda online suele ser el miedo al cambio: \"mis pacientes no saben usar tecnología\" o \"voy a perder el control de mi agenda\". Pero en 2026, el 87% de los adultos en Chile usa WhatsApp a diario y el 73% ha reservado algún servicio por internet en el último mes. Tus pacientes ya saben hacerlo.",
      },
      {
        tipo: "p",
        texto:
          "Implementar una agenda online profesional hoy toma menos de 5 minutos. Creas tu perfil, defines tu disponibilidad y compartes el link. Eso es todo. El sistema hace el resto.",
      },
      { tipo: "cta" },
    ],
  },
  {
    slug: "recordatorios-automaticos-reducir-ausentismo-2026",
    titulo: "Recordatorios automáticos en 2026: cómo reducir el ausentismo un 80% sin esfuerzo",
    excerpt:
      "Cada cita que no se presenta es tiempo perdido y dinero que no entra. Los recordatorios automáticos ya no son un lujo — son el estándar que usan los consultorios más eficientes. Así funcionan y esto es lo que cambia en tu negocio.",
    fecha: "2026-05-20",
    categoria: "Gestión",
    tiempoLectura: 6,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "Una cita perdida no es solo una hora vacía en tu agenda. Es el costo de haber preparado esa sesión, el tiempo que no pudiste asignar a otro paciente, y el desgaste de un ciclo que se repite semana a semana. La buena noticia: en 2026, este problema tiene solución y no requiere esfuerzo de tu parte.",
      },
      {
        tipo: "h2",
        texto: "El verdadero costo de una inasistencia",
      },
      {
        tipo: "p",
        texto:
          "Los profesionales de la salud independientes pierden en promedio entre el 15% y el 25% de sus ingresos potenciales por inasistencias no avisadas. Para un psicólogo con 30 sesiones semanales a $45.000 cada una, eso son entre $202.500 y $337.500 al mes que simplemente no llegan.",
      },
      {
        tipo: "p",
        texto:
          "Pero el impacto va más allá del dinero. Una hora vacía en la agenda es también energía mental y emocional gastada en la incertidumbre de si el paciente llegará o no. Y en muchos casos, cuando confirmas a último minuto que no hay nadie, ya no tienes tiempo de hacer otra cosa productiva.",
      },
      {
        tipo: "h2",
        texto: "Por qué los pacientes faltan (y no es lo que crees)",
      },
      {
        tipo: "p",
        texto:
          "La mayoría de las inasistencias no son por mala voluntad. Los estudios de conducta en salud son claros: el 68% de las personas que no asisten a una cita simplemente olvidaron que la tenían. No porque no les importara — sino porque la vida de 2026 está llena de notificaciones, compromisos y distracciones.",
      },
      {
        tipo: "ul",
        items: [
          "68% olvidó la cita (sin recordatorio previo)",
          "15% tuvo un imprevisto y no supo cómo avisar",
          "10% confundió el día o la hora",
          "7% decidió no ir pero no canceló por no saber cómo",
        ],
      },
      {
        tipo: "p",
        texto:
          "Lo que une a casi todos estos casos: un recordatorio oportuno los habría convertido en asistencias o en cancelaciones a tiempo. Cualquiera de los dos resultados es mejor que una hora vacía sin aviso.",
      },
      {
        tipo: "h2",
        texto: "Cómo funcionan los recordatorios automáticos modernos",
      },
      {
        tipo: "p",
        texto:
          "Un recordatorio automático no es solo un mensaje que dice \"recuerda tu cita mañana\". Los sistemas de 2026 envían mensajes personalizados, en el canal correcto, en el momento óptimo — y le dan al paciente la posibilidad de confirmar, reagendar o cancelar en segundos.",
      },
      {
        tipo: "h3",
        texto: "El canal importa: WhatsApp primero",
      },
      {
        tipo: "p",
        texto:
          "La tasa de apertura de un mensaje de WhatsApp en Chile es del 98% en las primeras 3 horas. Comparado con el email (22% de apertura) o el SMS (45%), WhatsApp es el canal que más garantiza que el recordatorio sea visto. Un buen sistema envía por WhatsApp primero, y usa email o SMS como respaldo.",
      },
      {
        tipo: "h3",
        texto: "El momento importa: 48h y 2h antes",
      },
      {
        tipo: "p",
        texto:
          "La combinación que mejor funciona es un recordatorio 48 horas antes (que da tiempo para reagendar si hay un imprevisto) y otro 2 horas antes el mismo día (que activa la memoria justo cuando el paciente está organizando su jornada). Con esta combinación, la tasa de inasistencia baja entre 70% y 85%.",
      },
      {
        tipo: "h3",
        texto: "La confirmación cierra el ciclo",
      },
      {
        tipo: "p",
        texto:
          "El recordatorio ideal no solo informa — también pide una respuesta. \"¿Confirmas tu cita para mañana a las 15:00? Responde SÍ o NO.\" Esa respuesta te da certeza: si confirma, puedes prepararte. Si cancela, liberas el horario a tiempo para otra reserva. Si no responde, puedes hacer un seguimiento puntual.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Antes perdía 4 o 5 citas por semana. Desde que activé los recordatorios automáticos de attempo, bajo a 1 o ninguna. El cambio fue inmediato.\" — Nutricionista, Viña del Mar",
      },
      {
        tipo: "h2",
        texto: "En 2026, la IA va un paso más allá",
      },
      {
        tipo: "p",
        texto:
          "Los sistemas más avanzados no solo recuerdan — aprenden. Con inteligencia artificial, la plataforma puede detectar patrones: qué pacientes tienen mayor tendencia a faltar, en qué horarios ocurren más inasistencias, o qué tipo de mensaje genera más confirmaciones. Y con esa información, ajusta el comportamiento automáticamente.",
      },
      {
        tipo: "p",
        texto:
          "El resultado es un sistema que mejora solo con el tiempo, sin que tengas que configurar nada. En la práctica, esto significa que después de unos meses de uso, tu tasa de asistencia sigue mejorando sin intervención de tu parte.",
      },
      {
        tipo: "h2",
        texto: "Qué cambia en tu negocio",
      },
      {
        tipo: "p",
        texto:
          "Más allá de los números, lo que cambia es la energía con la que empiezas cada jornada. Saber que tu agenda está llena — y que va a estar llena — es un alivio que se siente en todo: en cómo atiendes, en cómo descansas, en cómo planificas. Los recordatorios automáticos no son solo una herramienta de productividad. Son tranquilidad.",
      },
      { tipo: "cta" },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
