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
  // ── ARTÍCULO 1 ──────────────────────────────────────────────────────────────
  {
    slug: "sistema-agendamiento-online-chile-2026",
    titulo: "Sistema de agendamiento online en Chile: guía completa para profesionales de salud 2026",
    excerpt:
      "Todo lo que necesitas saber sobre los sistemas de agendamiento online en Chile en 2026: qué son, cómo funcionan, qué funcionalidades son imprescindibles y cómo elegir la opción correcta para tu especialidad.",
    fecha: "2026-06-04",
    categoria: "Guías",
    tiempoLectura: 8,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "Si estás buscando un sistema de agendamiento online en Chile, probablemente ya sabes que gestionar citas por WhatsApp tiene un techo. Este artículo te explica qué es un sistema de agendamiento, qué funcionalidades son imprescindibles en 2026 y cómo elegir la opción correcta para tu práctica.",
      },
      { tipo: "h2", texto: "¿Qué es un sistema de agendamiento online?" },
      {
        tipo: "p",
        texto:
          "Un sistema de agendamiento online es una plataforma digital que permite a profesionales y negocios gestionar sus citas, reservas y horarios de forma automatizada. A diferencia de una agenda física o un calendario compartido, un sistema de agendamiento moderno automatiza todo el ciclo: desde que el paciente reserva hasta que asiste y paga, sin intervención manual.",
      },
      {
        tipo: "p",
        texto:
          "En Chile, el uso de estos sistemas se aceleró significativamente y hoy es el estándar en consultorios, centros de salud, estudios jurídicos y negocios de servicios que buscan operar de forma profesional y eficiente.",
      },
      { tipo: "h2", texto: "¿Por qué los profesionales en Chile están migrando a la agenda digital?" },
      {
        tipo: "p",
        texto:
          "El argumento más común para no cambiar es \"mis pacientes no saben usar tecnología\". Los datos dicen lo contrario: el 87% de los adultos en Chile usa smartphone a diario y más del 70% ha reservado un servicio por internet en el último año. La tecnología ya no es la barrera — la barrera es el tiempo y la energía que se pierden gestionando citas de forma manual.",
      },
      {
        tipo: "p",
        texto:
          "Los profesionales que gestionan su agenda por WhatsApp o teléfono invierten en promedio entre 45 minutos y 2 horas diarias solo en coordinación de horarios, sin contar el impacto de las inasistencias no avisadas.",
      },
      {
        tipo: "ul",
        items: [
          "Mensajes de WhatsApp sin responder durante consultas",
          "Confusión de horarios por coordinar en varios canales al mismo tiempo",
          "Inasistencias que no pudieron reasignarse porque no llegó el aviso a tiempo",
          "Cobros incómodos o tardíos después de la atención",
        ],
      },
      { tipo: "h2", texto: "Las 7 funcionalidades esenciales de un sistema de agendamiento en 2026" },
      { tipo: "h3", texto: "1. Agenda online disponible 24/7" },
      {
        tipo: "p",
        texto:
          "El paciente que busca hora a las 11 de la noche no puede llamarte. Un buen sistema tiene un link de reserva que el profesional comparte en su sitio web, Instagram, WhatsApp Bio o firma de email. El paciente elige fecha, hora y servicio en menos de 2 minutos, y el sistema confirma automáticamente.",
      },
      { tipo: "h3", texto: "2. Recordatorios automáticos por WhatsApp" },
      {
        tipo: "p",
        texto:
          "El recordatorio automático es la funcionalidad con mayor retorno de inversión de todas. Los estudios de comportamiento en pacientes de salud muestran que el 68% de las inasistencias ocurre simplemente porque la persona olvidó la cita. Un recordatorio por WhatsApp 48 horas antes y otro 2 horas antes reduce las inasistencias entre un 70% y un 80%.",
      },
      { tipo: "h3", texto: "3. Cobro anticipado integrado con Webpay" },
      {
        tipo: "p",
        texto:
          "En Chile, la integración con Webpay (Transbank) es el estándar de pagos online. Un sistema de agendamiento profesional debe permitir cobrar en el momento de la reserva, antes de confirmarla. Esto transforma el modelo: el paciente que pagó no falta.",
      },
      { tipo: "h3", texto: "4. Historial y ficha del paciente" },
      {
        tipo: "p",
        texto:
          "Tener acceso al historial de cada paciente desde la misma plataforma elimina la necesidad de planillas paralelas. Un buen sistema registra asistencias, cancelaciones, pagos y notas básicas de seguimiento.",
      },
      { tipo: "h3", texto: "5. Gestión de paquetes y sesiones" },
      {
        tipo: "p",
        texto:
          "Especialmente útil para psicólogos, nutricionistas y fisioterapeutas. La venta de paquetes de sesiones (4, 8 o 12 sesiones) es una práctica común que los sistemas modernos automatizan completamente: el sistema lleva la cuenta, avisa cuando quedan pocas sesiones y facilita la renovación.",
      },
      { tipo: "h3", texto: "6. Chatbot IA para atención 24/7" },
      {
        tipo: "p",
        texto:
          "Los sistemas más avanzados en 2026 integran un chatbot con inteligencia artificial que atiende consultas por WhatsApp, Instagram o Messenger sin intervención humana. El chatbot responde preguntas frecuentes, verifica disponibilidad y guía al paciente hasta completar su reserva.",
      },
      { tipo: "h3", texto: "7. Reportes y estadísticas" },
      {
        tipo: "p",
        texto:
          "Saber cuántas citas tuviste, cuántas se cancelaron, cuánto facturaste y cuál es tu horario de mayor demanda es información que un sistema de agendamiento debe entregarte de forma automática. Con esos datos puedes tomar decisiones reales sobre tus horarios y precios.",
      },
      { tipo: "h2", texto: "¿Cuánto cuesta un sistema de agendamiento en Chile?" },
      {
        tipo: "p",
        texto:
          "Los precios varían. En el extremo gratuito están herramientas como Calendly (funcionalidades muy limitadas) o Google Calendar (que no es un sistema de agendamiento). Para un profesional independiente, las plataformas especializadas en Chile parten desde los $25.000 CLP mensuales.",
      },
      {
        tipo: "p",
        texto:
          "Lo que cobra un sistema de agendamiento se recupera rápidamente: una inasistencia menos a la semana a $45.000 la hora son $180.000 al mes recuperados — más de lo que cuesta cualquier plan del mercado.",
      },
      { tipo: "h2", texto: "¿Cómo elegir el sistema correcto para tu especialidad?" },
      {
        tipo: "ul",
        items: [
          "Psicólogos y psiquiatras: prioriza cobro anticipado, paquetes de sesiones y política de cancelación automatizada",
          "Médicos y matronas: busca integración con telemedicina, ficha clínica básica y recordatorios multicadena",
          "Nutricionistas y fisioterapeutas: paquetes de sesiones, seguimiento de paciente e historial de planes",
          "Barberías y estéticas: reservas por servicio, múltiples profesionales y lista de espera",
          "Abogados y consultores: bloqueo de agenda por tipo de consulta, recordatorios y cobro anticipado",
        ],
      },
      { tipo: "h2", texto: "Los sistemas de agendamiento más usados en Chile en 2026" },
      {
        tipo: "p",
        texto:
          "En el mercado chileno conviven varias plataformas con enfoques distintos. AgendaPro es la más conocida con presencia regional, fuerte en belleza y wellness. Reservo está especializado en centros médicos. Encuadrado se orienta a profesionales independientes de la salud con foco en boletas electrónicas. attempo es la opción diseñada para el profesional independiente chileno, con Webpay nativo, chatbot IA y planes desde $24.990 CLP.",
      },
      { tipo: "h2", texto: "Cómo implementar un sistema de agendamiento en 3 pasos" },
      {
        tipo: "ul",
        items: [
          "Paso 1 — Crea tu perfil: define tus servicios, duración de cada uno y tu disponibilidad horaria. Menos de 10 minutos.",
          "Paso 2 — Comparte tu link: agrega el link de reserva a tu Instagram, sitio web, Google My Business y firma de WhatsApp.",
          "Paso 3 — Activa los automatismos: configura los recordatorios, el cobro anticipado y el chatbot. El sistema hace el resto.",
        ],
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 2 ──────────────────────────────────────────────────────────────
  {
    slug: "mejor-software-agendamiento-psicologo-chile-2026",
    titulo: "Mejor software de agendamiento para psicólogos en Chile 2026: guía y comparativa",
    excerpt:
      "Para un psicólogo independiente en Chile, el sistema de agendamiento no es solo una agenda: es la diferencia entre cobrar o no cobrar una sesión que ya preparaste. Comparamos las principales opciones disponibles en 2026.",
    fecha: "2026-06-03",
    categoria: "Comparativas",
    tiempoLectura: 7,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "Para un psicólogo independiente en Chile, el sistema de agendamiento no es solo una agenda: es la diferencia entre cobrar o no cobrar una sesión que ya preparaste. Esta guía analiza qué necesita específicamente un psicólogo de su plataforma de agendamiento y compara las principales opciones en 2026.",
      },
      { tipo: "h2", texto: "El problema específico del psicólogo independiente" },
      {
        tipo: "p",
        texto:
          "Para un psicólogo, una inasistencia de última hora es una hora preparada, bloqueada y perdida. El 82% de los psicólogos independientes en Chile reporta haber tenido al menos 3 inasistencias no avisadas en un mes típico, y la mayoría no tiene una política de cancelación formal porque no sabe cómo implementarla sin generar conflicto con el paciente.",
      },
      {
        tipo: "p",
        texto:
          "La tecnología resuelve ese conflicto: cuando el sistema pide el cobro anticipado en el momento de la reserva, no es el psicólogo quien impone la política — es el flujo del software. El paciente acepta las condiciones cuando reserva, no cuando ya está en la sesión.",
      },
      { tipo: "h2", texto: "Las 5 funcionalidades esenciales para psicólogos" },
      { tipo: "h3", texto: "Cobro anticipado integrado (la más importante)" },
      {
        tipo: "p",
        texto:
          "El cobro al momento de la reserva es la funcionalidad que más diferencia hace en la práctica clínica independiente. Un paciente que pagó $45.000 tiene un compromiso concreto. Un paciente que solo \"confirmó por WhatsApp\" no. Busca un sistema con Webpay nativo — no una redirección a un link de pago externo — y que el cobro sea parte del flujo de reserva, no un paso posterior.",
      },
      { tipo: "h3", texto: "Gestión de paquetes de sesiones" },
      {
        tipo: "p",
        texto:
          "La venta de paquetes (4, 8 o 12 sesiones) es práctica común en psicología. Un buen sistema debe llevar automáticamente el conteo de sesiones por paciente, alertarte cuando quedan pocas en el paquete y facilitar la renovación. Sin esto, el control queda en planillas o en tu memoria.",
      },
      { tipo: "h3", texto: "Política de cancelación automatizada" },
      {
        tipo: "p",
        texto:
          "Define cuántas horas antes se puede cancelar sin cargo y el sistema lo aplica solo. Si el paciente cancela con menos de 24 horas, el sistema retiene el pago según la política que tú configuraste. Sin discusiones, sin incomodidad.",
      },
      { tipo: "h3", texto: "Recordatorios en cadena por WhatsApp" },
      {
        tipo: "p",
        texto:
          "Un solo recordatorio no es suficiente. El estándar en 2026 es: confirmación inmediata al reservar + recordatorio 48 horas antes + recordatorio 2 horas antes el día de la cita. El sistema envía los tres sin que hagas nada.",
      },
      { tipo: "h3", texto: "Historial básico del paciente" },
      {
        tipo: "p",
        texto:
          "Número de sesiones asistidas, cancelaciones, notas breves y estado del paquete — todo en un solo lugar. No necesitas una ficha clínica compleja, pero sí un historial que te permita tener contexto antes de cada sesión.",
      },
      { tipo: "h2", texto: "Comparativa: los principales sistemas para psicólogos en Chile 2026" },
      {
        tipo: "ul",
        items: [
          "attempo — cobro anticipado Webpay nativo, paquetes de sesiones, chatbot IA, recordatorios WhatsApp. Desde $24.990/mes. Prueba gratis 12 días. Diseñado para el profesional independiente chileno.",
          "Encuadrado — fuerte en agenda y boletas electrónicas SII. Precio en UF (≈$37.000 CLP). No siempre incluye cobro Webpay nativo en los planes base.",
          "AgendaPro — amplia base de clientes, principalmente orientado a estética y wellness. Para psicólogos las funcionalidades específicas (paquetes, política de cancelación médica) son menos especializadas.",
          "Calendly (plan gratis) — útil para reuniones, no para práctica clínica. Sin cobro integrado, sin recordatorios WhatsApp ni paquetes de sesiones.",
        ],
      },
      { tipo: "h2", texto: "El modelo de cobro cambia todo" },
      {
        tipo: "p",
        texto:
          "La pregunta correcta no es \"¿cuál sistema tiene más funciones?\" sino \"¿cuál resuelve mi problema principal?\". Para un psicólogo en Chile, el problema principal es la inasistencia no avisada y el cobro post-sesión incómodo. Cualquier sistema que no resuelva ambos con cobro anticipado integrado y cancelación automática no es la solución correcta, aunque tenga otras 20 funcionalidades.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Implementé el cobro anticipado el primer mes y bajé de 5 inasistencias semanales a menos de 1. En términos prácticos: recuperé más de $160.000 al mes que antes simplemente no entraban.\" — Psicóloga, Providencia",
      },
      { tipo: "h2", texto: "¿Cuánto tarda la migración?" },
      {
        tipo: "p",
        texto:
          "Migrar de WhatsApp a una plataforma de agendamiento profesional toma menos de una semana. Los primeros dos días configuras tu perfil, servicios y disponibilidad. El tercer día compartes tu link con los pacientes activos. Para el viernes ya tienes el flujo funcionando. No hay curva de aprendizaje prolongada si el sistema está bien diseñado.",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 3 ──────────────────────────────────────────────────────────────
  {
    slug: "agenda-gratis-profesionales-salud-chile-2026",
    titulo: "Agenda online gratis para profesionales de salud en Chile: qué existe, qué funciona y qué no",
    excerpt:
      "¿Existe una agenda online realmente gratis para profesionales de salud en Chile? Analizamos todas las opciones disponibles en 2026, sus limitaciones reales y en qué punto la inversión en una plataforma profesional se paga sola.",
    fecha: "2026-05-27",
    categoria: "Guías",
    tiempoLectura: 6,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "\"Agenda online gratis\" es una de las búsquedas más frecuentes entre profesionales de la salud que quieren digitalizar su consulta sin comprometerse económicamente. Esta guía analiza con honestidad qué opciones gratuitas existen en Chile en 2026, qué funciona realmente y en qué punto conviene invertir en una plataforma profesional.",
      },
      { tipo: "h2", texto: "Lo que realmente existe gratis para profesionales de salud en Chile" },
      { tipo: "h3", texto: "Google Calendar" },
      {
        tipo: "p",
        texto:
          "El calendario de Google es gratuito y ampliamente conocido. No es, en ningún sentido práctico, un sistema de agendamiento online. No tiene link de reserva para compartir, no envía recordatorios automáticos por WhatsApp, no gestiona cobros y no mantiene historial de pacientes. Es una agenda personal digitalizada, no una plataforma de agendamiento profesional.",
      },
      { tipo: "h3", texto: "Calendly (plan gratuito)" },
      {
        tipo: "p",
        texto:
          "Calendly es la herramienta de agendamiento gratuita más conocida a nivel internacional. Permite crear un link de disponibilidad que los clientes pueden usar para reservar. Sus limitaciones en el plan gratuito para un profesional de salud en Chile son significativas: solo 1 tipo de evento, sin cobros integrados, sin recordatorios por WhatsApp (solo email), sin historial de paciente y sin personalización en español.",
      },
      { tipo: "h3", texto: "Reservio (plan gratuito)" },
      {
        tipo: "p",
        texto:
          "Reservio tiene un plan gratuito con funcionalidades básicas, pero con límite de 50 reservas al mes (insuficiente para un profesional con agenda activa), sin cobro anticipado integrado y soporte principalmente en inglés.",
      },
      { tipo: "h2", texto: "Las limitaciones reales de las opciones gratuitas" },
      {
        tipo: "p",
        texto:
          "El problema de las herramientas gratuitas no es solo lo que les falta — es lo que te sigue costando operar con ellas. Un sistema que no envía recordatorios por WhatsApp sigue requiriendo que tú los envíes manualmente. Eso son 15 minutos diarios que el sistema debería hacer por ti. Un sistema sin cobro anticipado deja el cobro post-sesión en tus manos, con toda la incomodidad que eso implica.",
      },
      {
        tipo: "ul",
        items: [
          "Sin recordatorios automáticos WhatsApp → sigues enviando mensajes manualmente",
          "Sin cobro anticipado → las inasistencias siguen costándote dinero",
          "Sin historial de paciente → sigues buscando en notas o planillas",
          "Sin soporte en español para Chile → resuelves dudas en inglés",
          "Sin Webpay integrado → no puedes cobrar online de forma nativa en Chile",
        ],
      },
      { tipo: "h2", texto: "Lo que pierdes cuando usas una agenda gratuita" },
      {
        tipo: "p",
        texto:
          "El costo real de una agenda gratuita no aparece en la factura — aparece en tu tiempo y tus ingresos perdidos. Un profesional con 25 citas semanales que pierde solo 2 por inasistencias al mes (conservadoramente) a $45.000 cada una pierde $90.000 al mes en ingresos que no entran. El plan más básico de cualquier sistema de agendamiento profesional cuesta menos de $30.000 al mes.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Usé Calendly gratis durante 8 meses. Funcionaba para coordinar horarios, pero seguía mandando recordatorios por WhatsApp uno a uno y cobrando en efectivo después. Cuando cambié a una plataforma con cobro anticipado, el primer mes recuperé más de lo que gasté en el año entero de la versión gratis.\" — Psicólogo, Las Condes",
      },
      { tipo: "h2", texto: "¿Cuándo tiene sentido usar algo gratuito?" },
      {
        tipo: "p",
        texto:
          "Hay casos en que tiene sentido empezar con una herramienta gratuita: si estás validando una idea de negocio nueva y aún no tienes clientes recurrentes, o si tienes menos de 5 citas semanales y el volumen no justifica la automatización. En esos casos, el ahorro de $25.000 mensuales tiene sentido. Pero en cuanto tu agenda tiene 10 o más citas semanales, el costo de oportunidad de no tener automatización supera con creces el precio de cualquier plan básico.",
      },
      { tipo: "h2", texto: "La alternativa: probar gratis antes de pagar" },
      {
        tipo: "p",
        texto:
          "No tienes que elegir entre \"gratis con limitaciones\" y \"pago sin garantías\". attempo ofrece 12 días de prueba gratuita con acceso completo a todas las funcionalidades: cobro Webpay, recordatorios WhatsApp, chatbot IA y gestión de paquetes. Si en 12 días no sientes la diferencia, no pagas. Si la sientes, estás pagando por algo que ya comprobaste que funciona para tu práctica.",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULOS ANTERIORES ─────────────────────────────────────────────────────
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
