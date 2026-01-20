import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Target, Users, Zap, Award, Calendar, Shield, Sparkles, Heart, Code, Rocket, CheckCircle2, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À Propos - Easy Web | Agence de Transformation Digitale depuis 2025',
  description: 'Spécialistes de la refonte de sites web pour PME. Depuis 2025, nous transformons les entreprises avec des solutions web modernes et des automatisations IA.',
}

export default function AProposPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet pour dépasser vos attentes.'
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Nous vous accompagnons de A à Z, de la conception au déploiement.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous utilisons les dernières technologies IA pour automatiser vos processus.'
    },
    {
      icon: Award,
      title: 'Résultats',
      description: 'Notre objectif : des résultats mesurables et un ROI positif rapidement.'
    },
  ]

  const timeline = [
    {
      year: '2025',
      title: 'Naissance d\'Easy Web',
      description: 'Création de l\'agence avec une vision claire : démocratiser la transformation digitale pour les PME africaines.'
    },
    {
      year: '2025',
      title: 'Premiers Projets de Refonte',
      description: 'Transformation réussie de 15+ sites web obsolètes en plateformes modernes et performantes.'
    },
    {
      year: '2026',
      title: 'Expansion des Services IA',
      description: 'Intégration des automatisations IA avancées pour optimiser les processus métier de nos clients.'
    }
  ]

  const team = [
    {
      role: 'Experts en Développement Web',
      description: 'Maîtrise complète des technologies modernes : React, Next.js, Node.js, Python'
    },
    {
      role: 'Spécialistes IA & Automatisation',
      description: 'Experts en intelligence artificielle, machine learning et automatisation de processus'
    },
    {
      role: 'Designers UI/UX',
      description: 'Conception d\'expériences utilisateur exceptionnelles et interfaces élégantes'
    },
    {
      role: 'Consultants Digitaux',
      description: 'Analyse stratégique et accompagnement dans votre transformation digitale'
    }
  ]

  const achievements = [
    { icon: CheckCircle2, value: '50+', label: 'Projets Réalisés' },
    { icon: Users, value: '40+', label: 'Clients Satisfaits' },
    { icon: TrendingUp, value: '250%', label: 'ROI Moyen' },
    { icon: Award, value: '98%', label: 'Taux de Satisfaction' }
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <span className="text-2xl">🇹🇬</span>
            <span className="text-sm font-semibold text-blue-900">
              Basé à Lomé, Togo
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            À Propos
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              d&apos;Easy Web
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Pionniers de la transformation digitale depuis 2025, nous accompagnons les petites 
            et moyennes entreprises dans leur refonte web et automatisation.
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
            <Calendar className="w-5 h-5" />
            <span>Depuis 2025 • 50+ Projets Réalisés</span>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Notre Mission
          </h2>
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Chez <span className="font-bold text-blue-600">Easy Web</span>, nous croyons que chaque PME 
              mérite d&apos;avoir une présence digitale exceptionnelle qui génère des résultats concrets.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Depuis <span className="font-bold">2025</span>, notre mission est de <span className="font-bold">transformer 
              les sites web obsolètes</span> en véritables machines à générer des clients. Nous spécialisons dans 
              la refonte complète de sites pour les petites et moyennes entreprises qui veulent passer au niveau supérieur.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Nous ne vendons pas des outils, nous créons des <span className="font-bold">solutions complètes clés en main</span> : 
              de la conception au déploiement, en passant par l&apos;automatisation IA et la maintenance continue.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres Clés */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Réalisations en Chiffres
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Notre Histoire
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.year}
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Notre Équipe Pluridisciplinaire
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Une équipe passionnée d&apos;experts en développement web, IA, design et stratégie digitale
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.role}</h3>
                </div>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Pourquoi Choisir Easy Web ?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Nous sommes bien plus qu&apos;une agence web, nous sommes votre partenaire de croissance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Garantie de Résultats</h3>
              <p className="text-gray-600 mb-4">
                Nous nous engageons sur des résultats concrets et mesurables. Si votre nouveau site 
                ne performe pas mieux que l&apos;ancien, nous continuons à l&apos;optimiser gratuitement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">ROI garanti sous 6 mois</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Support technique inclus 6 mois</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <Rocket className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Spécialistes PME</h3>
              <p className="text-gray-600 mb-4">
                Nous comprenons les défis spécifiques des petites et moyennes entreprises. 
                Nos solutions sont conçues pour votre budget et vos besoins.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Tarifs adaptés aux PME</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Paiements flexibles</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Technologies de Pointe</h3>
              <p className="text-gray-600 mb-4">
                Nous utilisons les frameworks et technologies les plus modernes pour garantir 
                performance, sécurité et évolutivité.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">React, Next.js, TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">IA & Automatisations avancées</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proximité & Disponibilité</h3>
              <p className="text-gray-600 mb-4">
                Basés à Lomé, nous sommes proches de nos clients et disponibles pour répondre 
                à toutes vos questions rapidement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Rencontres en personne possibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Support réactif 6j/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Valeurs Fondamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discutons de votre projet et découvrez comment nous pouvons vous aider
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
