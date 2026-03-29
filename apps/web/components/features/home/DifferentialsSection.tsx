'use client'

import { motion } from 'framer-motion'
import { Cpu, GraduationCap, BarChart3, Globe } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { cn } from '@/lib/cn'

interface DifferentialCard {
  icon: React.ReactNode
  title: string
  description: string
}

const DIFFERENTIALS: DifferentialCard[] = [
  {
    icon: <Cpu className="w-5 h-5 text-brand-mid" />,
    title: 'Tecnología Verde Aplicada',
    description:
      'No hablamos de sostenibilidad: la instalamos, la conectamos y la medimos en tiempo real.',
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-brand-mid" />,
    title: 'Educación Transformadora',
    description:
      'Del aula al laboratorio vivo. Más de 2,600 niños aprenden ciencia haciendo, no memorizando.',
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-brand-mid" />,
    title: 'Impacto Medible y Verificable',
    description:
      'Cada proyecto tiene métricas reales: CO₂ capturado, agua ahorrada, aprendizajes registrados.',
  },
  {
    icon: <Globe className="w-5 h-5 text-brand-mid" />,
    title: 'Comunidad y Escalabilidad',
    description:
      'Más de 100 voluntarios y presencia en 5 regiones. Un modelo replicable, no un caso único.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function DifferentialsSection(): React.JSX.Element {
  return (
    <section className="bg-brand-bg py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>Lo que nos hace únicos</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-3">
            Por qué Kallpa es diferente.
          </h2>
          <p className="text-brand-body max-w-2xl mx-auto">
            No somos un proyecto piloto ni un concepto experimental. Somos una empresa
            que ya lleva tecnología verde al campo, las aulas y las comunidades.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                'bg-white rounded-2xl p-8 border border-brand-border',
                'hover:border-brand-mid hover:shadow-md hover:-translate-y-1',
                'transition-all duration-300',
              )}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-mid/10 mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                {item.title}
              </h3>
              <p className="text-brand-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
