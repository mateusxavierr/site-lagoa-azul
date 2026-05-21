import { motion } from 'framer-motion'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { GradientText } from '@/components/primitives/GradientText'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

export function HeroEventos() {
  return (
    <section
      data-hero
      className="relative text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Imagem de fundo — mobile usa banner específico, desktop usa o padrão */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ backgroundImage: 'url(/banner_eventos_mobile.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{ backgroundImage: 'url(/banner_eventos.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/60 via-brand-secondary/70 to-brand-secondary/90" />

      <Container className="relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center gap-6 py-section-y md:py-section-y-md lg:py-section-y-lg max-w-4xl mx-auto"
        >
          <motion.div variants={fadeSlideIn}><Eyebrow tone="inverse">Torneios · Rankings · Calendário</Eyebrow></motion.div>
          <motion.h1
            variants={fadeSlideIn}
            className="font-display uppercase text-[clamp(40px,7vw,84px)] leading-[0.94] tracking-[-0.025em] font-black text-white"
          >
            Do ranking interno ao <GradientText>circuito</GradientText> ATP.
          </motion.h1>
          <motion.p variants={fadeSlideIn} className="text-body-lg text-white/85 max-w-[52ch]">
            O Lagoa Azul tem eventos para todos os níveis — e para todos os gostos.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
