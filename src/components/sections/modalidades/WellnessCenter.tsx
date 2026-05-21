import { ArrowRight, Dumbbell, Activity, TrendingUp } from 'lucide-react'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { WHATSAPP_URL } from '@/lib/data'
import { asset } from '@/lib/asset'

const FEATURES = [
  { Icon: Dumbbell, label: 'Treino funcional', desc: 'Equipamentos de alto padrão' },
  { Icon: Activity, label: 'Performance esportiva', desc: 'Para atletas de todos os níveis' },
  { Icon: TrendingUp, label: 'Acompanhamento contínuo', desc: 'Evolução mensurável' },
]

export function WellnessCenter() {
  return (
    <section
      id="wellness"
      className="overflow-hidden"
      style={{ background: '#303e47' }}
    >
      {/* ── Mobile: mini-hero (texto + imagem juntos) → features abaixo ── */}
      <div className="md:hidden">

        {/* Hero: imagem com texto overlaid */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: '340px' }}>
          <img
            src={asset('/imagens_modalidades/wellness_center_reserva.png')}
            alt="Reserva Wellness Center"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Gradiente escuro de baixo pra cima para o texto ficar legível */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #303e47 0%, rgba(48,62,71,0.55) 55%, rgba(48,62,71,0.15) 100%)' }} />

          {/* Só o título overlaid — onde o gradiente escuro protege */}
          <div className="relative z-10 flex flex-col px-6 pb-8 pt-10 justify-end h-full" style={{ minHeight: '340px' }}>
            <h2
              className="font-display uppercase font-black text-white leading-[0.88] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(42px, 11vw, 72px)' }}
            >
              Reserva<br />Wellness<br />Center
            </h2>
          </div>
        </div>

        {/* Eyebrow + italic + body + features + CTA no cinza escuro */}
        <div className="px-6 py-8 flex flex-col gap-5">
          <Eyebrow tone="inverse">Novo · Aberto em 2025</Eyebrow>
          <p className="font-serif-italic text-lg text-brand-primary tracking-wide">
            Treino. Performance. Evolução.
          </p>
          <p className="text-body text-white/65 leading-relaxed">
            Um espaço de condicionamento e saúde para membros do clube. Para quem quer melhorar o rendimento — dentro e fora das quadras.
          </p>
          <ul className="flex flex-col gap-3">
            {FEATURES.map(({ Icon, label, desc }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                  style={{ background: 'rgba(10,169,190,0.12)', border: '1px solid rgba(10,169,190,0.25)' }}>
                  <Icon className="w-5 h-5 text-brand-primary" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-body font-bold text-white leading-tight">{label}</span>
                  <span className="text-caption text-white/40">{desc}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg" className="w-full justify-center">
              Saber mais pelo WhatsApp
              <ArrowRight className="w-5 h-5" aria-hidden />
            </TennisBallCta>
          </div>
        </div>

      </div>

      {/* ── Desktop: layout original com clip diagonal ── */}
      <div className="hidden md:flex relative items-center" style={{ minHeight: '680px' }}>
        {/* Photo — right side, raw, no overlay, diagonal clip */}
        <div
          className="absolute inset-y-0 right-0"
          style={{
            width: '62%',
            clipPath: 'polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <img
            src={asset('/imagens_modalidades/wellness_center_reserva.png')}
            alt="Reserva Wellness Center"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Soft shadow on the diagonal edge for depth */}
        <div
          className="absolute inset-y-0 pointer-events-none"
          style={{
            right: 'calc(62% - 80px)',
            width: '120px',
            background: 'linear-gradient(to right, #303e47 0%, transparent 100%)',
            zIndex: 2,
          }}
          aria-hidden
        />

        {/* Content — left side */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-12 xl:px-20 py-32">
          <Reveal stagger className="flex flex-col gap-6 max-w-[480px]">
            <RevealItem>
              <Eyebrow tone="inverse">Novo · Aberto em 2025</Eyebrow>
            </RevealItem>
            <RevealItem>
              <p className="font-serif-italic text-lg text-brand-primary tracking-wide">
                Treino. Performance. Evolução.
              </p>
            </RevealItem>
            <RevealItem>
              <h2
                className="font-display uppercase font-black text-white leading-[0.88] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(48px, 6vw, 84px)' }}
              >
                Reserva<br />Wellness<br />Center
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-body-lg text-white/65 leading-relaxed max-w-sm">
                Um espaço de condicionamento e saúde para membros do clube. Para quem quer melhorar o rendimento — dentro e fora das quadras.
              </p>
            </RevealItem>
            <RevealItem as="ul" className="flex flex-col gap-3 mt-2">
              {FEATURES.map(({ Icon, label, desc }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                    style={{ background: 'rgba(10,169,190,0.12)', border: '1px solid rgba(10,169,190,0.25)' }}>
                    <Icon className="w-5 h-5 text-brand-primary" aria-hidden />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-body font-bold text-white leading-tight">{label}</span>
                    <span className="text-caption text-white/40">{desc}</span>
                  </span>
                </li>
              ))}
            </RevealItem>
            <RevealItem className="mt-3">
              <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
                Saber mais pelo WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
              </TennisBallCta>
            </RevealItem>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
