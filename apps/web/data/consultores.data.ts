// ── Types ─────────────────────────────────────────────────

export type EspecialidadConsultor =
  | 'Hidroponía'
  | 'Agricultura Protegida'
  | 'Riego Tecnificado'
  | 'Fertirriego'
  | 'Finanzas Agrícolas'
  | 'Postcosecha'
  | 'Semillas y Genética'
  | 'Fruticultura'
  | 'Resiliencia Climática'
  | 'Tecnología de Precisión'

export interface Consultor {
  id: string
  nombre: string
  pais: string
  ciudad: string
  bandera: string
  especialidad: EspecialidadConsultor
  cultivosAreas: string[]
  experienciaAnios: number
  bio: string
  enfoqueTecnico: string
  initials: string
  avatarColor: string
}

// ── WhatsApp ──────────────────────────────────────────────

export const WHATSAPP_NUMBER = '51958592290'
export const PRECIO_HORA = 120

export function getWhatsAppLink(nombreConsultor: string): string {
  const mensaje = encodeURIComponent(
    `Hola, quiero agendar una consultoría con ${nombreConsultor}. ¿Tienen disponibilidad?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`
}

// ── Consultores ───────────────────────────────────────────

export const CONSULTORES: Consultor[] = [
  {
    id: 'maria-torres',
    nombre: 'María Elena Torres',
    pais: 'Perú',
    ciudad: 'Lima',
    bandera: '🇵🇪',
    especialidad: 'Hidroponía',
    cultivosAreas: ['Lechuga', 'Espinaca', 'Tomate cherry', 'Albahaca', 'Microgreens'],
    experienciaAnios: 12,
    bio: 'Ingeniera agrónoma de la UNALM con 12 años diseñando y optimizando sistemas hidropónicos para productores urbanos y periurbanos en Perú. Ha asesorado más de 40 proyectos de pequeña y mediana escala, desde módulos familiares hasta instalaciones comerciales. Docente en cursos de agricultura sin suelo y colaboradora técnica de programas de emprendimiento agrícola.',
    enfoqueTecnico: 'Sistemas NFT, DWC y sustrato. Diagnóstico nutricional y soluciones hidropónicas adaptadas a presupuesto real.',
    initials: 'MT',
    avatarColor: 'bg-emerald-600',
  },
  {
    id: 'andres-gutierrez',
    nombre: 'Andrés Gutiérrez',
    pais: 'Chile',
    ciudad: 'Valparaíso',
    bandera: '🇨🇱',
    especialidad: 'Agricultura Protegida',
    cultivosAreas: ['Arándanos', 'Frutillas', 'Frambuesas', 'Moras', 'Cerezas'],
    experienciaAnios: 15,
    bio: 'Ingeniero agrícola de la Universidad Católica de Chile especializado en el desarrollo productivo de berries bajo agricultura protegida. Con más de 15 años como consultor para exportadores del sur de Chile y asesor de productores de la región andina, tiene experiencia sólida en la adaptación de infraestructura para climas variables y en la planificación de cultivos con destino a exportación.',
    enfoqueTecnico: 'Infraestructura protegida para berries, manejo de microclima, protocolo de exportación básico.',
    initials: 'AG',
    avatarColor: 'bg-red-600',
  },
  {
    id: 'valentina-rios',
    nombre: 'Valentina Ríos',
    pais: 'Colombia',
    ciudad: 'Bogotá',
    bandera: '🇨🇴',
    especialidad: 'Riego Tecnificado',
    cultivosAreas: ['Flores de exportación', 'Hortalizas', 'Frutas tropicales', 'Aromáticas'],
    experienciaAnios: 10,
    bio: 'Ingeniera ambiental con posgrado en gestión hídrica agrícola. Trabajó durante 7 años en el sector floricultor colombiano asesorando fincas exportadoras en la Sabana de Bogotá. Hoy consulta de forma independiente para proyectos de riego eficiente en Colombia, Perú y Ecuador, con énfasis en ahorro de agua y productividad. Capacitadora certificada en riego por goteo y microaspersión.',
    enfoqueTecnico: 'Diseño de redes de riego por goteo y microaspersión, automatización básica, eficiencia hídrica por cultivo.',
    initials: 'VR',
    avatarColor: 'bg-yellow-600',
  },
  {
    id: 'carlos-mendoza',
    nombre: 'Carlos Mendoza',
    pais: 'España',
    ciudad: 'Almería',
    bandera: '🇪🇸',
    especialidad: 'Fertirriego',
    cultivosAreas: ['Pimiento', 'Pepino', 'Tomate', 'Berenjena', 'Sandía'],
    experienciaAnios: 20,
    bio: 'Ingeniero agrónomo formado en la Universidad de Almería, epicentro mundial de la horticultura protegida. Con 20 años de experiencia en diseño y optimización de invernaderos en el Mediterráneo y asesoría a proyectos en Latinoamérica, es referente en fertirriego de precisión, variedades de alta producción y gestión integrada de plagas. Ha trabajado con empresas exportadoras en España, México y Perú.',
    enfoqueTecnico: 'Fertirriego de precisión, manejo de CE y pH, variedades de alto rendimiento para mercado exigente.',
    initials: 'CM',
    avatarColor: 'bg-orange-600',
  },
  {
    id: 'keiko-tanaka',
    nombre: 'Keiko Tanaka',
    pais: 'Perú',
    ciudad: 'Arequipa',
    bandera: '🇵🇪',
    especialidad: 'Finanzas Agrícolas',
    cultivosAreas: ['Análisis financiero', 'Formulación de proyectos', 'Acceso a crédito', 'Modelos de negocio agrícola'],
    experienciaAnios: 8,
    bio: 'Economista agraria con MBA y experiencia en banca de desarrollo agrícola. Ha formulado más de 60 proyectos agrícolas para financiamiento público y privado en el sur del Perú, incluyendo fondos de Agrobanco, FONDES y cooperación internacional. Especialista en análisis de viabilidad financiera para pequeños y medianos productores, y en estructuración de modelos de negocio sostenibles para el agro.',
    enfoqueTecnico: 'Flujo de caja agrícola, análisis de ROI, formulación de proyectos para financiamiento, modelos de agronegocio.',
    initials: 'KT',
    avatarColor: 'bg-pink-600',
  },
  {
    id: 'rafael-santos',
    nombre: 'Rafael Santos',
    pais: 'Brasil',
    ciudad: 'São Paulo',
    bandera: '🇧🇷',
    especialidad: 'Postcosecha',
    cultivosAreas: ['Berries', 'Hortalizas premium', 'Tomate', 'Pimiento', 'Exportación de frutas'],
    experienciaAnios: 11,
    bio: 'Ingeniero de alimentos de la USP especializado en manejo postcosecha para mercados de alta exigencia. Con 11 años de trabajo en la cadena de valor de berries y hortalizas premium en Brasil y Sudamérica, asesora productores que buscan mejorar la presentación, vida útil y precio de venta de sus productos. Domina protocolos de empaque, cámara de frío y certificaciones de calidad para exportación.',
    enfoqueTecnico: 'Manejo postcosecha, protocolos de empaque, cadena de frío básica, mejora de presentación para mercados exigentes.',
    initials: 'RS',
    avatarColor: 'bg-green-700',
  },
  {
    id: 'luisa-morales',
    nombre: 'Luisa Fernanda Morales',
    pais: 'México',
    ciudad: 'Guadalajara',
    bandera: '🇲🇽',
    especialidad: 'Semillas y Genética',
    cultivosAreas: ['Tomate', 'Chile', 'Maíz', 'Pepino', 'Variedades mejoradas para invernadero'],
    experienciaAnios: 14,
    bio: 'Ingeniera agrónoma con doctorado en genética aplicada a cultivos hortícolas. Trabajó en investigación y desarrollo en casas de semillas internacionales antes de dedicarse a la consultoría independiente. Asesora a productores en la selección de variedades adaptadas a sus condiciones, con énfasis en resistencia a plagas, rendimiento y calidad de fruto. Referente en Latinoamérica en mejora genética aplicada al pequeño productor.',
    enfoqueTecnico: 'Selección de variedades por condición climática y mercado, resistencia a enfermedades, rendimiento y calidad.',
    initials: 'LM',
    avatarColor: 'bg-purple-600',
  },
  {
    id: 'omar-yanez',
    nombre: 'Omar Yáñez',
    pais: 'Argentina',
    ciudad: 'Mendoza',
    bandera: '🇦🇷',
    especialidad: 'Fruticultura',
    cultivosAreas: ['Vid', 'Durazno', 'Manzana', 'Pera', 'Transición a tecnología protegida'],
    experienciaAnios: 18,
    bio: 'Ingeniero agrónomo de la UNCuyo con 18 años de trabajo en fruticultura andina y de zonas templadas. Consultor nacional y regional para productores en proceso de transición desde agricultura tradicional hacia modelos de mayor valor. Especialista en la reconversión productiva de unidades familiares a modelos tecnificados viables. Ha trabajado con productores en Argentina, Chile, Perú y Bolivia.',
    enfoqueTecnico: 'Reconversión productiva, manejo integrado en fruticultura, reducción de riesgo climático, acceso a mercados diferenciados.',
    initials: 'OY',
    avatarColor: 'bg-blue-700',
  },
  {
    id: 'silvia-huanca',
    nombre: 'Silvia Huanca',
    pais: 'Perú',
    ciudad: 'Puno',
    bandera: '🇵🇪',
    especialidad: 'Resiliencia Climática',
    cultivosAreas: ['Quinua', 'Kiwicha', 'Papa nativa', 'Habas', 'Granos andinos'],
    experienciaAnios: 9,
    bio: 'Ingeniera ambiental de la UNAS Tingo María con especialización en adaptación al cambio climático en sistemas agrícolas andinos. Trabaja con comunidades rurales de Puno y el altiplano en la implementación de prácticas resilientes, recuperación de variedades nativas y diversificación productiva. Asesora a productores que buscan proteger su producción ante heladas, sequías y variabilidad climática extrema.',
    enfoqueTecnico: 'Diagnóstico de vulnerabilidad climática, estrategias de adaptación, variedades nativas, recuperación de suelos.',
    initials: 'SH',
    avatarColor: 'bg-teal-600',
  },
  {
    id: 'david-mizrahi',
    nombre: 'David Mizrahi',
    pais: 'Perú / Israel',
    ciudad: 'Lima',
    bandera: '🇵🇪',
    especialidad: 'Tecnología de Precisión',
    cultivosAreas: ['Todas las categorías', 'Sensores IoT', 'Automatización agrícola', 'Sistemas controlados'],
    experienciaAnios: 16,
    bio: 'Ingeniero de sistemas con especialización en AgriTech desarrollada en Israel y aplicada en Latinoamérica. Con 16 años trabajando en la intersección entre tecnología y campo, ha implementado sistemas de monitoreo, automatización y análisis de datos para agricultores de todos los tamaños. Asesor técnico en proyectos de transformación digital del agro en Perú, México, Colombia y Chile. Combina la precisión tecnológica israelí con la comprensión del contexto latinoamericano.',
    enfoqueTecnico: 'Sensores de campo, automatización de riego y nutrición, plataformas de monitoreo, toma de decisiones basada en datos.',
    initials: 'DM',
    avatarColor: 'bg-indigo-600',
  },
]
