import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    id: 'domos',
    slug: 'domos',
    name: 'Domos para Educar',
    tagline: 'Donde la tecnología se convierte en aprendizaje vivo.',
    description:
      'Cúpulas verdes que transforman escuelas públicas y espacios comunitarios en laboratorios STEAM activos, accesibles para comunidades vulnerables.',
    longDescription: `Desde 2021, Domos para Educar lleva tecnología hidropónica y ambiental a comunidades vulnerables del Perú. Cada domo no es solo un invernadero: es un aula viva donde los niños aprenden biología, química, sostenibilidad y trabajo en equipo haciendo, no leyendo.

Empezamos con voluntariado. Construimos los primeros domos en Santa Anita y Comas sin financiamiento, solo con convicción. En 2024, con el respaldo de la Embajada de Estados Unidos y aliados internacionales, escalamos nuestra presencia a múltiples regiones del Perú.

El resultado: más de 2,600 niños con acceso a experiencias STEAM que antes eran exclusivas de colegios privados.`,
    status: 'activo',
    year: 2021,
    location: 'Lima, Áncash, Junín, Cusco, Arequipa',
    category: 'Educación STEAM',
    specs: [
      { label: 'Inicio del proyecto', value: '2021' },
      { label: 'Regiones activas', value: '5 regiones del Perú' },
      { label: 'Tipo de instalación', value: 'Cúpula hidropónica + sensores' },
      { label: 'Durabilidad mínima', value: '25+ años' },
    ],
    metrics: [
      { label: 'Niños beneficiados', value: '+2,600', icon: 'Users' },
      { label: 'Escuelas y espacios públicos', value: '+10', icon: 'Building2' },
      { label: 'Talleres realizados', value: '+25', icon: 'BookOpen' },
      { label: 'Docentes formados', value: '+20', icon: 'GraduationCap' },
      { label: 'Ahorro de agua', value: '90%', icon: 'Droplets' },
      { label: 'CO₂ capturado 2021–2024', value: '+7 ton', icon: 'Wind' },
    ],
    partners: [
      { name: 'LG Electronics' },
      { name: 'Embajada de Estados Unidos en Perú' },
      { name: 'Universidad Soonchunhyang (Corea del Sur)' },
    ],
    gallery: [],
    videos: [],
  },
  {
    id: 'naos',
    slug: 'naos',
    name: 'NAOS',
    tagline: 'El aire que respiras puede convertirse en el fertilizante que alimenta.',
    description:
      'Fotobiorreactores con microalgas que capturan CO₂, purifican el aire interior y convierten la biomasa en biofertilizante líquido de alto rendimiento.',
    longDescription: `NAOS es la apuesta biotecnológica de Kallpa Greenz: un sistema compacto que cierra el ciclo entre el aire contaminado y el suelo fértil.

El fotobiorreactor alberga microalgas que se alimentan de CO₂ en lugar de liberarlo. El proceso produce biomasa que se convierte en biofertilizante natural, creando un ciclo regenerativo completo: captura CO₂, purifica el aire interior y fertiliza jardines o cultivos hidropónicos.

Actualmente en fase de MVP y pruebas preliminares, NAOS representa el futuro de la biotecnología verde urbana: ciencia aplicada con impacto tangible y medible.`,
    status: 'desarrollo',
    year: 2023,
    location: 'Lima, Perú',
    category: 'Biotecnología Verde',
    specs: [
      { label: 'Estado actual', value: 'MVP en pruebas preliminares' },
      { label: 'Tecnología base', value: 'Fotobiorreactor de microalgas' },
      { label: 'Consumo eléctrico', value: '<12 W por unidad' },
      { label: 'Reutilización de agua', value: '>85% interna' },
    ],
    metrics: [
      { label: 'CO₂ capturado por unidad/año', value: '0.5 ton', icon: 'Wind' },
      { label: 'Biomasa convertida a biofertilizante', value: '100%', icon: 'FlaskConical' },
      { label: 'Área fertilizada por mes', value: '+30 m²', icon: 'TreePine' },
      { label: 'Consumo eléctrico', value: '<12 W', icon: 'Zap' },
      { label: 'Reutilización interna de agua', value: '>85%', icon: 'Droplets' },
    ],
    partners: [{ name: 'Kallpa Greenz I+D' }],
    gallery: [],
    videos: [],
  },
  {
    id: 'reigel',
    slug: 'reigel',
    name: 'REIGEL',
    tagline: 'Agricultura inteligente que se paga sola en menos de 14 meses.',
    description:
      'Modernización agrícola para el sector privado: infraestructura hidropónica inteligente con automatización, sensores y retorno de inversión demostrado.',
    longDescription: `REIGEL es la respuesta de Kallpa al desafío de la agroindustria moderna: producir más con menos, de forma trazable, limpia y rentable.

La primera instalación en Caraz, Áncash, demuestra que la tecnología verde puede competir con la agricultura convencional en términos de eficiencia, y ser ampliamente superior en sostenibilidad y rentabilidad a largo plazo.

Con 4,000 lechugas por ciclo de 5 meses, 90% menos consumo de agua y un ROI proyectado entre 12 y 14 meses, REIGEL no es solo un invernadero: es un modelo de negocio verde con evidencia real sobre el terreno.`,
    status: 'activo',
    year: 2024,
    location: 'Caraz, Áncash, Perú',
    category: 'Producción Agrícola',
    specs: [
      { label: 'Primera instalación', value: 'Caraz, Áncash – 2024' },
      { label: 'Sistema base', value: 'Hidroponía + automatización + sensores' },
      { label: 'Consumo energético', value: '0.4 kWh/m²/día' },
      { label: 'Vida útil proyectada', value: '25 años' },
    ],
    metrics: [
      { label: 'Lechugas por ciclo (5 meses)', value: '4,000', icon: 'Sprout' },
      { label: 'Ahorro de agua vs agricultura convencional', value: '90%', icon: 'Droplets' },
      { label: 'Consumo energético', value: '0.4 kWh/m²/día', icon: 'Zap' },
      { label: 'ROI proyectado', value: '12–14 meses', icon: 'TrendingUp' },
      { label: 'Vida útil de infraestructura', value: '25 años', icon: 'Calendar' },
      { label: 'CO₂ evitado por año', value: '3.2 ton', icon: 'Wind' },
    ],
    partners: [
      { name: 'Kallpa Greenz' },
      { name: 'Sector privado agroindustrial' },
    ],
    gallery: [],
    videos: [],
  },
]
