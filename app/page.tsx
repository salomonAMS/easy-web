import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import ServicesSection from '@/components/ServicesSection'
import AIAutomationSection from '@/components/AIAutomationSection'
import AIAuditScanner from '@/components/AIAuditScanner'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import PageLoader from '@/components/PageLoader'
import ScrollToTop from '@/components/ScrollToTop'
import ActivityNotifications from '@/components/ActivityNotifications'

/**
 * Page principale de la landing page Easy Web
 * - Design mode light inspiré de mindflow.io
 * - Effet fibre optique sur quadrillage
 * - Workflow visuel responsive
 * - Mobile-first et entièrement responsive
 * - Optimisé pour des performances maximales
 */
export default function Home() {
  return (
    <>
      {/* Loader professionnel optimisé (1s) */}
      <PageLoader />
      
      {/* Bouton pour remonter en haut */}
      <ScrollToTop />
      
      {/* Notifications d'activité en temps réel */}
      <ActivityNotifications />
      
      <main className="relative min-h-screen bg-white">
      {/* Header sticky avec menu burger et barre de progression */}
      <Header />
      
      {/* Hero Section responsive */}
      <HeroSection />
      
      {/* Section Avant/Après avec curseur touch-friendly */}
      <BeforeAfterSection />
      
      {/* Section Services avec cartes 3D */}
      <ServicesSection />
      
      {/* Section Automatisation IA avec workflow visuel */}
      <AIAutomationSection />
      
      {/* IA Audit Scanner - Analyse automatisée du potentiel */}
      <AIAuditScanner />
      
      {/* Section Contact avec formulaire */}
      <ContactSection />
      
      {/* Footer Premium avec statut systèmes */}
      <Footer />
      </main>
    </>
  )
}
