import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, CheckCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/5531996002586?text=Olá!%20Quero%20um%20diagnóstico%20gratuito%20do%20meu%20marketing%20digital.'

const ctaBenefits = [
  'Diagnóstico 100% gratuito e sem compromisso',
  'Estratégia multicanal (digital + mídia exterior)',
  'Personalizado para seu segmento e região',
  'Resposta em até 2 horas úteis',
]

const footerServices = [
  { label: 'Google Ads em Lagoa Santa', href: '/google-ads' },
  { label: 'Meta Ads — Facebook e Instagram', href: '/meta-ads' },
  { label: 'Google Meu Negócio Otimizado', href: '/google-meu-negocio' },
  { label: 'Criação de Sites Profissionais', href: '/criacao-de-sites' },
  { label: 'Mídia Exterior — Outdoors e Painéis', href: '/midia-exterior' },
  { label: 'Marketing Digital BH', href: '/#servicos' },
]

const footerNav = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Segmentos', href: '/#segmentos' },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'Como Funciona', href: '/#como-funciona' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contato', href: '/#contato' },
]

export default function CTASection() {
  return (
    <>
      {/* CTA */}
      <section id="contato" className="py-20 lg:py-28 bg-[#111827] relative overflow-hidden" aria-labelledby="contato-heading">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" aria-hidden="true" />
                <span className="text-[#F97316] text-sm font-medium">Vagas limitadas este mês</span>
              </div>
              <h2
                id="contato-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight font-syne"
                style={{ letterSpacing: '-0.02em' }}
              >
                Pronto para{' '}
                <span className="text-[#F97316]">parar de perder</span>{' '}
                clientes para o concorrente?
              </h2>
              <p className="text-[#D1D5DB] text-lg mb-8 leading-relaxed">
                Cada dia sem uma estratégia digital eficiente é um dia em que seu concorrente está captando os clientes que deveriam ser seus.
              </p>
              <ul className="space-y-3 mb-8">
                {ctaBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[#D1D5DB]">
                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] active:scale-95 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 cta-pulse shadow-lg shadow-green-500/25 font-syne"
                >
                  <Phone className="w-5 h-5" />
                  (31) 99600-2586
                </a>
                <a
                  href="mailto:contato@vitrine2marketing.com.br"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/20 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  Enviar E-mail
                </a>
              </div>
            </div>

            {/* Contact info card */}
            <div className="bg-[#0C0E14] border border-white/10 rounded-3xl p-8">
              <h3 className="text-white font-bold text-xl mb-6 font-syne">Entre em Contato</h3>
              <div className="space-y-5">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#D1D5DB] hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/30 transition-colors">
                    <Phone className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF]">WhatsApp</p>
                    <p className="font-semibold">(31) 99600-2586</p>
                  </div>
                </a>
                <a
                  href="mailto:contato@vitrine2marketing.com.br"
                  className="flex items-center gap-4 text-[#D1D5DB] hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/30 transition-colors">
                    <Mail className="w-4 h-4 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF]">E-mail</p>
                    <p className="font-semibold">contato@vitrine2marketing.com.br</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-[#D1D5DB]">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF]">Endereço</p>
                    <p className="font-semibold text-sm">Rua Marechal Deodoro da Fonseca, 492</p>
                    <p className="text-xs text-[#9CA3AF]">2º andar — Lagoa Santa, MG</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[#9CA3AF] text-xs mb-3">Siga nas redes sociais</p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://www.instagram.com/vitrine2marketing', icon: Instagram, label: 'Instagram', color: '#E1306C' },
                    { href: 'https://www.facebook.com/vitrine2marketing', icon: Facebook, label: 'Facebook', color: '#1877F2' },
                    { href: '#', icon: Linkedin, label: 'LinkedIn', color: '#0A66C2' },
                  ].map(({ href, icon: Icon, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C0E14] border-t border-white/10 py-12" role="contentinfo">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-xl font-syne">
                    Vitrine<span className="text-[#10B981]">2</span>
                  </span>
                  <span className="text-[#9CA3AF] text-[10px] tracking-widest uppercase">Marketing</span>
                </div>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                Agência de marketing digital em Lagoa Santa-MG. Especialistas em tráfego pago, SEO local e mídia exterior.
              </p>
              <p className="text-[#6B7280] text-xs">
                CNPJ: JNX Brasil Divulgação LTDA<br />
                Lagoa Santa — MG
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 font-syne">Serviços</h4>
              <ul className="space-y-2">
                {footerServices.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-[#6B7280] hover:text-[#10B981] text-sm transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 font-syne">Navegação</h4>
              <ul className="space-y-2">
                {footerNav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-[#6B7280] hover:text-[#10B981] text-sm transition-colors">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#6B7280] text-xs">
              © {new Date().getFullYear()} Vitrine 2 Marketing. Todos os direitos reservados.
            </p>
            <p className="text-[#6B7280] text-xs">
              Lagoa Santa — MG | (31) 99600-2586
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
