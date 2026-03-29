import { cn } from '@/lib/cn'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({
  children,
  className,
}: SectionLabelProps): React.JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-brand-mid bg-brand-mid/10 px-4 py-1.5 rounded-full',
        className,
      )}
    >
      {children}
    </span>
  )
}
