import { ArrowRight, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { Container } from '@/components/primitives/Container'
import { Reveal } from '@/components/primitives/Reveal'
import { WHATSAPP_URL } from '@/lib/data'
import { fadeSlideIn } from '@/lib/animations'

export function CtaModalidades() {
  return (
    <section className="relative overflow-hidden py-section-y-md md:py-section-y-lg" style={{ backgroundColor: '#023955' }}>

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(10,169,190,0.22) 0%, transparent 65%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 20%, rgba(117,181,59,0.14) 0%, transparent 65%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 110%, rgba(249,204,75,0.08) 0%, transparent 60%)' }} />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 0px, transparent 50%)',
          backgroundSize: '36px 36px',
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(10,169,190,0.4) 50%, transparent 100%)' }}
        aria-hidden
      />

      <Container className="relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">

            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#F9CC4B' }} />
              <span className="font-sans uppercase text-xs font-bold tracking-[0.22em]" style={{ color: '#F9CC4B' }}>
                Fale com a gente · Sem compromisso
              </span>
            </div>

            <motion.h2
              variants={fadeSlideIn}
              className="font-display uppercase font-black leading-[0.93] text-white"
              style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}
            >
              Não sabe por onde{' '}
              <span
                style={{
                  background: 'linear-gradient(92deg, #0AA9BE 0%, #75B53B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                começar?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeSlideIn}
              className="text-body-lg mt-6 max-w-prose leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.72)' }}
            >
              Nossa equipe ajuda você a escolher a modalidade certa para o seu nível e objetivo. Uma conversa rápida, sem compromisso.
            </motion.p>

            <motion.div variants={fadeSlideIn} className="mt-10">
              <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
                Falar pelo WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
              </TennisBallCta>
            </motion.div>

            <motion.p
              variants={fadeSlideIn}
              className="mt-6 inline-flex items-center gap-2 text-caption"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: '#0AA9BE' }} aria-hidden />
              R. Gonçalves de Magalhães, 699 — Imbiribeira, Recife
            </motion.p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
