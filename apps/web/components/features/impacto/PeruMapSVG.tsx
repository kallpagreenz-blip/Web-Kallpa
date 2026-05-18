'use client'

import { cn } from '@/lib/cn'
import type { RegionTerritorial } from '@/data/presencia.data'
import { DEPTS } from '@/data/peru-depts.generated'

// ── Types ─────────────────────────────────────────────────

interface PeruMapSVGProps {
  activeId: string
  hoveredId: string | null
  regions: RegionTerritorial[]
  onRegionClick: (id: string) => void
  onRegionHover: (id: string | null) => void
}

// ── Color helpers ─────────────────────────────────────────

function getFill(
  id: string,
  activeId: string,
  hoveredId: string | null,
  hasProjects: boolean,
): string {
  if (id === activeId) return '#4ade80'
  if (id === hoveredId) return hasProjects ? '#86efac' : '#2e5438'
  if (hasProjects) return '#1d6030'
  return '#1a3222'
}

function getStroke(id: string, activeId: string, hoveredId: string | null): string {
  if (id === activeId || id === hoveredId) return '#4ade80'
  return '#3d7050'
}

function getStrokeWidth(id: string, activeId: string, hoveredId: string | null): number {
  if (id === activeId) return 1.8
  if (id === hoveredId) return 1.5
  return 0.9
}

// ── Component ─────────────────────────────────────────────

export default function PeruMapSVG({
  activeId,
  hoveredId,
  regions,
  onRegionClick,
  onRegionHover,
}: PeruMapSVGProps): React.JSX.Element {
  const regionMap = new Map(regions.map((r) => [r.id, r]))

  return (
    <div className="relative flex items-center justify-center w-full select-none">
      <svg
        viewBox="0 0 760 880"
        className="w-full max-w-[280px] lg:max-w-none lg:h-[520px]"
        aria-label="Mapa del Perú — selecciona una región para explorar proyectos"
        style={{ filter: 'drop-shadow(0 6px 32px rgba(0,0,0,0.5))' }}
      >
        <defs>
          {/* Ocean background gradient */}
          <radialGradient id="oceanGrad" cx="40%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#0d1f13" />
            <stop offset="100%" stopColor="#061209" />
          </radialGradient>

          {/* Active region glow */}
          <filter id="glowActive" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Hover region glow */}
          <filter id="glowHover" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="760" height="880" fill="url(#oceanGrad)" rx="8" />

        {/* Department paths */}
        {DEPTS.map((dept) => {
          const region = regionMap.get(dept.id)
          const hasProjects = region?.hasProjects ?? false
          const isActive = dept.id === activeId
          const isHovered = dept.id === hoveredId

          return (
            <g
              key={dept.id}
              role="button"
              tabIndex={0}
              aria-label={`${dept.nombre}${hasProjects ? '' : ' — sin proyectos activos'}`}
              aria-pressed={isActive}
              onClick={() => onRegionClick(dept.id)}
              onMouseEnter={() => onRegionHover(dept.id)}
              onMouseLeave={() => onRegionHover(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onRegionClick(dept.id)
                }
              }}
              style={{ cursor: 'pointer' }}
              filter={isActive ? 'url(#glowActive)' : isHovered ? 'url(#glowHover)' : undefined}
            >
              {/* Main fill */}
              <path
                d={dept.path}
                fill={getFill(dept.id, activeId, hoveredId, hasProjects)}
                stroke={getStroke(dept.id, activeId, hoveredId)}
                strokeWidth={getStrokeWidth(dept.id, activeId, hoveredId)}
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{ transition: 'fill 0.2s ease, stroke 0.2s ease, stroke-width 0.15s ease' }}
              />

              {/* Active pulse ring */}
              {isActive && hasProjects && (
                <path
                  d={dept.path}
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="2.5"
                  opacity="0.5"
                  style={{ pointerEvents: 'none' }}
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0.1;0.5"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-width"
                    values="2.5;4;2.5"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>
              )}

              {/* Project presence dot */}
              {hasProjects && !isActive && (
                <circle
                  cx={dept.labelX}
                  cy={dept.labelY}
                  r={isHovered ? 5 : 3.5}
                  fill={isHovered ? '#86efac' : '#4ade80'}
                  opacity={isHovered ? 1 : 0.8}
                  style={{ pointerEvents: 'none', transition: 'r 0.15s ease, opacity 0.15s ease' }}
                />
              )}

              {/* Active indicator */}
              {isActive && (
                <circle
                  cx={dept.labelX}
                  cy={dept.labelY}
                  r="5"
                  fill="#052e16"
                  style={{ pointerEvents: 'none' }}
                />
              )}

              {/* Label — shown on hover or active */}
              {(isActive || isHovered) && (
                <text
                  x={dept.labelX}
                  y={dept.labelY - 10}
                  fontSize={dept.nombre.length > 9 ? '9' : '10'}
                  fontWeight="700"
                  fill={isActive ? '#052e16' : '#d1fae5'}
                  textAnchor="middle"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {dept.nombre}
                </text>
              )}
            </g>
          )
        })}

        {/* Active region pulse ring */}
        {(() => {
          const activeDept = DEPTS.find((d) => d.id === activeId)
          const activeRegion = regionMap.get(activeId)
          if (!activeDept || !activeRegion?.hasProjects) return null
          return (
            <g style={{ pointerEvents: 'none' }}>
              <circle
                cx={activeDept.labelX}
                cy={activeDept.labelY}
                r="20"
                fill="#4ade80"
                opacity="0.12"
              >
                <animate attributeName="r" values="16;26;16" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.12;0.03;0.12" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
          )
        })()}
      </svg>

      {/* Hover tooltip */}
      {hoveredId !== null && hoveredId !== activeId && (
        <div
          className={cn(
            'absolute bottom-2 left-1/2 -translate-x-1/2',
            'bg-[#0d1f13]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full',
            'border border-[#2a4a32]/50 backdrop-blur-sm whitespace-nowrap pointer-events-none',
            'transition-opacity duration-150 shadow-lg',
          )}
        >
          {DEPTS.find((d) => d.id === hoveredId)?.nombre ?? hoveredId}
          {!regionMap.get(hoveredId)?.hasProjects && (
            <span className="ml-1.5 text-white/50 font-normal">· sin proyectos</span>
          )}
        </div>
      )}
    </div>
  )
}
