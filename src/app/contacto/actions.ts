"use server"

import { Resend } from "resend"
import { headers } from "next/headers"

// F-01: Rate limiting con Upstash Redis (persistente entre instancias) + fallback en memoria
const _rlFallback = new Map<string, number[]>()
const RATE_WINDOW_MS = 60 * 60 * 1000

async function checkRateLimit(ip: string): Promise<boolean> {
  // F-02: IPs desconocidas tienen límite más estricto
  const max = ip === "unknown" ? 2 : 5
  const windowS = 3600

  const UPSTASH_URL   = process.env.KV_REST_API_URL
  const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN

  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const bucket = Math.floor(Date.now() / RATE_WINDOW_MS)
      const key = `rl:contacto:${ip}:${bucket}`
      const r = await fetch(`${UPSTASH_URL}/pipeline`, {
        method: "POST",
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}`, "Content-Type": "application/json" },
        body: JSON.stringify([["INCR", key], ["EXPIRE", key, windowS * 2]]),
      })
      const data = await r.json()
      const count = data[0]?.result
      if (typeof count === "number") return count <= max
    } catch { /* caer al fallback */ }
  }

  const now = Date.now()
  const times = (_rlFallback.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (times.length >= max) return false
  _rlFallback.set(ip, [...times, now])
  return true
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// F-05: Allowlist de asuntos válidos (mismo set que el <select> del frontend)
const ASUNTOS_VALIDOS = [
  "Quiero conocer attempo",
  "Soporte técnico",
  "Tengo un negocio o centro clínico",
  "Alianzas comerciales",
  "Otro",
]

// F-04: Regex de validación de email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type ContactFormData = {
  nombre: string
  email: string
  telefono: string
  empresa: string
  asunto: string
  mensaje: string
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.error("[contacto] TURNSTILE_SECRET_KEY no configurada")
    return false
  }
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token }),
  })
  const data = await res.json()
  return data.success === true
}

const MAX_LENGTHS: Record<keyof ContactFormData, number> = {
  nombre: 100,
  email: 200,
  telefono: 30,
  empresa: 150,
  asunto: 200,
  mensaje: 2000,
}

export async function sendContactEmail(data: ContactFormData, turnstileToken: string): Promise<{ ok: boolean; error?: string }> {
  const turnstileOk = await verifyTurnstile(turnstileToken)
  if (!turnstileOk) {
    return { ok: false, error: "Verificación de seguridad fallida. Intenta nuevamente." }
  }

  const headersList = await headers()
  const ip = headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"
  if (!await checkRateLimit(ip)) {
    return { ok: false, error: "Demasiados intentos. Inténtalo más tarde." }
  }

  if (!data.nombre?.trim() || !data.email?.trim() || !data.asunto?.trim() || !data.mensaje?.trim()) {
    return { ok: false, error: "Por favor completa todos los campos requeridos." }
  }

  // F-04: Validar formato de email en el servidor
  if (!EMAIL_REGEX.test(data.email.trim())) {
    return { ok: false, error: "El email no tiene un formato válido." }
  }

  // F-05: Validar asunto contra allowlist
  if (!ASUNTOS_VALIDOS.includes(data.asunto)) {
    return { ok: false, error: "Asunto inválido." }
  }

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const val = data[field as keyof ContactFormData]
    if (val && val.length > max) {
      return { ok: false, error: `El campo ${field} excede el largo permitido.` }
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[contacto] RESEND_API_KEY no configurada")
    return { ok: false, error: "Configuración de email faltante en el servidor." }
  }

  const resend = new Resend(apiKey)

  const safe = {
    nombre: escHtml(data.nombre),
    email: escHtml(data.email),
    telefono: escHtml(data.telefono),
    empresa: escHtml(data.empresa),
    asunto: escHtml(data.asunto),
    mensaje: escHtml(data.mensaje),
    primerNombre: escHtml(data.nombre.split(" ")[0]),
  }

  const contactEmail = process.env.CONTACT_EMAIL
  if (!contactEmail) {
    console.error("[contacto] CONTACT_EMAIL no configurada")
    return { ok: false, error: "Configuración de email faltante en el servidor." }
  }

  const { error } = await resend.emails.send({
    from: "attempo contacto <contacto@attempo.cl>",
    to: contactEmail,
    replyTo: safe.email,  // F-04: usar valor sanitizado
    subject: `[attempo] ${safe.asunto}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#f0ecff;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f0ecff">
<tr><td align="center" style="padding:32px 16px 40px">
<table width="500" cellpadding="0" cellspacing="0" style="max-width:500px;width:100%">

  <!-- Header morado -->
  <tr><td bgcolor="#6C5CE4" style="border-radius:16px 16px 0 0;padding:28px 24px 24px;text-align:center">
    <img src="https://attempo.cl/logo_attempo.png" alt="attempo" width="60" height="60" style="display:block;margin:0 auto 10px;border-radius:14px">
    <p style="margin:0;font-size:13px;color:#c4b5fd;font-family:Arial,sans-serif;font-weight:500">Todo a tu tiempo</p>
  </td></tr>

  <!-- Cuerpo blanco -->
  <tr><td bgcolor="#ffffff" style="padding:28px 32px 8px;text-align:center">
    <p style="margin:0 0 4px;font-size:22px;font-weight:700;color:#111827;font-family:Arial,sans-serif">Nuevo mensaje ✉️</p>
    <p style="margin:0;font-size:14px;color:#6b7280;font-family:Arial,sans-serif"><strong style="color:#374151">${safe.primerNombre}</strong> quiere conocer attempo</p>
  </td></tr>

  <!-- Card de datos -->
  <tr><td bgcolor="#ffffff" style="padding:20px 32px">
    <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f5f3ff" style="border-radius:12px;border:1px solid #ede9fe">
    <tr><td style="padding:20px 24px">

      <!-- Nombre -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Nombre</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#111827">${safe.nombre}</p>
      </td></tr>
      </table>

      <!-- Asunto -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Asunto</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#111827">${safe.asunto}</p>
      </td></tr>
      </table>

      <!-- Email -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:${data.telefono || data.empresa ? "16px" : "0"}">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Email</p>
        <p style="margin:0;font-size:15px"><a href="mailto:${safe.email}" style="color:#6C5CE4;font-weight:600;text-decoration:none">${safe.email}</a></p>
      </td></tr>
      </table>

      ${data.telefono ? `
      <!-- Teléfono -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:${data.empresa ? "16px" : "0"}">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Teléfono</p>
        <p style="margin:0;font-size:15px"><a href="https://wa.me/${escHtml(data.telefono.replace(/[^0-9]/g, ""))}" style="color:#6C5CE4;font-weight:600;text-decoration:none">${safe.telefono}</a></p>
      </td></tr>
      </table>` : ""}

      ${data.empresa ? `
      <!-- Empresa -->
      <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="text-align:center">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#8b7ff0;text-transform:uppercase;letter-spacing:1.5px">Empresa</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#111827">${safe.empresa}</p>
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
      <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap">${safe.mensaje}</p>
    </td></tr>
    </table>
  </td></tr>

  <!-- CTA -->
  <tr><td bgcolor="#ffffff" style="padding:0 32px 32px;text-align:center;border-radius:0 0 16px 16px">
    <a href="mailto:${safe.email}" style="display:inline-block;background-color:#6C5CE4;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:13px 36px;border-radius:10px;font-family:Arial,sans-serif">
      Responder a ${safe.primerNombre} →
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
    // F-03: No exponer detalles internos de Resend al cliente
    console.error("[contacto] Error Resend:", error)
    return { ok: false, error: "No pudimos enviar tu mensaje. Escríbenos directamente a contacto@attempo.cl" }
  }

  return { ok: true }
}
