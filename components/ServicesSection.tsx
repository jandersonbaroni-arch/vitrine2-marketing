import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/5531996002586?text=Olá!%20Quero%20um%20diagnóstico%20gratuito%20do%20meu%20marketing%20digital.'

const services = [
  {
    slug: 'google-ads',
    color: '#4285F4',
    emoji: '🔍',
    title: 'Google Ads',
    subtitle: 'Apareça no topo quando seu cliente está buscando',
    description: 'Seu cliente pesquisa "melhor serviço perto de mim" — e encontra o seu concorrente. Com nossa gestão profissional de Google Ads, você aparece no momento exato da decisão de compra, pagando apenas por quem clicou.',
    benefits: [
      'Campanhas de Pesquisa, Display e Performance Max',
      'Palavras-chave de alta intenção de compra',
      'Negativação inteligente para eliminar desperdício',
      'Otimização semanal de lances e anúncios',
      'Relatórios claros com ROI detalhado',
    ],
    cta: 'Quero Anunciar no Google',
    featured: true,
  },
  {
    slug: 'meta-ads',
    color: '#1877F2',
    emoji: '🎯',
    title: 'Meta Ads',
    subtitle: 'Facebook e Instagram para o público certo',
    description: 'Alcance exatamente quem tem o perfil do seu cliente ideal — por idade, localização, interesses e comportamento. Criamos anúncios que param o scroll e convertem.',
    benefits: [
      'Segmentação avançada por público personalizado',
      'Criação de criativos de alto impacto',
      'Remarketing para quem visitou seu site',
      'Campanhas de leads, vendas e reconhecimento',
      'Pixel configurado corretamente',
    ],
    cta: 'Quero Anunciar no Meta',
    featured: false,
  },
  {
    slug: 'google-meu-negocio',
    color: '#F97316',
    emoji: '📍',
    title: 'Google Meu Negócio',
    subtitle: 'Domine as buscas locais e o Google Maps',
    description: 'Quando alguém busca um serviço perto de você, aparece um mapa com 3 empresas. Nós colocamos o seu negócio nesse mapa e otimizamos seu perfil para gerar ligações e visitas.',
    benefits: [
      'Configuração completa do perfil',
      'Otimização para SEO local',
      'Gestão de avaliações e respostas',
      'Publicações regulares e fotos profissionais',
      'Monitoramento de posição no Maps',
    ],
    cta: 'Quero Aparecer no Maps',
    featured: false,
  },
  {
    slug: 'criacao-de-sites',
    color: '#10B981',
    emoji: '🌐',
    title: 'Criação de Sites',
    subtitle: 'Site profissional que converte visitantes em clientes',
    description: 'Não adianta ter tráfego se o site não converte. Criamos sites rápidos, bonitos e otimizados para SEO — projetados para transformar visitantes em leads e vendas.',
    benefits: [
      'Design responsivo e mobile-first',
      'Otimização para Core Web Vitals (Google)',
      'SEO técnico desde a fundação',
      'Integração com Google Analytics e Tag Manager',
      'Entrega em até 15 dias úteis',
    ],
    cta: 'Quero um Site Profissional',
    featured: false,
  },
]

export default function ServicesSection() {
  const [featured, ...rest] = services

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#0C0E14]" aria-labelledby="servicos-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#10B981]/15 border border-[#10B981]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#10B981] text-sm font-medium">Nossos Serviços</span>
          </div>
          <h2 id="servicos-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-syne" style={{ letterSpacing: '-0.02em' }}>
            Comunicação multicanal para{' '}
            <span className="text-[#10B981]">resultados reais</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Cada canal tem seu papel na jornada do cliente. Combinamos digital e físico para maximizar seu retorno.
          </p>
        </div>

        {/* Featured card */}
        <div className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden mb-6 hover:border-[#4285F4]/40 transition-all duration-300 group">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl" aria-hidden="true">{featured.emoji}</span>
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-1" style={{ background: `${featured.color}20`, color: featured.color }}>
                    Serviço Destaque
                  </div>
                  <h3 className="text-2xl font-bold text-white font-syne">{featured.title}</h3>
                </div>
              </div>
              <p className="text-[#D1D5DB] mb-6 leading-relaxed">{featured.description}</p>
              <ul className="space-y-2 mb-8">
                {featured.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[#D1D5DB] text-sm">
                    <span className="text-[#10B981] mt-0.5 flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 font-syne text-sm"
                >
                  {featured.cta} <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href={`/${featured.slug}`}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all duration-200 text-sm"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative min-h-[320px] bg-gradient-to-br from-[#4285F4]/20 to-[#0C0E14]">
              <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20" aria-hidden="true">🔍</div>
            </div>
          </div>
        </div>

        {/* 3 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((svc) => (
            <div
              key={svc.slug}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-all duration-300 flex flex-col"
              style={{ '--accent': svc.color } as React.CSSProperties}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl" aria-hidden="true">{svc.emoji}</span>
                <div>
                  <h3 className="text-lg font-bold text-white font-syne">{svc.title}</h3>
                  <p className="text-xs text-[#9CA3AF]">{svc.subtitle}</p>
                </div>
              </div>
              <p className="text-[#D1D5DB] text-sm mb-4 leading-relaxed flex-1">{svc.description}</p>
              <ul className="space-y-1.5 mb-6">
                {svc.benefits.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[#9CA3AF] text-xs">
                    <span className="text-[#10B981] mt-0.5 flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mt-auto">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 text-xs font-syne"
                >
                  {svc.cta}
                </a>
                <Link
                  href={`/${svc.slug}`}
                  className="flex items-center justify-center px-3 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all text-xs"
                  aria-label={`Saiba mais sobre ${svc.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mídia Exterior banner */}
        <div className="mt-6 bg-gradient-to-r from-[#111827] to-[#0C0E14] border border-[#F97316]/20 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-5xl" aria-hidden="true">🏙️</span>
            <div>
              <h3 className="text-xl font-bold text-white font-syne">Mídia Exterior</h3>
              <p className="text-[#9CA3AF] text-sm">Outdoors, mega painéis e comunicação visual em Lagoa Santa e região metropolitana de BH</p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm font-syne"
            >
              Quero um Painel
            </a>
            <Link
              href="/midia-exterior"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all text-sm"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
