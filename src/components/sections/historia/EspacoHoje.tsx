import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Section } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { asset } from '@/lib/asset'

// ─── Data ─────────────────────────────────────────────────────────────────────

const PHOTOS = [
  {
    src: '/imagens_historia/panoramica_lagoa_azul.png',
    label: 'Vista panorâmica do complexo',
    alt: 'Vista aérea do Lagoa Azul Tênis Clube mostrando todas as quadras e instalações',
  },
  {
    src: '/imagens_historia/quadras_lagoa_azul.png',
    label: 'Quadras de saibro',
    alt: 'Quadras de saibro cobertas e iluminadas do Lagoa Azul Tênis Clube',
  },
  {
    src: '/imagens_historia/convivencia_lagoa_azul.png',
    label: 'Área de convivência',
    alt: 'Área de convivência e recepção do Lagoa Azul Tênis Clube',
  },
  {
    src: '/imagens_historia/reserva_wellness_center.png',
    label: 'Wellness Center',
    alt: 'Interior do Wellness Center do Lagoa Azul Tênis Clube com equipamentos de treino',
  },
  {
    src: '/imagens_historia/torneio_lagoa_azul.png',
    label: 'Torneios & comunidade',
    alt: 'Momento de torneio e cerimônia no Lagoa Azul Tênis Clube',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function EspacoHoje() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()

  const prev = () => setActive((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)
  const next = () => setActive((i) => (i + 1) % PHOTOS.length)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev()
  }

  const fadeProps = reduced
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.32, ease: [0.2, 0.8, 0.2, 1] as const },
      }

  const captionProps = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
        transition: { duration: 0.28, ease: [0.2, 0.8, 0.2, 1] as const },
      }

  return (
    <Section id="espaco-hoje" className="bg-surface-muted">
      <Reveal>
        <h2 className="font-display uppercase text-[clamp(32px,5vw,56px)] leading-[1.02] tracking-tight font-black text-text-primary mb-10 max-w-prose">
          As instalações que a história construiu.
        </h2>
      </Reveal>

      {/* ── Desktop: spotlight + filmstrip vertical ── */}
      <div className="hidden md:flex gap-3 h-[500px]">

        {/* Main image */}
        <div
          className="relative flex-1 rounded-xl overflow-hidden bg-neutral-200 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          tabIndex={0}
          role="img"
          aria-label={PHOTOS[active].alt}
          onKeyDown={handleKeyDown}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={asset(PHOTOS[active].src)}
              alt={PHOTOS[active].alt}
              className="absolute inset-0 w-full h-full object-cover"
              {...fadeProps}
            />
          </AnimatePresence>

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 pt-16 pb-5 px-6 bg-gradient-to-t from-brand-secondary/75 to-transparent pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                className="font-display uppercase text-label tracking-widest text-text-inverse font-black"
                {...captionProps}
              >
                {PHOTOS[active].label}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-inverse/15 pointer-events-none">
            <motion.div
              className="h-full bg-brand-primary origin-left"
              animate={{ scaleX: (active + 1) / PHOTOS.length }}
              transition={reduced ? { duration: 0 } : { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Counter pill */}
          <div className="absolute top-4 right-4 bg-brand-secondary/60 rounded-full px-3 py-1 pointer-events-none">
            <span className="font-display text-caption text-text-inverse font-black tracking-wider">
              {active + 1} / {PHOTOS.length}
            </span>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex flex-col gap-2 w-24 flex-shrink-0">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setActive(i)}
              aria-label={photo.label}
              aria-pressed={i === active}
              className={cn(
                'relative flex-1 rounded-lg overflow-hidden transition-all duration-300 ease-standard',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 focus-visible:ring-offset-surface-muted',
                i === active
                  ? 'ring-2 ring-brand-primary ring-offset-2 ring-offset-surface-muted opacity-100'
                  : 'opacity-50 hover:opacity-80 hover:scale-[1.04]',
              )}
            >
              <img
                src={asset(photo.src)}
                alt=""
                aria-hidden
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile: main image + horizontal thumbnail row ── */}
      <div className="md:hidden flex flex-col gap-3">

        {/* Main image */}
        <div className="relative rounded-xl overflow-hidden bg-neutral-200 aspect-[4/3]">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={asset(PHOTOS[active].src)}
              alt={PHOTOS[active].alt}
              className="absolute inset-0 w-full h-full object-cover"
              {...fadeProps}
            />
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 pt-12 pb-4 px-4 bg-gradient-to-t from-brand-secondary/75 to-transparent pointer-events-none">
            <p className="font-display uppercase text-label tracking-widest text-text-inverse font-black">
              {PHOTOS[active].label}
            </p>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-inverse/15 pointer-events-none">
            <motion.div
              className="h-full bg-brand-primary"
              animate={{ scaleX: (active + 1) / PHOTOS.length }}
              transition={reduced ? { duration: 0 } : { duration: 0.35 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </div>

        {/* Horizontal thumbnail row */}
        <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setActive(i)}
              aria-label={photo.label}
              aria-pressed={i === active}
              className={cn(
                'relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden snap-start transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary',
                i === active
                  ? 'ring-2 ring-brand-primary ring-offset-1 ring-offset-surface-muted opacity-100'
                  : 'opacity-50 hover:opacity-80',
              )}
            >
              <img src={photo.src} alt="" aria-hidden className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </Section>
  )
}
