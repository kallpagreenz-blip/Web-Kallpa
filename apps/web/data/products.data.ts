import type { Product } from '@/types'

export const PRODUCTS: Product[] = [
  {
    id: 'cupula-verde',
    slug: 'cupula-verde',
    name: 'Cúpula Verde',
    category: 'Invernadero Tecnológico',
    description:
      'Infraestructura viva que produce alimentos, captura CO₂ y funciona como laboratorio STEAM todo el año. No construimos invernaderos: construimos futuro habitable.',
    features: [
      '90% menos consumo de agua',
      'Hasta 25 kg de verduras al mes',
      'Sesiones STEAM activas durante todo el año',
      'Automatización por software inteligente',
      'Opción de energía solar integrada',
      'Hasta 35 años de durabilidad estructural',
    ],
    from: 10000,
    currency: 'USD',
    plans: [
      {
        name: 'Mini',
        price: 10000,
        currency: 'USD',
        specs: [
          '7.5 m de diámetro',
          '40 plantas',
          'Ideal para colegios y comunidades',
          'Software básico incluido',
        ],
      },
      {
        name: 'Mediana',
        price: 25000,
        currency: 'USD',
        specs: [
          '10 m de diámetro',
          '200 plantas',
          'Sensores ambientales completos',
          'Software Pro incluido',
        ],
        highlighted: true,
      },
      {
        name: 'Grande',
        price: 125000,
        currency: 'USD',
        specs: [
          '16 m de diámetro',
          '850 plantas',
          'Sistema solar opcional',
          'Software Corporativo + automatización total',
        ],
      },
    ],
  },
  {
    id: 'sistema-hidroponico',
    slug: 'sistema-hidroponico',
    name: 'Sistema Hidropónico',
    category: 'Horizontal Modular',
    description:
      'Sistemas modulares y escalables para producción sin suelo. Del hogar a la empresa, del aula al campo. La misma tecnología, diferente escala.',
    features: [
      '90% ahorro de agua vs suelo convencional',
      'Escalable: de 15 a 90+ plantas',
      'Compatible con sensores y software',
      'Sin suelo, sin pesticidas químicos',
      'Instalación simple en cualquier espacio',
    ],
    from: 80,
    currency: 'USD',
    plans: [
      {
        name: 'Básico',
        price: 80,
        currency: 'USD',
        specs: [
          '15 plantas',
          'Perfecto para el hogar',
          'Kit de inicio incluido',
        ],
      },
      {
        name: 'Intermedio',
        price: 300,
        currency: 'USD',
        specs: [
          '45 plantas',
          'Para jardines y espacios medianos',
          'Sensor de pH incluido',
        ],
        highlighted: true,
      },
      {
        name: 'Profesional',
        price: 980,
        currency: 'USD',
        specs: [
          '90 plantas',
          'Sensores ambientales completos',
          'Compatible con software de monitoreo',
        ],
      },
    ],
  },
  {
    id: 'lechuga-hidroponica',
    slug: 'lechuga-hidroponica',
    name: 'Lechuga Hidropónica',
    category: 'Producción Limpia',
    description:
      'Producción propia. Sin pesticidas, sin suelo, con 90% menos agua. Frescas, trazables y disponibles bajo pedido para hogares e instituciones.',
    features: [
      'Sin pesticidas ni agroquímicos',
      'Cultivo con 90% menos agua',
      'Cosecha bajo pedido personalizado',
      'Alta densidad nutricional',
      'Producción 100% trazable',
    ],
    from: 2,
    currency: 'USD',
    plans: [
      {
        name: 'Individual',
        price: 2,
        currency: 'USD',
        specs: ['1 unidad fresca', 'Lista para consumo inmediato'],
      },
      {
        name: 'Pack x3',
        price: 5,
        currency: 'USD',
        specs: ['3 unidades', 'Ideal para consumo semanal del hogar'],
        highlighted: true,
      },
      {
        name: 'Institucional',
        price: 25,
        currency: 'USD',
        specs: [
          'Bandeja completa',
          'Para restaurantes y colegios',
          'Pedido personalizado por volumen',
        ],
      },
    ],
  },
  {
    id: 'software-ambiental',
    slug: 'software-ambiental',
    name: 'Software Ambiental',
    category: 'Monitoreo y Automatización',
    description:
      'Centro de control inteligente para tus espacios verdes. Temperatura, humedad, pH, CE y luz en tiempo real, con automatización y alertas.',
    features: [
      'Monitoreo 24/7 en tiempo real',
      'Automatización de riego, ventilación e iluminación',
      'Alertas inteligentes por umbrales',
      'Análisis histórico y reportes',
      'Acceso remoto desde cualquier dispositivo',
      'Dashboard visual de alto impacto',
    ],
    from: 500,
    currency: 'USD',
    plans: [
      {
        name: 'Básico',
        price: 500,
        currency: 'USD',
        specs: [
          'Temperatura y humedad',
          'Alertas por correo electrónico',
          'Dashboard web básico',
        ],
      },
      {
        name: 'Pro',
        price: 1500,
        currency: 'USD',
        specs: [
          'pH, CE, luz y sensores completos',
          'Automatización de riego',
          'App móvil incluida',
          'Historial y análisis avanzado',
        ],
        highlighted: true,
      },
      {
        name: 'Corporativo',
        price: 3000,
        currency: 'USD',
        specs: [
          'Múltiples instalaciones',
          'API para integración',
          'Soporte prioritario 24/7',
          'Reportes personalizados',
        ],
      },
    ],
  },
  {
    id: 'greenlab',
    slug: 'greenlab',
    name: 'GreenLab',
    category: 'Educación + IA Darwin',
    description:
      'Hidroponía, inteligencia artificial educativa y aprendizaje gamificado en un kit que convierte niños en científicos ambientales del futuro.',
    features: [
      'IA Darwin integrada para aprendizaje adaptativo',
      'Aprendizaje gamificado por misiones',
      'Sensores físicos incluidos',
      'App interactiva multiplataforma',
      'Para hogares, aulas y espacios de innovación',
      'Beneficios cognitivos y conciencia ambiental',
    ],
    from: 50,
    currency: 'USD',
    plans: [
      {
        name: 'Mini Laboratorio',
        price: 50,
        currency: 'USD',
        specs: [
          '5 plantas',
          'App gratuita incluida',
          'Perfecto para el hogar',
        ],
      },
      {
        name: 'Explorador',
        price: 150,
        currency: 'USD',
        specs: [
          '15 plantas',
          'Sensores básicos',
          'Módulos educativos completos',
          'Para aulas y talleres',
        ],
        highlighted: true,
      },
      {
        name: 'Oficina',
        price: 1500,
        currency: 'USD',
        specs: [
          'Hasta 60 plantas',
          'Sensores avanzados completos',
          'Darwin IA versión completa',
          'Soporte educativo dedicado',
        ],
      },
    ],
  },
]
