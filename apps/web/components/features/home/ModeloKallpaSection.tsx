'use client'

import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Settings, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/cn'

// ── Types ───────────────────────────────────────────────

interface Step {
  number: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  bullets: string[]
  result: string
}

// ── Constants ───────────────────────────────────────────

const STEPS: Step[] = [
  {
    number: '01',
    icon: DollarSign,
    title: 'Acceso a Financiamiento',
    description:
      'Conectamos inversores internacionales con agroproductores locales a través de AgroCapital. Estructuramos financiamiento productivo con lógica, trazabilidad y propósito.',
    bullets: [
      'Conexión directa entre inversión y producción',
      'Planes de negocio con dirección y sostenibilidad',
      'Reducción de la brecha de acceso a capital rural',
    ],
    result: 'Capital que genera capacidad productiva',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Acompañamiento Agroproductivo',
    description:
      'No abandonamos al agricultor tras el financiamiento. Implementamos agricultura protegida, tecnología de riego, monitoreo digital y asistencia técnica continua.',
    bullets: [
      'Agricultura protegida con invernaderos de alta eficiencia',
      'Riego tecnificado y monitoreo digital del cultivo',
      'Capacitación técnica y fortalecimiento empresarial',
    ],
    result: 'Inversión convertida en capacidad productiva real',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Ruta Comercial',
    description:
      'El objetivo no es solo producir, sino vender mejor. Buscamos rutas comerciales, potenciales compradores y reducimos la dependencia de intermediarios.',
    bullets: [
      'Acceso a mercados de mayor valor agregado',
      'Vínculos directos con compradores potenciales',
      'Reducción de intermediarios y mejora de ingresos',
    ],
    result: 'Producción convertida en ingreso sostenible',
  },
]

// ── Sub-components ──────────────────────────────────────

interface StepCardProps {
  step: Step
  index: number
}

function StepCard({ step, index }: StepCardProps): React.JSX.Element {
  const Icon = step.icon

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-2xl p-8 border border-brand-border flex-1 flex flex-col gap-5"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-full bg-brand-mid/10 flex items-center justify-center">
          <Icon className="text-brand-mid w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-brand-mid tracking-widest">{step.number}</span>
      </div>

      {/* Title & Description */}
      <div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
        <p className="text-brand-body text-sm leading-relaxed">{step.description}</p>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-2 flex-1">
        {step.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-brand-body">
            <CheckCircle className="w-4 h-4 text-brand-mid mt-0.5 shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Mini result */}
      <div className="bg-brand-mid/10 rounded-xl p-3">
        <p className="text-brand-mid font-bold text-sm">{step.result}</p>
      </div>
    </motion.div>
  )
}

// ── Main Component ──────────────────────────────────────

export default function ModeloKallpaSection(): React.JSX.Element {
  return (
    <section id="modelo" className="bg-brand-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <SectionLabel className="inline-flex">
            Nuestro Modelo de Transformación
          </SectionLabel>
          <h2 className="text-4xl font-bold text-brand-dark mt-4 mb-4">
            Cómo funciona Kallpa
          </h2>
          <p className="text-brand-body max-w-2xl mx-auto">
            No solo instalamos infraestructura. Activamos toda la cadena de valor del agricultor:
            desde el acceso a capital hasta la conexión con mercados.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          {STEPS.map((step, index) => (
            <Fragment key={step.number}>
              <StepCard step={step} index={index} />
              {index < STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-brand-mid shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Bottom quote block */}
        <div className={cn('mt-12')}>
          <hr className="border-brand-border mb-12" />
          <div className="bg-brand-dark rounded-2xl p-8 text-center">
            <p className="text-white text-xl font-bold italic mb-6 max-w-3xl mx-auto">
              &ldquo;Kallpa une inversión, infraestructura y mercado para que la agricultura rural
              deje de sobrevivir y empiece a escalar.&rdquo;
            </p>
            <Button variant="accent" href="/contacto">
              Explorar cómo trabajamos juntos
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
