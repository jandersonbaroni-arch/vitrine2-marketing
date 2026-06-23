import AnimatedCounter from '@/components/AnimatedCounter'

const WA_LINK = 'https://wa.me/5531996002586?text=Olá!%20Quero%20um%20diagnóstico%20gratuito%20do%20meu%20marketing%20digital.'

const stats = [
  { value: 200, label: 'Empresas Atendidas', icon: '👥' },
  { value: 184, label: 'Aumento médio em leads', icon: '📈', suffix: '%' },
  { value: 5, label: 'Anos de experiência', icon: '⭐' },
  { value: 98, label: 'Clientes satisfeitos', icon: '✅', suffix: '%' },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden bg-[#0C0E14]"
      aria-label="Vitrine 2 Marketing — Agência de Marketing Digital em Lagoa Santa MG"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663765477630/fSFQGq7zJcHD8yMXh542BU/hero-bg-o7rGFmtKwCswFPsPcKEqhy.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="presentation"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C0E14] via-[#0C0E14]/80 to-transparent z-1" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl opacity-20 z-0" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl opacity-20 z-0" aria-hidden="true" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="anim-slide-left">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" aria-hidden="true" />
              <span className="text-[#F97316] text-sm font-medium">Especialistas em Tráfego Pago e Presença Digital</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6 font-syne" style={{ letterSpacing: '-0.02em' }}>
              Sua marca precisa estar{' '}
              <span className="text-[#10B981]">nos lugares certos</span>
              <br />
              <span className="text-[#F97316]">na hora certa</span>
            </h1>

            <p className="text-lg lg:text-xl text-[#D1D5DB] mb-8 max-w-2xl leading-relaxed">
              Somos a ponte entre sua marca e seu público.{' '}
              <strong className="text-white">Comunicação multicanal</strong>: Google Ads, Meta Ads, criação de sites, outdoors e mega painéis. Tudo integrado para resultados reais.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {['Atendimento Personalizado', 'Sem Contratos Longos', 'Comunicação Multicanal'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#D1D5DB]">
                  <span className="text-[#10B981]" aria-hidden="true">✓</span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] active:scale-95 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 cta-pulse shadow-lg shadow-green-500/25 font-syne"
              >
                Quero Meu Diagnóstico Gratuito →
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 font-syne"
              >
                Ver Nossos Serviços
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-[#111827]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#10B981]/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="text-4xl mb-3" aria-hidden="true">{stat.icon}</div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-[#9CA3AF] text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
