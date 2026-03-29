# CLAUDE.md — Plataforma Escalable de Producción

## 🎯 Filosofía de Desarrollo

Este proyecto NO es un prototipo. Es una plataforma de producción.
Todo código generado debe ser:
- **Limpio**: legible, sin redundancias, con nombres descriptivos
- **Escalable**: preparado para crecer sin reescribir
- **Robusto**: con manejo de errores en cada capa
- **Tipado**: TypeScript estricto en todo momento, sin `any`
- **Testeado**: toda lógica de negocio debe tener tests unitarios

Ante la duda entre "rápido" y "correcto", siempre elegir **correcto**.

---

## 🏗️ Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Frontend | Next.js (App Router) | 14+ |
| Backend | Node.js + Express | 20 LTS |
| Base de datos | Supabase (PostgreSQL) | Latest |
| Autenticación | Supabase Auth | Built-in |
| Storage | Supabase Storage | Built-in |
| Despliegue Frontend | Vercel | Latest |
| Despliegue Backend | Vercel Serverless / Railway | Latest |
| Lenguaje | TypeScript | 5+ strict |
| Estilos | Tailwind CSS | 3+ |
| Estado global | Zustand | 4+ |
| Fetching de datos | TanStack Query (React Query) | 5+ |
| Validación | Zod | 3+ |
| Testing | Vitest + Testing Library | Latest |

---

## 📁 Arquitectura de Directorios

```
/
├── apps/
│   ├── web/                        # Next.js App
│   │   ├── app/                    # App Router (Next.js 14)
│   │   │   ├── (auth)/             # Rutas de autenticación (agrupadas)
│   │   │   ├── (dashboard)/        # Rutas protegidas
│   │   │   ├── api/                # API Routes de Next.js (BFF ligero)
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── ui/                 # Componentes base reutilizables (Button, Input, Modal)
│   │   │   ├── features/           # Componentes de dominio (UserCard, ProductList)
│   │   │   └── layouts/            # Layouts reutilizables (DashboardLayout, AuthLayout)
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── lib/
│   │   │   ├── supabase/           # Cliente Supabase configurado
│   │   │   ├── validations/        # Schemas Zod reutilizables
│   │   │   └── utils/              # Funciones utilitarias puras
│   │   ├── stores/                 # Zustand stores
│   │   ├── types/                  # Tipos TypeScript globales
│   │   └── middleware.ts           # Auth middleware Next.js
│   │
│   └── api/                        # Express API (si se necesita lógica pesada)
│       ├── src/
│       │   ├── routes/             # Definición de rutas por dominio
│       │   ├── controllers/        # Lógica de cada endpoint
│       │   ├── services/           # Lógica de negocio pura
│       │   ├── middleware/         # Auth, rate limiting, error handling
│       │   ├── models/             # Tipos e interfaces de datos
│       │   └── index.ts            # Entry point
│       └── tests/
│
├── packages/
│   ├── shared-types/               # Tipos compartidos entre apps
│   └── shared-utils/               # Utilidades compartidas
│
├── supabase/
│   ├── migrations/                 # Migraciones SQL versionadas
│   ├── seed.sql                    # Datos iniciales
│   └── config.toml                 # Configuración local Supabase
│
└── docs/                           # Documentación técnica
```

---

## 📐 Reglas de Arquitectura

### Separación de responsabilidades (OBLIGATORIO)
- **Componentes UI**: Solo presentación, sin lógica de negocio
- **Hooks**: Lógica de estado y side effects
- **Services**: Llamadas a APIs y Supabase
- **Utils**: Funciones puras sin side effects
- **Stores**: Estado global compartido entre componentes

### Flujo de datos unidireccional
```
UI Component → Hook → Service → Supabase/API → Service → Hook → UI Component
```

Nunca llamar a Supabase directamente desde un componente.
Siempre pasar por un service o hook dedicado.

---

## 🔷 TypeScript — Reglas Estrictas

```typescript
// tsconfig.json requerido
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  }
}
```

**Prohibido:**
- `any` — usar `unknown` y hacer type narrowing
- Type assertions sin validación (`as SomeType`)
- `// @ts-ignore` — resolver el error, no ignorarlo
- Tipos inline complejos en JSX — extraerlos a `/types`

**Obligatorio:**
- Tipar todos los props de componentes con interfaces
- Tipar todos los retornos de funciones
- Usar Zod para validar datos externos (API responses, form inputs)

---

## 🗄️ Supabase — Patrones

### Cliente tipado (SIEMPRE así)
```typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/types/supabase'

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
```

### Reglas de base de datos
- Toda tabla debe tener: `id uuid DEFAULT gen_random_uuid()`, `created_at`, `updated_at`
- Activar **Row Level Security (RLS)** en TODAS las tablas
- Nunca exponer la `service_role` key en el cliente
- Todas las migraciones en `/supabase/migrations/` con timestamp: `20240101_nombre_descriptivo.sql`
- Índices en todas las columnas de búsqueda frecuente

### Patrón de service
```typescript
// services/users.service.ts
import { createClient } from '@/lib/supabase/client'
import type { User, UpdateUserDTO } from '@/types/user'

export async function getUserById(id: string): Promise<User | null> {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('[getUserById]', error)
    throw new Error(`Failed to fetch user: ${error.message}`)
  }

  return data
}
```

