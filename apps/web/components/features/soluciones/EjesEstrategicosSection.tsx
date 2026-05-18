'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DollarSign,
  Settings,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  ChevronDown,
} from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { cn } from '@/lib/cn'

// ── Types ────────────────────────────────────────────────

interface EjeData {
  id: string
  number: string
  Icon: React.ComponentType<{ className?: string }>
  label: string
  tagline: string
  title: string
  description: string
  bullets: string[]
  result: string
  dataContext: string
  accentColor: 'amber' | 'green' | 'blue'
  statusLabel: string
  plataformaRef: string
  plataformaStatus: string
  ctaLabel?: string
  ctaHref?: string
}

// ── Data ─────────────────────────────────────────────────

const EJES: EjeData[] = [
  {
    id: 'financiamiento',
    number: '01',
    Icon: DollarSign,
    label: 'Acceso a Financiamiento',
    tagline: 'Del capital al campo.',
    title: 'Cerramos la brecha de acceso a capital productivo',
    description:
      'Kallpa reduce la barrera de entrada al crecimiento agrícola conectando capital con oportunidades productivas estructuradas. No es deuda sin lógica: es financiamiento con propósito, trazabilidad y acompañamiento real.',
    bullets: [
      'Conexión directa entre inversores y agroproductores',
      'Financiamiento estructurado con lógica productiva',
      'Menor fricción para activar proyectos agrícolas',
      'Capital orientado a productividad y retorno sostenible',
    ],
    result: 'Capital que genera capacidad productiva, no solo deuda.',
    dataContext:
      '90.9% de productores sin acceso a crédito · 98.7% sin seguro agropecuario.',
    accentColor: 'amber',
    statusLabel: 'Activo',
    plataformaRef: 'AgroCapital',
    plataformaStatus: 'Plataforma activa',
    ctaLabel: 'Ir a AgroCapital',
    ctaHref: 'https://agrocapital2.vercel.app/',
  },
  {
    id: 'productivo',
    number: '02',
    Icon: Settings,
    label: 'Acompañamiento Agroproductivo',
    tagline: 'La productividad mejora con acompañamiento continuo.',
    title: 'Convertimos financiamiento en capacidad productiva real',
    description:
      'No abandonamos al agricultor tras el capital. Implementamos agricultura protegida, riego tecnificado, monitoreo y asistencia técnica continua. Kallpa está construyendo una capa de seguimiento agroproductivo para gestionar implementación y evolución productiva de cada proyecto.',
    bullets: [
      'Agricultura protegida: invernaderos de alta eficiencia',
      'Riego tecnificado con hasta 90% de ahorro de agua',
      'Monitoreo digital y sensores del cultivo en tiempo real',
      'Capacitación técnica y acompañamiento continuo de campo',
    ],
    result: 'Inversión convertida en capacidad productiva real.',
    dataContext:
      '93.4% sin capacitación · 96.2% sin asistencia técnica · 16.4% con riego tecnificado.',
    accentColor: 'green',
    statusLabel: 'Activo',
    plataformaRef: 'Plataforma de Seguimiento Agroproductivo',
    plataformaStatus: 'En desarrollo',
  },
  {
    id: 'comercial',
    number: '03',
    Icon: TrendingUp,
    label: 'Apertura de Rutas Comerciales',
    tagline: 'Producir mejor debe significar vender mejor.',
    title: 'Conectamos producción tecnificada con mercados de mayor valor',
    description:
      'El objetivo no es solo producir mejor. Es que esa mejora se traduzca en ingreso real. Kallpa acompaña la apertura de canales comerciales más rentables, reduciendo intermediarios y conectando al productor con compradores de mayor valor. Estamos estructurando la capa comercial del sistema.',
    bullets: [
      'Acceso a mercados regionales y de mayor valor agregado',
      'Vínculos directos con compradores potenciales',
      'Reducción de dependencia de intermediarios',
      'Valorización del producto y mejora del ingreso neto',
    ],
    result: 'Producción convertida en ingreso sostenible.',
    dataContext:
      '55.5% sin acceso al mercado regional · 49.3% de productores en subsistencia crítica.',
    accentColor: 'blue',
    statusLabel: 'En desarrollo',
    plataformaRef: 'Plataforma Comercial',
    plataformaStatus: 'En estructuración',
  },
]

// ── Accent map ───────────────────────────────────────────

const ACCENTS = {
  amber: {
    text: 'text-amber-400',
    border: 'border-amber-400/30',
    bg: 'bg-amber-400/8',
    status: 'bg-amber-400/15 text-amber-300 border border-amber-400/30',
    result: 'bg-amber-400/10 border border-amber-400/20 text-amber-300',
    cta: 'bg-amber-400 text-brand-dark hover:bg-amber-300',
  },
  green: {
    text: 'text-brand-mid',
    border: 'border-brand-mid/30',
    bg: 'bg-brand-mid/8',
    status: 'bg-brand-mid/15 text-brand-mid border border-brand-mid/30',
    result: 'bg-brand-mid/10 border border-brand-mid/20 text-brand-mid',
    cta: 'bg-brand-mid text-white hover:bg-brand-green',
  },
  blue: {
    text: 'text-blue-400',
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/8',
    status: 'bg-blue-400/15 text-blue-300 border border-blue-400/30',
    result: 'bg-blue-400/10 border border-blue-400/20 text-blue-300',
    cta: 'bg-blue-500 text-white hover:bg-blue-400',
  },
} as const

