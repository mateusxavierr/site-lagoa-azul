import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { Button } from '@/components/ui/button'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { WHATSAPP_URL, LETZPLAY_URL } from '@/lib/data'

export function CtaEventos() {
  return (
    <Section className="bg-surface-muted">
      <Reveal stagger className="flex flex-col items-center text-center max-w-prose mx-auto">
        <RevealItem as="h2" className="font-display uppercase text-[clamp(32px,5vw,56px)] leading-[1.02] tracking-tight font-black text-text-primary">
          Quer participar de um torneio?
        </RevealItem>
        <RevealItem as="p" className="text-body-lg text-text-secondary mt-6">
          Fale com nossa equipe para saber sobre inscrições, calendário e como entrar no ranking do clube.
        </RevealItem>
        <RevealItem className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
            Falar pelo WhatsApp
            <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
          </TennisBallCta>
          <Button asChild variant="secondary" size="lg">
            <a href={LETZPLAY_URL} target="_blank" rel="noreferrer">
              Ver rankings no LetzPlay
            </a>
          </Button>
        </RevealItem>
      </Reveal>
    </Section>
  )
}
