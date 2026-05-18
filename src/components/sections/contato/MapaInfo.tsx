import { ArrowRight, MessageCircle, ExternalLink } from 'lucide-react'
import { SocialIcon } from '@/components/primitives/SocialIcon'
import type { ComponentType, SVGProps } from 'react'

const InstagramIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) => (
  <SocialIcon {...props} name="instagram" />
)
import { Section } from '@/components/primitives/Section'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { Button } from '@/components/ui/button'
import { CLUB, WHATSAPP_URL, LETZPLAY_URL, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED } from '@/lib/data'

const CHANNELS = [
  { Icon: MessageCircle, label: 'WhatsApp', value: CLUB.whatsapp.display, href: WHATSAPP_URL },
  { Icon: InstagramIcon, label: 'Instagram', value: CLUB.instagram, href: INSTAGRAM_URL },
  { Icon: ExternalLink, label: 'LetzPlay', value: CLUB.letzplay, href: LETZPLAY_URL },
]

export function MapaInfo() {
  return (
    <Section id="mapa-info">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
        <Reveal stagger className="flex flex-col gap-6">
          <RevealItem as="h2" className="font-display uppercase text-h2 leading-tight tracking-tight font-black text-text-primary">
            Contato direto
          </RevealItem>
          <RevealItem as="ul" className="flex flex-col gap-4">
            {CHANNELS.map(({ Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg bg-surface-card border border-border hover:border-brand-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-base"
                >
                  <span className="inline-flex items-center justify-center w-touch-min h-touch-min rounded-full bg-brand-primary/10 text-brand-primary shrink-0">
                    <Icon className="w-5 h-5" aria-hidden />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-eyebrow uppercase tracking-[0.18em] text-text-muted">{label}</span>
                    <span className="text-body font-bold text-text-primary">{value}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-text-muted ml-auto transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
                </a>
              </li>
            ))}
          </RevealItem>

          <RevealItem className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button asChild size="lg" className="group">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Abrir no WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                Abrir no Google Maps
              </a>
            </Button>
          </RevealItem>
        </Reveal>

        <Reveal className="rounded-xl overflow-hidden shadow-lg border border-border min-h-[360px] lg:min-h-[480px]">
          <iframe
            src={MAPS_EMBED}
            title="Mapa — Lagoa Azul Tênis Clube"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[360px] lg:min-h-[480px] border-0"
            aria-label="Mapa interativo do Google Maps mostrando a localização do clube"
          />
        </Reveal>
      </div>
    </Section>
  )
}
