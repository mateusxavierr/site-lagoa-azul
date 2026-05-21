import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { WHATSAPP_URL } from '@/lib/data'
import { cn } from '@/lib/utils'
import { asset } from '@/lib/asset'

type Sport = {
  id: string
  title: string
  body: string
  tags: string[]
  image: string
}

const SPORTS: Sport[] = [
  {
    id: 'tenis',
    title: 'Tênis',
    body:
      'Saibro coberto, iluminação e ranking semestral com cerimônia de premiação. Escolinha ativa para 9 a 18 anos — inclusive com etapas do circuito nacional.',
    tags: ['Saibro coberto', 'Ranking LetzPlay', 'Escolinha 9–18 anos'],
    image: '/imagens_modalidades/tenis_modalidade.jpeg',
  },
  {
    id: 'padel',
    title: 'Padel',
    body:
      'O esporte que mais cresce no Brasil tem quadras cobertas e torneios próprios aqui. Uma comunidade em formação — boa hora para entrar.',
    tags: ['Quadras cobertas', 'Torneios próprios', 'Em expansão'],
    image: '/imagens_modalidades/padel_modalidade.png',
  },
  {
    id: 'beach-tennis',
    title: 'Beach Tennis',
    body:
      'Quadras de areia com intensidade de competição. O torneio "Rainha das Quadras" já é parte do calendário do clube.',
    tags: ['Quadras de areia', 'Torneio Rainha das Quadras'],
    image: '/imagens_modalidades/beachtenis_modalidade.jpeg',
  },
  {
    id: 'squash',
    title: 'Squash',
    body:
      'Quadras regulamentares e torneio próprio já realizado. Técnica e intensidade — sem precisar sair de Recife para encontrar estrutura de verdade.',
    tags: ['Quadras regulamentares', 'Torneio próprio'],
    image: '/imagens_modalidades/squash_modalidade.png',
  },
]

export function ModalidadesRaquete() {
  return (
    <Section id="modalidades-raquete">
      <SectionHeader
        eyebrow="Esportes de raquete"
        title="Escolha o seu. Ou experimente todos."
      />

      <div className="flex flex-col">
        {SPORTS.map((sport, i) => {
          const reverse = i % 2 === 1
          return (
            <div key={sport.id}>
              {/* Divisor entre esportes */}
              {i > 0 && (
                <div
                  className="h-px mx-auto w-3/4 my-16 md:my-24 lg:my-28"
                  style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(10,169,190,0.25) 30%, rgba(117,181,59,0.2) 70%, transparent 100%)' }}
                  aria-hidden
                />
              )}

              <Reveal stagger as="article">
                <div id={sport.id} className="scroll-mt-20" />
                <div className="relative overflow-hidden">
                  {/* Watermark fora do grid para não interferir no order */}
                  <span
                    aria-hidden
                    className="pointer-events-none select-none absolute font-display font-black uppercase leading-none text-text-primary opacity-[0.04] hidden lg:block"
                    style={{
                      fontSize: 'clamp(80px, 12vw, 160px)',
                      bottom: '-0.1em',
                      [reverse ? 'left' : 'right']: '-0.05em',
                      letterSpacing: '-0.03em',
                      zIndex: 0,
                    }}
                  >
                    {sport.title}
                  </span>

                  <div
                    className={cn(
                      'relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center',
                      reverse && 'lg:[&>*:first-child]:order-2',
                    )}
                    style={{ zIndex: 1 }}
                  >
                  <RevealItem>
                    <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                      <img
                        src={asset(sport.image)}
                        alt={sport.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </RevealItem>

                  <RevealItem className="flex flex-col gap-5">
                    <h3 className="font-display uppercase text-[clamp(36px,5vw,56px)] leading-[0.98] tracking-tight font-black text-text-primary">
                      {sport.title}
                    </h3>
                    <p className="text-body-lg text-text-secondary max-w-prose">{sport.body}</p>
                    <ul className="flex flex-wrap gap-2 mt-2">
                      {sport.tags.map((t) => (
                        <li
                          key={t}
                          className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface-muted border border-border text-caption uppercase tracking-[0.12em] font-bold text-text-primary"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 mt-2 text-label uppercase tracking-wider font-display font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                    >
                      Falar pelo WhatsApp
                      <ArrowRight className="w-4 h-4 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
                    </a>
                  </RevealItem>
                  </div>{/* fecha grid */}
                </div>{/* fecha relative overflow-hidden */}
              </Reveal>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
