import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import PasoSection from '@/components/features/agrofranquicias/PasoSection'
import BeneficiosSection from '@/components/features/agrofranquicias/BeneficiosSection'
import PresenciaNacionalSection from '@/components/features/impacto/PresenciaNacionalSection'

export const metadata: Metadata = {
  title: 'Agrofranquicias Kallpa — Infraestructura, Acompañamiento y Mercado',
  description:
    'Kallpa instala infraestructura agrícola de alta calidad, acompaña toda la cadena de valor y conecta al productor con mercados de mayor precio. Todo bajo un sistema probado.',
}

export default function AgrofranquiciasPage(): React.JSX.Element {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-[#162a17] to-[#1e3d1a] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-mid/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <SectionLabel className="text-brand-mid bg-brand-mid/20 w-fit">
              🌿 Agrofranquicias Kallpa
            </SectionLabel>
            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight">
              Tu campo, con respaldo real.
              <br />
              <span className="text-brand-accent">Tu producción, con mercado.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Kallpa instala infraestructura de alta calidad, acompaña todo el proceso productivo
              y conecta al agricultor con mercados de mayor valor. No es solo un invernadero:
              es un sistema completo que trabaja contigo.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button variant="accent" href="/contacto" size="lg">
                Quiero una agrofranquicia
              </Button>
              <Button variant="outline" href="#como-funciona" size="lg">
                Ver cómo funciona
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 mt-4">
              {[
                { valor: '6', label: 'Agrofranquicias activas' },
                { valor: '4', label: 'Regiones del Perú' },
                { valor: '90%', label: 'Ahorro de agua' },
                { valor: '12–14 m', label: 'ROI proyectado' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-brand-accent font-bold text-2xl">{stat.valor}</span>
                  <span className="text-white/50 text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qué es una agrofranquicia */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>El concepto</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-5 leading-tight">
              Una agrofranquicia no es un proyecto. Es una alianza productiva.
            </h2>
            <p className="text-brand-body leading-relaxed mb-4">
              El agricultor tiene la tierra. Kallpa aporta la infraestructura, el sistema, el acompañamiento y los mercados. Juntos estructuran un modelo productivo viable, con inversión protegida y retorno real.
            </p>
            <p className="text-brand-body leading-relaxed">
              A diferencia de un proyecto de donación o un crédito bancario, una agrofranquicia Kallpa no te deja solo después de la instalación. Nos quedamos: monitoreamos, ajustamos, vendemos juntos y construimos marca contigo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icono: '🌾', titulo: 'Infraestructura instalada', desc: 'Invernaderos y sistemas de riego de alta calidad, listos para producir.' },
              { icono: '🤝', titulo: 'Acompañamiento real', desc: 'Soporte técnico, capacitación y seguimiento durante todo el ciclo.' },
              { icono: '📈', titulo: 'Retorno viable', desc: 'ROI proyectado de 12 a 14 meses con sistema optimizado.' },
              { icono: '🏪', titulo: 'Acceso a mercado', desc: 'Conexión con canales de comercialización de mayor valor y precio.' },
            ].map((item) => (
              <div
                key={item.titulo}
                className="bg-brand-bg rounded-2xl border border-brand-border p-5"
              >
                <span className="text-3xl block mb-3">{item.icono}</span>
                <p className="font-bold text-brand-dark text-sm mb-1.5">{item.titulo}</p>
                <p className="text-brand-body text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <div id="como-funciona">
        <PasoSection />
      </div>

      {/* Beneficios + modelo de valor + marca propia */}
      <BeneficiosSection />

      {/* Mapa interactivo */}
      <PresenciaNacionalSection />

      {/* CTA final */}
      <section className="bg-brand-dark py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="text-4xl">🌿</span>
          <h2 className="text-white font-bold text-3xl leading-tight">
            ¿Listo para explorar tu agrofranquicia?
          </h2>
          <p className="text-white/60 text-lg">
            Cuéntanos de tu terreno, tu contexto y tus objetivos. Nosotros hacemos el diagnóstico y te proponemos el modelo que tiene más sentido para ti.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="accent" href="/contacto" size="lg">
              Comenzar con un diagnóstico
            </Button>
            <Button variant="outline" href="/consultores" size="lg">
              Hablar con un consultor
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
