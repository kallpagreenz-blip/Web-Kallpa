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
    name: 'Darwin Díaz',
    role: 'CEO',
    tagline: 'Convierte visión en estructura productiva',
    bio: 'Ingeniero agroindustrial con experiencia en innovación de producto, eficiencia operativa y construcción de soluciones escalables para el sector agro.',
    expandedBio: 'CEO y co-fundador de Kallpa, Darwin combina formación en ingeniería agroindustrial (UNMSM) con una visión estratégica orientada a la innovación aplicada y el escalamiento. Su experiencia incluye la co-fundación de Nutriera y la aplicación de metodologías Lean Six Sigma Black Belt en el diseño de procesos productivos. Lidera la dirección ejecutiva con criterio técnico, sentido de negocio y enfoque en desarrollo de producto con impacto real.',
    badges: ['Strategy', 'Agri-innovation', 'Product', 'Lean Six Sigma', 'Operations'],
    linkedin: 'https://www.linkedin.com/in/darwin-diazc/',
    photoUrl: '/images/equipo/darwin.jpeg',
  },
  {
    id: 'fabricio',
    name: 'Fabricio Ferro',
    role: 'CTO',
    tagline: 'Tecnología con sentido territorial y ambiental',
    bio: 'Ingeniero ambiental con experiencia en gestión de proyectos, sostenibilidad aplicada y articulación entre impacto técnico y comunidades rurales.',
    expandedBio: 'CTO y co-fundador de Kallpa, Fabricio lidera el componente técnico con una perspectiva que integra ingeniería ambiental, gestión de proyectos y educación. Su enfoque conecta sostenibilidad real con implementación práctica, asegurando que cada solución técnica tenga impacto medible en el territorio. Combina rigor técnico con una mirada social que orienta el desarrollo de infraestructura y tecnología agrícola adaptada al contexto local.',
    badges: ['Sustainability', 'Project Management', 'Environmental Systems', 'Social Impact', 'Technical Leadership'],
    linkedin: 'https://www.linkedin.com/in/fabricioferrol22/',
    photoUrl: '/images/equipo/fabricio.jpeg',
  },
  {
    id: 'godfrey',
    name: 'Godfrey Mancha',
    role: 'COO',
    tagline: 'Escala ideas hacia mercados más amplios',
    bio: 'Constructor de ecosistemas de innovación con experiencia en venture development, transferencia tecnológica y operaciones de crecimiento en AgriTech.',
    expandedBio: 'COO y co-fundador de Kallpa, Godfrey tiene trayectoria en construcción de ecosistemas de innovación, growth y venture development. Con formación en Administración de Empresas en la PUCP y experiencia en co-fundación de empresas en AI y AgriTech, lidera la operación estratégica y la expansión de Kallpa más allá de mercados locales. Su enfoque conecta innovación, transferencia tecnológica y escalabilidad para convertir ideas en soluciones con proyección real.',
    badges: ['Growth', 'Venture', 'Tech Transfer', 'Operations', 'Innovation Ecosystems'],
    linkedin: 'https://www.linkedin.com/in/goodfrey-mancha-ovalle-aa92a0207/?skipRedirect=true',
    photoUrl: '/images/equipo/godfrey.jpeg',
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
