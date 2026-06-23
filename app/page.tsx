import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import SegmentsSection from '@/components/SegmentsSection'
import ResultsSection from '@/components/ResultsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SegmentsSection />
      <ResultsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <WhatsAppButton />
    </main>
  )
}
