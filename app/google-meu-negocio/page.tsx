import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Google Meu Negócio em Lagoa Santa — SEO Local',
  description: 'Otimização do Google Meu Negócio (Perfil da Empresa) em Lagoa Santa-MG. Apareça no Google Maps e nas buscas locais. Mais ligações, mais visitas, mais vendas.',
  alternates: { canonical: 'https://vitrine2marketing.com.br/google-meu-negocio' },
  openGraph: {
    title: 'Google Meu Negócio — SEO Local | Vitrine 2 Marketing',
    description: 'Apareça no Google Maps e nas buscas locais de Lagoa Santa e BH.',
    url: 'https://vitrine2marketing.com.br/google-meu-negocio',
  },
}

export default function GoogleMeuNegocioPage() {
  return (
    <ServicePageTemplate
      emoji="📍"
      color="#F97316"
      title="Google Meu Negócio — SEO Local"
      subtitle="Domine as buscas locais e o Google Maps"
      description="Quando alguém busca um serviço perto de você, aparece um mapa com 3 empresas em destaque. Nós colocamos o seu negócio nesse mapa e otimizamos seu perfil para gerar ligações e visitas — sem pagar por anúncios."
      benefits={[
        'Criação e verificação do Perfil da Empresa no Google',
        'Otimização completa de categorias, descrição e atributos',
        'Gestão e resposta profissional de avaliações',
        'Publicações regulares com ofertas e novidades',
        'Fotos profissionais e atualizadas',
        'Monitoramento de posição no Google Maps',
        'Relatório mensal de visualizações, cliques e ligações',
      ]}
      results={[
        { metric: '3x', label: 'Mais visualizações no Maps' },
        { metric: '+90%', label: 'Mais ligações geradas' },
        { metric: 'Top 3', label: 'Posição no pacote local' },
        { metric: 'Grátis', label: 'Tráfego orgânico gerado' },
      ]}
      howItWorks={[
        { step: '🔍', title: 'Auditoria', desc: 'Analisamos seu perfil atual (ou criamos do zero), identificamos lacunas e oportunidades em relação aos concorrentes locais.' },
        { step: '⚙️', title: 'Otimização', desc: 'Preenchemos todos os campos, adicionamos fotos profissionais, definimos categorias corretas e configuramos atributos relevantes.' },
        { step: '📅', title: 'Gestão Contínua', desc: 'Publicamos posts semanais, respondemos avaliações e monitoramos as métricas para manter e melhorar o posicionamento.' },
      ]}
    />
  )
}
