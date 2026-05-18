import { motion } from 'framer-motion'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { GradientText } from '@/components/primitives/GradientText'
import { PlaceholderImage } from '@/components/primitives/PlaceholderImage'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

const BRIEFING =
  'Foto. Conteúdo: Atleta profissional em plena ação durante o Brasil Tennis Classic — saque de alta potência ou voleio decisivo; banners do torneio e/ou patrocinadores ao fundo. Tom: Espetacular, premium, intenso. Composição: plano médio, câmera ao nível do jogo / contrapicado leve. Proporção 16:9. Tratamento: natural + overlay escuro 35%. Fonte: folhape.com.br / carlosperuca.com / institutosports.com.br (cobertura nov/2024). Alternativa: foto de múltiplos jogadores em quadras durante torneio.'

export function HeroEventos() {
  return (
    <section data-hero className="relative overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <PlaceholderImage ratio="21:9" briefing={BRIEFING} tone="dark" rounded={false} className="h-full" decorative />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/55 via-brand-secondary/75 to-brand-secondary/95" aria-hidden />
      </div>

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-6 max-w-3xl pt-40 pb-section-y-md md:pt-52 md:pb-section-y-lg"
        >
          <motion.div variants={fadeSlideIn}><Eyebrow tone="inverse">Torneios · Rankings · Calendário</Eyebrow></motion.div>
          <motion.h1
            variants={fadeSlideIn}
            className="font-display uppercase text-[clamp(40px,7vw,84px)] leading-[0.94] tracking-[-0.025em] font-black text-white"
          >
            Do ranking interno ao <GradientText>circuito</GradientText> ATP.
          </motion.h1>
          <motion.p variants={fadeSlideIn} className="text-body-lg text-white/85 max-w-prose">
            O Lagoa Azul tem eventos para todos os níveis — e para todos os gostos.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
