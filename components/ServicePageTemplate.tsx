import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import WhatsAppButton from '@/components/WhatsAppButton'
import FAQSection from '@/components/FAQSection'
import { CheckCircle, ArrowLeft } from 'lucide-react'

const WA_LINK = 'https://wa.me/5531996002586?text=Olá!%20Quero%20um%20diagnóstico%20gratuito%20do%20meu%20marketing%20digital.'

export interface ServicePageProps {
  emoji: string
  title: string
  subtitle: string
  description: string
  color: string
  benefits: string[]
  howItWorks: { step: string; title: string; desc: string }[]
  results: { metric: string; label: string }[]
  faqOverride?: boolean
}

export default function ServicePageTemplate({
  emoji, title, subtitle, description, color, benefits, howItWorks, results,
}: ServicePageProps) {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center pt-24 pb-16 bg-[#0C0E14] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 70% 50%, ${color}08 0%, transparent 60%)` }} aria-hidden="true" />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-5xl" aria-hidden="true">{emoji}</span>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${color}20`, color }}>
                Vitrine 2 Marketing
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-syne" style={{ letterSpacing: '-0.02em' }}>
              {title}
            </h1>
            <p className="text-xl text-[#D1D5DB] mb-4 font-semibold">{subtitle}</p>
            <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">{description}</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 cta-pulse shadow-lg shadow-green-500/25 font-syne"
            >
              Quero um Diagnóstico Gratuito →
            </a>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section className="py-10 bg-[#111827] border-y border-white/10" aria-label="Resultados">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="text-3xl font-extrabold font-syne" style={{ color }}>{r.metric}</p>
                <p className="text-[#9CA3AF] text-sm mt-1">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0C0E14]" aria-labelledby="beneficios-heading">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="beneficios-heading" className="text-3xl font-extrabold text-white mb-8 font-syne">
                O que está incluído no serviço
              </h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[#D1D5DB]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#111827] border border-white/10 rounded-3xl p-8">
              <h3 className="text-white font-bold text-xl mb-6 font-syne">Solicite seu diagnóstico gratuito</h3>
              <p className="text-[#9CA3AF] mb-6 text-sm leading-relaxed">
                Analisamos sua presença digital atual e apresentamos um plano estratégico personalizado — sem custo e sem compromisso.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#10B981] hover:bg-[#059669] text-white font-bold py-4 rounded-xl transition-all duration-200 font-syne"
              >
                Falar pelo WhatsApp
              </a>
              <p className="text-center text-[#6B7280] text-xs mt-3">Resposta em até 2 horas úteis</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#111827]" aria-labelledby="processo-heading">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 id="processo-heading" className="text-3xl font-extrabold text-white mb-12 text-center font-syne">
            Como funciona na prática
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((s, i) => (
              <div key={s.title} className="bg-[#0C0E14] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-extrabold font-syne" style={{ color: `${color}40` }}>0{i + 1}</span>
                  <span className="text-2xl" aria-hidden="true">{s.step}</span>
                </div>
                <h3 className="text-white font-bold mb-2 font-syne">{s.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
      <WhatsAppButton />
    </main>
  )
}
