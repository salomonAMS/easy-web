'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Clock, Users, CheckCircle, ArrowRight, Database, Cpu, Sparkles } from 'lucide-react'

/**
 * Section Automatisation IA inspirée de Mindflow avec workflow visuel
 * - Workflow horizontal (desktop) → vertical (mobile)
 * - Lignes de connexion animées
 * - Design épuré avec blocs Input → Process → Output
 */
export default function AIAutomationSection() {
  const workflowSteps = [
    {
      icon: Database,
      title: 'Input',
      subtitle: 'Vos Données',
      description: 'Collecte et structuration de vos données métier',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'IA Process',
      subtitle: 'Traitement Intelligent',
      description: 'Nos agents IA analysent et automatisent',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Sparkles,
      title: 'Output',
      subtitle: 'Résultats',
      description: 'Actions automatisées et insights précieux',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const workflows = [
    {
      icon: Brain,
      title: 'Agents IA Personnalisés',
      description: 'Nos experts créent des agents IA sur mesure adaptés à vos besoins spécifiques.',
    },
    {
      icon: Zap,
      title: 'Automatisation Complète',
      description: 'Automatisez vos processus métier de bout en bout sans lever le petit doigt.',
    },
    {
      icon: Shield,
      title: 'Sécurité & Conformité',
      description: 'Solutions conformes aux normes avec sécurité des données garantie.',
    },
    {
      icon: Clock,
      title: 'Déploiement Rapide',
      description: 'Mise en production en quelques jours, pas en mois.',
    },
  ]

  const benefits = [
    'Nos experts conçoivent et déploient vos workflows sur mesure',
    'Aucune compétence technique requise de votre part',
    'Support et maintenance inclus',
    'Formation complète de votre équipe',
    'Évolutions et mises à jour continues',
    'Intégration avec vos outils existants',
  ]

  return (
    <section id="automatisations" className="relative py-16 md:py-24 px-6 bg-white overflow-hidden">
      {/* Décoration subtile */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6"
          >
            <Brain className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <span className="text-xs md:text-sm font-semibold text-blue-900">
              Workflows Intelligents
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Automatisations IA
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Conçues par nos Experts
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Concentrez-vous sur votre métier. Nous créons, déployons et gérons vos agents IA 
            de A à Z pour maximiser votre productivité.
          </p>
        </motion.div>

        {/* Workflow Visuel - Horizontal (Desktop) / Vertical (Mobile) */}
        <div className="mb-12 md:mb-16 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 relative">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                {/* Bloc */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative group w-full lg:w-56"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                    {/* Icône */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto lg:mx-0`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1 text-center lg:text-left">
                      {step.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold mb-3 text-center lg:text-left">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 text-center lg:text-left">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connecteur - Différent selon desktop/mobile */}
                {index < workflowSteps.length - 1 && (
                  <>
                    {/* Connecteur vertical (mobile) */}
                    <div className="lg:hidden flex flex-col items-center py-4">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                        className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-indigo-400 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-white via-blue-300 to-transparent animate-pulse" 
                             style={{ animationDuration: '2s', animationDelay: `${index * 0.5}s` }} />
                      </motion.div>
                      <ArrowRight className="w-5 h-5 text-blue-600 transform rotate-90" />
                    </div>

                    {/* Connecteur horizontal (desktop) */}
                    <div className="hidden lg:flex items-center mx-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                        className="h-0.5 w-20 bg-gradient-to-r from-blue-400 to-indigo-400 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white via-blue-300 to-transparent animate-pulse"
                             style={{ animationDuration: '2s', animationDelay: `${index * 0.5}s` }} />
                      </motion.div>
                      <ArrowRight className="w-5 h-5 text-blue-600 ml-1" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Grille de workflows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {workflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                <workflow.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {workflow.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {workflow.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section "Nos experts déploient pour vous" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Contenu gauche */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <span className="text-xs md:text-sm font-semibold text-blue-900">
                  Service Complet
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nos experts conçoivent
                <br />
                et déploient vos workflows
                <br />
                sur mesure
              </h3>

              <p className="text-gray-600 text-base md:text-lg mb-8">
                Pas de self-service. Pas de complexité technique. 
                Nous gérons l&apos;intégralité du processus de création et de déploiement.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-sm md:text-base"
              >
                Discuter de mon projet
                <Zap className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </div>

            {/* Liste de bénéfices à droite */}
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100"
                >
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16"
        >
          {[
            { value: '85%', label: 'Temps gagné sur les tâches répétitives' },
            { value: '48h', label: 'Temps moyen de déploiement' },
            { value: '100+', label: 'Agents IA déployés avec succès' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base px-4">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
