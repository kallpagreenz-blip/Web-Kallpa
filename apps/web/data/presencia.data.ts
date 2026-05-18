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

// ── Active Regions ────────────────────────────────────────

const ACTIVE_REGIONS: RegionTerritorial[] = [
  {
    id: 'lima',
    nombre: 'Lima',
    hasProjects: true,
    summary: '3 agrofranquicias activas en Lima Metropolitana',
    proyectos: [
      {
        id: 'domo-santa-anita',
        titulo: 'Domo Verde – Santa Anita',
        tipo: 'Agrofranquicia Productiva',
        typeBadgeColor: 'bg-emerald-100 text-emerald-700',
        shortDescription: 'Primera agrofranquicia Kallpa en Lima. Hidroponía productiva y educación STEAM activa.',
        fullDescription:
          'Instalada en el corazón de Santa Anita, esta agrofranquicia combina producción hidropónica real con educación STEAM activa. Con sistema NFT de 1,200 plantas por ciclo, riego tecnificado y monitoreo digital, demuestra que el campo puede estar en la ciudad y rendir de forma sostenible.',
        queSeHizo: [
          'Instalación de sistema hidropónico NFT (1,200 plantas/ciclo)',
          'Sistema de riego automatizado y fertirriego',
          'Capacitación técnica al productor operador',
          'Monitoreo digital de temperatura y nutrición',
          'Programa de talleres STEAM para la comunidad',
        ],
        impacto: '1,200 plantas/ciclo · 90% ahorro de agua · +300 personas capacitadas · 4 ciclos productivos completados.',
        imagenes: [IMG.plus, IMG.multi, IMG.premium],
        estado: 'activo',
      },
      {
        id: 'domo-comas',
        titulo: 'Domo Verde – Comas',
        tipo: 'Agrofranquicia Educativa',
        typeBadgeColor: 'bg-blue-100 text-blue-700',
        shortDescription: 'Centro de formación y producción en Lima Norte. Referente comunitario de la red Kallpa.',
        fullDescription:
          'La agrofranquicia de Comas transformó un espacio comunitario en un laboratorio productivo real. Con énfasis en formación docente y agricultura urbana, esta unidad prueba que el modelo Kallpa puede instalarse en los rincones más exigentes del territorio y generar impacto con las personas que más lo necesitan.',
        queSeHizo: [
          'Domo hidropónico comunitario con producción continua',
          'Programa de formación para docentes locales',
          'Talleres de agricultura urbana para familias',
          'Red comunitaria activa con rotación de aprendices',
        ],
        impacto: '+400 personas beneficiadas · 2 ciclos productivos completos · Comunidad de agricultores urbanos activa.',
        imagenes: [IMG.gotico, IMG.basic, IMG.almacen],
        estado: 'activo',
      },
      {
        id: 'valle-nilo-ves',
        titulo: 'Valle del Nilo – Villa El Salvador',
        tipo: 'Agrofranquicia Agroproductiva',
        typeBadgeColor: 'bg-amber-100 text-amber-700',
        shortDescription: 'Producción comercial de hortalizas con macrotúnel y riego por goteo en Lima Sur.',
        fullDescription:
          'Valle del Nilo es una de las agrofranquicias más orientadas a la producción comercial dentro de la red Kallpa en Lima. Con macrotúnel de alta eficiencia y riego por goteo, esta unidad produce lechuga, espinaca y hierbas aromáticas con destino a mercados locales de mayor valor. Referente del modelo productivo-comercial de Kallpa.',
        queSeHizo: [
          'Macrotúnel de producción continua',
          'Sistema de riego por goteo de alta eficiencia',
          'Plan de calidad básica y presentación de producto',
          'Acceso a canal de comercialización en mercado local',
          'Marca propia del productor desarrollada',
        ],
        impacto: 'Producción activa de 3 variedades · Canal de venta local establecido · Primer productor con marca propia en la red.',
        imagenes: [IMG.forte, IMG.garden, IMG.multi],
        estado: 'activo',
      },
    ],
  },
  {
    id: 'huancavelica',
    nombre: 'Huancavelica',
    hasProjects: true,
    summary: 'Primera agrofranquicia Kallpa en zona altoandina',
    proyectos: [
      {
        id: 'agricolas-mantaro',
        titulo: 'Agrícolas Mantaro',
        tipo: 'Agrofranquicia Andina',
        typeBadgeColor: 'bg-purple-100 text-purple-700',
        shortDescription: 'Producción protegida en zona altoandina. Invernadero antihelada para clima extremo.',
        fullDescription:
          'Agrícolas Mantaro representa la apuesta de Kallpa por las zonas altoandinas del Perú. Con clima extremo, heladas frecuentes y suelos desafiantes, esta agrofranquicia utiliza un invernadero tipo gótico con cobertura antihelada para producir hortalizas en condiciones que antes impedían la producción estable. Una demostración de que la tecnología Kallpa puede adaptarse a cualquier geografía.',
        queSeHizo: [
          'Invernadero gótico con cobertura antihelada especializada',
          'Fertirriego adaptado a condiciones de altitud',
          'Formación técnica a productores locales de la zona',
          'Sistema de monitoreo de temperatura y humedad en tiempo real',
        ],
        impacto: 'Primera producción protegida estable en la región · 2 familias productoras activas · Modelo replicable para el altiplano.',
        imagenes: [IMG.gotico3d, IMG.premium, IMG.gotico],
        estado: 'piloto',
      },
    ],
  },
  {
    id: 'ancash',
    nombre: 'Áncash',
    hasProjects: true,
    summary: 'Agrofranquicia en el Valle del Huaylas, Caraz',
    proyectos: [
      {
        id: 'callejon-huaylas',
        titulo: 'Callejón del Huaylas',
        tipo: 'Agrofranquicia Serrana',
        typeBadgeColor: 'bg-sky-100 text-sky-700',
        shortDescription: 'Producción de flores y hortalizas premium en el Valle del Huaylas, Caraz.',
        fullDescription:
          'El Callejón del Huaylas, reconocido por su fertilidad andina y clima templado, alberga una de las agrofranquicias más prometedoras de la red Kallpa. Con macrotúnel multitúnel de alta capacidad, esta unidad produce flores de exportación y hortalizas premium con potencial de ingreso a mercados de mayor valor. La marca del productor Callejón del Huaylas ya tiene presencia en el mercado regional.',
        queSeHizo: [
          'Macrotúnel multitúnel de alta capacidad productiva',
          'Riego tecnificado por cinta y fertirriego',
          'Vinculación con red comercial de la región',
          'Desarrollo de plan de marca del productor',
          'Certificación básica de buenas prácticas agrícolas',
        ],
        impacto: 'Producción estable de flores y hortalizas · Prototipo de exportación en análisis · Marca propia activa en mercado regional.',
        imagenes: [IMG.multi, IMG.premium, IMG.gotico3d],
        estado: 'activo',
      },
    ],
  },
  {
    id: 'junin',
    nombre: 'Junín',
    hasProjects: true,
    summary: 'Agrofranquicia tropical en la selva alta de Pichanaki',
    proyectos: [
      {
        id: 'pichanaki-agro',
        titulo: 'Pichanaki Agro',
        tipo: 'Agrofranquicia Tropical',
        typeBadgeColor: 'bg-green-100 text-green-700',
        shortDescription: 'Producción de hortalizas tropicales en la selva alta con riego tecnificado y sombreador.',
        fullDescription:
          'Pichanaki Agro lleva la tecnología Kallpa a la selva alta de Junín. En un entorno de alta humedad y temperatura estable, esta agrofranquicia demuestra que la agricultura protegida tiene sentido también en el trópico: mayor control de plagas, producción continua y mejor precio en el mercado regional. Una innovación territorial que abre una nueva categoría para la red Kallpa.',
        queSeHizo: [
          'Sistema sombreador y ventilación adaptada al calor tropical',
          'Fertirriego tropical con mezcla de nutrientes ajustada',
          'Producción de pimiento, tomate y pepino para mercado regional',
          'Conexión comercial con mercado de Pichanaki y zonas aledañas',
        ],
        impacto: 'Primera agrofranquicia Kallpa en selva alta · Producción continua en condiciones tropicales · Precio 30% por encima del mercado tradicional.',
        imagenes: [IMG.basic, IMG.forte, IMG.garden],
        estado: 'activo',
      },
    ],
  },
]

// ── Inactive Regions ──────────────────────────────────────

function makeInactive(id: string, nombre: string): RegionTerritorial {
  return {
    id,
    nombre,
    hasProjects: false,
    summary: 'Región en exploración — aún sin agrofranquicias activas',
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
  makeInactive('ica', 'Ica'),
  makeInactive('ayacucho', 'Ayacucho'),
  makeInactive('apurimac', 'Apurímac'),
  makeInactive('cusco', 'Cusco'),
  makeInactive('madrededios', 'Madre de Dios'),
  makeInactive('puno', 'Puno'),
  makeInactive('arequipa', 'Arequipa'),
  makeInactive('moquegua', 'Moquegua'),
  makeInactive('tacna', 'Tacna'),
]

// ── Exports ───────────────────────────────────────────────

export const REGIONES: RegionTerritorial[] = [...ACTIVE_REGIONS, ...INACTIVE_REGIONS]
