// ── Types ─────────────────────────────────────────────────

export type EstadoProyecto = 'activo' | 'desarrollo' | 'piloto'

export interface ProyectoTerritorial {
  id: string
  titulo: string
  tipo: string
  typeBadgeColor: string
  shortDescription: string
  fullDescription: string
  queSeHizo: string[]
  impacto: string
  imagenes: string[]
  linkProyecto?: string
  linkLabel?: string
  estado: EstadoProyecto
}

export interface RegionTerritorial {
  id: string
  nombre: string
  /** Whether this region has active projects */
  hasProjects: boolean
  summary: string
  proyectos: ProyectoTerritorial[]
}

// ── Image constants ───────────────────────────────────────

const IMG = {
  basic:    '/images/invernaderos/MACROTUNEL-BASIC-e1729090151207.jpg.webp',
  forte:    '/images/invernaderos/MACROTUNEL-FORTE-e1729160406795.jpg.webp',
  plus:     '/images/invernaderos/MACROTUNEL-PLUS-e1729161471686.jpg.webp',
  gotico:   '/images/invernaderos/MACROTUNEL-GOTICO-Vista-3d-e1729161815833.jpg.webp',
  premium:  '/images/invernaderos/MACROTUNEL-PREMIUM-Vista-3d.jpg.webp',
  multi:    '/images/invernaderos/MULTITUNEL-3D-e1729161986482.jpg.webp',
  gotico3d: '/images/invernaderos/PLANO-3D-GOTICO-PARA-WEB-Modelo-2048x1447.jpg.webp',
  almacen:  '/images/invernaderos/PLANO-ALMACEN-PARA-WEB-2048x1447.jpg.webp',
  garden:   '/images/invernaderos/GARDEN-A-DOS-AGUAS-PARA-WEB-2048x1447.jpg.webp',
} as const

// ── Active Regions (with projects) ───────────────────────

