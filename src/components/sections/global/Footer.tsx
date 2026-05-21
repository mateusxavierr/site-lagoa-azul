import { Link } from 'react-router-dom'
import { MapPin, MessageCircle } from 'lucide-react'
import { SocialIcon } from '@/components/primitives/SocialIcon'
import { Container } from '@/components/primitives/Container'
import { CLUB, NAV_LINKS, WHATSAPP_URL, LETZPLAY_URL, INSTAGRAM_URL, FACEBOOK_URL } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-surface-inverse text-white pb-10">
      <div className="divider-decorative" />
      <Container className="pt-section-y md:pt-section-y-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="flex flex-col gap-4">
            <Link to="/" aria-label="Lagoa Azul Tênis Clube — início">
              <img src="/lagoa_azul_logo.png" alt="Lagoa Azul Tênis Clube" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-body-sm text-white/75 max-w-[28ch]">{CLUB.tagline}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-eyebrow uppercase tracking-[0.20em] text-brand-primary font-bold">Navegação</h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-body-sm text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-eyebrow uppercase tracking-[0.20em] text-brand-primary font-bold">Contato</h3>
            <ul className="flex flex-col gap-2 text-body-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-primary shrink-0" aria-hidden />
                <span>
                  {CLUB.address.street}<br />
                  {CLUB.address.city}
                </span>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 text-brand-primary" aria-hidden />
                  {CLUB.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <SocialIcon name="instagram" className="w-4 h-4 text-brand-primary" />
                  {CLUB.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-eyebrow uppercase tracking-[0.20em] text-brand-primary font-bold">Redes</h3>
            <ul className="flex gap-3">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center w-touch-min h-touch-min rounded-full border border-white/15 hover:border-brand-primary hover:bg-white/5 transition-colors">
                  <SocialIcon name="instagram" className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center w-touch-min h-touch-min rounded-full border border-white/15 hover:border-brand-primary hover:bg-white/5 transition-colors">
                  <SocialIcon name="facebook" className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center w-touch-min h-touch-min rounded-full border border-white/15 hover:border-brand-primary hover:bg-white/5 transition-colors">
                  <SocialIcon name="linkedin" className="w-5 h-5" />
                </a>
              </li>
            </ul>
            <div className="mt-3">
              <span className="text-eyebrow uppercase tracking-[0.20em] text-white/60">Reservas</span>
              <a href={LETZPLAY_URL} target="_blank" rel="noreferrer" className="block text-body-sm text-white/85 hover:text-brand-primary transition-colors mt-1">
                LetzPlay →
              </a>
            </div>
          </div>
        </div>

        <div className="divider-decorative mt-12 mb-6" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-caption text-white/55">
          <span>© 2026 {CLUB.name} · Desenvolvido por MXC Digital</span>
          <span className="text-white/40">
            CNPJ: 03.618.426/0001-00
          </span>
        </div>
      </Container>
    </footer>
  )
}
