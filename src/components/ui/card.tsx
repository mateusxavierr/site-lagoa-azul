import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  'group relative flex flex-col overflow-hidden transition-all duration-base ease-standard',
  {
    variants: {
      variant: {
        default:
          'bg-surface-card border border-border rounded-lg shadow-md hover:-translate-y-0.5 hover:shadow-lg',
        elevated:
          'bg-surface-elevated rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5',
        feature:
          'bg-surface-card rounded-xl shadow-md border-gradient',
        dark:
          'bg-gradient-card-feature text-white rounded-xl shadow-xl border border-border-inverse',
        testimonial:
          'bg-surface-muted rounded-xl border border-border-subtle',
        flat:
          'bg-surface-card border border-border-subtle rounded-lg',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ variant, className }))} {...props} />
))
Card.displayName = 'Card'

export const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-card-p md:p-card-p-lg flex flex-col gap-3', className)} {...props} />
))
CardBody.displayName = 'CardBody'
