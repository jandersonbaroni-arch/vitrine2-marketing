import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Google Ads em Lagoa Santa e BH',
  description: 'Gestão profissional de Google Ads em Lagoa Santa-MG. Apareça no topo do Google quando seu cliente está buscando. Campanhas de pesquisa, display e Performance Max. ROI comprovado.',
  alternates: { canonical: 'https://vitrine2marketing.com.br/google-ads' },
  openGraph: {
    title: 'Google Ads em Lagoa Santa e BH | Vitrine 2 Marketing',
    description: 'Gestão de campanhas Google Ads para empresas em Lagoa Santa e região metropolitana de BH.',
    url: 'https://vitrine2marketing.com.br/google-ads',
  },
}

export default function GoogleAdsPage() {
  return (
    <ServicePageTemplate
      emoji="🔍"
      color="#4285F4"
      title="Google Ads em Lagoa Santa e BH"
      subtitle="Apareça no topo quando seu cliente está buscando"
      description="Seu cliente pesquisa 'melhor serviço perto de mim' — e encontra o seu concorrente. Com nossa gestão profissional de Google Ads, você aparece no momento exato da decisão de compra, pagando apenas por quem clicou."
      benefits={[
        'Campanhas de Pesquisa, Display e Performance Max',
        'Pesquisa e seleção de palavras-chave de alta intenção de compra',
        'Negativação inteligente para eliminar desperdício de verba',
        'Otimização semanal de lances, anúncios e extensões',
        'Configuração de conversões (ligações, formulários, WhatsApp)',
        'Relatórios mensais claros com ROI detalhado',
        'Acesso completo à sua conta Google Ads',
      ]}
      results={[
        { metric: '+184%', label: 'Aumento médio em leads' },
        { metric: '48h', label: 'Para ver os primeiros resultados' },
        { metric: '72%', label: 'Redução no custo por lead' },
        { metric: '200+', label: 'Empresas atendidas' },
      ]}
      howItWorks={[
        { step: '📞', title: 'Diagnóstico', desc: 'Analisamos seu negócio, concorrentes e oportunidades de palavras-chave. Estimamos o potencial de leads e custo por aquisição.' },
        { step: '⚙️', title: 'Configuração', desc: 'Criamos ou auditamos sua conta, estruturamos as campanhas, definimos lances e configuramos rastreamento de conversões.' },
        { step: '📈', title: 'Otimização Contínua', desc: 'Monitoramento diário, ajuste de lances semanal e relatório mensal completo com todas as métricas de performance.' },
      ]}
    />
  )
}
