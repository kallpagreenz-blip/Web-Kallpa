'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { NAV_LINKS } from '@/data/company.data'
import type { NavLink } from '@/types'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string): boolean =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const linkClasses = (href: string): string =>
    cn(
      'text-sm font-medium transition-all duration-300',
      isScrolled
        ? cn('text-brand-body hover:text-brand-green', isActive(href) && 'text-brand-green font-semibold')
        : cn('text-white/80 hover:text-white', isActive(href) && 'text-white font-semibold'),
    )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4',
      )}
    >
      <div className="container-brand flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div
            className={cn(
              'transition-all duration-300 rounded-xl px-2 py-1',
              !isScrolled && 'bg-white/95 shadow-sm shadow-black/20',
            )}
          >
            <Image
              src="/images/logo-kallpa.jpeg"
              alt="Kallpa Greenz"
              width={100}
              height={68}
              className="h-11 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link: NavLink) => (
            <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contacto"
            className={cn(
              'text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-300',
              isScrolled
                ? 'bg-brand-mid border-brand-mid text-white hover:bg-brand-green hover:border-brand-green'
                : 'border-white text-white hover:bg-white/10',
            )}
          >
            Contáctanos
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className={cn(
            'md:hidden p-2 rounded-md transition-all duration-300',
            isScrolled ? 'text-brand-dark' : 'text-white',
          )}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="bg-white shadow-lg px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'py-3 px-2 text-sm font-medium border-b border-brand-border last:border-0 text-brand-body hover:text-brand-green transition-colors',
                isActive(link.href) && 'text-brand-green font-semibold',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-3 bg-brand-mid text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-brand-green transition-colors"
          >
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  )
}
