'use client'

import { motion } from 'framer-motion'
import { DollarSign, Droplets, Cpu, TrendingDown } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

// ── Types ───────────────────────────────────────────────

interface BrechaStat {
  value: string
  label: string
  pct: number
}

interface BrechaItem {
  id: string
  accentColor: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  title: string
  stats: readonly BrechaStat[]
  microcopy: string
}

// ── Data ────────────────────────────────────────────────

const BRECHAS: readonly BrechaItem[] = [
  {
    id: 'financiamiento',
    accentColor: '#F59E0B',
    icon: DollarSign,
    title: 'Financiamiento excluyente',
    stats: [
      { value: '90.9%', label: 'no solicitó ningún tipo de crédito', pct: 91 },
      { value: '98.7%', label: 'sin seguro agropecuario de ningún tipo', pct: 99 },
    ],
    microcopy: 'La exclusión financiera en el agro no es marginal. Es estructural.',
  },
  {
    id: 'agua',
    accentColor: '#06B6D4',
    icon: Droplets,
    title: 'Baja eficiencia hídrica',
    stats: [
      { value: '83.6%', label: 'del área irrigada usa métodos de baja eficiencia', pct: 84 },
      { value: '52.9%', label: 'de unidades opera bajo secano, sin riego', pct: 53 },
    ],
    microcopy: 'Gran parte de la producción sigue dependiendo de esquemas hídricos vulnerables.',
  },
  {
    id: 'tecnologia',
    accentColor: '#8B5CF6',
    icon: Cpu,
    title: 'Brecha tecnológica',
    stats: [
      { value: '93.4%', label: 'no recibió ninguna capacitación técnica', pct: 93 },
      { value: '96.2%', label: 'no recibió asistencia técnica en el año', pct: 96 },
    ],
    microcopy: 'La falta de acompañamiento técnico sigue frenando la modernización del productor.',
  },
  {
    id: 'mercado',
    accentColor: '#F43F5E',
    icon: TrendingDown,
    title: 'Inestabilidad de ingresos y mercado',
    stats: [
      { value: '55.5%', label: 'no accede al mercado regional ni exterior', pct: 56 },
      { value: '49.3%', label: 'está en subsistencia crítica', pct: 49 },
    ],
    microcopy: 'El problema no es solo producir. Es producir con estabilidad, escala y salida comercial.',
  },
] as const

// ── Sub-components ──────────────────────────────────────

function StatBar({ pct, color }: { pct: number; color: string }): React.JSX.Element {
  return (
    <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true as const }}
        transition={{ duration: 1.3, ease: 'easeOut', delay: 0.3 }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

function BrechaCard({ item, index }: { item: BrechaItem; index: number }): React.JSX.Element {
  const Icon = item.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true as const }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/[0.04] rounded-2xl p-6 flex flex-col gap-5 hover:bg-white/[0.07] transition-colors"
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,0.08)',
        borderLeftColor: item.accentColor,
        borderLeftWidth: '3px',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${item.accentColor}18` }}
        >
          <Icon className="w-5 h-5" style={{ color: item.accentColor }} />
        </div>
        <h3 className="text-white font-bold text-base leading-snug">{item.title}</h3>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-4">
        {item.stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-2xl font-bold leading-none" style={{ color: item.accentColor }}>
                {stat.value}
              </span>
              <span className="text-white/55 text-xs leading-snug">{stat.label}</span>
            </div>
            <StatBar pct={stat.pct} color={item.accentColor} />
          </div>
        ))}
      </div>

      {/* Microcopy */}
      <p className="text-white/40 text-xs leading-relaxed italic border-t border-white/10 pt-4">
        {item.microcopy}
      </p>
    </motion.div>
  )
}

// ── Main Component ──────────────────────────────────────

export default function BrechaAgroSection(): React.JSX.Element {
  return (
    <section className="bg-[#0b1c0d] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel className="bg-white/10 text-white/70">
            El contexto
          </SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Por qué Kallpa existe
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
            El agro peruano no enfrenta una sola brecha. Enfrenta cuatro, simultáneamente.
            Kallpa responde con precisión a cada una de ellas.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {BRECHAS.map((item, index) => (
            <BrechaCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Kallpa response bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
        >
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl mx-auto">
            <span className="text-white font-semibold">Kallpa responde a brechas medibles con soluciones implementables.</span>
            {' '}Financiamiento sin acompañamiento no escala. Tecnología sin mercado no transforma.
            El modelo Kallpa conecta los tres.
          </p>
        </motion.div>

        {/* Source */}
        <p className="text-center text-white/25 text-xs mt-8">
          Fuente: INEI — Pequeñas y Medianas Unidades Agropecuarias 2021–2022, julio 2023
        </p>
      </div>
    </section>
  )
}
