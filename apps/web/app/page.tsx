import HeroSection from '@/components/features/home/HeroSection'
import ModeloKallpaSection from '@/components/features/home/ModeloKallpaSection'
import ProductsPreviewSection from '@/components/features/home/ProductsPreviewSection'
import ImpactIntegratedSection from '@/components/features/home/ImpactIntegratedSection'
import ProjectLinesSection from '@/components/features/home/ProjectLinesSection'
import CtaBannerSection from '@/components/features/home/CtaBannerSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kallpa Greenz — Empresa Social para la Agricultura Rural Sostenible',
  description: 'Transformamos agricultura rural en oportunidades productivas. Invernaderos, tecnología, financiamiento y acompañamiento para pequeños agricultores del Perú.',
}

export default function HomePage(): React.JSX.Element {
  return (
    <main>
      <HeroSection />
      <ModeloKallpaSection />
      <ProductsPreviewSection />
      <ImpactIntegratedSection />
      <ProjectLinesSection />
      <CtaBannerSection />
    </main>
  )
}
