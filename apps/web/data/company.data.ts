import type { Metric, TimelineItem, TeamMember, NavLink } from '@/types'

export const METRICS: Metric[] = [
  {
    id: 'volunteers',
    label: 'Voluntarios',
    value: 100,
    prefix: '+',
    description: 'Personas comprometidas con la misión',
  },
  {
    id: 'regions',
    label: 'Regiones del Perú',
    value: 5,
    description: 'Lima, Áncash, Junín, Cusco, Arequipa',
  },
  {
    id: 'years',
    label: 'Años de impacto',
    value: 4,
    description: 'Desde 2021 transformando espacios',
  },
  {
    id: 'children',
    label: 'Niños beneficiados',
    value: 2600,
    prefix: '+',
    description: 'Impacto directo en educación STEAM',
  },
  {
    id: 'water',
    label: 'Ahorro de agua',
    value: 90,
    suffix: '%',
    description: 'Comparado con agricultura convencional',
  },
  {
    id: 'co2',
    label: 'Toneladas CO₂ capturadas',
    value: 7,
    prefix: '+',
    description: 'Entre 2021 y 2024',
  },
]

export const TIMELINE: TimelineItem[] = [
  {
    id: '2021-start',
    year: 2021,
    title: 'Nacimiento: de voluntariado a visión',
    description:
      'Kallpa nace como voluntariado ambiental bajo Origami Group Perú. Construimos las primeras cúpulas en Santa Anita y Comas con cero financiamiento y mucha convicción.',
    milestone: true,
  },
  {
    id: '2021-lg',
    year: 2021,
    title: 'Ganadores LG Ambassador Challenge',
    description:
      'Reconocimiento internacional que valida nuestra propuesta de tecnología verde educativa frente a proyectos de todo el mundo.',
    milestone: true,
  },
  {
    id: '2022-pausa',
    year: 2022,
    title: 'Pausa forzada, visión intacta',
    description:
      'Sin financiamiento, el proyecto entra en pausa. Pero la comunidad permanece activa y la visión de Kallpa se mantiene más clara que nunca.',
    milestone: false,
  },
  {
    id: '2023-relaunch',
    year: 2023,
    title: 'Relanzamiento como Kallpa Greenz',
    description:
      'Renacemos con propuesta más sólida, enfoque más claro y mayor ambición. Kallpa Greenz toma forma como empresa de impacto.',
    milestone: true,
  },
  {
    id: '2024-embassy',
    year: 2024,
    title: 'Patrocinio Embajada de EE. UU.',
    description:
      'La Embajada de Estados Unidos en Perú reconoce y patrocina a Kallpa Greenz 2024–2025. Validación internacional de nuestro modelo.',
    milestone: true,
  },
  {
    id: '2024-biodomo',
    year: 2024,
    title: 'Primer biodomo tecnológico en escuela pública',
    description:
      'Inauguración del primer biodomo tecnológico en la I.E. Shuji Kitamura 101. Tecnología verde al servicio de la educación pública peruana.',
    milestone: true,
  },
  {
    id: '2024-formalizacion',
    year: 2024,
    title: 'Formalización de la empresa',
    description:
      'Kallpa Greenz Leaders SA se formaliza legalmente. De voluntariado a empresa con visión global y estructura empresarial sólida.',
    milestone: true,
  },
]

export const TEAM: TeamMember[] = [
  {
    id: 'darwin',
    name: 'Darwin',
    role: 'Co-fundador & CEO',
    bio: 'Visionario del proyecto y motor de la misión de Kallpa desde sus inicios en 2021.',
  },
  {
    id: 'fabricio',
    name: 'Fabricio',
    role: 'Co-fundador & CTO',
    bio: 'Pilar del desarrollo técnico y estratégico de la plataforma Kallpa Greenz.',
  },
  {
    id: 'araceli',
    name: 'Araceli',
    role: 'Co-fundadora & Directora Educativa',
    bio: 'Liderazgo en educación ambiental, programas STEAM y formación comunitaria.',
  },
  {
    id: 'andrea',
    name: 'Andrea',
    role: 'Co-fundadora & Alianzas',
    bio: 'Especialista en desarrollo de alianzas estratégicas y proyectos de impacto social.',
  },
  {
    id: 'carolay',
    name: 'Carolay',
    role: 'Co-fundadora & Comunicación',
    bio: 'Responsable de marca, comunicación e impacto narrativo de Kallpa Greenz.',
  },
  {
    id: 'gianella',
    name: 'Gianella',
    role: 'Co-fundadora & Operaciones',
    bio: 'Experta en operaciones, logística y gestión de proyectos productivos en campo.',
  },
]

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Proyectos',
    href: '/proyectos',
    children: [
      {
        label: 'Domos para Educar',
        href: '/proyectos/domos',
        description: 'Educación STEAM en espacios vivos',
      },
      {
        label: 'NAOS',
        href: '/proyectos/naos',
        description: 'Fotobiorreactores y captura de CO₂',
      },
      {
        label: 'REIGEL',
        href: '/proyectos/reigel',
        description: 'Modernización agrícola inteligente',
      },
    ],
  },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Impacto', href: '/impacto' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Quiénes Somos', href: '/nosotros' },
]

export const CONTACT_INFO = {
  phones:  ['+51 925 268 236', '+51 955 518 263'],
  email:   'kallpa.greenz@gmail.com',
  hours: {
    weekdays: 'Lunes a Viernes: 9:00 – 20:00',
    saturday: 'Sábado: 9:00 – 15:00',
  },
  regions: ['Lima', 'Áncash', 'Junín', 'Cusco', 'Arequipa'],
}
