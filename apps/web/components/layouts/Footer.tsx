import Link from 'next/link'
import { Leaf, Instagram, Linkedin, Youtube, Phone, Mail, Clock } from 'lucide-react'
import { CONTACT_INFO } from '@/data/company.data'

const NAV_FOOTER_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Impacto', href: '/impacto' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Quiénes Somos', href: '/nosotros' },
] as const

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
] as const

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main content */}
      <div className="container-brand section-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Logo + tagline + socials */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Leaf className="w-6 h-6 text-brand-light" />
              <span className="font-bold text-xl tracking-wide text-white">KALLPA GREENZ</span>
            </Link>

            <p className="text-brand-light/60 text-sm leading-relaxed max-w-[260px]">
              Tecnología verde que enseña, produce y regenera.
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-brand-accent hover:border-brand-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5 p-0 m-0">
              {NAV_FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-brand-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3 p-0 m-0">
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3 text-sm text-white/70">
                  <Phone className="w-4 h-4 text-brand-light/60 shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-brand-accent transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-brand-light/60 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-accent transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock className="w-4 h-4 text-brand-light/60 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span>Lun–Vie 9:00–20:00</span>
                  <span>Sáb 9:00–15:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="border-t border-white/10">
        <div className="container-brand py-5 flex items-center justify-between flex-wrap gap-2">
          <p className="text-xs text-white/40">
            © 2024 Kallpa Greenz Leaders SA. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Decorative giant text */}
      <div className="overflow-hidden leading-none select-none pointer-events-none" aria-hidden="true">
        <p className="text-[120px] font-bold text-white opacity-5 px-6 -mb-6">
          KALLPA
        </p>
      </div>
    </footer>
  )
}
