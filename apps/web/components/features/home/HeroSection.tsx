'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Button from '@/components/ui/Button'
import { METRICS } from '@/data/company.data'

const heroMetrics = METRICS.slice(0, 4)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function HeroSection(): React.JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">
      {/* Background — tierra y campo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0d2010 0%, #1a3518 40%, #2a5020 70%, #1e3a18 100%)',
        }}
      />
      {/* Overlay de textura sutil */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* Glow ambiental */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-green/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-mid/10 blur-3xl rounded-full pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">

          {/* Left — copy principal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-brand-mid text-xs font-bold tracking-widest uppercase bg-brand-mid/20 border border-brand-mid/20 px-4 py-2 rounded-full">
                🌿 Empresa Social · Agrofranquicias · Perú
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              El campo merece
              <br />
              <span className="text-brand-accent">tecnología real.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/65 text-xl max-w-xl leading-relaxed">
              Llevamos invernaderos, riego tecnificado y acompañamiento productivo a pequeños agricultores. Para que produzcan mejor, reduzcan riesgos y vendan a mayor precio.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button variant="accent" href="/agrofranquicias" size="lg">
                Ver Agrofranquicias →
              </Button>
              <Button variant="outline" href="/contacto" size="lg">
                Hablar con el equipo
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 text-sm text-white/50 pt-2">
              <span className="flex items-center gap-1.5">🏆 LG Ambassador 2021</span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5">🇺🇸 Embajada EE.UU. 2024–25</span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5">🌱 4 regiones activas</span>
            </motion.div>

            {/* Contexto del agro — chips de diagnóstico */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {[
                '91% sin acceso a crédito',
                '84% sin riego tecnificado',
                '96% sin asistencia técnica',
              ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs font-semibold text-amber-300/75 bg-amber-300/8 border border-amber-300/15 px-3 py-1.5 rounded-full"
                >
                  ⚠ {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — tarjetas de campo */}
          <motion.div
            className="hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Tarjeta principal */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-brand-mid text-xs font-bold tracking-widest uppercase mb-4">
                Sistema Kallpa · Agrofranquicia activa
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { icono: '🏗️', texto: 'Invernadero instalado y operando' },
                  { icono: '💧', texto: '90% menos agua que el riego tradicional' },
                  { icono: '📈', texto: 'ROI proyectado: 12 a 14 meses' },
                  { icono: '🤝', texto: 'Acompañamiento técnico continuo' },
                  { icono: '🏷️', texto: 'Marca propia del productor' },
                ].map(({ icono, texto }) => (
                  <div key={texto} className="flex items-center gap-3 text-white/75 text-sm">
                    <span>{icono}</span>
                    <span>{texto}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarjeta de red */}
            <div className="bg-brand-accent/95 rounded-2xl p-5 text-brand-dark">
              <p className="font-bold text-xs tracking-widest uppercase mb-2">Red activa</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: '6', l: 'Agrofranquicias' },
                  { v: '4', l: 'Regiones' },
                  { v: '+100', l: 'Voluntarios' },
                  { v: '+2,600', l: 'Niños' },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <p className="font-bold text-xl">{v}</p>
                    <p className="text-brand-dark/60 text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden"
        >
          {heroMetrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-brand-dark/60 backdrop-blur-sm px-6 py-5 text-center hover:bg-brand-dark/80 transition-colors"
            >
              <div className="text-3xl font-bold text-brand-accent">
                <AnimatedCounter
                  end={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <p className="text-white/55 text-sm mt-1">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