// ── Sub-component ─────────────────────────────────────────

function EjeContent({ eje }: { eje: EjeData }): React.JSX.Element {
  const a = ACCENTS[eje.accentColor]
  const Icon = eje.Icon
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2 flex-wrap">
        <span className={cn('text-xs font-bold px-3 py-1 rounded-full', a.status)}>
          {eje.statusLabel}
        </span>
        <span className="text-white/40 text-sm italic">{eje.tagline}</span>
      </div>
      <div>
        <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center mb-3 border', a.bg, a.border)}>
          <Icon className={cn('w-5 h-5', a.text)} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">{eje.title}</h3>
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{eje.description}</p>
      <ul className="space-y-2">
        {eje.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-white/80 text-sm">
            <CheckCircle className={cn('w-4 h-4 mt-0.5 shrink-0', a.text)} />
            {b}
          </li>
        ))}
      </ul>
      <div className={cn('rounded-xl px-4 py-3', a.result)}>
        <p className="font-bold text-sm">{eje.result}</p>
      </div>
      <div className="flex items-center gap-2 text-xs text-white/40 flex-wrap">
        <span>Plataforma asociada:</span>
        <span className={cn('font-bold', a.text)}>{eje.plataformaRef}</span>
        <span>·</span>
        <span>{eje.plataformaStatus}</span>
      </div>
      {eje.ctaHref !== undefined && (
        <a
          href={eje.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 self-start text-sm',
            a.cta,
          )}
        >
          {eje.ctaLabel}
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
      <p className="text-[11px] text-amber-300/50 bg-amber-300/5 border border-amber-300/10 rounded-lg px-3 py-2 leading-relaxed">
        ⚠ {eje.dataContext}
      </p>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────

export default function EjesEstrategicosSection(): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeEje = EJES[activeIndex]
  const a = ACCENTS[activeEje.accentColor]

  return (
    <section className="bg-brand-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel className="text-brand-mid bg-brand-mid/20">
            Los tres ejes del sistema
          </SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
            Tres fallas estructurales. Un sistema integrado.
          </h2>
          <p className="text-white/60 max-w-2xl text-base">
            No ofrecemos piezas aisladas. Diseñamos continuidad en la cadena de valor agrícola:
            del acceso al capital a la salida al mercado.
          </p>
        </motion.div>

        {/* Desktop: vertical tabs */}
        <div className="hidden md:grid md:grid-cols-[260px_1fr] gap-5">
          <div className="flex flex-col gap-1.5">
            {EJES.map((eje, i) => {
              const EjeIcon = eje.Icon
              const isActive = i === activeIndex
              const ea = ACCENTS[eje.accentColor]
              return (
                <button
                  key={eje.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    'flex items-start gap-3 text-left px-4 py-4 rounded-xl border transition-all duration-200',
                    isActive ? 'bg-white/8 border-white/15' : 'border-transparent hover:bg-white/4',
                  )}
                >
                  <span className={cn('text-xs font-bold tabular-nums shrink-0 mt-0.5', isActive ? ea.text : 'text-white/25')}>
                    {eje.number}
                  </span>
                  <div>
                    <EjeIcon className={cn('w-4 h-4 mb-1', isActive ? ea.text : 'text-white/25')} />
                    <p className={cn('text-sm font-bold leading-tight', isActive ? 'text-white' : 'text-white/40')}>
                      {eje.label}
                    </p>
                  </div>
                </button>
              )
            })}
            <p className="mt-4 px-4 text-[11px] text-white/20 leading-relaxed italic">
              Donde otros ven etapas aisladas, Kallpa construye interoperabilidad.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
              className={cn('rounded-2xl border p-8', a.border, a.bg)}
            >
              <EjeContent eje={activeEje} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: accordion */}
        <div className="flex flex-col gap-3 md:hidden">
          {EJES.map((eje, i) => {
            const EjeIcon = eje.Icon
            const isOpen = i === activeIndex
            const ea = ACCENTS[eje.accentColor]
            return (
              <div key={eje.id} className={cn('rounded-2xl border overflow-hidden', ea.border)}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-3 px-5 py-4 text-left"
                >
                  <span className={cn('text-xs font-bold tabular-nums shrink-0', ea.text)}>{eje.number}</span>
                  <EjeIcon className={cn('w-4 h-4 shrink-0', ea.text)} />
                  <span className="text-sm font-bold text-white flex-1">{eje.label}</span>
                  <ChevronDown className={cn('w-4 h-4 text-white/40 transition-transform duration-200', isOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className={cn('px-5 pb-6', ea.bg)}>
                        <EjeContent eje={eje} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
