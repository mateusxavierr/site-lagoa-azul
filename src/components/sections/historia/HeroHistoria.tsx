import { asset } from '@/lib/asset'
import { motion } from 'framer-motion'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { GradientText } from '@/components/primitives/GradientText'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

export function HeroHistoria() {
  return (
    <section
      data-hero
      className="relative text-white overflow-hidden min-h-screen flex items-center"
      style={{ backgroundImage: `url(${asset('/banner_historia.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/60 via-brand-secondary/70 to-brand-secondary/90" />

      <Container className="relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center gap-6 py-section-y md:py-section-y-md lg:py-section-y-lg max-w-4xl mx-auto"
        >
          <motion.div variants={fadeSlideIn}>
            <Eyebrow tone="inverse">Desde 2012</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeSlideIn}
            className="font-display uppercase text-[clamp(36px,6vw,76px)] leading-[0.96] tracking-[-0.025em] font-black text-white"
          >
            O <GradientText>torneio</GradientText> que cresceu tanto que se transformou em um clube.
          </motion.h1>

          <motion.p variants={fadeSlideIn} className="text-body-lg text-white/80 max-w-[52ch]">
            12 anos de história antes de ter um endereço. Agora temos os dois.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
