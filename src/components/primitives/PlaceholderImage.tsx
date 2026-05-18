import { cn } from '@/lib/utils'
import { ImageIcon } from 'lucide-react'

type Ratio = '16:9' | '4:3' | '1:1' | '3:4' | '9:16' | '3:2' | '2:1' | '21:9'

type Props = {
  ratio: Ratio
  briefing: string
  src?: string
  className?: string
  tone?: 'light' | 'dark'
  rounded?: boolean
  decorative?: boolean
}

const RATIO_CLASS: Record<Ratio, string> = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
  '9:16': 'aspect-[9/16]',
  '3:2': 'aspect-[3/2]',
  '2:1': 'aspect-[2/1]',
  '21:9': 'aspect-[21/9]',
}

export function PlaceholderImage({ ratio, briefing, src, className, tone = 'light', rounded = true, decorative = false }: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={decorative ? '' : briefing}
        aria-hidden={decorative || undefined}
        className={cn('object-cover w-full h-full', rounded && 'rounded-lg', className)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={decorative ? undefined : briefing}
      aria-hidden={decorative || undefined}
      className={cn(
        'relative w-full overflow-hidden flex items-center justify-center text-center p-6',
        rounded && 'rounded-lg',
        RATIO_CLASS[ratio],
        tone === 'dark'
          ? 'bg-gradient-card-feature text-white/70 border border-border-inverse'
          : 'bg-surface-muted text-text-muted border border-dashed border-border-strong',
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2 max-w-prose">
        <ImageIcon className={cn('w-6 h-6 opacity-70', tone === 'dark' ? 'text-white/60' : 'text-text-muted')} aria-hidden />
        <span className="text-eyebrow uppercase tracking-[0.18em] opacity-80">[Imagem · {ratio}]</span>
        <span className="text-caption leading-snug opacity-90 line-clamp-5">{briefing}</span>
      </div>
    </div>
  )
}
