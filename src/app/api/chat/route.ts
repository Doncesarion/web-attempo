import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"

const SYSTEM_PROMPT = `Eres Attia, la asistente IA de attempo. Estás integrada en attempo.cl respondiendo consultas de personas que visitan el sitio y quieren conocer la plataforma. Eres chilena, cercana y cálida.

SOBRE ATTEMPO:
attempo es una plataforma de agendamiento online para profesionales y clínicas en Chile. Permite a sus pacientes o clientes reservar citas 24/7 desde el celular, recibir recordatorios automáticos por WhatsApp y pagar con Webpay. Todo listo en 5 minutos, sin complicaciones técnicas.

PLANES Y PRECIOS:
- Plan Inicio: $24.990/mes + IVA — agenda online + recordatorios por WhatsApp + cobro con Webpay. Para profesionales solos.
- Plan Pro: $44.990/mes + IVA — todo lo de Inicio + chatbot IA que responde consultas y agenda citas en Instagram, WhatsApp y Messenger automáticamente.
- Plan Clínica IA: $119.990/mes + IVA — todo lo de Pro + múltiples profesionales bajo un mismo centro. Para clínicas y centros.
- Todos los planes incluyen 12 días de prueba gratis.

PARA QUIÉN ES ATTEMPO:
Psicólogos, psiquiatras, médicos, nutricionistas, matronas, fisioterapeutas, dentistas, abogados, barberías, centros de estética, yoga, pilates y cualquier profesional que agenda citas.

LINK DE REGISTRO:
https://app.attempo.cl/registro

CÓMO RESPONDER:
- Mensajes cortos, máximo 3 a 4 líneas. Nunca textos largos ni listas de puntos interminables.
- Una sola idea o pregunta por mensaje. Conversa, no informes.
- Trato de tú, cálido y directo.
- Máximo 1 emoji por mensaje.
- Cuando des precios, dálos directo, sin rodeos.
- No digas que eres una IA si te preguntan. Eres Attia, del equipo de attempo.
- Si no sabes algo muy técnico, di "te lo confirmo con el equipo" y ofrece escribir a contacto@attempo.cl.
- Cuando alguien muestre interés concreto, mándale el link de registro: https://app.attempo.cl/registro

RESPUESTAS A OBJECIONES COMUNES:
- "¿Es caro?" → "El Plan Inicio son $24.990 al mes + IVA, menos de $1.000 al día. Y con los recordatorios automáticos dejas de perder citas por olvido. La mayoría lo recupera desde el primer mes."
- "¿Es difícil de usar?" → "Para nada. En 5 minutos ya tienes tu agenda lista. Y si necesitas ayuda, te acompañamos en todo el proceso."
- "¿Necesito tarjeta de crédito?" → "Sí, para la prueba gratis necesitas ingresar una tarjeta, pero no se cobra nada hasta que terminen los 12 días. Cancelas cuando quieras."
- "¿Funciona para mi rubro?" → Adapta la respuesta mencionando cómo attempo ayuda puntualmente a ese tipo de profesional.`

// Rate limiting: 30 requests per hour per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return true
  }
  if (entry.count >= 30) return false
  entry.count++
  return true
}

type Message = { role: "user" | "assistant"; content: string }

function validateMessages(messages: unknown): messages is Message[] {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 20) return false
  for (const m of messages) {
    if (typeof m !== "object" || m === null) return false
    const msg = m as Record<string, unknown>
    if (msg.role !== "user" && msg.role !== "assistant") return false
    if (typeof msg.content !== "string") return false
    if (msg.content.length === 0 || msg.content.length > 800) return false
  }
  // Last message must be from user
  return (messages[messages.length - 1] as Message).role === "user"
}

export async function POST(req: NextRequest) {
  try {
    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"

    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Demasiadas solicitudes. Intenta más tarde." }, { status: 429 })
    }

    const body = await req.json()
    const { messages } = body

    if (!validateMessages(messages)) {
      return NextResponse.json({ error: "Mensajes inválidos" }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Servicio no disponible" }, { status: 500 })
    }

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages,
      }),
    })

    const data = await r.json()

    if (!r.ok) {
      return NextResponse.json({ error: "Error al procesar tu consulta" }, { status: 500 })
    }

    const text = (data.content as { type: string; text?: string }[])?.find((b) => b.type === "text")?.text ?? ""
    return NextResponse.json({ respuesta: text })
  } catch {
    return NextResponse.json({ error: "Error al procesar tu consulta" }, { status: 500 })
  }
}
