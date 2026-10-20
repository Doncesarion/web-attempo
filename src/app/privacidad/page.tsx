import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad — attempo",
  description: "Política de privacidad de attempo. Cómo recopilamos, usamos y protegemos tu información personal y la de tus pacientes.",
  robots: { index: true, follow: false },
}

const secciones = [
  {
    titulo: "1. Responsable del tratamiento",
    contenido:
      "attempo (en adelante \"la Plataforma\") es responsable del tratamiento de los datos personales recopilados a través de attempo.cl y sus servicios asociados. Para consultas relacionadas con privacidad, puedes contactarnos en contacto@attempo.cl.",
  },
  {
    titulo: "2. Datos que recopilamos",
    contenido:
      "Recopilamos los datos que tú nos proporcionas directamente: nombre, correo electrónico, teléfono, especialidad profesional y datos de pago. Adicionalmente, recopilamos información de uso de la plataforma (páginas visitadas, acciones realizadas) para mejorar el servicio.",
  },
  {
    titulo: "3. Finalidad del tratamiento",
    contenido:
      "Utilizamos tus datos para: (a) prestar y mejorar los servicios de agendamiento; (b) enviar recordatorios y notificaciones relacionadas con el servicio; (c) procesar pagos de suscripción; (d) responder a solicitudes de soporte; y (e) enviarte comunicaciones sobre nuevas funcionalidades, si has dado tu consentimiento.",
  },
  {
    titulo: "4. Datos de pacientes",
    contenido:
      "Los datos de pacientes que ingresas a la plataforma son de tu exclusiva responsabilidad como profesional. attempo actúa como encargado del tratamiento y no utiliza esa información para fines propios. Nunca vendemos ni compartimos datos de pacientes con terceros.",
  },
  {
    titulo: "5. Base legal",
    contenido:
      "El tratamiento de tus datos se realiza en conformidad con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile y la Ley N° 21.719 de Protección de Datos Personales, que entrará en plena vigencia el 1 de diciembre de 2026. En el período de transición, adoptamos proactivamente los estándares que esta nueva ley exige.",
  },
  {
    titulo: "6. Almacenamiento y seguridad",
    contenido:
      "Tus datos se almacenan en servidores de Supabase, ubicados en Estados Unidos, con cifrado TLS en tránsito y en reposo. Supabase cumple con los estándares SOC 2 Type II. Contamos además con controles de acceso estrictos y medidas organizativas para prevenir el acceso no autorizado, la pérdida o la alteración de la información.",
  },
  {
    titulo: "7. Procesamiento mediante inteligencia artificial",
    contenido:
      "attempo utiliza tecnología de inteligencia artificial de Anthropic (modelos Claude) para el asistente virtual Attia. Los mensajes procesados por Attia no son utilizados para entrenar modelos de IA. Las conversaciones pueden quedar almacenadas en los servidores de attempo para efectos del historial de atención. Te recomendamos no compartir información médica sensible a través del chat.",
  },
  {
    titulo: "8. Plazo de conservación",
    contenido:
      "Conservamos tus datos mientras mantengas una cuenta activa en attempo. Una vez que solicites la eliminación de tu cuenta, tus datos serán suprimidos en un plazo máximo de 30 días hábiles, salvo obligación legal de conservación.",
  },
  {
    titulo: "9. Tus derechos",
    contenido:
      "Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos (derechos ARCO). Con la entrada en vigencia de la Ley N° 21.719, también podrás ejercer el derecho a la portabilidad de tus datos y a oponerte a decisiones automatizadas que te afecten. Para ejercer cualquiera de estos derechos, escríbenos a contacto@attempo.cl con el asunto \"Solicitud de privacidad\" y te responderemos en un plazo máximo de 15 días hábiles.",
  },
  {
    titulo: "10. Cookies y tecnologías similares",
    contenido:
      "Utilizamos cookies esenciales para el funcionamiento de la plataforma y cookies analíticas (Google Tag Manager) para entender el uso del sitio. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la experiencia de uso.",
  },
  {
    titulo: "11. Cambios en esta política",
    contenido:
      "Podemos actualizar esta política ocasionalmente. Si los cambios son significativos, te notificaremos por correo electrónico o mediante un aviso destacado en la plataforma. La fecha de última actualización aparece al pie de esta página.",
  },
]

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 px-4 bg-gradient-to-b from-[#f5f3ff] to-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-xs font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Política de Privacidad</h1>
          <p className="text-gray-500">
            Última actualización: octubre 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          {secciones.map((s) => (
            <div key={s.titulo}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">{s.titulo}</h2>
              <p className="text-gray-600 leading-relaxed">{s.contenido}</p>
            </div>
          ))}

          <div className="border-t border-gray-100 pt-8 text-center">
            <p className="text-sm text-gray-400">
              ¿Tienes dudas?{" "}
              <a href="mailto:contacto@attempo.cl" className="text-[#6C5CE4] hover:underline">
                contacto@attempo.cl
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
