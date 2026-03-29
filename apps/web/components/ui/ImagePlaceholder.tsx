import { cn } from '@/lib/cn'

// ── Types ────────────────────────────────────────────────

interface ImagePlaceholderProps {
  prompt: string
  aspectRatio?: 'video' | 'square' | 'portrait' | '4/3'
  variant?: 'green' | 'dark' | 'earth' | 'blue'
  icon?: React.ComponentType<{ className?: string }>
  label?: string
  className?: string
}

// ── Constants ────────────────────────────────────────────

const ASPECT_RATIO_CLASSES: Record<NonNullable<ImagePlaceholderProps['aspectRatio']>, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  '4/3': 'aspect-[4/3]',
}

const GRADIENT_CLASSES: Record<NonNullable<ImagePlaceholderProps['variant']>, string> = {
  green: 'from-brand-dark via-brand-green to-brand-mid',
  dark: 'from-[#0d1a0d] via-brand-dark to-[#1e3820]',
  earth: 'from-[#2a1a0a] via-[#5a3a1a] to-[#7a5a20]',
  blue: 'from-[#0a1a2e] via-[#1a3a6e] to-[#2a5a9e]',
}

// ── Component ────────────────────────────────────────────

export default function ImagePlaceholder({
  prompt,
  aspectRatio = 'video',
  variant = 'green',
  icon: Icon,
  label,
  className,
}: ImagePlaceholderProps): React.JSX.Element {
  const aspectClass = ASPECT_RATIO_CLASSES[aspectRatio]
  const gradientClass = GRADIENT_CLASSES[variant]

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-gradient-to-br',
        gradientClass,
        aspectClass,
        className
      )}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Centered icon */}
      {Icon !== undefined && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="text-white/30 w-12 h-12" />
        </div>
      )}

      {/* Bottom overlay */}
      <div className="absolute bottom-0 inset-x-0 p-3 flex flex-col items-start gap-1">
        {label !== undefined && (
          <span className="inline-block bg-black/30 backdrop-blur-sm rounded-md px-2 py-0.5 text-white/90 text-xs font-bold">
            {label}
          </span>
        )}
        <p className="text-white/40 text-xs italic truncate w-full">📷 {prompt}</p>
      </div>
    </div>
  )
}
