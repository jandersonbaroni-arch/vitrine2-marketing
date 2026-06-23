import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#0C0E14] px-4">
        <div className="text-center">
          <p className="text-[#10B981] text-8xl font-extrabold font-syne mb-4">404</p>
          <h1 className="text-3xl font-bold text-white mb-4 font-syne">Página não encontrada</h1>
          <p className="text-[#9CA3AF] mb-8">A página que você está procurando não existe ou foi movida.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 font-syne"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  )
}
