import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { WHATSAPP_URL } from '@/lib/data'

export function CtaModalidades() {
  return (
    <Section className="bg-surface-inverse text-white">
      <Reveal stagger className="flex flex-col items-center text-center max-w-prose mx-auto">
        <RevealItem as="h2" className="font-display uppercase text-[clamp(36px,5vw,64px)] leading-[0.98] tracking-tight font-black text-white">
          Não sabe por onde começar?
        </RevealItem>
        <RevealItem as="p" className="text-body-lg text-white/80 mt-6">
          Nossa equipe ajuda você a escolher a modalidade certa para o seu nível e objetivo. Uma conversa rápida, sem compromisso.
        </RevealItem>
        <RevealItem className="mt-8">
          <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
            Falar pelo WhatsApp
            <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
          </TennisBallCta>
        </RevealItem>
        <RevealItem as="p" className="mt-4 text-caption text-white/60 inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-vital" aria-hidden /> Visita gratuita ao clube disponível
        </RevealItem>
      </Reveal>
    </Section>
  )
}
