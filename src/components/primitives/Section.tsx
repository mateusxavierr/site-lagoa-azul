import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

type Props = {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  bare?: boolean
  as?: 'section' | 'header' | 'footer'
  ariaLabel?: string
}

export function Section({ children, className, containerClassName, id, bare, as: As = 'section', ariaLabel }: Props) {
  return (
    <As
      id={id}
      aria-label={ariaLabel}
      className={cn('py-section-y md:py-section-y-md lg:py-section-y-lg', className)}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </As>
  )
}
