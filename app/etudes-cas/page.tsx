import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { TrendingUp, Users, Clock, DollarSign, Star, CheckCircle2, ArrowRight, Quote, ShoppingCart, Briefcase, Home, GraduationCap, Utensils } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Études de Cas - Easy Web | Témoignages Clients & Résultats',
  description: 'Découvrez comment nous avons transformé les entreprises de nos clients depuis 2025. Résultats concrets, témoignages et ROI mesurable.',
}

export default function EtudesCasPage() {
  const casestudies = [
    {
      client: 'Afrique Mode Store',
      industry: 'E-commerce Mode',
      icon: ShoppingCart,
      color: 'from-purple-600 to-pink-600',
      challenge: 'Site lent et obsolète avec un taux de conversion de 0.8% et des ventes en baisse.',
      solution: 'Refonte complète avec Next.js, optimisation des images, intégration d\'un chatbot IA pour assistance clients, et système de recommandations personnalisées.',
      results: [
        { icon: TrendingUp, label: 'Chiffre d\'affaires', value: '+320%', description: 'En 6 mois' },
        { icon: Users, label: 'Visiteurs mensuels', value: '50K', description: '+180% de trafic' },
        { icon: Clock, label: 'Temps de chargement', value: '-75%', description: 'De 6s à 1.5s' },
        { icon: TrendingUp, label: 'Taux de conversion', value: '3.2%', description: 'x4 amélioration' },
      ],
      testimonial: {
        text: 'Easy Web a complètement transformé notre boutique en ligne. Nos ventes ont explosé et nos clients adorent la nouvelle expérience. Le chatbot IA répond aux questions 24/7, c\'est incroyable !',
        author: 'Amina D.',
        role: 'Fondatrice, Afrique Mode Store'
      },
      timeline: '6 semaines',
      investment: '3,500€',
      roi: '900% en 6 mois'
    },
    {
      client: 'Cabinet Avocat Partenaires',
      industry: 'Services Juridiques B2B',
      icon: Briefcase,
      color: 'from-blue-600 to-indigo-600',
      challenge: 'Gestion manuelle chronophage des rendez-vous et documents, équipe débordée.',
      solution: 'Automatisation complète : système de prise de RDV intelligent, gestion documentaire IA pour extraire et classer les documents, chatbot juridique pour questions fréquentes.',
      results: [
        { icon: DollarSign, label: 'Économies annuelles', value: '52K€', description: 'Coûts opérationnels' },
        { icon: Clock, label: 'Temps gagné', value: '85%', description: 'Sur tâches admin' },
        { icon: Users, label: 'Satisfaction clients', value: '98%', description: 'Vs 76% avant' },
        { icon: TrendingUp, label: 'Nouveaux clients', value: '+45%', description: 'En 8 mois' },
      ],
      testimonial: {
        text: 'Nos avocats peuvent enfin se concentrer sur leur métier au lieu de passer des heures en administratif. Le système IA gère tout automatiquement. Un investissement qui s\'est rentabilisé en 3 mois.',
        author: 'Maître Kofi A.',
        role: 'Associé Principal'
      },
      timeline: '8 semaines',
      investment: '6,800€',
      roi: '765% la première année'
    },
    {
      client: 'ImmoTogo Pro',
      industry: 'Immobilier',
      icon: Home,
      color: 'from-green-600 to-emerald-600',
      challenge: 'Difficulté à qualifier les prospects, beaucoup de visites inutiles, peu de conversions.',
      solution: 'Site moderne avec visites virtuelles 3D, chatbot intelligent pour qualifier les prospects automatiquement, système de matching automatique bien/client.',
      results: [
        { icon: Users, label: 'Leads qualifiés', value: '+250%', description: 'Par mois' },
        { icon: Clock, label: 'Visites physiques', value: '-60%', description: 'Grâce au virtuel' },
        { icon: TrendingUp, label: 'Ventes conclues', value: '+180%', description: 'En 6 mois' },
        { icon: DollarSign, label: 'Commission générée', value: '+92K€', description: 'Revenus additionnels' },
      ],
      testimonial: {
        text: 'Le système de qualification automatique est une révolution. On ne perd plus de temps avec des prospects non sérieux. Les visites virtuelles ont considérablement réduit nos déplacements inutiles.',
        author: 'Sandra M.',
        role: 'Directrice Commerciale'
      },
      timeline: '7 semaines',
      investment: '4,900€',
      roi: '1,880% la première année'
    },
    {
      client: 'Formation Pro Academy',
      industry: 'Formation & Éducation',
      icon: GraduationCap,
      color: 'from-orange-600 to-red-600',
      challenge: 'Gestion manuelle des inscriptions, support débordé, difficulté à suivre les étudiants.',
      solution: 'Plateforme de formation moderne, assistant IA pédagogique disponible 24/7, automatisation complète des inscriptions et paiements, système de suivi personnalisé.',
      results: [
        { icon: Users, label: 'Inscriptions', value: '+290%', description: 'En 6 mois' },
        { icon: Clock, label: 'Support client', value: '-70%', description: 'Tickets en moins' },
        { icon: Star, label: 'Satisfaction', value: '4.9/5', description: 'Vs 3.6/5 avant' },
        { icon: DollarSign, label: 'Revenus', value: '+165%', description: 'Croissance annuelle' },
      ],
      testimonial: {
        text: 'L\'assistant IA répond aux questions des étudiants instantanément, même à 2h du matin ! Notre taux de complétion a explosé et les étudiants adorent l\'expérience personnalisée.',
        author: 'Dr. Emmanuel K.',
        role: 'Fondateur & Directeur'
      },
      timeline: '9 semaines',
      investment: '5,600€',
      roi: '1,250% la première année'
    },
    {
      client: 'Restaurant Le Gourmet',
      industry: 'Restauration',
      icon: Utensils,
      color: 'from-amber-600 to-yellow-600',
      challenge: 'Gestion manuelle des réservations source d\'erreurs, pas de commande en ligne.',
      solution: 'Site moderne avec système de réservation intelligent, commande en ligne avec paiement, chatbot pour réserver et commander, automatisation de la gestion de cuisine.',
      results: [
        { icon: Users, label: 'Réservations', value: '+180%', description: 'Par mois' },
        { icon: DollarSign, label: 'Commandes en ligne', value: '35%', description: 'Du CA total' },
        { icon: Clock, label: 'Erreurs réservation', value: '-95%', description: 'Quasi éliminées' },
        { icon: TrendingUp, label: 'Revenus totaux', value: '+140%', description: 'En 5 mois' },
      ],
      testimonial: {
        text: 'Avant, on perdait des réservations à cause d\'erreurs ou de confusion. Maintenant tout est automatisé et les commandes en ligne représentent 35% de notre CA. Incroyable !',
        author: 'Chef Pierre L.',
        role: 'Propriétaire'
      },
      timeline: '5 semaines',
      investment: '3,200€',
      roi: '1,560% la première année'
    }
  ]

  const stats = [
    { value: '50+', label: 'Projets Réalisés', icon: CheckCircle2 },
    { value: '98%', label: 'Clients Satisfaits', icon: Star },
    { value: '250%', label: 'ROI Moyen', icon: TrendingUp },
    { value: '40+', label: 'Entreprises Transformées', icon: Users }
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              Résultats Prouvés depuis 2025
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Études de Cas
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Résultats Concrets & Mesurables
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Découvrez comment nos solutions ont transformé les entreprises de nos clients 
            avec des résultats concrets et un ROI exceptionnel
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {casestudies.map((study, index) => (
            <div key={index} className="relative">
              {/* Header Card */}
              <div className={`bg-gradient-to-br ${study.color} rounded-3xl p-8 md:p-12 text-white mb-8`}>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <study.icon className="w-5 h-5" />
                      <span className="text-sm font-semibold">{study.industry}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{study.client}</h2>
                    <div className="flex flex-wrap gap-4 text-sm opacity-90">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Durée: {study.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        <span>Investissement: {study.investment}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>ROI: {study.roi}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 font-bold">!</span>
                      </div>
                      Défi Initial
                    </h3>
                    <p className="text-gray-600 text-lg">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      Notre Solution
                    </h3>
                    <p className="text-gray-600 text-lg">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Résultats Obtenus
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                        <result.icon className="w-8 h-8 text-blue-600 mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">{result.value}</div>
                        <div className="text-sm font-semibold text-gray-700 mb-1">{result.label}</div>
                        <div className="text-xs text-gray-600">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 relative">
                  <Quote className="w-12 h-12 text-blue-600/20 absolute top-4 left-4" />
                  <p className="text-lg text-gray-700 italic mb-6 relative z-10 pl-8">
                    &ldquo;{study.testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pl-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                      {study.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{study.testimonial.author}</div>
                      <div className="text-sm text-gray-600">{study.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Obtenir des Résultats Similaires ?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Rejoignez nos 40+ clients satisfaits et transformez votre entreprise dès aujourd&apos;hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all"
            >
              Discuter de mon projet
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/modernisation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-all border-2 border-white/20"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
