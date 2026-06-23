const testimonials = [
  { name: 'Carlos Mendonça', role: 'Proprietário — Clínica Odontológica', initials: 'CM', color: '#F97316', stars: 5, text: 'Em 60 dias de Google Ads, triplicamos o número de agendamentos. Antes eu gastava dinheiro em anúncios sem saber se estava funcionando. Agora tenho relatório de tudo e sei exatamente o retorno.', result: '+185% em agendamentos' },
  { name: 'Fernanda Costa', role: 'Gerente de Marketing — Rede de Academias', initials: 'FC', color: '#3B82F6', stars: 5, text: 'Inauguramos nossa nova unidade com 400 alunos em 28 dias. A campanha de Meta Ads foi cirúrgica — atingiu exatamente o perfil que queríamos. Resultado muito acima do esperado.', result: '400 clientes em 28 dias' },
  { name: 'Roberto Alves', role: 'CEO — Construtora', initials: 'RA', color: '#10B981', stars: 5, text: 'O que me convenceu foi a transparência. Tenho acesso a tudo, sei onde cada real está sendo investido. Em 6 meses, geramos mais de R$ 2 milhões em oportunidades qualificadas.', result: 'R$ 2M em oportunidades' },
  { name: 'Ana Paula Ribeiro', role: 'Proprietária — Loja de Decoração', initials: 'AP', color: '#A855F7', stars: 5, text: 'Meu site estava lindo mas não vendia nada. Depois que otimizaram o SEO e configuraram o Google Meu Negócio, as visitas triplicaram e as vendas online cresceram 80%.', result: '+80% nas vendas online' },
  { name: 'Marcos Teixeira', role: 'Advogado — Escritório de Advocacia', initials: 'MT', color: '#F97316', stars: 5, text: 'Sempre tive medo de investir em marketing digital por não entender nada. A equipe explicou tudo de forma clara, sem enrolação. Em 3 meses, minha agenda estava cheia.', result: '+129% em consultas' },
  { name: 'Juliana Santos', role: 'Diretora — E-commerce de Moda', initials: 'JS', color: '#EC4899', stars: 5, text: 'Nosso custo por aquisição caiu 68% em 4 meses. A estratégia multicanal com Google e Meta funcionou muito melhor do que tínhamos com outra agência. Super recomendo.', result: '-68% no custo por aquisição' },
]

// ReviewSchema for Google rich results
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vitrine 2 Marketing',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: testimonials.length.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: testimonials.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: t.stars.toString(), bestRating: '5' },
    reviewBody: t.text,
  })),
}

const differentials = [
  { emoji: '🛡️', title: 'Sem contrato de fidelidade', desc: 'Contratos mensais. Você fica porque está satisfeito.' },
  { emoji: '⚡', title: 'Resultados em até 30 dias', desc: 'Google Ads ativo em 7 dias úteis com resultados imediatos.' },
  { emoji: '👁️', title: 'Visibilidade total', desc: 'Acesso completo às suas contas. Nada escondido.' },
  { emoji: '🤝', title: 'Atendimento próximo', desc: 'Você fala direto com o estrategista, não com um atendente.' },
]

export default function TestimonialsSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <section id="depoimentos" className="py-20 lg:py-28 bg-[#111827]" aria-labelledby="depoimentos-heading">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#F97316] text-sm font-medium">Prova Social</span>
            </div>
            <h2 id="depoimentos-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-syne" style={{ letterSpacing: '-0.02em' }}>
              O que nossos clientes{' '}
              <span className="text-[#F97316]">estão dizendo</span>
            </h2>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#0C0E14] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 font-syne" style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm font-syne">{t.name}</p>
                    <p className="text-[#9CA3AF] text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3" aria-label={`${t.stars} estrelas`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-sm" aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="text-[#D1D5DB] text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
                <div className="inline-block bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg px-3 py-1.5 mt-auto">
                  <span className="text-[#10B981] font-bold text-sm">{t.result}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Differentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((d) => (
              <div key={d.title} className="bg-[#0C0E14] border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300">
                <span className="text-3xl mb-3 block" aria-hidden="true">{d.emoji}</span>
                <h3 className="text-white font-semibold text-sm mb-2 font-syne">{d.title}</h3>
                <p className="text-[#9CA3AF] text-xs">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
