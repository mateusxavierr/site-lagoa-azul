import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/primitives/Section'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { cn } from '@/lib/utils'

const MODALITIES = [
  {
    title: 'Tênis',
    info: 'Saibro coberto · Ranking · Escolinha',
    to: '/modalidades#tenis',
    image: '/tenis_home.jpeg',
  },
  {
    title: 'Padel',
    info: 'Quadras cobertas · Torneios próprios',
    to: '/modalidades#padel',
    image: '/modal-padel.jpg',
  },
  {
    title: 'Beach Tennis',
    info: 'Quadra de areia · Rainha das Quadras',
    to: '/modalidades#beach-tennis',
    image: '/modal-beach.jpg',
  },
  {
    title: 'Squash & mais',
    info: 'Badminton · Pickleball · Quadras dedicadas',
    to: '/modalidades#squash',
    image: '/modal-squash.jpg',
  },
  {
    title: 'Wellness',
    info: 'Natação · Pilates · Academia · Fisioterapia',
    to: '/modalidades#wellness',
    image: '/wellness_home_novo.jpg',
  },
]

export function ModalidadesOverview() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <Section id="modalidades-overview">
      <Container>
        <div className="mb-10 flex flex-col gap-3 max-w-2xl mx-auto">
          <Eyebrow>Para todo nível · Todas as raquetes</Eyebrow>
          <h2 className="font-display uppercase text-[clamp(32px,5vw,56px)] leading-[1.02] tracking-tight font-black text-text-primary">
            Escolha o seu esporte.<br />O clube cuida do resto.
          </h2>
        </div>

        {/* List container */}
        <div
          className="relative overflow-hidden rounded-xl flex flex-col aspect-square max-w-2xl mx-auto"
          onMouseLeave={() => setActive(null)}
        >
          {/* Full-area image overlay — pointer-events:none so rows stay hoverable */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                className="absolute inset-0 z-10 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <motion.img
                  src={MODALITIES[active].image}
                  alt=""
                  aria-hidden
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                />
                {/* Gradient so active row text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Rows */}
          {MODALITIES.map((m, i) => {
            const isActive = active === i
            const hasAny = active !== null

            return (
              <div
                key={m.title}
                className={cn(
                  'relative flex-1 flex flex-col justify-center border-b border-border last:border-b-0 transition-colors duration-300',
                  isActive ? 'border-transparent' : hasAny ? 'border-white/10' : 'border-border',
                )}
                style={{ zIndex: isActive ? 20 : 1 }}
                onMouseEnter={() => setActive(i)}
              >
                <div className="flex items-center justify-between gap-6 px-6 py-3 md:px-8 md:py-3">
                  {/* Left: name + info */}
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className={cn(
                        'font-display uppercase font-black leading-none transition-colors duration-300',
                        isActive ? 'text-white' : 'text-text-primary',
                      )}
                      style={{ fontSize: 'clamp(20px, 2.6vw, 44px)', letterSpacing: '0.04em' }}
                    >
                      {m.title}
                    </h3>
                    {m.info && (
                      <span
                        className={cn(
                          'text-caption uppercase tracking-[0.18em] transition-colors duration-300',
                          isActive ? 'text-white/60' : 'text-text-muted',
                        )}
                      >
                        {m.info}
                      </span>
                    )}
                  </div>

                  {/* Right: arrow link */}
                  <Link
                    to={m.to}
                    className={cn(
                      'shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300',
                      isActive
                        ? 'border-brand-primary bg-brand-primary text-white scale-110'
                        : 'border-border-strong text-text-muted hover:border-brand-primary hover:text-brand-primary',
                    )}
                    aria-label={`Conhecer ${m.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer link */}
        <div className="mt-8 flex justify-end max-w-2xl mx-auto">
          <Link
            to="/modalidades"
            className="group inline-flex items-center gap-2 text-label uppercase tracking-wider font-display font-bold text-brand-primary hover:text-text-primary transition-colors"
          >
            Ver todas as modalidades
            <ArrowUpRight className="w-4 h-4 transition-transform duration-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
