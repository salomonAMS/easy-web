'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

/**
 * ThemeToggle - Bouton de basculement entre mode clair et mode sombre
 * - Détection automatique des préférences système au premier chargement
 * - Sauvegarde du choix utilisateur dans localStorage
 * - Animation de rotation fluide lors du changement
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Initialisation du thème au montage du composant
  useEffect(() => {
    setMounted(true)
    
    // Vérifier le localStorage d'abord
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
      // Si un thème est sauvegardé, l'utiliser
      const isDarkMode = savedTheme === 'dark'
      setIsDark(isDarkMode)
      document.documentElement.classList.toggle('dark', isDarkMode)
    } else {
      // Sinon, détecter les préférences système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  // Fonction de basculement du thème
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    // Appliquer la classe 'dark' sur l'élément html
    document.documentElement.classList.toggle('dark', newTheme)
    
    // Sauvegarder le choix dans localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  // Éviter le flash de contenu incorrect (FOUC) pendant le SSR
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800" />
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-blue-400" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500" />
        )}
      </motion.div>
    </motion.button>
  )
}
