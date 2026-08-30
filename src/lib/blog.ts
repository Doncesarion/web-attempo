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
    slug: "agenda-online-kinesiologo-fisioterapia-chile-2026",
    titulo: "Agenda online para kinesiólogos y fisioterapeutas en Chile 2026: gestiona sesiones y paquetes de rehabilitación",
    excerpt:
      "La kinesiología y fisioterapia tienen una dinámica particular: múltiples sesiones por semana, paquetes de tratamiento y control de evolución continuo. Esta guía explica cómo una agenda digital bien configurada organiza ese flujo y libera tiempo que hoy se pierde en coordinación.",
    fecha: "2026-06-08",
    categoria: "Guías",
    tiempoLectura: 6,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "La kinesiología y fisioterapia tienen una dinámica diferente a otras especialidades: los pacientes no vienen una vez al mes — vienen 2, 3 o 4 veces por semana durante semanas o meses. Eso multiplica el volumen de coordinación, los recordatorios y el seguimiento. Una agenda digital bien configurada puede absorber toda esa carga operativa y dejar al kinesiólogo enfocado en lo que importa: la rehabilitación.",
      },
      { tipo: "h2", texto: "El desafío específico de la kinesiología" },
      {
        tipo: "p",
        texto:
          "Un kinesiólogo con 10 pacientes activos puede tener 30 o 40 sesiones semanales. Si cada coordinación toma 5 minutos entre mensajes de WhatsApp, confirmaciones y recordatorios manuales, eso es entre 2 y 3 horas semanales solo en gestión de agenda. Sin contar las sesiones que se pierden porque el paciente olvidó que tenía hora ese día.",
      },
      {
        tipo: "p",
        texto:
          "El problema se agrava porque la continuidad del tratamiento es clínicamente importante. Un paciente que falta a dos sesiones seguidas interrumpe su proceso de rehabilitación. Reducir las inasistencias no es solo un beneficio económico para el profesional — es parte del resultado clínico del paciente.",
      },
      { tipo: "h2", texto: "Las funcionalidades más importantes para kinesiólogos" },
      { tipo: "h3", texto: "Paquetes de sesiones de rehabilitación" },
      {
        tipo: "p",
        texto:
          "Es muy común en kinesiología trabajar con planes de 10, 15 o 20 sesiones según el diagnóstico. Un sistema de agendamiento que gestiona paquetes lleva el conteo automáticamente por paciente: cuántas sesiones han sido realizadas, cuántas quedan disponibles y cuándo se acerca el final del plan. Esto elimina las conversaciones incómodas de \"¿cuántas me quedan?\" y facilita la renovación a tiempo.",
      },
      { tipo: "h3", texto: "Reservas recurrentes y horario fijo" },
      {
        tipo: "p",
        texto:
          "Muchos pacientes de kinesiología prefieren tener un horario fijo durante todo su tratamiento: mismo día, misma hora, misma semana. Un buen sistema permite bloquear esa recurrencia desde el inicio del plan sin tener que agendar cada sesión manualmente. El paciente sabe su horario, el sistema lo reserva y los recordatorios salen automáticamente.",
      },
      { tipo: "h3", texto: "Recordatorios con indicaciones previas" },
      {
        tipo: "p",
        texto:
          "Para ciertas sesiones de kinesiología hay preparación previa: ropa cómoda, no venir con dolor agudo, traer algún implemento. El recordatorio automático puede incluir esas instrucciones específicas por tipo de sesión, reduciendo consultas de último minuto y mejorando la calidad de la atención.",
      },
      { tipo: "h3", texto: "Historial y registro de evolución" },
      {
        tipo: "p",
        texto:
          "Tener en el mismo sistema un registro básico de cada paciente — diagnóstico inicial, número de sesiones, observaciones de evolución — permite revisar el contexto antes de cada atención sin buscar en papeles o carpetas. No reemplaza una ficha clínica especializada, pero centraliza la información operativa más relevante.",
      },
      { tipo: "h2", texto: "¿Cómo manejar múltiples sesiones semanales sin perder el control?" },
      {
        tipo: "ul",
        items: [
          "Al inicio del tratamiento: define el plan completo (ej. 15 sesiones, lunes y jueves a las 10:00) y el sistema bloquea todas las fechas automáticamente",
          "Recordatorios automáticos: WhatsApp 24 horas antes de cada sesión, sin intervención tuya",
          "Si el paciente cancela: el sistema libera el espacio y puede notificar a quien esté en lista de espera",
          "Al acercarse el fin del paquete: el sistema avisa para coordinar la evaluación y el nuevo plan a tiempo",
        ],
      },
      { tipo: "h2", texto: "El cobro anticipado en kinesiología" },
      {
        tipo: "p",
        texto:
          "En kinesiología, el cobro anticipado puede aplicarse de dos formas: por sesión individual (el paciente paga antes de confirmar cada hora) o por paquete completo (paga el plan de 15 sesiones al inicio del tratamiento). Ambos modelos reducen drásticamente las inasistencias porque el paciente ya tiene un compromiso económico concreto.",
      },
      {
        tipo: "p",
        texto:
          "El modelo de pago por paquete tiene además un beneficio adicional: el flujo de caja es más predecible. Sabes exactamente cuánto entra este mes sin depender de que cada sesión se concrete.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Mis pacientes de rehabilitación post-operatoria necesitan constancia. Desde que implementé recordatorios automáticos y cobro anticipado por paquete, la deserción bajó de un 30% a menos del 5%. Eso se traduce directamente en mejores resultados clínicos.\" — Kinesióloga, Santiago",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 4 ──────────────────────────────────────────────────────────────
  {
    slug: "agenda-online-dentista-odontologia-chile-2026",
    titulo: "Agenda online para dentistas en Chile 2026: cómo reducir ausencias y organizar tratamientos de múltiples sesiones",
    excerpt:
      "En odontología, una cita perdida no es solo una hora vacía — es un equipo preparado, materiales listos y tiempo del profesional que no se recupera. Esta guía explica cómo una agenda online con recordatorios automáticos y cobro anticipado resuelve los principales problemas de gestión de una consulta dental en Chile.",
    fecha: "2026-06-09",
    categoria: "Guías",
    tiempoLectura: 7,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "En odontología, una cita perdida no es solo una hora vacía — es un equipo preparado, materiales listos, instrumental esterilizado y tiempo del profesional que no se puede reasignar. El costo de un no-show en una consulta dental es más alto que en casi cualquier otra especialidad. Esta guía explica cómo la agenda online resuelve ese problema y organiza los tratamientos de múltiples sesiones que son habituales en odontología.",
      },
      { tipo: "h2", texto: "Los problemas específicos de la gestión dental" },
      {
        tipo: "p",
        texto:
          "La odontología tiene características que la hacen más exigente en términos de coordinación que otras especialidades. Los tratamientos habituales — endodoncias, implantes, ortodoncia, blanqueamientos — requieren múltiples citas en secuencia. Si el paciente no llega a una, el tratamiento se interrumpe y hay que reorganizar toda la cadena.",
      },
      {
        tipo: "ul",
        items: [
          "Un blanqueamiento en consulta requiere 1-2 sesiones de 90 minutos con preparación específica",
          "Una endodoncia puede requerir 2 o 3 citas seguidas con materiales preparados de antemano",
          "Los controles de ortodoncia son cada 4-6 semanas durante años — requieren recordatorios periódicos constantes",
          "Las limpiezas preventivas de 2 veces al año se pierden si no hay un sistema que las recuerde",
        ],
      },
      {
        tipo: "p",
        texto:
          "Sin un sistema que gestione esa cadena automáticamente, el dentista o la recepcionista pasan una parte importante del día coordinando citas, recordando pacientes y reagendando interrupciones.",
      },
      { tipo: "h2", texto: "Cómo la agenda online resuelve estos problemas" },
      { tipo: "h3", texto: "Recordatorios automáticos con instrucciones específicas por procedimiento" },
      {
        tipo: "p",
        texto:
          "Para una extracción o una endodoncia, el paciente necesita llegar con indicaciones específicas: en ayunas si habrá anestesia, sin haber tomado ciertos medicamentos, con transporte de vuelta si el procedimiento es largo. Un sistema de agendamiento bien configurado envía esas instrucciones automáticamente por WhatsApp 48 horas antes según el tipo de procedimiento agendado, sin que nadie en la consulta tenga que recordarlo.",
      },
      { tipo: "h3", texto: "Cobro anticipado para procedimientos largos" },
      {
        tipo: "p",
        texto:
          "Para procedimientos de alto costo como implantes, carillas o tratamientos de ortodoncia, el cobro de un anticipo al momento de la reserva confirma el compromiso del paciente y cubre el costo de materiales que ya se prepararon. En Chile, el cobro anticipado con Webpay al momento de reservar online es la forma más fluida de implementar esta política sin incomodidad.",
      },
      { tipo: "h3", texto: "Seguimiento de tratamientos en múltiples etapas" },
      {
        tipo: "p",
        texto:
          "Al agendar el inicio de un tratamiento de varias sesiones, el sistema puede bloquear todas las citas del plan desde el principio. El paciente sabe sus fechas, recibe recordatorio para cada una y el dentista tiene la secuencia asegurada en su agenda. Si el paciente necesita reprogramar una sesión, el ajuste se hace sin perder el orden del tratamiento.",
      },
      { tipo: "h3", texto: "Recordatorios de controles preventivos anuales" },
      {
        tipo: "p",
        texto:
          "Una de las fuentes de ingreso más desaprovechadas en odontología son los controles y limpiezas preventivas de pacientes que ya atendiste pero que no vuelven porque nadie los contactó. Un sistema de agendamiento puede programar un recordatorio automático cada 6 meses para pacientes activos: \"Han pasado 6 meses desde tu última limpieza, ¿quieres agendar tu control?\" Eso genera citas que de otra forma simplemente no ocurrirían.",
      },
      { tipo: "h2", texto: "¿Recepcionista o sistema de agendamiento?" },
      {
        tipo: "p",
        texto:
          "Muchas consultas dentales tienen una recepcionista cuya función principal es coordinar citas, recordar pacientes y responder llamadas. Un sistema de agendamiento online no reemplaza a la recepcionista — libera su tiempo para atender mejor al paciente que está presente, en lugar de estar al teléfono coordinando al que viene la próxima semana.",
      },
      {
        tipo: "p",
        texto:
          "Para consultas unipersonales o con bajo volumen donde no hay recepcionista, el sistema de agendamiento es directamente el sustituto de esa función: atiende consultas de horario, confirma citas, envía recordatorios y gestiona cobros sin intervención del dentista durante la jornada.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Perdía entre 3 y 4 citas por semana por no-shows, y siempre eran los procedimientos largos donde ya había preparado todo. Desde que activé el recordatorio de WhatsApp y el cobro de anticipo online, bajo a 0 o 1 por semana.\" — Dentista, Las Condes",
      },
      { tipo: "h2", texto: "¿Cuánto vale recuperar una cita perdida?" },
      {
        tipo: "p",
        texto:
          "Un procedimiento de ortodoncia en Chile puede costar entre $800.000 y $2.000.000 el tratamiento completo, con controles mensuales de $30.000 a $60.000 cada uno. Una endodoncia parte desde $120.000. Con esos valores, recuperar incluso 1 cita perdida por semana con un sistema de recordatorios automáticos que cuesta menos de $30.000 mensuales es un retorno de inversión inmediato.",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 5 — MÉDICOS GENERALES ─────────────────────────────────────────
  {
    slug: "agenda-online-medicos-generales-chile-2026",
    titulo: "Agenda online para médicos generales en Chile 2026: organiza consultas, controles y telemedicina",
    excerpt:
      "El médico general independiente en Chile atiende desde consultas nuevas hasta controles crónicos y urgencias del día. Gestionar esa variedad de tipos de atención desde WhatsApp es ineficiente y genera confusión. Esta guía explica cómo una agenda online organiza todo ese flujo.",
    fecha: "2026-06-10",
    categoria: "Guías",
    tiempoLectura: 6,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "El médico general independiente en Chile atiende desde consultas nuevas hasta controles de enfermedades crónicas, certificados médicos y urgencias del día. Gestionar esa variedad de tipos de atención desde WhatsApp o por teléfono es ineficiente y genera confusión. Esta guía explica cómo una agenda online bien configurada organiza todo ese flujo sin complicaciones.",
      },
      { tipo: "h2", texto: "El problema de la agenda médica sin sistema" },
      {
        tipo: "p",
        texto:
          "Un médico general con consulta independiente puede recibir en un mismo día pacientes de control de hipertensión, una consulta nueva por síntomas respiratorios, un certificado médico de 10 minutos y una videoconsulta. Cada tipo de atención tiene duración diferente, requiere preparación distinta y en algunos casos implica documentación específica.",
      },
      {
        tipo: "p",
        texto:
          "Sin un sistema que diferencie esos tipos de atención, la agenda queda como un bloque uniforme de 30 minutos por paciente — lo que significa que el certificado ocupa el mismo espacio que una consulta nueva, y la urgencia del día desordena todo lo demás.",
      },
      { tipo: "h2", texto: "Tipos de atención y duraciones diferenciadas" },
      {
        tipo: "p",
        texto:
          "Una de las funcionalidades más útiles para médicos generales es poder definir distintos tipos de consulta con duraciones y precios propios. El paciente elige al reservar qué tipo de atención necesita, y el sistema bloquea automáticamente el tiempo correcto.",
      },
      {
        tipo: "ul",
        items: [
          "Consulta nueva (45 min) — primera vez del paciente, anamnesis completa",
          "Control de paciente crónico (20 min) — revisión periódica, renovación de recetas",
          "Certificado médico (10 min) — atención puntual, sin historial previo necesario",
          "Videoconsulta (30 min) — atención remota, misma agenda que la presencial",
          "Urgencia del día (20 min) — espacio reservado en la agenda para imprevistos",
        ],
      },
      { tipo: "h2", texto: "Lista de espera y agenda del día" },
      {
        tipo: "p",
        texto:
          "En medicina general la demanda suele superar la disponibilidad. Una lista de espera integrada al sistema de agendamiento permite que cuando se libera un cupo — por cancelación o reagendamiento — el sistema notifique automáticamente a quienes están esperando. El médico no tiene que coordinar nada: el cupo se rellena solo.",
      },
      {
        tipo: "p",
        texto:
          "Para las urgencias del día, la práctica más eficiente es reservar 2 o 3 bloques cortos al inicio de cada jornada sin asignar a nadie. Si hay urgencia, se usa. Si no hay, se liberan y el sistema puede ofrecerlos a pacientes en lista de espera.",
      },
      { tipo: "h2", texto: "Telemedicina integrada en la misma agenda" },
      {
        tipo: "p",
        texto:
          "La videoconsulta ya no es excepcional — es una modalidad permanente en la práctica médica independiente en Chile. Un sistema de agendamiento moderno trata la videoconsulta como un tipo de atención más: el paciente reserva online, recibe el link de conexión automáticamente por WhatsApp, y el médico tiene la sala virtual lista sin configurar nada el día de la consulta.",
      },
      {
        tipo: "p",
        texto:
          "La ventaja adicional: la telemedicina amplía geográficamente la práctica. Un médico en Santiago puede atender pacientes de regiones que no tienen especialista disponible, sin mover su agenda física.",
      },
      { tipo: "h2", texto: "Cobro y gestión de documentos" },
      {
        tipo: "p",
        texto:
          "El cobro anticipado con Webpay al momento de la reserva es especialmente útil para consultas nuevas y videoconsultas, donde el compromiso del paciente es más bajo que en controles de largo plazo. Para controles de pacientes crónicos de largo historial, muchos médicos prefieren cobrar al finalizar — el sistema permite configurar ambas modalidades según el tipo de atención.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Antes mezclaba controles de 20 minutos con consultas nuevas de 45 y siempre me atrasaba. Desde que cada tipo de atención tiene su propio bloque en la agenda, la jornada fluye sola y termino a la hora.\" — Médico general, Providencia",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 6 — MATRONAS ───────────────────────────────────────────────────
  {
    slug: "agenda-online-matronas-chile-2026",
    titulo: "Agenda online para matronas en Chile 2026: gestiona controles prenatales, educación y urgencias",
    excerpt:
      "La matrona independiente en Chile gestiona un flujo de atención que combina controles prenatales periódicos, sesiones de educación prenatal, atención de urgencias y en algunos casos telemedicina. Esta guía explica cómo una agenda online organiza esa complejidad.",
    fecha: "2026-06-11",
    categoria: "Guías",
    tiempoLectura: 6,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "La matrona independiente en Chile gestiona un flujo de atención que combina controles prenatales periódicos, sesiones de educación prenatal grupales o individuales, atención de urgencias y seguimiento postparto. Sin un sistema que organice esa variedad, la agenda se vuelve difícil de controlar y las pacientes caen entre los intersticios del seguimiento.",
      },
      { tipo: "h2", texto: "La particularidad del seguimiento obstétrico" },
      {
        tipo: "p",
        texto:
          "El embarazo tiene una cadencia clínica clara: controles mensuales hasta las 28 semanas, quincenales hasta las 36, y semanales después. Una matrona que atiende 20 embarazadas simultáneamente necesita gestionar decenas de citas distribuidas en esas frecuencias, con recordatorios oportunos para cada etapa.",
      },
      {
        tipo: "p",
        texto:
          "Sin un sistema automatizado, ese seguimiento depende de que la matrona recuerde cuándo llamar a cada paciente o de que la paciente recuerde agendar su próximo control. Ambas opciones generan brechas en el seguimiento.",
      },
      { tipo: "h2", texto: "Tipos de atención para matronas" },
      {
        tipo: "ul",
        items: [
          "Control prenatal (30-40 min) — seguimiento periódico según edad gestacional",
          "Primera consulta preconcepcional (45 min) — evaluación inicial, más extensa",
          "Educación prenatal individual (60 min) — preparación al parto, lactancia",
          "Educación prenatal grupal — taller con varias parejas, bloqueo de sala",
          "Control postparto (30 min) — seguimiento madre e hijo tras el alta",
          "Videoconsulta (20-30 min) — seguimiento remoto para pacientes de regiones",
        ],
      },
      { tipo: "h2", texto: "Recordatorios con indicaciones específicas por control" },
      {
        tipo: "p",
        texto:
          "Cada control prenatal tiene indicaciones distintas: algunas semanas requieren ayuno para exámenes, otras llevar el carné de control, otras venir acompañada. Un sistema de agendamiento permite configurar mensajes de recordatorio personalizados por tipo de control, de manera que la paciente reciba automáticamente las instrucciones correctas para su próxima cita.",
      },
      {
        tipo: "p",
        texto:
          "Esto reduce las consultas de \"¿qué necesito traer?\" que llegan el día anterior, y mejora la calidad de la atención porque las pacientes llegan preparadas.",
      },
      { tipo: "h2", texto: "Gestión de talleres de educación prenatal" },
      {
        tipo: "p",
        texto:
          "Los talleres grupales tienen una lógica diferente a las consultas individuales: hay un cupo máximo por sesión, las participantes se inscriben con anticipación y la cancelación de una no afecta al resto. Un sistema de agendamiento que maneje grupos permite abrir inscripción online para el taller, mostrar los cupos disponibles en tiempo real y cerrar automáticamente cuando se completa.",
      },
      { tipo: "h2", texto: "Seguimiento postparto automático" },
      {
        tipo: "p",
        texto:
          "Una de las brechas más comunes en la atención obstétrica independiente es el seguimiento postparto: la madre sale del hospital con toda la atención puesta en el recién nacido, y el control con la matrona queda postergado o se olvida. Un sistema que envíe automáticamente un recordatorio a los 7 días del parto con el link de reserva del control postparto captura esas citas que de otra forma no ocurrirían.",
      },
      {
        tipo: "destacado",
        texto:
          "\"El cambio más grande fue en los talleres prenatales. Antes coordinaba las inscripciones por WhatsApp y siempre había confusión con los cupos. Ahora el sistema maneja todo y yo solo aparezco el día del taller.\" — Matrona, Viña del Mar",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 7 — ABOGADOS ───────────────────────────────────────────────────
  {
    slug: "agenda-online-abogados-estudios-juridicos-chile-2026",
    titulo: "Agenda online para abogados y estudios jurídicos en Chile 2026: gestiona consultas y cobra tu tiempo",
    excerpt:
      "El tiempo del abogado es su principal activo. Cada hora no facturada, cada reunión que no se confirma o cada consulta que se cancela a último momento es ingreso perdido. Esta guía explica cómo una agenda digital bien configurada protege ese tiempo y profesionaliza la relación con el cliente.",
    fecha: "2026-06-12",
    categoria: "Guías",
    tiempoLectura: 6,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "El tiempo del abogado es su principal activo. Cada hora no facturada, cada reunión que no se confirma o cada consulta que se cancela a último momento es ingreso perdido. En un estudio jurídico independiente o boutique, esa pérdida se acumula rápidamente. Una agenda digital bien configurada protege ese tiempo y profesionaliza la relación con el cliente desde el primer contacto.",
      },
      { tipo: "h2", texto: "Por qué la gestión de agenda importa especialmente en derecho" },
      {
        tipo: "p",
        texto:
          "A diferencia de otras profesiones, el abogado independiente factura por tiempo. Una reunión de una hora tiene un valor claro y concreto. Cuando esa reunión no se presenta, no llega aviso, o el cliente llega 20 minutos tarde sin haber confirmado, el impacto económico es directo e inmediato.",
      },
      {
        tipo: "p",
        texto:
          "Además, la primera impresión importa mucho en el mundo jurídico. Un abogado que responde consultas por WhatsApp y coordina reuniones a mano proyecta una imagen diferente a uno que tiene un sistema de reservas online profesional con confirmación automática y recordatorios. La tecnología de agenda es también una señal de seriedad profesional.",
      },
      { tipo: "h2", texto: "Tipos de atención para abogados" },
      {
        tipo: "ul",
        items: [
          "Consulta inicial (45-60 min) — evaluación del caso, puede tener cobro fijo anticipado",
          "Reunión de seguimiento (30 min) — actualización de caso con cliente activo",
          "Reunión de firma (20-30 min) — revisión y firma de documentos",
          "Videoreunión (45 min) — para clientes en regiones o en el extranjero",
          "Asesoría empresarial (60-90 min) — para clientes corporativos con casos complejos",
        ],
      },
      { tipo: "h2", texto: "El cobro de la consulta inicial" },
      {
        tipo: "p",
        texto:
          "La consulta inicial es el momento más crítico desde el punto de vista económico para el abogado independiente. Es el punto de entrada de clientes nuevos, y también el más propenso a cancelaciones de último minuto porque el cliente aún no tiene una relación establecida con el profesional.",
      },
      {
        tipo: "p",
        texto:
          "Implementar cobro anticipado para la consulta inicial — un monto fijo que el cliente paga online al reservar — cumple tres funciones: confirma el compromiso del cliente, cubre el costo del tiempo preparatorio del abogado, y filtra consultas de personas que no tienen intención real de contratar. El cobro con Webpay al momento de la reserva es la forma más fluida de implementarlo en Chile.",
      },
      { tipo: "h2", texto: "Confidencialidad y manejo de la información" },
      {
        tipo: "p",
        texto:
          "Una preocupación válida de los abogados al adoptar tecnología de agenda es la confidencialidad. El sistema de agendamiento no accede ni almacena información del caso — solo gestiona fechas, horas, datos de contacto básicos del cliente y el tipo de reunión. El contenido de cada consulta sigue siendo exclusivamente entre el abogado y su cliente.",
      },
      { tipo: "h2", texto: "Agenda para estudios con varios abogados" },
      {
        tipo: "p",
        texto:
          "En estudios jurídicos boutique con 2 a 5 abogados, una agenda centralizada permite que el cliente pueda reservar con el abogado específico de su caso o con el primero disponible del equipo. El socio o administrador ve la agenda completa del estudio desde un solo panel, sin tener que consolidar calendarios separados.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Implementé el cobro de la consulta inicial online y mis no-shows bajaron a cero. El cliente que paga $30.000 para reservar llega. El que no está dispuesto a pagar probablemente tampoco iba a contratar.\" — Abogado, Santiago",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 8 — YOGA Y BIENESTAR ───────────────────────────────────────────
  {
    slug: "agenda-online-yoga-pilates-bienestar-chile-2026",
    titulo: "Agenda online para clases de yoga y pilates en Chile 2026: gestiona clases, paquetes y listas de espera",
    excerpt:
      "Yoga, pilates, meditación y otras disciplinas de bienestar tienen una dinámica de agenda única: clases individuales y grupales, paquetes de sesiones, instructores múltiples y listas de espera para las clases más populares. Esta guía explica cómo un sistema de agendamiento organiza todo ese flujo.",
    fecha: "2026-06-13",
    categoria: "Guías",
    tiempoLectura: 6,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "Yoga, pilates, meditación y otras disciplinas de bienestar tienen una dinámica de agenda única: clases individuales y grupales, paquetes de sesiones mensuales, instructores múltiples con disponibilidades distintas y listas de espera para las clases más populares. Sin un sistema que gestione esa complejidad, la coordinación se convierte en un trabajo en sí mismo.",
      },
      { tipo: "h2", texto: "Clases individuales vs. clases grupales: dos lógicas distintas" },
      {
        tipo: "p",
        texto:
          "Una clase individual de yoga o pilates funciona como cualquier otra cita profesional: un horario, un instructor, un alumno. La clase grupal tiene una lógica diferente: hay un cupo máximo, los alumnos se inscriben en forma independiente, y la clase ocurre aunque algunos cancelen.",
      },
      {
        tipo: "p",
        texto:
          "Un sistema de agendamiento bien configurado maneja ambas lógicas: para clases individuales funciona como agenda de citas; para clases grupales muestra el cupo disponible en tiempo real, permite inscripción online y cierra automáticamente cuando se completa.",
      },
      { tipo: "h2", texto: "Paquetes de clases y membresías" },
      {
        tipo: "p",
        texto:
          "El modelo más común en yoga y pilates es la venta de paquetes: 4, 8 o 12 clases con un precio especial respecto a la clase suelta. Un sistema de agendamiento que gestiona paquetes lleva automáticamente el saldo de cada alumno: cuántas clases quedan, cuándo expira el paquete y un aviso cuando quedan pocas clases para facilitar la renovación.",
      },
      {
        tipo: "p",
        texto:
          "Esto elimina una fuente importante de conflicto: el alumno que cree que le quedan 3 clases cuando en realidad ya las usó, o el paquete que expiró sin que nadie lo advirtiera. El sistema es el árbitro neutro.",
      },
      { tipo: "h2", texto: "Lista de espera para clases populares" },
      {
        tipo: "p",
        texto:
          "Las clases más populares — el yoga de las 7 AM, el reformer de pilates del martes — se llenan rápido. Sin lista de espera, cuando alguien cancela el cupo queda vacío aunque haya otros alumnos que quisieran tomarlo. Con lista de espera integrada, la cancelación de un alumno dispara automáticamente una notificación al primero en la lista, quien puede confirmar su ingreso con un clic.",
      },
      { tipo: "h2", texto: "Múltiples instructores en una sola plataforma" },
      {
        tipo: "p",
        texto:
          "Los centros con más de un instructor necesitan una agenda que muestre la disponibilidad de cada uno por separado, permita a los alumnos elegir con quién quieren practicar, y le dé al administrador del centro una vista completa de toda la operación. Eso es exactamente lo que hace una plataforma de agendamiento multiusuario: cada instructor gestiona su propio calendario, y el dueño del centro ve el panorama completo.",
      },
      { tipo: "h2", texto: "Recordatorios que reducen las ausencias en clases" },
      {
        tipo: "p",
        texto:
          "En yoga y pilates, la ausencia a una clase grupal afecta al instructor y a la energía del grupo, además de ser un cupo que pudo haberse dado a alguien en lista de espera. Los recordatorios automáticos por WhatsApp — la noche anterior y 2 horas antes — reducen significativamente las ausencias de último minuto y, cuando el alumno sí va a faltar, le recuerdan que debe liberar su cupo a tiempo.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Antes gestionaba 4 instructores, 12 tipos de clase y 200 alumnos activos con planillas de Excel y WhatsApp. En un mes con attempo todo quedó automatizado. Lo que más valoro es la lista de espera — llenamos todas las clases sin esfuerzo.\" — Directora de centro de yoga, Santiago",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 9 — CENTROS CLÍNICOS ───────────────────────────────────────────
  {
    slug: "agenda-online-centros-clinicos-chile-2026",
    titulo: "Software de agendamiento para centros clínicos en Chile 2026: gestiona múltiples profesionales desde un solo panel",
    excerpt:
      "Un centro clínico con 3 o más profesionales enfrenta desafíos de coordinación que no tienen solución con herramientas de agenda individual. Esta guía explica cómo un software de agendamiento centralizado transforma la operación de un centro de salud en Chile.",
    fecha: "2026-06-14",
    categoria: "Guías",
    tiempoLectura: 7,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "Un centro clínico con 3 o más profesionales enfrenta desafíos de coordinación que no tienen solución con herramientas de agenda individual. Cada profesional tiene su propia disponibilidad, sus propios tipos de atención y sus propios pacientes — pero el centro necesita una visión unificada para coordinar salas, recepción y facturación. Esta guía explica cómo un software de agendamiento centralizado transforma esa operación.",
      },
      { tipo: "h2", texto: "El problema de las agendas descentralizadas" },
      {
        tipo: "p",
        texto:
          "El escenario más común en centros clínicos pequeños y medianos en Chile es que cada profesional lleva su propia agenda — uno por WhatsApp, otro con agenda física, otro con un calendario de Google personal. La recepcionista intenta coordinar todo eso al mismo tiempo, con el riesgo de reservar la misma sala para dos profesionales en el mismo horario, o perder pacientes que llamaron cuando no había nadie disponible para responder.",
      },
      {
        tipo: "ul",
        items: [
          "Conflictos de sala: dos profesionales asignados al mismo espacio en el mismo horario",
          "Pacientes perdidos: llamadas sin respuesta fuera del horario de recepción",
          "Falta de visibilidad: el director del centro no sabe qué tan ocupado está cada profesional",
          "Cobros inconsistentes: cada profesional cobra de forma diferente sin registro centralizado",
          "Informes imposibles: no hay datos consolidados de rendimiento por profesional o especialidad",
        ],
      },
      { tipo: "h2", texto: "Cómo funciona una agenda centralizada para centros" },
      {
        tipo: "p",
        texto:
          "Una plataforma de agendamiento multiusuario da a cada profesional su propio perfil y calendario, mientras el administrador del centro tiene una vista unificada de toda la operación. Los pacientes pueden reservar online eligiendo especialidad y profesional disponible, o la recepcionista puede agendar directamente desde el panel central.",
      },
      {
        tipo: "p",
        texto:
          "Las salas y recursos físicos se configuran como activos del centro: cuando un profesional agenda una cita, el sistema verifica automáticamente que la sala esté disponible y la bloquea. Los conflictos de sala desaparecen porque el sistema los previene antes de que ocurran.",
      },
      { tipo: "h2", texto: "Reservas online para el centro completo" },
      {
        tipo: "p",
        texto:
          "Un portal de reservas online del centro permite que los pacientes agenden con cualquier profesional disponible en el horario que les acomoda, sin llamar a recepción. Esto reduce la carga de la recepción, amplía el horario de disponibilidad para reservas (24/7 en lugar del horario de oficina) y mejora la experiencia del paciente.",
      },
      {
        tipo: "p",
        texto:
          "Para el centro, cada reserva online es un ingreso asegurado antes de que el paciente llegue — especialmente cuando se integra cobro anticipado con Webpay, que confirma el compromiso y reduce los no-shows en toda la cartera de profesionales.",
      },
      { tipo: "h2", texto: "Reportes por profesional y por especialidad" },
      {
        tipo: "p",
        texto:
          "Una de las ventajas menos visibles pero más valiosas de un sistema centralizado es la data. El director del centro puede ver en tiempo real cuántas citas tuvo cada profesional, cuántas se cancelaron, cuánto se facturó por especialidad y cuáles son los horarios de mayor y menor demanda. Con esa información se pueden tomar decisiones concretas: ampliar la disponibilidad del profesional más demandado, abrir un nuevo horario de tarde o ajustar la distribución de salas.",
      },
      { tipo: "h2", texto: "Chatbot IA para atención 24/7 del centro" },
      {
        tipo: "p",
        texto:
          "Un centro clínico recibe consultas fuera del horario de recepción: pacientes que preguntan disponibilidad a las 9 de la noche, familias que buscan hora para el día siguiente antes de que abra la recepción. Un chatbot con inteligencia artificial integrado al sistema de agendamiento atiende esas consultas de forma automática, verifica disponibilidad de todos los profesionales y completa la reserva sin intervención humana.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Pasamos de 3 agendas separadas en papel y WhatsApp a un sistema centralizado en una semana. El cambio más grande no fue la tecnología — fue que por primera vez podemos ver el rendimiento real del centro y tomar decisiones con datos.\" — Director de centro médico, Las Condes",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 10 (anterior 5) ─────────────────────────────────────────────────
  {
    slug: "chatbot-ia-agendamiento-citas-chile-2026",
    titulo: "Chatbot IA para agendamiento de citas en Chile: qué es, cómo funciona y por qué cambia todo",
    excerpt:
      "El chatbot con inteligencia artificial ya no es un lujo para grandes clínicas. En 2026, cualquier profesional independiente en Chile puede tener un asistente virtual que atiende por WhatsApp, Instagram y Messenger las 24 horas, agenda citas y responde preguntas sin que el profesional mueva un dedo.",
    fecha: "2026-06-05",
    categoria: "Tecnología",
    tiempoLectura: 7,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "El chatbot con inteligencia artificial ya no es un lujo para grandes clínicas. En 2026, cualquier profesional independiente en Chile puede tener un asistente virtual que atiende por WhatsApp, Instagram y Messenger las 24 horas, agenda citas y responde preguntas sin intervención del profesional. Esta guía explica qué es, cómo funciona y qué impacto real tiene en tu consulta o negocio.",
      },
      { tipo: "h2", texto: "¿Qué es un chatbot IA para agendamiento?" },
      {
        tipo: "p",
        texto:
          "Un chatbot de inteligencia artificial para agendamiento es un asistente virtual que conversa con tus pacientes o clientes en lenguaje natural — por WhatsApp, Instagram, Messenger u otros canales — y es capaz de responder preguntas, verificar tu disponibilidad en tiempo real y completar una reserva de cita sin que tengas que intervenir.",
      },
      {
        tipo: "p",
        texto:
          "A diferencia de los bots de respuesta automática básicos que solo envían mensajes predefinidos, un chatbot IA entiende el contexto de la conversación. Si un paciente escribe \"necesito una hora para la próxima semana, de preferencia en la tarde\", el chatbot interpreta la intención, consulta la agenda y ofrece opciones disponibles — tal como lo haría una recepcionista humana.",
      },
      { tipo: "h2", texto: "¿Cómo funciona en la práctica?" },
      { tipo: "h3", texto: "1. El paciente inicia la conversación" },
      {
        tipo: "p",
        texto:
          "El flujo comienza cuando un paciente o cliente te escribe por WhatsApp, hace clic en el botón de mensaje de tu perfil de Instagram, o te contacta por Messenger. En ese momento, el chatbot toma el control de la conversación automáticamente.",
      },
      { tipo: "h3", texto: "2. El chatbot entiende qué necesita" },
      {
        tipo: "p",
        texto:
          "El modelo de inteligencia artificial procesa el mensaje y determina la intención: ¿quiere agendar una cita? ¿preguntar el precio de un servicio? ¿saber si hay disponibilidad esta semana? ¿cancelar una hora existente? Para cada intención hay un flujo de respuesta diferente.",
      },
      { tipo: "h3", texto: "3. Consulta tu agenda en tiempo real" },
      {
        tipo: "p",
        texto:
          "Si la intención es agendar, el chatbot consulta directamente tu disponibilidad actualizada y ofrece las opciones reales. No hay lag, no hay \"te confirmo mañana\" — la información es en tiempo real, igual que si el paciente mirara tu calendario directamente.",
      },
      { tipo: "h3", texto: "4. Confirma la cita y cobra si corresponde" },
      {
        tipo: "p",
        texto:
          "Una vez que el paciente elige fecha y hora, el chatbot puede solicitar el cobro anticipado con Webpay antes de confirmar la reserva. Cuando el pago se procesa, la cita queda bloqueada en tu agenda y ambas partes reciben confirmación automática.",
      },
      { tipo: "h2", texto: "¿Por qué WhatsApp, Instagram y Messenger?" },
      {
        tipo: "p",
        texto:
          "El canal importa más que la tecnología. WhatsApp tiene una tasa de apertura del 98% en Chile — comparado con el 22% del email. Instagram es donde muchos profesionales independientes tienen su principal presencia de marca. Messenger conecta con quienes llegan desde Facebook. Un chatbot que solo funciona en el sitio web pierde la conversación antes de empezar: los pacientes ya están en sus apps favoritas y no van a cambiar de canal para agendar.",
      },
      {
        tipo: "p",
        texto:
          "La diferencia entre un chatbot solo en la web y un chatbot multicanal (WhatsApp + Instagram + Messenger) puede ser la diferencia entre capturar el 30% o el 90% de las conversaciones que llegan.",
      },
      { tipo: "h2", texto: "¿Qué preguntas puede responder el chatbot IA?" },
      {
        tipo: "ul",
        items: [
          "¿Cuál es el precio de una consulta?",
          "¿Tienen disponibilidad esta semana?",
          "¿Cómo llego a la dirección?",
          "¿Cuánto dura la sesión?",
          "Quiero cancelar mi cita del jueves",
          "¿Puedo reagendar para la próxima semana?",
          "¿Cómo pago? ¿Aceptan transferencia?",
        ],
      },
      {
        tipo: "p",
        texto:
          "Cualquier pregunta que un paciente haría a una recepcionista en horario de oficina, el chatbot puede responderla a las 2 de la mañana, el domingo o en medio de tu consulta. Sin interrupciones, sin demoras.",
      },
      { tipo: "h2", texto: "¿Para qué tipo de profesional tiene más sentido?" },
      {
        tipo: "p",
        texto:
          "El chatbot IA tiene mayor impacto en profesionales o negocios donde el volumen de consultas entrantes es alto y la disponibilidad para responderlas en tiempo real es baja. Algunos ejemplos concretos:",
      },
      {
        tipo: "ul",
        items: [
          "Psicólogos y psiquiatras con lista de espera activa — el chatbot gestiona la lista y notifica cuando hay cupos",
          "Nutricionistas con alta demanda de consultas iniciales — el bot filtra, informa y agenda sin intervención",
          "Barberías y centros estéticos con múltiples profesionales — el chatbot maneja reservas en paralelo para distintos servicios",
          "Centros clínicos con varios especialistas — una sola interfaz de conversación que distribuye citas según disponibilidad",
          "Kinesiólogos y fisioterapeutas con paquetes de sesiones — el bot informa el estado del paquete y facilita la renovación",
        ],
      },
      { tipo: "h2", texto: "¿Cuánto tiempo ahorra en la práctica?" },
      {
        tipo: "p",
        texto:
          "Según datos de uso de la plataforma, los profesionales que activan el chatbot IA de attempo reducen su tiempo de gestión de mensajes en un 73% en promedio. Para un profesional que antes invertía 90 minutos diarios respondiendo consultas, eso se traduce en 65 minutos diarios liberados — más de 20 horas al mes.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Antes revisaba el WhatsApp cada 30 minutos para no perder consultas de pacientes nuevos. Desde que activé el chatbot, solo entro cuando hay algo que el bot no pudo resolver — que es muy poco.\" — Psiquiatra, Santiago",
      },
      { tipo: "h2", texto: "¿Es difícil de configurar?" },
      {
        tipo: "p",
        texto:
          "No. La configuración del chatbot IA en attempo se hace en menos de 15 minutos: describes tus servicios, tus preguntas frecuentes y tu disponibilidad horaria, y el sistema entrena al bot con esa información. No necesitas saber programación ni tener conocimientos técnicos. Si tu información cambia, la actualizas desde el panel y el chatbot aprende el cambio de inmediato.",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 4 ──────────────────────────────────────────────────────────────
  {
    slug: "agenda-online-nutricionistas-chile-2026",
    titulo: "Agenda online para nutricionistas en Chile 2026: guía práctica para gestionar tu consulta",
    excerpt:
      "Los nutricionistas independientes en Chile enfrentan un desafío particular: pacientes que necesitan seguimiento continuo, paquetes de sesiones y control de evolución. Esta guía explica cómo una agenda online bien configurada transforma la gestión de tu consulta.",
    fecha: "2026-06-06",
    categoria: "Guías",
    tiempoLectura: 6,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "Los nutricionistas independientes en Chile enfrentan un desafío particular: pacientes que necesitan seguimiento continuo, paquetes de consultas y control de evolución a lo largo del tiempo. La agenda digital no es solo un calendario — es la herramienta que organiza ese flujo y garantiza que cada paciente tenga su próxima cita agendada antes de salir de la consulta anterior.",
      },
      { tipo: "h2", texto: "El flujo de trabajo del nutricionista independiente" },
      {
        tipo: "p",
        texto:
          "Una consulta nutricional no termina cuando el paciente se va. Hay que programar el control a las 3 semanas, enviar las indicaciones por WhatsApp, recordar la próxima cita, llevar registro de qué plan está siguiendo cada paciente y actualizar los datos de evolución. Sin un sistema centralizado, todo eso se hace entre la cabeza, el WhatsApp y alguna planilla.",
      },
      {
        tipo: "p",
        texto:
          "El resultado típico: pacientes que se pierden en el seguimiento, controles que no se coordinan a tiempo y horas de gestión administrativa que podrían estar en atención. Una agenda online bien configurada elimina la mayoría de esa carga.",
      },
      { tipo: "h2", texto: "Las 4 funcionalidades que más importan para nutricionistas" },
      { tipo: "h3", texto: "Paquetes de consultas" },
      {
        tipo: "p",
        texto:
          "Es muy común en nutrición vender un \"plan\" de 3, 5 u 8 consultas. Un sistema de agendamiento que gestiona paquetes lleva automáticamente el conteo: cuántas consultas quedan disponibles por paciente, cuándo se acerca el final del paquete y facilita la renovación antes de que expire. Sin esto, ese control queda en una planilla o en tu memoria.",
      },
      { tipo: "h3", texto: "Recordatorios automáticos con instrucciones previas" },
      {
        tipo: "p",
        texto:
          "El recordatorio del control de nutrición tiene una particularidad: el paciente necesita llegar en ayunas o con registros de lo que comió. Un buen sistema no solo recuerda la hora — también puede enviar las indicaciones específicas automáticamente 24 horas antes. Eso reduce las consultas que se pierden porque el paciente olvidó las instrucciones.",
      },
      { tipo: "h3", texto: "Historial de consultas y evolución" },
      {
        tipo: "p",
        texto:
          "Tener en el mismo sistema las fechas de cada consulta, el tipo de atención y las notas de seguimiento permite entrar a cada sesión con el contexto completo sin buscar en otro lado. No reemplaza una ficha clínica compleja, pero sí da la información básica que necesitas antes de iniciar la consulta.",
      },
      { tipo: "h3", texto: "Cobro anticipado o reserva confirmada" },
      {
        tipo: "p",
        texto:
          "En nutrición la inasistencia impacta especialmente porque las consultas tienen preparación previa. El cobro anticipado con Webpay — que el paciente paga al momento de reservar — confirma el compromiso. Alternativamente, un sistema que exige confirmación explícita antes de la hora reduce los no-shows significativamente.",
      },
      { tipo: "h2", texto: "¿Cómo organizar la agenda de seguimiento?" },
      {
        tipo: "p",
        texto:
          "El patrón más eficiente que vemos en nutricionistas que usan attempo es este: al finalizar cada consulta, el profesional abre el sistema desde el celular y agenda el próximo control con el paciente presente. El sistema envía la confirmación automática al momento, y el recordatorio llega solo cuando corresponde. No hay que recordar coordinar nada después.",
      },
      {
        tipo: "ul",
        items: [
          "Consulta inicial: el paciente reserva online o el profesional agenda en el momento",
          "Al terminar: se agenda el próximo control antes de que el paciente salga",
          "48 horas antes: recordatorio automático con instrucciones de preparación",
          "2 horas antes: segundo recordatorio por WhatsApp",
          "Si hay paquete: el sistema avisa cuando quedan 1 o 2 consultas disponibles",
        ],
      },
      { tipo: "h2", texto: "¿Cuánto tiempo tarda en configurarse?" },
      {
        tipo: "p",
        texto:
          "Para un nutricionista independiente, configurar una agenda online en attempo toma entre 10 y 20 minutos: defines tus tipos de consulta (inicial, control, paquete), la duración de cada una, el precio, tu disponibilidad semanal y las instrucciones previas que quieres enviar. Después solo compartes tu link de reservas con tus pacientes y el sistema hace el resto.",
      },
      {
        tipo: "destacado",
        texto:
          "\"El cambio más grande fue que dejé de perseguir a los pacientes para coordinar sus controles. Ahora ellos reservan solos, les llega el recordatorio y yo solo me preocupo de atender.\" — Nutricionista, Viña del Mar",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 5 ──────────────────────────────────────────────────────────────
  {
    slug: "agenda-online-barberias-esteticas-chile-2026",
    titulo: "Agenda online para barberías y centros estéticos en Chile 2026: cómo eliminar los no-shows",
    excerpt:
      "En barberías y centros estéticos, una silla vacía es dinero que no vuelve. Los no-shows son el problema número uno de la industria, y en 2026 tiene solución: cobro anticipado, recordatorios automáticos y reservas online 24/7 sin que el dueño tenga que responder mensajes.",
    fecha: "2026-06-07",
    categoria: "Guías",
    tiempoLectura: 6,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "En barberías y centros estéticos, una silla vacía es dinero que no vuelve. A diferencia de otros negocios, no puedes recuperar esa hora — y si el cliente no avisó, tampoco pudiste reasignarla. En 2026, ese problema tiene solución directa: cobro anticipado, recordatorios automáticos y sistema de reservas online que funciona las 24 horas sin que el dueño tenga que estar al teléfono.",
      },
      { tipo: "h2", texto: "El costo real de un no-show en barbería o estética" },
      {
        tipo: "p",
        texto:
          "Un corte de cabello en Santiago cuesta entre $10.000 y $25.000. Un tratamiento estético puede ir de $30.000 a $150.000. Si un profesional tiene 3 no-shows por semana, está perdiendo entre $90.000 y $450.000 al mes en ingresos que ya tenía agendados pero que nunca llegaron. Y eso sin contar el costo del tiempo del profesional que esperó sin poder hacer otra cosa.",
      },
      {
        tipo: "p",
        texto:
          "El problema no es que los clientes sean irresponsables. El 68% de las inasistencias ocurre simplemente porque la persona olvidó la cita. Un recordatorio de WhatsApp 24 horas antes y otro 2 horas antes habría convertido la mayoría de esos no-shows en asistencias — o en cancelaciones a tiempo para reasignar el espacio.",
      },
      { tipo: "h2", texto: "Las 3 herramientas que más impactan en barberías y estéticas" },
      { tipo: "h3", texto: "Reservas online 24/7 con link compartible" },
      {
        tipo: "p",
        texto:
          "El cliente que ve tu post de Instagram a las 10 de la noche y quiere reservar para el sábado no va a esperarte hasta las 9 AM para llamar. Con un link de reservas, elige el servicio, el profesional disponible, la fecha y la hora en menos de 2 minutos. La reserva queda confirmada automáticamente y tú la ves en tu agenda cuando te levantas.",
      },
      { tipo: "h3", texto: "Cobro anticipado para confirmar el turno" },
      {
        tipo: "p",
        texto:
          "Esta es la herramienta más directa contra los no-shows. Si el cliente pagó $15.000 para reservar su hora, tiene un incentivo concreto para llegar o avisar con tiempo. Los negocios que implementan cobro anticipado (aunque sea parcial, como un abono del 50%) reportan una reducción de no-shows de entre el 70% y el 90%. Es el cambio de mayor impacto por el menor esfuerzo.",
      },
      { tipo: "h3", texto: "Recordatorios automáticos por WhatsApp" },
      {
        tipo: "p",
        texto:
          "No dependas de que el cliente recuerde solo. El sistema envía un recordatorio automático 48 horas antes (con opción de confirmar o cancelar) y otro 2 horas antes el mismo día. Si cancela a tiempo, liberas el espacio para otra reserva. Si confirma, llegas preparado. En ambos casos, ganaste.",
      },
      { tipo: "h2", texto: "¿Cómo manejar múltiples profesionales desde una sola agenda?" },
      {
        tipo: "p",
        texto:
          "Uno de los desafíos específicos de barberías y centros estéticos con más de un profesional es coordinar disponibilidades sin que las reservas se pisen. Un sistema de agendamiento con múltiples perfiles permite que cada barbero o esteticista tenga su propio calendario, y los clientes pueden elegir con quién quieren atenderse o reservar con el primero disponible.",
      },
      {
        tipo: "ul",
        items: [
          "Cada profesional tiene su propio link de reservas o todos comparten uno general",
          "Las reservas se asignan al profesional correcto sin confusiones",
          "El dueño ve la agenda completa del local desde un solo panel",
          "Los recordatorios salen con el nombre del profesional asignado",
        ],
      },
      { tipo: "h2", texto: "El impacto en la reputación online" },
      {
        tipo: "p",
        texto:
          "Un sistema de reservas profesional también impacta cómo te perciben los clientes nuevos. Un barbero o esteticista con link de reservas en Instagram y Google Maps transmite profesionalismo. Cuando un cliente busca en Google \"barbería en [tu comuna]\" y tu ficha tiene reservas online activadas, la probabilidad de que haga clic aumenta significativamente.",
      },
      {
        tipo: "p",
        texto:
          "Además, cuando la experiencia de reserva es fluida — confirma rápido, recibe recordatorio, llega a tiempo — el cliente tiene una mejor predisposición a dejar una reseña positiva. Y las reseñas son el activo más valioso para un negocio local en Google.",
      },
      {
        tipo: "destacado",
        texto:
          "\"Antes perdía 2 o 3 horas al día respondiendo mensajes de reservas. Ahora solo entro al sistema a ver la agenda del día. Los clientes reservan solos, pagan solos y llegan solos. Mi trabajo es cortar pelo, no gestionar WhatsApp.\" — Barbero, Santiago",
      },
      { tipo: "h2", texto: "¿Cuánto cuesta implementarlo?" },
      {
        tipo: "p",
        texto:
          "Un sistema de agendamiento profesional para una barbería o centro estético en Chile parte desde $24.990 CLP al mes. Para un local con 4 o 5 turnos diarios, recuperar 1 no-show por semana a $15.000 ya cubre el costo del sistema. El resto es ganancia neta.",
      },
      { tipo: "cta" },
    ],
  },
  // ── ARTÍCULO 6 ──────────────────────────────────────────────────────────────
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
  // ── ARTÍCULO: AGENDA DE CITAS MÉDICAS ───────────────────────────────────────
  {
    slug: "agenda-de-citas-medicas-online-chile-2026",
    titulo: "Agenda de citas médicas online en Chile 2026: guía para profesionales y centros de salud",
    excerpt:
      "Cómo funciona una agenda de citas médicas online, qué ventajas tiene sobre el teléfono y el WhatsApp, y cómo elegir el sistema correcto para tu consulta o centro de salud en Chile.",
    fecha: "2026-08-30",
    categoria: "Gestión",
    tiempoLectura: 8,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "La agenda de citas médicas sigue siendo uno de los mayores cuellos de botella en cualquier consulta o centro de salud. El teléfono no contesta, el WhatsApp se llena de mensajes sin responder, y el profesional pierde horas coordinando horarios que podrían gestionarse solos. En 2026 hay soluciones específicas para esto — y en Chile están creciendo rápido.",
      },
      {
        tipo: "h2",
        texto: "¿Qué es una agenda de citas médicas online?",
      },
      {
        tipo: "p",
        texto:
          "Una agenda de citas médicas online es un sistema que permite a los pacientes reservar, cancelar o reagendar sus horas directamente desde el celular o el computador, sin necesidad de llamar ni escribir por WhatsApp. El profesional configura su disponibilidad y el sistema hace el resto: confirma automáticamente, envía recordatorios y bloquea los horarios ocupados.",
      },
      {
        tipo: "p",
        texto:
          "A diferencia de una agenda en papel o una planilla de Excel, un sistema online trabaja las 24 horas. Un paciente puede reservar su hora el domingo a las 11 de la noche y el profesional llega el lunes con la agenda ya organizada, sin haber respondido un solo mensaje.",
      },
      {
        tipo: "h2",
        texto: "Por qué el teléfono y el WhatsApp ya no son suficientes",
      },
      {
        tipo: "p",
        texto:
          "Durante años, el teléfono fue el canal estándar para agendar citas médicas en Chile. Hoy es el canal que más fricción genera. El paciente llama en horario de consulta — cuando el profesional está atendiendo — y nadie contesta. Llama más tarde y tampoco. Al tercer intento fallido, busca otro profesional.",
      },
      {
        tipo: "p",
        texto:
          "WhatsApp mejoró la situación a medias: el mensaje puede enviarse a cualquier hora, pero sigue requiriendo que alguien lo lea y responda. En una consulta con 20 o 30 pacientes diarios, gestionar el agendamiento por chat se convierte en un trabajo a tiempo completo.",
      },
      {
        tipo: "ul",
        items: [
          "El 63% de los pacientes prefiere agendar en horario no laboral (fuente: Zocdoc, 2024)",
          "El tiempo promedio de gestión por cita vía teléfono es de 4 a 7 minutos",
          "Las inasistencias bajan hasta un 40% con recordatorios automáticos vs. sin recordatorio",
          "Un sistema online puede gestionar 100 reservas simultáneas sin error humano",
        ],
      },
      {
        tipo: "h2",
        texto: "Cómo funciona la agenda online en la práctica",
      },
      {
        tipo: "p",
        texto:
          "El proceso es simple desde el punto de vista del paciente. El profesional comparte un link (en su Instagram, sitio web, firma de email o código QR en la sala de espera). El paciente abre el link, elige el servicio, selecciona una fecha y hora disponible, y completa sus datos. En menos de dos minutos, la cita queda confirmada — sin esperar, sin llamar, sin escribir.",
      },
      {
        tipo: "p",
        texto:
          "Del lado del profesional, la cita aparece en su panel de administración. El sistema envía automáticamente una confirmación al paciente por email y, si está configurado, un recordatorio por WhatsApp 24 horas antes. Si el paciente cancela, el horario vuelve a estar disponible de forma automática.",
      },
      {
        tipo: "h2",
        texto: "Qué debe tener un sistema de agenda médica online en Chile",
      },
      {
        tipo: "p",
        texto:
          "No todos los sistemas de agendamiento son iguales. Algunos están diseñados para peluquerías o spas y no contemplan las particularidades de una consulta de salud. Al evaluar opciones, considera al menos estos puntos:",
      },
      {
        tipo: "ul",
        items: [
          "Recordatorios automáticos por WhatsApp y email (no solo confirmación inicial)",
          "Posibilidad de cobrar anticipado para reducir inasistencias",
          "Gestión de múltiples profesionales si es un centro clínico",
          "Historial de citas por paciente para seguimiento",
          "Política de cancelación configurable con plazo mínimo",
          "Integración con Google Calendar para sincronizar con la agenda personal",
          "Datos almacenados en Chile o con cumplimiento de normativas de privacidad",
        ],
      },
      {
        tipo: "h2",
        texto: "El problema de las inasistencias en medicina",
      },
      {
        tipo: "p",
        texto:
          "La inasistencia es el mayor enemigo de la productividad en una consulta médica. En Chile, la tasa promedio de no-show en consultas privadas oscila entre el 15% y el 25% según el tipo de especialidad. Eso significa que uno de cada cuatro pacientes que agendó no llega — y ese tiempo ya no se puede recuperar.",
      },
      {
        tipo: "p",
        texto:
          "Un sistema de agenda online ataca este problema desde dos ángulos: primero, con recordatorios automáticos que reducen el olvido (la causa número uno de inasistencia); segundo, con la posibilidad de cobrar un anticipo al momento de reservar, lo que elimina las cancelaciones de último minuto por falta de compromiso.",
      },
      {
        tipo: "destacado",
        texto:
          "Los profesionales que implementan recordatorios automáticos por WhatsApp reportan una reducción de inasistencias de entre el 30% y el 45% en los primeros 3 meses de uso.",
      },
      {
        tipo: "h2",
        texto: "Agenda médica para centros clínicos vs. consulta individual",
      },
      {
        tipo: "p",
        texto:
          "Las necesidades cambian según el tamaño del equipo. Una consulta individual necesita sobre todo automatizar la confirmación y los recordatorios, y tener un link de reserva limpio para compartir. Un centro clínico con varios profesionales necesita además gestionar agendas separadas por especialista, reportes de ocupación y a veces integración con sistemas de ficha clínica.",
      },
      {
        tipo: "p",
        texto:
          "Lo importante es elegir un sistema que escale: que funcione bien para un profesional hoy y que pueda crecer si el equipo crece. Migrar de sistema es costoso en tiempo y en datos de pacientes.",
      },
      {
        tipo: "h2",
        texto: "Cómo empezar con una agenda de citas médicas online en Chile",
      },
      {
        tipo: "p",
        texto:
          "La buena noticia es que la curva de adopción es rápida. La mayoría de los sistemas actuales están listos para usar en menos de una hora: creas tu cuenta, configuras tus servicios y horario, y compartes tu link. No necesitas un sitio web propio ni conocimientos técnicos.",
      },
      {
        tipo: "p",
        texto:
          "Si eres profesional de salud en Chile y quieres dejar de gestionar citas por teléfono o WhatsApp, attempo tiene un plan de prueba gratuito de 12 días sin tarjeta de crédito. Puedes configurar tu agenda completa y empezar a recibir reservas automáticas el mismo día.",
      },
      { tipo: "cta" },
    ],
  },

  // ── ARTÍCULO: BOT PARA EL SECTOR SALUD ──────────────────────────────────────
  {
    slug: "bot-para-el-sector-salud-chile-2026",
    titulo: "Bot para el sector salud en Chile 2026: cómo automatizar el agendamiento y reducir inasistencias",
    excerpt:
      "Qué es un bot de agendamiento para salud, cómo funciona en la práctica, qué diferencia hay con un chatbot genérico y por qué cada vez más clínicas y consultas en Chile lo están adoptando.",
    fecha: "2026-08-30",
    categoria: "Tecnología",
    tiempoLectura: 9,
    autor: "Equipo attempo",
    contenido: [
      {
        tipo: "intro",
        texto:
          "Un bot para el sector salud no es un lujo tecnológico ni algo reservado para grandes clínicas. En 2026, es la diferencia entre una consulta que depende de que alguien conteste el teléfono y una que funciona sola: agenda, confirma, recuerda y cobra de forma automática, aunque el profesional esté atendiendo pacientes.",
      },
      {
        tipo: "h2",
        texto: "¿Qué es un bot de agendamiento para salud?",
      },
      {
        tipo: "p",
        texto:
          "Un bot de agendamiento para el sector salud es un sistema automatizado — basado en inteligencia artificial o en flujos programados — que gestiona la comunicación con pacientes para coordinar citas. Puede operar por WhatsApp, por una página web, por Instagram o por cualquier canal digital donde el paciente ya esté.",
      },
      {
        tipo: "p",
        texto:
          "A diferencia de un chatbot genérico que solo responde preguntas frecuentes, un bot de salud está conectado a la agenda real del profesional. Sabe qué horas están disponibles, puede reservar una cita en tiempo real, enviar la confirmación y programar recordatorios automáticos para el día anterior.",
      },
      {
        tipo: "h2",
        texto: "Cómo funciona un bot de salud en la práctica",
      },
      {
        tipo: "p",
        texto:
          "El flujo típico es así: un paciente escribe por WhatsApp o accede al link de reserva. El bot lo saluda, le pregunta qué servicio necesita y le muestra los horarios disponibles para ese día o la semana. El paciente elige, confirma sus datos y la cita queda registrada. Todo en menos de dos minutos, sin intervención humana.",
      },
      {
        tipo: "p",
        texto:
          "Si el profesional tiene habilitado el cobro anticipado, el bot también gestiona el pago: envía el link de Webpay o transferencia antes de confirmar la cita. El horario solo queda bloqueado cuando el pago se completa, eliminando las reservas fantasmas que luego no se presentan.",
      },
      {
        tipo: "destacado",
        texto:
          "Un bot de salud bien configurado puede gestionar el 80% de las reservas sin intervención humana, liberando al profesional y al equipo administrativo para enfocarse en la atención.",
      },
      {
        tipo: "h2",
        texto: "Bot de salud vs. secretaria virtual vs. sistema de agenda",
      },
      {
        tipo: "p",
        texto:
          "Estos tres términos se mezclan con frecuencia, pero describen cosas distintas. Un sistema de agenda online es la base: una plataforma donde el paciente puede reservar en un formulario web. Un bot agrega una capa conversacional — el paciente interactúa por chat en vez de llenar un formulario. Una secretaria virtual puede combinar ambas cosas con atención humana cuando el bot no puede resolver algo.",
      },
      {
        tipo: "p",
        texto:
          "Para la mayoría de las consultas de salud individuales, un sistema de agenda con bot de WhatsApp es suficiente y más económico que mantener una persona dedicada al agendamiento telefónico. Para centros con alta complejidad de consultas, la combinación bot + soporte humano funciona mejor.",
      },
      {
        tipo: "h2",
        texto: "Por qué el sector salud necesita un bot específico",
      },
      {
        tipo: "p",
        texto:
          "El sector salud tiene particularidades que los bots genéricos no manejan bien. La primera es la privacidad: los datos de salud son datos sensibles y el sistema que los maneja debe cumplir con las normativas chilenas de protección de datos personales (Ley 19.628 y sus actualizaciones). Un bot diseñado para salud tiene eso incorporado por defecto.",
      },
      {
        tipo: "ul",
        items: [
          "Manejo de múltiples tipos de consulta con duraciones distintas (control, primera vez, procedimiento)",
          "Soporte para paquetes de sesiones con fechas bloqueadas en secuencia",
          "Recordatorios configurables según el tipo de cita (24h antes, 2h antes, etc.)",
          "Confirmación explícita del paciente para reducir no-shows",
          "Integración con sistemas de cobro chilenos (Webpay, transferencia bancaria)",
          "Historial de citas por paciente sin requerir ficha clínica separada",
        ],
      },
      {
        tipo: "h2",
        texto: "El impacto real en las inasistencias",
      },
      {
        tipo: "p",
        texto:
          "El no-show — el paciente que agendó y no llega sin avisar — es el mayor problema económico de una consulta de salud. Cada hora perdida es ingreso que no se recupera y lista de espera que se frustra. Los bots atacan este problema de dos formas: el recordatorio automático (reduce el olvido) y el cobro anticipado (reduce el abandono sin aviso).",
      },
      {
        tipo: "p",
        texto:
          "En la práctica, los profesionales que implementan ambas herramientas reportan bajas de entre el 35% y el 50% en sus tasas de inasistencia dentro de los primeros 60 días. Para una consulta con 15 o 20 pacientes diarios, eso puede significar 3 a 5 horas menos perdidas por semana.",
      },
      {
        tipo: "h2",
        texto: "Recuperación de citas canceladas",
      },
      {
        tipo: "p",
        texto:
          "Una función que pocas personas conocen pero que tiene alto impacto es la recuperación automática de cancelaciones. Cuando un paciente cancela, el sistema puede notificar de forma automática a los pacientes en lista de espera y ofrecerles el horario liberado. Si alguien lo toma, la hora no se pierde.",
      },
      {
        tipo: "p",
        texto:
          "Esto es especialmente valioso en especialidades con alta demanda y poca disponibilidad — psicología, psiquiatría, dermatología — donde los tiempos de espera son largos y cada cancelación tiene costo tanto para el profesional como para el sistema en general.",
      },
      {
        tipo: "h2",
        texto: "Cómo implementar un bot de salud en tu consulta chilena",
      },
      {
        tipo: "p",
        texto:
          "La implementación no requiere conocimientos técnicos. Los sistemas actuales están diseñados para que el profesional configure todo desde un panel visual: sus servicios, sus horarios, sus tarifas y sus mensajes de confirmación. En menos de una hora puedes tener el bot activo y compartir el link con tus pacientes.",
      },
      {
        tipo: "p",
        texto:
          "El desafío real no es técnico sino de cambio de hábito: tanto del profesional (confiar en que el sistema gestiona bien) como del paciente (acostumbrarse a reservar por el link en vez de llamar). Ese cambio suele completarse en 2 a 4 semanas de uso constante.",
      },
      {
        tipo: "h2",
        texto: "attempo: el bot de salud diseñado para profesionales en Chile",
      },
      {
        tipo: "p",
        texto:
          "attempo es un sistema de agendamiento con bot de IA diseñado específicamente para profesionales y centros de salud en Chile. Incluye agenda online, confirmaciones automáticas, recordatorios por WhatsApp, cobro anticipado con Webpay y un panel de administración donde ves toda tu agenda en tiempo real.",
      },
      {
        tipo: "p",
        texto:
          "Puedes probarlo gratis durante 12 días, sin tarjeta de crédito, y ver el impacto real en tu tasa de inasistencias antes de decidir si contratas. El proceso de configuración toma menos de una hora.",
      },
      { tipo: "cta" },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
