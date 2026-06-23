const steps = [
  {
    number: '01',
    emoji: '💬',
    title: 'Diagnóstico Gratuito',
    description: 'Conversamos sobre seu negócio, público-alvo e objetivos. Analisamos o que está funcionando e o que está desperdiçando dinheiro. Sem compromisso.',
    color: '#F97316',
  },
  {
    number: '02',
    emoji: '🔍',
    title: 'Estratégia Personalizada',
    description: 'Montamos um plano sob medida para seu segmento, orçamento e metas. Nada de soluções genéricas — cada negócio tem uma estratégia única.',
    color: '#3B82F6',
  },
  {
    number: '03',
    emoji: '🚀',
    title: 'Execução e Lançamento',
    description: 'Configuramos tudo: campanhas, pixels, conversões, landing pages. Você aprova antes de ir ao ar. Lançamento em até 7 dias úteis.',
    color: '#10B981',
  },
  {
    number: '04',
    emoji: '📊',
    title: 'Otimização Contínua',
    description: 'Monitoramos diariamente, otimizamos semanalmente e enviamos relatórios mensais completos. Você sempre sabe onde está cada centavo.',
    color: '#A855F7',
  },
]

const guarantees = [
  { title: 'Transparência Total', description: 'Você tem acesso às contas de anúncios. Nada é escondido.' },
  { title: 'Relatórios Mensais', description: 'Relatório detalhado com todas as métricas e resultados.' },
  { title: 'Reuniões de Alinhamento', description: 'Reunião mensal para revisar estratégia e próximos passos.' },
  { title: 'Sem Fidelidade Longa', description: 'Contratos mensais. Ficamos porque entregamos resultado.' },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#0C0E14]" aria-labelledby="como-funciona-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#3B82F6]/15 border border-[#3B82F6]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#3B82F6] text-sm font-medium">Processo Transparente</span>
          </div>
          <h2 id="como-funciona-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-syne" style={{ letterSpacing: '-0.02em' }}>
            Como trabalhamos{' '}
            <span className="text-[#3B82F6]">do início ao fim</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Um processo claro, sem surpresas, do primeiro contato ao relatório mensal.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10 z-0" aria-hidden="true" />
              )}
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 relative z-10 hover:border-white/20 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" aria-hidden="true">{step.emoji}</span>
                  <span className="text-4xl font-extrabold font-syne" style={{ color: `${step.color}30` }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2 font-syne">{step.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 lg:p-12">
          <h3 className="text-xl font-bold text-white mb-8 text-center font-syne">
            Nossas Garantias
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <span className="text-[#10B981] text-lg">✓</span>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1 font-syne">{g.title}</h4>
                <p className="text-[#9CA3AF] text-xs">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
