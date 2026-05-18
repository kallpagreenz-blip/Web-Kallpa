'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DollarSign,
  Settings,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Building2,
  Sprout,
  Globe,
} from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { cn } from '@/lib/cn'

// ── Types ────────────────────────────────────────────────

interface FlowNode {
  Icon: React.ComponentType<{ className?: string }>
  label: string
  sub: string
  highlight?: boolean
}

interface StatItem {
  value: string
  label: string
}

interface SolucionTab {
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
  ctaLabel?: string
  ctaHref?: string
  mainStat?: StatItem
  flow: FlowNode[]
  stats: StatItem[]
}

// ── Data ────────────────────────────────────────────────

const TABS: SolucionTab[] = [
  {
    id: 'financiamiento',
    number: '01',
    Icon: DollarSign,
    label: 'Acceso a Financiamiento',
    tagline: 'Del capital al campo.',
    title: 'Cerramos la brecha de acceso a capital con AgroCapital',
    description:
      'AgroCapital es la plataforma con la que conectamos inversores con agroproductores, estructurando oportunidades de financiamiento productivo para reducir barreras de entrada y acelerar proyectos agrícolas con mayor viabilidad y seguimiento.',
    bullets: [
      'Conexión directa entre inversores y agroproductores',
      'Financiamiento estructurado con lógica productiva',
      'Menor barrera de entrada al capital rural',
      'Trazabilidad y propósito en cada operación',
    ],
    result: 'Capital que genera capacidad productiva.',
    dataContext: 'El 90.9% de productores rurales no accedió a crédito en la última campaña.',
    accentColor: 'amber',
    ctaLabel: 'Ir a AgroCapital',
    ctaHref: 'https://agrocapital2.vercel.app/',
    flow: [
      { Icon: Building2, label: 'Inversores', sub: 'Capital productivo' },
      { Icon: DollarSign, label: 'AgroCapital', sub: 'Plataforma', highlight: true },
      { Icon: Sprout, label: 'Productores', sub: 'Financiados' },
    ],
    stats: [
      { value: '↓ Barrera', label: 'Menor capital inicial requerido' },
      { value: '100%', label: 'Trazabilidad financiera' },
      { value: 'Productiva', label: 'Lógica del financiamiento' },
      { value: 'Propósito', label: 'Agrícola y sostenible' },
    ],
  },
  {
    id: 'productivo',
    number: '02',
    Icon: Settings,
    label: 'Proceso Productivo',
    tagline: 'Inversión convertida en capacidad real.',
    title: 'Infraestructura, tecnología y acompañamiento técnico integrados',
    description:
      'No basta con acceder a capital. Ese capital debe convertirse en capacidad productiva real. Implementamos agricultura protegida, riego tecnificado, monitoreo digital y asistencia técnica continua para que el productor mejore, reduzca riesgos y produzca de forma más estable y competitiva.',
    bullets: [
      'Invernaderos y macrotúneles de alta eficiencia',
      'Riego tecnificado: hasta 90% de ahorro de agua',
      'Monitoreo digital y sensores del cultivo',
      'Capacitación técnica y acompañamiento continuo',
    ],
    result: 'Inversión convertida en capacidad productiva.',
    dataContext: 'El 93.4% sin capacitación y el 96.2% sin asistencia técnica disponible.',
    accentColor: 'green',
    mainStat: { value: '+300%', label: 'Incremento potencial en productividad' },
    flow: [
      { Icon: DollarSign, label: 'Capital', sub: 'Financiado' },
      { Icon: Settings, label: 'Kallpa', sub: 'Implementa', highlight: true },
      { Icon: Sprout, label: 'Producción', sub: 'Optimizada' },
    ],
    stats: [
      { value: '90%', label: 'Ahorro de agua con riego tecnificado' },
      { value: '12–14m', label: 'ROI de invernaderos instalados' },
      { value: 'Digital', label: 'Monitoreo en tiempo real' },
      { value: 'Continuo', label: 'Acompañamiento técnico' },
    ],
  },
  {
    id: 'comercial',
    number: '03',
    Icon: TrendingUp,
    label: 'Canales Comerciales',
    tagline: 'Producir mejor debe significar vender mejor.',
    title: 'Abrimos rutas para que la producción encuentre mercados de mayor valor',
    description:
      'Acompañamos al productor en la apertura de nuevos canales comerciales para que la mejora productiva se traduzca en ventas más sostenibles, relaciones comerciales más estables y mayor valor capturado. Reducimos intermediarios y conectamos con compradores de mayor valor.',
    bullets: [
      'Acceso a mercados regionales y de mayor valor',
      'Vínculos directos con compradores potenciales',
      'Reducción de la cadena de intermediarios',
      'Mejora sostenible del ingreso neto del productor',
    ],
    result: 'Producción convertida en ingreso sostenible.',
    dataContext: 'El 55.5% de productores no accede al mercado regional o exterior.',
    accentColor: 'blue',
    flow: [
      { Icon: Sprout, label: 'Productor', sub: 'Produce mejor' },
      { Icon: TrendingUp, label: 'Kallpa', sub: 'Conecta', highlight: true },
      { Icon: Globe, label: 'Mercados', sub: 'Mayor valor' },
    ],
    stats: [
      { value: 'Directo', label: 'Acceso sin intermediarios' },
      { value: '↑ Precio', label: 'Mercados de mayor valor' },
      { value: 'Estables', label: 'Relaciones comerciales' },
      { value: '+Ingreso', label: 'Retorno al productor' },
    ],
  },
]

