import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Globe, Bot, Zap, Palette, Search, Smartphone, Headphones, CheckCircle2, ArrowRight, Package } from 'lucide-react'

// Lazy load des composants lourds
const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))
const ErrorBoundary = dynamic(() => import('@/components/ErrorBoundary'))

export const metadata: Metadata = {
  title: 'Nos Services - Easy Web | Solutions Web & IA pour PME',
  description: 'Découvrez tous nos services : refonte de sites web, automatisations IA, design UI/UX, SEO, maintenance et support. Solutions complètes pour PME depuis 2025.',
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Globe,
      title: 'Refonte de Site Web',
      description: 'Transformation complète de votre site obsolète en plateforme moderne et performante',
      features: [
        'Audit complet de l\'existant',
        'Design moderne et responsive',
        'Développement avec React/Next.js',
        'Migration sécurisée des données',
        'Optimisation des performances',
        'Formation de votre équipe'
      ],
      price: '50k - 150k FCFA (75€ - 230€)',
      duration: '1-4 semaines',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Bot,
      title: 'Automatisations IA',
      description: 'Agents intelligents pour automatiser vos processus métier et gagner du temps',
      features: [
        'Chatbots intelligents 24/7',
        'Automatisation des emails',
        'Gestion documentaire IA',
        'Assistant de rendez-vous',
        'Enrichissement de données',
        'Workflows personnalisés'
      ],
      price: '50k - 1M FCFA (75€ - 1,500€)',
      duration: '1-4 semaines',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Palette,
      title: 'Design UI/UX',
      description: 'Conception d\'expériences utilisateur exceptionnelles et interfaces élégantes',
      features: [
        'Recherche utilisateur',
        'Architecture de l\'information',
        'Prototypes interactifs',
        'Design system complet',
        'Tests utilisateurs',
        'Guidelines et documentation'
      ],
      price: 'Inclus dans les sites web',
      duration: '1-2 semaines',
      color: 'from-pink-600 to-rose-600'
    },
    {
      icon: Search,
      title: 'Optimisation SEO',
      description: 'Améliorez votre visibilité sur Google et attirez plus de clients qualifiés',
      features: [
        'Audit SEO complet',
        'Recherche de mots-clés',
        'Optimisation on-page',
        'Stratégie de contenu',
        'Link building',
        'Rapports mensuels'
      ],
      price: '30k - 100k FCFA/mois (50€ - 150€)',
      duration: 'Continue',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Smartphone,
      title: 'Application Mobile',
      description: 'Développement d\'applications mobiles natives ou cross-platform',
      features: [
        'iOS et Android',
        'React Native / Flutter',
        'Design natif',
        'Intégrations API',
        'Push notifications',
        'Publication sur stores'
      ],
      price: '500k - 2M FCFA (750€ - 3,000€)',
      duration: '4-12 semaines',
      color: 'from-orange-600 to-amber-600'
    },
    {
      icon: Headphones,
      title: 'Maintenance & Support',
      description: 'Support technique continu et maintenance proactive de vos solutions',
      features: [
        'Support 6j/7',
        'Mises à jour régulières',
        'Sauvegardes automatiques',
        'Monitoring 24/7',
        'Résolution rapide',
        'Optimisations continues'
      ],
      price: '20k - 50k FCFA/mois (30€ - 75€)',
      duration: 'Continue',
      color: 'from-cyan-600 to-blue-600'
    }
  ]

  const packages = [
    {
      name: 'Starter',
      price: '50.000 FCFA',
      priceEUR: '75 EUR',
      description: 'Idéal pour les petites entreprises qui démarrent',
      features: [
        'Site web 5-10 pages',
        'Design responsive moderne',
        'Formulaire de contact',
        'Optimisation SEO de base',
        'Hébergement 1 an inclus',
        '3 mois de support inclus'
      ],
      highlight: false
    },
    {
      name: 'Professionnel',
      price: 'À partir de 500.000 FCFA',
      priceEUR: 'À partir de 750 EUR',
      description: 'Pour les PME qui veulent se démarquer',
      features: [
        'Site web 10-20 pages',
        'Design UI/UX personnalisé',
        'Intégrations avancées',
        'SEO avancé + blog',
        'Chatbot IA basique',
        '6 mois de support inclus',
        'Formation équipe'
      ],
      highlight: true,
      popular: true
    },
    {
      name: 'Entreprise',
      price: 'Sur devis',
      priceEUR: 'Sur devis',
      description: 'Solution complète pour grandes organisations',
      features: [
        'Site web illimité',
        'Automatisations IA complètes',
        'Application mobile',
        'Intégrations ERP/CRM',
        'Dashboard analytics IA',
        'Support prioritaire 24/7',
        'Maintenance illimitée',
        'Consultant dédié'
      ],
      highlight: false
    }
  ]

  const process = [
    {
      number: '01',
      title: 'Consultation Gratuite',
      description: 'Discussion approfondie de vos besoins et objectifs'
    },
    {
      number: '02',
      title: 'Proposition & Devis',
      description: 'Présentation détaillée de notre solution et tarification'
    },
    {
      number: '03',
      title: 'Conception',
      description: 'Design et prototypage avec vos retours'
    },
    {
      number: '04',
      title: 'Développement',
      description: 'Codage et tests de votre solution'
    },
    {
      number: '05',
      title: 'Lancement',
      description: 'Mise en production et formation'
    },
    {
      number: '06',
      title: 'Support',
      description: 'Accompagnement continu et optimisations'
    }
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Package className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              Solutions Complètes pour PME depuis 2025
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nos Services
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Solutions Web & IA Complètes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            De la refonte de votre site web aux automatisations IA les plus avancées, 
            nous avons la solution adaptée à vos besoins et votre budget.
          </p>
          
          <a
            href="#packages"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all"
          >
            Voir les tarifs
          </a>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos Services Principaux
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Des solutions professionnelles adaptées à chaque besoin de votre entreprise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all group flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200 mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-500">Tarif</span>
                    <span className="text-lg font-bold text-gray-900">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">Durée</span>
                    <span className="text-sm font-semibold text-blue-600">{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos Packages Clés en Main
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Choisissez le package qui correspond à vos besoins et votre budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-3xl p-8 flex flex-col ${
                  pkg.highlight 
                    ? 'border-2 border-blue-600 shadow-2xl scale-105' 
                    : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Plus Populaire
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{pkg.price}</div>
                  <div className="text-lg text-gray-500">{pkg.priceEUR}</div>
                  <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all mt-auto ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Choisir ce package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Notre Processus de Travail
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Un processus éprouvé pour garantir le succès de chaque projet
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discutons de vos besoins et trouvons ensemble la solution parfaite pour votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/etudes-cas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-all border-2 border-white/20"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </main>
  )
}
