'use client'

import { motion } from 'framer-motion'
import { GraduationCap, TreePine, TrendingUp, MapPin } from 'lucide-react'
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

interface RegionCardProps {
  region: string
  activity: string
}

function RegionCard({ region, activity }: RegionCardProps): React.JSX.Element {
  return (
    <div className="bg-white rounded-2xl p-6 border border-brand-border flex items-start gap-3">
      <MapPin className="w-5 h-5 text-brand-mid flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-bold text-brand-dark">{region}</p>
        <p className="text-sm text-brand-body mt-1">{activity}</p>
      </div>
    </div>
  )
}

const REGIONS: Array<{ region: string; activity: string }> = [
  { region: 'Lima', activity: 'Domos en Santa Anita y Comas, sede central' },
  { region: 'Áncash', activity: 'REIGEL en Caraz – modernización agrícola' },
  { region: 'Junín', activity: 'Talleres STEAM y comunidades educativas' },
  { region: 'Cusco', activity: 'Proyectos de educación ambiental' },
  { region: 'Arequipa', activity: 'Expansión de programas verdes' },
]

export default function ImpactoPage(): React.JSX.Element {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-32 text-center px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <SectionLabel>Impacto Real</SectionLabel>
          <h1 className="text-white font-bold text-5xl leading-tight">
            La sostenibilidad no se promete. Se diseña, instala y mide.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Cada número que ves aquí tiene una historia detrás: una escuela, una comunidad, un campo, un niño que aprendió algo nuevo.
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
            description="Nuestros sistemas reducen drásticamente el consumo de agua y capturan CO₂ de forma activa. La tecnología verde no es solo un slogan: es una métrica medible."
            stats={[
              { label: 'CO₂ capturado', value: '+7 ton' },
              { label: 'Ahorro de agua', value: '90%' },
              { label: 'Regiones activas', value: '5' },
              { label: 'Años de impacto', value: '4' },
            ]}
          />
          <ImpactCategory
            icon={<TrendingUp className="w-6 h-6" />}
            title="Impacto Productivo"
            description="REIGEL y NAOS demuestran que la sostenibilidad y la rentabilidad van de la mano. Producción limpia, trazable y con retorno de inversión real."
            stats={[
              { label: 'Plantas/ciclo (REIGEL)', value: '4,000' },
              { label: 'CO₂/año (NAOS)', value: '0.5 ton' },
              { label: 'ROI proyectado', value: '12–14 m' },
              { label: 'Ahorro de agua', value: '90%' },
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
                {metric.description && (
                  <p className="text-white/50 text-xs mt-1">{metric.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Peru Regions */}
      <section className="bg-brand-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...motionProps} className="text-center mb-10">
            <h2 className="text-brand-dark font-bold text-3xl">Presencia Nacional</h2>
            <p className="text-brand-body mt-2">Activos en 5 regiones del Perú</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {REGIONS.map((item) => (
              <RegionCard key={item.region} region={item.region} activity={item.activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...motionProps} className="text-brand-dark font-bold text-3xl text-center mb-10">
            Reconocimientos
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-bg rounded-3xl p-8 border border-brand-border"
            >
              <p className="text-4xl mb-4">🏆</p>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-mid mb-2">2021</p>
              <h3 className="font-bold text-xl text-brand-dark mb-3">LG Ambassador Challenge 2021</h3>
              <p className="text-brand-body text-sm leading-relaxed">
                Reconocimiento internacional que valida nuestra propuesta de tecnología verde educativa frente a proyectos de todo el mundo. El primer gran hito de Kallpa Greenz como proyecto de impacto global.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
    </main>
  )
}
