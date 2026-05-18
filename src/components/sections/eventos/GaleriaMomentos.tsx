import { ArrowRight } from 'lucide-react'
import { SocialIcon } from '@/components/primitives/SocialIcon'
import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { PlaceholderImage } from '@/components/primitives/PlaceholderImage'
import { INSTAGRAM_URL } from '@/lib/data'

const SUGGESTIONS = [
  'Foto de ação do Brasil Tennis Classic — atleta profissional em quadra',
  'Foto de premiação ou cerimônia do Brasil Tennis Classic',
  'Foto de ação de dupla no Torneio Lagoa Azul amador',
  'Foto de ranking interno — cerimônia ou jogadores',
  'Foto de bastidor ou convivência — pessoas fora da quadra',
  'Foto de modalidade alternativa (padel, beach tennis ou squash)',
]

export function GaleriaMomentos() {
  return (
    <Section id="galeria">
      <SectionHeader eyebrow="Galeria" title="Momentos que aconteceram aqui." />

      <p className="text-caption text-text-muted italic mb-8 max-w-prose">
        [INSERIR — HUMANO: selecionar 6 fotos do Instagram @lagoaazultenisclube com melhor qualidade técnica e diversidade de momentos]
      </p>

      <Reveal stagger as="ul" className="grid grid-cols-2 md:grid-cols-3 gap-grid">
        {SUGGESTIONS.map((s, i) => (
          <RevealItem key={i} as="li">
            <PlaceholderImage
              ratio="1:1"
              briefing={`Foto 1:1. ${s}. Fonte: Instagram @lagoaazultenisclube / Facebook @torneiolagoaazul.`}
              className="shadow-sm hover:shadow-md transition-shadow duration-base"
            />
          </RevealItem>
        ))}
      </Reveal>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-body-sm text-text-secondary">
          Siga @lagoaazultenisclube para acompanhar em tempo real.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-label uppercase tracking-wider font-display font-bold text-brand-primary hover:text-brand-secondary transition-colors"
        >
          <SocialIcon name="instagram" className="w-4 h-4" />
          Instagram
          <ArrowRight className="w-4 h-4 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </Section>
  )
}
