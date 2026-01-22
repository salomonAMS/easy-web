import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIAutomationSection from '@/components/AIAutomationSection'
import { Metadata } from 'next'
import { Bot, MessageSquare, FileText, Mail, Calendar, Database, Workflow, Zap, TrendingUp, Clock, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatisations IA - Easy Web | Agents Intelligents sur Mesure',
  description: 'Nos experts créent, déploient et maintiennent vos agents IA pour automatiser vos processus métier. Chatbots, automatisation email, gestion documentaire et plus.',
}

export default function AutomatisationsPage() {
  const useCases = [
    {
      icon: MessageSquare,
      title: 'Chatbot Intelligent',
      description: 'Agent conversationnel qui répond aux questions clients 24/7',
      benefits: ['Réduit la charge du support', 'Répond instantanément', 'Disponible 24/7'],
      roi: '50% de tickets support en moins',
      price: '100k - 300k FCFA (150€ - 450€)'
    },
    {
      icon: Mail,
      title: 'Automatisation Email',
      description: 'Gestion intelligente des emails et réponses automatiques',
      benefits: ['Trie et classe les emails', 'Répond automatiquement', 'Suit les conversations'],
      roi: '20h économisées/semaine',
      price: '75k - 250k FCFA (115€ - 380€)'
    },
    {
      icon: FileText,
      title: 'Gestion Documentaire IA',
      description: 'Extraction et traitement automatique de documents',
      benefits: ['Lit et comprend les documents', 'Extrait les données clés', 'Génère des rapports'],
      roi: '85% de temps gagné',
      price: '200k - 500k FCFA (300€ - 750€)'
    },
    {
      icon: Calendar,
      title: 'Assistant de Rendez-vous',
      description: 'Prise de rendez-vous automatisée et gestion d\'agenda',
      benefits: ['Réserve automatiquement', 'Envoie des rappels', 'Gère les annulations'],
      roi: '30h économisées/mois',
      price: '50k - 200k FCFA (75€ - 300€)'
    },
    {
      icon: Database,
      title: 'Enrichissement de Données',
      description: 'Collecte et enrichissement automatique d\'informations',
      benefits: ['Trouve des prospects', 'Enrichit les fiches clients', 'Met à jour la base'],
      roi: '10x plus de leads qualifiés',
      price: '150k - 400k FCFA (225€ - 600€)'
    },
    {
      icon: Workflow,
      title: 'Workflows Métier',
      description: 'Automatisation complète de vos processus internes',
      benefits: ['Connecte vos outils', 'Automatise les tâches', 'Réduit les erreurs'],
      roi: '60% de productivité en plus',
      price: 'Sur devis'
    }
  ]

  const implementationProcess = [
    {
      step: '1',
      title: 'Analyse de vos Besoins',
      description: 'Nous étudions vos processus actuels et identifions les opportunités d\'automatisation.',
      duration: '2-3 jours',
      deliverable: 'Document d\'analyse et recommandations'
    },
    {
      step: '2',
      title: 'Conception du Système',
      description: 'Nous concevons l\'architecture de votre solution IA sur mesure.',
      duration: '3-5 jours',
      deliverable: 'Schéma technique et spécifications'
    },
    {
      step: '3',
      title: 'Développement & Entraînement',
      description: 'Nous créons et entraînons vos agents IA avec vos données.',
      duration: '2-4 semaines',
      deliverable: 'Solution fonctionnelle en environnement test'
    },
    {
      step: '4',
      title: 'Tests & Ajustements',
      description: 'Nous testons intensivement et optimisons les performances.',
      duration: '1 semaine',
      deliverable: 'Rapport de tests et ajustements'
    },
    {
      step: '5',
      title: 'Déploiement',
      description: 'Mise en production progressive avec formation de votre équipe.',
      duration: '3-5 jours',
      deliverable: 'Solution en production + formation'
    },
    {
      step: '6',
      title: 'Maintenance Continue',
      description: 'Suivi des performances et optimisations régulières.',
      duration: 'Continue',
      deliverable: 'Rapports mensuels de performance'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Gagnez du Temps',
      stat: '20-30h/semaine',
      description: 'Libérez votre équipe des tâches répétitives pour se concentrer sur l\'essentiel'
    },
    {
      icon: DollarSign,
      title: 'Réduisez les Coûts',
      stat: '40-60%',
      description: 'Diminuez vos coûts opérationnels tout en améliorant la qualité'
    },
    {
      icon: TrendingUp,
      title: 'Augmentez vos Ventes',
      stat: '+150%',
      description: 'Répondez plus vite aux prospects et convertissez plus de leads'
    },
    {
      icon: CheckCircle2,
      title: 'Zéro Erreur',
      stat: '99.9%',
      description: 'Les agents IA ne font pas d\'erreurs et travaillent sans relâche'
    }
  ]

  const industries = [
    { name: 'E-commerce', use: 'Chatbot support + recommandations produits' },
    { name: 'Cabinet Juridique', use: 'Gestion documentaire + prise de RDV' },
    { name: 'Immobilier', use: 'Qualification de leads + visites virtuelles' },
    { name: 'Restaurant', use: 'Réservations + commandes automatiques' },
    { name: 'Formation', use: 'Assistant pédagogique + gestion inscriptions' },
    { name: 'Santé', use: 'Prise de RDV + rappels patients' }
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Bot className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              Experts en IA & Automatisation depuis 2025
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Automatisations IA
            </span>
            <br />
            Conçues sur Mesure pour Vous
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nos experts créent, déploient et maintiennent vos agents IA pour automatiser 
            vos processus métier de A à Z. Vous ne gérez rien, nous nous occupons de tout.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all"
            >
              Discuter de mon projet
            </a>
            <a
              href="#cas-usage"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all"
            >
              Voir les cas d&apos;usage
            </a>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Pourquoi Automatiser avec l&apos;IA ?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Les résultats concrets que nos clients obtiennent grâce aux automatisations IA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all">
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'Usage */}
      <section id="cas-usage" className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos Solutions d&apos;Automatisation IA
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Des agents intelligents créés sur mesure pour automatiser vos tâches répétitives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                
                <div className="space-y-2 mb-4">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-500">ROI Typique</span>
                    <span className="text-sm font-bold text-blue-600">{useCase.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">Tarif</span>
                    <span className="text-sm font-bold text-gray-900">{useCase.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'Implémentation */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Notre Processus d&apos;Implémentation
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            De l&apos;analyse à la maintenance, nous gérons tout pour vous
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationProcess.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {phase.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{phase.title}</h3>
                    <span className="text-sm text-blue-600 font-semibold">{phase.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{phase.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg text-sm text-blue-900 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  {phase.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Secteurs d&apos;Activité
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Nos solutions s&apos;adaptent à tous les secteurs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600">{industry.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Section */}
      <AIAutomationSection />

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <Bot className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Automatiser Votre Entreprise ?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discutons de vos besoins et découvrez comment nos agents IA peuvent 
            transformer votre productivité
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all"
          >
            Demander une démonstration
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
