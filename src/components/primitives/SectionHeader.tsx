import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Eyebrow } from './Eyebrow'

type Props = {
  eyebrow: string
  title: ReactNode
  subtitle?: ReactNode
  tone?: 'default' | 'inverse'
  align?: 'left' | 'center'
  dotColor?: 'primary' | 'vital' | 'accent' | 'muted'
  className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, tone = 'default', align = 'left', dotColor = 'primary', className }: Props) {
  const titleColor = tone === 'inverse' ? 'text-white' : 'text-text-primary'
  const subColor = tone === 'inverse' ? 'text-white/75' : 'text-text-secondary'

  return (
    <div className={cn(align === 'center' ? 'text-center mx-auto' : 'text-left', 'max-w-prose mb-10 md:mb-14', className)}>
      <Eyebrow dotColor={dotColor} tone={tone}>{eyebrow}</Eyebrow>
      <h2 className={cn('font-display uppercase text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-3 leading-[1.02]', titleColor)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-body-lg mt-4', subColor)}>{subtitle}</p>
      )}
    </div>
  )
}