// ── Accent utilities ────────────────────────────────────

const ACCENTS = {
  amber: {
    border: 'border-amber-400/40',
    bg: 'bg-amber-400/8',
    text: 'text-amber-300',
    badge: 'bg-amber-400/20 text-amber-300',
    tab: 'text-amber-300',
    highlight: 'bg-amber-400/20 border-amber-400/40',
    statValue: 'text-amber-300',
    cta: 'bg-amber-400 hover:bg-amber-300 text-brand-dark',
  },
  green: {
    border: 'border-brand-mid/40',
    bg: 'bg-brand-mid/8',
    text: 'text-brand-mid',
    badge: 'bg-brand-mid/20 text-brand-mid',
    tab: 'text-brand-mid',
    highlight: 'bg-brand-mid/20 border-brand-mid/40',
    statValue: 'text-brand-mid',
    cta: 'bg-brand-mid hover:bg-brand-green text-white',
  },
  blue: {
    border: 'border-blue-400/40',
    bg: 'bg-blue-400/8',
    text: 'text-blue-300',
    badge: 'bg-blue-400/20 text-blue-300',
    tab: 'text-blue-300',
    highlight: 'bg-blue-400/20 border-blue-400/40',
    statValue: 'text-blue-300',
    cta: 'bg-blue-500 hover:bg-blue-400 text-white',
  },
} as const

// ── Main Component ──────────────────────────────────────

