'use client'

import { motion } from 'framer-motion'

interface Paso {
  numero: number
  titulo: string
  descripcion: string
  icono: string
}

const PASOS: Paso[] = [
  {
    numero: 1,
    titulo: 'Diagnóstico territorial',
    descripcion: 'Visitamos el territorio, entendemos el suelo, el clima y las condiciones productivas reales. Sin esto, no avanzamos.',
    icono: '🔍',
  },
  {
    numero: 2,
    titulo: 'Identificación de oportunidad',
    descripcion: 'Definimos qué cultivo, qué sistema y qué modelo productivo tiene mayor viabilidad y potencial de retorno en ese contexto.',
    icono: '🌱',
  },
  {
    numero: 3,
    titulo: 'Financiamiento propio o externo',
    descripcion: 'El agroproductor puede financiar con capital propio o acceder a inversión externa. Kallpa ayuda a estructurar la opción que mejor funciona.',
    icono: '💰',
  },
  {
    numero: 4,
    titulo: 'Instalación de infraestructura',
    descripcion: 'Instalamos invernaderos, macrotúneles y sistemas de riego tecnificado con materiales de alta calidad y estándares Kallpa.',
    icono: '🏗️',
  },
  {
    numero: 5,
    titulo: 'Puesta en marcha y capacitación',
    descripcion: 'Dejamos la operación productiva lista y capacitamos al productor para que opere con autonomía real desde el primer ciclo.',
    icono: '🎓',
  },
  {
    numero: 6,
    titulo: 'Monitoreo y acompañamiento',
    descripcion: 'Seguimiento en línea y presencial, consultas técnicas, alertas y ajustes según los datos de cada ciclo productivo.',
    icono: '📊',
  },
  {
    numero: 7,
    titulo: 'Mantenimiento y soporte continuo',
    descripcion: 'Soporte técnico, mantenimiento preventivo y respuesta ante imprevistos para proteger la inversión y la producción.',
    icono: '🔧',
  },
  {
    numero: 8,
    titulo: 'Ruta comercial y marca propia',
    descripcion: 'Conectamos la producción con mercados de mayor valor y acompañamos al productor a construir su propia marca e identidad.',
    icono: '🚀',
  },
]

export default function PasoSection(): React.JSX.Element {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-brand-mid">
            El proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-3 mb-3">
            Cómo funciona una Agrofranquicia Kallpa
          </h2>
          <p className="text-brand-body max-w-2xl">
            Ocho pasos que convierten un diagnóstico en un negocio productivo real, operando y conectado al mercado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PASOS.map((paso, i) => (
            <motion.div
              key={paso.numero}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative"
            >
              <div className="bg-brand-bg border border-brand-border rounded-2xl p-6 h-full hover:border-brand-mid/40 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-brand-mid text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {paso.numero}
                  </span>
                  <span className="text-2xl">{paso.icono}</span>
                </div>
                <h3 className="text-brand-dark font-bold text-base mb-2 leading-snug">
                  {paso.titulo}
                </h3>
                <p className="text-brand-body text-sm leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
