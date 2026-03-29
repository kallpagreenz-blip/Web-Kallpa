'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { METRICS } from '@/data/company.data'

const heroMetrics = METRICS.slice(0, 4)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

const floatVariantsSlow = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
  },
}

export default function HeroSection(): React.JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-dark via-[#1e3820] to-[#2d5e1e] overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30 pointer-events-none" />

      {/* Decorative circles */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={floatVariantsSlow}
        animate="animate"
        className="absolute bottom-32 left-10 w-96 h-96 rounded-full bg-brand-mid/15 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-brand-light/10 blur-2xl pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left column */}
          <motion.div
            className="flex-[3] max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel className="text-brand-mid bg-brand-mid/20">
                🌿 Empresa Social · Agricultura Productiva
              </SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mt-4 mb-6"
            >
              Transformamos agricultura rural en oportunidades productivas sostenibles.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 max-w-xl mb-8"
            >
              Conectamos inversión, tecnología y acompañamiento para que pequeños agricultores produzcan mejor, reduzcan riesgos y accedan a mercados de mayor valor.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <Button variant="accent" href="/soluciones" size="lg">
                Ver catálogo de invernaderos →
              </Button>
              <Button variant="outline" href="/#modelo" size="lg">
                Cómo funciona Kallpa
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 text-sm text-white/60"
            >
              <span className="flex items-center gap-1.5">🏆 LG Ambassador 2021</span>
              <span className="text-white/30">|</span>
              <span className="flex items-center gap-1.5">🇺🇸 Embajada EE.UU. 2024–25</span>
              <span className="text-white/30">|</span>
              <span className="flex items-center gap-1.5">🌱 Empresa Social Agrícola</span>
            </motion.div>
          </motion.div>

          {/* Right column — decorative cards */}
          <motion.div
            className="hidden lg:flex flex-[2] relative justify-center items-center min-h-[400px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main card */}
            <motion.div
              variants={floatVariantsSlow}
              animate="animate"
              className="relative z-10 bg-brand-dark/80 border border-brand-mid/40 rounded-2xl p-6 w-64 backdrop-blur-sm"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-brand-mid mb-4">
                Agricultura Protegida
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span>🏗️</span>
                  <span>Invernaderos instalados</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span>💧</span>
                  <span>90% ahorro de agua</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span>📈</span>
                  <span>ROI en 12–14 meses</span>
                </div>
              </div>
            </motion.div>

            {/* Floating smaller card */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute top-0 right-0 z-20 bg-brand-accent/90 rounded-xl px-4 py-3 text-brand-dark shadow-lg"
            >
              <p className="text-xs font-bold">REIGEL</p>
              <p className="text-sm font-bold">4,000 plantas/ciclo</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
        >
          {heroMetrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-brand-dark/70 backdrop-blur-sm px-6 py-5 text-center"
            >
              <div className="text-3xl font-bold text-brand-accent">
                <AnimatedCounter
                  end={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <p className="text-white/60 text-sm mt-1">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
