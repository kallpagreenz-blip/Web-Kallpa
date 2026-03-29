'use client'

import { cn } from '@/lib/cn'

interface YouTubeEmbedProps {
  videoId: string
  title: string
  className?: string
}

export default function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps): React.JSX.Element {
  return (
    <div className={cn('relative aspect-video rounded-2xl overflow-hidden bg-brand-dark', className)}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
      />
    </div>
  )
}
