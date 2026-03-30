'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '55.5%', label: 'no accede al mercado regional o exterior' },
  { value: '96.2%', label: 'no recibió asistencia técnica' },
  { value: '98.7%', label: 'no tiene seguro agropecuario' },
] as const

export default function CostoNoActuarSection(): React.JSX.Element {
  return (
    <section className="bg-brand-dark py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">
            El costo de no actuar
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 max-w-2xl mx-auto leading-snug">
            Cuando el agro no accede a tecnología, financiamiento y mercado, el resultado no es solo
            menor productividad.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed text-sm">
            Es mayor vulnerabilidad, menor estabilidad y menos futuro para comunidades enteras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true as const }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 text-center hover:bg-white/[0.07] transition-colors"
            >
              <p className="text-4xl md:text-5xl font-bold text-brand-accent mb-3">{stat.value}</p>
              <p className="text-white/55 text-sm leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/30 text-sm mt-10 italic"
        >
          Donde otros ven carencia, nosotros diseñamos capacidad.
        </motion.p>
      </div>
    </section>
  )
}
