// ── Common ─────────────────────────────────────────────
export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'accent' | 'dark'
export type SizeVariant   = 'sm' | 'md' | 'lg'

export interface NavLink {
  label: string
  href: string
  children?: SubNavLink[]
}

export interface SubNavLink {
  label: string
  href: string
  description?: string
}

// ── Metrics ────────────────────────────────────────────
export interface Metric {
  id: string
  label: string
  value: number
  prefix?: string
  suffix?: string
  description?: string
}

// ── Timeline ───────────────────────────────────────────
export interface TimelineItem {
  id: string
  year: number
  title: string
  description: string
  milestone: boolean
}

// ── Team ───────────────────────────────────────────────
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photoUrl?: string
}

// ── Products ───────────────────────────────────────────
export interface ProductPlan {
  name: string
  price: number
  currency: string
  specs: string[]
  highlighted?: boolean
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  description: string
  features: string[]
  from: number
  currency: string
  plans: ProductPlan[]
}

// ── Projects ───────────────────────────────────────────
export type ProjectStatus = 'activo' | 'desarrollo' | 'completado'

export interface ProjectSpec {
  label: string
  value: string
}

export interface ProjectMetric {
  label: string
  value: string
  icon: string
}

export interface Partner {
  name: string
  logoUrl?: string
}

export interface Project {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  status: ProjectStatus
  year: number
  location: string
  category: string
  specs: ProjectSpec[]
  metrics: ProjectMetric[]
  partners: Partner[]
  gallery: string[]
  videos: string[]
}

// ── Gallery ────────────────────────────────────────────
export type GalleryCategory = 'domos' | 'naos' | 'reigel' | 'equipo' | 'todos'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  category: Exclude<GalleryCategory, 'todos'>
  caption?: string
}
