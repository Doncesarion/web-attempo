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
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#f5f3ff">
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f5f3ff">
<tr><td align="center" style="padding:40px 16px">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">

  <!-- Logo -->
  <tr><td align="center" style="padding-bottom:20px">
    <span style="font-size:24px;font-weight:900;color:#6C5CE4;letter-spacing:-0.5px">attempo</span>
  </td></tr>

  <!-- Card -->
  <tr><td bgcolor="#ffffff" style="border-radius:16px;overflow:hidden;border:1px solid #ede9fe">

    <!-- Header morado -->
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td bgcolor="#6C5CE4" style="padding:28px 36px;border-radius:16px 16px 0 0">
      <p style="margin:0 0 4px;font-size:11px;color:#c4baff;font-weight:600;text-transform:uppercase;letter-spacing:2px;font-family:Arial,sans-serif">Nuevo mensaje de contacto</p>
      <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;font-family:Arial,sans-serif">${data.asunto}</p>
    </td></tr>
    </table>

    <!-- Datos -->
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:28px 36px 0">

      <!-- Nombre -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px">
      <tr>
        <td width="120" style="font-size:12px;font-weight:600;color:#8b7ff0;text-transform:uppercase;letter-spacing:1px;font-family:Arial,sans-serif;padding-top:2px">Nombre</td>
        <td style="font-size:15px;color:#111827;font-weight:600;font-family:Arial,sans-serif">${data.nombre}</td>
      </tr>
      </table>

      <!-- Email -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px">
      <tr>
        <td width="120" style="font-size:12px;font-weight:600;color:#8b7ff0;text-transform:uppercase;letter-spacing:1px;font-family:Arial,sans-serif;padding-top:2px">Email</td>
        <td style="font-size:15px;font-family:Arial,sans-serif"><a href="mailto:${data.email}" style="color:#6C5CE4;font-weight:600;text-decoration:none">${data.email}</a></td>
      </tr>
      </table>

      ${data.telefono ? `
      <!-- Teléfono -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px">
      <tr>
        <td width="120" style="font-size:12px;font-weight:600;color:#8b7ff0;text-transform:uppercase;letter-spacing:1px;font-family:Arial,sans-serif;padding-top:2px">Teléfono</td>
        <td style="font-size:15px;font-family:Arial,sans-serif"><a href="https://wa.me/${data.telefono.replace(/[^0-9]/g, "")}" style="color:#6C5CE4;font-weight:600;text-decoration:none">${data.telefono}</a></td>
      </tr>
      </table>` : ""}

      ${data.empresa ? `
      <!-- Empresa -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px">
      <tr>
        <td width="120" style="font-size:12px;font-weight:600;color:#8b7ff0;text-transform:uppercase;letter-spacing:1px;font-family:Arial,sans-serif;padding-top:2px">Empresa</td>
        <td style="font-size:15px;color:#111827;font-weight:600;font-family:Arial,sans-serif">${data.empresa}</td>
      </tr>
      </table>` : ""}

    </td></tr>
    </table>

    <!-- Separador -->
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:20px 36px 0"><hr style="border:none;border-top:1px solid #ede9fe;margin:0"></td></tr>
    </table>

    <!-- Mensaje -->
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:20px 36px">
      <p style="margin:0 0 10px;font-size:11px;font-weight:600;color:#8b7ff0;text-transform:uppercase;letter-spacing:2px;font-family:Arial,sans-serif">Mensaje</p>
      <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td bgcolor="#f9f7ff" style="padding:16px 20px;border-radius:10px;border-left:3px solid #6C5CE4">
        <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;font-family:Arial,sans-serif;white-space:pre-wrap">${data.mensaje}</p>
      </td></tr>
      </table>
    </td></tr>
    </table>

    <!-- CTA -->
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td bgcolor="#faf9ff" style="padding:20px 36px;border-top:1px solid #ede9fe;border-radius:0 0 16px 16px;text-align:center">
      <a href="mailto:${data.email}" style="display:inline-block;background-color:#6C5CE4;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 32px;border-radius:10px;font-family:Arial,sans-serif">
        Responder a ${data.nombre.split(" ")[0]}
      </a>
    </td></tr>
    </table>

  </td></tr>

  <!-- Footer -->
  <tr><td align="center" style="padding:20px 0">
    <p style="margin:0;font-size:12px;color:#9ca3af;font-family:Arial,sans-serif">
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
