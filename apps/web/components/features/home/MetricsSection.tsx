'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionLabel from '@/components/ui/SectionLabel'
import { METRICS } from '@/data/company.data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function MetricsSection(): React.JSX.Element {
  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel className="text-brand-mid bg-brand-mid/20">
            Nuestros Números
          </SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Impacto que se mide,{' '}
            <span className="text-brand-accent">no se promete.</span>
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {METRICS.map((metric) => (
            <motion.div
              key={metric.id}
              variants={cardVariants}
              className="border-l-2 border-brand-mid pl-5"
            >
              <div className="text-5xl font-bold text-brand-accent">
                <AnimatedCounter
                  end={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <p className="text-white font-semibold mt-1">{metric.label}</p>
              {metric.description && (
                <p className="text-white/50 text-sm mt-1">{metric.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
