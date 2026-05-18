import { Hero } from '@/components/sections/home/Hero'
import { ModalidadesOverview } from '@/components/sections/home/ModalidadesOverview'
import { ProvaSocialWall } from '@/components/sections/home/ProvaSocialWall'
import { TeaserEventos } from '@/components/sections/home/TeaserEventos'
import { CtaFinal } from '@/components/sections/home/CtaFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <ModalidadesOverview />
      <ProvaSocialWall />
      <TeaserEventos />
      <CtaFinal />
    </>
  )
}
