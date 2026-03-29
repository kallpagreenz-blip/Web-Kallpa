'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical, Wind, Droplets, Leaf, Zap, TreePine } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { PROJECTS } from '@/data/projects.data'
import type { Project, ProjectMetric } from '@/types'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6 },
}

const metricIconMap: Record<string, React.ElementType> = {
  Wind,
  FlaskConical,
  TreePine,
  Zap,
  Droplets,
}

const naos = PROJECTS.find((p: Project) => p.id === 'naos')!

const FLOW_STEPS = [
  { label: 'CO₂ entrada', icon: Wind, color: 'bg-gray-200 text-gray-700' },
  { label: 'Microalgas', icon: FlaskConical, color: 'bg-[#1a4a6e]/20 text-[#1a4a6e]' },
  { label: 'Aire purificado', icon: Droplets, color: 'bg-brand-mid/20 text-brand-mid' },
  { label: 'Biomasa', icon: Leaf, color: 'bg-brand-light/30 text-brand-green' },
  { label: 'Biofertilizante', icon: Zap, color: 'bg-brand-accent/50 text-brand-dark' },
  { label: 'Cultivos', icon: TreePine, color: 'bg-brand-green/20 text-brand-green' },
]

const SCIENCE_STEPS = [
  { icon: Wind, title: 'Captura CO₂ del ambiente', desc: 'El sistema absorbe dióxido de carbono del entorno inmediato.' },
  { icon: FlaskConical, title: 'Microalgas fotosintéticas', desc: 'Las microalgas procesan el CO₂ usando luz y producen oxígeno.' },
  { icon: Droplets, title: 'Purificación del aire interior', desc: 'El aire retorna limpio al espacio, mejorando la calidad ambiental.' },
  { icon: Leaf, title: 'Biomasa → biofertilizante', desc: 'La biomasa generada se convierte en biofertilizante líquido natural.' },
]

const numericMetrics: Record<string, { end: number; suffix?: string }> = {
  'Biomasa convertida a biofertilizante': { end: 100, suffix: '%' },
  'Reutilización interna de agua':        { end: 85,  suffix: '%' },
}

export default function NaosPage(): React.JSX.Element {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a2a4a] to-[#1a3a1a] min-h-[60vh] py-32 px-6 flex items-center">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center space-y-6">
          <SectionLabel className="bg-white/20 text-white">
            Biotecnología Verde
          </SectionLabel>
          <h1 className="text-5xl font-bold text-white">NAOS</h1>
          <p className="text-white/70 italic text-xl">{naos.tagline}</p>
          <span className="inline-flex items-center gap-2 bg-[#2d7aad]/40 text-white text-sm font-bold px-5 py-2 rounded-full border border-white/20">
            En Desarrollo · MVP Activo
          </span>
        </motion.div>
      </section>

      {/* What is NAOS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div {...fadeUp} className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-brand-dark">¿Qué es NAOS?</h2>
            <p className="text-brand-body text-lg leading-relaxed max-w-3xl mx-auto">
              NAOS es un fotobiorreactor compacto con microalgas que cierra el
              ciclo entre el aire contaminado y el suelo fértil. Captura CO₂,
              purifica el aire interior y convierte la biomasa resultante en
              biofertilizante líquido de alto rendimiento.
            </p>
          </motion.div>
          {/* Flow diagram */}
          <motion.div
            {...fadeUp}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {FLOW_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.label} className="flex items-center gap-2">
                  <div className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl ${step.color} min-w-[80px] text-center`}>
                    <Icon size={20} />
                    <span className="text-xs font-semibold leading-tight">{step.label}</span>
                  </div>
                  {i < FLOW_STEPS.length - 1 && (
                    <ArrowRight size={16} className="text-brand-border flex-shrink-0" />
                  )}
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-brand-dark py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <SectionLabel className="bg-white/10 text-white">
              Datos técnicos
            </SectionLabel>
            <h2 className="text-3xl font-bold text-white mt-4">
              Rendimiento por Unidad
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {naos.metrics.map((m: ProjectMetric) => {
              const Icon = metricIconMap[m.icon] ?? Leaf
              const numeric = numericMetrics[m.label]
              return (
                <motion.div
                  key={m.label}
                  {...fadeUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-brand-accent" size={20} />
                  </div>
                  <p className="text-brand-accent font-bold text-3xl">
                    {numeric ? (
                      <AnimatedCounter
                        end={numeric.end}
                        suffix={numeric.suffix}
                      />
                    ) : (
                      m.value
                    )}
                  </p>
                  <p className="text-white/70 text-sm mt-1">{m.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Science section */}
      <section className="bg-brand-bg py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">
              Cómo funciona el fotobiorreactor
            </h2>
            <div className="space-y-5">
              {SCIENCE_STEPS.map((step, i) => {
                return (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-mid text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">{step.title}</p>
                      <p className="text-brand-body text-sm mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-dark">El ciclo regenerativo</h2>
            <div className="grid grid-cols-2 gap-3">
              {SCIENCE_STEPS.map((step) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className="bg-white border border-brand-border rounded-xl p-4 flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-mid/10 flex items-center justify-center">
                      <Icon className="text-brand-mid" size={20} />
                    </div>
                    <p className="text-xs font-semibold text-brand-dark leading-tight">
                      {step.title}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Status */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div {...fadeUp} className="space-y-5">
            <span className="inline-flex items-center gap-2 bg-[#2d7aad]/10 text-[#1a4a6e] text-sm font-bold px-5 py-2 rounded-full border border-[#2d7aad]/20">
              Estado Actual: MVP en pruebas preliminares
            </span>
            <h2 className="text-2xl font-bold text-brand-dark">
              Buscamos aliados para escalar NAOS
            </h2>
            <p className="text-brand-body leading-relaxed">
              NAOS está en fase de MVP y pruebas preliminares. Buscamos aliados
              científicos, institucionales y de inversión para escalar esta
              biotecnología verde al siguiente nivel.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="/contacto?tipo=proyecto&ref=naos"
              >
                Quiero ser aliado de NAOS
              </Button>
              <Button variant="ghost" size="lg" href="/proyectos">
                Ver todos los proyectos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
