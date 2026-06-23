/*
 * RESULTS SECTION — Prova social com números reais
 * Contadores animados + cases de sucesso
 * Design: fundo alternado #111827
 */

import { TrendingUp, Users, DollarSign, BarChart3, ArrowUpRight } from "lucide-react";
import { useIntersection, useCounter } from "@/hooks/useIntersection";

const metrics = [
  {
    icon: TrendingUp,
    value: 184,
    suffix: "%",
    label: "Aumento médio em leads",
    description: "nos primeiros 90 dias de campanha",
    color: "#F97316",
  },
  {
    icon: DollarSign,
    value: 3,
    suffix: "x",
    label: "Retorno sobre investimento",
    description: "em média para cada R$1 investido em anúncios",
    color: "#10B981",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Empresas atendidas",
    description: "em diversos segmentos no Brasil",
    color: "#3B82F6",
  },
  {
    icon: BarChart3,
    value: 72,
    suffix: "%",
    label: "Redução no custo por lead",
    description: "após otimização das campanhas",
    color: "#A855F7",
  },
];

const cases = [
  {
    segment: "Clínica Odontológica",
    result: "+185% em agendamentos",
    detail: "De 20 para 57 agendamentos/mês com Google Ads",
    channel: "Google Ads",
    color: "#4285F4",
  },
  {
    segment: "Loja de Móveis",
    result: "+137% na receita orgânica",
    detail: "Site otimizado para SEO + Google Meu Negócio",
    channel: "SEO + GMB",
    color: "#10B981",
  },
  {
    segment: "Academia de Ginástica",
    result: "400 clientes em 28 dias",
    detail: "Campanha de inauguração com Meta Ads",
    channel: "Meta Ads",
    color: "#1877F2",
  },
  {
    segment: "Escritório de Advocacia",
    result: "+129% em leads qualificados",
    detail: "Estratégia integrada Google + Meta",
    channel: "Google + Meta",
    color: "#F97316",
  },
  {
    segment: "Construtora",
    result: "R$ 2M em oportunidades",
    detail: "Em 6 meses de gestão de tráfego pago",
    channel: "Google Ads",
    color: "#4285F4",
  },
  {
    segment: "E-commerce de Moda",
    result: "+80% nas transações",
    detail: "Aumento de 80% nas vendas online em 3 meses",
    channel: "Meta + Google",
    color: "#EC4899",
  },
];

function MetricCard({ metric, delay }: { metric: typeof metrics[0]; delay: number }) {
  const { ref, visible } = useIntersection(0.1);
  const count = useCounter(metric.value, 2000, visible);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-[#0C0E14] border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-700 hover:border-[#10B981]/50 hover:shadow-lg hover:shadow-green-500/10 ${visible ? "opacity-100 translate-y-0 animate-slide-up" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${metric.color}20` }}
      >
        <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
      </div>
      <div
        className="text-4xl lg:text-5xl font-extrabold mb-1 counter-pop"
        style={{ color: metric.color, fontFamily: "'Syne', sans-serif" }}
      >
        {count}{metric.suffix}
      </div>
      <div className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
        {metric.label}
      </div>
      <div className="text-[#9CA3AF] text-sm">{metric.description}</div>
    </div>
  );
}

function CaseCard({ c, i }: { c: typeof cases[0]; i: number }) {
  const { ref, visible } = useIntersection(0.1);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-[#0C0E14] border border-white/10 rounded-xl p-5 transition-all duration-700 hover:border-[#10B981]/50 hover:shadow-lg hover:shadow-green-500/10 ${visible ? "opacity-100 translate-y-0 animate-slide-up" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${i * 80}ms`, animationDelay: `${i * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-[#9CA3AF] text-xs uppercase tracking-wider">{c.segment}</span>
          <div
            className="text-xl font-bold mt-1"
            style={{ color: c.color, fontFamily: "'Syne', sans-serif" }}
          >
            {c.result}
          </div>
        </div>
        <ArrowUpRight className="w-5 h-5 text-[#9CA3AF]" />
      </div>
      <p className="text-[#9CA3AF] text-sm">{c.detail}</p>
      <div
        className="mt-3 inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
        style={{ backgroundColor: `${c.color}15`, color: c.color }}
      >
        {c.channel}
      </div>
    </div>
  );
}

export default function ResultsSection() {
  const { ref, visible } = useIntersection(0.05);

  return (
    <section id="resultados" className="py-20 lg:py-28 bg-[#111827]" aria-label="Resultados e Cases de Sucesso">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0 animate-slide-up" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#10B981] text-sm font-medium">Números reais, não promessas</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
          >
            Resultados que{" "}
            <span className="text-[#10B981]">aparecem no caixa</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Não medimos sucesso em seguidores ou impressões. Medimos em <strong className="text-white">leads, vendas e faturamento</strong>. Veja os resultados reais que entregamos para nossos clientes em Lagoa Santa-MG, BH e região metropolitana com Google Ads, Meta Ads, SEO e Google Meu Negócio.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} delay={i * 100} />
          ))}
        </div>

        {/* Cases Grid */}
        <div className="mb-8">
          <h3
            className="text-xl font-bold text-white mb-6 text-center"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Cases de Sucesso Recentes — Clínicas, Academias, Lojas, Escritórios
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cases.map((c, i) => (
              <CaseCard key={c.segment} c={c} i={i} />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[#6B7280] text-xs">
          * Resultados baseados em clientes reais. Resultados individuais podem variar conforme segmento, orçamento e mercado.
        </p>
      </div>
    </section>
  );
}
