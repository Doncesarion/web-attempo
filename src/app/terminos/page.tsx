import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones — attempo",
  description: "Términos y condiciones de uso de attempo. Conoce las reglas que regulan el uso de la plataforma de agendamiento.",
  robots: { index: true, follow: false },
}

const secciones = [
  {
    titulo: "1. Aceptación de los términos",
    contenido:
      "Al registrarte y usar attempo, aceptas estos Términos y Condiciones en su totalidad. Si no estás de acuerdo con alguna de las condiciones, no debes usar el servicio.",
  },
  {
    titulo: "2. Descripción del servicio",
    contenido:
      "attempo es una plataforma de agendamiento de citas online orientada a profesionales de la salud y servicios en Chile. Permite gestionar agenda, enviar recordatorios automáticos, cobrar en línea y mantener una ficha básica de pacientes.",
  },
  {
    titulo: "3. Registro y cuenta",
    contenido:
      "Para usar attempo debes crear una cuenta con información veraz y actualizada. Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades realizadas desde tu cuenta. attempo no se hace responsable por accesos no autorizados derivados de negligencia en el resguardo de credenciales.",
  },
  {
    titulo: "4. Planes y pagos",
    contenido:
      "attempo ofrece planes de suscripción mensual y anual. Los precios se expresan en pesos chilenos (CLP) más IVA. El cobro se realiza de forma anticipada al inicio de cada período. No se realizan reembolsos por períodos parciales, salvo que corresponda por ley.",
  },
  {
    titulo: "5. Período de prueba",
    contenido:
      "Ofrecemos 12 días de prueba gratuita en cualquier plan. Al término del período de prueba, para continuar usando el servicio deberás seleccionar un plan y completar el pago correspondiente.",
  },
  {
    titulo: "6. Cancelación",
    contenido:
      "Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. La cancelación tiene efecto al término del período ya pagado, sin cargos adicionales. No existe permanencia mínima.",
  },
  {
    titulo: "7. Uso aceptable",
    contenido:
      "El servicio debe usarse exclusivamente para fines legítimos de gestión de citas. Está prohibido: usar attempo para actividades ilegales, enviar spam a pacientes, intentar acceder a cuentas de otros usuarios o realizar ingeniería inversa de la plataforma.",
  },
  {
    titulo: "8. Datos y privacidad",
    contenido:
      "El tratamiento de datos personales se rige por nuestra Política de Privacidad disponible en attempo.cl/privacidad. Tú eres responsable de los datos de tus pacientes que ingresas a la plataforma y de contar con las autorizaciones necesarias para su tratamiento.",
  },
  {
    titulo: "9. Disponibilidad del servicio",
    contenido:
      "attempo busca mantener el servicio disponible 24/7, pero no garantiza disponibilidad ininterrumpida. Podemos realizar mantenimientos programados avisando con anticipación. No somos responsables por interrupciones causadas por factores fuera de nuestro control.",
  },
  {
    titulo: "10. Propiedad intelectual",
    contenido:
      "Todos los derechos sobre la plataforma, su diseño, código y contenido son propiedad de attempo. No se concede ninguna licencia más allá del uso personal del servicio contratado.",
  },
  {
    titulo: "11. Limitación de responsabilidad",
    contenido:
      "attempo no se hace responsable por daños indirectos, lucro cesante o pérdida de datos derivados del uso o imposibilidad de uso del servicio. La responsabilidad máxima de attempo se limita al monto pagado por el usuario en los últimos 3 meses.",
  },
  {
    titulo: "12. Modificaciones",
    contenido:
      "Podemos modificar estos términos en cualquier momento. Los cambios relevantes se notificarán por email con al menos 15 días de anticipación. El uso continuado del servicio tras la notificación implica aceptación de los nuevos términos.",
  },
  {
    titulo: "13. Jurisdicción y ley aplicable",
    contenido:
      "Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia se someterá a la jurisdicción de los Tribunales Ordinarios de Justicia de la ciudad de Santiago.",
  },
]

export default function TerminosPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 px-4 bg-gradient-to-b from-[#f5f3ff] to-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#6C5CE4] text-xs font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Términos y Condiciones</h1>
          <p className="text-gray-500">
            Última actualización: junio 2025
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
