import { Waves, Heart, Feather, Target } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'

const ITEMS = [
  { Icon: Waves, label: 'Natação', subtitle: 'Programa ativo com piscina própria.' },
  { Icon: Heart, label: 'Pilates e Fisioterapia', subtitle: 'Movimento e recuperação para atletas de todos os níveis.' },
  { Icon: Feather, label: 'Badminton', subtitle: 'Quadras disponíveis para membros.' },
  { Icon: Target, label: 'Pickleball', subtitle: 'Quadras disponíveis para membros.' },
]

export function MaisModalidades() {
  return (
    <Section id="mais-modalidades">
      <Reveal>
        <h3 className="font-display uppercase text-[clamp(28px,4vw,44px)] leading-tight tracking-tight font-black text-text-primary mb-10 max-w-prose">
          Mais modalidades. Um único endereço.
        </h3>
      </Reveal>

      <Reveal stagger as="ul" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-grid">
        {ITEMS.map(({ Icon, label, subtitle }) => (
          <RevealItem key={label} as="li">
            <div className="flex flex-col gap-3 p-card-p md:p-card-p-lg h-full rounded-lg bg-surface-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-base ease-standard">
              <Icon className="w-7 h-7 text-brand-primary" aria-hidden />
              <h4 className="font-display uppercase text-h4 font-bold tracking-tight text-text-primary">{label}</h4>
              <p className="text-body-sm text-text-secondary">{subtitle}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>

      <p className="text-caption text-text-muted mt-8 max-w-prose">
        Horários e detalhes dos programas: consulte nossa equipe pelo WhatsApp.
      </p>
      <p className="text-caption text-text-muted italic mt-2">
        [INSERIR — HUMANO: confirmar serviços de Pilates e Fisioterapia com o clube]
      </p>
    </Section>
  )
}
