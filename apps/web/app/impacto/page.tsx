'use client'

import { motion } from 'framer-motion'
import { GraduationCap, TreePine, TrendingUp, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { METRICS } from '@/data/company.data'

const motionProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

interface ImpactCategoryProps {
  icon: React.ReactNode
  title: string
  description: string
  stats: Array<{ label: string; value: string }>
}

function ImpactCategory({ icon, title, description, stats }: ImpactCategoryProps): React.JSX.Element {
  return (
    <motion.div {...motionProps} className="bg-brand-bg rounded-3xl p-8 border border-brand-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-mid/10 flex items-center justify-center text-brand-mid">
          {icon}
        </div>
        <h3 className="font-bold text-xl text-brand-dark">{title}</h3>
      </div>
      <p className="text-brand-body text-sm leading-relaxed mb-6">{description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-3 text-center border border-brand-border">
            <p className="font-bold text-brand-mid text-lg">{stat.value}</p>
            <p className="text-xs text-brand-body mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function ImpactoPage(): React.JSX.Element {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-32 text-center px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <SectionLabel>Impacto Real</SectionLabel>
          <h1 className="text-white font-bold text-5xl leading-tight">
            La sostenibilidad no se promete.<br />Se diseña, instala y mide.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Cada número que ves aquí tiene una historia detrás: una familia productora, una comunidad, un campo que hoy produce mejor y con mayor dignidad.
          </p>
        </div>
      </section>

      {/* Impact Categories */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <ImpactCategory
            icon={<GraduationCap className="w-6 h-6" />}
            title="Impacto Educativo"
            description="Llevamos educación STEAM viva a escuelas públicas y comunidades vulnerables. Cada domo es un laboratorio donde los niños aprenden haciendo, no leyendo."
            stats={[
              { label: 'Niños beneficiados', value: '+2,600' },
              { label: 'Escuelas', value: '+10' },
              { label: 'Talleres', value: '+25' },
              { label: 'Docentes formados', value: '+20' },
            ]}
          />
          <ImpactCategory
            icon={<TreePine className="w-6 h-6" />}
            title="Impacto Ambiental"
            description="Nuestros sistemas reducen drásticamente el consumo de agua y generan producción limpia. La tecnología verde no es solo un slogan: es una métrica medible."
            stats={[
              { label: 'CO₂ capturado', value: '+7 ton' },
              { label: 'Ahorro de agua', value: '90%' },
              { label: 'Regiones activas', value: '4' },
              { label: 'Años de impacto', value: '4' },
            ]}
          />
          <ImpactCategory
            icon={<TrendingUp className="w-6 h-6" />}
            title="Impacto Productivo"
            description="Las agrofranquicias Kallpa demuestran que sostenibilidad y rentabilidad van juntas. Producción limpia, trazable y con retorno de inversión real para el productor."
            stats={[
              { label: 'Agrofranquicias activas', value: '6' },
              { label: 'ROI proyectado', value: '12–14 m' },
              { label: 'Ahorro de agua', value: '90%' },
              { label: 'Regiones', value: '4' },
            ]}
          />
        </div>
      </section>

      {/* Numbers Wall */}
      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...motionProps}
            className="text-white font-bold text-3xl text-center mb-12"
          >
            Números que hablan
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {METRICS.map((metric, i) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter
                  end={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  className="text-5xl font-bold text-brand-accent"
                />
                <p className="text-white font-bold mt-2">{metric.label}</p>
                {metric.description !== undefined && (
                  <p className="text-white/50 text-xs mt-1">{metric.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformación territorial */}
      <section className="bg-brand-bg py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div {...motionProps} className="text-center mb-12">
            <SectionLabel>Transformación</SectionLabel>
            <h2 className="text-brand-dark font-bold text-3xl mt-4 mb-3">
              Lo que cambia cuando Kallpa opera en un territorio
            </h2>
            <p className="text-brand-body max-w-2xl mx-auto">
              El impacto no es solo tecnológico. Es social, económico y territorial.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icono: '🌾', titulo: 'Producción más segura', desc: 'Los productores reducen su exposición a heladas, plagas y variabilidad climática gracias a la infraestructura protegida.' },
              { icono: '💰', titulo: 'Mejor ingreso por cosecha', desc: 'Producción de mayor calidad genera acceso a canales comerciales con mejor precio y menor intermediación.' },
              { icono: '📊', titulo: 'Decisiones basadas en datos', desc: 'Monitoreo en tiempo real permite ajustar nutrición, riego y manejo antes de que los problemas escalen.' },
              { icono: '🤝', titulo: 'Comunidades productivas', desc: 'La agrofranquicia fortalece el tejido productivo local y genera oportunidades de empleo y formación.' },
              { icono: '🏷️', titulo: 'Identidad de marca', desc: 'Cada productor construye su propia marca con el respaldo del sistema Kallpa. El campo tiene nombre propio.' },
              { icono: '🌱', titulo: 'Sostenibilidad medible', desc: 'CO₂, agua, suelo: cada parámetro se mide. La sostenibilidad no es un discurso, es una métrica verificable.' },
            ].map((item) => (
              <motion.div
                key={item.titulo}
                {...motionProps}
                className="bg-white rounded-2xl border border-brand-border p-6 hover:border-brand-mid/30 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-3xl block mb-3">{item.icono}</span>
                <h3 className="text-brand-dark font-bold text-sm mb-2">{item.titulo}</h3>
                <p className="text-brand-body text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...motionProps} className="flex items-center gap-3 mb-10">
            <Award className="w-6 h-6 text-brand-mid" />
            <h2 className="text-brand-dark font-bold text-3xl">Reconocimientos</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...motionProps} className="bg-brand-bg rounded-3xl p-8 border border-brand-border">
              <p className="text-4xl mb-4">🏆</p>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-mid mb-2">2021</p>
              <h3 className="font-bold text-xl text-brand-dark mb-3">LG Ambassador Challenge 2021</h3>
              <p className="text-brand-body text-sm leading-relaxed">
                Reconocimiento internacional que valida nuestra propuesta de tecnología verde educativa frente a proyectos de todo el mundo. El primer gran hito de Kallpa Greenz como proyecto de impacto global.
              </p>
            </motion.div>
            <motion.div
              {...motionProps}
              transition={{ ...motionProps.transition, delay: 0.1 }}
              className="bg-brand-bg rounded-3xl p-8 border border-brand-border"
            >
              <p className="text-4xl mb-4">🇺🇸</p>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-mid mb-2">2024–2025</p>
              <h3 className="font-bold text-xl text-brand-dark mb-3">Embajada de EE.UU. 2024-2025</h3>
              <p className="text-brand-body text-sm leading-relaxed">
                La Embajada de Estados Unidos en Perú reconoce y patrocina a Kallpa Greenz. Validación internacional de nuestro modelo de tecnología verde, educación ambiental e impacto comunitario sostenible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA → Agrofranquicias */}
      <section className="bg-brand-dark py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
          <h2 className="text-white font-bold text-2xl">
            ¿Quieres explorar dónde opera la red Kallpa?
          </h2>
          <p className="text-white/60 text-sm">
            El mapa interactivo con las agrofranquicias activas está en la sección Agrofranquicias.
          </p>
          <Link
            href="/agrofranquicias"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-yellow-400 text-brand-dark font-bold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Ver red de agrofranquicias
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
