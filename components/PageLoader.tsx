'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Loader professionnel avec animation fluide
 * - Logo ou texte animé
 * - Barre de progression
 * - Transition douce
 */
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simuler le chargement progressif - optimisé pour 1 seconde
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 20
      })
    }, 100)

    // Masquer le loader après le chargement - réduit à 1 seconde
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="text-center">
            {/* Logo animé - simplifié */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <div className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Easy Web
                </span>
              </div>
            </motion.div>

            {/* Barre de progression */}
            <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
              />
            </div>

            {/* Spinner animé - optimisé */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: 'linear'
              }}
              className="mx-auto mt-4 w-6 h-6 border-2 border-gray-200 border-t-blue-600 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
