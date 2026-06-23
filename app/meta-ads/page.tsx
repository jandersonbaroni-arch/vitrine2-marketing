import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Meta Ads — Facebook e Instagram em Lagoa Santa',
  description: 'Gestão de Meta Ads (Facebook e Instagram) em Lagoa Santa-MG. Segmentação avançada, criativos de alto impacto e campanhas de geração de leads. Resultados mensuráveis.',
  alternates: { canonical: 'https://vitrine2marketing.com.br/meta-ads' },
  openGraph: {
    title: 'Meta Ads — Facebook e Instagram | Vitrine 2 Marketing',
    description: 'Anúncios no Facebook e Instagram para empresas em Lagoa Santa e BH.',
    url: 'https://vitrine2marketing.com.br/meta-ads',
  },
}

export default function MetaAdsPage() {
  return (
    <ServicePageTemplate
      emoji="🎯"
      color="#1877F2"
      title="Meta Ads — Facebook e Instagram"
      subtitle="Alcance o público certo na hora certa"
      description="Alcance exatamente quem tem o perfil do seu cliente ideal — por idade, localização, interesses e comportamento. Criamos anúncios que param o scroll e convertem visitantes em clientes."
      benefits={[
        'Segmentação avançada por público personalizado e lookalike',
        'Criação de criativos (imagens e vídeos) de alto impacto',
        'Remarketing para quem visitou seu site ou perfil',
        'Campanhas de leads, vendas, reconhecimento e tráfego',
        'Pixel e Conversions API configurados corretamente',
        'Testes A/B de criativos e públicos',
        'Relatórios mensais com custo por lead e ROAS',
      ]}
      results={[
        { metric: '3x', label: 'Retorno médio sobre investimento' },
        { metric: '-65%', label: 'Custo por lead otimizado' },
        { metric: '400', label: 'Clientes em 28 dias (Academia)' },
        { metric: '200+', label: 'Empresas atendidas' },
      ]}
      howItWorks={[
        { step: '🎯', title: 'Mapeamento de Público', desc: 'Definimos os perfis de cliente ideal, criamos públicos personalizados e lookalike para maximizar a precisão da segmentação.' },
        { step: '🎨', title: 'Criação de Criativos', desc: 'Desenvolvemos imagens e textos de anúncios testados para máxima taxa de clique e conversão no seu segmento específico.' },
        { step: '📊', title: 'Gestão e Escala', desc: 'Otimizamos diariamente, pausamos o que não funciona, escalamos o que converte e relatamos tudo mensalmente.' },
      ]}
    />
  )
}
