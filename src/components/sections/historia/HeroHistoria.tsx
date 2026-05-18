import { motion } from 'framer-motion'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { GradientText } from '@/components/primitives/GradientText'
import { PlaceholderImage } from '@/components/primitives/PlaceholderImage'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

const BRIEFING =
  'Foto. Conteúdo: Foto histórica/recente do Torneio Lagoa Azul com grande quantidade de participantes — múltiplas quadras ocupadas por duplas simultaneamente; público ao fundo; comunica que o torneio sempre foi grande mesmo antes do espaço próprio. Tom: Comunitário, histórico, celebrativo. Composição: plano aberto, câmera elevada. Proporção 16:9. Fonte: Facebook @torneiolagoaazul (edições históricas) / Instagram @lagoaazultenisclube. Alternativa: foto panorâmica de edição recente com torcida.'

export function HeroHistoria() {
  return (
    <section data-hero className="relative bg-layered-hero text-white overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-28 pb-section-y md:pt-36 md:pb-section-y-md lg:pt-52 lg:pb-section-y-lg">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
            <motion.div variants={fadeSlideIn}><Eyebrow tone="inverse">Desde 2012</Eyebrow></motion.div>
            <motion.h1
              variants={fadeSlideIn}
              className="font-display uppercase text-[clamp(36px,6vw,76px)] leading-[0.96] tracking-[-0.025em] font-black text-white"
            >
              O <GradientText>torneio</GradientText> que cresceu tanto que comprou o clube.
            </motion.h1>
            <motion.p variants={fadeSlideIn} className="text-body-lg text-white/80 max-w-prose">
              12 anos de história antes de ter um endereço. Agora temos os dois.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-vital opacity-25 blur-2xl" aria-hidden />
            <PlaceholderImage ratio="16:9" briefing={BRIEFING} tone="dark" className="relative shadow-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
