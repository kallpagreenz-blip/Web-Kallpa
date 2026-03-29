'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { PROJECTS } from '@/data/projects.data'
import { cn } from '@/lib/cn'
import type { Project, ProjectStatus } from '@/types'

interface ProjectCardConfig {
  gradientClass: string
}

const PROJECT_CARD_CONFIG: Record<string, ProjectCardConfig> = {
  domos: {
    gradientClass: 'bg-gradient-to-br from-brand-green to-brand-mid',
  },
  naos: {
    gradientClass: 'bg-gradient-to-br from-[#1a4a6e] to-[#2d7aad]',
  },
  reigel: {
    gradientClass: 'bg-gradient-to-br from-[#5a3a1a] to-[#9c6420]',
  },
}

const STATUS_CLASSES: Record<ProjectStatus, string> = {
  activo: 'bg-brand-accent text-brand-dark',
  desarrollo: 'bg-blue-100 text-blue-700',
  completado: 'bg-gray-100 text-gray-600',
}

const STATUS_LABELS: Record<ProjectStatus, string> = {
  activo: 'Activo',
  desarrollo: 'En desarrollo',
  completado: 'Completado',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

function ProjectCard({ project }: { project: Project }): React.JSX.Element {
  const config = PROJECT_CARD_CONFIG[project.slug] ?? {
    gradientClass: 'bg-gradient-to-br from-brand-green to-brand-mid',
  }
  const firstMetric = project.metrics[0]

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-lg transition-shadow duration-300"
    >
      {/* Card header */}
      <div className={cn('relative h-48 flex flex-col justify-end p-6', config.gradientClass)}>
        <span
          className={cn(
            'absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full',
            STATUS_CLASSES[project.status],
          )}
        >
          {STATUS_LABELS[project.status]}
        </span>
        <h3 className="text-white font-bold text-2xl leading-tight">{project.name}</h3>
        <p className="text-white/80 text-sm mt-1">{project.tagline}</p>
      </div>

      {/* Card body */}
      <div className="p-6">
        <SectionLabel className="text-xs">{project.category}</SectionLabel>

        <p className="text-brand-body text-sm mt-3 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {firstMetric && (
          <div className="mt-4 pt-4 border-t border-brand-border/60">
            <p className="text-2xl font-bold text-brand-dark">{firstMetric.value}</p>
            <p className="text-brand-body text-xs mt-0.5">{firstMetric.label}</p>
          </div>
        )}

        <Link
          href={`/proyectos/${project.slug}`}
          className="inline-block mt-4 text-brand-mid font-bold hover:text-brand-green transition-colors duration-200"
        >
          Ver caso de estudio →
        </Link>
      </div>
    </motion.div>
  )
}

export default function ProjectLinesSection(): React.JSX.Element {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>Proyectos · Evidencia de Ejecución</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-3">
            Proyectos que respaldan nuestra visión.
          </h2>
          <p className="text-brand-body max-w-2xl mx-auto">
            No solo describimos lo que podemos hacer. Lo hemos instalado,
            documentado y medido. Estos proyectos son la evidencia de nuestra
            capacidad de ejecución.
          </p>
        </div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
