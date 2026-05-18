import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

type Props = {
  children: ReactNode
  variants?: Variants
  stagger?: boolean
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'ul' | 'ol'
  amount?: number
  delay?: number
}

export function Reveal({ children, variants, stagger, className, as = 'div', amount = 0.15, delay }: Props) {
  const Tag = motion[as] as any
  const v = variants ?? (stagger ? staggerContainer : fadeSlideIn)
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={v}
      transition={delay !== undefined ? { delay } : undefined}
    >
      {children}
    </Tag>
  )
}

export function RevealItem({ children, className, variants, as = 'div' }: { children: ReactNode; className?: string; variants?: Variants; as?: 'div' | 'li' | 'article' | 'p' | 'h2' | 'h3' | 'ul' | 'ol' }) {
  const Tag = motion[as] as any
  return (
    <Tag className={className} variants={variants ?? fadeSlideIn}>
      {children}
    </Tag>
  )
}
