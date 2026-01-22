import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { DollarSign, Check, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nos Tarifs - Easy Web | Prix Transparents en FCFA',
  description: 'Découvrez nos tarifs transparents pour la refonte web, automatisations IA et services digitaux. Devis gratuit et personnalisé.',
}

export default function TarifsPage() {
  const packages = [
    {
      name: 'Starter',
      priceXOF: '50.000',
      priceEUR: '75',
      description: 'Idéal pour les petites entreprises',
      features: [
        'Site 5-10 pages responsive',
        'Design moderne personnalisé',
        'Formulaire de contact',
        'SEO de base',
        'Hébergement 1 an inclus',
        '3 mois de support',
      ],
      popular: false,
    },
    {
      name: 'Professionnel',
      priceXOF: 'À partir de 500.000',
      priceEUR: 'À partir de 750',
      description: 'Pour les PME ambitieuses',
      features: [
        'Site 10-20 pages complet',
        'Design UI/UX sur mesure',
        'Intégrations avancées',
        'SEO avancé + Blog',
        'Chatbot IA inclus',
        '6 mois de support',
        'Formation équipe',
      ],
      popular: true,
    },
    {
      name: 'Entreprise',
      priceXOF: 'Sur devis',
      priceEUR: 'Sur devis',
      description: 'Solution complète sur mesure',
      features: [
        'Application web complexe',
        'Automatisations IA complètes',
        'Application mobile',
        'Intégrations ERP/CRM',
        'Dashboard analytics',
        'Support prioritaire 24/7',
        'Consultant dédié',
      ],
      popular: false,
    },
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">
                Tarifs Transparents
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Des prix clairs,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                sans surprise
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le package qui correspond à vos besoins et votre budget
            </p>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 flex flex-col ${
                  pkg.popular
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="mb-2">
                    <div className="text-3xl font-bold text-blue-600">{pkg.priceXOF} FCFA</div>
                    <div className="text-lg text-gray-500">{pkg.priceEUR} EUR</div>
                  </div>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all mt-auto ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>

          {/* Services à la carte */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Services à la carte</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                <span className="font-semibold text-gray-900">Automatisation IA</span>
                <span className="text-blue-600 font-bold">À partir de 100.000 FCFA</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                <span className="font-semibold text-gray-900">Maintenance</span>
                <span className="text-blue-600 font-bold">50.000 FCFA/mois</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Besoin d&apos;un devis personnalisé ?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous pour une estimation gratuite adaptée à vos besoins
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
