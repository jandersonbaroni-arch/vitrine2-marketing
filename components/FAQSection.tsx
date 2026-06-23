'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Quanto tempo leva para ver resultados com Google Ads?',
    answer: 'Com Google Ads, os primeiros resultados aparecem nas primeiras 24 a 48 horas após a ativação das campanhas. Resultados otimizados e consistentes são alcançados entre 30 e 90 dias, conforme o algoritmo do Google aprende e otimiza automaticamente. Diferente do SEO, o tráfego pago é imediato.',
  },
  {
    question: 'Qual a diferença entre Google Ads e Meta Ads?',
    answer: 'O Google Ads captura pessoas que já estão buscando ativamente pelo seu produto ou serviço — é demanda existente, fundo de funil. O Meta Ads (Facebook e Instagram) cria demanda, alcançando pessoas pelo perfil e comportamento — é topo e meio de funil. A estratégia mais eficiente geralmente combina os dois canais.',
  },
  {
    question: 'Preciso ter um site para anunciar?',
    answer: 'Não é obrigatório, mas ter um site ou landing page profissional aumenta significativamente a taxa de conversão dos seus anúncios. Sem uma página de destino otimizada, você paga pelo clique mas perde o cliente na chegada. Podemos criar uma landing page específica para suas campanhas como parte da estratégia.',
  },
  {
    question: 'Por que preciso de Google Meu Negócio?',
    answer: 'O Google Meu Negócio (Perfil da Empresa no Google) faz sua empresa aparecer no Google Maps e nas buscas locais — completamente gratuito. Quando alguém pesquisa "dentista perto de mim" ou "restaurante em Lagoa Santa", aparecem 3 empresas em destaque. Um perfil bem otimizado pode gerar dezenas de ligações e visitas por mês sem custo de anúncio.',
  },
  {
    question: 'Qual o investimento mínimo em anúncios?',
    answer: 'O investimento em anúncios (verba de mídia) é separado da taxa de gestão. Para Google Ads, recomendamos no mínimo R$ 1.000/mês em verba para ter dados suficientes para otimização. Para Meta Ads, é possível começar com R$ 600/mês. Esses valores são pagos diretamente ao Google e Meta — não passam por nós.',
  },
  {
    question: 'Como funciona o contrato? Tem fidelidade?',
    answer: 'Trabalhamos com contratos mensais, sem fidelidade longa. Acreditamos que o cliente deve ficar porque está satisfeito com os resultados, não porque assinou um contrato de 12 meses. Pedimos apenas 30 dias de aviso prévio para organizar a transição.',
  },
  {
    question: 'Vou ter acesso às minhas contas de anúncios?',
    answer: 'Sim, sempre. As contas de Google Ads e Meta Ads são criadas no seu nome ou você nos concede acesso à sua conta existente. Você tem visibilidade total de tudo que está acontecendo. Não trabalhamos com contas "presas" — se você sair, leva tudo consigo.',
  },
  {
    question: 'Vocês trabalham com qual tipo de empresa?',
    answer: 'Atendemos empresas de todos os portes e segmentos: clínicas, escritórios, lojas físicas, e-commerces, prestadores de serviço, construtoras, academias e muito mais. A estratégia é sempre personalizada para o seu segmento e público-alvo específico.',
  },
]

// FAQPage schema for Google rich results
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden hover:border-[#10B981]/30 transition-all duration-200">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-[#111827] hover:bg-[#111827]/80 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-sm lg:text-base font-syne">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-[#10B981] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 bg-[#111827]/50">
          <p className="text-[#D1D5DB] text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="py-20 lg:py-28 bg-[#0C0E14]" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/15 border border-[#10B981]/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#10B981] text-sm font-medium">Perguntas Frequentes</span>
            </div>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-syne" style={{ letterSpacing: '-0.02em' }}>
              Dúvidas antes de contratar?{' '}
              <span className="text-[#10B981]">A gente responde.</span>
            </h2>
            <p className="text-[#9CA3AF] max-w-xl mx-auto">
              As perguntas mais comuns de quem está considerando investir em marketing digital.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
