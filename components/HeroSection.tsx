'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Lazy load AnimatedBackground APRÈS le rendu initial pour améliorer le LCP
const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), { 
  ssr: false,
  loading: () => null
})

/**
 * Hero Section en mode light inspiré de mindflow.io
 * - Design épuré avec fond blanc
 * - Textes foncés avec accents bleus
 * - CTA proéminents
 * - Background chargé après le contenu critique
 */
export default function HeroSection() {
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    // Charger le background après le premier rendu du contenu
    const timer = setTimeout(() => setShowBackground(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-gray-950">
      {/* Background avec quadrillage et fibre optique - Chargé après le contenu */}
      {showBackground && <AnimatedBackground />}
      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-800 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
              Transformation Digitale & IA
            </span>
          </motion.div>

          {/* Titre principal - Élément LCP critique */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight px-4 no-transition"
          >
            <span className="text-gray-900 dark:text-white">
              Nous transformons
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              votre présence web obsolète
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              en une machine à générer des clients
            </span>
          
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4"
          >
            Augmentez votre chiffre d&apos;affaires de 300% grâce à des solutions web modernes 
            et des automatisations intelligentes propulsées par l&apos;IA.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            {/* Bouton principal */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold text-sm md:text-base lg:text-lg flex items-center justify-center gap-2 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Démarrer votre transformation
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* Bouton secondaire */}
            <motion.a
              href="/#audit-scanner"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full font-semibold text-sm md:text-base lg:text-lg text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 text-center"
            >
              Evaluer mon site actuel
            </motion.a>
          </motion.div>

          {/* Stats rapides */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20 max-w-4xl mx-auto px-4"
          >
            {[
              { value: '300%', label: 'Augmentation moyenne du CA' },
              { value: '85%', label: 'Temps gagné sur les tâches manuelles' },
              { value: '24/7', label: 'Support automatisé par IA' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-xs md:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Décoration subtile */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}
