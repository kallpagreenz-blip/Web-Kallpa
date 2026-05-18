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
    <section className="bg-[#0b1c0d]">

      {/* ── Upper: photo background + narrative text ──── */}
      <div className="relative flex items-center overflow-hidden" style={{ minHeight: '72vh' }}>

        {/* Background photo */}
        <Image
          src="/images/por-que-kallpa/foto-agricultor.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: '62% center' }}
          quality={90}
          sizes="100vw"
        />

        {/* Gradient: left (opaque) → right (transparent) — keeps text legible */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(11,28,13,0.97) 0%, rgba(11,28,13,0.93) 22%, rgba(11,28,13,0.72) 44%, rgba(11,28,13,0.22) 68%, rgba(11,28,13,0.04) 90%, transparent 100%)',
          }}
        />

        {/* Gradient: top fade (navbar blend) */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(11,28,13,0.55) 0%, transparent 100%)' }}
        />

        {/* Gradient: bottom into indicator strip */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(7,15,8,1) 0%, transparent 100%)' }}
        />

        {/* Narrative text block */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 max-w-[480px]"
          >
            {/* Label */}
            <p className="flex items-center gap-2 text-brand-mid text-[11px] font-bold tracking-[0.22em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-mid shrink-0" />
              El Contexto
            </p>

            {/* Title */}
            <h2
              className="font-bold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)' }}
            >
              Por qué{' '}
              <span className="text-brand-light">Kallpa</span>
              <br />
              existe{' '}
              <span className="text-brand-mid" style={{ fontSize: '0.6em' }}>🌿</span>
            </h2>

            {/* Body */}
            <p className="text-white/62 text-[0.98rem] leading-relaxed max-w-[400px]">
              El agro peruano no enfrenta una sola brecha.
              <br />
              Enfrenta cuatro, simultáneamente.
              <br />
              <span className="text-white font-semibold">
                Kallpa responde conectando inversión, tecnología,
                acompañamiento y mercado.
              </span>
            </p>

            {/* Quote */}
            <div className="mt-1 pl-0">
              <span
                className="text-brand-mid font-bold leading-none select-none"
                style={{ fontSize: '3.2rem', fontFamily: 'Georgia, serif', lineHeight: '1' }}
              >
                "
              </span>
              <p className="text-white/72 italic text-[0.93rem] leading-relaxed -mt-2">
                No nos falta esfuerzo.
                <br />
                Nos falta un sistema que nos acompañe.
              </p>
              <p className="text-white/38 text-xs mt-2 font-medium tracking-wider">
                — Productora de Ica
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom: 4 indicator strip ─────────────────── */}
      <div className="bg-[#070f08] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {BRECHAS.map((b, i) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative px-6 py-7 flex flex-col gap-2.5"
                  style={{ borderBottom: `2px solid ${b.color}` }}
                >
                  {/* Icon + title row */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${b.color}22` }}
                    >
                      <Icon className="w-3 h-3" style={{ color: b.color }} />
                    </div>
                    <p className="text-white/55 text-[11px] font-semibold leading-tight">
                      {b.title}
                    </p>
                  </div>

                  {/* Big percentage */}
                  <p
                    className="font-bold leading-none"
                    style={{
                      fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                      color: b.color,
                    }}
                  >
                    {b.value}
                  </p>

                  {/* Description */}
                  <p className="text-white/42 text-xs leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Source footnote */}
        <p className="text-center text-white/18 text-[10px] pb-5 pt-2">
          Fuente: INEI — Pequeñas y Medianas Unidades Agropecuarias 2021–2022, julio 2023
        </p>
      </div>
    </section>
  )
}
