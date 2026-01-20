import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import ServicesSection from '@/components/ServicesSection'
import AIAutomationSection from '@/components/AIAutomationSection'
import ROICalculator from '@/components/ROICalculator'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import PageLoader from '@/components/PageLoader'

/**
 * Page principale de la landing page Easy Web
 * - Design mode light inspiré de mindflow.io
 * - Effet fibre optique sur quadrillage
 * - Workflow visuel responsive
 * - Mobile-first et entièrement responsive
 */
export default function Home() {
  return (
    <>
      {/* Loader professionnel */}
      <PageLoader />
      
      <main className="relative min-h-screen bg-white">
      {/* Header sticky avec menu burger */}
      <Header />
      
      {/* Hero Section responsive */}
      <HeroSection />
      
      {/* Section Avant/Après avec curseur touch-friendly */}
      <BeforeAfterSection />
      
      {/* Section Services avec cartes 3D */}
      <ServicesSection />
      
      {/* Section Automatisation IA avec workflow visuel */}
      <AIAutomationSection />
      
      {/* Calculateur de ROI */}
      <ROICalculator />
      
      {/* Section Contact avec formulaire */}
      <ContactSection />
      
      {/* Footer - Entreprise au Togo */}
      <Footer />
      </main>
    </>
  )
}
