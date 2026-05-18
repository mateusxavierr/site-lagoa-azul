import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/primitives/Container'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { GradientText } from '@/components/primitives/GradientText'
import { PlaceholderImage } from '@/components/primitives/PlaceholderImage'
import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/data'
import { fadeSlideIn, staggerContainer } from '@/lib/animations'

const BRIEFING =
  'Foto. Conteúdo: Panorama mostrando dois tipos de quadra em uso simultâneo — tênis + padel ou tênis + beach tennis no mesmo enquadramento; jogadores em ação; comunica diversidade da oferta. Tom: Vibrante, inclusivo, energético. Composição: plano aberto semi-aéreo, câmera 3–5m. Proporção 16:9. Fonte: Instagram @lagoaazultenisclube — momentos de torneio com múltiplas quadras. Alternativa: IA (Midjourney: multiple sports courts at tennis club, clay courts and padel courts visible, golden hour).'

export function HeroModalidades() {
  return (
    <section data-hero className="relative bg-layered-hero text-white overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-28 pb-section-y md:pt-36 md:pb-section-y-md lg:pt-52 lg:pb-section-y-lg">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
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

            <motion.div variants={fadeSlideIn} className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
              <Button asChild size="lg" className="group">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Agendar visita
                  <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
                </a>
              </Button>
              <span className="text-caption text-white/65 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-vital" aria-hidden /> Visita gratuita · Sem compromisso
              </span>
            </motion.div>
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
