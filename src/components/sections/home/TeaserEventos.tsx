import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { Container } from '@/components/primitives/Container'
import { Reveal } from '@/components/primitives/Reveal'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { cn } from '@/lib/utils'

const EVENTS = [
  {
    title: 'Brasil Tennis Classic',
    subtitle: 'Atletas do ranking ATP em Recife.',
    image: '/event-atp.jpg',
    href: '/eventos',
    large: true,
  },
  {
    title: 'Torneio Lagoa Azul',
    subtitle: 'O maior amador de duplas do Nordeste.',
    image: '/event-doubles.jpg',
    href: '/eventos',
    large: false,
  },
  {
    title: 'Ranking do Clube',
    subtitle: 'Quadras e ranking atualizados toda semana.',
    image: '/event-courts.jpg',
    href: '/eventos',
    large: false,
  },
]

function EventCard({
  event,
  index,
  hoveredIdx,
  onHover,
  className,
}: {
  event: (typeof EVENTS)[number]
  index: number
  hoveredIdx: number | null
  onHover: (idx: number | null) => void
  className?: string
}) {
  const isHovered = hoveredIdx === index
  const anyHovered = hoveredIdx !== null

  return (
    <Link
      to={event.href}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={cn(
        'group relative flex flex-col justify-end overflow-hidden rounded-xl bg-neutral-900',
        'transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        isHovered ? 'scale-[1.025]' : anyHovered ? 'scale-[0.98] grayscale opacity-50' : '',
        className,
      )}
      style={{ minHeight: event.large ? '620px' : undefined }}
    >
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 p-6 flex flex-col gap-1.5">
        <h3
          className="font-display uppercase font-black tracking-tight text-white leading-[1.05] transition-colors duration-300 group-hover:text-brand-primary"
          style={{ fontSize: event.large ? 'clamp(28px, 3.5vw, 48px)' : 'clamp(20px, 2.5vw, 28px)' }}
        >
          {event.title}
        </h3>
        <p className="text-body-sm text-white/75 leading-snug max-w-[36ch]">
          {event.subtitle}
        </p>
      </div>
    </Link>
  )
}

export function TeaserEventos() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [large, ...rest] = EVENTS

  return (
    <Section id="teaser-eventos" className="bg-surface-page">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-10">
            <div className="flex flex-col gap-3">
              <Eyebrow>Torneios · Rankings · Calendário</Eyebrow>
              <h2 className="font-display uppercase text-[clamp(32px,5vw,56px)] leading-[1.02] tracking-tight font-black text-text-primary">
                O clube que nunca para.
              </h2>
              <p className="text-body-lg text-text-secondary max-w-prose">
                Do ranking interno semanal ao maior torneio amador do Nordeste.
              </p>
            </div>
            <Link
              to="/eventos"
              className="hidden md:inline-flex shrink-0 items-center gap-2 text-label uppercase tracking-wider font-display font-bold text-brand-primary hover:text-text-primary transition-colors group"
            >
              Ver todos
              <ArrowUpRight className="w-4 h-4 transition-transform duration-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-3 md:items-stretch">
            <EventCard
              event={large}
              index={0}
              hoveredIdx={hoveredIdx}
              onHover={setHoveredIdx}
            />

            <div className="flex flex-col gap-3">
              {rest.map((e, i) => (
                <EventCard
                  key={e.title}
                  event={e}
                  index={i + 1}
                  hoveredIdx={hoveredIdx}
                  onHover={setHoveredIdx}
                  className="flex-1 min-h-[200px]"
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Link
              to="/eventos"
              className="inline-flex items-center gap-2 text-label uppercase tracking-wider font-display font-bold text-brand-primary hover:text-text-primary transition-colors group"
            >
              Ver todos os eventos
              <ArrowUpRight className="w-4 h-4 transition-transform duration-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
