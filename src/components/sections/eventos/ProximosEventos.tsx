import { ArrowRight, Calendar } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { Reveal, RevealItem } from '@/components/primitives/Reveal'
import { Card, CardBody } from '@/components/ui/card'
import { LETZPLAY_URL } from '@/lib/data'

// ─── Calendário de torneios ────────────────────────────────────────────────────

interface Tournament {
  badge: string
  date: string
  title: string
  subtitle: string
  body: string
  href: string
  image: string
}

const TOURNAMENTS: Tournament[] = [
  {
    badge: 'Tênis · Duplas',
    date: '22–24 Mai 2026',
    title: '2º Sellecta Open de Tênis 2026',
    subtitle: 'by SETAI',
    body: 'Torneio de duplas em três dias — sex, sáb e dom. Inscrições: R$ 347 para jogadores · R$ 197 para convidados · R$ 97 espaço kids.',
    href: 'https://letzplay.me/LagoaAzul-tc/tourneys/57169',
    image: '/imagens_torneios/torneio_selecta.jpg',
  },
  {
    badge: 'Tênis · Duplas Mistas',
    date: 'Jul 2026',
    title: 'Copa Nordeste de Duplas Mistas',
    subtitle: 'Recife · Lagoa Azul',
    body: 'O único torneio regional exclusivo para duplas mistas. Atletas de Pernambuco, Ceará e Bahia em três dias de tênis competitivo. Categorias A, B e C.',
    href: LETZPLAY_URL,
    image: '/imagens_torneios/copa_nordeste_divulgacao.png',
  },
  {
    badge: 'Tênis · Duplas',
    date: '13–15 Nov 2026',
    title: 'Torneio Lagoa Azul de Duplas 2026',
    subtitle: 'O torneio que deu origem ao clube',
    body: 'A edição que começou tudo. O maior torneio amador de duplas do Nordeste volta em novembro — categorias A, B e C, aberto a todos os níveis.',
    href: LETZPLAY_URL,
    image: '/imagens_torneios/torneio_duplas_lagoa_azul.png',
  },
]

export function ProximosEventos() {
  return (
    <Section id="proximos-eventos">
      <SectionHeader eyebrow="Em breve" title="O que está por vir" />

      <Reveal stagger as="ul" className="flex flex-col gap-8">
        {TOURNAMENTS.map((t) => (
          <RevealItem key={t.title} as="li">
            <Card variant="default" className="overflow-hidden">
              <div className="flex flex-col md:flex-row">

                {/* Arte de divulgação — coluna esquerda */}
                <div className="relative flex-shrink-0 md:w-56 lg:w-64 overflow-hidden">
                  <img
                    src={t.image}
                    alt={`Arte de divulgação — ${t.title}`}
                    className="w-full h-full object-cover object-top min-h-[260px] md:min-h-0 transition-transform duration-slow ease-standard group-hover:scale-[1.03]"
                  />
                  {/* Badge sobreposto */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary text-text-on-brand text-eyebrow uppercase tracking-[0.18em] font-bold shadow-md">
                      {t.badge}
                    </span>
                  </div>
                </div>

                {/* Conteúdo — coluna direita */}
                <CardBody className="flex-1 justify-center gap-4">
                  <span className="text-caption uppercase tracking-[0.18em] text-text-muted font-bold">
                    {t.date}
                  </span>
                  <div>
                    <h3 className="font-display uppercase text-[clamp(24px,3vw,40px)] leading-tight tracking-tight font-black text-text-primary">
                      {t.title}
                    </h3>
                    <p className="text-body-sm text-text-muted font-medium mt-1">{t.subtitle}</p>
                  </div>
                  <p className="text-body text-text-secondary leading-relaxed">{t.body}</p>
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 text-label uppercase tracking-wider font-display font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                  >
                    Inscrições via LetzPlay
                    <ArrowRight className="w-4 h-4 transition-transform duration-base group-hover/link:translate-x-0.5" aria-hidden />
                  </a>
                </CardBody>

              </div>
            </Card>
          </RevealItem>
        ))}
      </Reveal>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-3">
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
