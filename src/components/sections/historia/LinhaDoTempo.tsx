import { useRef, useEffect, useState, forwardRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Trophy, TrendingUp, Building2, Flag, Medal, Star, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/primitives/Container'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// ─── Data ────────────────────────────────────────────────────────────────────

type ColorKey = 'primary' | 'vital'

interface MilestoneData {
  year: string
  icon: LucideIcon
  color: ColorKey
  watermark: string
  text: string
}

const MILESTONES: MilestoneData[] = [
  {
    year: '2012',
    icon: Trophy,
    color: 'primary',
    watermark: '2012',
    text: 'Nasce o Torneio Lagoa Azul — o maior torneio amador de duplas do Nordeste. Sem quadra própria. Só nome e tradição.',
  },
  {
    year: '2012–2023',
    icon: TrendingUp,
    color: 'vital',
    watermark: '10+',
    text: 'Mais de uma década de torneios, rankings e uma reputação que cresceu além de Pernambuco. O nome Lagoa Azul já era conhecido antes de qualquer endereço.',
  },
  {
    year: 'Jan 2024',
    icon: Building2,
    color: 'primary',
    watermark: '2024',
    text: 'Kase Capital Investments adquire o espaço do antigo Recife Tênis Clube. O projeto do clube físico começa a tomar forma.',
  },
  {
    year: 'Set 2024',
    icon: Flag,
    color: 'vital',
    watermark: 'SET',
    text: 'Inauguração do Lagoa Azul Tênis Clube. O torneio finalmente tem o clube que sempre mereceu.',
  },
  {
    year: 'Nov 2024',
    icon: Medal,
    color: 'primary',
    watermark: 'ITF',
    text: '6ª edição do Brasil Tennis Classic ITF M15. Atletas do ranking ATP em Recife, US$ 15.000 em premiação, patrocinado por Santander, Vivo e Azul Linhas Aéreas.',
  },
  {
    year: '2025',
    icon: Star,
    color: 'vital',
    watermark: '2025',
    text: 'Wellness Center, novas modalidades e ranking semestral com cerimônia. O complexo de raquete mais completo do Norte Nordeste.',
  },
]

// ─── Color tokens ─────────────────────────────────────────────────────────────

const COLORS: Record<
  ColorKey,
  {
    dot: string
    ring: string
    icon: string
    year: string
    watermark: string
    activeBorder: string
    activeShadow: string
  }
> = {
  primary: {
    dot: 'bg-brand-primary',
    ring: 'ring-brand-primary/25',
    icon: 'text-brand-primary bg-brand-primary/10',
    year: 'text-brand-primary',
    watermark: 'text-brand-primary',
    activeBorder: 'border-brand-primary/50',
    activeShadow: 'shadow-glow-subtle',
  },
  vital: {
    dot: 'bg-brand-vital',
    ring: 'ring-brand-vital/25',
    icon: 'text-brand-vital bg-brand-vital/10',
    year: 'text-brand-vital',
    watermark: 'text-brand-vital',
    activeBorder: 'border-brand-vital/50',
    activeShadow: 'shadow-glow-vital',
  },
}

// ─── MilestoneItem ────────────────────────────────────────────────────────────

interface MilestoneItemProps {
  milestone: MilestoneData
  index: number
  total: number
  isActive: boolean
  reduced: boolean
}

const MilestoneItem = forwardRef<HTMLLIElement, MilestoneItemProps>(
  function MilestoneItem({ milestone, index, total, isActive, reduced }, ref) {
    const isLeft = index % 2 === 0
    const c = COLORS[milestone.color]
    const Icon = milestone.icon

    const card = (
      <motion.div
        initial={reduced ? false : { opacity: 0, x: isLeft ? -24 : 24, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.25 }}
        whileHover={!isActive && !reduced ? { y: -4 } : {}}
        transition={{
          default: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
          y: { duration: 0.22, ease: [0.2, 0.8, 0.2, 1] },
        }}
        className={cn(
          'relative overflow-hidden rounded-xl p-6 border bg-surface-card',
          'transition-shadow duration-300',
          isActive
            ? cn('border-2', c.activeBorder, c.activeShadow)
            : 'border-border-subtle shadow-sm hover:shadow-md',
        )}
      >
        {/* Watermark year */}
        <span
          aria-hidden
          className={cn(
            'pointer-events-none select-none absolute font-display font-black leading-none opacity-[0.055]',
            c.watermark,
          )}
          style={{
            fontSize: '6rem',
            bottom: '-1rem',
            [isLeft ? 'right' : 'left']: '-0.75rem',
          }}
        >
          {milestone.watermark}
        </span>

        {/* Icon + year label */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={cn(
              'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0',
              c.icon,
            )}
          >
            <Icon size={18} aria-hidden />
          </div>
          <p className={cn('font-display text-label uppercase tracking-widest font-black', c.year)}>
            {milestone.year}
          </p>
        </div>

        <p className="text-body-sm text-text-secondary leading-relaxed">{milestone.text}</p>
      </motion.div>
    )

    return (
      <li ref={ref} className="relative">
        {/* ── Desktop: 3-column alternating grid ── */}
        <div className="hidden md:grid md:grid-cols-[1fr_52px_1fr] md:items-start md:py-8">
          {/* Left slot */}
          <div className="pr-6">{isLeft ? card : null}</div>

          {/* Center dot */}
          <div className="flex justify-center items-start pt-7">
            <motion.div
              initial={reduced ? false : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.18, ease: [0.34, 1.56, 0.64, 1] }}
              className={cn(
                'w-4 h-4 rounded-full border-[3px] border-surface-page',
                'transition-all duration-500 ease-standard',
                c.dot,
                isActive ? cn('ring-4', c.ring, 'scale-125') : '',
              )}
            />
          </div>

          {/* Right slot */}
          <div className="pl-6">{!isLeft ? card : null}</div>
        </div>

        {/* ── Mobile: left-bordered stacked layout ── */}
        <div className="md:hidden relative pl-9 py-6">
          {/* Connector line to next item */}
          {index < total - 1 && (
            <div className="absolute left-[13px] top-10 bottom-0 w-px bg-brand-primary/15" />
          )}
          {/* Dot */}
          <div
            className={cn(
              'absolute left-[6px] top-[1.875rem] w-3 h-3 rounded-full border-2 border-surface-page',
              c.dot,
            )}
          />
          {card}
        </div>
      </li>
    )
  },
)

// ─── Main export ──────────────────────────────────────────────────────────────

export function LinhaDoTempo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const reduced = useReducedMotion()

  // Scroll-driven progress fill line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 30%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })

  // Dynamic active state: track which milestone is centered in the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    itemRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i)
        },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <section
      id="linha-do-tempo"
      className="relative overflow-hidden py-section-y md:py-section-y-md lg:py-section-y-lg"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f8fa 55%, #e6f4f7 100%)' }}
    >
      {/* Glows decorativos sobre o gradiente */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 40% at 0% 20%, rgba(10,169,190,0.10) 0%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 35% at 100% 80%, rgba(117,181,59,0.08) 0%, transparent 70%)' }} />
      </div>

      {/* Linhas diagonais em teal */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(10,169,190,0.07) 0px, rgba(10,169,190,0.07) 1px, transparent 0px, transparent 50%)',
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-10">
      <SectionHeader
        eyebrow="Nossa trajetória"
        title="Uma reputação construída antes de ter paredes."
      />

      <div ref={containerRef} className="relative mt-16 mx-auto max-w-4xl">
        {/* Background line (desktop only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-brand-primary/12 hidden md:block pointer-events-none" />

        {/* Animated fill line (desktop only) */}
        {!reduced && (
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-brand-primary origin-top hidden md:block pointer-events-none"
            style={{ scaleY }}
          />
        )}

        {/* Milestone items */}
        <ol>
          {MILESTONES.map((milestone, i) => (
            <MilestoneItem
              key={milestone.year}
              milestone={milestone}
              index={i}
              total={MILESTONES.length}
              isActive={activeIndex === i}
              reduced={reduced}
              ref={(el) => {
                itemRefs.current[i] = el
              }}
            />
          ))}
        </ol>

      </div>
      </Container>
    </section>
  )
}
