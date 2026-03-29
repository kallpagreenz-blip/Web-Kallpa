'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, ChevronDown } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { CONTACT_INFO } from '@/data/company.data'
import { cn } from '@/lib/cn'

interface FormState {
  nombre: string; email: string; telefono: string
  organizacion: string; interes: string; mensaje: string
}

const INITIAL_FORM: FormState = { nombre: '', email: '', telefono: '', organizacion: '', interes: '', mensaje: '' }

const FAQS = [
  { question: '¿Trabajan solo en Lima?', answer: 'No. Tenemos presencia en Lima, Áncash, Junín, Cusco y Arequipa, con proyectos activos en cada región.' },
  { question: '¿Pueden adaptar soluciones a mi presupuesto?', answer: 'Sí. Contamos con planes desde USD 80 hasta proyectos de mayor escala. Contáctanos para una propuesta personalizada.' },
  { question: '¿Cuánto tiempo tarda instalar un domo?', answer: 'Depende del tamaño. Una cúpula mini puede instalarse en 3-5 días. La cúpula grande puede requerir 2-3 semanas.' },
  { question: '¿Ofrecen financiamiento?', answer: 'Estamos explorando opciones de financiamiento con aliados. Contáctanos para conocer las opciones disponibles según tu proyecto.' },
]

const INPUT_CLS = 'w-full border border-brand-border rounded-xl px-4 py-3 text-brand-dark focus:border-brand-mid focus:outline-none focus:ring-2 focus:ring-brand-mid/20 transition text-sm'
const LABEL_CLS = 'text-xs font-bold text-brand-body uppercase tracking-wide mb-1 block'
const motionIn = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true as const }, transition: { duration: 0.6 } }

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }): React.JSX.Element {
  return (
    <div className="flex items-start gap-3">
      <div className="text-brand-mid flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <p className="text-xs font-bold text-brand-body uppercase tracking-wide mb-1">{label}</p>
        {children}
      </div>
    </div>
  )
}

export default function ContactoPage(): React.JSX.Element {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-24 text-center text-white px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <SectionLabel>Contacto</SectionLabel>
          <h1 className="font-bold text-4xl leading-tight">Conecta con Kallpa.</h1>
          <p className="text-white/70 text-lg max-w-2xl">Cuéntanos tu proyecto, tu necesidad o tu idea. Encontremos juntos la solución verde que necesitas.</p>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="bg-brand-bg py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div {...motionIn} className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5">
            <h2 className="font-bold text-xl text-brand-dark">Información de contacto</h2>
            <InfoRow icon={<Phone className="w-5 h-5" />} label="Teléfonos">
              {CONTACT_INFO.phones.map((p) => <p key={p} className="text-brand-dark text-sm font-medium">{p}</p>)}
            </InfoRow>
            <InfoRow icon={<Mail className="w-5 h-5" />} label="Correo">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-dark text-sm font-medium hover:text-brand-mid transition-colors">{CONTACT_INFO.email}</a>
            </InfoRow>
            <InfoRow icon={<Clock className="w-5 h-5" />} label="Horarios">
              <p className="text-brand-dark text-sm">{CONTACT_INFO.hours.weekdays}</p>
              <p className="text-brand-dark text-sm">{CONTACT_INFO.hours.saturday}</p>
            </InfoRow>
            <InfoRow icon={<MapPin className="w-5 h-5" />} label="Regiones">
              <p className="text-brand-dark text-sm">{CONTACT_INFO.regions.join(', ')}</p>
            </InfoRow>
            <a href="https://wa.me/51925268236" target="_blank" rel="noopener noreferrer"
              className="w-full text-center bg-green-500 text-white font-bold rounded-full px-6 py-3 hover:bg-green-600 transition-colors text-sm">
              Escribir por WhatsApp
            </a>
            <div>
              <p className="text-xs text-brand-body mb-2">¿En qué estás interesado?</p>
              <div className="flex flex-wrap gap-2">
                {['Proyecto', 'Producto', 'Demo', 'Alianza'].map((tag) => (
                  <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-full border-2 border-brand-border text-brand-body hover:border-brand-mid hover:text-brand-mid cursor-pointer transition-colors">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...motionIn} className="md:col-span-3 bg-white rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-mid/10 flex items-center justify-center text-brand-mid text-3xl">✓</div>
                <h3 className="font-bold text-xl text-brand-dark">¡Mensaje enviado!</h3>
                <p className="text-brand-body">Nos comunicaremos contigo pronto.</p>
                <button type="button" onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }} className="text-sm text-brand-mid hover:underline">Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="flex flex-col gap-4">
                <h2 className="font-bold text-xl text-brand-dark mb-2">Escríbenos</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL_CLS}>Nombre completo *</label>
                    <input name="nombre" type="text" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre" className={INPUT_CLS} />
                  </div>
                  <div>
                    <label className={LABEL_CLS}>Correo electrónico *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="tu@correo.com" className={INPUT_CLS} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL_CLS}>Teléfono / WhatsApp</label>
                    <input name="telefono" type="tel" value={form.telefono} onChange={handleChange} placeholder="+51 9XX XXX XXX" className={INPUT_CLS} />
                  </div>
                  <div>
                    <label className={LABEL_CLS}>Organización</label>
                    <input name="organizacion" type="text" value={form.organizacion} onChange={handleChange} placeholder="Tu empresa o institución" className={INPUT_CLS} />
                  </div>
                </div>
                <div>
                  <label className={LABEL_CLS}>Tipo de interés *</label>
                  <select name="interes" value={form.interes} onChange={handleChange} required className={cn(INPUT_CLS, 'cursor-pointer')}>
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="proyecto">Quiero implementar un proyecto</option>
                    <option value="producto">Quiero comprar una solución</option>
                    <option value="demo">Solicitar una demo</option>
                    <option value="aliado">Ser aliado estratégico</option>
                    <option value="otro">Otra consulta</option>
                  </select>
                </div>
                <div>
                  <label className={LABEL_CLS}>Mensaje *</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required rows={4} placeholder="Cuéntanos más sobre tu proyecto o consulta..." className={INPUT_CLS} />
                </div>
                <Button variant="primary" type="submit" className="w-full justify-center">Enviar mensaje</Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...motionIn} className="text-brand-dark font-bold text-3xl text-center mb-10">Preguntas Frecuentes</motion.h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, index) => (
              <div key={faq.question} className="border border-brand-border rounded-2xl overflow-hidden">
                <button type="button" onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-brand-bg transition-colors">
                  <span className="font-bold text-brand-dark text-sm pr-4">{faq.question}</span>
                  <ChevronDown className={cn('w-5 h-5 text-brand-mid flex-shrink-0 transition-transform duration-200', activeIndex === index && 'rotate-180')} />
                </button>
                {activeIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-brand-body text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
