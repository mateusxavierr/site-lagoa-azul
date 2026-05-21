import { ArrowRight } from 'lucide-react'
import { SocialIcon } from '@/components/primitives/SocialIcon'
import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { INSTAGRAM_URL } from '@/lib/data'
import { asset } from '@/lib/asset'

const GALLERY = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/imagens_torneios/galeria${n}.png`,
  alt: `Galeria Lagoa Azul Tênis Clube — foto ${n}`,
}))

export function GaleriaMomentos() {
  return (
    <Section id="galeria">
      <SectionHeader eyebrow="Galeria" title="Momentos que aconteceram aqui." />

      <Reveal stagger as="ul" className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {GALLERY.map((photo) => (
          <RevealItem key={photo.src} as="li">
            <div className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-base">
              <img
                src={asset(photo.src)}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
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
