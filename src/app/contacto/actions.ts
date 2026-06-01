"use server"

import nodemailer from "nodemailer"

export type ContactFormData = {
  nombre: string
  email: string
  telefono: string
  empresa: string
  asunto: string
  mensaje: string
}

export async function sendContactEmail(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: `"attempo contacto" <${process.env.GMAIL_USER}>`,
    to: "cesarsalinasmunoz@gmail.com",
    replyTo: data.email,
    subject: `[attempo] ${data.asunto}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#6C5CE4;padding:24px 32px;border-radius:12px 12px 0 0">
          <h2 style="color:white;margin:0;font-size:20px">Nuevo mensaje desde attempo.cl</h2>
        </div>
        <div style="background:#f8f7ff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e3ff">
          <p style="margin:0 0 8px"><strong>Nombre:</strong> ${data.nombre}</p>
          <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          ${data.telefono ? `<p style="margin:0 0 8px"><strong>Teléfono:</strong> ${data.telefono}</p>` : ""}
          ${data.empresa ? `<p style="margin:0 0 8px"><strong>Empresa/Clínica:</strong> ${data.empresa}</p>` : ""}
          <p style="margin:0 0 24px"><strong>Asunto:</strong> ${data.asunto}</p>
          <div style="background:white;border-radius:8px;padding:20px;border:1px solid #e5e3ff">
            <p style="margin:0;white-space:pre-wrap">${data.mensaje}</p>
          </div>
          <p style="margin:24px 0 0;font-size:12px;color:#999">Enviado desde attempo.cl/contacto</p>
        </div>
      </div>
    `,
  })
}
