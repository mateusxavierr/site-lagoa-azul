import { ArrowRight, MessageCircle, ExternalLink, Clock, CheckCircle2 } from 'lucide-react'
import { SocialIcon } from '@/components/primitives/SocialIcon'
import type { ComponentType, SVGProps } from 'react'
import { Section } from '@/components/primitives/Section'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { CLUB, WHATSAPP_URL, LETZPLAY_URL, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED } from '@/lib/data'

const InstagramIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) => (
  <SocialIcon {...props} name="instagram" />
)

const SECONDARY_CHANNELS = [
  { Icon: InstagramIcon, label: 'Instagram', value: CLUB.instagram, href: INSTAGRAM_URL },
  { Icon: ExternalLink, label: 'Rankings no LetzPlay', value: CLUB.letzplay, href: LETZPLAY_URL },
]

const TRUST_ITEMS = [
  'Visita gratuita · sem compromisso',
  'Respondemos em até 2 horas',
  'Mais de 1.382 membros ativos',
]

export function MapaInfo() {
  return (
    <Section id="mapa-info">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">

        {/* ── Coluna esquerda: CTA ── */}
        <Reveal stagger className="flex flex-col gap-6">

          {/* Headline */}
          <RevealItem>
            <h2 className="font-display uppercase text-[clamp(32px,4.5vw,52px)] leading-[0.96] tracking-tight font-black text-text-primary">
              Fale com a gente{' '}
              <span
                style={{
                  background: 'linear-gradient(92deg, #0AA9BE 0%, #75B53B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                agora.
              </span>
            </h2>
            <p className="text-body-lg text-text-secondary mt-3 leading-relaxed">
              Nossa equipe responde rápido e mostra como fazer parte do clube — sem enrolação.
            </p>
          </RevealItem>

          {/* Trust signals */}
          <RevealItem>
            <ul className="flex flex-col gap-2">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-body-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#75B53B' }} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>

          {/* WhatsApp card — CTA primário */}
          <RevealItem>
            <div
              className="flex flex-col gap-5 p-6 rounded-2xl border-2 border-brand-primary/30"
              style={{ background: 'linear-gradient(135deg, rgba(10,169,190,0.07) 0%, rgba(117,181,59,0.05) 100%)' }}
            >
              {/* Cabeçalho do card */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-primary/15 text-brand-primary shrink-0">
                    <MessageCircle className="w-5 h-5" aria-hidden />
                  </span>
                  <div>
                    <span className="text-eyebrow uppercase tracking-[0.18em] text-text-muted block">WhatsApp</span>
                    <span className="font-display uppercase text-[clamp(18px,2.5vw,26px)] font-black tracking-tight text-text-primary leading-tight">
                      {CLUB.whatsapp.display}
                    </span>
                  </div>
                </div>
                {/* Badge */}
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0 text-[11px] font-bold uppercase tracking-[0.12em]"
                  style={{ backgroundColor: 'rgba(117,181,59,0.12)', color: '#75B53B', border: '1px solid rgba(117,181,59,0.3)' }}
                >
                  <Clock className="w-3 h-3" aria-hidden />
                  Até 2h
                </span>
              </div>

              <p className="text-body-sm text-text-secondary leading-relaxed">
                Clique abaixo e inicie uma conversa direta com nossa equipe. Sem formulário, sem espera.
              </p>

              <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
                Quero agendar minha visita
                <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
              </TennisBallCta>
            </div>
          </RevealItem>

          {/* Canais secundários */}
          <RevealItem>
            <p className="text-eyebrow uppercase tracking-[0.18em] text-text-muted mb-3">Outros canais</p>
            <ul className="flex flex-col gap-2">
              {SECONDARY_CHANNELS.map(({ Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-surface-card border border-transparent hover:border-border transition-all duration-base"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-card text-text-secondary shrink-0 group-hover:text-brand-primary transition-colors duration-base">
                      <Icon className="w-4 h-4" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-body-sm font-bold text-text-primary">{label}</span>
                      <span className="text-caption text-text-muted">{value}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-base" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </RevealItem>

        </Reveal>

        {/* ── Coluna direita: Mapa ── */}
        <Reveal className="flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden shadow-lg border border-border min-h-[360px] lg:min-h-[480px] flex-1">
            <iframe
              src={MAPS_EMBED}
              title="Mapa — Lagoa Azul Tênis Clube"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[360px] lg:min-h-[480px] border-0"
              aria-label="Mapa interativo do Google Maps mostrando a localização do clube"
            />
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 text-body-sm font-bold text-brand-primary hover:underline transition-colors duration-base"
          >
            Abrir no Google Maps
            <ArrowRight className="w-4 h-4" aria-hidden />
          </a>
        </Reveal>

      </div>
    </Section>
  )
}
