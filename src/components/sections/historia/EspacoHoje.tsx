import { Section } from '@/components/primitives/Section'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { PlaceholderImage } from '@/components/primitives/PlaceholderImage'

const PHOTOS = [
  {
    ratio: '1:1' as const,
    briefing:
      'Foto. Conteúdo: Vista das quadras de saibro cobertas mostrando qualidade da superfície e iluminação — plano largo com pelo menos duas quadras; luz acesa de quadra. Tom: Premium, qualidade evidente. Composição: plano aberto. Proporção 1:1. Fonte: Instagram @lagoaazultenisclube. Alternativa: foto de uma quadra única em ângulo que mostre toda a extensão.',
  },
  {
    ratio: '1:1' as const,
    briefing:
      'Foto. Conteúdo: Área de convivência, recepção ou fachada do clube; comunica que o espaço vai além das quadras — é um lugar para estar. Tom: Acolhedor, premium. Composição: plano médio, câmera ao nível dos olhos. Proporção 1:1. Fonte: Instagram @lagoaazultenisclube. Alternativa: foto da fachada com logo visível.',
  },
  {
    ratio: '2:1' as const,
    briefing:
      'Foto destaque. Conteúdo: Vista panorâmica do complexo — semi-aérea ou de ângulo alto, mostrando o maior número possível de quadras; comunica escala. Tom: Imponente, aspiracional. Composição: wide / semi-overhead. Proporção 2:1. Fonte: cobertura de torneio (folhape.com.br, carlosperuca.com) ou drone próprio; alternativa IA aérea.',
    full: true,
  },
  {
    ratio: '1:1' as const,
    briefing:
      'Foto. Conteúdo: Espaço do Wellness Center — equipamentos e ambiente interior; sem pessoas ou com um membro em uso. Tom: Profissional, clean, premium. Composição: plano médio a aberto. Proporção 1:1. Fonte: Instagram @lagoaazultenisclube (posts mai/2025). Alternativa: imagem IA de espaço de treino premium.',
  },
  {
    ratio: '1:1' as const,
    briefing:
      'Foto. Conteúdo: Momento de torneio ou cerimônia — público reunido, atletas, premiação ou bastidor; comunica vida ativa e comunidade. Tom: Celebrativo, comunitário, pertencimento. Composição: plano médio a aberto com múltiplas pessoas. Proporção 1:1. Fonte: Instagram @lagoaazultenisclube / Facebook @torneiolagoaazul. Alternativa: foto de ranking semestral com cerimônia.',
  },
]

export function EspacoHoje() {
  return (
    <Section id="espaco-hoje" className="bg-surface-muted">
      <Reveal>
        <h2 className="font-display uppercase text-[clamp(32px,5vw,56px)] leading-[1.02] tracking-tight font-black text-text-primary mb-10 max-w-prose">
          As instalações que a história construiu.
        </h2>
      </Reveal>

      <Reveal stagger as="ul" className="grid grid-cols-2 lg:grid-cols-3 gap-grid">
        {PHOTOS.map((p, i) => (
          <RevealItem
            key={i}
            as="li"
            className={p.full ? 'col-span-2 lg:col-span-3' : ''}
          >
            <PlaceholderImage ratio={p.ratio} briefing={p.briefing} className="shadow-md hover:shadow-lg transition-shadow duration-base" />
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  )
}
