'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Droplets, TrendingUp, Sprout, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

// ── Background images + object-position per photo ────────

interface BgImage {
  src: string
  objectPosition: string
}

const BG_IMAGES: BgImage[] = [
  // Farmer from behind (right third) — shift right to keep him visible
  { src: '/images/inicio/foto-inicio-1.png', objectPosition: '72% center' },
  // Female farmer center-left
  { src: '/images/inicio/foto-inicio-2.png', objectPosition: '50% center' },
  // Family group, center frame
  { src: '/images/inicio/foto-inicio-3.png', objectPosition: '55% center' },
  // Inside greenhouse, woman right of center
  { src: '/images/inicio/foto-inicio-4.png', objectPosition: '65% center' },
  // Loading truck, group center
  { src: '/images/inicio/foto-inicio-5.png', objectPosition: '50% center' },
  // Team portrait in front of greenhouse
  { src: '/images/inicio/foto-inicio-6.png', objectPosition: '50% center' },
]

// ── Bottom metrics ────────────────────────────────────────

const HERO_METRICS = [
  { Icon: Droplets, valor: '90%', label: 'Ahorro de agua' },
  { Icon: TrendingUp, valor: 'ROI', label: '12–14 meses' },
  { Icon: Sprout, valor: '+4,000', label: 'plantas por ciclo' },
  { Icon: Users, valor: 'Acompañamiento', label: 'técnico continuo' },
] as const

// ── Framer Motion variants ────────────────────────────────

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

// ── Component ─────────────────────────────────────────────

export default function HeroSection(): React.JSX.Element {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % BG_IMAGES.length),
      6500,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#061208]">

      {/* ── Background images — crossfade ────────────────── */}
      {BG_IMAGES.map((img, i) => (
        <div
          key={img.src}
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.8s ease-in-out',
            zIndex: 0,
          }}
        >
          <Image
            src={img.src}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: img.objectPosition }}
            priority={i === 0}
            sizes="100vw"
            quality={90}
          />
        </div>
      ))}

      {/* ── Gradient overlays ────────────────────────────── */}

      {/* Primary: left (opaque) → right (transparent) for text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to right, rgba(6,18,8,0.93) 0%, rgba(6,18,8,0.83) 18%, rgba(6,18,8,0.58) 42%, rgba(6,18,8,0.18) 66%, transparent 88%)',
        }}
      />

      {/* Secondary: top fade (navbar contrast) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(6,18,8,0.65) 0%, transparent 100%)',
        }}
      />

      {/* Tertiary: bottom fade (metrics contrast) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'linear-gradient(to top, rgba(6,18,8,0.92) 0%, rgba(6,18,8,0.35) 52%, transparent 100%)',
        }}
      />

      {/* ── Content ──────────────────────────────────────── */}
      <div
        className="relative flex flex-col min-h-screen max-w-7xl mx-auto w-full px-6 lg:px-12"
        style={{ zIndex: 2 }}
      >
        {/* Main text — vertically centered */}
        <div className="flex-1 flex items-center pt-24 lg:pt-32 pb-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 max-w-xl"
          >
            {/* Label */}
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-2 text-brand-mid text-[11px] font-bold tracking-[0.2em] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-mid shrink-0 inline-block" />
              Empresa Social · Agrofranquicias · Perú
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-bold leading-[1.03] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6.2vw, 5rem)' }}
            >
              <span className="text-white">Transformamos<br />el campo en<br /></span>
              <span className="text-brand-accent">oportunidades<br />productivas<br /></span>
              <span className="text-white">sostenibles.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-white/60 text-base md:text-[1.05rem] leading-relaxed max-w-[440px]"
            >
              Conectamos inversión, tecnología y acompañamiento
              {' '}para que pequeños agricultores produzcan mejor,
              {' '}reduzcan riesgos y accedan a mercados de mayor valor.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <Button variant="accent" href="/agrofranquicias" size="lg">
                Ver Agrofranquicias →
              </Button>
              <Button variant="outline" href="/contacto" size="lg">
                Hablar con el equipo
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Metrics strip — pinned to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="pb-8 lg:pb-10"
        >
          <div className="border-t border-white/15 pt-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-5">
              {HERO_METRICS.map(({ Icon, valor, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-white/65" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm md:text-[0.95rem] leading-tight">
                      {valor}
                    </p>
                    <p className="text-white/45 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators — bottom center */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5"
        style={{ zIndex: 3 }}
      >
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Foto ${i + 1}`}
            onClick={() => setCurrent(i)}
            style={{
              height: '3px',
              width: i === current ? '1.5rem' : '0.45rem',
              borderRadius: '999px',
              backgroundColor: i === current ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.22)',
              transition: 'all 0.45s ease',
              cursor: 'pointer',
              border: 'none',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  )
}
