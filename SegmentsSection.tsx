/*
 * SEGMENTS SECTION — SEO de cauda longa + prova de especialidade
 * Mostra os segmentos atendidos para ranquear em buscas específicas
 */

import { useIntersection } from "@/hooks/useIntersection";

const segments = [
  { name: "Clínicas e Consultórios", emoji: "🏥", color: "#3B82F6" },
  { name: "Escritórios de Advocacia", emoji: "⚖️", color: "#F97316" },
  { name: "Academias e Fitness", emoji: "💪", color: "#10B981" },
  { name: "Restaurantes e Bares", emoji: "🍽️", color: "#F59E0B" },
  { name: "Imobiliárias", emoji: "🏠", color: "#8B5CF6" },
  { name: "Lojas e E-commerces", emoji: "🛍️", color: "#EC4899" },
  { name: "Construtoras", emoji: "🏗️", color: "#F97316" },
  { name: "Salões de Beleza", emoji: "💅", color: "#EC4899" },
  { name: "Escolas e Cursos", emoji: "📚", color: "#3B82F6" },
  { name: "Oficinas e Auto Peças", emoji: "🔧", color: "#6B7280" },
  { name: "Clínicas Veterinárias", emoji: "🐾", color: "#10B981" },
  { name: "Contabilidade", emoji: "📊", color: "#F97316" },
];

export default function SegmentsSection() {
  const { ref, visible } = useIntersection(0.05);

  return (
    <section
      id="segmentos"
      className="py-16 bg-[#0C0E14] border-t border-white/5"
      aria-label="Segmentos Atendidos pela Agência de Marketing Digital em Lagoa Santa"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2
            className="text-2xl lg:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Atendemos{" "}
            <span className="text-[#F97316]">todos os segmentos</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto">
            Marketing digital especializado para <strong className="text-white">clínicas, consultórios, academias, restaurantes, imobiliárias, e-commerces, construtoras, salões, escolas, oficinas e muito mais</strong> em Lagoa Santa-MG e região metropolitana de Belo Horizonte. Estratégias personalizadas para cada tipo de negócio. Sem soluções genéricas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {segments.map((seg, i) => {
            const { ref: sRef, visible: sVisible } = useIntersection(0.1);
            return (
              <div
                key={seg.name}
                ref={sRef as React.RefObject<HTMLDivElement>}
                className={`flex items-center gap-2 bg-[#111827] border border-white/10 hover:border-white/25 rounded-full px-4 py-2 transition-all duration-500 cursor-default ${sVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-base">{seg.emoji}</span>
                <span className="text-[#D1D5DB] text-sm font-medium">{seg.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
