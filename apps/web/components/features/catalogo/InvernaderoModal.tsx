'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Tag, Zap, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/cn'
import type { Invernadero } from '@/data/invernaderos.data'

interface InvernaderoModalProps {
  invernadero: Invernadero | null
  onClose: () => void
}

export default function InvernaderoModal({
  invernadero,
  onClose,
}: InvernaderoModalProps): React.JSX.Element {
  // Close on ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll when open
  useEffect(() => {
    if (invernadero) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [invernadero])

  return (
    <AnimatePresence>
      {invernadero && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-brand-dark/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image header */}
              <div className="relative h-64 md:h-80 w-full rounded-t-3xl overflow-hidden bg-brand-bg">
                <Image
                  src={invernadero.imagen}
                  alt={invernadero.nombre}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />

                {/* Badge over image */}
                <span className={cn(
                  'absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full',
                  invernadero.badgeColor,
                )}>
                  {invernadero.badge}
                </span>

                {/* Close button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors duration-200"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Title over image */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-white/70 text-sm">{invernadero.subtitulo}</p>
                  <h2 className="text-white font-bold text-2xl leading-tight">
                    {invernadero.nombre}
                  </h2>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {invernadero.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 bg-brand-bg text-brand-body text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-border"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-bold text-brand-dark text-sm uppercase tracking-widest mb-3">
                    Características
                  </h3>
                  <ul className="space-y-2">
                    {invernadero.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-brand-body text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-mid flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal para + Compatibilidad */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-brand-bg rounded-2xl p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-mid mb-1">
                      Ideal para
                    </p>
                    <p className="text-brand-body text-sm">{invernadero.idealPara}</p>
                  </div>
                  <div className="bg-brand-bg rounded-2xl p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Zap className="w-3.5 h-3.5 text-brand-mid" />
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-mid">
                        Compatibilidad
                      </p>
                    </div>
                    <p className="text-brand-body text-sm">{invernadero.compatibilidad}</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href={`https://wa.me/51925268236?text=Hola, me interesa cotizar el ${encodeURIComponent(invernadero.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-mid hover:bg-brand-green text-white font-bold py-3 px-6 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-green text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Cotizar por WhatsApp
                  </Link>
                  <Link
                    href={`/contacto?tipo=propuesta&modelo=${invernadero.id}`}
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-brand-mid text-brand-mid hover:bg-brand-mid hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-200 text-sm"
                  >
                    Solicitar propuesta técnica
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
