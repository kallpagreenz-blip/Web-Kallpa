'use client'

import { motion } from 'framer-motion'
import {
  Target,
  Eye,
  Lightbulb,
  Shield,
  Users,
  User,
} from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { TIMELINE, TEAM } from '@/data/company.data'
import type { TimelineItem, TeamMember } from '@/types'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function NosotrosPage(): React.JSX.Element {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 text-center px-6">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto space-y-6">
          <SectionLabel className="text-brand-light bg-white/10">
            Quiénes Somos
          </SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            De voluntariado a empresa social.
            <br />
            Aprendimos a estructurar el impacto para que pueda crecer.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Nacimos de la convicción de que la sostenibilidad puede ser rentable
            y escalable. Hoy somos una empresa social enfocada en transformar la
            agricultura rural mediante tecnología, financiamiento y modelos
            productivos que generan impacto real, medible y replicable.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-brand-bg py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: 'Misión',
              text: 'Transformar la agricultura rural peruana a través del acceso a tecnología, financiamiento productivo y conexión con mercados. Promovemos una agricultura más eficiente, resiliente e inclusiva que mejore el ingreso y la calidad de vida de pequeños productores.',
            },
            {
              icon: Eye,
              title: 'Visión',
              text: 'Ser la empresa social de referencia en transformación agrícola rural en América Latina: conectando inversión, tecnología y mercados para construir comunidades productivas, resilientes e inclusivas.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              {...fadeUp}
              className="bg-white rounded-2xl p-8 border border-brand-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-mid/10 flex items-center justify-center mb-4">
                <Icon className="text-brand-mid" size={24} />
              </div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">{title}</h2>
              <p className="text-brand-body leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel>Valores</SectionLabel>
            <h2 className="text-3xl font-bold text-brand-dark mt-4">
              Nuestros Valores
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Innovación con Propósito',
                text: 'Cada tecnología que desarrollamos responde a una brecha real: falta de acceso, falta de capital, falta de mercado. Innovamos para cerrar esas brechas con soluciones concretas, medibles y escalables.',
              },
              {
                icon: Shield,
                title: 'Resiliencia con Dedicación',
                text: 'Pausamos, nos reformulamos y volvimos más fuertes. La resiliencia no es resistir el cambio: es aprender de los obstáculos y construir con ellos. Cada crisis nos enseñó a estructurar mejor nuestro modelo.',
              },
              {
                icon: Users,
                title: 'Comunidad y Liderazgo Consciente',
                text: 'Trabajamos con agricultores, jóvenes, mujeres y comunidades rurales como protagonistas del cambio, no como beneficiarios pasivos. El liderazgo consciente construye con las personas, no por encima de ellas.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                {...fadeUp}
                className="bg-white border border-brand-border rounded-2xl p-8 hover:border-brand-mid hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-mid/10 flex items-center justify-center mb-4">
                  <Icon className="text-brand-mid" size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-brand-body text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-bg py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel>Historia</SectionLabel>
            <h2 className="text-3xl font-bold text-brand-dark mt-4">
              Nuestra Historia
            </h2>
            <p className="text-brand-body mt-3 leading-relaxed">
              De un proyecto de voluntariado ambiental en Lima, a una empresa
              social con presencia en 5 regiones del Perú y visión de escala
              latinoamericana.
            </p>
          </motion.div>
          <div className="space-y-8">
            {TIMELINE.map((item: TimelineItem) => (
              <motion.div
                key={item.id}
                {...fadeUp}
                className={`flex gap-6 p-6 rounded-2xl border ${
                  item.milestone
                    ? 'bg-white border-brand-accent shadow-sm'
                    : 'bg-brand-bg border-brand-border'
                }`}
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-14 h-8 bg-brand-mid text-white text-xs font-bold rounded-full">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{item.title}</h3>
                  <p className="text-brand-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel>Equipo</SectionLabel>
            <h2 className="text-3xl font-bold text-brand-dark mt-4">
              Los Fundadores
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((member: TeamMember) => (
              <motion.div
                key={member.id}
                {...fadeUp}
                className="rounded-2xl bg-brand-bg p-6 border border-brand-border"
              >
                <div className="w-16 h-16 rounded-full bg-brand-mid/20 flex items-center justify-center mb-4">
                  <User className="text-brand-mid" size={28} />
                </div>
                <p className="font-bold text-brand-dark">{member.name}</p>
                <p className="text-brand-mid text-sm mt-0.5">{member.role}</p>
                <p className="text-brand-body text-sm mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-brand-dark py-16 text-center px-6">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto space-y-8">
          <SectionLabel className="bg-white/10 text-white">
            Reconocimientos
          </SectionLabel>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {[
              '🏆 LG Ambassador Challenge 2021',
              '🇺🇸 Embajada de EE.UU. Perú 2024–2025',
            ].map((achievement) => (
              <span
                key={achievement}
                className="text-white text-lg font-bold bg-white/10 px-6 py-3 rounded-2xl border border-white/20"
              >
                {achievement}
              </span>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-6 max-w-2xl mx-auto text-center">
            Estos reconocimientos validan lo que siempre supimos: el modelo
            Kallpa tiene escala, relevancia y capacidad de replicarse.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-brand-accent py-16 text-center px-6">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-brand-dark">
            ¿Te interesa el modelo Kallpa?
          </h2>
          <Button variant="dark" size="lg" href="/contacto">
            Hablemos sobre agricultura y escala
          </Button>
        </motion.div>
      </section>
    </main>
  )
}
