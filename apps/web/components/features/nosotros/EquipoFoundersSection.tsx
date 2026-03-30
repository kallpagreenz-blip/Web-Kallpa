'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, X, ArrowUpRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { TEAM } from '@/data/company.data'
import type { TeamMember } from '@/types'

const BADGE_PALETTES: readonly string[] = [
  'bg-teal-100 text-teal-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-sky-100 text-sky-700',
  'bg-violet-100 text-violet-700',
]

function Badge({ label, index }: { label: string; index: number }): React.JSX.Element {
  const palette = BADGE_PALETTES[index % BADGE_PALETTES.length] ?? 'bg-gray-100 text-gray-700'
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${palette}`}>
      {label}
    </span>
  )
}

function FounderModal({ member, onClose }: { member: TeamMember; onClose: () => void }): React.JSX.Element {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Photo */}
          <div className="relative md:w-5/12 h-64 md:h-auto shrink-0">
            <Image
              src={member.photoUrl}
              alt={member.name}
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                {member.role} · Co-fundador
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-7 flex flex-col gap-4 overflow-y-auto max-h-[85vh] md:max-h-[600px]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark">{member.name}</h3>
                <p className="text-brand-mid font-semibold text-sm mt-0.5">{member.role}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar perfil"
                className="w-9 h-9 rounded-full bg-brand-bg flex items-center justify-center text-brand-body hover:bg-brand-border transition-colors shrink-0 mt-0.5"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-brand-mid text-sm font-medium italic border-l-2 border-brand-mid pl-3 leading-relaxed">
              &ldquo;{member.tagline}&rdquo;
            </p>

            <p className="text-brand-body text-sm leading-relaxed">{member.expandedBio}</p>

            <div className="flex flex-wrap gap-2">
              {member.badges.map((badge, i) => (
                <Badge key={badge} label={badge} index={i} />
              ))}
            </div>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-fit mt-auto bg-[#0A66C2] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004182] transition-colors"
            >
              <Linkedin size={15} />
              Ver en LinkedIn
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function FounderCard({ member, onOpen, index }: { member: TeamMember; onOpen: (m: TeamMember) => void; index: number }): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true as const }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group bg-white rounded-2xl overflow-hidden border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
    >
      {/* Photo */}
      <div className="relative h-72 overflow-hidden shrink-0">
        <Image
          src={member.photoUrl}
          alt={member.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-1 block">
            {member.role}
          </span>
          <h3 className="text-xl font-bold text-white leading-tight">{member.name}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="text-brand-mid text-xs font-medium italic leading-relaxed">
          &ldquo;{member.tagline}&rdquo;
        </p>
        <p className="text-brand-body text-sm leading-relaxed line-clamp-3">{member.bio}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {member.badges.slice(0, 3).map((badge, i) => (
            <Badge key={badge} label={badge} index={i} />
          ))}
          {member.badges.length > 3 && (
            <span className="text-xs font-semibold text-brand-body bg-brand-bg px-2.5 py-1 rounded-full">
              +{member.badges.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-brand-border/60 mt-1">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${member.name}`}
          onClick={(e) => e.stopPropagation()}
          className="w-9 h-9 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors"
        >
          <Linkedin size={16} />
        </a>
        <button
          type="button"
          onClick={() => onOpen(member)}
          className="text-sm font-semibold text-brand-mid hover:text-brand-dark transition-colors flex items-center gap-1.5 group/btn"
        >
          Ver perfil completo
          <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  )
}

export default function EquipoFoundersSection(): React.JSX.Element {
  const [selected, setSelected] = useState<TeamMember | null>(null)
  const handleOpen = useCallback((member: TeamMember) => setSelected(member), [])
  const handleClose = useCallback(() => setSelected(null), [])

  return (
    <section id="equipo" className="bg-brand-bg py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>Equipo Fundador</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">
            Liderazgo que convierte visión en ejecución
          </h2>
          <p className="text-brand-body max-w-2xl mx-auto leading-relaxed">
            Un equipo fundador que integra agronegocio, tecnología, sostenibilidad y crecimiento.
            Perfiles complementarios con visión estratégica, criterio técnico y capacidad de ejecución real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {TEAM.map((member, index) => (
            <FounderCard key={member.id} member={member} onOpen={handleOpen} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true as const }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-brand-body/50 text-sm mt-12 tracking-wide"
        >
          Tecnología · Operación · Crecimiento
        </motion.p>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <FounderModal member={selected} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  )
}
