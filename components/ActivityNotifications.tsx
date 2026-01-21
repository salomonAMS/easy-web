'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'

/**
 * Notifications discrètes d'activité en temps réel
 * - Affiche les interventions récentes simulées
 * - Position bas gauche
 * - Auto-rotation toutes les 8 secondes
 * - Fermeture manuelle possible
 */
export default function ActivityNotifications() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  const activities = [
    {
      text: "Agent IA déployé pour une agence immobilière",
      time: "il y a 2h",
      icon: "🏠"
    },
    {
      text: "Site modernisé pour un cabinet d'avocats",
      time: "il y a 4h",
      icon: "⚖️"
    },
    {
      text: "Chatbot intelligent activé pour un e-commerce",
      time: "il y a 6h",
      icon: "🛒"
    },
    {
      text: "Automatisation email créée pour une PME",
      time: "il y a 8h",
      icon: "📧"
    },
    {
      text: "Dashboard analytics déployé pour un SaaS",
      time: "il y a 12h",
      icon: "📊"
    },
    {
      text: "Application mobile lancée pour un restaurant",
      time: "hier",
      icon: "🍽️"
    }
  ]

  useEffect(() => {
    if (isDismissed) return

    // Afficher après 3 secondes
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    // Rotation automatique toutes les 8 secondes
    const rotationInterval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length)
        setIsVisible(true)
      }, 500)
    }, 8000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(rotationInterval)
    }
  }, [isDismissed, activities.length])

  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(() => {
      setIsDismissed(true)
    }, 300)
  }

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="fixed bottom-8 left-8 z-40 max-w-sm"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-4 pr-12">
            {/* Bouton fermer */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Contenu */}
            <div className="flex items-start gap-3">
              {/* Icône animée */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl"
              >
                {activities[currentIndex].icon}
              </motion.div>

              {/* Texte */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3 h-3 text-blue-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-blue-600">
                    Nouvelle intervention
                  </span>
                </div>
                <p className="text-sm text-gray-900 font-medium mb-1">
                  {activities[currentIndex].text}
                </p>
                <span className="text-xs text-gray-500">
                  {activities[currentIndex].time}
                </span>
              </div>
            </div>

            {/* Barre de progression */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 7.5, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 origin-left rounded-full"
              style={{ width: '100%' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
