import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { PlaceholderImage } from '@/components/primitives/PlaceholderImage'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { WHATSAPP_URL } from '@/lib/data'
import { cn } from '@/lib/utils'

type Sport = {
  id: string
  title: string
  body: string
  tags: string[]
  briefing: string
}

const SPORTS: Sport[] = [
  {
    id: 'tenis',
    title: 'Tênis',
    body:
      'Saibro coberto, iluminação e ranking semestral com cerimônia de premiação. Escolinha ativa para 9 a 18 anos — inclusive com etapas do circuito nacional.',
    tags: ['Saibro coberto', 'Ranking LetzPlay', 'Escolinha 9–18 anos'],
    briefing:
      'Foto. Conteúdo: Jogador em ação — saque ou forehand em quadra de saibro coberta; iluminação ao fundo; saibro levantado no pé. Tom: Técnico, aspiracional, concentrado. Composição: plano médio lateral, câmera ~1m. Proporção 16:9. Fonte: Instagram @lagoaazultenisclube. Alternativa: dois jogadores em partida de simples, quadra completa visível.',
  },
  {
    id: 'padel',
    title: 'Padel',
    body:
      'O esporte que mais cresce no Brasil tem quadras cobertas e torneios próprios aqui. Uma comunidade em formação — boa hora para entrar.',
    tags: ['Quadras cobertas', 'Torneios próprios', 'Em expansão'],
    briefing:
      'Foto. Conteúdo: Partida de padel em andamento — câmera de fora da quadra através do vidro, 2 ou 4 jogadores; paredes de vidro visíveis; smash ou voleio. Tom: Social, dinâmico, vibrante. Composição: plano médio a aberto. Proporção 16:9. Reflexo do vidro mantido. Fonte: Instagram @lagoaazultenisclube — reels do torneio de padel. Alternativa: IA padel glass court 4 players match, warm lighting.',
  },
  {
    id: 'beach-tennis',
    title: 'Beach Tennis',
    body:
      'Quadras de areia com intensidade de competição. O torneio "Rainha das Quadras" já é parte do calendário do clube.',
    tags: ['Quadras de areia', 'Torneio Rainha das Quadras'],
    briefing:
      'Foto. Conteúdo: Jogador em smash ou dupla em troca de bola na quadra de areia; areia, rede e delimitações visíveis; expressão de esforço/euforia. Tom: Energético, descontraído, vibrante. Composição: plano médio lateral. Proporção 16:9. Fonte: Instagram @lagoaazultenisclube — torneio Rainha das Quadras (mai/2025). Alternativa: foto de dois jogadores em troca, foco no movimento e areia.',
  },
  {
    id: 'squash',
    title: 'Squash',
    body:
      'Quadras regulamentares e torneio próprio já realizado. Técnica e intensidade — sem precisar sair de Recife para encontrar estrutura de verdade.',
    tags: ['Quadras regulamentares', 'Torneio próprio'],
    briefing:
      'Foto. Conteúdo: Jogador dentro da quadra de squash em posição de ataque com raquete levantada; paredes laterais e frontão visíveis; iluminação dramática de teto. Tom: Intenso, técnico, premium. Composição: plano médio a leve contrapicado. Proporção 16:9. Tratamento: natural com leve aumento de contraste. Fonte: Instagram @lagoaazultenisclube — posts do torneio de squash. Alternativa: IA squash court player smashing, professional indoor court.',
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
                  <PlaceholderImage ratio="16:9" briefing={sport.briefing} className="shadow-lg" />
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
