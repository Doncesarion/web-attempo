import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Producto: [
    { label: "Plataforma", href: "/plataforma" },
    { label: "Precios", href: "/precios" },
    { label: "Recordatorios", href: "/plataforma#recordatorios" },
    { label: "Paquete de sesiones", href: "/plataforma#paquetes" },
    { label: "Boleta de honorarios", href: "/plataforma#boleta" },
  ],
  Soluciones: [
    { label: "Psicólogos", href: "/soluciones/psicologos" },
    { label: "Médicos Generales", href: "/soluciones/medicos-generales" },
    { label: "Centros Clínicos", href: "/soluciones/centros-clinicos" },
    { label: "Barberías", href: "/soluciones/barberias" },
    { label: "Ver todas", href: "/soluciones" },
  ],
  Recursos: [
    { label: "Blog y Artículos", href: "/blog" },
    { label: "Preguntas Frecuentes", href: "/faq" },
    { label: "Centro de Ayuda", href: "/centro-de-ayuda" },
    { label: "Portal Pacientes", href: "/portal-pacientes" },
  ],
  Empresa: [
    { label: "Quiénes somos", href: "/quienes-somos" },
    { label: "Contacto", href: "/contacto" },
  ],
}

const socialLinks = [
  {
    href: "https://www.instagram.com/attempo.app/",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/people/Attempo/61561292586875/",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/company/attempo",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo_attempo.png" alt="Attempo" width={36} height={36} className="rounded-xl" />
              <span className="font-bold text-xl text-white">attempo</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Todo a tu tiempo. La plataforma de agendamiento para profesionales de la salud y servicios en Chile.
            </p>
            <p className="text-xs text-gray-600 mb-4">Pagos seguros con</p>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-[#003DA5] text-white text-xs font-bold px-2 py-1 rounded">WEBPAY</span>
              <span className="text-xs text-gray-500">Transbank</span>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#6C5CE4] transition-colors"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} attempo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos de uso
            </Link>
            <Link
              href="/portal-pacientes"
              className="hover:text-white transition-colors"
            >
              Portal Pacientes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
