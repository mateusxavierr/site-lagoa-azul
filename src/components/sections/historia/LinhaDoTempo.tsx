import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'

const MILESTONES = [
  {
    year: '2012',
    text: 'Nasce o Torneio Lagoa Azul — o maior torneio amador de duplas do Nordeste. Sem quadra própria. Só nome e tradição.',
  },
  {
    year: '2012–2023',
    text: 'Mais de uma década de torneios, rankings e uma reputação que cresceu além de Pernambuco. O nome Lagoa Azul já era conhecido antes de qualquer endereço.',
  },
  {
    year: 'Jan 2024',
    text: 'Kase Capital Investments adquire o espaço do antigo Recife Tênis Clube. O projeto do clube físico começa a tomar forma.',
  },
  {
    year: 'Set 2024',
    text: 'Inauguração do Lagoa Azul Tênis Clube. O torneio finalmente tem o clube que sempre mereceu.',
  },
  {
    year: 'Nov 2024',
    text: '6ª edição do Brasil Tennis Classic ITF M15. Atletas do ranking ATP em Recife, US$ 15.000 em premiação, patrocinado por Santander, Vivo e Azul Linhas Aéreas.',
  },
  {
    year: '2025',
    text: 'Wellness Center, novas modalidades e ranking semestral com cerimônia. O complexo de raquete mais completo do Norte Nordeste.',
  },
]

export function LinhaDoTempo() {
  return (
    <Section id="linha-do-tempo">
      <SectionHeader
        eyebrow="Nossa trajetória"
        title="Uma reputação construída antes de ter paredes."
      />

      <Reveal stagger as="ol" className="relative max-w-prose mx-auto pl-8 md:pl-10 border-l border-brand-primary/30">
        {MILESTONES.map((m) => (
          <RevealItem
            key={m.year}
            as="li"
            className="relative pb-10 last:pb-0"
          >
            <span
              className="absolute -left-[37px] md:-left-[45px] top-1 flex items-center justify-center w-4 h-4 rounded-full bg-brand-primary shadow-glow-subtle"
              aria-hidden
            />
            <p className="font-display uppercase text-h3 font-black tracking-tight text-brand-primary">
              {m.year}
            </p>
            <p className="mt-2 text-body text-text-secondary leading-relaxed">{m.text}</p>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  )
}
