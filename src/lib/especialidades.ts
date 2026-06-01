export interface Especialidad {
  slug: string
  nombre: string
  emoji: string
  descripcion: string
}

export const especialidades: Especialidad[] = [
  { slug: "psicologos", nombre: "Psicólogos", emoji: "🧠", descripcion: "Gestiona sesiones, reagendamientos y seguimiento de pacientes con facilidad." },
  { slug: "psiquiatras", nombre: "Psiquiatras", emoji: "🩺", descripcion: "Control de citas, recordatorios automáticos y ficha de paciente integrada." },
  { slug: "medicos-generales", nombre: "Médicos Generales", emoji: "👨‍⚕️", descripcion: "Organiza tu agenda médica y reduce las inasistencias con recordatorios." },
  { slug: "centros-clinicos", nombre: "Centros Clínicos", emoji: "🏥", descripcion: "Administra múltiples especialistas y salas desde un solo panel." },
  { slug: "barberias", nombre: "Barberías", emoji: "✂️", descripcion: "Agenda de cortes, reservas online y confirmación automática por WhatsApp." },
  { slug: "derecho", nombre: "Abogados", emoji: "⚖️", descripcion: "Coordina consultas jurídicas y reuniones sin complicaciones." },
  { slug: "nutricion", nombre: "Nutricionistas", emoji: "🥗", descripcion: "Planifica tus consultas nutricionales y mantén a tus pacientes informados." },
  { slug: "matronas", nombre: "Matronas", emoji: "🤱", descripcion: "Gestiona controles prenatales y consultas con recordatorios personalizados." },
  { slug: "esteticas", nombre: "Centros de Estética", emoji: "💆", descripcion: "Reservas de tratamientos, confirmaciones y recordatorios automáticos." },
  { slug: "fisioterapeutas", nombre: "Fisioterapeutas", emoji: "🦴", descripcion: "Organiza sesiones de kinesioterapia y rehabilitación sin esfuerzo." },
  { slug: "yoga", nombre: "Yoga y Bienestar", emoji: "🧘", descripcion: "Agenda clases, talleres y sesiones individuales con tu comunidad." },
]

export function getEspecialidadBySlug(slug: string): Especialidad | undefined {
  return especialidades.find((e) => e.slug === slug)
}
