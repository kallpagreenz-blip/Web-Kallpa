'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const BENEFICIOS = [
  {
    icono: '🏗️',
    titulo: 'Infraestructura de calidad',
    descripcion: 'Invernaderos, macrotúneles y sistemas certificados con materiales de alta durabilidad. Sin improvisación.',
  },
  {
    icono: '💧',
    titulo: 'Riego tecnificado instalado',
    descripcion: 'Sistema de riego por goteo, fertirriego o microaspersión diseñado para tu cultivo y tu terreno específico.',
  },
  {
    icono: '🎓',
    titulo: 'Capacitación real',
    descripcion: 'Formación técnica práctica para que el productor opere con autonomía desde el primer ciclo productivo.',
  },
  {
    icono: '📊',
    titulo: 'Monitoreo constante',
    descripcion: 'Seguimiento en línea y visitas presenciales. Datos de campo para tomar decisiones con información, no con intuición.',
  },
  {
    icono: '🔧',
    titulo: 'Mantenimiento incluido',
    descripcion: 'Soporte técnico, mantenimiento preventivo y respuesta ante imprevistos para proteger tu inversión productiva.',
  },
  {
    icono: '🤝',
    titulo: 'Acompañamiento comercial',
    descripcion: 'Conexión con mercados de mayor valor y apoyo en la negociación comercial para obtener mejor precio por tu producción.',
  },
  {
    icono: '🏷️',
    titulo: 'Desarrollo de tu marca',
    descripcion: 'Kallpa no borra tu identidad. Te ayuda a construir o fortalecer tu propia marca y diferenciarte en el mercado.',
  },
  {
    icono: '📐',
    titulo: 'Estándares Kallpa',
    descripcion: 'Acceso al sistema de buenas prácticas, protocolos productivos y estándares de calidad que respaldan la red completa.',
  },
]

const MODELO_PUNTOS = [
  'Kallpa coordina soporte técnico, logístico y comercial.',
  'Cubre los costos de acompañamiento continuo.',
  'Negocia con el productor un porcentaje justo de las utilidades.',
  'Ese porcentaje sostiene el sistema para todos.',
  'El productor conserva su tierra, su producción y su marca.',
]

export default function BeneficiosSection(): React.JSX.Element {
  return (
    <>
      {/* Qué recibe el productor */}
      <section className="bg-brand-bg py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-brand-mid">
              Lo que obtienes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-3 mb-3">
              Todo lo que necesitas para producir bien
            </h2>
            <p className="text-brand-body max-w-2xl">
              Al ser parte de la red Kallpa, el agroproductor accede a un ecosistema completo de soporte, tecnología y mercado.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFICIOS.map((b, i) => (
              <motion.div
                key={b.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-brand-border p-5 hover:border-brand-mid/30 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-3xl block mb-3">{b.icono}</span>
                <h3 className="text-brand-dark font-bold text-sm mb-1.5">{b.titulo}</h3>
                <p className="text-brand-body text-xs leading-relaxed">{b.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de valor */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-widest uppercase text-brand-mid">
                El modelo de valor
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-3 mb-4">
                Un sistema justo y sostenible para todos
              </h2>
              <p className="text-brand-body leading-relaxed mb-6">
                Kallpa no cobra por instalación y se retira. Se queda. Acompaña, mide y vende junto al productor.
                A cambio, negocia un porcentaje de las utilidades que permite sostener y crecer el sistema.
              </p>
              <p className="text-brand-body leading-relaxed">
                Es un modelo de alianza real: Kallpa gana cuando el productor gana. Por eso nuestro interés es que la agrofranquicia sea exitosa, no que el productor compre un invernadero y quede solo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-dark rounded-3xl p-8"
            >
              <p className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-5">
                Cómo se sostiene el sistema
              </p>
              <ul className="flex flex-col gap-4">
                {MODELO_PUNTOS.map((punto, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-mid shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{punto}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-xs">
                  El porcentaje exacto se negocia caso a caso según escala, inversión y contexto del productor.
                  Kallpa no tiene una tarifa fija: tiene un acuerdo personalizado.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tu marca, tu identidad */}
      <section className="bg-brand-accent py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5"
          >
            <span className="text-4xl">🏷️</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
              Kallpa no te reemplaza. Te potencia.
            </h2>
            <p className="text-brand-dark/70 text-lg max-w-2xl leading-relaxed">
              Aunque formes parte de la red Kallpa, tú eres el dueño de tu producción, tu tierra y tu marca.
              Nosotros te damos el respaldo, la tecnología y los mercados.
              Tú pones el nombre, la historia y la identidad.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4 w-full max-w-2xl">
              {[
                { label: 'Tu tierra', desc: 'Permanece tuya, siempre.' },
                { label: 'Tu producción', desc: 'La gestionas con autonomía real.' },
                { label: 'Tu marca', desc: 'La construyes o fortaleces con nuestro apoyo.' },
              ].map((item) => (
                <div key={item.label} className="bg-white/60 rounded-xl p-4 text-left">
                  <p className="font-bold text-brand-dark text-sm mb-1">{item.label}</p>
                  <p className="text-brand-dark/60 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
