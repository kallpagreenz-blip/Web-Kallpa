import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import EjesEstrategicosSection from '@/components/features/soluciones/EjesEstrategicosSection'
import PlataformasDelSistema from '@/components/features/soluciones/PlataformasDelSistema'
import PilotosSection from '@/components/features/soluciones/PilotosSection'

export const metadata: Metadata = {
  title: 'Sistema Kallpa — Financiamiento, Productividad y Mercado Agrícola',
  description:
    'Kallpa conecta financiamiento, capacidad productiva y acceso a mercado en un sistema integrado diseñado para hacer crecer al agricultor rural de forma sostenible.',
}

// ── Infraestructura items ─────────────────────────────────

const INFRA_ITEMS = [
  {
    icon: '🏗️',
    title: 'Invernaderos y macrotúneles',
    desc: 'Macrotúneles, multitúneles y sistemas especiales para distintos contextos productivos y climáticos.',
  },
  {
    icon: '💧',
    title: 'Riego tecnificado',
    desc: 'Goteo, microaspersión y riego por cinta para maximizar eficiencia hídrica en cada cultivo.',
  },
  {
    icon: '🌱',
    title: 'Sistemas hidropónicos',
    desc: 'Producción sin suelo para alta densidad, menor consumo de agua y control total de condiciones.',
  },
  {
    icon: '📡',
    title: 'Monitoreo y sensores',
    desc: 'Temperatura, humedad, pH, CE y luz en tiempo real para tomar decisiones con datos reales.',
  },
  {
    icon: '👩‍🌾',
    title: 'Asistencia técnica',
    desc: 'Acompañamiento de campo, protocolos de manejo y resolución de problemas durante todo el ciclo.',
  },
  {
    icon: '📚',
    title: 'Capacitación y formación',
    desc: 'Módulos de formación técnica y empresarial para que el agricultor opere con autonomía real.',
  },
] as const

// ── Page ──────────────────────────────────────────────────

export default function SolucionesPage(): React.JSX.Element {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-[#152a16] to-brand-dark py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <SectionLabel className="text-brand-mid bg-brand-mid/20">
            Sistema Kallpa
          </SectionLabel>
          <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight">
            Un sistema integrado para corregir tres fallas estructurales del agro.
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">
            Kallpa conecta financiamiento, capacidad productiva y acceso a mercado en un solo sistema
            diseñado para hacer crecer al agricultor rural de forma sostenible.
          </p>
          <p className="text-brand-mid font-bold text-sm tracking-widest uppercase">
            Financiamiento · Productividad · Mercado
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <Button variant="accent" href="/#catalogo" size="lg">
              Ver catálogo de invernaderos
            </Button>
            <Button variant="outline" href="/contacto" size="lg">
              Hablar con el equipo
            </Button>
          </div>
        </div>
      </section>

      {/* Section A: Ejes Estratégicos */}
      <EjesEstrategicosSection />

      {/* Section B: Plataformas del Sistema */}
      <PlataformasDelSistema />

      {/* Section C: Infraestructura y Tecnología */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <SectionLabel>Infraestructura y Tecnología</SectionLabel>
            <h2 className="text-3xl font-bold text-brand-dark mt-4 mb-3">
              Los vehículos que hacen posible el sistema
            </h2>
            <p className="text-brand-body max-w-2xl text-base">
              No construimos tecnología aislada. Desplegamos infraestructura y herramientas para
              activar productividad real como parte del Eje 02 — Acompañamiento Agroproductivo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {INFRA_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-brand-bg rounded-2xl border border-brand-border p-5 flex gap-4"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-brand-dark font-bold text-sm mb-1">{item.title}</p>
                  <p className="text-brand-body text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-dark rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-base">Catálogo de invernaderos Kallpa</p>
              <p className="text-white/55 text-sm mt-0.5">
                Macrotúneles, multitúneles, hidroponía y modelos especiales.
              </p>
            </div>
            <Link
              href="/#catalogo"
              className="shrink-0 inline-flex items-center gap-2 bg-brand-accent hover:bg-yellow-400 text-brand-dark font-bold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-sm whitespace-nowrap"
            >
              Ver catálogo completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section D: Pilotos y Capacidades Demostradas */}
      <PilotosSection />

      {/* CTA final */}
      <section className="bg-brand-dark py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
          <h2 className="text-white font-bold text-3xl leading-tight">
            ¿Listo para explorar cómo Kallpa puede acompañarte?
          </h2>
          <p className="text-white/60">
            Ya sea financiamiento, infraestructura productiva o acceso a mercado:
            conversemos y encontremos juntos la ruta correcta.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="accent" href="/contacto" size="lg">
              Hablar con el equipo
            </Button>
            <Button variant="outline" href="/contacto?tipo=propuesta" size="lg">
              Solicitar propuesta agrícola
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
