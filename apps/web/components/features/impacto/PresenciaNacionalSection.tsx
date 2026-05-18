'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, MapPinOff } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import ProyectoModal from './ProyectoModal'
import PeruMapSVG from './PeruMapSVG'
import { REGIONES } from '@/data/presencia.data'
import { cn } from '@/lib/cn'
import type { ProyectoTerritorial, RegionTerritorial } from '@/data/presencia.data'

// ── Status helpers ────────────────────────────────────────

const STATUS_DOT: Record<string, string> = {
  activo:     'bg-emerald-500',
  desarrollo: 'bg-amber-400',
  piloto:     'bg-blue-400',
}

// ── Project Card ──────────────────────────────────────────

function ProyectoCard({
  proyecto,
  onClick,
}: {
  proyecto: ProyectoTerritorial
  onClick: () => void
}): React.JSX.Element {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      className="w-full text-left bg-brand-bg rounded-xl border border-brand-border p-4 flex items-start gap-3 hover:shadow-md hover:border-brand-mid/40 transition-all duration-200"
    >
      <span className={cn('w-2 h-2 rounded-full shrink-0 mt-1.5', STATUS_DOT[proyecto.estado])} />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-brand-dark font-bold text-sm leading-snug">{proyecto.titulo}</p>
          <ArrowRight className="w-4 h-4 text-brand-mid shrink-0 mt-0.5" />
        </div>
        <span className={cn('inline-block text-[11px] font-bold px-2 py-0.5 rounded-full mt-1.5', proyecto.typeBadgeColor)}>
          {proyecto.tipo}
        </span>
        <p className="text-brand-body text-xs mt-1.5 line-clamp-2 leading-relaxed">
          {proyecto.shortDescription}
        </p>
      </div>
    </motion.button>
  )
}

// ── Region Panel ──────────────────────────────────────────

function RegionPanel({
  region,
  onProyectoClick,
}: {
  region: RegionTerritorial
  onProyectoClick: (p: ProyectoTerritorial) => void
}): React.JSX.Element {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={region.id}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -8 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col gap-4"
      >
        {region.hasProjects ? (
          <>
            {/* Active region header */}
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-brand-mid shrink-0 mt-0.5" />
              <div>
                <h3 className="text-brand-dark font-bold text-xl">{region.nombre}</h3>
                <p className="text-brand-body text-sm mt-0.5">{region.summary}</p>
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-brand-mid">
              {region.proyectos.length} proyecto{region.proyectos.length !== 1 ? 's' : ''} en esta región
            </p>

            <div className="flex flex-col gap-3">
              {region.proyectos.map((proyecto) => (
                <ProyectoCard
                  key={proyecto.id}
                  proyecto={proyecto}
                  onClick={() => onProyectoClick(proyecto)}
                />
              ))}
            </div>
          </>
        ) : (
          /* Inactive region — elegant empty state */
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-2">
              <MapPinOff className="w-5 h-5 text-brand-body/50 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-brand-dark font-bold text-xl">{region.nombre}</h3>
                <p className="text-brand-body/60 text-sm mt-0.5">Sin proyectos activos aún</p>
              </div>
            </div>

            <div className="rounded-2xl border border-brand-border bg-brand-bg p-6 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-mid/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-mid/60" />
              </div>
              <div>
                <p className="text-brand-dark font-semibold text-sm">
                  Aún no operamos en {region.nombre}
                </p>
                <p className="text-brand-body text-xs mt-1.5 leading-relaxed max-w-xs mx-auto">
                  El sistema Kallpa está en expansión territorial activa. Esta región forma parte
                  de nuestra hoja de ruta de crecimiento hacia los próximos 12 meses.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-body/50">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 animate-pulse" />
                En exploración
              </div>
            </div>

            {/* Show active regions as suggestions */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-mid mb-3">
                Regiones con proyectos activos
              </p>
              <div className="flex flex-wrap gap-2">
                {REGIONES.filter((r) => r.hasProjects).map((r) => (
                  <span
                    key={r.id}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-brand-mid/10 text-brand-mid border border-brand-mid/20"
                  >
                    {r.nombre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

// ── Main Component ────────────────────────────────────────

export default function PresenciaNacionalSection(): React.JSX.Element {
  const [activeId, setActiveId] = useState<string>('lima')
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedProyecto, setSelectedProyecto] = useState<ProyectoTerritorial | null>(null)

  const activeRegion = REGIONES.find((r) => r.id === activeId) ?? REGIONES[0]
  const activeRegions = REGIONES.filter((r) => r.hasProjects)

  return (
    <section className="bg-brand-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel>Presencia Nacional</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-3">
            Donde el sistema Kallpa toma forma
          </h2>
          <p className="text-brand-body max-w-2xl text-base">
            Activos en 5 regiones del Perú con proyectos, pilotos y despliegues reales.
            Selecciona cualquier departamento para explorar el territorio.
          </p>
        </motion.div>

        {/* Mobile: region tabs (active only) */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 lg:hidden">
          {activeRegions.map((region) => (
            <button
              key={region.id}
              type="button"
              onClick={() => setActiveId(region.id)}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap border transition-all duration-200 shrink-0',
                region.id === activeId
                  ? 'bg-brand-mid text-white border-brand-mid'
                  : 'bg-white text-brand-body border-brand-border hover:border-brand-mid',
              )}
            >
              <MapPin className="w-3.5 h-3.5" />
              {region.nombre}
            </button>
          ))}
        </div>

        {/* Layout: map + panel */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">

          {/* Map — desktop sticky, mobile shown above panel */}
          <div className="hidden lg:block sticky top-24">
            <PeruMapSVG
              activeId={activeId}
              hoveredId={hoveredId}
              regions={REGIONES}
              onRegionClick={setActiveId}
              onRegionHover={setHoveredId}
            />
            <p className="text-center text-brand-body/40 text-xs mt-3">
              Toca cualquier departamento para explorar
            </p>
          </div>

          {/* Mobile map (compact) */}
          <div className="lg:hidden mb-2">
            <PeruMapSVG
              activeId={activeId}
              hoveredId={hoveredId}
              regions={REGIONES}
              onRegionClick={setActiveId}
              onRegionHover={setHoveredId}
            />
          </div>

          {/* Region panel */}
          <div className="lg:pt-2">
            <RegionPanel
              region={activeRegion}
              onProyectoClick={setSelectedProyecto}
            />
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-brand-body/50 text-sm italic"
        >
          Cada región cuenta una parte de nuestra historia en el territorio.
        </motion.p>

      </div>

      {/* Project modal */}
      <ProyectoModal
        proyecto={selectedProyecto}
        region={activeRegion}
        onClose={() => setSelectedProyecto(null)}
      />
    </section>
  )
}
