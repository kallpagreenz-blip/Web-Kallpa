import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Kallpa Greenz Leaders SA',
    template: '%s | Kallpa Greenz',
  },
  description:
    'Tecnología verde que enseña, produce y regenera. Biodomos educativos, fotobiorreactores NAOS y agricultura inteligente REIGEL en el Perú.',
  keywords: [
    'biodomos',
    'educación STEAM',
    'tecnología verde',
    'agricultura sostenible',
    'Perú',
    'NAOS',
    'REIGEL',
    'impacto ambiental',
  ],
  authors: [{ name: 'Kallpa Greenz Leaders SA' }],
  creator: 'Kallpa Greenz Leaders SA',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    siteName: 'Kallpa Greenz Leaders SA',
    title: 'Kallpa Greenz Leaders SA',
    description:
      'Tecnología verde que enseña, produce y regenera. Biodomos educativos, fotobiorreactores NAOS y agricultura inteligente REIGEL en el Perú.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kallpa Greenz Leaders SA',
    description: 'Tecnología verde que enseña, produce y regenera.',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={raleway.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
