import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Easy Web | Protection des données',
  description: 'Politique de confidentialité et protection des données personnelles. Easy Web respecte votre vie privée et la sécurité de vos informations.',
}

export default function ConfidentialitePage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Politique de Confidentialité
            </h1>
          </div>
          
          <p className="text-gray-600 mb-12">
            Dernière mise à jour : 21 janvier 2026
          </p>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Collecte des données</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Easy Web collecte uniquement les données nécessaires à la fourniture de ses services :
                </p>
                <ul className="space-y-2 mt-4">
                  <li>Nom, prénom et coordonnées professionnelles</li>
                  <li>Adresse email et numéro de téléphone</li>
                  <li>Informations sur votre entreprise</li>
                  <li>Données de navigation (cookies)</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Utilisation des données</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>Vos données sont utilisées pour :</p>
                <ul className="space-y-2 mt-4">
                  <li>Vous fournir nos services web et IA</li>
                  <li>Améliorer votre expérience utilisateur</li>
                  <li>Vous contacter concernant votre projet</li>
                  <li>Envoyer des communications marketing (avec votre consentement)</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Sécurité</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données :
                </p>
                <ul className="space-y-2 mt-4">
                  <li>Chiffrement SSL/TLS</li>
                  <li>Accès restreint aux données</li>
                  <li>Sauvegardes régulières</li>
                  <li>Hébergement sécurisé</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <UserCheck className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Vos droits</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>Vous disposez des droits suivants concernant vos données :</p>
                <ul className="space-y-2 mt-4">
                  <li><strong>Droit d&apos;accès</strong> : Consulter vos données</li>
                  <li><strong>Droit de rectification</strong> : Corriger vos données</li>
                  <li><strong>Droit à l&apos;effacement</strong> : Supprimer vos données</li>
                  <li><strong>Droit à la portabilité</strong> : Récupérer vos données</li>
                  <li><strong>Droit d&apos;opposition</strong> : Refuser le traitement</li>
                </ul>
                <p className="mt-4">
                  Pour exercer vos droits, contactez-nous à : easyweb.ent@gmail.com
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez les désactiver dans votre navigateur.
                </p>
                <ul className="space-y-2 mt-4">
                  <li><strong>Cookies essentiels</strong> : Nécessaires au fonctionnement</li>
                  <li><strong>Cookies analytiques</strong> : Mesure d&apos;audience</li>
                  <li><strong>Cookies marketing</strong> : Personnalisation publicitaire</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
            <p className="text-sm text-gray-600">
              <strong>Questions ?</strong> Pour toute question concernant cette politique de confidentialité, 
              contactez-nous à easyweb.ent@gmail.com ou +228 93 28 59 66
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
