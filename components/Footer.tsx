'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

/**
 * Footer épuré avec 4 colonnes inspiré de mindflow.io
 * - Design minimaliste sur fond blanc
 * - 4 colonnes : Services, Entreprise, Ressources, Contact
 * - Icônes de réseaux sociaux
 */
export default function Footer() {
  const footerLinks = {
    services: {
      title: 'Services',
      links: [
        { label: 'Modernisation Web', href: '/modernisation' },
        { label: 'Automatisations IA', href: '/automatisations' },
        { label: 'Services Complets', href: '/services' },
        { label: 'Études de cas', href: '/etudes-cas' },
      ],
    },
    entreprise: {
      title: 'Entreprise',
      links: [
        { label: 'À propos', href: '/a-propos' },
        { label: 'Contact', href: '/contact' },
        { label: 'Nos tarifs', href: '/services#packages' },
        { label: 'Études de cas', href: '/etudes-cas' },
      ],
    },
    ressources: {
      title: 'Ressources',
      links: [
        { label: 'Documentation', href: '/services' },
        { label: 'Guides', href: '/services' },
        { label: 'Support', href: '/contact' },
        { label: 'FAQ', href: '/contact#faq' },
      ],
    },
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="relative bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Colonne Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-gray-900 font-bold text-lg mb-4">
              {footerLinks.services.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne Entreprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-gray-900 font-bold text-lg mb-4">
              {footerLinks.entreprise.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.entreprise.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne Ressources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-gray-900 font-bold text-lg mb-4">
              {footerLinks.ressources.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.ressources.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-gray-900 font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:easyweb.ent@gmail.com" className="hover:text-blue-600 transition-colors">
                  easyweb.ent@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <a href="tel:+22893285966" className="hover:text-blue-600 transition-colors">
                  +228 93 28 59 66
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>🇹🇬 Lomé, Togo</span>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 flex items-center justify-center group transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            {/* Logo et copyright */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-gray-600 text-sm">
                © 2026 Easy Web. Tous droits réservés.
              </span>
            </div>

            {/* Liens légaux */}
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/confidentialite" className="hover:text-blue-600 transition-colors">
                Confidentialité
              </a>
              <a href="/conditions" className="hover:text-blue-600 transition-colors">
                Conditions
              </a>
              <a href="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Statut des systèmes IA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 pt-4 border-t border-gray-50"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-green-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Systèmes IA opérationnels
              </span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-xs text-gray-500">
              99.9% uptime
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
