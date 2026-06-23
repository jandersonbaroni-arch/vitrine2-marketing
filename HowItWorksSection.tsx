/*
 * HOW IT WORKS SECTION — Processo transparente em 4 etapas
 * Quebra objeção: "Como funciona?" e "Quais garantias tenho?"
 */

import { MessageSquare, Search, Rocket, BarChart3, ArrowRight } from "lucide-react";
import { useIntersection } from "@/hooks/useIntersection";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Diagnóstico Gratuito",
    description:
      "Conversamos sobre seu negócio, seu público-alvo e seus objetivos. Analisamos o que está funcionando e o que está desperdiçando dinheiro. Sem compromisso.",
    color: "#F97316",
  },
  {
    number: "02",
    icon: Search,
    title: "Estratégia Personalizada",
    description:
      "Montamos um plano sob medida para o seu segmento, orçamento e metas. Nada de soluções genéricas — cada negócio tem uma estratégia única.",
    color: "#3B82F6",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execução e Lançamento",
    description:
      "Configuramos tudo: campanhas, pixels, conversões, landing pages. Você aprova antes de ir ao ar. Lançamento em até 7 dias úteis.",
    color: "#10B981",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Otimização Contínua",
    description:
      "Monitoramos diariamente, otimizamos semanalmente e enviamos relatórios mensais completos. Você sempre sabe exatamente onde está cada centavo.",
    color: "#A855F7",
  },
];

const guarantees = [
  {
    title: "Transparência Total",
    description: "Você tem acesso às contas de anúncios. Nada é escondido.",
  },
  {
    title: "Relatórios Mensais",
    description: "Relatório detalhado com todas as métricas e resultados.",
  },
  {
    title: "Reuniões de Alinhamento",
    description: "Reunião mensal para revisar estratégia e próximos passos.",
  },
  {
    title: "Sem Fidelidade Longa",
    description: "Contratos mensais. Ficamos porque entregamos resultado.",
  },
];

export default function HowItWorksSection() {
  const { ref, visible } = useIntersection(0.05);

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#0C0E14]" aria-label="Como Funciona Nossa Metodologia">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0 animate-slide-up" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#3B82F6] text-sm font-medium">Processo transparente</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
          >
            Do diagnóstico ao{" "}
            <span className="text-[#3B82F6]">resultado</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Sem mistério, sem jargão técnico. Veja exatamente como trabalhamos para fazer seu negócio crescer.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => {
            const { ref: sRef, visible: sVisible } = useIntersection(0.1);
            return (
              <div
                key={step.number}
                ref={sRef as React.RefObject<HTMLDivElement>}
                className={`relative transition-all duration-700 ${sVisible ? "opacity-100 translate-y-0 animate-slide-up" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 120}ms`, animationDelay: `${i * 120}ms` }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0" style={{ width: "calc(100% - 4rem)" }} />
                )}
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 relative z-10 h-full hover:border-[#10B981]/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                  <div
                    className="text-5xl font-extrabold mb-4 opacity-20"
                    style={{ color: step.color, fontFamily: "'Syne', sans-serif" }}
                  >
                    {step.number}
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <h3
                    className="text-white font-bold text-lg mb-3"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3
              className="text-2xl lg:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Nossas <span className="text-[#F97316]">Garantias</span>
            </h3>
            <p className="text-[#9CA3AF]">
              Transparência não é diferencial — é obrigação. Veja o que você pode esperar de nós.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#F97316]" />
                </div>
                <h4 className="text-white font-semibold mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {g.title}
                </h4>
                <p className="text-[#9CA3AF] text-sm">{g.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/31996002586?text=Olá!%20Quero%20entender%20melhor%20como%20funciona%20o%20processo%20de%20vocês.",
                  "_blank"
                )
              }
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] active:scale-95 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 cta-pulse"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Quero Começar Agora
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
