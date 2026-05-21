import { asset } from '@/lib/asset'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { GradientText } from '@/components/primitives/GradientText'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { WHATSAPP_URL } from '@/lib/data'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

export function HeroModalidades() {
  return (
    <section
      data-hero
      className="relative text-white overflow-hidden min-h-screen flex items-center"
      style={{ backgroundImage: `url(${asset('/banner_modalidades.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
            <Eyebrow tone="inverse">Modalidades · Todos os níveis</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeSlideIn}
            className="font-display uppercase text-[clamp(36px,6vw,76px)] leading-[0.96] tracking-[-0.025em] font-black text-white"
          >
            Para o <GradientText>iniciante</GradientText> que quer começar.
            <br />Para o competidor que quer evoluir.
          </motion.h1>

          <motion.div variants={fadeSlideIn} className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
              Agendar visita
              <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
            </TennisBallCta>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
