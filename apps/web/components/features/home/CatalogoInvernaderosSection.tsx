'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Tag, MessageCircle, ChevronRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import InvernaderoModal from '@/components/features/catalogo/InvernaderoModal'
import { INVERNADEROS, FILTROS_CATALOGO } from '@/data/invernaderos.data'
import { cn } from '@/lib/cn'
import type { Invernadero, FiltroValue } from '@/data/invernaderos.data'

// ── Animation variants ──────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// ── Card component ──────────────────────────────────────
function InvernaderoCard({
  inv,
  onSelect,
}: {
  inv: Invernadero
  onSelect: (inv: Invernadero) => void
}): React.JSX.Element {
  return (
    <motion.article
      variants={cardVariants}
      className="group bg-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
      onClick={() => onSelect(inv)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-brand-bg">
        <Image
          src={inv.imagen}
          alt={inv.nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge */}
        <span className={cn(
          'absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full',
          inv.badgeColor,
        )}>
          {inv.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-brand-mid text-xs font-bold uppercase tracking-widest mb-1">
          {inv.subtitulo}
        </p>
        <h3 className="text-brand-dark font-bold text-lg leading-tight mb-3">
          {inv.nombre}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {inv.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 bg-brand-bg text-brand-body text-xs px-2.5 py-1 rounded-full border border-brand-border"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* Top 2 benefits preview */}
        <ul className="space-y-1.5 mb-4 flex-1">
          {inv.beneficios.slice(0, 2).map((b) => (
            <li key={b} className="flex items-start gap-2 text-brand-body text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-mid flex-shrink-0 mt-1.5" />
              <span className="line-clamp-1">{b}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="pt-3 border-t border-brand-border flex items-center justify-between">
          <span className="text-brand-body text-xs">Inversión: <strong className="text-brand-mid">Cotizar</strong></span>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onSelect(inv) }}
            className="inline-flex items-center gap-1 text-brand-mid text-xs font-bold hover:text-brand-green transition-colors duration-200"
          >
            Ver detalle <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

// ── Main section ────────────────────────────────────────
export default function CatalogoInvernaderosSection(): React.JSX.Element {
  const [filtro, setFiltro] = useState<FiltroValue>('todos')
  const [selected, setSelected] = useState<Invernadero | null>(null)

  const filtrados = filtro === 'todos'
    ? INVERNADEROS
    : INVERNADEROS.filter((inv) => inv.categoria === filtro)

  return (
    <section id="catalogo" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <SectionLabel>Catálogo de Invernaderos</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-3 leading-tight">
            Infraestructura agrícola para escalar.
          </h2>
          <p className="text-brand-body max-w-2xl mx-auto text-lg">
            Diseñamos infraestructura agrícola adaptable para pequeños productores,
            proyectos productivos, instituciones y operaciones de mayor escala.
          </p>
        </motion.div>

        {/* Narrative strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-brand-dark rounded-2xl px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-white font-bold text-base md:text-lg">
              No vendemos solo estructuras. Diseñamos condiciones para producir mejor.
            </p>
            <p className="text-white/60 text-sm mt-0.5">
              Nuestros modelos se adaptan a distintos contextos productivos, climáticos y comerciales.
            </p>
          </div>
          <a
            href="https://wa.me/51925268236?text=Hola, quiero información sobre el catálogo de invernaderos Kallpa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-accent hover:bg-yellow-400 text-brand-dark font-bold px-6 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar por WhatsApp
          </a>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {FILTROS_CATALOGO.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFiltro(f.value)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-bold transition-all duration-200',
                filtro === f.value
                  ? 'bg-brand-mid text-white shadow-green'
                  : 'bg-brand-bg text-brand-body border border-brand-border hover:border-brand-mid hover:text-brand-mid',
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <motion.div
          key={filtro}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtrados.map((inv) => (
            <InvernaderoCard key={inv.id} inv={inv} onSelect={setSelected} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-brand-body mb-4 text-sm">
            ¿No encuentras el modelo adecuado para tu proyecto? Diseñamos soluciones a medida.
          </p>
          <a
            href="/contacto?tipo=propuesta"
            className="inline-flex items-center gap-2 bg-brand-mid hover:bg-brand-green text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-green"
          >
            Solicitar propuesta personalizada
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <InvernaderoModal invernadero={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
