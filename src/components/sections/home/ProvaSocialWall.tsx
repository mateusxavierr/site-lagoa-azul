import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { asset } from '@/lib/asset'

const STATS = [
  { value: '1.382',   label: 'membros ativos no LetzPlay',              accent: '#0AA9BE' },
  { value: '12 anos', label: 'do Torneio Lagoa Azul (desde 2012)',       accent: '#75B53B' },
  { value: 'ITF M15', label: '6ª edição do circuito ATP em Recife',      accent: '#F9CC4B' },
  { value: '219',     label: 'atletas no circuito nacional em 2025',     accent: '#FEFEFE' },
]

const SPONSORS = [
  { name: 'Santander',          logo: '/santander_logo.png' },
  { name: 'Azul Linhas Aéreas', logo: '/azul_logo.png'      },
  { name: 'Heineken',           logo: '/heineken_logo.png'  },
  { name: 'Stella Artois',      logo: '/stella_logo.png'    },
]

const TRACK = [...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS]

export function ProvaSocialWall() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32" style={{ backgroundColor: '#023955' }}>

      {/* ── Layered radial glows ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 90% at -5% 55%, rgba(10,169,190,0.26) 0%, transparent 65%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 65% at 108% 15%, rgba(117,181,59,0.20) 0%, transparent 65%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 55% 115%, rgba(249,204,75,0.09) 0%, transparent 60%)' }} />
      </div>

      {/* ── Diagonal texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 0px, transparent 50%)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-24">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#F9CC4B' }} />
              <span className="font-sans uppercase text-xs font-bold tracking-[0.22em]" style={{ color: '#F9CC4B' }}>
                Números que falam
              </span>
            </div>

            <h2
              className="font-display uppercase font-black leading-[0.93] text-white"
              style={{ fontSize: 'clamp(36px, 5vw, 66px)' }}
            >
              Um nome construído em{' '}
              <span
                style={{
                  background: 'linear-gradient(92deg, #0AA9BE 0%, #75B53B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                doze anos
              </span>
              <br />de quadra.
            </h2>

            {/* Gradient rule */}
            <div
              className="mt-8 h-px"
              style={{ background: 'linear-gradient(90deg, #0AA9BE 0%, rgba(10,169,190,0) 55%)' }}
            />
          </div>
        </Reveal>

        {/* ── Stat cards ── */}
        <Reveal stagger as="ul" className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-20">
          {STATS.map((s) => (
            <RevealItem key={s.value} as="li">
              <div
                className="h-full rounded-2xl p-6 lg:p-8 flex flex-col gap-4 relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.045)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Top accent stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${s.accent} 0%, transparent 80%)` }}
                />

                {/* Glow blob behind number */}
                <div
                  className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: s.accent }}
                />

                {/* Value */}
                <span
                  className="font-display uppercase font-black relative leading-[0.93] whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(30px, 3.8vw, 50px)',
                    background: `linear-gradient(135deg, #ffffff 0%, ${s.accent} 120%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.value}
                </span>

                {/* Separator */}
                <div className="w-8 h-px" style={{ backgroundColor: s.accent, opacity: 0.6 }} aria-hidden />

                {/* Label */}
                <span className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {s.label}
                </span>
              </div>
            </RevealItem>
          ))}
        </Reveal>

        {/* ── Sponsors marquee ── */}
        <Reveal>
          <span className="block text-center font-sans uppercase text-xs font-bold tracking-[0.22em] mb-6" style={{ color: 'rgba(255,255,255,0.38)' }}>
            Marcas que apostaram no Lagoa Azul
          </span>
        </Reveal>

      </div>

      {/* Full-bleed marquee — mask-image fade nas bordas, sem cor hardcoded */}
      <div
        className="w-full overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="marquee-track flex items-center w-max py-2" style={{ gap: '5rem' }}>
          {TRACK.map((s, i) => (
            <img
              key={i}
              src={asset(s.logo)}
              alt={s.name}
              className="h-10 w-auto object-contain select-none flex-shrink-0"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.55 }}
              draggable={false}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
