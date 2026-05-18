'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Globe, Star } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { CONSULTORES, PRECIO_HORA, getWhatsAppLink } from '@/data/consultores.data'
import type { EspecialidadConsultor } from '@/data/consultores.data'

const FILTROS: Array<{ label: string; value: EspecialidadConsultor | 'Todos' }> = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Hidroponía', value: 'Hidroponía' },
  { label: 'Riego', value: 'Riego Tecnificado' },
  { label: 'Ag. Protegida', value: 'Agricultura Protegida' },
  { label: 'Fertirriego', value: 'Fertirriego' },
  { label: 'Finanzas', value: 'Finanzas Agrícolas' },
  { label: 'Postcosecha', value: 'Postcosecha' },
  { label: 'Tecnología', value: 'Tecnología de Precisión' },
]

export default function ConsultoresPage(): React.JSX.Element {
  const [filtro, setFiltro] = useState<EspecialidadConsultor | 'Todos'>('Todos')
  const [expandido, setExpandido] = useState<string | null>(null)

  const consultoresFiltrados = filtro === 'Todos'
    ? CONSULTORES
    : CONSULTORES.filter((c) => c.especialidad === filtro)

  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-mid/15 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <SectionLabel className="bg-white/10 text-brand-light">
            🌐 Red Global de Especialistas
          </SectionLabel>
          <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight">
            Red de Consultores Kallpa
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Especialistas agrícolas de toda Latinoamérica disponibles para asesorar a cualquier productor o agrofranquicia de la red Kallpa. Una sola hora puede cambiar la dirección de tu producción.
          </p>
          {/* Price badge */}
          <div className="bg-brand-accent text-brand-dark font-bold text-lg px-8 py-3 rounded-full flex items-center gap-2">
            <Clock className="w-5 h-5" />
            1 hora de asesoría: S/ {PRECIO_HORA}
          </div>
        </div>
      </section>

      {/* Qué es la red */}
      <section className="bg-brand-bg py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icono: '🔬', titulo: 'Especialistas verificados', desc: 'Profesionales con trayectoria real en campo, no solo en academia. Cada consultor tiene experiencia práctica comprobada.' },
            { icono: '🌍', titulo: 'Red internacional', desc: 'Desde Perú hasta España, pasando por México, Chile, Colombia y Brasil. Diversidad de contextos y climas.' },
            { icono: '📞', titulo: 'Consulta directa', desc: 'Sin intermediarios. Agendas directamente por WhatsApp y te conectas con el consultor que necesitas.' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl border border-brand-border p-6">
              <span className="text-3xl block mb-3">{item.icono}</span>
              <h3 className="text-brand-dark font-bold mb-2">{item.titulo}</h3>
              <p className="text-brand-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filtros y grid de consultores */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel>Nuestros consultores</SectionLabel>
              <h2 className="text-3xl font-bold text-brand-dark mt-3">
                {consultoresFiltrados.length} especialista{consultoresFiltrados.length !== 1 ? 's' : ''} disponibles
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTROS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFiltro(f.value)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                    filtro === f.value
                      ? 'bg-brand-mid text-white border-brand-mid'
                      : 'bg-white text-brand-body border-brand-border hover:border-brand-mid hover:text-brand-mid'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {consultoresFiltrados.map((consultor, i) => (
              <motion.div
                key={consultor.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-brand-bg border border-brand-border rounded-2xl overflow-hidden hover:border-brand-mid/40 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                {/* Avatar header */}
                <div className={`${consultor.avatarColor} py-8 flex flex-col items-center gap-2`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                    {consultor.initials}
                  </div>
                  <div className="flex items-center gap-1 text-white/80 text-xs">
                    <Globe className="w-3 h-3" />
                    {consultor.bandera} {consultor.ciudad}, {consultor.pais}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="text-brand-dark font-bold text-base">{consultor.nombre}</h3>
                    <span className="inline-block mt-1 text-[11px] font-bold bg-brand-mid/10 text-brand-mid px-2.5 py-1 rounded-full">
                      {consultor.especialidad}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-brand-body text-xs">
                    <Star className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
                    {consultor.experienciaAnios} años de experiencia
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {consultor.cultivosAreas.slice(0, 3).map((area) => (
                      <span key={area} className="text-[10px] bg-brand-border text-brand-body px-2 py-0.5 rounded-full">
                        {area}
                      </span>
                    ))}
                    {consultor.cultivosAreas.length > 3 && (
                      <span className="text-[10px] text-brand-body/50">
                        +{consultor.cultivosAreas.length - 3} más
                      </span>
                    )}
                  </div>

                  {/* Bio expandible */}
                  <div>
                    <p className={`text-brand-body text-xs leading-relaxed ${expandido === consultor.id ? '' : 'line-clamp-3'}`}>
                      {consultor.bio}
                    </p>
                    <button
                      type="button"
                      onClick={() => setExpandido(expandido === consultor.id ? null : consultor.id)}
                      className="text-brand-mid text-xs font-bold mt-1 hover:underline"
                    >
                      {expandido === consultor.id ? 'Ver menos' : 'Ver perfil completo'}
                    </button>
                  </div>

                  {expandido === consultor.id && (
                    <div className="bg-white rounded-xl p-3 border border-brand-border">
                      <p className="text-xs font-bold text-brand-mid mb-1">Enfoque técnico</p>
                      <p className="text-brand-body text-xs leading-relaxed">{consultor.enfoqueTecnico}</p>
                    </div>
                  )}

                  <div className="mt-auto pt-2">
                    <a
                      href={getWhatsAppLink(consultor.nombre)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-brand-mid hover:bg-brand-green text-white font-bold text-sm px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Agendar consultoría
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Precio y CTA general */}
      <section className="bg-brand-dark py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <div className="bg-brand-accent/20 border border-brand-accent/30 rounded-2xl px-8 py-5">
            <p className="text-brand-accent font-bold text-3xl">S/ {PRECIO_HORA}</p>
            <p className="text-white/70 text-sm mt-1">por hora de asesoría con cualquier consultor de la red</p>
          </div>
          <h2 className="text-white font-bold text-2xl">
            ¿No sabes cuál consultor elegir?
          </h2>
          <p className="text-white/60">
            Escríbenos y te ayudamos a identificar al especialista que más se ajusta a tu cultivo, territorio y necesidad.
          </p>
          <a
            href={`https://wa.me/51958592290?text=${encodeURIComponent('Hola, quiero agendar una consultoría. ¿Me pueden ayudar a elegir el consultor adecuado para mi caso?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-yellow-400 text-brand-dark font-bold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-base"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
