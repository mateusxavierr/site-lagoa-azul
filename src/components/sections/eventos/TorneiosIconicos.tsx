import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'

const TOURNAMENTS = [
  {
    badge: 'ITF M15 · Circuito ATP',
    title: 'Brasil Tennis Classic',
    body:
      '6ª edição em novembro de 2024. US$ 15.000 em premiação. Atletas do ranking ATP de todo o mundo em Recife — patrocinado por Santander, Vivo e Azul Linhas Aéreas.',
    sponsors: ['Santander', 'Vivo', 'Azul Linhas Aéreas'],
    image: '/imagens_torneios/brasil_tennis_classic_lagoa_azul.png',
  },
  {
    badge: 'Amador · Duplas · Maior do Nordeste',
    title: 'Torneio Lagoa Azul',
    body:
      'O maior torneio amador de duplas do Nordeste, realizado ininterruptamente desde 2012. A 12ª edição aconteceu em dezembro de 2024 — e a tradição continua.',
    sponsors: [],
    image: '/imagens_torneios/torneio_lagoa.png',
  },
]

export function TorneiosIconicos() {
  return (
    <Section className="bg-surface-inverse text-white" id="torneios-iconicos">
      <SectionHeader
        eyebrow="Tradição"
        title="Os torneios que definem o Lagoa Azul."
        tone="inverse"
      />

      <Reveal stagger as="ul" className="grid grid-cols-1 lg:grid-cols-2 gap-grid lg:gap-10">
        {TOURNAMENTS.map((t) => (
          <RevealItem key={t.title} as="li">
            <article className="h-full flex flex-col gap-5 p-card-p md:p-card-p-lg rounded-xl bg-white/5 border border-border-inverse">
              <div className="overflow-hidden rounded-lg aspect-video">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover transition-transform duration-slow ease-standard group-hover:scale-[1.03]"
                />
              </div>
              <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-brand-primary/15 text-brand-primary text-eyebrow uppercase tracking-[0.18em] font-bold border border-brand-primary/30">
                {t.badge}
              </span>
              <h3 className="font-display uppercase text-[clamp(28px,4vw,44px)] leading-tight tracking-tight font-black text-white">
                {t.title}
              </h3>
              <p className="text-body text-white/75 leading-relaxed">{t.body}</p>
              {t.sponsors.length > 0 && (
                <div className="mt-2 pt-4 border-t border-border-inverse">
                  <span className="text-eyebrow uppercase tracking-[0.18em] text-white/55">Patrocinadores</span>
                  <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                    {t.sponsors.map((s) => (
                      <li key={s} className="font-display uppercase text-body-sm tracking-[0.12em] font-bold text-white/80">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  )
}
