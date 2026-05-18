import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { PlaceholderImage } from '@/components/primitives/PlaceholderImage'

const TOURNAMENTS = [
  {
    badge: 'ITF M15 · Circuito ATP',
    title: 'Brasil Tennis Classic',
    body:
      '6ª edição em novembro de 2024. US$ 15.000 em premiação. Atletas do ranking ATP de todo o mundo em Recife — patrocinado por Santander, Vivo e Azul Linhas Aéreas.',
    sponsors: ['Santander', 'Vivo', 'Azul Linhas Aéreas'],
    briefing:
      'Foto. Conteúdo: Atleta profissional em ação durante o Brasil Tennis Classic — saque ou forehand com banners de patrocinadores ao fundo. Tom: Profissional, espetacular, premium. Composição: plano médio. Proporção 16:9. Fonte: folhape.com.br / carlosperuca.com / institutosports.com.br. Alternativa: foto de premiação com troféu e banners de patrocinadores.',
  },
  {
    badge: 'Amador · Duplas · Maior do Nordeste',
    title: 'Torneio Lagoa Azul',
    body:
      'O maior torneio amador de duplas do Nordeste, realizado ininterruptamente desde 2012. A 12ª edição aconteceu em dezembro de 2024 — e a tradição continua.',
    sponsors: [],
    briefing:
      'Foto. Conteúdo: Dupla de jogadores amadores comemorando ponto ou abraçando ao final de um set — alegria genuína; quadra e público ao fundo. Tom: Comunitário, celebrativo, humano. Composição: plano médio, câmera ao nível. Proporção 16:9. Fonte: Instagram @lagoaazultenisclube / Facebook @torneiolagoaazul. Alternativa: foto panorâmica com múltiplas quadras e público.',
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
              <PlaceholderImage ratio="16:9" briefing={t.briefing} tone="dark" />
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
