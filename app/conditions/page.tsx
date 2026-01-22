import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conditions Générales - Easy Web | CGV & CGU',
  description: 'Conditions générales de vente et d&apos;utilisation des services Easy Web. Nos engagements et vos droits.',
}

export default function ConditionsPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Conditions Générales
            </h1>
          </div>
          
          <p className="text-gray-600 mb-12">
            Dernière mise à jour : 21 janvier 2026
          </p>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Objet</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Les présentes conditions générales régissent l&apos;utilisation des services proposés par Easy Web, 
                  société spécialisée dans le développement web et l&apos;automatisation IA, située à Lomé, Togo.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Nos services</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>Easy Web propose les services suivants :</p>
                <ul className="space-y-2 mt-4">
                  <li>Refonte et modernisation de sites web</li>
                  <li>Développement d&apos;applications web sur mesure</li>
                  <li>Automatisations IA et chatbots intelligents</li>
                  <li>Design UI/UX et prototypage</li>
                  <li>Optimisation SEO et marketing digital</li>
                  <li>Maintenance et support technique</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Tarification</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Tous nos tarifs sont indiqués en Francs CFA (FCFA) et en Euros (€). Les prix sont valables 30 jours 
                  à compter de l&apos;émission du devis.
                </p>
                <ul className="space-y-2 mt-4">
                  <li>Paiement en plusieurs fois possible</li>
                  <li>Acompte de 30% à la commande</li>
                  <li>Solde à la livraison</li>
                  <li>Paiements acceptés : Virement bancaire, Mobile Money</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">4. Délais</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Les délais sont indicatifs et dépendent de la complexité du projet et de la disponibilité 
                  des informations fournies par le client.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Propriété intellectuelle</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Le client acquiert la propriété du site web et des développements spécifiques après règlement intégral. 
                  Easy Web conserve le droit d&apos;utiliser le projet comme référence dans son portfolio.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Garanties</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>Easy Web garantit :</p>
                <ul className="space-y-2 mt-4">
                  <li>La conformité des livrables au cahier des charges</li>
                  <li>Le bon fonctionnement des solutions développées</li>
                  <li>Un support technique pendant la période contractuelle</li>
                  <li>La confidentialité des données clients</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">7. Responsabilités</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Easy Web ne peut être tenue responsable des dommages indirects résultant de l&apos;utilisation 
                  ou de l&apos;impossibilité d&apos;utiliser les services. Notre responsabilité est limitée au montant 
                  payé pour le service concerné.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">8. Résiliation</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Le client peut résilier le contrat moyennant un préavis de 30 jours. Les sommes déjà versées 
                  restent acquises à Easy Web au prorata des travaux effectués.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">9. Loi applicable</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Les présentes conditions sont régies par le droit togolais. Tout litige sera soumis aux 
                  tribunaux compétents de Lomé, Togo.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
            <p className="text-sm text-gray-600">
              <strong>Questions ?</strong> Pour toute question concernant nos conditions générales, 
              contactez-nous à easyweb.ent@gmail.com ou +228 93 285966
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
