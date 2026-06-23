import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Criação de Sites Profissionais em Lagoa Santa',
  description: 'Criação de sites profissionais em Lagoa Santa-MG. Sites rápidos, otimizados para SEO e Alta Conversão. Design responsivo, integração com Google Analytics e entrega em até 15 dias.',
  alternates: { canonical: 'https://vitrine2marketing.com.br/criacao-de-sites' },
  openGraph: {
    title: 'Criação de Sites Profissionais | Vitrine 2 Marketing',
    description: 'Sites que convertem visitantes em clientes. Lagoa Santa e região de BH.',
    url: 'https://vitrine2marketing.com.br/criacao-de-sites',
  },
}

export default function CriacaoDeSitesPage() {
  return (
    <ServicePageTemplate
      emoji="🌐"
      color="#10B981"
      title="Criação de Sites Profissionais"
      subtitle="Site que converte visitantes em clientes"
      description="Não adianta ter tráfego se o site não converte. Criamos sites rápidos, bonitos e otimizados para SEO — projetados para transformar visitantes em leads e vendas. Do briefing ao ar em até 15 dias úteis."
      benefits={[
        'Design responsivo e mobile-first (70%+ do tráfego é mobile)',
        'Velocidade otimizada para Core Web Vitals do Google',
        'SEO técnico desde a fundação (sem SPA que o Google não indexa)',
        'Integração com Google Analytics 4 e Tag Manager',
        'Formulários de contato com notificação por e-mail',
        'HTTPS incluído e performance garantida',
        'Entrega em até 15 dias úteis com 2 rodadas de revisão',
      ]}
      results={[
        { metric: '15 dias', label: 'Prazo de entrega' },
        { metric: '3x', label: 'Mais leads após o lançamento' },
        { metric: '95+', label: 'Score no Google PageSpeed' },
        { metric: '100%', label: 'Indexável pelo Google' },
      ]}
      howItWorks={[
        { step: '📋', title: 'Briefing', desc: 'Entendemos seu negócio, público e objetivos. Definimos estrutura, páginas necessárias e referências visuais juntos.' },
        { step: '🎨', title: 'Design e Desenvolvimento', desc: 'Criamos o layout, você aprova, e desenvolvemos com código limpo, rápido e otimizado para indexação real no Google.' },
        { step: '🚀', title: 'Publicação e Treinamento', desc: 'Publicamos no seu domínio, configuramos Analytics e Tag Manager, e ensinamos você a atualizar o conteúdo básico.' },
      ]}
    />
  )
}
