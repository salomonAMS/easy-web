'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import Swal from 'sweetalert2'

/**
 * Section de contact avec formulaire
 * - Design épuré et responsive
 * - Formulaire avec validation
 * - Informations de contact
 * - Envoi via Web3Forms avec SweetAlert2
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    
    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }
    
    // Validation de l'email avec regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide'
    }
    
    // Validation du téléphone (optionnel mais format si rempli)
    if (formData.phone && !/^[+]?[0-9\s()-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide'
    }
    
    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Préparation des données pour Web3Forms
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', 'f46579a0-acd1-458b-ae89-0c14ea38a8d2')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('subject', `Nouveau message de ${formData.name} - Easy Web`)
      
      // Envoi via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })
      
      const result = await response.json()
      
      if (result.success) {
        // Succès : Afficher l'alerte SweetAlert2
        await Swal.fire({
          icon: 'success',
          title: 'Message envoyé !',
          text: 'Merci pour votre message. Nous reviendrons vers vous rapidement.',
          confirmButtonText: 'OK',
          confirmButtonColor: '#2563eb',
          timer: 5000,
          timerProgressBar: true
        })
        
        // Réinitialiser le formulaire
        setFormData({ name: '', email: '', phone: '', message: '' })
        setErrors({})
      } else {
        throw new Error('Échec de l\'envoi')
      }
    } catch (error) {
      // Erreur : Afficher l'alerte d'erreur
      await Swal.fire({
        icon: 'error',
        title: 'Erreur d\'envoi',
        text: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.',
        confirmButtonText: 'Réessayer',
        confirmButtonColor: '#dc2626'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Effacer l'erreur du champ lors de la modification
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Décoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-950/30 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-950/30 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4">
            Prêt à transformer
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              votre entreprise ?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Discutons de votre projet. Réponse sous 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Nom complet"
                  aria-invalid={!!errors.name}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl focus:outline-none focus:ring-2 transition-all text-gray-900 dark:text-white ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                  placeholder="Jean Dupont"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Adresse email"
                  aria-invalid={!!errors.email}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl focus:outline-none focus:ring-2 transition-all text-gray-900 dark:text-white ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                  placeholder="jean@entreprise.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Téléphone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-label="Numéro de téléphone"
                  aria-invalid={!!errors.phone}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl focus:outline-none focus:ring-2 transition-all text-gray-900 dark:text-white ${
                    errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                  placeholder="+228 93 28 59 66"
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Votre projet *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  aria-label="Description de votre projet"
                  aria-invalid={!!errors.message}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl focus:outline-none focus:ring-2 transition-all text-gray-900 dark:text-white resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                  placeholder="Décrivez votre projet et vos besoins..."
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Envoyer le message de contact"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Carte d'info */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 md:p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Contactez-nous</h3>
              <p className="text-blue-100 mb-6">
                Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre transformation digitale.
              </p>

              <div className="space-y-4">
                <a href="mailto:easyweb.ent@gmail.com" className="flex items-center gap-3 text-white hover:text-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>easyweb.ent@gmail.com</span>
                </a>

                <a href="tel:+22893285966" className="flex items-center gap-3 text-white hover:text-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+228 93 28 59 66</span>
                </a>

                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>🇹🇬 Lomé, Togo</span>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Horaires</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-semibold text-gray-900 dark:text-white">8h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold text-gray-900 dark:text-white">9h - 13h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-gray-400">Fermé</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
