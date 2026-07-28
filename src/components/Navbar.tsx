"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { m, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const solucionesClusters = [
  {
    numero: "01",
    nombre: "Salud",
    items: [
      { label: "Psicólogos",   href: "/soluciones/psicologos" },
      { label: "Psiquiatras",  href: "/soluciones/psiquiatras" },
      { label: "Médicos",      href: "/soluciones/medicos" },
      { label: "Matronas",     href: "/soluciones/matronas" },
      { label: "Kinesiólogos",    href: "/soluciones/kinesiologos" },
      { label: "Dentistas",       href: "/soluciones/dentistas" },
      { label: "Centros Clínicos", href: "/soluciones/centros-clinicos" },
    ],
  },
  {
    numero: "02",
    nombre: "Bienestar y Estética",
    items: [
      { label: "Nutricionistas", href: "/soluciones/nutricionistas" },
      { label: "Yoga y Pilates", href: "/soluciones/yoga" },
      { label: "Estéticas",      href: "/soluciones/esteticas" },
      { label: "Peluquerías",    href: "/soluciones/belleza" },
      { label: "Barberías",      href: "/soluciones/barberias" },
    ],
  },
  {
    numero: "03",
    nombre: "Fitness y Deporte",
    items: [
      { label: "Entrenador personal", href: "/soluciones/personal-trainer" },
      { label: "Clases grupales",     href: "/soluciones/yoga" },
    ],
  },
  {
    numero: "04",
    nombre: "Consultoría y Legal",
    items: [
      { label: "Abogados",    href: "/soluciones/derecho" },
      { label: "Coach",       href: "/soluciones/coach" },
      { label: "Consultores", href: "/soluciones/consultor" },
    ],
  },
]

type NavLink =
  | { label: string; href: string; dropdown?: undefined; clusters?: undefined }
  | { label: string; href: string; dropdown: { label: string; href: string }[]; clusters?: undefined }
  | { label: string; href: string; clusters: typeof solucionesClusters; dropdown?: undefined }

const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Plataforma",
    href: "/plataforma",
    dropdown: [
      { label: "Visión general", href: "/plataforma" },
      { label: "Chatbot IA",     href: "/chatbot-ia" },
    ],
  },
  {
    label: "Soluciones",
    href: "/soluciones",
    clusters: solucionesClusters,
  },
  { label: "Precios", href: "/precios" },
  {
    label: "Recursos",
    href: "/blog",
    dropdown: [
      { label: "Blog y Artículos",  href: "/blog" },
      { label: "Preguntas Frecuentes", href: "/faq" },
      { label: "Centro de Ayuda",   href: "/centro-de-ayuda" },
    ],
  },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto",      href: "/contacto" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled]       = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/96 backdrop-blur-lg shadow-sm border-b border-gray-100/80"
          : "bg-white/40 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/logo_attempo.png" alt="attempo" width={36} height={36} className="rounded-xl" />
            <span className="font-bold text-xl text-gray-900">attempo</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown || link.clusters ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname.startsWith(link.href) && link.href !== "/"
                        ? "text-[#6C5CE4]"
                        : "text-gray-600 hover:text-[#6C5CE4]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <m.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                        style={{ width: link.clusters ? "480px" : "208px" }}
                      >
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                          {link.clusters ? (
                            /* ── Soluciones cluster dropdown ── */
                            <div className="p-4">
                              <div className="grid grid-cols-2 gap-4">
                                {link.clusters.map((cluster) => (
                                  <div key={cluster.numero}>
                                    <div className="flex items-baseline gap-2 mb-2 pb-1.5 border-b border-gray-100">
                                      <span className="text-lg font-black text-gray-200 leading-none tabular-nums">{cluster.numero}</span>
                                      <span className="text-xs font-bold text-gray-900">{cluster.nombre}</span>
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                      {cluster.items.map((item) => (
                                        <Link
                                          key={item.href}
                                          href={item.href}
                                          className="px-2 py-1.5 text-sm text-gray-500 hover:text-[#6C5CE4] hover:bg-purple-50 rounded-lg transition-colors"
                                        >
                                          {item.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 pt-3 border-t border-gray-100">
                                <Link
                                  href="/soluciones"
                                  className="text-xs font-semibold text-[#6C5CE4] hover:underline"
                                >
                                  Ver todas las soluciones →
                                </Link>
                              </div>
                            </div>
                          ) : (
                            /* ── Dropdown simple ── */
                            <div className="py-2">
                              {link.dropdown!.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-[#6C5CE4] hover:bg-purple-50 transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#6C5CE4]"
                      : "text-gray-600 hover:text-[#6C5CE4]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://app.attempo.cl/login.html"
              className="text-sm font-medium text-gray-600 hover:text-[#6C5CE4] transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="https://app.attempo.cl/registro"
              className="px-4 py-2 bg-[#6C5CE4] hover:bg-[#4F46E5] text-white rounded-lg text-sm font-medium transition-colors"
            >
              Empieza ahora
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#6C5CE4] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) =>
                link.dropdown || link.clusters ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-purple-50 hover:text-[#6C5CE4]"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <m.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-3 mt-1 overflow-hidden"
                        >
                          {link.clusters ? (
                            /* ── Soluciones clusters en mobile ── */
                            <div className="space-y-3 py-1">
                              {link.clusters.map((cluster) => (
                                <div key={cluster.numero}>
                                  <div className="flex items-baseline gap-2 px-3 mb-1">
                                    <span className="text-base font-black text-gray-200 leading-none">{cluster.numero}</span>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{cluster.nombre}</span>
                                  </div>
                                  {cluster.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-3 py-1.5 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-[#6C5CE4]"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                              <Link
                                href="/soluciones"
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm font-semibold text-[#6C5CE4] rounded-lg hover:bg-purple-50"
                              >
                                Ver todas →
                              </Link>
                            </div>
                          ) : (
                            /* ── Dropdown simple en mobile ── */
                            <div className="space-y-1 py-1">
                              <Link
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm font-semibold text-[#6C5CE4] rounded-lg hover:bg-purple-50"
                              >
                                Ver todo →
                              </Link>
                              {link.dropdown!.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-[#6C5CE4]"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-purple-50 hover:text-[#6C5CE4]"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <div className="pt-3 space-y-2 border-t border-gray-100">
                <Link
                  href="https://app.attempo.cl/login.html"
                  className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-purple-50 hover:text-[#6C5CE4]"
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="https://app.attempo.cl/registro"
                  className="block w-full text-center px-4 py-2.5 bg-[#6C5CE4] hover:bg-[#4F46E5] text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Empieza ahora
                </Link>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
