import { ArrowRight, Calendar } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { Card, CardBody } from '@/components/ui/card'
import { PlaceholderImage } from '@/components/primitives/PlaceholderImage'
import { LETZPLAY_URL } from '@/lib/data'

const PLACEHOLDER_EVENTS = [
  { badge: '[MODALIDADE · FORMATO]', date: '[MÊS ANO]', title: '[Nome do próximo torneio]', body: '[Descrição breve — modalidade, categorias, nível de participação]' },
  { badge: '[MODALIDADE · FORMATO]', date: '[MÊS ANO]', title: '[Nome do próximo torneio]', body: '[Descrição breve — modalidade, categorias, nível de participação]' },
  { badge: '[MODALIDADE · FORMATO]', date: '[MÊS ANO]', title: '[Nome do próximo torneio]', body: '[Descrição breve — modalidade, categorias, nível de participação]' },
]

const BRIEFING =
  'Foto por card. Conteúdo: usar foto correspondente a cada torneio específico quando os cards forem preenchidos. Proporção 16:9 por card. Fonte: Instagram @lagoaazultenisclube ou LetzPlay. Nota: se os eventos ainda não tiverem fotos próprias, usar imagem genérica da quadra da respectiva modalidade.'

export function ProximosEventos() {
  return (
    <Section id="proximos-eventos">
      <SectionHeader eyebrow="Em breve" title="O que está por vir" />

      <p className="text-caption text-text-muted italic mb-8 max-w-prose">
        [INSERIR — HUMANO: preencher com calendário real de torneios 2025/2026 via LetzPlay (letzplay.me/LagoaAzul-tc) — nome, modalidade, data e formato]
      </p>

      <Reveal stagger as="ul" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid">
        {PLACEHOLDER_EVENTS.map((e, i) => (
          <RevealItem key={i} as="li">
            <Card variant="default" className="h-full">
              <PlaceholderImage ratio="16:9" briefing={BRIEFING} rounded={false} />
              <CardBody>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-eyebrow uppercase tracking-[0.18em] font-bold border border-brand-primary/30">
                    {e.badge}
                  </span>
                  <span className="text-caption uppercase tracking-[0.18em] text-text-muted font-bold">{e.date}</span>
                </div>
                <h3 className="font-display uppercase text-h3 font-bold tracking-tight text-text-primary">{e.title}</h3>
                <p className="text-body-sm text-text-secondary">{e.body}</p>
                <a
                  href={LETZPLAY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 mt-2 text-label uppercase tracking-wider font-display font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                >
                  Inscrições via LetzPlay
                  <ArrowRight className="w-4 h-4 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
                </a>
              </CardBody>
            </Card>
          </RevealItem>
        ))}
      </Reveal>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-body-sm text-text-secondary inline-flex items-center gap-2">
          <Calendar className="w-4 h-4 text-brand-primary" aria-hidden /> Calendário completo e inscrições via LetzPlay.
        </p>
        <a
          href={LETZPLAY_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-label uppercase tracking-wider font-display font-bold text-brand-primary hover:text-brand-secondary transition-colors"
        >
          Acessar LetzPlay
          <ArrowRight className="w-4 h-4 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </Section>
  )
}
