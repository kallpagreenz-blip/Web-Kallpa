'use client'

import { useState } from 'react'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'
import SectionLabel from '@/components/ui/SectionLabel'
import type { GalleryCategory } from '@/types'

const FILTER_TABS: Array<{ label: string; value: GalleryCategory }> = [
  { label: 'Todos',  value: 'todos' },
  { label: 'Domos',  value: 'domos' },
  { label: 'NAOS',   value: 'naos' },
  { label: 'REIGEL', value: 'reigel' },
  { label: 'Equipo', value: 'equipo' },
]

interface PlaceholderCard {
  label: string
  gradient: string
  category: Exclude<GalleryCategory, 'todos'>
}

const PLACEHOLDER_CARDS: PlaceholderCard[] = [
  { label: 'Proyecto Domos',     gradient: 'from-brand-dark to-brand-green',  category: 'domos' },
  { label: 'Proyecto Domos',     gradient: 'from-brand-green to-brand-mid',   category: 'domos' },
  { label: 'Proyecto Domos',     gradient: 'from-brand-mid to-brand-light',   category: 'domos' },
  { label: 'Proyecto NAOS',      gradient: 'from-[#1a3a5c] to-[#2a5a8c]',    category: 'naos' },
  { label: 'Proyecto NAOS',      gradient: 'from-[#1e4470] to-[#306090]',    category: 'naos' },
  { label: 'Proyecto NAOS',      gradient: 'from-[#163050] to-[#254a78]',    category: 'naos' },
  { label: 'Proyecto REIGEL',    gradient: 'from-brand-dark to-[#2a5c1a]',   category: 'reigel' },
  { label: 'Proyecto REIGEL',    gradient: 'from-[#1e4a10] to-brand-mid',    category: 'reigel' },
  { label: 'Equipo Kallpa',      gradient: 'from-[#3a2a10] to-[#7a5a20]',    category: 'equipo' },
  { label: 'Invernadero Comercial', gradient: 'from-brand-green to-brand-dark', category: 'reigel' },
  { label: 'Comunidad Rural',    gradient: 'from-[#4a2e10] to-[#8a5a20]',    category: 'equipo' },
  { label: 'Monitoreo Digital',  gradient: 'from-brand-dark to-[#0a3a6a]',   category: 'reigel' },
]

export default function GaleriaPage(): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('todos')

  const filteredCards =
    activeFilter === 'todos'
      ? PLACEHOLDER_CARDS
      : PLACEHOLDER_CARDS.filter((c) => c.category === activeFilter)

  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-24 text-center text-white px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <SectionLabel>Galería y Evidencias</SectionLabel>
          <h1 className="font-bold text-4xl leading-tight">
            Evidencia real de cada proyecto.
          </h1>
          <p className="text-white/70 text-lg">
            Fotografías, videos y documentación de nuestro trabajo en campo.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Videos</SectionLabel>
          <h2 className="text-brand-dark font-bold text-3xl mb-2">Videos del Proyecto</h2>
          <p className="text-brand-body mb-8">Mira de primera mano cómo trabaja Kallpa en campo.</p>

          {/* Featured video */}
          <div className="mb-8">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <YouTubeEmbed
                  videoId="J27MoX0Bjq8"
                  title="Domo Santa Anita – Historia del Proyecto"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-brand-mid text-xs font-bold uppercase tracking-widest">Destacado</span>
                <h3 className="text-brand-dark font-bold text-xl mt-2 mb-3">
                  Domo Santa Anita – Historia del Proyecto
                </h3>
                <p className="text-brand-body text-sm">
                  El primer domo de Kallpa en Santa Anita, Lima. Cómo comenzó todo y el impacto en la comunidad.
                </p>
                <span className="mt-3 text-xs text-brand-body/60">Domos para Educar</span>
              </div>
            </div>
          </div>

          {/* Secondary videos grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <YouTubeEmbed
                videoId="D3G1Zo9VwZw"
                title="Domos para Educar – Comas y Ate"
              />
              <div>
                <p className="font-bold text-brand-dark text-sm">Domos para Educar – Comas y Ate</p>
                <p className="text-brand-body text-xs mt-1">
                  Instalación de domos en comunidades educativas vulnerables de Lima Este. Educación STEAM en acción.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <YouTubeEmbed
                videoId="pKYPS6Btijw"
                title="Darwin cuenta la historia de Kallpa"
              />
              <div>
                <p className="font-bold text-brand-dark text-sm">Darwin cuenta la historia de Kallpa</p>
                <p className="text-brand-body text-xs mt-1">
                  El co-fundador de Kallpa Greenz Leaders comparte el origen, la visión y el futuro del proyecto.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-8 p-4 bg-brand-bg rounded-xl text-sm text-brand-body">
            💡 Para agregar nuevos videos: edita el archivo <code>data/videos.data.ts</code> y agrega el ID de YouTube. Los videos aparecerán automáticamente.
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-brand-bg py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-brand-dark font-bold text-3xl mb-2">Fotos del Proyecto</h2>
          <p className="text-brand-body mb-6">
            Próximamente: galería fotográfica de invernaderos, comunidades rurales, implementaciones técnicas y más.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeFilter === tab.value
                    ? 'bg-brand-mid text-white'
                    : 'bg-white text-brand-body border border-brand-border hover:border-brand-mid hover:text-brand-mid'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {filteredCards.map((card, i) => (
              <div
                key={`${card.category}-${i}`}
                className={`aspect-video bg-gradient-to-br ${card.gradient} rounded-xl hover:opacity-90 transition-opacity duration-200 relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white/80 text-xs font-bold tracking-wide uppercase bg-black/30 px-3 py-1 rounded-full">
                    {card.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-brand-dark py-8 text-center px-4">
        <p className="text-white/60 text-sm max-w-2xl mx-auto">
          Próximamente: Galería completa con fotografías de invernaderos, comunidades rurales, instalaciones y acompañamiento técnico en campo. Para solicitar material gráfico:{' '}
          <a href="mailto:kallpa.greenz@gmail.com" className="text-brand-accent hover:underline">
            kallpa.greenz@gmail.com
          </a>
        </p>
      </section>
    </main>
  )
}