const ACTIVE_REGIONS: RegionTerritorial[] = [
  {
    id: 'lima',
    nombre: 'Lima',
    hasProjects: true,
    summary: 'Sede central y múltiples proyectos educativos activos',
    proyectos: [
      {
        id: 'domo-santa-anita',
        titulo: 'Domo Verde – Santa Anita',
        tipo: 'Educación STEAM',
        typeBadgeColor: 'bg-emerald-100 text-emerald-700',
        shortDescription: 'Laboratorio vivo instalado en institución educativa de Santa Anita.',
        fullDescription:
          'Una de las primeras cúpulas verdes de Kallpa en Lima. Transformó un espacio institucional en un laboratorio STEAM activo donde estudiantes aprenden biología, química y sostenibilidad mediante experiencias prácticas con hidroponía, sensores y monitoreo ambiental.',
        queSeHizo: [
          'Diseño e instalación de cúpula hidropónica',
          'Sistema de sensores ambientales completo',
          'Talleres STEAM para estudiantes y docentes',
          'Acompañamiento técnico y seguimiento',
        ],
        impacto: 'Más de 300 estudiantes con acceso a experiencias STEAM de alta calidad.',
        imagenes: [IMG.plus, IMG.multi, IMG.premium],
        linkProyecto: '/proyectos/domos',
        linkLabel: 'Ver proyecto Domos',
        estado: 'activo',
      },
      {
        id: 'domo-comas',
        titulo: 'Domo Verde – Comas',
        tipo: 'Educación Comunitaria',
        typeBadgeColor: 'bg-blue-100 text-blue-700',
        shortDescription: 'Espacio de educación ambiental en comunidad de Lima Norte.',
        fullDescription:
          'Instalación en zona popular de Lima Norte que llevó tecnología verde a una comunidad sin acceso previo a educación STEAM. El domo funciona como centro de aprendizaje y demostración para docentes, familias y estudiantes de la zona.',
        queSeHizo: [
          'Instalación de domo comunitario con hidroponía',
          'Formación de docentes locales',
          'Talleres para familias y comunidad',
          'Producción hidropónica demostrativa',
        ],
        impacto: 'Más de 400 personas de la comunidad con acceso a educación ambiental activa.',
        imagenes: [IMG.gotico, IMG.basic, IMG.almacen],
        linkProyecto: '/proyectos/domos',
        linkLabel: 'Ver proyecto Domos',
        estado: 'activo',
      },
    ],
  },
  {
    id: 'ancash',
    nombre: 'Áncash',
    hasProjects: true,
    summary: 'Modernización agrícola con REIGEL en Caraz',
    proyectos: [
      {
        id: 'reigel-caraz',
        titulo: 'REIGEL – Caraz',
        tipo: 'Producción Agrícola',
        typeBadgeColor: 'bg-amber-100 text-amber-700',
        shortDescription: 'Primera instalación del sistema REIGEL de modernización agrícola inteligente.',
        fullDescription:
          'Proyecto insignia de Kallpa en materia agroproductiva. REIGEL en Caraz demuestra que la hidroponía inteligente puede ser más rentable que la agricultura convencional: 4,000 plantas por ciclo, 90% menos agua, ROI proyectado de 12 a 14 meses.',
        queSeHizo: [
          'Diseño e instalación de sistema hidropónico de 4,000 plantas/ciclo',
          'Automatización de riego y monitoreo digital',
          'Capacitación técnica al productor operador',
          'Acompañamiento y seguimiento productivo',
        ],
        impacto: '4,000 lechugas/ciclo · 90% ahorro de agua · ROI proyectado en 12–14 meses.',
        imagenes: [IMG.multi, IMG.premium, IMG.gotico3d],
        linkProyecto: '/proyectos/reigel',
        linkLabel: 'Ver proyecto REIGEL',
        estado: 'activo',
      },
    ],
  },
  {
    id: 'junin',
    nombre: 'Junín',
    hasProjects: true,
    summary: 'Talleres STEAM y formación en comunidades educativas',
    proyectos: [
      {
        id: 'talleres-junin',
        titulo: 'Talleres STEAM – Junín',
        tipo: 'Educación y Formación',
        typeBadgeColor: 'bg-purple-100 text-purple-700',
        shortDescription: 'Programa de talleres y formación en comunidades educativas de la región.',
        fullDescription:
          'Expansión del modelo educativo de Kallpa hacia las comunidades de Junín, donde la ruralidad dificulta el acceso a experiencias prácticas de ciencia y tecnología. Los talleres STEAM utilizan módulos hidropónicos portátiles como laboratorios vivos.',
        queSeHizo: [
          'Diseño de programa adaptado al contexto rural andino',
          'Instalación de módulos hidropónicos portátiles',
          'Talleres para docentes y estudiantes',
          'Seguimiento del aprendizaje y documentación de resultados',
        ],
        impacto: 'Estudiantes de zonas rurales con primera experiencia STEAM práctica y contextualizada.',
        imagenes: [IMG.basic, IMG.forte, IMG.garden],
        linkProyecto: '/proyectos/domos',
        linkLabel: 'Ver proyecto Domos',
        estado: 'activo',
      },
    ],
  },
  {
    id: 'cusco',
    nombre: 'Cusco',
    hasProjects: true,
    summary: 'Educación ambiental y presencia en comunidades andinas',
    proyectos: [
      {
        id: 'educ-ambiental-cusco',
        titulo: 'Educación Ambiental – Cusco',
        tipo: 'Educación Ambiental',
        typeBadgeColor: 'bg-rose-100 text-rose-700',
        shortDescription: 'Proyectos de sensibilización y formación ambiental en comunidades de la región.',
        fullDescription:
          'Kallpa lleva su propuesta de educación ambiental a comunidades de Cusco, combinando tecnologías modernas de producción sostenible con la vocación territorial de la región.',
        queSeHizo: [
          'Talleres de sensibilización y educación ambiental',
          'Demostración de tecnologías de producción limpia',
          'Formación de líderes comunitarios',
          'Documentación de prácticas sostenibles',
        ],
        impacto: 'Comunidades con mayor acceso a herramientas modernas y educación ambiental activa.',
        imagenes: [IMG.gotico, IMG.premium, IMG.almacen],
        estado: 'activo',
      },
    ],
  },
  {
    id: 'arequipa',
    nombre: 'Arequipa',
    hasProjects: true,
    summary: 'Expansión de programas verdes hacia el sur del Perú',
    proyectos: [
      {
        id: 'expansion-arequipa',
        titulo: 'Expansión de Programas Verdes – Arequipa',
        tipo: 'Expansión',
        typeBadgeColor: 'bg-sky-100 text-sky-700',
        shortDescription: 'Despliegue inicial de capacidades Kallpa hacia la región de Arequipa.',
        fullDescription:
          'Arequipa representa la expansión del ecosistema Kallpa hacia el sur del Perú. Con su actividad agroproductiva y vocación hacia la innovación, es un territorio estratégico para programas de educación ambiental y modernización agrícola.',
        queSeHizo: [
          'Exploración y mapeo de actores locales clave',
          'Talleres de presentación del modelo Kallpa',
          'Identificación de oportunidades de despliegue',
          'Establecimiento de primeras alianzas territoriales',
        ],
        impacto: 'Presencia inicial con potencial de crecimiento hacia agricultura protegida y educación.',
        imagenes: [IMG.garden, IMG.multi, IMG.forte],
        estado: 'desarrollo',
      },
    ],
  },
]

// ── Inactive Regions (no projects yet) ───────────────────

function makeInactive(id: string, nombre: string): RegionTerritorial {
  return {
    id,
    nombre,
    hasProjects: false,
    summary: 'Región en exploración — aún sin proyectos activos',
    proyectos: [],
  }
}

const INACTIVE_REGIONS: RegionTerritorial[] = [
  makeInactive('tumbes', 'Tumbes'),
  makeInactive('piura', 'Piura'),
  makeInactive('lambayeque', 'Lambayeque'),
  makeInactive('cajamarca', 'Cajamarca'),
  makeInactive('amazonas', 'Amazonas'),
  makeInactive('loreto', 'Loreto'),
  makeInactive('sanmartin', 'San Martín'),
  makeInactive('lalibertad', 'La Libertad'),
  makeInactive('huanuco', 'Huánuco'),
  makeInactive('pasco', 'Pasco'),
  makeInactive('ucayali', 'Ucayali'),
  makeInactive('callao', 'Callao'),
  makeInactive('huancavelica', 'Huancavelica'),
  makeInactive('ica', 'Ica'),
  makeInactive('ayacucho', 'Ayacucho'),
  makeInactive('apurimac', 'Apurímac'),
  makeInactive('madrededios', 'Madre de Dios'),
  makeInactive('puno', 'Puno'),
  makeInactive('moquegua', 'Moquegua'),
  makeInactive('tacna', 'Tacna'),
]

// ── Exports ───────────────────────────────────────────────

export const REGIONES: RegionTerritorial[] = [...ACTIVE_REGIONS, ...INACTIVE_REGIONS]
