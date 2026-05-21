import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, ArrowRight } from 'lucide-react'
import { Container } from '@/components/primitives/Container'
import { Sheet } from '@/components/ui/sheet'
import { TennisBallCta } from '@/components/ui/TennisBallCta'
import { NAV_LINKS, WHATSAPP_URL, INSTAGRAM_URL } from '@/lib/data'
import { cn } from '@/lib/utils'

export function TopNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  const transparent = !scrolled

  useEffect(() => {
    setScrolled(false)
    const hero = document.querySelector('[data-hero]')
    if (!hero) { setScrolled(true); return }

    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500 ease-standard',
        transparent
          ? 'bg-transparent'
          : 'bg-surface-page border-b border-border-subtle shadow-sm',
      )}
    >
      {/* ── Desktop: full-width, logo absolutamente centrada ── */}
      <div className="hidden lg:flex items-center h-nav-h md:h-nav-h-md relative px-8 xl:px-14">

        {/* Links — encostados na esquerda */}
        <nav className="flex items-center gap-0.5" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              end={l.href === '/'}
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-label uppercase tracking-wider font-display font-bold whitespace-nowrap transition-colors duration-300 rounded-full',
                  transparent
                    ? isActive ? 'text-white' : 'text-white/80 hover:text-white'
                    : isActive ? 'text-brand-primary' : 'text-text-primary hover:text-brand-primary',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Logo — centro absoluto da tela */}
        <Link
          to="/"
          aria-label="Lagoa Azul Tênis Clube — início"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <img
            src="/lagoa_azul_logo.png"
            alt="Lagoa Azul Tênis Clube"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Redes sociais + CTA — direita */}
        <div className="ml-auto flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram do Lagoa Azul"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300',
              transparent
                ? 'text-white/75 hover:text-white hover:bg-white/10'
                : 'text-text-secondary hover:text-brand-primary hover:bg-state-hover-bg',
            )}
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp do Lagoa Azul"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300',
              transparent
                ? 'text-white/75 hover:text-white hover:bg-white/10'
                : 'text-text-secondary hover:text-brand-primary hover:bg-state-hover-bg',
            )}
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.428a.5.5 0 0 0 .608.625l5.765-1.516A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.722.979.993-3.63-.235-.374A9.818 9.818 0 1 1 12 21.818z"/>
            </svg>
          </a>

          <div className={cn('w-px h-5 mx-1', transparent ? 'bg-white/20' : 'bg-border-DEFAULT')} aria-hidden />

          <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Agendar visita
            <ArrowRight className="w-4 h-4 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
          </TennisBallCta>
        </div>
      </div>

      {/* ── Mobile: logo à esquerda, CTA centro, hamburger à direita ── */}
      <Container className="lg:hidden h-nav-h">
        <div className="relative flex items-center justify-between h-full">
          <Link to="/" aria-label="Lagoa Azul Tênis Clube — início">
            <img
              src="/lagoa_azul_logo.png"
              alt="Lagoa Azul Tênis Clube"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* CTA centralizado */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <TennisBallCta
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="cta-tennis--no-resize"
            >
              Agendar visita
              <ArrowRight className="w-4 h-4" aria-hidden />
            </TennisBallCta>
          </div>

          <button
            type="button"
            className={cn(
              'inline-flex items-center justify-center w-touch-min h-touch-min rounded-full transition-colors',
              transparent
                ? 'text-white hover:bg-white/10'
                : 'text-text-primary hover:bg-state-hover-bg',
            )}
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6" aria-hidden />
          </button>
        </div>
      </Container>

      <Sheet open={open} onClose={() => setOpen(false)} title="Menu de navegação">
        <nav className="flex flex-col mt-2" aria-label="Navegação mobile">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              end={l.href === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'w-full py-5 text-center font-display uppercase tracking-widest font-black border-b border-white/10 transition-colors text-[1.35rem] leading-none',
                  isActive ? 'text-brand-primary' : 'text-white hover:text-brand-primary',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-8">
          <TennisBallCta href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg" className="w-full" onClick={() => setOpen(false)}>
            Agendar visita
            <ArrowRight className="w-5 h-5 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
          </TennisBallCta>
        </div>
      </Sheet>
    </header>
  )
}
