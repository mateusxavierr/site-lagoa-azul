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
    image: '/imagens_home/jogador_tenis_lagoa_azul.png',
  },
  {
    title: 'Padel',
    info: 'Quadras cobertas · Torneios próprios',
    to: '/modalidades#padel',
    image: '/imagens_home/jogadores_padel_lagoa_azul.png',
  },
  {
    title: 'Beach Tennis',
    info: 'Quadra de areia · Rainha das Quadras',
    to: '/modalidades#beach-tennis',
    image: '/imagens_home/jogador_beach_tennis_lagoa_azul.png',
  },
  {
    title: 'Squash & mais',
    info: 'Badminton · Pickleball · Quadras dedicadas',
    to: '/modalidades#squash',
    image: '/imagens_home/jogador_squash_lagoa_azul.png',
  },
  {
    title: 'Wellness',
    info: 'Natação · Pilates · Academia · Fisioterapia',
    to: '/modalidades#wellness',
    image: '/imagens_home/reserva_wellness_center.png',
  },
]

export function ModalidadesOverview() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <Section id="modalidades-overview">
      <Container>
        <div className="mb-10 flex flex-col gap-3 max-w-2xl mx-auto">
          <Eyebrow className="text-[10px] tracking-[0.07em] md:text-eyebrow md:tracking-[0.20em]">Para todo nível · Todas as raquetes</Eyebrow>
          <h2 className="font-display uppercase text-[clamp(32px,5vw,56px)] leading-[1.02] tracking-tight font-black text-text-primary">
            Escolha o seu esporte.<br />O clube cuida do resto.
          </h2>
        </div>

        {/* List container */}
        <div
          className="relative overflow-hidden rounded-xl flex flex-col max-w-2xl mx-auto md:aspect-square"
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
                <div className="flex items-center gap-3 px-4 py-3 md:px-8 md:py-3">
                  {/* Thumbnail — mobile only */}
                  <div className="md:hidden shrink-0 w-14 h-14 rounded-lg overflow-hidden">
                    <img src={m.image} alt="" aria-hidden className="w-full h-full object-cover" />
                  </div>

                  {/* Name + info */}
                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <h3
                      className={cn(
                        'font-display uppercase font-black leading-none transition-colors duration-300',
                        isActive ? 'text-white' : 'text-text-primary',
                      )}
                      style={{ fontSize: 'clamp(26px, 2.6vw, 44px)', letterSpacing: '0.04em' }}
                    >
                      {m.title}
                    </h3>
                    {m.info && (
                      <span
                        className={cn(
                          'hidden md:inline text-caption uppercase tracking-[0.14em] transition-colors duration-300 truncate',
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
                      'shrink-0 inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border transition-all duration-300',
                      isActive
                        ? 'border-brand-primary bg-brand-primary text-white scale-110'
                        : 'border-border-strong text-text-muted hover:border-brand-primary hover:text-brand-primary',
                    )}
                    aria-label={`Conhecer ${m.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
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
