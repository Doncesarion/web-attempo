"use server"

import { Resend } from "resend"

export type ContactFormData = {
  nombre: string
  email: string
  telefono: string
  empresa: string
  asunto: string
  mensaje: string
}

export async function sendContactEmail(data: ContactFormData): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error("[contacto] RESEND_API_KEY no configurada")
    return { ok: false, error: "Configuración de email faltante en el servidor." }
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: "attempo contacto <onboarding@resend.dev>",
    to: "cesarsalinasmunoz@gmail.com",
    replyTo: data.email,
    subject: `[attempo] ${data.asunto}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0eeff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0eeff;padding:40px 16px">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%">

        <!-- Logo header -->
        <tr><td style="padding-bottom:24px;text-align:center">
          <div style="display:inline-flex;align-items:center;gap:8px">
            <div style="width:36px;height:36px;background:#6C5CE4;border-radius:10px;display:inline-block;vertical-align:middle"></div>
            <span style="font-size:22px;font-weight:800;color:#1a1a2e;vertical-align:middle;margin-left:8px">attempo</span>
          </div>
        </td></tr>

        <!-- Card -->
        <tr><td style="background:white;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(108,92,228,0.10)">

          <!-- Header -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:linear-gradient(135deg,#6C5CE4 0%,#4F46E5 100%);padding:32px 36px">
              <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#c4baff;text-transform:uppercase;letter-spacing:1.5px">Nuevo mensaje</p>
              <h1 style="margin:0;font-size:26px;font-weight:800;color:white;line-height:1.2">📬 ${data.asunto}</h1>
            </td></tr>
          </table>

          <!-- Contact info chips -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:28px 36px 20px">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 8px 8px 0">
                    <div style="background:#f5f3ff;border:1px solid #e0daff;border-radius:10px;padding:10px 14px;display:inline-block">
                      <span style="font-size:11px;color:#8b7ff0;font-weight:600;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:2px">Nombre</span>
                      <span style="font-size:15px;color:#1a1a2e;font-weight:600">${data.nombre}</span>
                    </div>
                  </td>
                  ${data.empresa ? `
                  <td style="padding:0 0 8px 0">
                    <div style="background:#f5f3ff;border:1px solid #e0daff;border-radius:10px;padding:10px 14px;display:inline-block">
                      <span style="font-size:11px;color:#8b7ff0;font-weight:600;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:2px">Empresa</span>
                      <span style="font-size:15px;color:#1a1a2e;font-weight:600">${data.empresa}</span>
                    </div>
                  </td>` : ""}
                </tr>
                <tr>
                  <td style="padding:0 8px 8px 0">
                    <div style="background:#f5f3ff;border:1px solid #e0daff;border-radius:10px;padding:10px 14px;display:inline-block">
                      <span style="font-size:11px;color:#8b7ff0;font-weight:600;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:2px">Email</span>
                      <a href="mailto:${data.email}" style="font-size:15px;color:#6C5CE4;font-weight:600;text-decoration:none">${data.email}</a>
                    </div>
                  </td>
                  ${data.telefono ? `
                  <td style="padding:0 0 8px 0">
                    <div style="background:#f5f3ff;border:1px solid #e0daff;border-radius:10px;padding:10px 14px;display:inline-block">
                      <span style="font-size:11px;color:#8b7ff0;font-weight:600;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:2px">Teléfono</span>
                      <a href="https://wa.me/${data.telefono.replace(/[^0-9]/g, "")}" style="font-size:15px;color:#6C5CE4;font-weight:600;text-decoration:none">${data.telefono} →</a>
                    </div>
                  </td>` : ""}
                </tr>
              </table>
            </td></tr>
          </table>

          <!-- Divider -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:0 36px"><div style="height:1px;background:#f0eeff"></div></td></tr>
          </table>

          <!-- Message -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:24px 36px 32px">
              <p style="margin:0 0 12px;font-size:11px;font-weight:600;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Mensaje</p>
              <div style="background:#fafafa;border-left:3px solid #6C5CE4;border-radius:0 10px 10px 0;padding:18px 20px">
                <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap">${data.mensaje}</p>
              </div>
            </td></tr>
          </table>

          <!-- Reply CTA -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:#faf9ff;border-top:1px solid #f0eeff;padding:20px 36px;text-align:center">
              <a href="mailto:${data.email}" style="display:inline-block;background:#6C5CE4;color:white;font-weight:700;font-size:14px;text-decoration:none;padding:12px 28px;border-radius:10px">
                Responder a ${data.nombre.split(" ")[0]} →
              </a>
            </td></tr>
          </table>

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 0;text-align:center">
          <p style="margin:0;font-size:12px;color:#9ca3af">Enviado desde <a href="https://attempo.cl/contacto" style="color:#8b7ff0;text-decoration:none">attempo.cl/contacto</a></p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  })

  if (error) {
    console.error("[contacto] Error Resend:", error)
    return { ok: false, error: error.message }
  }

  return { ok: true }
}
