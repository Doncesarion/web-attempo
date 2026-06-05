export interface Especialidad {
  slug: string
  nombre: string
  emoji: string
  descripcion: string
  dolor: string
  dolorDesc: string
  features: {
    icon: string
    title: string
    desc: string
  }[]
  beneficios: {
    n: string
    title: string
    desc: string
  }[]
}

export const especialidades: Especialidad[] = [
  {
    slug: "psicologos",
    nombre: "Psicólogos",
    emoji: "🧠",
    descripcion: "Gestiona sesiones, reagendamientos y seguimiento de pacientes con facilidad.",
    dolor: "Los pacientes cancelan a última hora y pierdes honorarios que ya tenías comprometidos.",
    dolorDesc: "Una inasistencia sin aviso a las 8 PM no es solo una hora perdida — es ingreso que no recuperas. Sin cobro anticipado ni política de cancelación automatizada, el control está en manos del paciente, no en las tuyas.",
    features: [
      {
        icon: "📦",
        title: "Paquetes de sesiones",
        desc: "Vende 4, 8 o 12 sesiones como un paquete y lleva el control de cuántas quedan por usar.",
      },
      {
        icon: "💳",
        title: "Cobro anticipado Webpay",
        desc: "El paciente paga antes de confirmar la hora — sin pago, no hay reserva.",
      },
      {
        icon: "💬",
        title: "Recordatorio WhatsApp 24h antes",
        desc: "El sistema envía un recordatorio automático el día anterior para reducir las inasistencias.",
      },
      {
        icon: "📋",
        title: "Historial del paciente",
        desc: "Cada ficha registra el número de sesiones realizadas, notas y estado del paquete.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Reduce inasistencias hasta un 60%",
        desc: "Los recordatorios automáticos y el cobro anticipado eliminan las cancelaciones de último minuto.",
      },
      {
        n: "02",
        title: "Cobra antes de cada sesión",
        desc: "Webpay integrado asegura el pago en el momento de la reserva, no después.",
      },
      {
        n: "03",
        title: "Controla cada paquete vendido",
        desc: "Sabe exactamente cuántas sesiones tiene disponibles cada paciente sin llevar planillas aparte.",
      },
    ],
  },
  {
    slug: "psiquiatras",
    nombre: "Psiquiatras",
    emoji: "🩺",
    descripcion: "Control de citas, recordatorios automáticos y ficha de paciente integrada.",
    dolor: "Tu agenda está siempre llena, pero los controles de seguimiento se acumulan y se pierden entre sí.",
    dolorDesc: "Los pacientes psiquiátricos necesitan controles periódicos estrictos. Sin un sistema que gestione esa cadencia — lista de espera, recordatorios de control y ficha actualizada — el seguimiento queda en tu cabeza o en hojas de cálculo.",
    features: [
      {
        icon: "📋",
        title: "Lista de espera integrada",
        desc: "Cuando se libera una hora, el sistema notifica automáticamente a quienes están en lista de espera.",
      },
      {
        icon: "🔔",
        title: "Recordatorios de control periódico",
        desc: "Programa recordatorios automáticos según la frecuencia de control de cada paciente.",
      },
      {
        icon: "💊",
        title: "Historial de medicación en ficha",
        desc: "Registra los medicamentos activos de cada paciente directamente en su ficha de agenda.",
      },
      {
        icon: "🔁",
        title: "Citas multi-sesión y seguimiento",
        desc: "Crea series de controles para un mismo paciente con fechas y horas programadas.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Cero horas sin ocupar",
        desc: "La lista de espera automática llena cualquier cancellation antes de que la hora se desperdicie.",
      },
      {
        n: "02",
        title: "Pacientes siempre informados",
        desc: "Los recordatorios automáticos aseguran que ningún control de seguimiento quede en el olvido.",
      },
      {
        n: "03",
        title: "Historial completo en un solo lugar",
        desc: "Accede a medicación, controles anteriores y notas clínicas desde la misma ficha de agenda.",
      },
    ],
  },
  {
    slug: "medicos-generales",
    nombre: "Médicos Generales",
    emoji: "👨‍⚕️",
    descripcion: "Organiza tu agenda médica y reduce las inasistencias con recordatorios.",
    dolor: "El teléfono no para de sonar para agendar citas mientras intentas atender a los pacientes que ya están ahí.",
    dolorDesc: "Cada llamada para agendar interrumpe tu consulta y sobrecarga a tu secretaria. El resultado: errores de agenda, pacientes que esperan y un día que nunca termina a la hora que debería.",
    features: [
      {
        icon: "🌐",
        title: "Agenda online 24/7",
        desc: "Los pacientes reservan su hora por web o WhatsApp a cualquier hora, sin llamar al consultorio.",
      },
      {
        icon: "✅",
        title: "Confirmación automática",
        desc: "Cada reserva genera una confirmación instantánea por WhatsApp sin intervención manual.",
      },
      {
        icon: "📅",
        title: "Vista de día completa",
        desc: "Visualiza todas las citas del día, con nombre, motivo de consulta y hora exacta de un vistazo.",
      },
      {
        icon: "🤖",
        title: "Chatbot IA para consultas frecuentes",
        desc: "Attia responde preguntas sobre horarios, valores y disponibilidad sin que nadie lo atienda.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Cero llamadas para agendar",
        desc: "Los pacientes reservan solos online, liberando el teléfono y a tu personal administrativo.",
      },
      {
        n: "02",
        title: "Un día predecible y sin sorpresas",
        desc: "La confirmación automática y los recordatorios eliminan los no-shows y los espacios vacíos.",
      },
      {
        n: "03",
        title: "Menos carga administrativa",
        desc: "Automatiza confirmaciones, recordatorios y respuestas frecuentes para que tu equipo se enfoque en la atención.",
      },
    ],
  },
  {
    slug: "centros-clinicos",
    nombre: "Centros Clínicos",
    emoji: "🏥",
    descripcion: "Administra múltiples especialistas y salas desde un solo panel.",
    dolor: "Coordinar la agenda de cinco especialistas y tres salas a la vez es una fuente constante de errores y conflictos.",
    dolorDesc: "Con múltiples profesionales compartiendo espacio, un error de coordinación significa pacientes que se cruzan, salas sin uso o profesionales sin citas. Sin visibilidad centralizada, el caos es solo cuestión de tiempo.",
    features: [
      {
        icon: "👥",
        title: "Múltiples agendas simultáneas",
        desc: "Cada profesional tiene su propia agenda visible desde el mismo panel administrativo.",
      },
      {
        icon: "🖥️",
        title: "Panel centralizado del centro",
        desc: "El administrador ve en tiempo real la ocupación de todos los profesionales y salas.",
      },
      {
        icon: "📊",
        title: "Reportes por profesional",
        desc: "Genera reportes de citas, inasistencias e ingresos desglosados por cada especialista del centro.",
      },
      {
        icon: "🏢",
        title: "Gestión de salas",
        desc: "Asigna salas a cada cita para evitar conflictos de espacio entre profesionales.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Visibilidad total del centro en tiempo real",
        desc: "Un solo panel muestra quién atiende, dónde y a qué hora sin necesidad de preguntar.",
      },
      {
        n: "02",
        title: "Sin conflictos de horario ni sala",
        desc: "El sistema bloquea automáticamente las salas ya asignadas para evitar solapamientos.",
      },
      {
        n: "03",
        title: "Métricas por especialista",
        desc: "Mide el rendimiento de cada profesional con datos reales de ocupación e ingresos.",
      },
    ],
  },
  {
    slug: "barberias",
    nombre: "Barberías",
    emoji: "✂️",
    descripcion: "Agenda de cortes, reservas online y confirmación automática por WhatsApp.",
    dolor: "La silla queda vacía porque el cliente olvidó el turno y tú no podías parar para llamarle.",
    dolorDesc: "Mientras estás con las tijeras en la mano, no puedes contestar el teléfono ni revisar si alguien confirmó. Los no-shows sin aviso son dinero que se escapa, y la única solución es automatizar la confirmación antes de que sea tarde.",
    features: [
      {
        icon: "📲",
        title: "Reservas online desde Instagram o WhatsApp",
        desc: "Los clientes reservan su turno directo desde tu Instagram o mandando un mensaje — sin llamar.",
      },
      {
        icon: "💳",
        title: "Cobro anticipado del servicio",
        desc: "Cobra un porcentaje o el total del servicio al momento de reservar para asegurar el turno.",
      },
      {
        icon: "🤖",
        title: "Chatbot automático 24/7",
        desc: "Attia gestiona reservas, consultas de precio y disponibilidad mientras tú trabajas.",
      },
      {
        icon: "⏰",
        title: "Confirmación automática 2h antes",
        desc: "El sistema envía un recordatorio dos horas antes para que el cliente no olvide su turno.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "La silla siempre ocupada",
        desc: "Los recordatorios automáticos reducen drásticamente los no-shows sin que hagas nada.",
      },
      {
        n: "02",
        title: "Sin interrumpir tu trabajo",
        desc: "El chatbot y el sistema de reservas online trabajan solos mientras tú cortas.",
      },
      {
        n: "03",
        title: "Cobras antes del servicio",
        desc: "El cobro anticipado elimina los turnos fantasma — si pagó, viene.",
      },
    ],
  },
  {
    slug: "derecho",
    nombre: "Abogados",
    emoji: "⚖️",
    descripcion: "Coordina consultas jurídicas y reuniones sin complicaciones.",
    dolor: "Las reuniones se cancelan sin aviso y esas horas de alta facturación las pierdes sin recuperarlas.",
    dolorDesc: "Tu hora vale cara y un cliente que no se presenta — o que cancela a último momento — te deja con tiempo muerto que no puedes recuperar. Sin un sistema que exija confirmación y cobre por adelantado, el riesgo siempre es tuyo.",
    features: [
      {
        icon: "✅",
        title: "Confirmación obligatoria previa",
        desc: "El sistema requiere que el cliente confirme activamente su consulta antes de la fecha.",
      },
      {
        icon: "💳",
        title: "Cobro de consulta anticipado Webpay",
        desc: "El cliente paga la consulta al momento de reservar — sin pago, no hay hora asignada.",
      },
      {
        icon: "🔔",
        title: "Recordatorio previo a la reunión",
        desc: "El sistema envía un recordatorio automático 24 horas antes de cada reunión o consulta.",
      },
      {
        icon: "📁",
        title: "Ficha del cliente con historial",
        desc: "Registra el motivo de consulta, documentos asociados y el historial de reuniones pasadas.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Reuniones que siempre se confirman",
        desc: "La confirmación activa y el recordatorio automático eliminan los no-shows sin necesidad de llamar.",
      },
      {
        n: "02",
        title: "Consultas cobradas por adelantado",
        desc: "Webpay integrado asegura que el pago ocurra en el momento de la reserva, no después.",
      },
      {
        n: "03",
        title: "Tu tiempo siempre protegido",
        desc: "Con cobro anticipado y política de cancelación automatizada, el riesgo financiero desaparece.",
      },
    ],
  },
  {
    slug: "nutricion",
    nombre: "Nutricionistas",
    emoji: "🥗",
    descripcion: "Planifica tus consultas nutricionales y mantén a tus pacientes informados.",
    dolor: "Los pacientes empiezan el tratamiento con entusiasmo y lo abandonan a la mitad del paquete sin avisarte.",
    dolorDesc: "Un paquete de 6 consultas que se interrumpe en la tercera no solo afecta el resultado del paciente — te deja con horas sin llenar y dinero que ya habías comprometido. Sin seguimiento activo y recordatorios de continuidad, la deserción es la norma.",
    features: [
      {
        icon: "📦",
        title: "Paquetes de sesiones con control de avance",
        desc: "Vende paquetes de consultas y lleva el estado de cada paciente — cuántas ha usado y cuántas le quedan.",
      },
      {
        icon: "🔔",
        title: "Recordatorios de seguimiento personalizados",
        desc: "El sistema recuerda al paciente su próxima consulta según la cadencia del tratamiento.",
      },
      {
        icon: "📋",
        title: "Historial alimentario en ficha",
        desc: "Registra los avances, objetivos y notas de cada consulta directamente en la ficha del paciente.",
      },
      {
        icon: "💳",
        title: "Cobro por paquete anticipado",
        desc: "El paciente paga el paquete completo al inicio del tratamiento asegurando la continuidad.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Mayor adherencia al tratamiento",
        desc: "Los recordatorios automáticos y el pago anticipado aumentan significativamente la tasa de completitud.",
      },
      {
        n: "02",
        title: "Control real de paquetes vendidos",
        desc: "Sabes exactamente qué pacientes tienen sesiones pendientes sin revisar planillas ni anotaciones.",
      },
      {
        n: "03",
        title: "Seguimiento real del paciente",
        desc: "La ficha integrada con historial y notas te permite preparar cada consulta con contexto completo.",
      },
    ],
  },
  {
    slug: "matronas",
    nombre: "Matronas",
    emoji: "🤱",
    descripcion: "Gestiona controles prenatales y consultas con recordatorios personalizados.",
    dolor: "Los controles prenatales son frecuentes y coordinarlos por teléfono consume tiempo que deberías dedicar a tus pacientes.",
    dolorDesc: "Una embarazada necesita entre 8 y 12 controles durante el embarazo. Coordinar esa cadencia por llamadas, con reprogramaciones frecuentes y pacientes en distintas semanas de gestación, es una carga administrativa enorme que no debería caer sobre ti.",
    features: [
      {
        icon: "📅",
        title: "Agenda de seguimiento periódico",
        desc: "Programa la secuencia completa de controles prenatales desde la primera consulta.",
      },
      {
        icon: "💬",
        title: "Recordatorios personalizados por semana",
        desc: "El sistema envía recordatorios adaptados a la semana de gestación de cada paciente.",
      },
      {
        icon: "📋",
        title: "Historial completo de controles",
        desc: "Cada ficha registra todos los controles realizados, resultados y fechas del embarazo.",
      },
      {
        icon: "✅",
        title: "Confirmación automática sin llamadas",
        desc: "Las pacientes confirman su control por WhatsApp sin que debas llamar a cada una.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Mamás más tranquilas y mejor informadas",
        desc: "Los recordatorios automáticos aseguran que ninguna paciente pierda un control importante.",
      },
      {
        n: "02",
        title: "Controles sin llamadas ni gestión manual",
        desc: "El sistema coordina la agenda prenatal completa de forma autónoma.",
      },
      {
        n: "03",
        title: "Historial completo del embarazo",
        desc: "Accede al registro de controles, semanas de gestación y notas desde un solo lugar.",
      },
    ],
  },
  {
    slug: "esteticas",
    nombre: "Centros de Estética",
    emoji: "💆",
    descripcion: "Reservas de tratamientos, confirmaciones y recordatorios automáticos.",
    dolor: "Los tratamientos de larga duración tienen muchas sesiones y los clientes dejan de venir sin avisarte.",
    dolorDesc: "Un tratamiento de 10 sesiones interrumpido en la quinta es tiempo y sala que pierdes, más un cliente que no vio resultados. Sin cobro anticipado ni seguimiento activo de sesiones, la agenda tiene baches que son difíciles de llenar a último momento.",
    features: [
      {
        icon: "💳",
        title: "Cobro anticipado del tratamiento",
        desc: "El cliente paga el tratamiento completo al reservar — garantizando las sesiones del ciclo.",
      },
      {
        icon: "💬",
        title: "Confirmación WhatsApp 24h antes",
        desc: "El sistema confirma cada sesión automáticamente por WhatsApp el día anterior.",
      },
      {
        icon: "📲",
        title: "Chatbot Instagram para reservas",
        desc: "Attia gestiona reservas desde tu Instagram sin que intervengas en cada consulta.",
      },
      {
        icon: "📊",
        title: "Control de sesiones por cliente",
        desc: "Lleva el registro de cuántas sesiones ha completado cada cliente y cuántas le quedan.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Ingresos asegurados antes del servicio",
        desc: "El cobro anticipado elimina el riesgo de sesiones no completadas sin remuneración.",
      },
      {
        n: "02",
        title: "Agenda sin baches ni horas perdidas",
        desc: "Los recordatorios automáticos y la confirmación previa eliminan los no-shows de tratamiento.",
      },
      {
        n: "03",
        title: "Reservas las 24 horas del día",
        desc: "El chatbot de Instagram recibe reservas y consultas incluso fuera del horario de atención.",
      },
    ],
  },
  {
    slug: "fisioterapeutas",
    nombre: "Fisioterapeutas",
    emoji: "🦴",
    descripcion: "Organiza sesiones de kinesioterapia y rehabilitación sin esfuerzo.",
    dolor: "Los pacientes no completan el plan de rehabilitación y los abandonos a mitad del tratamiento son la norma.",
    dolorDesc: "Un plan kinésico de 12 sesiones que se interrumpe en la octava no solo deja al paciente sin el resultado esperado — deja tu agenda con huecos imposibles de llenar a tiempo. Sin seguimiento activo de sesiones y cobro por paquete, el control del tratamiento queda en manos del paciente.",
    features: [
      {
        icon: "📦",
        title: "Paquetes de sesiones kinésicas",
        desc: "Vende planes de rehabilitación como paquetes y controla el avance de cada paciente.",
      },
      {
        icon: "📊",
        title: "Seguimiento de avance por sesión",
        desc: "Registra el progreso del paciente en cada sesión directamente en su ficha de tratamiento.",
      },
      {
        icon: "🔔",
        title: "Recordatorios de continuidad del plan",
        desc: "El sistema recuerda automáticamente al paciente su próxima sesión para no romper el plan.",
      },
      {
        icon: "💳",
        title: "Cobro por paquete anticipado",
        desc: "El paciente paga el plan completo al inicio, asegurando la continuidad del tratamiento.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Tratamientos completos, pacientes recuperados",
        desc: "El cobro anticipado y los recordatorios aumentan significativamente la tasa de adherencia al plan.",
      },
      {
        n: "02",
        title: "Ingresos predecibles por paquete",
        desc: "Al cobrar el plan completo al inicio, tu flujo de caja es estable sin importar la asistencia.",
      },
      {
        n: "03",
        title: "Pacientes que no abandonan el tratamiento",
        desc: "Los recordatorios de continuidad automáticos mantienen al paciente enganchado con su rehabilitación.",
      },
    ],
  },
  {
    slug: "yoga",
    nombre: "Yoga y Bienestar",
    emoji: "🧘",
    descripcion: "Agenda clases, talleres y sesiones individuales con tu comunidad.",
    dolor: "Gestionar clases grupales, sesiones individuales y talleres con pagos por distintos canales es un desorden constante.",
    dolorDesc: "Cuando tienes clases grupales con cupo, sesiones individuales y talleres especiales funcionando a la vez, coordinar todo por WhatsApp y recibir pagos por transferencia es insostenible. Necesitas un sistema que unifique la agenda, los pagos y la comunidad.",
    features: [
      {
        icon: "👥",
        title: "Cupos por clase y lista de espera",
        desc: "Define el máximo de alumnos por clase y activa lista de espera automática cuando se llena.",
      },
      {
        icon: "💳",
        title: "Cobro anticipado online",
        desc: "Los alumnos pagan su clase o paquete de clases por Webpay al momento de inscribirse.",
      },
      {
        icon: "🔔",
        title: "Recordatorio automático de clase",
        desc: "El sistema recuerda a cada alumno su clase por WhatsApp antes de que comience.",
      },
      {
        icon: "🏕️",
        title: "Gestión de talleres y retiros",
        desc: "Crea eventos especiales con cupo limitado, precio diferenciado y inscripción online.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Clases siempre organizadas y con cupo controlado",
        desc: "Los cupos automáticos y la lista de espera aseguran que ninguna clase quede desorganizada.",
      },
      {
        n: "02",
        title: "Cobro simplificado sin transferencias manuales",
        desc: "Webpay integrado elimina las transferencias desordenadas y los pagos que se olvidan.",
      },
      {
        n: "03",
        title: "Una comunidad que no falta a clase",
        desc: "Los recordatorios automáticos aumentan la asistencia y fortalecen el compromiso de tus alumnos.",
      },
    ],
  },
]

export function getEspecialidadBySlug(slug: string): Especialidad | undefined {
  return especialidades.find((e) => e.slug === slug)
}
