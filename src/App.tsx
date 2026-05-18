import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TopNav } from '@/components/sections/global/TopNav'
import { Footer } from '@/components/sections/global/Footer'
import Home from '@/pages/Home'
import Modalidades from '@/pages/Modalidades'
import Historia from '@/pages/Historia'
import Eventos from '@/pages/Eventos'
import Contato from '@/pages/Contato'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-page text-text-primary font-sans antialiased">
      <ScrollToTop />
      <TopNav />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modalidades" element={<Modalidades />} />
          <Route path="/nossa-historia" element={<Historia />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
