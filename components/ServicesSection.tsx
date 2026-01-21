'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, Zap, Brain, Workflow, Target, Rocket } from 'lucide-react'

/**
 * Interface pour un service
 */
interface Service {
  icon: any
  title: string
  description: string
  features: string[]
  gradient: string
}

/**
 * Composant de carte avec effet 3D Tilt
 */
function TiltCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  // Motion values pour le tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Spring pour des animations fluides
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  // Transformations pour la rotation 3D - désactivées sur mobile
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])
  
  // Détection mobile au montage
  useState(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  })
  
  /**
   * Gère le mouvement de la souris pour créer l'effet tilt
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }
  
  /**
   * Réinitialise la position au départ de la souris
   */
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: isMobile ? 'flat' : 'preserve-3d',
      }}
      className="relative group h-full"
    >
      {/* Effet de lueur en background */}
      <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${service.gradient}`} />
      
      {/* Carte principale */}
      <div
        className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
        style={{
          transformStyle: isMobile ? 'flat' : 'preserve-3d',
          transform: isMobile ? 'none' : 'translateZ(75px)',
        }}
      >
        {/* Icône */}
        <div
          className={`inline-flex p-3 md:p-4 rounded-xl mb-4 md:mb-6 ${service.gradient} w-fit`}
          style={{ transform: isMobile ? 'none' : 'translateZ(50px)' }}
        >
          <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        
        {/* Titre */}
        <h3
          className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4"
          style={{ transform: isMobile ? 'none' : 'translateZ(40px)' }}
        >
          {service.title}
        </h3>
        
        {/* Description */}
        <p
          className="text-sm md:text-base text-gray-600 mb-4 md:mb-6"
          style={{ transform: isMobile ? 'none' : 'translateZ(30px)' }}
        >
          {service.description}
        </p>
        
        {/* Features */}
        <ul
          className="space-y-2 md:space-y-3 mb-6 flex-grow"
          style={{ transform: isMobile ? 'none' : 'translateZ(20px)' }}
        >
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Bouton hover - Transform 3D retiré pour éviter les conflits */}
        <div style={{ transform: isMobile ? 'none' : 'translateZ(60px)' }}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2.5 md:py-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg font-medium text-sm md:text-base text-gray-900 hover:text-blue-600 transition-all block text-center"
          >
            En savoir plus
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Section Services avec effet 3D Tilt sur les cartes
 */
export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: Brain,
      title: 'IA & Automatisation',
      description: 'Intégrez l\'intelligence artificielle pour automatiser vos processus et améliorer vos performances.',
      features: [
        'Chatbots intelligents disponibles 24/7',
        'Automatisation des tâches répétitives',
        'Analyse prédictive des données',
        'Personnalisation en temps réel',
      ],
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
    },
    {
      icon: Zap,
      title: 'Développement Web',
      description: 'Des sites ultra-rapides, modernes et optimisés pour convertir vos visiteurs en clients.',
      features: [
        'Design responsive et moderne',
        'Performance optimale (score 90+)',
        'SEO avancé pour le référencement',
        'Expérience utilisateur exceptionnelle',
      ],
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-600',
    },
    {
      icon: Workflow,
      title: 'Transformation Digitale',
      description: 'Modernisez votre infrastructure et vos processus pour rester compétitif.',
      features: [
        'Audit complet de votre présence web',
        'Migration vers des technologies modernes',
        'Formation de vos équipes',
        'Support continu et maintenance',
      ],
      gradient: 'bg-gradient-to-br from-pink-500 to-orange-600',
    },
    {
      icon: Target,
      title: 'Marketing Digital',
      description: 'Attirez et convertissez plus de clients grâce à des stratégies data-driven.',
      features: [
        'Stratégie d\'acquisition personnalisée',
        'Campagnes publicitaires optimisées par IA',
        'Analytics et tableaux de bord en temps réel',
        'A/B testing automatisé',
      ],
      gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
    {
      icon: Rocket,
      title: 'Applications Web',
      description: 'Créez des applications web puissantes et évolutives pour votre entreprise.',
      features: [
        'Développement sur mesure',
        'Architecture scalable et sécurisée',
        'Intégrations API tierces',
        'Progressive Web Apps (PWA)',
      ],
      gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Consulting & Stratégie',
      description: 'Bénéficiez de notre expertise pour définir votre feuille de route digitale.',
      features: [
        'Analyse de marché et concurrence',
        'Roadmap technologique personnalisée',
        'Optimisation des processus métier',
        'Accompagnement à la mise en œuvre',
      ],
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
    },
  ]

  return (
    <section id="modernisation" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Décoration subtile */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              Nos Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Des solutions complètes
            </span>
            <br />
            <span className="text-gray-900">pour votre transformation digitale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos services conçus pour propulser votre entreprise vers le succès digital
          </p>
        </motion.div>

        {/* Grille de cartes avec effet 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ perspective: '1000px' }}>
          {services.map((service, index) => (
            <TiltCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Prêt à transformer votre entreprise ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all"
          >
            Discutons de votre projet
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
