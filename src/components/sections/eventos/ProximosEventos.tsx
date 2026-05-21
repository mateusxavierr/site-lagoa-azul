import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { LETZPLAY_URL } from '@/lib/data'

// ─── Calendário de torneios ────────────────────────────────────────────────────

interface Tournament {
  date: string
  title: string
  subtitle: string
  body: string
  location: string
  href: string
  image: string
}

const TOURNAMENTS: Tournament[] = [
  {
    date: '22–24 Mai 2026',
    title: '2º Sellecta Open',
    subtitle: 'by SETAI',
    body: 'Torneio de duplas em três dias — sex, sáb e dom. Inscrições R$ 347 (jogador) · R$ 197 (convidado) · R$ 97 (kids).',
    location: 'Lagoa Azul · Recife',
    href: 'https://letzplay.me/LagoaAzul-tc/tourneys/57169',
    image: '/imagens_eventos/torneio_sellecta_1x1_final_v6.jpg',
  },
  {
    date: 'Jul 2026',
    title: 'Copa Nordeste',
    subtitle: 'Duplas Mistas · Categorias A, B e C',
    body: 'O único torneio regional exclusivo para duplas mistas. Atletas de Pernambuco, Ceará e Bahia em três dias de tênis competitivo.',
    location: 'Lagoa Azul · Recife',
    href: LETZPLAY_URL,
    image: '/imagens_eventos/copa_nordeste_1x1.png',
  },
  {
    date: '13–15 Nov 2026',
    title: 'Torneio Lagoa Azul',
    subtitle: 'O torneio que deu origem ao clube',
    body: 'A edição que começou tudo. O maior torneio amador de duplas do Nordeste volta em novembro — categorias A, B e C, aberto a todos os níveis.',
    location: 'Lagoa Azul · Recife',
    href: LETZPLAY_URL,
    image: '/imagens_eventos/torneio_lagoa_azul_1x1_final.jpg',
  },
]

// ─── Ticket component ──────────────────────────────────────────────────────────

function TicketCard({ t }: { t: Tournament }) {
  return (
    <article className="ticket-card">
      {/* Body (corpo do ingresso) */}
      <a href={t.href} target="_blank" rel="noreferrer" className="ticket-body group">
        {/* SVG ticket shape */}
        <div className="ticket-bg" style={{ backgroundImage: 'url(/ticket/ticket-left.svg)' }} />

        {/* Conteúdo do body */}
        <div className="ticket-body-content">
          {/* Imagem quadrada */}
          <div className="ticket-image-wrap">
            <img
              src={t.image}
              alt={`Arte de divulgação — ${t.title}`}
              className="ticket-image"
            />
          </div>

          {/* Info do evento */}
          <div className="ticket-info">
            <div className="ticket-info-top">
              <span className="ticket-date">{t.date}</span>
              <h3 className="ticket-title">{t.title}</h3>
              <p className="ticket-subtitle">{t.subtitle}</p>
            </div>

            <p className="ticket-body-text">{t.body}</p>

            <div className="ticket-meta">
              <span className="ticket-location">
                <MapPin className="w-3.5 h-3.5" aria-hidden />
                {/* Desktop: localidade completa · Mobile: só "Lagoa Azul" */}
                <span className="hidden md:inline">{t.location}</span>
                <span className="md:hidden">Lagoa Azul</span>
              </span>
              <span className="ticket-letzplay-logo">LetzPlay</span>
            </div>
          </div>
        </div>
      </a>

      {/* Stub (canhoto) */}
      <a href={t.href} target="_blank" rel="noreferrer" className="ticket-stub group">
        <div className="ticket-bg" style={{ backgroundImage: 'url(/ticket/ticket-right.svg)' }} />

        <div className="ticket-stub-content">
          <span className="ticket-stub-vertical-cta">
            <span className="ticket-stub-prefix">Inscreva-se no&nbsp;</span><strong>LetzPlay</strong>
          </span>

          <div className="ticket-stub-cta">
            <span className="ticket-stub-arrow">
              <ArrowRight className="w-5 h-5 md:w-5 md:h-5" aria-hidden />
            </span>
          </div>
        </div>
      </a>
    </article>
  )
}

export function ProximosEventos() {
  return (
    <Section id="proximos-eventos">
      <SectionHeader eyebrow="Em breve" title="O que está por vir" />

      <Reveal stagger as="ul" className="flex flex-col gap-12 md:gap-16">
        {TOURNAMENTS.map((t) => (
          <RevealItem key={t.title} as="li">
            <TicketCard t={t} />
          </RevealItem>
        ))}
      </Reveal>

      <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-body-sm text-text-secondary inline-flex items-center gap-2">
          <Calendar className="w-4 h-4 text-brand-primary" aria-hidden /> Calendário completo e inscrições via LetzPlay.
        </p>
        <a
          href={LETZPLAY_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-label uppercase tracking-wider font-display font-bold text-brand-primary hover:text-brand-secondary transition-colors"
        >
          Acessar LetzPlay
          <ArrowRight className="w-4 h-4 transition-transform duration-base group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </Section>
  )
}
