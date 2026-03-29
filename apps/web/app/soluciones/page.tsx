'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  Home,
  Droplets,
  Leaf,
  Monitor,
  FlaskConical,
} from 'lucide-react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { PRODUCTS } from '@/data/products.data'
import type { Product } from '@/types'

type IconKey = 'cupula-verde' | 'sistema-hidroponico' | 'lechuga-hidroponica' | 'software-ambiental' | 'greenlab'

const PRODUCT_ICONS: Record<IconKey, React.ReactNode> = {
  'cupula-verde':        <Home className="w-8 h-8 text-white" />,
  'sistema-hidroponico': <Droplets className="w-8 h-8 text-white" />,
  'lechuga-hidroponica': <Leaf className="w-8 h-8 text-white" />,
  'software-ambiental':  <Monitor className="w-8 h-8 text-white" />,
  greenlab:              <FlaskConical className="w-8 h-8 text-white" />,
}

const HEADER_GRADIENTS: Record<IconKey, string> = {
  'cupula-verde':        'from-brand-green to-brand-mid',
  'sistema-hidroponico': 'from-brand-mid to-brand-light',
  'lechuga-hidroponica': 'from-brand-green to-brand-light',
  'software-ambiental':  'from-brand-dark to-[#1e3a5f]',
  greenlab:              'from-[#1a4a6e] to-[#2a6496]',
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

function ProductCard({ product, index }: { product: Product; index: number }): React.JSX.Element {
  const slug = product.slug as IconKey
  const icon = PRODUCT_ICONS[slug] ?? <Home className="w-8 h-8 text-white" />
  const gradient = HEADER_GRADIENTS[slug] ?? 'from-brand-green to-brand-mid'

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="bg-white rounded-3xl border border-brand-border shadow-md hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden flex flex-col"
    >
      {/* Card header */}
      <div className={`bg-gradient-to-br ${gradient} p-8 flex flex-col items-center gap-3`}>
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-xs font-bold tracking-widest uppercase text-white/80 bg-white/10 px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="font-bold text-2xl text-brand-dark">{product.name}</h3>
        <p className="text-brand-body text-sm leading-relaxed">{product.description}</p>

        <ul className="space-y-2">
          {product.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-brand-body">
              <CheckCircle className="w-4 h-4 text-brand-mid flex-shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Plans preview */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {product.plans.map((plan) => (
            <span
              key={plan.name}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                plan.highlighted
                  ? 'bg-brand-mid text-white border-brand-mid'
                  : 'bg-brand-bg text-brand-dark border-brand-border'
              }`}
            >
              {plan.name} · {plan.currency} {plan.price.toLocaleString('es-PE')}
            </span>
          ))}
        </div>
      </div>

      {/* Card footer */}
      <div className="px-6 pb-6 flex items-center justify-between gap-4">
        <span className="text-brand-mid font-bold text-lg">
          Desde USD {product.from.toLocaleString('es-PE')}
        </span>
        <Link
          href={`/soluciones/${product.slug}`}
          className="inline-flex items-center gap-1 text-sm font-bold text-brand-mid hover:text-brand-green transition-colors"
        >
          Solicitar información →
        </Link>
      </div>
    </motion.div>
  )
}

export default function SolucionesPage(): React.JSX.Element {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-32 text-center px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <SectionLabel>Soluciones Kallpa</SectionLabel>
          <h1 className="text-white font-bold text-5xl leading-tight">
            Tecnología que se instala, se usa y se mide.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Desde cúpulas hasta software. Desde lechugas hasta kits educativos. Todo con propósito.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-bg py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-brand-dark font-bold text-3xl">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-brand-body text-lg">
            Diseñamos soluciones a medida para tu institución, empresa o comunidad.
          </p>
          <Button variant="primary" href="/contacto" size="lg">
            Habla con nuestro equipo
          </Button>
        </div>
      </section>
    </main>
  )
}
