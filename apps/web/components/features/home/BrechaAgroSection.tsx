'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { DollarSign, Droplets, Cpu, TrendingDown } from 'lucide-react'

// ── Types ────────────────────────────────────────────────

interface BrechaIndicador {
  id: string
  color: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  title: string
  value: string
  desc: string
}

// ── Data ─────────────────────────────────────────────────

const BRECHAS: readonly BrechaIndicador[] = [
  {
    id: 'financiamiento',
    color: '#F59E0B',
    icon: DollarSign,
    title: 'Financiamiento excluyente',
    value: '90.9%',
    desc: 'no solicitó ningún tipo de crédito.',
  },
  {
    id: 'agua',
    color: '#06B6D4',
    icon: Droplets,
    title: 'Baja eficiencia hídrica',
    value: '83.6%',
    desc: 'del área irrigada usa métodos de baja eficiencia.',
  },
  {
    id: 'tecnologia',
    color: '#8B5CF6',
    icon: Cpu,
    title: 'Brecha tecnológica',
    value: '93.4%',
    desc: 'no recibió ninguna capacitación técnica.',
  },
  {
    id: 'mercado',
    color: '#F43F5E',
    icon: TrendingDown,
    title: 'Inestabilidad de ingresos y mercado',
    value: '55.5%',
    desc: 'no accede a mercados más amplios.',
  },
] as const

// ── Component ─────────────────────────────────────────────

export default function BrechaAgroSection(): React.JSX.Element {
  return (
    <section className="bg-[#070f08]">

      {/* ── Upper area: full-bleed photo + text overlay ── */}
      <div
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: '80vh' }}
      >

        {/* Photo */}
        <Image
          src="/images/por-que-kallpa/foto-agricultor.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: '58% center' }}
          quality={92}
          sizes="100vw"
        />

        {/* ── Gradient layers ── */}

        {/* Primary: left zone — strong dark panel for text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              'linear-gradient(to right,',
              '  rgba(5,12,6,0.99)  0%,',
              '  rgba(5,12,6,0.97) 15%,',
              '  rgba(5,12,6,0.93) 28%,',
              '  rgba(5,12,6,0.78) 42%,',
              '  rgba(5,12,6,0.38) 60%,',
              '  rgba(5,12,6,0.08) 78%,',
              '  transparent       95%',
              ')',
            ].join(' '),
          }}
        />

        {/* Top blend (navbar) */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(5,12,6,0.55) 0%, transparent 100%)' }}
        />

        {/* Bottom blend into indicator strip */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-44 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(4,9,5,1) 0%, rgba(4,9,5,0.55) 55%, transparent 100%)' }}
        />

        {/* ── Narrative content ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 max-w-[490px]"
          >

            {/* Label */}
            <p className="flex items-center gap-2 text-brand-mid text-[10.5px] font-bold tracking-[0.28em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-mid shrink-0" />
              El Contexto
            </p>

            {/* Title — "Kallpa" in green, leaf inline after "existe" */}
            <h2
              className="font-bold text-white leading-[1.04] tracking-tight"
              style={{ fontSize: 'clamp(3rem, 5.8vw, 5rem)' }}
            >
              Por qué{' '}
              <span style={{ color: '#83c346' }}>Kallpa</span>
              <br />
              existe{' '}
              <span
                style={{
                  fontSize: '0.52em',
                  color: '#569b32',
                  display: 'inline-block',
                  verticalAlign: '12%',
                  lineHeight: 1,
                }}
              >
                🌿
              </span>
            </h2>

            {/* Body copy */}
            <p
              className="leading-[1.8]"
              style={{ fontSize: '0.975rem', color: 'rgba(255,255,255,0.80)', maxWidth: '400px' }}
            >
              El agro peruano no enfrenta una sola brecha.
              <br />
              Enfrenta cuatro, simultáneamente.
              <br />
              <span style={{ color: 'rgba(255,255,255,0.96)', fontWeight: 700 }}>
                Kallpa responde conectando inversión, tecnología,
                acompañamiento y mercado.
              </span>
            </p>

            {/* Quote */}
            <div className="flex flex-col gap-1 mt-1">
              <span
                aria-hidden="true"
                className="select-none leading-none"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '3.4rem',
                  color: '#569b32',
                  lineHeight: '0.85',
                  display: 'block',
                  marginBottom: '-6px',
                }}
              >
                "
              </span>
              <p
                className="italic leading-[1.65]"
                style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.78)' }}
              >
                No nos falta esfuerzo.
                <br />
                Nos falta un sistema que nos acompañe.
              </p>
              <p
                className="font-medium tracking-widest"
                style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.40)', marginTop: '4px' }}
              >
                — Productora de Ica
              </p>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ── Bottom: 4-indicator strip ─────────────────── */}
      <div
        className="border-t"
        style={{ backgroundColor: '#040905', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/[0.07]">
            {BRECHAS.map((b, i) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative flex flex-col gap-2 px-6 pt-7 pb-6"
                  style={{ borderBottom: `2px solid ${b.color}` }}
                >
                  {/* Icon + title */}
                  <div className="flex items-start gap-2.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${b.color}28` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: b.color }} />
                    </div>
                    <p
                      className="font-semibold leading-snug tracking-wide"
                      style={{ fontSize: '11px', color: 'rgba(255,255,255,0.58)' }}
                    >
                      {b.title}
                    </p>
                  </div>

                  {/* Percentage — dominant element */}
                  <p
                    className="font-bold leading-none"
                    style={{
                      fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                      color: b.color,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {b.value}
                  </p>

                  {/* Description */}
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.46)' }}
                  >
                    {b.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Source footnote */}
        <p
          className="text-center pb-5 pt-2 px-4"
          style={{ fontSize: '10px', color: 'rgba(255,255,255,0.22)' }}
        >
          Fuente: INEI — Pequeñas y Medianas Unidades Agropecuarias 2021–2022, julio 2023
        </p>
      </div>

    </section>
  )
}
