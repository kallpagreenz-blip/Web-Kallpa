'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Droplets, Leaf, Monitor, FlaskConical } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { PRODUCTS } from '@/data/products.data'
import type { Product } from '@/types'

const PRODUCT_ICONS: Record<string, React.ReactNode> = {
  'cupula-verde': <Home className="w-5 h-5 text-brand-mid" />,
  'sistema-hidroponico': <Droplets className="w-5 h-5 text-brand-mid" />,
  'lechuga-hidroponica': <Leaf className="w-5 h-5 text-brand-mid" />,
  'software-ambiental': <Monitor className="w-5 h-5 text-brand-mid" />,
  'greenlab': <FlaskConical className="w-5 h-5 text-brand-mid" />,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function ProductCard({ product }: { product: Product }): React.JSX.Element {
  const icon = PRODUCT_ICONS[product.slug] ?? <Home className="w-5 h-5 text-brand-mid" />

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl p-5 border border-brand-border hover:border-brand-mid hover:shadow-md transition-all duration-200"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-mid/10 mb-3">
        {icon}
      </div>
      <p className="text-xs text-brand-mid font-bold uppercase tracking-wide">
        {product.category}
      </p>
      <h3 className="text-lg font-bold text-brand-dark mt-2">{product.name}</h3>
      <p className="text-sm text-brand-body mt-1 line-clamp-2 leading-relaxed">
        {product.description}
      </p>
      <p className="text-brand-mid font-bold mt-3 text-sm">
        Desde {product.currency} {product.from.toLocaleString('es-PE')}
      </p>
      <Link
        href={`/soluciones/${product.slug}`}
        className="text-xs text-brand-mid hover:text-brand-green font-medium transition-colors duration-200 mt-1 inline-block"
      >
        Ver detalle →
      </Link>
    </motion.div>
  )
}

export default function ProductsPreviewSection(): React.JSX.Element {
  return (
    <section className="bg-brand-bg py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Catálogo Comercial · Agricultura Protegida</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-3">
              Nuestro producto principal: invernaderos que producen, protegen y escalan.
            </h2>
            <p className="text-brand-body max-w-xl">
              Hoy, nuestra oferta comercial central son los invernaderos de
              agricultura protegida. Diseñados para producir más con menos agua,
              menos riesgo y mayor rentabilidad.
            </p>
          </div>
          <Link
            href="/soluciones"
            className="shrink-0 text-brand-mid font-bold hover:text-brand-green transition-colors duration-200 whitespace-nowrap"
          >
            Ver todas las soluciones →
          </Link>
        </div>

        {/* Agricultura Protegida banner */}
        <div className="bg-brand-mid/10 border border-brand-mid/30 rounded-xl p-4 mb-8 flex items-center gap-4">
          <Home className="text-brand-mid w-8 h-8 flex-shrink-0" />
          <div>
            <p className="font-bold text-brand-dark">Agricultura Protegida</p>
            <p className="text-brand-body text-sm">
              Los invernaderos son nuestra infraestructura principal. Diseñados
              para pequeños productores, instituciones educativas y proyectos de
              escala comercial.
            </p>
          </div>
          <a
            href="/soluciones/cupula-verde"
            className="ml-auto text-brand-mid font-bold text-sm whitespace-nowrap hover:text-brand-green"
          >
            Ver catálogo →
          </a>
        </div>

        {/* Products grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
