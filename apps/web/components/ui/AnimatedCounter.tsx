'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
}: AnimatedCounterProps): React.JSX.Element {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          startAnimation()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [end, duration])

  function startAnimation(): void {
    const startTime = performance.now()

    function tick(currentTime: number): void {
      const elapsed = currentTime - startTime
      const t = Math.min(elapsed / duration, 1)
      const progress = 1 - (1 - t) * (1 - t)
      const current = Math.round(progress * end)

      setCount(current)

      if (t < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count.toLocaleString('es-PE')}
      {suffix}
    </span>
  )
}
