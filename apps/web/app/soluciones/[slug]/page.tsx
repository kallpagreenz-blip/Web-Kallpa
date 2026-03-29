import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import { PRODUCTS } from '@/data/products.data'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import type { ProductPlan } from '@/types'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams(): Array<{ slug: string }> {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = PRODUCTS.find((p) => p.slug === params.slug)

  if (!product) {
    return { title: 'Solución no encontrada – Kallpa Greenz' }
  }

  return {
    title: `${product.name} – Kallpa Greenz Leaders SA`,
    description: product.description,
  }
}

function PlanCard({ plan }: { plan: ProductPlan }): React.JSX.Element {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col gap-4 border-2 transition-all ${
        plan.highlighted
          ? 'border-brand-mid shadow-lg relative'
          : 'border-brand-border'
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-mid text-white text-xs font-bold px-4 py-1 rounded-full">
          Más popular
        </span>
      )}
      <h3 className="font-bold text-xl text-brand-dark">{plan.name}</h3>
      <p className="text-3xl font-bold text-brand-mid">
        USD {plan.price.toLocaleString('es-PE')}
      </p>
      <ul className="space-y-2 flex-1">
        {plan.specs.map((spec) => (
          <li key={spec} className="flex items-start gap-2 text-sm text-brand-body">
            <CheckCircle className="w-4 h-4 text-brand-mid flex-shrink-0 mt-0.5" />
            {spec}
          </li>
        ))}
      </ul>
      <Button variant={plan.highlighted ? 'primary' : 'ghost'} href="/contacto" className="w-full justify-center">
        Solicitar este plan
      </Button>
    </div>
  )
}

export default function ProductDetailPage({ params }: PageProps): React.JSX.Element {
  const product = PRODUCTS.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-24 text-center px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <SectionLabel>{product.category}</SectionLabel>
          <h1 className="text-white font-bold text-4xl leading-tight">{product.name}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{product.description}</p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-brand-dark font-bold text-3xl text-center mb-10">
            Beneficios Clave
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-brand-border shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-brand-mid flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-body font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-brand-dark font-bold text-3xl text-center mb-10">
            Elige tu plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              href="/soluciones"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              ← Ver todas las soluciones
            </Link>
          </div>
          <Button variant="accent" href="/contacto" size="lg">
            Solicitar información
          </Button>
        </div>
      </section>
    </main>
  )
}
