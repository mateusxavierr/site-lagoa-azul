import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { WHATSAPP_URL } from '@/lib/data'
import { cn } from '@/lib/utils'

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

      <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
        {SPORTS.map((sport, i) => {
          const reverse = i % 2 === 1
          return (
            <Reveal key={sport.id} stagger as="article">
              <div id={sport.id} className="scroll-mt-20" />
              <div
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center',
                  reverse && 'lg:[&>*:first-child]:order-2',
                )}
              >
                <RevealItem>
                  <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                    <img
                      src={sport.image}
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
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
