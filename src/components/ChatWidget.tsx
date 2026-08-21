"use client"

import { useState, useEffect, useRef } from "react"
import { m, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Message {
  role: "user" | "assistant"
  content: string
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const GREETING: Message = {
  role: "assistant",
  content: "Hola, soy Attia, la asistente de attempo. ¿En qué te puedo ayudar?",
}

function AttiaAvatar({ size }: { size: number }) {
  return (
    <div
      className="relative rounded-full overflow-hidden flex-shrink-0 bg-[#6C5CE4]"
      style={{ width: size, height: size }}
    >
      <Image
        src="/attia-avatar-final.png"
        alt="Attia"
        fill
        className="object-cover"
        sizes={`${size}px`}
        priority
      />
    </div>
  )
}

export default function ChatWidget() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const sessionId = useRef<string>(typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2))

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 80)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: "user", content: text }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.map((m) => ({ role: m.role, content: m.content })), sessionId: sessionId.current }),
      })
      const data = await res.json()
      if (data.error) {
        setMessages((prev) => [...prev, { role: "assistant", content: "No pude procesar tu mensaje. ¿Lo intentamos de nuevo?" }])
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.respuesta || "¿Me repites tu pregunta?" }])
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Algo salió mal. ¿Me lo repites?" }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* ── Panel de chat ── */}
          <AnimatePresence>
            {open && (
              <m.div
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 12 }}
                transition={{ duration: 0.22, ease: EASE }}
                style={{ transformOrigin: "bottom right", maxHeight: "calc(100vh - 200px)" }}
                className="w-[320px] sm:w-[350px] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-gray-100 bg-white"
                aria-label="Chat con Attia"
              >
                {/* Header */}
                <div className="flex items-center gap-3 px-4 py-3 bg-[#6C5CE4] flex-shrink-0">
                  <div className="border-2 border-white/25 rounded-full">
                    <AttiaAvatar size={38} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm leading-tight">Attia</p>
                    <p className="text-white/65 text-xs leading-tight">Asistente IA de attempo</p>
                  </div>
                  <div className="flex items-center gap-1.5 mr-1">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-white/65 text-xs">En línea</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Cerrar chat"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mensajes */}
                <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#f7f6fe]">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      {msg.role === "assistant" && (
                        <div className="mb-0.5">
                          <AttiaAvatar size={26} />
                        </div>
                      )}
                      <div
                        className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                          msg.role === "user"
                            ? "bg-[#6C5CE4] text-white rounded-2xl rounded-br-sm"
                            : "bg-white text-gray-800 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {/* Indicador de escritura */}
                  {loading && (
                    <div className="flex items-end gap-2">
                      <AttiaAvatar size={26} />
                      <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}

                  <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 px-3 py-3 bg-white border-t border-gray-100 flex-shrink-0">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Escribe tu pregunta..."
                    className="flex-1 text-sm px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#6C5CE4] text-gray-800 placeholder-gray-400 transition-colors"
                  />
                  <button
                    onClick={send}
                    disabled={!input.trim() || loading}
                    aria-label="Enviar mensaje"
                    className="w-9 h-9 flex-shrink-0 bg-[#6C5CE4] hover:bg-[#4F46E5] disabled:opacity-40 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" style={{ transform: "rotate(90deg)" }}>
                      <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>

          {/* ── Botón flotante ── */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar chat con Attia" : "Chatear con Attia"}
            className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg shadow-[#6C5CE4]/40 hover:scale-105 active:scale-95 transition-transform bg-[#6C5CE4]"
          >
            <Image
              src="/attia-avatar-final.png"
              alt="Attia"
              fill
              className="object-cover"
              sizes="56px"
              priority
            />
            {!open && (
              <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            )}
          </button>
        </m.div>
      )}
    </AnimatePresence>
  )
}
