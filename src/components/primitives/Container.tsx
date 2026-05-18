import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-container px-container-x md:px-container-x-md lg:px-container-x-lg', className)}>
      {children}
    </div>
  )
}
