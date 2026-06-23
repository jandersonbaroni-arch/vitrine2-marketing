'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Segmentos', href: '/#segmentos' },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'Como Funciona', href: '/#como-funciona' },
  { label: 'FAQ', href: '/#faq' },
]

const WA_LINK = 'https://wa.me/5531996002586?text=Olá!%20Quero%20um%20diagnóstico%20gratuito%20do%20meu%20marketing%20digital.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      setMobileOpen(false)
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0E14]/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Vitrine 2 Marketing - Página Inicial"
          >
            <Image
              src="/icon.png"
              alt="Logo Vitrine 2 Marketing"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-lg lg:text-xl tracking-tight font-syne">
                Vitrine<span className="text-[#10B981]">2</span>
              </span>
              <span className="text-[#9CA3AF] text-[10px] tracking-widest uppercase">Marketing</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-[#9CA3AF] hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-95 cta-pulse font-syne"
              aria-label="Falar com especialista via WhatsApp"
            >
              <Phone className="w-4 h-4" />
              (31) 99600-2586
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0C0E14]/98 backdrop-blur-xl border-t border-white/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-[#9CA3AF] hover:text-white text-base font-medium py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-5 py-3 rounded-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              (31) 99600-2586
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
