'use client'

import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ErrorBoundary from '@/components/ErrorBoundary'

// Lazy loading des composants lourds pour améliorer les performances
// PageLoader désactivé pour améliorer le LCP
const BeforeAfterSection = dynamic(() => import('@/components/BeforeAfterSection'), { ssr: false })
const ServicesSection = dynamic(() => import('@/components/ServicesSection'))
const AIAutomationSection = dynamic(() => import('@/components/AIAutomationSection'), { ssr: false })
const AIAuditScanner = dynamic(() => import('@/components/AIAuditScanner'), { ssr: false })
const ContactSection = dynamic(() => import('@/components/ContactSection'))
const Footer = dynamic(() => import('@/components/Footer'))
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), { ssr: false })
const ActivityNotifications = dynamic(() => import('@/components/ActivityNotifications'), { ssr: false })

/**
 * Page principale de la landing page Easy Web
 * - Design mode light inspiré de mindflow.io
 * - Effet fibre optique sur quadrillage
 * - Workflow visuel responsive
 * - Mobile-first et entièrement responsive
 * - Optimisé pour des performances maximales et LCP < 2s
 */
export default function Home() {
  return (
    <>
      {/* Bouton pour remonter en haut - Chargé en différé */}
      <ScrollToTop />
      
      {/* Notifications d'activité en temps réel - Chargé en différé */}
      <ActivityNotifications />
      
      <main className="relative min-h-screen bg-white dark:bg-gray-950">
      {/* Header sticky avec menu burger et barre de progression */}
      <Header />
      
      {/* Hero Section responsive */}
      <HeroSection />
      
      {/* Section Avant/Après avec curseur touch-friendly */}
      <ErrorBoundary>
        <BeforeAfterSection />
      </ErrorBoundary>
      
      {/* Section Services avec cartes 3D */}
      <ErrorBoundary>
        <ServicesSection />
      </ErrorBoundary>
      
      {/* Section Automatisation IA avec workflow visuel */}
      <ErrorBoundary>
        <AIAutomationSection />
      </ErrorBoundary>
      
      {/* IA Audit Scanner - Analyse automatisée du potentiel */}
      <ErrorBoundary>
        <AIAuditScanner />
      </ErrorBoundary>
      
      {/* Section Contact avec formulaire */}
      <ErrorBoundary>
        <ContactSection />
      </ErrorBoundary>
      
      {/* Footer Premium avec statut systèmes */}
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
      </main>
    </>
  )
}
