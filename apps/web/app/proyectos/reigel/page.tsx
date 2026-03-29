'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Droplets, Zap, Sprout, Calendar, Wind, MapPin } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { PROJECTS } from '@/data/projects.data'
import type { Project, ProjectMetric, ProjectSpec } from '@/types'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6 },
}

const metricIconMap: Record<string, React.ElementType> = {
  Sprout,
  Droplets,
  Zap,
  TrendingUp,
  Calendar,
  Wind,
}

const reigel = PROJECTS.find((p: Project) => p.id === 'reigel')!

const numericMetrics: Record<string, { end: number; suffix?: string }> = {
  'Lechugas por ciclo (5 meses)':              { end: 4000 },
  'Ahorro de agua vs agricultura convencional': { end: 90, suffix: '%' },
}

const COMPARISON_ROWS = [
  { aspect: 'Agua utilizada',       traditional: '100%',          reigel: '10% (90% menos)' },
  { aspect: 'Pesticidas',           traditional: 'Sí',            reigel: 'No' },
  { aspect: 'Producción / ciclo',   traditional: 'Variable',      reigel: '4,000 plantas' },
  { aspect: 'ROI',                  traditional: 'Largo plazo',   reigel: '12–14 meses' },
  { aspect: 'Impacto CO₂',          traditional: 'Emisor',        reigel: '−3.2 ton/año' },
]

export default function ReigelPage(): React.JSX.Element {
  const roiMetric = reigel.metrics.find((m) => m.label === 'ROI proyectado')

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2a1a0a] to-brand-dark min-h-[60vh] py-32 px-6 flex items-center">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center space-y-6">
          <SectionLabel className="bg-white/20 text-white">
            Agroindustria Inteligente
          </SectionLabel>
          <h1 className="text-5xl font-bold text-white">REIGEL</h1>
          <p className="text-white/80 italic text-xl">{reigel.tagline}</p>
          <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm px-4 py-1.5 rounded-full">
            <MapPin size={14} /> Caraz, Áncash, Perú
          </span>
        </motion.div>
      </section>

      {/* The Case */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div {...fadeUp} className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-brand-mid/10 flex items-center justify-center mb-2">
              <TrendingUp className="text-brand-mid" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-brand-dark">El Desafío</h2>
            <p className="text-brand-body leading-relaxed">
              La agricultura tradicional en los Andes enfrenta alta ineficiencia
              hídrica, dependencia de agroquímicos y márgenes bajos. Los
              agricultores necesitan una alternativa que sea rentable, trazable y
              sostenible.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-4 md:border-l md:border-brand-border md:pl-10">
            <div className="flex gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-brand-mid/10 flex items-center justify-center">
                <Droplets className="text-brand-mid" size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-mid/10 flex items-center justify-center">
                <Zap className="text-brand-mid" size={20} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-brand-mid">La Solución REIGEL</h2>
            <p className="text-brand-body leading-relaxed">
              Infraestructura hidropónica inteligente con automatización y
              sensores IoT que optimiza cada recurso: 90% menos agua, cero
              pesticidas, monitoreo en tiempo real y retorno de inversión
              demostrado en menos de 14 meses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-brand-bg py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <SectionLabel>Resultados</SectionLabel>
            <h2 className="text-3xl font-bold text-brand-dark mt-4">
              Métricas Clave
            </h2>
          </motion.div>
          {/* Featured ROI metric */}
          {roiMetric && (
            <motion.div
              {...fadeUp}
              className="bg-brand-accent rounded-2xl p-8 text-center mb-6 max-w-sm mx-auto"
            >
              <p className="text-brand-dark font-black text-5xl">{roiMetric.value}</p>
              <p className="text-brand-dark font-bold mt-2">{roiMetric.label}</p>
            </motion.div>
          )}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {reigel.metrics
              .filter((m) => m.label !== 'ROI proyectado')
              .map((m: ProjectMetric) => {
                const Icon = metricIconMap[m.icon] ?? Sprout
                const numeric = numericMetrics[m.label]
                return (
                  <motion.div
                    key={m.label}
                    {...fadeUp}
                    className="bg-white rounded-2xl border border-brand-border p-6 text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-mid/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="text-brand-mid" size={20} />
                    </div>
                    <p className="text-brand-mid font-bold text-4xl">
                      {numeric ? (
                        <AnimatedCounter
                          end={numeric.end}
                          suffix={numeric.suffix}
                        />
                      ) : (
                        m.value
                      )}
                    </p>
                    <p className="text-brand-body text-sm mt-1">{m.label}</p>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-dark">
              Agricultura Tradicional vs REIGEL
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-brand-dark font-bold">Aspecto</th>
                  <th className="py-3 px-4 text-gray-500 font-bold text-center bg-gray-50 rounded-tl-lg">
                    Tradicional
                  </th>
                  <th className="py-3 px-4 text-brand-mid font-bold text-center bg-brand-mid/10 rounded-tr-lg">
                    REIGEL
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={i % 2 === 0 ? 'bg-brand-bg/40' : 'bg-white'}
                  >
                    <td className="py-3 px-4 font-medium text-brand-dark">{row.aspect}</td>
                    <td className="py-3 px-4 text-center text-gray-500 bg-gray-50/60">
                      {row.traditional}
                    </td>
                    <td className="py-3 px-4 text-center text-brand-mid font-semibold bg-brand-mid/5">
                      {row.reigel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-brand-bg py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">
              Especificaciones Técnicas
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {reigel.specs.map((spec: ProjectSpec) => (
                <div
                  key={spec.label}
                  className="flex items-start gap-3 bg-white border border-brand-border rounded-xl p-4"
                >
                  <div className="flex-1">
                    <p className="text-xs text-brand-body uppercase tracking-wide font-semibold">
                      {spec.label}
                    </p>
                    <p className="text-brand-dark font-bold mt-0.5">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16 px-6 text-center text-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">
            ¿Tu empresa agrícola está lista para modernizarse?
          </h2>
          <p className="text-white/70">
            Diseñamos e implementamos sistemas hidropónicos inteligentes
            adaptados a tu terreno, volumen y objetivos de producción.
          </p>
          <Button
            variant="accent"
            size="lg"
            href="/contacto?tipo=proyecto&ref=reigel"
          >
            Solicitar propuesta para proyecto agrícola
          </Button>
        </motion.div>
      </section>
    </main>
  )
}
