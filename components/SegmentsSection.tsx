const segments = [
  { name: 'Clínicas e Consultórios', emoji: '🏥' },
  { name: 'Escritórios de Advocacia', emoji: '⚖️' },
  { name: 'Academias e Fitness', emoji: '💪' },
  { name: 'Restaurantes e Bares', emoji: '🍽️' },
  { name: 'Imobiliárias', emoji: '🏠' },
  { name: 'Lojas e E-commerces', emoji: '🛍️' },
  { name: 'Construtoras', emoji: '🏗️' },
  { name: 'Salões de Beleza', emoji: '💅' },
  { name: 'Escolas e Cursos', emoji: '📚' },
  { name: 'Oficinas e Auto Peças', emoji: '🔧' },
  { name: 'Clínicas Veterinárias', emoji: '🐾' },
  { name: 'Contabilidade', emoji: '📊' },
]

export default function SegmentsSection() {
  return (
    <section
      id="segmentos"
      className="py-16 bg-[#0C0E14] border-t border-white/5"
      aria-labelledby="segmentos-heading"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-10">
          <h2
            id="segmentos-heading"
            className="text-2xl lg:text-3xl font-bold text-white mb-3 font-syne"
          >
            Atendemos{' '}
            <span className="text-[#F97316]">todos os segmentos</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto text-sm lg:text-base">
            Marketing digital especializado para{' '}
            <strong className="text-white">
              clínicas, consultórios, academias, restaurantes, imobiliárias, e-commerces, construtoras, salões, escolas, oficinas e muito mais
            </strong>{' '}
            em Lagoa Santa-MG e região metropolitana de Belo Horizonte.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {segments.map((seg) => (
            <div
              key={seg.name}
              className="flex items-center gap-2 bg-[#111827] border border-white/10 hover:border-white/25 rounded-full px-4 py-2 transition-all duration-200 cursor-default"
            >
              <span className="text-base" aria-hidden="true">{seg.emoji}</span>
              <span className="text-[#D1D5DB] text-sm font-medium">{seg.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
