import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { asset } from '@/lib/asset'
import { GradientText } from '@/components/primitives/GradientText'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { WHATSAPP_URL } from '@/lib/data'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

const CREDENTIALS = [
  { highlight: 'ITF M15', label: 'Circuito ATP em Recife' },
  { highlight: '12 anos', label: 'de Torneio Lagoa Azul' },
  { highlight: '1.382', label: 'membros ativos' },
  { highlight: 'Patrocinadores', label: 'Santander · Vivo · Azul', isVisual: true },
]

export function Hero() {
  return (
    <section
      data-hero
      className="relative text-white overflow-hidden min-h-[92vh] flex items-center"
      style={{ backgroundImage: `url(${asset('/banner_hero.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
            <Eyebrow tone="inverse">Imbiribeira, Recife</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeSlideIn}
            className="font-display uppercase text-[clamp(40px,7vw,88px)] leading-[0.94] tracking-[-0.025em] font-black text-white"
          >
            Onde os profissionais jogam.
            <br />E onde <GradientText>você</GradientText> entra em quadra.
          </motion.h1>

          <motion.p variants={fadeSlideIn} className="text-body-lg text-white/80 max-w-[52ch]">
            O único clube de Pernambuco no circuito ATP. Com quadras, ranking e programas para todos os níveis.
          </motion.p>

          <motion.div variants={fadeSlideIn} className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
              Agendar minha visita
              <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
            </TennisBallCta>

          </motion.div>

          <motion.div variants={fadeSlideIn} className="mt-8 pt-8 border-t border-white/10 w-full">
            <span className="text-eyebrow uppercase tracking-[0.20em] text-white/55">Credenciais</span>
            <ul className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {CREDENTIALS.map((c) => (
                <li key={c.highlight} className="flex flex-col items-center gap-1 text-center">
                  <span className="font-display uppercase text-h3 font-black tracking-tight text-white">{c.highlight}</span>
                  <span className="text-caption text-white/65 leading-snug">{c.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
