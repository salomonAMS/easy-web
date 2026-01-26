'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react'

/**
 * Composant "IA Audit Scanner" - Remplace le calculateur de ROI
 * - Input URL de site web
 * - Animation laser scan avec messages de statut
 * - Bouton final pour recevoir le plan d'automatisation
 */
export default function AIAuditScanner() {
  const [url, setUrl] = useState('')
  const [urlError, setUrlError] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  const scanMessages = [
    "🔍 Analyse de la structure du site...",
    "⚡ Détection des processus automatisables...",
    "🤖 Évaluation du potentiel IA...",
    "📊 Calcul des opportunités d'optimisation...",
    "🎯 Identification des points d'amélioration...",
    "✨ Génération du rapport d'audit...",
  ]

  // Gestion du scan - optimisé pour 6 secondes
  useEffect(() => {
    if (isScanning) {
      const progressInterval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            setShowResult(true)
            return 100
          }
          return prev + 3.3 // 100% en ~3 secondes
        })
      }, 50)

      const messageInterval = setInterval(() => {
        setCurrentMessage((prev) => {
          if (prev >= scanMessages.length - 1) {
            clearInterval(messageInterval)
            return prev
          }
          return prev + 1
        })
      }, 600) // Messages plus rapides

      return () => {
        clearInterval(progressInterval)
        clearInterval(messageInterval)
      }
    }
  }, [isScanning, scanMessages.length])

  const handleScan = () => {
    // Validation robuste de l'URL
    const urlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
    
    if (!url.trim()) {
      setUrlError('Veuillez entrer une URL')
      return
    }
    
    if (!urlPattern.test(url.trim())) {
      setUrlError('Veuillez entrer une URL valide (ex: https://exemple.com)')
      return
    }
    
    setUrlError('')
    setIsScanning(true)
    setScanProgress(0)
    setCurrentMessage(0)
    setShowResult(false)
  }

  const resetScan = () => {
    setIsScanning(false)
    setShowResult(false)
    setScanProgress(0)
    setCurrentMessage(0)
    setUrl('')
  }

  return (
    <section id="audit-scanner" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-800 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
              Audit IA Gratuit
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Analysez le potentiel</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              d&apos;automatisation de votre site
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Notre IA scanne votre site en 6 secondes et identifie les opportunités d&apos;automatisation
          </p>
        </motion.div>

        {/* Zone de scan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl md:rounded-3xl border-2 border-gray-200 dark:border-gray-800 p-4 sm:p-6 md:p-12 shadow-xl"
        >
          {!isScanning && !showResult && (
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                  <Globe className="w-5 h-5 inline mr-2 text-blue-600 dark:text-blue-400" />
                  URL de votre site web
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => { setUrl(e.target.value); setUrlError(''); }}
                    onKeyPress={(e) => e.key === 'Enter' && handleScan()}
                    placeholder="https://votre-site.com"
                    aria-label="URL de votre site web"
                    className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-xl sm:rounded-2xl text-base sm:text-lg focus:outline-none transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                      urlError ? 'border-red-500 focus:border-red-600' : 'border-gray-300 dark:border-gray-700 focus:border-blue-600'
                    }`}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleScan}
                    disabled={!url.trim()}
                    aria-label="Lancer le scan du site"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <Zap className="w-5 h-5 inline mr-2" />
                    Scanner
                  </motion.button>
                </div>
                {urlError && (
                  <p className="text-red-600 text-sm mt-2">{urlError}</p>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Gratuit • Résultats en 6 secondes • Sans engagement</span>
              </div>
            </div>
          )}

          {/* Animation de scan */}
          {isScanning && !showResult && (
            <div className="space-y-8">
              {/* Écran de scan */}
              <div className="relative h-64 bg-gray-900 rounded-2xl overflow-hidden">
                {/* Effet laser scanner - optimisé */}
                <motion.div
                  animate={{ top: ['0%', '100%'] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                  style={{ filter: 'blur(2px)' }}
                />

                {/* Messages de statut */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentMessage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center"
                    >
                      <p className="text-xl font-mono text-blue-400 mb-2">
                        {scanMessages[currentMessage]}
                      </p>
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            className="w-2 h-2 bg-blue-500 rounded-full"
                          />
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Barre de progression */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-gray-600">Analyse en cours...</span>
                  <span className="text-blue-600">{scanProgress}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${scanProgress}%` }}
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Résultats */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Analyse Complétée !
                </h3>
                <p className="text-gray-600">
                  Nous avons identifié <span className="font-bold text-blue-600">12 opportunités</span> d&apos;automatisation sur votre site
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 py-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Gain de temps</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">€3.2k</div>
                  <div className="text-xs sm:text-sm text-gray-600">Économies/mois</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">12</div>
                  <div className="text-xs sm:text-sm text-gray-600">Processus</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-xl transition-all text-lg"
              >
                Recevoir mon plan d&apos;automatisation
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </motion.button>

              <button
                onClick={resetScan}
                className="text-gray-500 hover:text-gray-700 text-sm underline"
              >
                Scanner un autre site
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Formulaire de contact modal */}
        <AnimatePresence>
          {showContactForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setShowContactForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 max-w-md w-full"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Recevez votre plan personnalisé
                </h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Formulaire soumis !'); setShowContactForm(false); }}>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Votre téléphone"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
                  >
                    Recevoir mon plan gratuit
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
