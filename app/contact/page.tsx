import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Contact - Easy Web | Discutons de Votre Projet',
  description: 'Contactez Easy Web pour discuter de votre projet de refonte web ou d\'automatisation IA. Basés à Lomé, Togo. Réponse sous 24h garantie.',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+228 93 28 59 66',
      description: 'Lun-Sam : 8h-18h',
      link: 'tel:+22893285966'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'easyweb.ent@gmail.com',
      description: 'Réponse sous 24h',
      link: 'mailto:easyweb.ent@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Lomé, Togo',
      description: 'Rencontrez-nous sur rendez-vous',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Lun-Sam : 8h-18h',
      description: 'Support 6j/7',
      link: '#'
    }
  ]

  const faqs = [
    {
      question: 'Combien de temps prend un projet de refonte web ?',
      answer: 'Un projet de refonte web prend généralement entre 4 et 8 semaines, selon la complexité. Nous commençons par un audit complet (1-2 jours), suivi de la conception (1-2 semaines), du développement (2-4 semaines), et enfin des tests et de la mise en ligne (1 semaine).'
    },
    {
      question: 'Quels sont vos tarifs ?',
      answer: 'Nos tarifs démarrent à 200.000 FCFA (environ 300€) pour un site vitrine professionnel. Pour les automatisations IA, les tarifs commencent à 100.000 FCFA (environ 150€). Chaque projet est unique, nous proposons toujours un devis personnalisé gratuit après avoir étudié vos besoins spécifiques.'
    },
    {
      question: 'Proposez-vous des facilités de paiement ?',
      answer: 'Oui ! Nous proposons des paiements échelonnés adaptés aux PME : un acompte de 30% au démarrage, 40% à mi-projet, et 30% à la livraison. Pour les abonnements mensuels (IA, maintenance), le paiement se fait mensuellement.'
    },
    {
      question: 'Fournissez-vous un support après la livraison ?',
      answer: 'Absolument ! Chaque projet inclut une période de support gratuit (3 à 6 mois selon le package). Ensuite, nous proposons des contrats de maintenance à partir de 150€/mois incluant mises à jour, sauvegardes, monitoring et support technique.'
    },
    {
      question: 'Puis-je gérer mon site moi-même après la livraison ?',
      answer: 'Oui, complètement ! Nous créons des sites avec des CMS intuitifs ou des interfaces d\'administration simples. Nous formons également votre équipe à la gestion quotidienne du site. Et bien sûr, nous restons disponibles si vous avez besoin d\'aide.'
    },
    {
      question: 'Travaillez-vous avec des clients en dehors du Togo ?',
      answer: 'Oui, nous travaillons avec des clients dans toute l\'Afrique de l\'Ouest et même au-delà. La majorité de notre processus se fait en ligne (visioconférences, partage d\'écran). Pour les clients locaux à Lomé, nous pouvons bien sûr organiser des rencontres en personne.'
    },
    {
      question: 'Que se passe-t-il si je ne suis pas satisfait du résultat ?',
      answer: 'Votre satisfaction est notre priorité ! Nous incluons des révisions dans chaque phase du projet. Si le résultat final ne correspond pas à vos attentes malgré nos efforts, nous continuons à travailler jusqu\'à ce que vous soyez satisfait, sans frais supplémentaires pour les ajustements convenus.'
    },
    {
      question: 'Puis-je voir des exemples de vos travaux précédents ?',
      answer: 'Bien sûr ! Consultez notre page "Études de Cas" pour voir nos projets récents avec des résultats concrets et des témoignages clients. Nous pouvons également vous mettre en contact avec certains de nos clients satisfaits pour des références.'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Vous nous contactez',
      description: 'Via le formulaire, email ou téléphone'
    },
    {
      number: '2',
      title: 'Consultation gratuite',
      description: 'Discussion de 30-45 min sur vos besoins'
    },
    {
      number: '3',
      title: 'Proposition détaillée',
      description: 'Devis personnalisé sous 48h'
    },
    {
      number: '4',
      title: 'Démarrage du projet',
      description: 'Signature et lancement immédiat'
    }
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              Réponse garantie sous 24h
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contactez-Nous
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Discutons de Votre Projet
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous accompagner. 
            Parlons de vos objectifs et trouvons ensemble la meilleure solution.
          </p>
        </div>
      </section>

      {/* Informations de Contact */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-semibold mb-1">{info.value}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de Contact */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Comment Ça Marche ?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Un processus simple et transparent pour démarrer votre projet
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <ContactSection />

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Les réponses aux questions les plus courantes sur nos services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-2xl border border-gray-200 p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Notre Localisation
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Basés à Lomé.
          </p>

          <div className="bg-white rounded-3xl border border-gray-200 p-4 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Lomé, Togo</h3>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <Send className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Ne laissez pas passer cette opportunité. Contactez-nous aujourd&apos;hui 
            pour une consultation gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+22893285966"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Appelez-nous maintenant
            </a>
            <a
              href="mailto:easyweb.ent@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-all border-2 border-white/20"
            >
              <Mail className="w-5 h-5" />
              Envoyez un email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
