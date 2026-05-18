import { cn } from '@/lib/utils'

const ArcLeft = () => (
  <svg viewBox="0 0 94 94" fill="none" aria-hidden className="cta-tennis__arc cta-tennis__arc--left">
    <path
      d="M57.4306 82.4989C64.8 80.3335 71.3128 75.9283 76.0656 69.8944C80.8184 63.8605 83.5755 56.497 83.9545 48.8254C84.3335 41.1538 82.3156 33.5544 78.1807 27.0814C74.0459 20.6084 67.999 15.5827 60.8789 12.7015L58.8811 17.6385C64.9763 20.105 70.1527 24.4073 73.6924 29.9485C77.2321 35.4898 78.9596 41.9953 78.6351 48.5626C78.3107 55.1299 75.9504 61.4335 71.8817 66.5989C67.8131 71.7642 62.2377 75.5353 55.9291 77.389Z"
      fill="white"
      fillOpacity={0.85}
    />
  </svg>
)

const ArcRight = () => (
  <svg viewBox="0 0 98 98" fill="none" aria-hidden className="cta-tennis__arc cta-tennis__arc--right">
    <path
      d="M34.7262 83.1361C27.7896 80.2358 21.9011 75.2912 17.845 68.9606C13.7888 62.6301 11.7576 55.214 12.0216 47.7002C12.2857 40.1863 14.8326 32.9311 19.3231 26.9009C23.8137 20.8707 30.0347 16.3517 37.1578 13.9456L38.8623 18.9914C32.7645 21.0511 27.4389 24.9197 23.5947 30.0819C19.7506 35.2441 17.5703 41.4549 17.3442 47.8872C17.1182 54.3195 18.8571 60.6681 22.3293 66.0874C25.8016 71.5067 30.8425 75.7396 36.7806 78.2224Z"
      fill="white"
      fillOpacity={0.85}
    />
  </svg>
)

interface TennisBallCtaProps {
  href: string
  children: React.ReactNode
  size?: 'default' | 'lg'
  target?: string
  rel?: string
  className?: string
  onClick?: () => void
}

export function TennisBallCta({
  href,
  children,
  size = 'default',
  target,
  rel,
  className,
  onClick,
}: TennisBallCtaProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={cn('cta-tennis group', size === 'lg' && 'cta-tennis--lg', className)}
    >
      <ArcLeft />
      <ArcRight />
      <span className="cta-tennis__label">{children}</span>
    </a>
  )
}