export default function SolucionesKallpaSection(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState(0)
  const tab = TABS[activeTab]
  const TabIcon = tab.Icon
  const accent = ACCENTS[tab.accentColor]

  return (
    <section id="soluciones" className="bg-brand-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel className="text-brand-mid bg-brand-mid/20">
            Soluciones Kallpa
          </SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
            Cómo activamos la cadena de valor agrícola
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Kallpa interviene donde el agricultor más lo necesita: financiamiento,
            transformación productiva y conexión comercial.
          </p>
          <p className="mt-3 text-brand-mid text-sm font-semibold">
            Tres etapas. Un mismo objetivo: hacer crecer al productor.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-2 mb-8 bg-white/5 p-1.5 rounded-2xl border border-white/10">
          {TABS.map((t, i) => {
            const TIcon = t.Icon
            const isActive = i === activeTab
            const tAccent = ACCENTS[t.accentColor]
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(i)}
                className={cn(
                  'flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left',
                  isActive
                    ? 'bg-white/10 border border-white/20 shadow-sm'
                    : 'hover:bg-white/5 border border-transparent',
                )}
              >
                <span className={cn('text-xs font-bold shrink-0 tabular-nums', isActive ? tAccent.tab : 'text-white/30')}>
                  {t.number}
                </span>
                <TIcon className={cn('w-4 h-4 shrink-0', isActive ? tAccent.tab : 'text-white/30')} />
                <span className={cn('text-sm font-bold leading-tight', isActive ? 'text-white' : 'text-white/50')}>
                  {t.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className={cn('rounded-2xl border p-8 md:p-10 grid md:grid-cols-2 gap-10', accent.border, accent.bg)}
          >
            {/* Left: Text */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className={cn('text-xs font-bold px-3 py-1 rounded-full', accent.badge)}>
                  Etapa {tab.number}
                </span>
                <span className="text-white/40 text-sm italic">{tab.tagline}</span>
              </div>

              <div>
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center mb-3 border', accent.bg, accent.border)}>
                  <TabIcon className={cn('w-5 h-5', accent.text)} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{tab.title}</h3>
              </div>

              <p className="text-white/70 leading-relaxed text-sm md:text-base">{tab.description}</p>

              <ul className="space-y-2">
                {tab.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-white/80 text-sm">
                    <CheckCircle className={cn('w-4 h-4 mt-0.5 shrink-0', accent.text)} />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className={cn('rounded-xl px-4 py-3 border', accent.bg, accent.border)}>
                <p className={cn('font-bold text-sm', accent.text)}>{tab.result}</p>
              </div>

              {tab.ctaHref ? (
                <a
                  href={tab.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 self-start text-sm',
                    accent.cta,
                  )}
                >
                  {tab.ctaLabel}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <p className="text-[11px] text-amber-300/70 bg-amber-300/5 border border-amber-300/15 rounded-lg px-3 py-2 leading-relaxed">
                  ⚠ {tab.dataContext}
                </p>
              )}
            </div>

            {/* Right: Visual */}
            <div className="flex flex-col gap-4 justify-center">
              {/* Flow diagram */}
              <div className="flex items-center gap-2">
                {tab.flow.map((node, i) => {
                  const NodeIcon = node.Icon
                  return (
                    <div key={node.label} className="flex items-center gap-2 flex-1">
                      <div className={cn(
                        'flex-1 rounded-xl p-3 text-center border',
                        node.highlight ? accent.highlight : 'bg-white/5 border-white/10',
                      )}>
                        <NodeIcon className={cn('w-5 h-5 mx-auto mb-1.5', node.highlight ? accent.text : 'text-white/50')} />
                        <p className="text-xs font-bold text-white">{node.label}</p>
                        <p className="text-[11px] text-white/40">{node.sub}</p>
                      </div>
                      {i < tab.flow.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-white/25 shrink-0" />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Main stat (optional) */}
              {tab.mainStat !== undefined && (
                <div className={cn('rounded-xl p-4 text-center border', accent.bg, accent.border)}>
                  <p className={cn('text-4xl font-bold', accent.text)}>{tab.mainStat.value}</p>
                  <p className="text-white/60 text-sm mt-1">{tab.mainStat.label}</p>
                </div>
              )}

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {tab.stats.map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-lg px-3 py-2.5 border border-white/10">
                    <p className={cn('font-bold text-sm', accent.statValue)}>{stat.value}</p>
                    <p className="text-white/40 text-[11px] mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/35 text-sm italic">
            Donde otros ven etapas aisladas, Kallpa construye continuidad.
          </p>
          <p className="text-white font-bold text-xl mt-2">
            Del acceso al capital al acceso al mercado.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
