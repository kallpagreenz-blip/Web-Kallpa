'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, MapPin, ExternalLink, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { ProyectoTerritorial, RegionTerritorial } from '@/data/presencia.data'

// ── Types ─────────────────────────────────────────────────

interface ProyectoModalProps {
  proyecto: ProyectoTerritorial | null
  region: RegionTerritorial | null
  onClose: () => void
}

// ── Status badge ──────────────────────────────────────────

const STATUS_STYLES: Record<string, string> = {
  activo:     'bg-emerald-100 text-emerald-700 border border-emerald-200',
  desarrollo: 'bg-amber-100 text-amber-700 border border-amber-200',
  piloto:     'bg-blue-100 text-blue-700 border border-blue-200',
}

const STATUS_LABELS: Record<string, string> = {
  activo:     'Activo',
  desarrollo: 'En desarrollo',
  piloto:     'Piloto',
}

// ── Main Component ────────────────────────────────────────

export default function ProyectoModal({
  proyecto,
  region,
  onClose,
}: ProyectoModalProps): React.JSX.Element {
  const [imgIndex, setImgIndex] = useState(0)

  // Reset image index when project changes
  useEffect(() => {
    setImgIndex(0)
  }, [proyecto?.id])

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    if (proyecto) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [proyecto])

  const images = proyecto?.imagenes ?? []
  const prevImg = (): void => setImgIndex((i) => (i - 1 + images.length) % images.length)
  const nextImg = (): void => setImgIndex((i) => (i + 1) % images.length)

  return (
    <AnimatePresence>
      {proyecto !== null && region !== null && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image header */}
            <div className="relative h-52 md:h-64 bg-brand-dark shrink-0">
              {images[imgIndex] !== undefined && (
                <Image
                  src={images[imgIndex]}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover opacity-75"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />

              {/* Image navigation */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImg}
                    className="absolute right-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setImgIndex(i)}
                        className={cn(
                          'w-1.5 h-1.5 rounded-full transition-all duration-200',
                          i === imgIndex ? 'bg-white w-4' : 'bg-white/40',
                        )}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Header info */}
              <div className="absolute bottom-4 left-5 right-12">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={cn('text-xs font-bold px-2.5 py-1 rounded-full', proyecto.typeBadgeColor)}>
                    {proyecto.tipo}
                  </span>
                  <span className={cn('text-xs font-bold px-2.5 py-1 rounded-full', STATUS_STYLES[proyecto.estado])}>
                    {STATUS_LABELS[proyecto.estado]}
                  </span>
                </div>
                <h2 className="text-white font-bold text-xl md:text-2xl leading-snug">{proyecto.titulo}</h2>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-mid" />
                  <span className="text-white/70 text-sm">{region.nombre}</span>
                </div>
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-2xl mx-auto space-y-6">
                <p className="text-brand-body leading-relaxed">{proyecto.fullDescription}</p>

                <div>
                  <h3 className="text-brand-dark font-bold mb-3">Qué se hizo</h3>
                  <ul className="space-y-2">
                    {proyecto.queSeHizo.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-brand-body text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-mid shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-mid/8 border border-brand-mid/20 rounded-xl px-5 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-mid mb-1">Impacto</p>
                  <p className="text-brand-dark font-bold text-sm leading-relaxed">{proyecto.impacto}</p>
                </div>

                {/* Thumbnail strip */}
                {images.length > 1 && (
                  <div className="flex gap-2">
                    {images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setImgIndex(i)}
                        className={cn(
                          'relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200',
                          i === imgIndex ? 'border-brand-mid' : 'border-transparent opacity-60 hover:opacity-90',
                        )}
                      >
                        <Image src={src} alt="" fill className="object-cover" sizes="80px" />
                      </button>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {proyecto.linkProyecto !== undefined && (
                  <a
                    href={proyecto.linkProyecto}
                    className="inline-flex items-center gap-2 bg-brand-mid hover:bg-brand-green text-white font-bold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-sm"
                  >
                    {proyecto.linkLabel ?? 'Ver más detalles'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
