import AnimatedCounter from '@/components/AnimatedCounter'

const metrics = [
  { value: 184, suffix: '%', label: 'Aumento médio em leads', description: 'nos primeiros 90 dias de campanha', color: '#F97316' },
  { value: 3, suffix: 'x', label: 'Retorno sobre investimento', description: 'em média para cada R$1 investido em anúncios', color: '#10B981' },
  { value: 200, suffix: '+', label: 'Empresas atendidas', description: 'em diversos segmentos no Brasil', color: '#3B82F6' },
  { value: 72, suffix: '%', label: 'Redução no custo por lead', description: 'após otimização das campanhas', color: '#A855F7' },
]

const cases = [
  { segment: 'Clínica Odontológica', result: '+185% em agendamentos', detail: 'De 20 para 57 agendamentos/mês com Google Ads', channel: 'Google Ads', color: '#4285F4' },
  { segment: 'Loja de Móveis', result: '+137% na receita orgânica', detail: 'Site otimizado para SEO + Google Meu Negócio', channel: 'SEO + GMB', color: '#10B981' },
  { segment: 'Academia de Fitness', result: '400 clientes em 28 dias', detail: 'Inauguração com Meta Ads e segmentação precisa', channel: 'Meta Ads', color: '#F97316' },
  { segment: 'Escritório de Advocacia', result: '+129% em consultas', detail: 'Google Ads + site de alta conversão', channel: 'Google Ads', color: '#A855F7' },
]

export default function ResultsSection() {
  return (
    <section id="resultados" className="py-20 lg:py-28 bg-[#111827]" aria-labelledby="resultados-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#F97316] text-sm font-medium">Resultados Reais</span>
          </div>
          <h2 id="resultados-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-syne" style={{ letterSpacing: '-0.02em' }}>
            Números que provam{' '}
            <span className="text-[#F97316]">o que entregamos</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Resultados médios dos nossos clientes nos primeiros 90 dias de parceria.
          </p>
        </div>

        {/* Metric counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m) => (
            <div key={m.label} className="bg-[#0C0E14] border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
              <AnimatedCounter value={m.value} suffix={m.suffix} />
              <p className="text-white font-semibold text-sm mt-2 mb-1">{m.label}</p>
              <p className="text-[#6B7280] text-xs">{m.description}</p>
            </div>
          ))}
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map((c) => (
            <div
              key={c.segment}
              className="bg-[#0C0E14] border border-white/10 rounded-xl p-5 hover:border-white/25 transition-all duration-300"
            >
              <div className="inline-block px-2 py-0.5 rounded text-xs font-semibold mb-3" style={{ background: `${c.color}20`, color: c.color }}>
                {c.channel}
              </div>
              <p className="text-[#9CA3AF] text-xs mb-2">{c.segment}</p>
              <p className="text-white font-bold text-lg font-syne">{c.result}</p>
              <p className="text-[#6B7280] text-xs mt-1">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
