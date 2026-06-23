import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Mídia Exterior — Outdoors e Mega Painéis em BH',
  description: 'Outdoors, mega painéis e mídia exterior em Lagoa Santa e região metropolitana de Belo Horizonte. Painéis próprios e rede nacional de parceiros. Impacto visual 24h por dia.',
  alternates: { canonical: 'https://vitrine2marketing.com.br/midia-exterior' },
  openGraph: {
    title: 'Mídia Exterior — Outdoors e Mega Painéis | Vitrine 2 Marketing',
    description: 'Outdoors e mega painéis em Lagoa Santa e região metropolitana de BH.',
    url: 'https://vitrine2marketing.com.br/midia-exterior',
  },
}

export default function MidiaExteriorPage() {
  return (
    <ServicePageTemplate
      emoji="🏙️"
      color="#F97316"
      title="Mídia Exterior — Outdoors e Mega Painéis"
      subtitle="Visibilidade 24 horas em pontos estratégicos"
      description="Comunicação visual de alto impacto em Lagoa Santa e região metropolitana de Belo Horizonte. Painéis próprios em pontos estratégicos e rede nacional de parceiros. Sua marca visível 24h para quem passa."
      benefits={[
        'Painéis próprios em Lagoa Santa e Região Metropolitana de BH',
        'Rede nacional de parceiros para cobertura ampliada',
        'Arte profissional inclusa no pacote',
        'Monitoramento de tráfego de veículos nos painéis',
        'Contratos flexíveis — sem fidelidade longa',
        'Combinação com digital para rastrear resultados (QR code + UTM)',
        'Consultoria de posicionamento e rota estratégica',
      ]}
      results={[
        { metric: '24h', label: 'Visibilidade por dia' },
        { metric: '200k+', label: 'Impressões/mês por painel' },
        { metric: 'Próprios', label: 'Painéis em Lagoa Santa' },
        { metric: 'Nacional', label: 'Rede de parceiros' },
      ]}
      howItWorks={[
        { step: '🗺️', title: 'Escolha do Ponto', desc: 'Analisamos o perfil do seu público e indicamos os pontos de maior tráfego qualificado para sua marca em Lagoa Santa e BH.' },
        { step: '🎨', title: 'Criação da Arte', desc: 'Nossa equipe cria a arte do painel seguindo as melhores práticas de comunicação visual para mídia exterior.' },
        { step: '📡', title: 'Veiculação e Monitoramento', desc: 'Instalamos ou reservamos o espaço, veiculamos e monitoramos as métricas de tráfego no período contratado.' },
      ]}
    />
  )
}
