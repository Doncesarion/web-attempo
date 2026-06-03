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

  const primerNombre = data.nombre.split(" ")[0]

  const { error } = await resend.emails.send({
    from: "attempo contacto <onboarding@resend.dev>",
    to: "cesarsalinasmunoz@gmail.com",
    replyTo: data.email,
    subject: `[attempo] ${data.asunto}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#f0ecff;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f0ecff">
<tr><td align="center" style="padding:32px 16px 40px">
<table width="500" cellpadding="0" cellspacing="0" style="max-width:500px;width:100%">

  <!-- Header morado -->
  <tr><td bgcolor="#6C5CE4" style="border-radius:16px 16px 0 0;padding:28px 24px 24px;text-align:center">
    <table cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 10px">
    <tr><td bgcolor="#5a4bd1" style="border-radius:14px;width:54px;height:54px;text-align:center;vertical-align:middle;padding:0">
      <span style="display:block;font-size:21px;font-weight:900;color:#ffffff;font-family:Georgia,'Times New Roman',serif;letter-spacing:-2px;line-height:54px">tt</span>
    </td></tr>
    </table>
    <p style="margin:0;font-size:13px;color:#c4b5fd;font-family:Arial,sans-serif;font-weight:500">Todo a tu tiempo</p>
  </td></tr>

  <!-- Cuerpo blanco -->
  <tr><td bgcolor="#ffffff" style="padding:28px 32px 8px;text-align:center">
    <p style="margin:0 0 4px;font-size:22px;font-weight:700;color:#111827;font-family:Arial,sans-serif">Nuevo mensaje ✉️</p>
    <p style="margin:0;font-size:14px;color:#6b7280;font-family:Arial,sans-serif"><strong style="color:#374151">${primerNombre}</strong> quiere conocer attempo</p>
  </td></tr>

  <!-- Card de datos -->
  <tr><td bgcolor="#ffffff" style="padding:20px 32px">
    <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f5f3ff" style="border-radius:12px;border:1px solid #ede9fe">
    <tr><td style="padding:20px 24px">

      <!-- Nombre -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Nombre</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#111827">${data.nombre}</p>
      </td></tr>
      </table>

      <!-- Asunto -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Asunto</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#111827">${data.asunto}</p>
      </td></tr>
      </table>

      <!-- Email -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:${data.telefono || data.empresa ? "16px" : "0"}">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Email</p>
        <p style="margin:0;font-size:15px"><a href="mailto:${data.email}" style="color:#6C5CE4;font-weight:600;text-decoration:none">${data.email}</a></p>
      </td></tr>
      </table>

      ${data.telefono ? `
      <!-- Teléfono -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:${data.empresa ? "16px" : "0"}">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Teléfono</p>
        <p style="margin:0;font-size:15px"><a href="https://wa.me/${data.telefono.replace(/[^0-9]/g, "")}" style="color:#6C5CE4;font-weight:600;text-decoration:none">${data.telefono}</a></p>
      </td></tr>
      </table>` : ""}

      ${data.empresa ? `
      <!-- Empresa -->
      <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Empresa</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#111827">${data.empresa}</p>
      </td></tr>
      </table>` : ""}

    </td></tr>
    </table>
  </td></tr>

  <!-- Mensaje -->
  <tr><td bgcolor="#ffffff" style="padding:0 32px 28px">
    <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px;text-align:center">Mensaje</p>
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td bgcolor="#f9f7ff" style="padding:16px 20px;border-radius:10px;border-left:3px solid #6C5CE4">
      <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap">${data.mensaje}</p>
    </td></tr>
    </table>
  </td></tr>

  <!-- CTA -->
  <tr><td bgcolor="#ffffff" style="padding:0 32px 32px;text-align:center;border-radius:0 0 16px 16px">
    <a href="mailto:${data.email}" style="display:inline-block;background-color:#6C5CE4;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:13px 36px;border-radius:10px;font-family:Arial,sans-serif">
      Responder a ${primerNombre} →
    </a>
  </td></tr>

  <!-- Footer -->
  <tr><td align="center" style="padding:20px 0 0">
    <p style="margin:0;font-size:12px;color:#9ca3af">
      Enviado desde <a href="https://attempo.cl/contacto" style="color:#8b7ff0;text-decoration:none">attempo.cl/contacto</a>
    </p>
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