---

## ⚡ Next.js — Reglas

### Server vs Client Components
- **Por defecto**: Server Component (sin `'use client'`)
- Usar `'use client'` SOLO cuando se necesite: interactividad, hooks, eventos del browser
- Nunca usar `'use client'` en layouts de alto nivel innecesariamente

### Fetching de datos
```typescript
// Server Component — fetching directo (preferido para datos iniciales)
async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id) // server-side
  return <ProductDetail product={product} />
}

// Client Component — TanStack Query (para datos dinámicos/interactivos)
function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })
}
```

### Rutas de API (Next.js Route Handlers)
```typescript
// app/api/[resource]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({ name: z.string().min(1) })

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

    // lógica aquí...
    
    return NextResponse.json({ data: result }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/resource]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

---

## 🛡️ Manejo de Errores (OBLIGATORIO en toda la app)

### Reglas
1. Nunca swallowear errores silenciosamente (`catch (e) {}`)
2. Todo error debe ser loggeado con contexto
3. El usuario siempre debe ver un mensaje útil, nunca un stack trace
4. Usar `Result pattern` para errores esperados

### Patrón en servicios
```typescript
type Result<T> = { data: T; error: null } | { data: null; error: string }

export async function createUser(dto: CreateUserDTO): Promise<Result<User>> {
  try {
    const user = await userService.create(dto)
    return { data: user, error: null }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[createUser]', message)
    return { data: null, error: message }
  }
}
```

---

## 🔐 Seguridad

- Variables de entorno: NUNCA hardcodear secrets en el código
- Validar con Zod TODOS los inputs externos antes de procesarlos
- Sanitizar datos antes de insertar en la base de datos
- Rate limiting en todas las API routes públicas
- Headers de seguridad configurados en `next.config.js`
- Autenticación verificada en `middleware.ts` para rutas protegidas

```typescript
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}
```

---

## ✅ Calidad de Código

### Antes de generar cualquier archivo, Claude debe:
1. Definir los tipos/interfaces primero
2. Implementar la lógica de negocio en services
3. Crear el hook si hay estado involucrado
4. Construir el componente consumiendo el hook
5. Nunca mezclar estas responsabilidades

### Naming conventions
| Elemento | Convención | Ejemplo |
|----------|-----------|---------|
| Componentes | PascalCase | `UserProfileCard.tsx` |
| Hooks | camelCase con `use` | `useUserProfile.ts` |
| Services | camelCase con `.service` | `user.service.ts` |
| Utils | camelCase con `.util` | `format-date.util.ts` |
| Types | PascalCase con `.types` | `user.types.ts` |
| Constantes | SCREAMING_SNAKE_CASE | `MAX_RETRY_COUNT` |

### Estructura de un componente (orden obligatorio)
```typescript
// 1. Imports externos
// 2. Imports internos
// 3. Types/Interfaces del componente
// 4. Constantes del componente
// 5. El componente
// 6. Export default
```

---

## 🧪 Testing

- Todo service debe tener tests unitarios
- Mínimo: happy path + error path por función
- Usar `vitest` para unit tests
- Usar `@testing-library/react` para componentes
- Nombrar tests: `describe('servicio') > it('should hacer algo cuando condición')`

---

## 🚀 Variables de Entorno

```bash
# .env.local (nunca commitear al repositorio)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=        # Solo en servidor, nunca en cliente
NEXT_PUBLIC_APP_URL=

# .env.example (sí commitear, sin valores reales)
# Documentar cada variable con un comentario de para qué sirve
```

---

## 📦 Comandos del Proyecto

```bash
# Desarrollo
npm run dev              # Inicia Next.js en localhost:3000
npm run dev:api          # Inicia Express API en localhost:3001

# Base de datos
npx supabase start       # Levanta Supabase local
npx supabase db push     # Aplica migraciones pendientes
npx supabase gen types   # Genera tipos TypeScript desde el schema

# Calidad
npm run lint             # ESLint
npm run typecheck        # TypeScript check sin compilar
npm run test             # Vitest
npm run test:coverage    # Coverage report

# Producción
npm run build            # Build de producción
npm run start            # Servidor de producción local
```

---

## ⛔ Lo que Claude NUNCA debe hacer en este proyecto

- Generar código sin tipos TypeScript
- Usar `any` como tipo
- Poner lógica de negocio dentro de componentes React
- Llamar a Supabase directamente desde la UI
- Ignorar errores con `catch (e) {}`
- Hardcodear URLs, tokens o secrets
- Crear archivos de más de 300 líneas (refactorizar en módulos)
- Mezclar Server y Client Components sin justificación
- Generar código sin considerar casos de error
- Crear funciones de más de 40 líneas (extraer subfunciones)

---

## ✅ Lo que Claude SIEMPRE debe hacer

- Preguntar si hay ambigüedad antes de generar código
- Generar tipos antes que implementación
- Incluir manejo de errores en cada función asíncrona
- Seguir la estructura de directorios definida arriba
- Usar los patrones de este documento como referencia
- Escribir código como si fuera revisado por un senior engineer
- Si detecta deuda técnica al leer código existente, mencionarla