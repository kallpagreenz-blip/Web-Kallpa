'use client'

import { motion } from 'framer-motion'
import { Home, Droplets, Leaf, Monitor, FlaskConical } from 'lucide-react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { PRODUCTS } from '@/data/products.data'
import { cn } from '@/lib/cn'
import type { Product } from '@/types'

// ── Types ─────────────────────────────────────────────────

interface ProductFraming {
  Icon: React.ComponentType<{ className?: string }>
  reframeTag: string
  gradient: string
}

// ── Framing layer ─────────────────────────────────────────
// Repositions each product without touching data

const FRAMINGS: Record<string, ProductFraming> = {
  'cupula-verde': {
    Icon: Home,
    reframeTag: 'Demostrador estructural',
    gradient: 'bg-gradient-to-br from-brand-green/80 to-brand-mid/80',
  },
  'sistema-hidroponico': {
    Icon: Droplets,
    reframeTag: 'Innovación tecnológica',
    gradient: 'bg-gradient-to-br from-brand-mid/80 to-blue-700/80',
  },
  'lechuga-hidroponica': {
    Icon: Leaf,
    reframeTag: 'Capacidad productiva demostrada',
    gradient: 'bg-gradient-to-br from-brand-green/85 to-brand-light/80',
  },
  'software-ambiental': {
    Icon: Monitor,
    reframeTag: 'Herramienta transversal',
    gradient: 'bg-gradient-to-br from-brand-dark to-slate-700',
  },
  greenlab: {
    Icon: FlaskConical,
    reframeTag: 'Línea educativa',
    gradient: 'bg-gradient-to-br from-purple-900/90 to-brand-dark',
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
}

// ── Card ──────────────────────────────────────────────────

function PilotoCard({ product, index }: { product: Product; index: number }): React.JSX.Element {
  const framing = FRAMINGS[product.slug]
  const FramingIcon = framing.Icon

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="bg-white rounded-2xl border border-brand-border overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Colored header */}
      <div className={cn('px-5 py-4 flex items-center gap-3', framing.gradient)}>
        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
          <FramingIcon className="w-4 h-4 text-white" />
        </div>
        <span className="text-[11px] font-bold text-white/90 bg-white/15 px-2.5 py-1 rounded-full border border-white/20 leading-tight">
          {framing.reframeTag}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-brand-dark font-bold text-sm leading-snug">{product.name}</h3>
        <p className="text-brand-body text-xs leading-relaxed">{product.description}</p>
        <ul className="space-y-1 flex-1">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-brand-body text-xs">
              <span className="w-1 h-1 rounded-full bg-brand-mid shrink-0 mt-1.5" />
              <span className="line-clamp-2">{f}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/soluciones/${product.slug}`}
          className="text-brand-mid text-xs font-bold hover:text-brand-green transition-colors duration-200 self-start mt-1"
        >
          Ver más →
        </Link>
      </div>
    </motion.div>
  )
}

// ── Main Component ────────────────────────────────────────

export default function PilotosSection(): React.JSX.Element {
  return (
    <section className="bg-brand-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <SectionLabel>Pilotos y Capacidades Demostradas</SectionLabel>
          <h2 className="text-3xl font-bold text-brand-dark mt-4 mb-3">
            Activos de innovación que nacen del ecosistema Kallpa
          </h2>
          <p className="text-brand-body max-w-2xl text-base">
            Demostradores, innovaciones derivadas y líneas experimentales que evidencian
            la capacidad técnica y el alcance del sistema.
          </p>
          <p className="mt-2 text-brand-mid text-sm font-semibold italic">
            No son el centro de la propuesta. Son prueba de lo que el sistema puede activar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {PRODUCTS.map((product, i) => (
            <PilotoCard key={product.id} product={product} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
