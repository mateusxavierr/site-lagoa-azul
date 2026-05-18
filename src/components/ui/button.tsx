import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider font-bold transition-all duration-base ease-standard disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-primary text-text-on-brand rounded-full shadow-md hover:scale-[1.02] hover:shadow-glow-brand active:scale-[0.98]',
        secondary:
          'bg-surface-card text-text-primary border border-border-strong rounded-full hover:bg-state-hover-bg active:bg-state-active-bg',
        ghost:
          'bg-transparent text-text-primary rounded-full hover:bg-state-hover-bg active:bg-state-active-bg',
        outline:
          'bg-transparent text-white border border-white/40 rounded-full hover:bg-white/10 hover:border-white',
        link:
          'bg-transparent text-text-link rounded-none p-0 h-auto normal-case font-sans tracking-normal hover:text-text-link-hover underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 text-label',
        sm: 'h-10 px-5 text-caption',
        lg: 'h-touch-min px-7 text-base',
        icon: 'h-touch-min w-touch-min',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp: any = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { buttonVariants }
