'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Building2, BookOpen, GraduationCap, Droplets, Wind } from 'lucide-react'
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
  Users,
  Building2,
  BookOpen,
  GraduationCap,
  Droplets,
  Wind,
}

const numericMetrics: Record<string, { end: number; prefix?: string; suffix?: string }> = {
  'Niños beneficiados':             { end: 2600, prefix: '+' },
  'Escuelas y espacios públicos':   { end: 10,   prefix: '+' },
  'Talleres realizados':            { end: 25,   prefix: '+' },
  'Docentes formados':              { end: 20,   prefix: '+' },
  'Ahorro de agua':                 { end: 90,   suffix: '%' },
}

const domos = PROJECTS.find((p: Project) => p.id === 'domos')!

const DOMOS_TIMELINE = [
  { year: '2021', title: 'Inicio del proyecto', desc: 'Primeras cúpulas en Santa Anita y Comas, construidas con voluntariado y cero financiamiento.' },
  { year: '2021', title: 'LG Ambassador Challenge', desc: 'Reconocimiento internacional a nuestra propuesta de tecnología verde educativa.' },
  { year: '2024', title: 'Patrocinio Embajada EE.UU.', desc: 'La Embajada de Estados Unidos en Perú valida y patrocina el modelo Kallpa 2024–2025.' },
  { year: '2024', title: 'Biodomo Shuji Kitamura', desc: 'Primer biodomo tecnológico en la I.E. Shuji Kitamura 101: tecnología verde en escuela pública.' },
  { year: 'Hoy', title: 'Expansión nacional', desc: '5 regiones activas, más de 2,600 niños beneficiados y creciendo.' },
]

export default function DomosPage(): React.JSX.Element {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green to-brand-dark min-h-[60vh] py-32 px-6 flex items-center">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center space-y-6">
          <SectionLabel className="bg-white/20 text-white">
            Caso de Estudio
          </SectionLabel>
          <h1 className="text-5xl font-bold text-white">Domos para Educar</h1>
          <p className="text-white/80 italic text-xl">{domos.tagline}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="inline-flex items-center gap-1.5 bg-brand-accent text-brand-dark text-sm font-bold px-4 py-1.5 rounded-full capitalize">
              {domos.status}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm px-4 py-1.5 rounded-full">
              <MapPin size={14} /> {domos.location}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm px-4 py-1.5 rounded-full">
              <Calendar size={14} /> Desde {domos.year}
            </span>
          </div>
        </motion.div>
      </section>

      {/* Problem → Solution */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div {...fadeUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-dark">El Problema</h2>
            <p className="text-brand-body leading-relaxed">
              Comunidades educativas vulnerables del Perú carecen de
              infraestructura para aprendizaje práctico de ciencias. Las clases
              de biología, química y sostenibilidad se quedan en pizarras y
              libros.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-4 md:border-l md:border-brand-border md:pl-10">
            <h2 className="text-2xl font-bold text-brand-mid">La Solución Kallpa</h2>
            <p className="text-brand-body leading-relaxed">
              Cúpulas verdes con hidroponía, sensores y automatización que
              convierten cualquier espacio en un laboratorio STEAM activo. La
              tecnología llega al aula que más la necesita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-brand-bg py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <SectionLabel>Datos reales</SectionLabel>
            <h2 className="text-3xl font-bold text-brand-dark mt-4">Impacto Real</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {domos.metrics.map((m: ProjectMetric) => {
              const Icon = metricIconMap[m.icon] ?? Users
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
                        prefix={numeric.prefix}
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

      {/* Timeline */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-dark">Evolución del Proyecto</h2>
          </motion.div>
          <div className="space-y-6">
            {DOMOS_TIMELINE.map((step) => (
              <motion.div key={step.title} {...fadeUp} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-8 bg-brand-mid text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.year}
                </div>
                <div>
                  <p className="font-bold text-brand-dark">{step.title}</p>
                  <p className="text-brand-body text-sm mt-0.5">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-brand-bg py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp} className="space-y-6">
            <SectionLabel>Aliados</SectionLabel>
            <h2 className="text-2xl font-bold text-brand-dark">Aliados Estratégicos</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {domos.partners.map((p) => (
                <span
                  key={p.name}
                  className="bg-white border border-brand-border text-brand-dark font-medium text-sm px-5 py-2.5 rounded-full"
                >
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16 px-6 text-center text-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">
            ¿Quieres llevar un domo a tu institución?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="accent"
              size="lg"
              href="/contacto?tipo=proyecto&ref=domos"
            >
              Lleva un domo a tu institución
            </Button>
            <Button variant="outline" size="lg" href="/proyectos">
              Ver todos los proyectos
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
