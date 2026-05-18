import { HeroEventos } from '@/components/sections/eventos/HeroEventos'
import { ProximosEventos } from '@/components/sections/eventos/ProximosEventos'
import { TorneiosIconicos } from '@/components/sections/eventos/TorneiosIconicos'
import { GaleriaMomentos } from '@/components/sections/eventos/GaleriaMomentos'
import { CtaEventos } from '@/components/sections/eventos/CtaEventos'

export default function Eventos() {
  return (
    <>
      <HeroEventos />
      <ProximosEventos />
      <TorneiosIconicos />
      <GaleriaMomentos />
      <CtaEventos />
    </>
  )
}
