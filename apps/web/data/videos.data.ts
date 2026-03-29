export interface VideoItem {
  id: string
  title: string
  youtubeId: string
  description: string
  project: string
  category: 'domos' | 'historia' | 'reigel' | 'naos' | 'general'
}

export const VIDEOS: VideoItem[] = [
  {
    id: 'domos-santa-anita',
    title: 'Domo Santa Anita – Historia del Proyecto',
    youtubeId: 'J27MoX0Bjq8',
    description: 'El primer domo de Kallpa en Santa Anita, Lima. Cómo comenzó todo y el impacto en la comunidad.',
    project: 'Domos para Educar',
    category: 'domos',
  },
  {
    id: 'domos-ate',
    title: 'Domos para Educar – Comas y Ate',
    youtubeId: 'D3G1Zo9VwZw',
    description: 'Instalación de domos en comunidades educativas vulnerables de Lima Este. Educación STEAM en acción.',
    project: 'Domos para Educar',
    category: 'domos',
  },
  {
    id: 'darwin-historia',
    title: 'Darwin cuenta la historia de Kallpa',
    youtubeId: 'pKYPS6Btijw',
    description: 'El co-fundador de Kallpa Greenz Leaders comparte el origen, la visión y el futuro del proyecto.',
    project: 'Historia Kallpa',
    category: 'historia',
  },
]

// Para agregar un nuevo video:
// 1. Obtén el ID de YouTube de la URL: youtube.com/watch?v=ESTE_ID
// 2. Agrega un nuevo objeto al array con el ID
// 3. El video aparecerá automáticamente en la sección de galería
