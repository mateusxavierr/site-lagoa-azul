import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  dotColor?: 'primary' | 'vital' | 'accent' | 'muted'
  tone?: 'default' | 'inverse'
  className?: string
}

export function Eyebrow({ children, dotColor = 'primary', tone = 'default', className }: Props) {
  const dotClass = {
    primary: 'bg-brand-primary',
    vital: 'bg-brand-vital',
    accent: 'bg-brand-accent',
    muted: 'bg-text-muted',
  }[dotColor]

  const textClass = tone === 'inverse' ? 'text-brand-primary' : 'text-brand-primary'

  return (
    <span className={cn('inline-flex items-center gap-2 text-eyebrow uppercase tracking-[0.20em]', textClass, className)}>
      <span className={cn('w-1.5 h-1.5 rounded-full', dotClass)} />
      <span>{children}</span>
    </span>
  )
}
