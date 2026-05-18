import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Button } from '@/components/ui/button'
import { CLUB, WHATSAPP_URL, MAPS_EMBED } from '@/lib/data'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

export function HeroContato() {
  return (
    <section data-hero className="bg-layered-hero text-white relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-stretch pt-28 pb-section-y md:pt-36 md:pb-section-y-md lg:pt-52 lg:pb-section-y-lg">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
            <motion.div variants={fadeSlideIn}><Eyebrow tone="inverse">Como chegar</Eyebrow></motion.div>
            <motion.h1
              variants={fadeSlideIn}
              className="font-display uppercase text-[clamp(36px,6vw,68px)] leading-[0.96] tracking-[-0.025em] font-black text-white"
            >
              {CLUB.name}
            </motion.h1>

            <motion.div variants={fadeSlideIn} className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary mt-1 shrink-0" aria-hidden />
                <div className="text-body-lg text-white/85 leading-snug">
                  {CLUB.address.street}<br />
                  {CLUB.address.city}<br />
                  <span className="text-white/65 text-body-sm">{CLUB.address.cep}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-primary mt-1 shrink-0" aria-hidden />
                <div className="text-body text-white/75">
                  <span className="block font-bold text-white">Horários de funcionamento</span>
                  <span className="italic text-white/55">[INSERIR — HUMANO: confirmar horários reais com o clube]</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeSlideIn} className="mt-2">
              <Button asChild size="lg" className="group">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Falar pelo WhatsApp
                  <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
            className="hidden lg:block rounded-xl overflow-hidden shadow-2xl border border-border-inverse min-h-[420px]"
          >
            <iframe
              src={MAPS_EMBED}
              title="Mapa — Lagoa Azul Tênis Clube"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px] border-0"
              aria-label="Mapa interativo do Google Maps mostrando a localização do clube"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
