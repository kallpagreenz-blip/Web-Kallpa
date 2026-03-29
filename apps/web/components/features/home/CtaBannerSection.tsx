import Link from 'next/link'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

export default function CtaBannerSection(): React.JSX.Element {
  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <SectionLabel className="text-white/80 bg-white/10">
          Transformación Agrícola
        </SectionLabel>

        <h2 className="text-4xl font-bold text-white mt-4 mb-3">
          No vendemos solo invernaderos. Diseñamos condiciones para crecer.
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Ya sea que quieras cotizar un invernadero, implementar agricultura protegida,
          explorar alianzas o conocer nuestro modelo: conectemos y encontremos juntos la ruta correcta.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button variant="accent" href="/soluciones">
            Ver catálogo de invernaderos
          </Button>
          <Button variant="outline" href="/contacto?tipo=propuesta">
            Solicitar propuesta agrícola
          </Button>
          <Button variant="outline" href="/#modelo">
            Explorar nuestro modelo
          </Button>
          <Button variant="outline" href="/contacto?tipo=conversacion">
            Agendar una conversación
          </Button>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="text-white/50 text-sm mb-3">¿Prefieres escribirnos directo?</p>
          <Link
            href="https://wa.me/51925268236"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-accent font-bold hover:text-yellow-300 transition-colors duration-200"
          >
            <span className="text-lg">💬</span>
            WhatsApp: +51 925 268 236
          </Link>
        </div>
      </div>
    </section>
  )
}
