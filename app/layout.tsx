import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://vitrine2marketing.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Vitrine 2 Marketing | Google Ads, Meta Ads, Sites e Mídia Exterior em BH',
    template: '%s | Vitrine 2 Marketing',
  },
  description:
    'Agência de marketing digital em Lagoa Santa-MG. Especialistas em Google Ads, Meta Ads, criação de sites, mídia exterior (outdoors, mega painéis) e comunicação multicanal. Atendemos Lagoa Santa e região metropolitana de BH. Solicite diagnóstico gratuito.',
  keywords: [
    'marketing digital bh',
    'agência marketing lagoa santa',
    'google ads belo horizonte',
    'meta ads lagoa santa',
    'criação de sites lagoa santa',
    'outdoors belo horizonte',
    'mídia exterior minas gerais',
    'comunicação multicanal',
    'tráfego pago lagoa santa',
    'google meu negocio lagoa santa',
  ],
  authors: [{ name: 'Vitrine 2 Marketing', url: BASE_URL }],
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Vitrine 2 Marketing',
    title: 'Vitrine 2 Marketing | Google Ads, Meta Ads, Sites e Mídia Exterior',
    description:
      'Somos a ponte entre sua marca e seu público. Comunicação multicanal: Google Ads, Meta Ads, sites, outdoors e mega painéis. Lagoa Santa-MG.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vitrine 2 Marketing — Agência Digital em Lagoa Santa MG',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitrine 2 Marketing | Google Ads, Meta Ads, Sites e Mídia Exterior',
    description: 'Comunicação multicanal em BH e região metropolitana. Diagnóstico gratuito.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BASE_URL,
  name: 'Vitrine 2 Marketing',
  description:
    'Agência de marketing digital em Lagoa Santa-MG. Especialistas em Google Ads, Meta Ads, criação de sites, outdoors e mídia exterior.',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  image: `${BASE_URL}/og-image.png`,
  priceRange: '$$',
  areaServed: 'Região Metropolitana de Belo Horizonte, Lagoa Santa, Minas Gerais',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Marechal Deodoro da Fonseca, 492, segundo andar',
    addressLocality: 'Lagoa Santa',
    addressRegion: 'MG',
    postalCode: '33400-000',
    addressCountry: 'BR',
  },
  telephone: '+55-31-99600-2586',
  email: 'contato@vitrine2marketing.com.br',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:30',
    closes: '17:30',
  },
  serviceType: ['Google Ads', 'Meta Ads', 'Criação de Sites', 'Mídia Exterior', 'Outdoors', 'Marketing Digital'],
  sameAs: [
    'https://www.instagram.com/vitrine2marketing',
    'https://www.facebook.com/vitrine2marketing',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Marketing Digital e Mídia Exterior',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestão de Google Ads', description: 'Campanhas de tráfego pago no Google para gerar leads e vendas qualificados.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestão de Meta Ads', description: 'Anúncios no Facebook e Instagram com segmentação avançada.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Criação de Sites', description: 'Sites profissionais otimizados para SEO e alta conversão.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mídia Exterior', description: 'Outdoors, mega painéis e comunicação visual estratégica.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Meu Negócio', description: 'Otimização do Perfil da Empresa no Google para buscas locais e Maps.' } },
    ],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vitrine 2 Marketing',
  alternateName: 'Vitrine 2',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-31-99600-2586',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://www.instagram.com/vitrine2marketing',
    'https://www.facebook.com/vitrine2marketing',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        {/* ========================================================
            GOOGLE TAG MANAGER — substitua GTM-XXXXXXX pelo seu ID
            Crie em tagmanager.google.com e cole seu ID abaixo
        ======================================================== */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');` }} /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {/* GTM noscript — descomente junto com o script acima */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript> */}
        {children}
      </body>
    </html>
  )
}
