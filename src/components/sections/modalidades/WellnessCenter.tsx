import { ArrowRight, Dumbbell, Activity, TrendingUp } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { PlaceholderImage } from '@/components/primitives/PlaceholderImage'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/data'

const FEATURES = [
  { Icon: Dumbbell, label: 'Treino funcional' },
  { Icon: Activity, label: 'Performance esportiva' },
  { Icon: TrendingUp, label: 'Acompanhamento contínuo' },
]

const BRIEFING =
  'Foto. Conteúdo: Espaço do Wellness Center com equipamentos de treino funcional/musculação; preferencialmente um membro em uso; ambiente clean e iluminado. Tom: Profissional, premium, motivacional. Composição: plano médio a aberto, câmera de nível do olho. Proporção 16:9. Fonte: Instagram @lagoaazultenisclube — posts do Wellness Center (mai/2025+). Alternativa: IA premium sports performance center, functional training equipment, dark moody aesthetic.'

export function WellnessCenter() {
  return (
    <Section className="bg-surface-inverse text-white" id="wellness">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal stagger className="flex flex-col gap-6">
          <RevealItem><Eyebrow tone="inverse">Novo · Aberto em 2025</Eyebrow></RevealItem>
          <RevealItem as="h2" className="font-display uppercase text-[clamp(36px,5vw,64px)] leading-[0.98] tracking-tight font-black text-white">
            Wellness Center
          </RevealItem>
          <RevealItem as="p" className="font-serif-italic text-h3 text-brand-primary">
            Treino. Performance. Evolução.
          </RevealItem>
          <RevealItem as="p" className="text-body-lg text-white/80 max-w-prose">
            Um espaço de condicionamento e saúde para membros do clube. Para quem quer melhorar o rendimento — dentro e fora das quadras.
          </RevealItem>

          <RevealItem as="ul" className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            {FEATURES.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex flex-col gap-2 p-4 rounded-lg bg-white/5 border border-border-inverse hover:bg-white/10 hover:border-brand-primary/50 transition-colors"
              >
                <Icon className="w-6 h-6 text-brand-primary" aria-hidden />
                <span className="text-body-sm font-bold text-white leading-snug">{label}</span>
              </li>
            ))}
          </RevealItem>

          <RevealItem>
            <p className="text-caption text-white/50 italic mb-3">
              [INSERIR — HUMANO: confirmar serviços e parceiro do Wellness Center com o clube]
            </p>
            <Button asChild variant="outline" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Saber mais pelo WhatsApp
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
            </Button>
          </RevealItem>
        </Reveal>

        <Reveal>
          <PlaceholderImage ratio="4:3" briefing={BRIEFING} tone="dark" className="shadow-2xl" />
        </Reveal>
      </div>
    </Section>
  )
}
