'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftRight } from 'lucide-react'

/**
 * Section Avant/Après avec slider interactif
 * - Permet de comparer visuellement un site obsolète vs moderne
 * - Slider draggable pour révéler la transformation
 * - Animations fluides avec Framer Motion
 */
export default function BeforeAfterSection() {
  // État pour la position du slider (0-100)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  /**
   * Gère le mouvement du slider
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              La différence est spectaculaire
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Découvrez comment nous transformons des sites obsolètes en expériences modernes et performantes
          </p>
        </motion.div>

        {/* Conteneur du slider comparatif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Container principal avec overflow hidden */}
          <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-col-resize select-none border border-gray-200 dark:border-gray-700 shadow-xl"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            style={{ touchAction: 'none' }}
          >
            {/* Image AVANT (obsolète) - Fond fixe */}
            <div className="absolute inset-0 w-full h-full bg-gray-100">
              <img 
                src="/images/après.png" 
                alt="Site traditionnel - Café Premium" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image APRÈS (moderne) - Se révèle avec le slider */}
            <div
              className="absolute inset-0 w-full h-full bg-gray-900"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <img 
                src="/images/avant.png" 
                alt="Site moderne avec IA - Expérience café réinventée" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Ligne de séparation et poignée du slider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Poignée draggable - Plus large sur mobile */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-col-resize hover:scale-110 transition-transform border-4 border-blue-600 touch-manipulation">
                <ArrowLeftRight className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
            </div>

            {/* Labels AVANT/APRÈS */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-200">
              <span className="text-xs md:text-sm font-semibold text-gray-700">AVANT</span>
            </div>
            <div className="absolute top-4 right-4 bg-blue-50/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-blue-200">
              <span className="text-xs md:text-sm font-semibold text-blue-700">APRÈS</span>
            </div>
          </div>

          {/* Instructions */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isDragging ? 0 : 1 }}
            className="text-center mt-6 text-gray-600 text-sm md:text-base"
          >
            <ArrowLeftRight className="w-4 h-4 inline mr-2" />
            Faites glisser pour comparer
          </motion.p>
        </motion.div>

        {/* Statistiques de transformation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-16 max-w-5xl mx-auto"
        >
          {[
            { metric: '+250%', label: 'Taux de conversion' },
            { metric: '5x', label: 'Plus rapide' },
            { metric: '90%', label: 'Score de performance' },
            { metric: '-70%', label: 'Taux de rebond' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.metric}</div>
              <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
