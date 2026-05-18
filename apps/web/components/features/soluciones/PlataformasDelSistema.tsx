'use client'

import { motion } from 'framer-motion'
import { DollarSign, Activity, Globe, Brain, ExternalLink } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { cn } from '@/lib/cn'

// ── Types ─────────────────────────────────────────────────

interface Plataforma {
  id: string
  Icon: React.ComponentType<{ className?: string }>
  eje: string
  name: string
  description: string
  status: string
  statusStyle: string
  dotColor: string
  accentText: string
  accentBorder: string
  accentBg: string
  ctaLabel?: string
  ctaHref?: string
}

// ── Data ──────────────────────────────────────────────────

const PLATAFORMAS: Plataforma[] = [
  {
    id: 'agrocapital',
    Icon: DollarSign,
    eje: 'Eje 01 · Acceso a Financiamiento',
    name: 'AgroCapital',
    description:
      'Plataforma mediante la cual Kallpa conecta inversores con proyectos agrícolas estructurados, facilitando oportunidades de financiamiento productivo para pequeños y medianos agroproductores con lógica, trazabilidad y propósito.',
    status: 'Activo',
    statusStyle: 'bg-emerald-400/15 text-emerald-400 border border-emerald-400/30',
    dotColor: 'bg-emerald-400',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-400/25',
    accentBg: 'bg-amber-400/5',
    ctaLabel: 'Ir a AgroCapital',
    ctaHref: 'https://agrocapital2.vercel.app/',
  },
  {
    id: 'seguimiento',
    Icon: Activity,
    eje: 'Eje 02 · Acompañamiento Agroproductivo',
    name: 'Plataforma de Seguimiento Agroproductivo',
    description:
      'Kallpa está construyendo la capa operativa que permitirá monitorear implementación, desempeño técnico y evolución productiva de cada proyecto. Trazabilidad y datos al servicio del productor y del inversor.',
    status: 'En desarrollo',
    statusStyle: 'bg-amber-400/15 text-amber-400 border border-amber-400/30',
    dotColor: 'bg-amber-400',
    accentText: 'text-brand-mid',
    accentBorder: 'border-brand-mid/25',
    accentBg: 'bg-brand-mid/5',
  },
  {
    id: 'comercial',
    Icon: Globe,
    eje: 'Eje 03 · Apertura de Rutas Comerciales',
    name: 'Plataforma Comercial',
    description:
      'Kallpa está estructurando la capa comercial que facilitará la conexión entre producción tecnificada y mercados de mayor valor, ayudando al productor a capturar más valor de su trabajo y reducir dependencia de intermediarios.',
    status: 'En estructuración',
    statusStyle: 'bg-blue-400/15 text-blue-400 border border-blue-400/30',
    dotColor: 'bg-blue-400',
    accentText: 'text-blue-400',
    accentBorder: 'border-blue-400/25',
    accentBg: 'bg-blue-400/5',
  },
  {
    id: 'inteligencia',
    Icon: Brain,
    eje: 'Capacidad transversal del ecosistema',
    name: 'Motor de Inteligencia para Inversión Agrícola',
    description:
      'Kallpa proyecta desarrollar un motor de inteligencia que analice condiciones climáticas, técnicas y comerciales para estimar qué cultivos tienen mayor potencial productivo y de rentabilidad en cada contexto. Una capacidad estratégica en construcción.',
    status: 'Roadmap',
    statusStyle: 'bg-purple-400/15 text-purple-400 border border-purple-400/30',
    dotColor: 'bg-purple-400',
    accentText: 'text-purple-400',
    accentBorder: 'border-purple-400/25',
    accentBg: 'bg-purple-400/5',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

// ── Main Component ────────────────────────────────────────

export default function PlataformasDelSistema(): React.JSX.Element {
  return (
    <section className="bg-[#0e1f10] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel className="text-brand-mid bg-brand-mid/20">
            Plataformas del Sistema Kallpa
          </SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
            Las plataformas que hacen posible el sistema
          </h2>
          <p className="text-white/55 max-w-2xl text-base">
            Módulos especializados e interconectados bajo el paraguas Kallpa. Cada uno resuelve
            una dimensión del sistema. Juntos, forman un ecosistema integrado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PLATAFORMAS.map((p, i) => {
            const PIcon = p.Icon
            return (
              <motion.div
                key={p.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className={cn(
                  'rounded-2xl border p-6 flex flex-col gap-4 hover:-translate-y-0.5 transition-transform duration-200',
                  p.accentBorder,
                  p.accentBg,
                )}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center border shrink-0',
                    p.accentBg, p.accentBorder,
                  )}>
                    <PIcon className={cn('w-5 h-5', p.accentText)} />
                  </div>
                  <span className={cn('text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shrink-0', p.statusStyle)}>
                    <span className={cn('w-1.5 h-1.5 rounded-full', p.dotColor)} />
                    {p.status}
                  </span>
                </div>

                {/* Name + eje */}
                <div>
                  <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-1">
                    {p.eje}
                  </p>
                  <h3 className="text-white font-bold text-lg leading-snug">{p.name}</h3>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed flex-1">{p.description}</p>

                {/* CTA */}
                {p.ctaHref !== undefined && (
                  <a
                    href={p.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-1.5 font-bold text-sm self-start transition-all duration-200 hover:opacity-75 hover:-translate-y-0.5',
                      p.accentText,
                    )}
                  >
                    {p.ctaLabel}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-white/20 text-sm italic"
        >
          El valor no está solo en cada módulo, sino en cómo se conectan entre sí.
        </motion.p>

      </div>
    </section>
  )
}
