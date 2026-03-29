import HeroSection from '@/components/features/home/HeroSection'
import ModeloKallpaSection from '@/components/features/home/ModeloKallpaSection'
import CatalogoInvernaderosSection from '@/components/features/home/CatalogoInvernaderosSection'
import ImpactIntegratedSection from '@/components/features/home/ImpactIntegratedSection'
import ProjectLinesSection from '@/components/features/home/ProjectLinesSection'
import CtaBannerSection from '@/components/features/home/CtaBannerSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kallpa Greenz — Invernaderos y Agricultura Protegida en el Perú',
  description: 'Catálogo de invernaderos, macrotúneles y multitúneles para agricultura protegida. Transformamos la agricultura rural con tecnología, financiamiento y acompañamiento.',
}

export default function HomePage(): React.JSX.Element {
  return (
    <main>
      <HeroSection />
      <ModeloKallpaSection />
      <CatalogoInvernaderosSection />
      <ImpactIntegratedSection />
      <ProjectLinesSection />
      <CtaBannerSection />
    </main>
  )
}
