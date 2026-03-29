'use client'

import Link from 'next/link'
import { cn } from '@/lib/cn'
import type { ButtonVariant, SizeVariant } from '@/types'

interface ButtonProps {
  variant?: ButtonVariant
  size?: SizeVariant
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-mid text-white hover:bg-brand-green hover:-translate-y-0.5',
  outline:
    'border-2 border-white text-white hover:bg-white/10',
  ghost:
    'border-2 border-brand-mid text-brand-mid hover:bg-brand-mid hover:text-white',
  accent:
    'bg-brand-accent text-brand-dark hover:bg-yellow-400 hover:-translate-y-0.5',
  dark:
    'bg-brand-dark text-white hover:bg-[#2a4a2a]',
}

const sizeClasses: Record<SizeVariant, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const baseClasses =
  'inline-flex items-center gap-2 font-bold rounded-full transition-all duration-200 cursor-pointer'

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps): React.JSX.Element {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
