import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { CLUB, WHATSAPP_URL } from '@/lib/data'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

export function HeroContato() {
  return (
    <section
      data-hero
      className="relative text-white overflow-hidden min-h-screen flex items-center"
      style={{ backgroundImage: 'url(/banner_contato.jpg)', backgroundSize: 'cover', backgroundPosition: '10% center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/60 via-brand-secondary/70 to-brand-secondary/90" />
      <Container className="relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center gap-6 py-section-y md:py-section-y-md lg:py-section-y-lg max-w-3xl mx-auto"
        >
          <motion.div variants={fadeSlideIn}><Eyebrow tone="inverse">Como chegar</Eyebrow></motion.div>
          <motion.h1
            variants={fadeSlideIn}
            className="font-display uppercase text-[clamp(36px,6vw,68px)] leading-[0.96] tracking-[-0.025em] font-black text-white"
          >
            {CLUB.name}
          </motion.h1>

          <motion.div variants={fadeSlideIn} className="flex flex-col gap-4 mt-2 items-center">
            <div className="flex items-start gap-3 w-full">
              <MapPin className="w-5 h-5 text-brand-primary mt-1 shrink-0" aria-hidden />
              <div className="text-body-lg text-white/85 leading-snug text-left">
                {CLUB.address.street}<br />
                {CLUB.address.city}<br />
                <span className="text-white/65 text-body-sm">{CLUB.address.cep}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 w-full">
              <Clock className="w-5 h-5 text-brand-primary mt-1 shrink-0" aria-hidden />
              <div className="text-body text-white/75 text-left">
                <span className="block font-bold text-white mb-1">Horários de funcionamento</span>
                <span className="block text-white/70 text-body-sm">Seg – Qui · 05:00 – 23:00</span>
                <span className="block text-white/70 text-body-sm">Sexta · 05:00 – 22:00</span>
                <span className="block text-white/70 text-body-sm">Sáb – Dom · 06:00 – 18:00</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeSlideIn} className="mt-2">
            <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
              Falar pelo WhatsApp
              <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
            </TennisBallCta>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
