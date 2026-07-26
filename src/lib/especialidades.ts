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
  faqs?: {
    q: string
    a: string
  }[]
}

export const especialidades: Especialidad[] = [
  {
    slug: "psicologos",
    nombre: "Psicólogos",
    emoji: "🧠",
    descripcion: "Gestiona sesiones, reagendamientos y seguimiento de pacientes con facilidad.",
    dolor: "Los pacientes cancelan a última hora y pierdes honorarios que ya tenías comprometidos.",
    dolorDesc: "Una inasistencia sin aviso a las 8 PM no es solo una hora perdida. Es ingreso que no recuperas. Sin cobro anticipado ni política de cancelación automatizada, el control está en manos del paciente.",
    features: [
      {
        icon: "Package",
        title: "Paquetes de sesiones",
        desc: "Vende 4, 8 o 12 sesiones como un paquete y lleva el control de cuántas quedan por usar.",
      },
      {
        icon: "CreditCard",
        title: "Cobro anticipado Webpay",
        desc: "El paciente paga antes de confirmar la hora. Sin pago, no hay reserva.",
      },
      {
        icon: "MessageCircle",
        title: "Recordatorio WhatsApp 24h antes",
        desc: "El sistema envía un recordatorio automático el día anterior para reducir las inasistencias.",
      },
      {
        icon: "ClipboardList",
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
    dolorDesc: "Los pacientes psiquiátricos necesitan controles periódicos estrictos. Sin un sistema que gestione esa cadencia: lista de espera, recordatorios de control y ficha actualizada, el seguimiento queda en tu cabeza o en hojas de cálculo.",
    features: [
      {
        icon: "ClipboardList",
        title: "Lista de espera integrada",
        desc: "Cuando se libera una hora, el sistema notifica automáticamente a quienes están en lista de espera.",
      },
      {
        icon: "Bell",
        title: "Recordatorios de control periódico",
        desc: "Programa recordatorios automáticos según la frecuencia de control de cada paciente.",
      },
      {
        icon: "Pill",
        title: "Historial de medicación en ficha",
        desc: "Registra los medicamentos activos de cada paciente directamente en su ficha de agenda.",
      },
      {
        icon: "RefreshCw",
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
        icon: "Globe",
        title: "Agenda online 24/7",
        desc: "Los pacientes reservan su hora por web o WhatsApp a cualquier hora, sin llamar al consultorio.",
      },
      {
        icon: "CheckCircle2",
        title: "Confirmación automática",
        desc: "Cada reserva genera una confirmación instantánea por WhatsApp sin intervención manual.",
      },
      {
        icon: "CalendarDays",
        title: "Vista de día completa",
        desc: "Visualiza todas las citas del día, con nombre, motivo de consulta y hora exacta de un vistazo.",
      },
      {
        icon: "Bot",
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
        icon: "Users",
        title: "Múltiples agendas simultáneas",
        desc: "Cada profesional tiene su propia agenda visible desde el mismo panel administrativo.",
      },
      {
        icon: "Monitor",
        title: "Panel centralizado del centro",
        desc: "El administrador ve en tiempo real la ocupación de todos los profesionales y salas.",
      },
      {
        icon: "BarChart2",
        title: "Reportes por profesional",
        desc: "Genera reportes de citas, inasistencias e ingresos desglosados por cada especialista del centro.",
      },
      {
        icon: "Building2",
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
        icon: "Smartphone",
        title: "Reservas online desde Instagram o WhatsApp",
        desc: "Los clientes reservan su turno directo desde tu Instagram o mandando un mensaje, sin llamar.",
      },
      {
        icon: "CreditCard",
        title: "Cobro anticipado del servicio",
        desc: "Cobra un porcentaje o el total del servicio al momento de reservar para asegurar el turno.",
      },
      {
        icon: "Bot",
        title: "Chatbot automático 24/7",
        desc: "Attia gestiona reservas, consultas de precio y disponibilidad mientras tú trabajas.",
      },
      {
        icon: "Clock",
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
        desc: "El cobro anticipado elimina los turnos fantasma. Si pagó, viene.",
      },
    ],
  },
  {
    slug: "derecho",
    nombre: "Abogados",
    emoji: "⚖️",
    descripcion: "Coordina consultas jurídicas y reuniones sin complicaciones.",
    dolor: "Las reuniones se cancelan sin aviso y esas horas de alta facturación las pierdes sin recuperarlas.",
    dolorDesc: "Tu hora vale cara. Un cliente que no se presenta o que cancela a último momento te deja con tiempo muerto que no puedes recuperar. Sin un sistema que exija confirmación y cobro por adelantado, el riesgo siempre es tuyo.",
    features: [
      {
        icon: "CheckCircle2",
        title: "Confirmación obligatoria previa",
        desc: "El sistema requiere que el cliente confirme activamente su consulta antes de la fecha.",
      },
      {
        icon: "CreditCard",
        title: "Cobro de consulta anticipado Webpay",
        desc: "El cliente paga la consulta al momento de reservar. Sin pago, no hay hora asignada.",
      },
      {
        icon: "Bell",
        title: "Recordatorio previo a la reunión",
        desc: "El sistema envía un recordatorio automático 24 horas antes de cada reunión o consulta.",
      },
      {
        icon: "FolderOpen",
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
    dolorDesc: "Un paquete de 6 consultas que se interrumpe en la tercera no solo afecta el resultado del paciente. Te deja con horas sin llenar y dinero que ya habías comprometido. Sin seguimiento activo y recordatorios de continuidad, la deserción es la norma.",
    features: [
      {
        icon: "Package",
        title: "Paquetes de sesiones con control de avance",
        desc: "Vende paquetes de consultas y lleva el estado de cada paciente: cuántas ha usado y cuántas le quedan.",
      },
      {
        icon: "Bell",
        title: "Recordatorios de seguimiento personalizados",
        desc: "El sistema recuerda al paciente su próxima consulta según la cadencia del tratamiento.",
      },
      {
        icon: "ClipboardList",
        title: "Historial alimentario en ficha",
        desc: "Registra los avances, objetivos y notas de cada consulta directamente en la ficha del paciente.",
      },
      {
        icon: "CreditCard",
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
        icon: "CalendarDays",
        title: "Agenda de seguimiento periódico",
        desc: "Programa la secuencia completa de controles prenatales desde la primera consulta.",
      },
      {
        icon: "MessageCircle",
        title: "Recordatorios personalizados por semana",
        desc: "El sistema envía recordatorios adaptados a la semana de gestación de cada paciente.",
      },
      {
        icon: "ClipboardList",
        title: "Historial completo de controles",
        desc: "Cada ficha registra todos los controles realizados, resultados y fechas del embarazo.",
      },
      {
        icon: "CheckCircle2",
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
        icon: "CreditCard",
        title: "Cobro anticipado del tratamiento",
        desc: "El cliente paga el tratamiento completo al reservar, garantizando las sesiones del ciclo.",
      },
      {
        icon: "MessageCircle",
        title: "Confirmación WhatsApp 24h antes",
        desc: "El sistema confirma cada sesión automáticamente por WhatsApp el día anterior.",
      },
      {
        icon: "Smartphone",
        title: "Chatbot Instagram para reservas",
        desc: "Attia gestiona reservas desde tu Instagram sin que intervengas en cada consulta.",
      },
      {
        icon: "BarChart2",
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
    dolorDesc: "Un plan kinésico de 12 sesiones que se interrumpe en la octava no solo deja al paciente sin el resultado esperado. Deja tu agenda con huecos imposibles de llenar a tiempo. Sin seguimiento activo de sesiones y cobro por paquete, el control del tratamiento queda en manos del paciente.",
    features: [
      {
        icon: "Package",
        title: "Paquetes de sesiones kinésicas",
        desc: "Vende planes de rehabilitación como paquetes y controla el avance de cada paciente.",
      },
      {
        icon: "BarChart2",
        title: "Seguimiento de avance por sesión",
        desc: "Registra el progreso del paciente en cada sesión directamente en su ficha de tratamiento.",
      },
      {
        icon: "Bell",
        title: "Recordatorios de continuidad del plan",
        desc: "El sistema recuerda automáticamente al paciente su próxima sesión para no romper el plan.",
      },
      {
        icon: "CreditCard",
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
        icon: "Users",
        title: "Cupos por clase y lista de espera",
        desc: "Define el máximo de alumnos por clase y activa lista de espera automática cuando se llena.",
      },
      {
        icon: "CreditCard",
        title: "Cobro anticipado online",
        desc: "Los alumnos pagan su clase o paquete de clases por Webpay al momento de inscribirse.",
      },
      {
        icon: "Bell",
        title: "Recordatorio automático de clase",
        desc: "El sistema recuerda a cada alumno su clase por WhatsApp antes de que comience.",
      },
      {
        icon: "CalendarDays",
        title: "Gestión de talleres y retiros",
        desc: "Crea eventos especiales con cupo limitado, precio diferenciado e inscripción online.",
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
  {
    slug: "nutricionistas",
    nombre: "Nutricionistas",
    emoji: "🥗",
    descripcion: "Sistema de agendamiento online para nutricionistas en Chile. Gestiona paquetes de consultas, cobra anticipado y reduce el abandono de tratamientos.",
    dolor: "Tus pacientes compran el paquete, vienen las primeras consultas motivados y luego desaparecen sin avisarte.",
    dolorDesc: "Un paquete de 6 consultas abandonado en la tercera sesión no solo afecta el resultado del paciente: te deja con horas sin cubrir y dinero que no puedes recuperar. El problema casi siempre es el mismo. Sin recordatorios activos entre sesiones y sin pago comprometido desde el inicio, el seguimiento queda completamente en manos del paciente, que ya no recuerda por qué empezó el tratamiento.",
    features: [
      {
        icon: "Package",
        title: "Paquetes con control de sesiones pendientes",
        desc: "Vende tratamientos de 4, 6 o 12 consultas y lleva en tiempo real cuántas sesiones ha usado cada paciente y cuántas le quedan.",
      },
      {
        icon: "Bell",
        title: "Recordatorios automáticos entre consultas",
        desc: "El sistema envía recordatorios personalizados según la cadencia de cada tratamiento para que el paciente no pierda el ritmo.",
      },
      {
        icon: "CreditCard",
        title: "Cobro anticipado del paquete completo",
        desc: "El paciente paga el paquete completo al inicio del tratamiento. Sin pago, no hay reserva. La continuidad queda asegurada desde el primer día.",
      },
      {
        icon: "ClipboardList",
        title: "Historial de consultas y objetivos del paciente",
        desc: "Cada ficha registra los avances, objetivos nutricionales, notas clínicas y el estado del paquete de forma centralizada.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Pacientes que completan el tratamiento",
        desc: "Los recordatorios automáticos entre sesiones y el cobro anticipado del paquete aumentan significativamente la adherencia al plan nutricional.",
      },
      {
        n: "02",
        title: "Ingresos cobrados desde la primera consulta",
        desc: "Al pagar el paquete completo al inicio, el flujo de caja es predecible y no depende de que el paciente siga asistiendo.",
      },
      {
        n: "03",
        title: "Ficha completa sin planillas ni anotaciones aparte",
        desc: "Accede al historial de cada paciente, sus objetivos y el estado de su paquete desde un solo lugar, sin perder tiempo buscando información.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo vender paquetes de consultas con descuento en attempo?",
        a: "Sí. Puedes crear paquetes de cualquier número de sesiones con el precio que definas. attempo lleva el control automático de cuántas consultas ha usado cada paciente y cuántas le quedan, sin que tengas que llevar un registro aparte.",
      },
      {
        q: "¿Los pacientes pueden agendar su próxima consulta de nutrición solos?",
        a: "Sí. Los pacientes pueden reservar su próxima consulta directamente desde el enlace de agenda online, disponible las 24 horas. Cuando quedan pocas sesiones del paquete, el sistema les notifica automáticamente para que renueven o agenden.",
      },
      {
        q: "¿Cómo funciona el cobro anticipado de consultas de nutrición?",
        a: "Al momento de reservar, el paciente paga el valor de la consulta o del paquete a través de la pasarela de pago integrada. Sin pago confirmado, la hora no queda reservada. Esto elimina las cancelaciones de último momento y los pacientes que nunca llegan.",
      },
      {
        q: "¿attempo funciona para nutricionistas que atienden en clínica y de forma particular al mismo tiempo?",
        a: "Sí. Puedes configurar distintos servicios con precios diferentes para cada modalidad de atención. La agenda separa automáticamente los horarios disponibles según el tipo de consulta que el paciente quiera reservar.",
      },
    ],
  },
  {
    slug: "kinesiologos",
    nombre: "Kinesiólogos",
    emoji: "🦴",
    descripcion: "Sistema de agendamiento para kinesiólogos en Chile. Gestiona planes de rehabilitación, paquetes de sesiones y reduce el abandono de tratamientos kinésicos.",
    dolor: "Los pacientes dejan el plan kinésico antes de terminar porque ya se sienten mejor, y tú quedas con sesiones sin cobrar y huecos en la agenda.",
    dolorDesc: "El plan de 12 sesiones interrumpido en la octava no tiene solo un costo clínico: el paciente no se recupera del todo y tú pierdes ingresos ya comprometidos. Sin cobro anticipado por paquete y sin recordatorios que mantengan al paciente activo en su rehabilitación, el abandono prematuro es la norma. La solución no es insistir por teléfono, sino construir el compromiso desde la reserva.",
    features: [
      {
        icon: "Package",
        title: "Planes de rehabilitación como paquetes",
        desc: "Crea planes kinésicos de 8, 12 o 20 sesiones y véndelos como un paquete con pago anticipado integrado.",
      },
      {
        icon: "BarChart2",
        title: "Seguimiento de avance por sesión",
        desc: "Registra el progreso del paciente en cada sesión directamente en su ficha para tener el historial clínico siempre disponible.",
      },
      {
        icon: "Bell",
        title: "Recordatorios de continuidad del plan",
        desc: "El sistema recuerda automáticamente al paciente su próxima sesión por WhatsApp para que no rompa la cadencia del plan kinésico.",
      },
      {
        icon: "CreditCard",
        title: "Cobro del plan completo al inicio",
        desc: "El paciente paga el plan completo al reservar la primera sesión. La continuidad del tratamiento queda asegurada antes de que comience.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Pacientes que completan la rehabilitación",
        desc: "El cobro anticipado y los recordatorios automáticos eliminan el abandono prematuro del plan kinésico, mejorando resultados clínicos y reduciendo baches en tu agenda.",
      },
      {
        n: "02",
        title: "Ingresos predecibles por plan de rehabilitación",
        desc: "Al cobrar el plan completo desde el inicio, tu flujo de caja no depende de la asistencia sesión a sesión. Ya tienes el ingreso asegurado.",
      },
      {
        n: "03",
        title: "Control exacto de sesiones por cada paciente",
        desc: "Sabes en todo momento cuántas sesiones ha completado cada paciente y cuántas le quedan, sin llevar planillas ni anotaciones separadas.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo crear planes kinésicos con distintas cantidades de sesiones?",
        a: "Sí. En attempo puedes configurar paquetes de cualquier número de sesiones con el precio que corresponda. Cada paciente tiene su propio contador de sesiones usadas y pendientes, visible desde el panel administrativo.",
      },
      {
        q: "¿Cómo recibe el paciente el recordatorio de su próxima sesión de kinesiología?",
        a: "El sistema envía automáticamente un recordatorio por WhatsApp según el intervalo que tú definas. Si el paciente tiene sesiones cada dos días, el recordatorio se envía el día anterior a la hora acordada, sin que tengas que hacer nada manualmente.",
      },
      {
        q: "¿Puedo llevar una ficha de evolución clínica de cada paciente?",
        a: "Sí. Cada paciente tiene una ficha donde puedes registrar notas por sesión, objetivos del plan kinésico, observaciones clínicas y el estado general del tratamiento. Todo en un solo lugar, accesible desde cualquier dispositivo.",
      },
      {
        q: "¿attempo funciona para un centro kinésico con varios profesionales?",
        a: "Sí. Puedes tener múltiples kinesiólogos con sus propias agendas dentro del mismo panel administrativo. El administrador ve la ocupación de todos los profesionales en tiempo real y puede gestionar los reportes por cada uno.",
      },
    ],
  },
  {
    slug: "dentistas",
    nombre: "Dentistas",
    emoji: "🦷",
    descripcion: "Sistema de agendamiento para dentistas y clínicas dentales en Chile. Confirmación automática, lista de espera y control de tratamientos de múltiples sesiones.",
    dolor: "El sillón queda vacío porque el paciente no confirmó y lo supiste cuando ya era demasiado tarde para reemplazarlo.",
    dolorDesc: "Una hora dental sin ocupar no es solo ingreso perdido: es un costo fijo que igual pagas, el arriendo, los insumos, el personal. En odontología el tiempo del sillón es el activo más valioso que tienes, y perderlo por una inasistencia que pudo confirmarse automáticamente es el problema más costoso y más evitable de la agenda. Sin lista de espera activa y sin confirmación obligatoria, el riesgo siempre es tuyo.",
    features: [
      {
        icon: "Bell",
        title: "Confirmación obligatoria 24h antes por WhatsApp",
        desc: "El sistema solicita confirmación automática al paciente el día anterior. Si no confirma, puedes ofrecer el cupo a alguien en lista de espera.",
      },
      {
        icon: "Users",
        title: "Lista de espera automática",
        desc: "Cuando se libera una hora, el sistema notifica inmediatamente a los pacientes en lista de espera para que el sillón nunca quede vacío.",
      },
      {
        icon: "CreditCard",
        title: "Cobro anticipado de procedimientos",
        desc: "Para procedimientos de mayor valor, el paciente paga un anticipo al reservar. Esto reduce drásticamente las inasistencias sin aviso.",
      },
      {
        icon: "Package",
        title: "Control de tratamientos de varias sesiones",
        desc: "Gestiona tratamientos de ortodoncia, blanqueamientos y rehabilitaciones como paquetes con seguimiento de sesiones pendientes.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "El sillón siempre ocupado",
        desc: "La combinación de confirmación automática y lista de espera activa elimina los cupos vacíos de último momento sin que tengas que llamar a nadie.",
      },
      {
        n: "02",
        title: "Confirmaciones sin gestión manual",
        desc: "El sistema confirma, recuerda y gestiona listas de espera de forma completamente automática. Tu recepcionista se enfoca en la atención presencial.",
      },
      {
        n: "03",
        title: "Tratamientos largos bajo control",
        desc: "Los tratamientos de múltiples sesiones quedan registrados con cada etapa, fecha y estado de pago, sin que nada se pierda entre consulta y consulta.",
      },
    ],
    faqs: [
      {
        q: "¿attempo funciona para una clínica dental con varios dentistas?",
        a: "Sí. Puedes agregar todos los profesionales de la clínica con sus propias agendas y servicios. El panel administrativo central muestra la ocupación de todos en tiempo real y genera reportes por dentista.",
      },
      {
        q: "¿Puedo gestionar tratamientos de múltiples sesiones como ortodoncia o rehabilitación?",
        a: "Sí. attempo permite crear paquetes de sesiones para tratamientos prolongados. Cada paciente tiene un contador de sesiones completadas y pendientes, con historial de fechas y notas por sesión.",
      },
      {
        q: "¿Cómo funciona la lista de espera automática para dentistas?",
        a: "Cuando un paciente cancela o no confirma su hora, el sistema notifica automáticamente a los pacientes que estaban en lista de espera para ese profesional. Ellos pueden confirmar directamente desde el mensaje de WhatsApp, sin intervención de la recepción.",
      },
      {
        q: "¿Los pacientes pueden ver y gestionar sus propias citas dentales?",
        a: "Sí. Cada paciente recibe un enlace para ver su próxima cita, confirmarla, cancelarla o reagendarla dentro del plazo permitido. También puede acceder al historial de consultas realizadas.",
      },
    ],
  },
  {
    slug: "medicos",
    nombre: "Médicos",
    emoji: "🩺",
    descripcion: "Sistema de agendamiento online para médicos en Chile. Reservas 24/7, recordatorios automáticos y chatbot IA para liberar tu agenda del teléfono.",
    dolor: "El teléfono del consultorio no para de sonar para agendar citas mientras intentas atender a los pacientes que ya están ahí.",
    dolorDesc: "Cada llamada para reservar, reagendar o consultar horarios interrumpe la consulta que estás dando en ese momento. El resultado es doble: la atención se fragmenta y los errores de agenda aumentan. Tu secretaria ya no da abasto y los pacientes se quejan de que nadie contesta. Todo eso tiene una solución directa: un sistema que automatice la reserva desde el primer contacto, las 24 horas del día.",
    features: [
      {
        icon: "Globe",
        title: "Agenda online disponible las 24 horas",
        desc: "Los pacientes reservan su hora por web o WhatsApp a cualquier hora del día o de la noche, sin necesidad de llamar al consultorio.",
      },
      {
        icon: "Bot",
        title: "Chatbot IA para consultas y reservas",
        desc: "Attia responde preguntas sobre horarios, valores y disponibilidad de forma automática y agenda citas sin intervención humana.",
      },
      {
        icon: "MessageCircle",
        title: "Recordatorios automáticos por WhatsApp",
        desc: "El sistema envía recordatorios automáticos antes de cada consulta para eliminar inasistencias sin que nadie tenga que llamar.",
      },
      {
        icon: "ClipboardList",
        title: "Ficha del paciente con historial de consultas",
        desc: "Cada paciente tiene su ficha con el historial de visitas, motivos de consulta y notas clínicas accesibles desde el panel.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Cero interrupciones por llamadas de agenda",
        desc: "Los pacientes reservan solos online. El teléfono deja de sonar para consultas de horario y tu equipo puede enfocarse en la atención presencial.",
      },
      {
        n: "02",
        title: "Pacientes que llegan a su hora",
        desc: "Los recordatorios automáticos por WhatsApp reducen las inasistencias sin que nadie tenga que hacer seguimiento manual.",
      },
      {
        n: "03",
        title: "Historial completo por cada paciente",
        desc: "Accede al registro de consultas previas, motivos de visita y notas clínicas de cada paciente desde un solo panel.",
      },
    ],
    faqs: [
      {
        q: "¿attempo funciona para médicos en consulta particular y clínica al mismo tiempo?",
        a: "Sí. Puedes configurar distintos servicios, precios y horarios para cada modalidad de atención. Si atiendes en más de un lugar, puedes bloquear los horarios correspondientes para que no se solapen las reservas.",
      },
      {
        q: "¿Cómo saben los pacientes que pueden agendar hora médica online?",
        a: "Te entregamos un enlace de agenda personalizado para tu consultorio que puedes compartir en tus redes sociales, WhatsApp o sitio web. También puedes activar el chatbot de Instagram o WhatsApp para que los pacientes agenden directamente desde esos canales.",
      },
      {
        q: "¿Puedo bloquear horarios para atención de urgencia o administrativos?",
        a: "Sí. Desde el panel puedes bloquear cualquier rango horario manualmente para que no quede disponible para reservas online. También puedes definir horarios de atención diferentes para cada día de la semana.",
      },
      {
        q: "¿attempo se integra con Google Calendar para médicos?",
        a: "Sí. attempo tiene integración con Google Calendar. Cada vez que se confirma una cita, se crea automáticamente un evento en tu Google Calendar. Si reagendas o cancelas desde el panel, el evento se actualiza de forma automática.",
      },
    ],
  },
  {
    slug: "belleza",
    nombre: "Peluquerías y Belleza",
    emoji: "💇",
    descripcion: "Gestiona turnos de corte, color, uñas, pestañas y botox con reservas online y seña anticipada.",
    dolor: "Un turno de uñas o pestañas que no se confirma es irrecuperable. Perdiste el cupo y la plata.",
    dolorDesc: "En el mundo de la belleza, cada cupo tiene un costo real: tiempo, materiales y preparación. Un no-show en una sesión de extensiones de pestañas o botox no es solo tiempo perdido — ese cupo no se puede recuperar. Sin cobro anticipado ni recordatorio automático, el control queda en manos del cliente.",
    features: [
      {
        icon: "CreditCard",
        title: "Seña anticipada con Webpay",
        desc: "El cliente paga la seña al reservar. Sin pago, no hay turno. Elimina los no-shows de raíz.",
      },
      {
        icon: "MessageCircle",
        title: "Recordatorio por WhatsApp",
        desc: "El sistema envía un recordatorio automático antes del turno para que el cliente no olvide ni cancele a última hora.",
      },
      {
        icon: "CalendarDays",
        title: "Reserva 24/7 por Instagram",
        desc: "El chatbot Attia responde en Instagram y agenda turnos aunque tu local esté cerrado.",
      },
      {
        icon: "Users",
        title: "Agenda por estilista o profesional",
        desc: "Gestiona la disponibilidad de cada miembro del equipo por separado. Sin cruces ni doble reserva.",
      },
    ],
    beneficios: [
      {
        n: "01",
        title: "Cero turnos vacíos por no-shows",
        desc: "El cobro anticipado de la seña elimina las ausencias sin aviso. El cupo que reservan, lo pagan.",
      },
      {
        n: "02",
        title: "Reservas por Instagram sin responder mensajes",
        desc: "Attia atiende a tus seguidores y agenda turnos en automático, incluso de madrugada o fin de semana.",
      },
      {
        n: "03",
        title: "Cada profesional con su propia agenda",
        desc: "Configura servicios, precios y horarios por estilista o cosmetóloga. Sin confusión entre los turnos del equipo.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usar attempo para una peluquería con varios estilistas?",
        a: "Sí. Puedes agregar varios profesionales a tu cuenta y cada uno tiene su propia agenda, servicios y horarios. El cliente elige al estilista que prefiere al momento de reservar.",
      },
      {
        q: "¿Cómo funciona la seña anticipada para turnos de uñas o pestañas?",
        a: "Cuando el cliente reserva online, el sistema le pide que pague un monto como seña con Webpay. Si no paga, el turno no queda confirmado. Así eliminas los no-shows sin tener que cobrar tú manualmente.",
      },
      {
        q: "¿Mis clientes pueden agendar desde Instagram?",
        a: "Sí. Con el chatbot Attia activado, tus seguidores pueden reservar turno directamente desde los mensajes de Instagram. El bot pregunta por el servicio, el día y la hora, y confirma el turno automáticamente.",
      },
      {
        q: "¿Funciona para botox, extensiones de pestañas y tratamientos estéticos?",
        a: "Sí. Puedes crear cualquier servicio con su precio, duración y descripción. Ya sea un corte, color, diseño de cejas, extensiones de pestañas, botox o tratamiento facial — todo se puede agendar online.",
      },
    ],
  },
]

export function getEspecialidadBySlug(slug: string): Especialidad | undefined {
  return especialidades.find((e) => e.slug === slug)
}
