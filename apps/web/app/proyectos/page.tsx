import type { Metadata } from 'next'
import type { Project } from '@/types'
import { PROJECTS } from '@/data/projects.data'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Proyectos — Kallpa Greenz',
  description:
    'Domos para Educar, NAOS y REIGEL: tres proyectos de tecnología verde con impacto real en el Perú.',
}

const projectGradients: Record<string, string> = {
  domos: 'from-brand-green to-brand-mid',
  naos: 'from-[#1a4a6e] to-[#2d7aad]',
  reigel: 'from-[#5a3a1a] to-[#9c6420]',
}

const projectKeyStat: Record<string, string> = {
  domos: '+2,600 niños beneficiados',
  naos: '0.5 ton CO₂ / unidad / año',
  reigel: 'ROI en 12–14 meses',
}

interface ProjectShowcaseCardProps {
  project: Project
  reversed: boolean
}

function ProjectShowcaseCard({
  project,
  reversed,
}: ProjectShowcaseCardProps): React.JSX.Element {
  const gradient = projectGradients[project.id] ?? 'from-brand-green to-brand-mid'
  const keyStat = projectKeyStat[project.id] ?? ''

  const visual = (
    <div
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-12 flex flex-col items-center justify-center text-white text-center min-h-[320px]`}
    >
      <span className="text-5xl font-black tracking-tight mb-4">
        {project.name}
      </span>
      <span className="text-white/80 text-lg font-medium">{keyStat}</span>
    </div>
  )

  const content = (
    <div className="flex flex-col justify-center space-y-5">
      <SectionLabel>{project.category}</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
        {project.name}
      </h2>
      <p className="italic text-brand-body text-lg">{project.tagline}</p>
      <p className="text-brand-body leading-relaxed">{project.description}</p>
      <div className="grid grid-cols-3 gap-3">
        {project.metrics.slice(0, 3).map((m) => (
          <div
            key={m.label}
            className="bg-brand-bg border border-brand-border rounded-xl p-3 text-center"
          >
            <p className="text-brand-mid font-bold text-sm">{m.value}</p>
            <p className="text-brand-body text-xs mt-0.5 leading-tight">
              {m.label}
            </p>
          </div>
        ))}
      </div>
      <div>
        <Button href={`/proyectos/${project.slug}`} variant="primary">
          Ver caso completo →
        </Button>
      </div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-16 px-6">
      {reversed ? (
        <>
          {content}
          {visual}
        </>
      ) : (
        <>
          {visual}
          {content}
        </>
      )}
    </div>
  )
}

export default function ProyectosPage(): React.JSX.Element {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-32 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <SectionLabel className="bg-white/10 text-white">
            Proyectos
          </SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Tres proyectos. Una misión.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Educación STEAM, biotecnología urbana y agroindustria inteligente.
            Cada proyecto resuelve un problema real con tecnología verde de
            impacto demostrado.
          </p>
        </div>
      </section>

      {/* Project showcase cards */}
      <div className="divide-y divide-brand-border">
        {PROJECTS.map((project: Project, index: number) => (
          <section key={project.id} className="bg-white">
            <ProjectShowcaseCard project={project} reversed={index % 2 !== 0} />
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-brand-bg py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <SectionLabel>Trabaja con nosotros</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
            ¿Tu institución, empresa o comunidad necesita una solución
            personalizada?
          </h2>
          <p className="text-brand-body">
            Diseñamos e implementamos ecosistemas verdes a medida. Cuéntanos tu
            desafío.
          </p>
          <Button href="/contacto" variant="primary" size="lg">
            Hablemos de tu proyecto
          </Button>
        </div>
      </section>
    </main>
  )
}
