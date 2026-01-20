import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'
import { Metadata } from 'next'
import { Rocket, Shield, Zap, TrendingUp, CheckCircle2, X, Clock, Users, Search, Smartphone, Code, BarChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Modernisation Web - Easy Web | Transformez votre Site Obsolète',
  description: 'Spécialistes de la refonte de sites web pour PME. Transformez votre site obsolète en machine à générer des clients avec nos solutions modernes et performantes.',
}

export default function ModernisationPage() {
  const processSteps = [
    {
      number: '01',
      title: 'Audit Gratuit',
      description: 'Analyse complète de votre site actuel : performance, SEO, expérience utilisateur et conversion.',
      duration: '1-2 jours'
    },
    {
      number: '02',
      title: 'Stratégie & Design',
      description: 'Conception d\'une nouvelle architecture et design moderne alignés avec vos objectifs business.',
      duration: '3-5 jours'
    },
    {
      number: '03',
      title: 'Développement',
      description: 'Codage avec les technologies les plus récentes pour garantir performance et évolutivité.',
      duration: '2-4 semaines'
    },
    {
      number: '04',
      title: 'Migration & Lancement',
      description: 'Transfert sécurisé de vos données et mise en ligne sans interruption de service.',
      duration: '2-3 jours'
    },
    {
      number: '05',
      title: 'Support & Optimisation',
      description: 'Accompagnement continu et optimisations pour maximiser vos résultats.',
      duration: 'Continue'
    }
  ]

  const technologies = [
    { name: 'React & Next.js', description: 'Framework moderne pour sites ultra-rapides' },
    { name: 'TypeScript', description: 'Code robuste et maintenable' },
    { name: 'Tailwind CSS', description: 'Design responsive et élégant' },
    { name: 'Node.js', description: 'Backend performant et scalable' },
    { name: 'SEO Avancé', description: 'Optimisation pour moteurs de recherche' },
    { name: 'Analytics IA', description: 'Suivi intelligent des performances' }
  ]

  const beforeAfter = {
    before: [
      { icon: X, text: 'Design obsolète des années 2010-2020', color: 'text-red-600' },
      { icon: X, text: 'Temps de chargement > 5 secondes', color: 'text-red-600' },
      { icon: X, text: 'Non responsive sur mobile', color: 'text-red-600' },
      { icon: X, text: 'Mauvais référencement SEO', color: 'text-red-600' },
      { icon: X, text: 'Taux de conversion < 1%', color: 'text-red-600' },
      { icon: X, text: 'Difficile à mettre à jour', color: 'text-red-600' }
    ],
    after: [
      { icon: CheckCircle2, text: 'Design moderne et professionnel', color: 'text-green-600' },
      { icon: CheckCircle2, text: 'Chargement ultra-rapide < 1 seconde', color: 'text-green-600' },
      { icon: CheckCircle2, text: 'Parfait sur tous les écrans', color: 'text-green-600' },
      { icon: CheckCircle2, text: 'Optimisé pour Google (SEO)', color: 'text-green-600' },
      { icon: CheckCircle2, text: 'Taux de conversion multiplié par 3+', color: 'text-green-600' },
      { icon: CheckCircle2, text: 'Gestion simple et autonome', color: 'text-green-600' }
    ]
  }

  const guarantees = [
    {
      icon: Shield,
      title: 'Garantie Performance',
      description: 'Score Google PageSpeed > 90/100 ou nous optimisons gratuitement'
    },
    {
      icon: TrendingUp,
      title: 'Garantie ROI',
      description: 'Si votre trafic n\'augmente pas en 6 mois, nous continuons à optimiser sans frais'
    },
    {
      icon: Clock,
      title: 'Livraison à Temps',
      description: 'Respect des délais garantis ou remboursement partiel'
    },
    {
      icon: Users,
      title: 'Support Inclus',
      description: '6 mois de support technique et maintenance inclus dans chaque projet'
    }
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      {/* Hero Section spécifique */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              Spécialistes Refonte Web depuis 2025
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Modernisation Web
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Site Obsolète → Machine à Clients
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Votre site web a 3 ans ou plus ? Il est temps de le transformer en un outil 
            de génération de leads moderne, rapide et performant qui convertit vraiment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all"
            >
              Obtenir un audit gratuit
            </a>
            <a
              href="/etudes-cas"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all"
            >
              Voir nos réalisations
            </a>
          </div>

          {/* Stats Rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Sites Refondus</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">250%</div>
              <div className="text-sm text-gray-600">ROI Moyen</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">3x</div>
              <div className="text-sm text-gray-600">Plus Rapide</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Clients Satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Avant / Après */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Avant / Après la Modernisation
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Voyez la différence qu&apos;une refonte professionnelle peut faire pour votre entreprise
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Avant */}
            <div className="bg-gray-50 rounded-3xl border-2 border-gray-300 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Avant</h3>
              </div>
              <div className="space-y-4">
                {beforeAfter.before.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Après */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Après</h3>
              </div>
              <div className="space-y-4">
                {beforeAfter.after.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Processus */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Notre Processus de Refonte
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Un processus éprouvé en 5 étapes pour garantir le succès de votre projet
          </p>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <span className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-2 sm:mt-0">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Technologies de Pointe
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Nous utilisons les frameworks les plus modernes pour garantir performance et pérennité
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos Garanties
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Nous nous engageons sur des résultats concrets et mesurables
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-2xl border-2 border-blue-200 p-8">
                <guarantee.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Final */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Moderniser Votre Site Web ?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Obtenez un audit gratuit de votre site actuel et découvrez comment nous pouvons 
            multiplier vos résultats
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all"
          >
            Demander mon audit gratuit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
