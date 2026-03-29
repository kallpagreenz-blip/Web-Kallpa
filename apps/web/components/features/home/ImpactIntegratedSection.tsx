'use client'

import { motion } from 'framer-motion'
import { Sprout, Leaf, Users, TrendingUp, CheckCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { cn } from '@/lib/cn'

// ── Types ────────────────────────────────────────────────────────────────────

interface ImpactCard {
  id: string
  icon: React.ElementType
  title: string
  points: string[]
  stat: string
}

interface ChainStep {
  label: string
}

// ── Data ─────────────────────────────────────────────────────────────────────

const CHAIN_STEPS: ChainStep[] = [
  { label: 'Financiamiento' },
  { label: 'Implementación' },
  { label: 'Productividad' },
  { label: 'Resiliencia' },
  { label: 'Ingresos' },
  { label: 'Inclusión' },
]

const IMPACT_CARDS: ImpactCard[] = [
  {
    id: 'productivo',
    icon: Sprout,
    title: 'Impacto Productivo',
    points: [
      'Adopción de agricultura protegida e invernaderos',
      'Mejora de productividad y calidad del cultivo',
      'Reducción de costos de producción',
      'Transición de subsistencia a competitividad',
    ],
    stat: 'Hasta 90% menos uso de agua',
  },
  {
    id: 'ambiental',
    icon: Leaf,
    title: 'Impacto Ambiental',
    points: [
      'Reducción significativa en consumo hídrico',
      'Menor uso de agroquímicos y pesticidas',
      'Manejo regenerativo del suelo',
      'Menor huella de carbono por ciclo productivo',
    ],
    stat: '+7 ton CO₂ capturadas 2021–2024',
  },
  {
    id: 'social',
    icon: Users,
    title: 'Impacto Social y Económico',
    points: [
      'Inclusión activa de mujeres y jóvenes rurales',
      'Nuevas oportunidades de ingreso local',
      'Reducción de migración rural',
      'Fortalecimiento empresarial del agricultor',
    ],
    stat: '+100 profesionales y voluntarios movilizados',
  },
  {
    id: 'comercial',
    icon: TrendingUp,
    title: 'Impacto Comercial',
    points: [
      'Acceso a mercados de mayor valor agregado',
      'Reducción de dependencia de intermediarios',
      'Vínculos con compradores potenciales',
      'Generación de valor agregado en la cadena',
    ],
    stat: 'ROI proyectado: 12–14 meses',
  },
]

// ── Animation variants ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const chainVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const chainItemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FlowChain(): React.JSX.Element {
  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-2 mb-16 overflow-x-auto"
      variants={chainVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true as const }}
    >
      {CHAIN_STEPS.map((step, index) => (
        <motion.div
          key={step.label}
          className="flex items-center gap-2"
          variants={chainItemVariants}
        >
          <span className="bg-white/10 rounded-xl px-4 py-2 text-white text-sm font-bold text-center whitespace-nowrap">
            {step.label}
          </span>
          {index < CHAIN_STEPS.length - 1 && (
            <ChevronRight className="text-brand-accent/60 w-5 h-5 flex-shrink-0" />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

interface ImpactCardProps {
  card: ImpactCard
}

function ImpactCardItem({ card }: ImpactCardProps): React.JSX.Element {
  const Icon = card.icon

  return (
    <div
      className={cn(
        'bg-white/10 border border-white/20 rounded-2xl p-8',
        'hover:bg-white/15 transition-all duration-300',
      )}
    >
      <div className="bg-brand-accent/20 rounded-xl p-3 w-14 h-14 flex items-center justify-center">
        <Icon className="text-brand-accent w-7 h-7" />
      </div>

      <h3 className="text-white font-bold text-xl mt-4 mb-3">{card.title}</h3>

      <ul className="space-y-2">
        {card.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-white/70 text-sm">
            <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-xl p-3 mt-4 text-brand-accent text-sm font-bold">
        {card.stat}
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ImpactIntegratedSection(): React.JSX.Element {
  return (
    <section className="bg-brand-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel className="text-white/80 bg-white/10">
            Impacto que nace del modelo
          </SectionLabel>

          <h2 className="text-4xl font-bold text-white mt-4 mb-3">
            Cuando el modelo funciona, el impacto se vuelve visible.
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            No buscamos impacto como fin en sí mismo. Lo construimos como consecuencia de un
            modelo que funciona: financiamiento bien estructurado, implementación técnica
            rigurosa y conexión con mercados reales.
          </p>

          {/* Flow chain */}
          <FlowChain />
        </div>

        {/* Impact cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true as const }}
        >
          {IMPACT_CARDS.map((card) => (
            <motion.div key={card.id} variants={itemVariants}>
              <ImpactCardItem card={card} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/impacto"
            className="text-brand-accent hover:text-yellow-300 font-bold transition-colors duration-200"
          >
            Ver todos los indicadores de impacto →
          </Link>
        </div>
      </div>
    </section>
  )
}
