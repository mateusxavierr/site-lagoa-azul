import { Section } from '@/components/primitives/Section'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { asset } from '@/lib/asset'

const ITEMS = [
  {
    label: 'Natação',
    subtitle: 'Programa ativo com piscina própria.',
    image: '/imagens_modalidades/piscina_lagoa_azul.png',
    accent: '#7dd3fc',
    symbol: '~',
  },
  {
    label: 'Pilates & Fisioterapia',
    subtitle: 'Movimento e recuperação para atletas de todos os níveis.',
    image: '/imagens_modalidades/pilates_lagoa_azul.png',
    accent: '#6ee7b7',
    symbol: '+',
  },
  {
    label: 'Badminton',
    subtitle: 'Quadras dedicadas disponíveis para membros.',
    image: '/imagens_modalidades/badminton_lagoa_azul.png',
    accent: '#ddd6fe',
    symbol: '×',
  },
  {
    label: 'Pickleball',
    subtitle: 'O esporte que mais cresce no mundo. Quadras prontas para você.',
    image: '/imagens_modalidades/pickleball_lagoa_azul.png',
    accent: '#fde68a',
    symbol: '◇',
  },
]

export function MaisModalidades() {
  return (
    <Section id="mais-modalidades">
      <Reveal>
        <h3 className="font-display uppercase text-[clamp(28px,4vw,44px)] leading-tight tracking-tight font-black text-text-primary mb-12 max-w-prose">
          Mais modalidades. Um único endereço.
        </h3>
      </Reveal>

      <Reveal stagger as="ul" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {ITEMS.map(({ label, subtitle, image, accent, symbol }) => (
          <RevealItem key={label} as="li">
            <div
              className="group relative overflow-hidden rounded-2xl p-8 md:p-10 min-h-[220px] flex flex-col justify-between cursor-default transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Background image */}
              <img
                src={asset(image)}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay so text stays legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20 transition-opacity duration-500 group-hover:from-black/80 group-hover:via-black/50" />
              {/* Background decorative symbol */}
              <span
                className="absolute -right-4 -top-6 font-display font-black text-[10rem] leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
                style={{ color: accent, opacity: 0.15 }}
                aria-hidden
              >
                {symbol}
              </span>

              {/* Top: accent dot */}
              <div
                className="w-3 h-3 rounded-full mb-6"
                style={{ backgroundColor: accent }}
              />

              {/* Bottom: label + subtitle */}
              <div className="flex flex-col gap-2 relative z-10">
                <h4
                  className="font-display uppercase font-black text-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
                >
                  {label}
                </h4>
                <p
                  className="text-body-sm leading-snug max-w-[32ch] opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-80 group-hover:translate-y-0"
                  style={{ color: accent }}
                >
                  {subtitle}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </Reveal>

      <p className="text-caption text-text-muted mt-10 max-w-prose">
        Horários e detalhes dos programas: consulte nossa equipe pelo WhatsApp.
      </p>
    </Section>
  )
}
