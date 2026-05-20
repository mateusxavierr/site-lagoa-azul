import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { WHATSAPP_URL } from '@/lib/data'

export function CtaHistoria() {
  return (
    <Section className="bg-surface-inverse text-white">
      <Reveal stagger className="flex flex-col items-center text-center max-w-prose mx-auto">
        <RevealItem as="h2" className="font-display uppercase text-[clamp(36px,5vw,64px)] leading-[0.98] tracking-tight font-black text-white">
          12 anos de história esperam por você.
        </RevealItem>
        <RevealItem className="mt-8">
          <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
            Agendar minha visita
            <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
          </TennisBallCta>
        </RevealItem>
      </Reveal>
    </Section>
  )
}
