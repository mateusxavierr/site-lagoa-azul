import { HeroModalidades } from '@/components/sections/modalidades/HeroModalidades'
import { ModalidadesRaquete } from '@/components/sections/modalidades/ModalidadesRaquete'
import { WellnessCenter } from '@/components/sections/modalidades/WellnessCenter'
import { MaisModalidades } from '@/components/sections/modalidades/MaisModalidades'
import { CtaModalidades } from '@/components/sections/modalidades/CtaModalidades'

export default function Modalidades() {
  return (
    <>
      <HeroModalidades />
      <ModalidadesRaquete />
      <WellnessCenter />
      <MaisModalidades />
      <CtaModalidades />
    </>
  )
}
