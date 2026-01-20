'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react'

/**
 * Calculateur de ROI pour l'automatisation par IA
 * - Formulaire interactif avec calculs en temps réel
 * - Affichage des économies potentielles annuelles
 * - Design moderne avec glassmorphism et animations
 */
export default function ROICalculator() {
  // États pour les inputs
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(20)
  const [hourlyRate, setHourlyRate] = useState<number>(50)
  
  // Calculs automatiques
  const weeklyManualCost = hoursPerWeek * hourlyRate
  const yearlyManualCost = weeklyManualCost * 52
  
  // Avec l'automatisation IA (économie de 85% du temps)
  const automationSavingsPercent = 85
  const yearlySavings = yearlyManualCost * (automationSavingsPercent / 100)
  const timeSaved = hoursPerWeek * (automationSavingsPercent / 100)

  /**
   * Formate un nombre en devise
   */
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section id="roi" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Calculator className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <span className="text-xs md:text-sm font-semibold text-blue-900">
              Calculateur de ROI
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Calculez vos économies avec l&apos;IA
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Découvrez combien vous pourriez économiser en automatisant vos tâches répétitives
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulaire de saisie */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Vos informations
            </h3>

            <div className="space-y-6">
              {/* Input: Heures par semaine */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Heures passées sur des tâches manuelles par semaine
                </label>
                <input
                  type="number"
                  min="1"
                  max="168"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>1h</span>
                  <span className="text-blue-600 font-medium">{hoursPerWeek}h / semaine</span>
                  <span>168h</span>
                </div>
                {/* Slider visuel */}
                <input
                  type="range"
                  min="1"
                  max="168"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full mt-2 accent-blue-600"
                />
              </div>

              {/* Input: Coût horaire */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  Coût horaire (en €)
                </label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>1€</span>
                  <span className="text-blue-600 font-medium">{hourlyRate}€ / heure</span>
                  <span>500€</span>
                </div>
                {/* Slider visuel */}
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full mt-2 accent-blue-600"
                />
              </div>

              {/* Info sur la méthodologie */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700">
                  <TrendingUp className="w-4 h-4 inline mr-2 text-blue-600" />
                  Nos solutions d&apos;automatisation IA permettent en moyenne d&apos;économiser 
                  <span className="text-blue-600 font-semibold"> 85% du temps</span> sur les tâches répétitives.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Résultats des calculs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Vos économies potentielles
            </h3>

            {/* Carte: Économies annuelles */}
            <motion.div
              key={yearlySavings}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Économie annuelle</div>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                    {formatCurrency(yearlySavings)}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-700 mt-4 p-4 bg-white/60 rounded-lg">
                C&apos;est l&apos;équivalent de <span className="text-blue-600 font-semibold">{Math.round(yearlySavings / hourlyRate)} heures</span> de travail économisées par an !
              </div>
            </motion.div>

            {/* Autres métriques */}
            <div className="grid grid-cols-2 gap-4">
              {/* Temps gagné par semaine */}
              <motion.div
                key={timeSaved}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md"
              >
                <Clock className="w-6 h-6 text-indigo-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {timeSaved.toFixed(1)}h
                </div>
                <div className="text-sm text-gray-600">
                  Temps gagné / semaine
                </div>
              </motion.div>

              {/* Coût actuel annuel */}
              <motion.div
                key={yearlyManualCost}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md"
              >
                <DollarSign className="w-6 h-6 text-red-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {formatCurrency(yearlyManualCost)}
                </div>
                <div className="text-sm text-gray-600">
                  Coût actuel / an
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl py-4 font-semibold text-lg text-white text-center shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all"
            >
              Obtenir une analyse personnalisée
            </motion.a>

            {/* Note */}
            <p className="text-xs text-gray-500 text-center">
              * Ces calculs sont basés sur des moyennes observées chez nos clients. 
              Les résultats réels peuvent varier selon votre secteur d&apos;activité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
