# Easy Web - Landing Page Moderne

Landing page professionnelle pour une agence de transformation digitale et IA, développée avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- **Hero Section** avec effet Glassmorphism et animations fluides
- **Section Avant/Après** avec slider interactif pour comparer site obsolète vs moderne
- **Calculateur ROI IA** pour calculer les économies potentielles d'automatisation
- **Section Services** avec cartes 3D interactives (effet tilt)
- **Background animé** avec particules discrètes et gradient dynamique
- **Animations au scroll** avec Framer Motion
- **100% Responsive** et optimisé pour tous les écrans
- **Performance optimale** avec Next.js 14

## 🛠️ Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour un code robuste
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations fluides
- **Lucide React** - Icônes modernes et légères

## 📦 Installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm run dev
```

3. **Ouvrir dans le navigateur** :
```
http://localhost:3000
```

## 🏗️ Structure du projet

```
easy-web/
├── app/
│   ├── globals.css       # Styles globaux avec Tailwind
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Page d'accueil
├── components/
│   ├── AnimatedBackground.tsx    # Particules et gradient animés
│   ├── BeforeAfterSection.tsx    # Slider comparatif avant/après
│   ├── HeroSection.tsx           # Section hero avec glassmorphism
│   ├── ROICalculator.tsx         # Calculateur de ROI interactif
│   └── ServicesSection.tsx       # Cartes services avec effet 3D
├── public/               # Fichiers statiques
├── tailwind.config.ts    # Configuration Tailwind
├── tsconfig.json         # Configuration TypeScript
├── next.config.js        # Configuration Next.js
└── package.json          # Dépendances du projet
```

## 🎨 Composants

### HeroSection
- Design épuré avec effet glassmorphism
- Accroche principale avec gradient animé
- Bouton CTA avec effet de lueur au survol
- Statistiques rapides en cartes glass

### BeforeAfterSection
- Slider draggable pour comparer avant/après
- Support tactile pour mobile
- Animations fluides avec Framer Motion
- Statistiques de transformation

### ServicesSection
- Cartes avec effet 3D tilt au survol
- 6 services détaillés avec icônes
- Animations d'apparition au scroll
- Background avec effets de lueur

### ROICalculator
- Formulaire interactif avec sliders
- Calculs en temps réel
- Affichage des économies potentielles
- Design moderne avec glassmorphism

### AnimatedBackground
- Particules animées avec Canvas
- Connexions entre particules proches
- Gradient animé en background
- Performance optimisée

## 🎯 Optimisations

- **SSR** avec Next.js pour un chargement ultra-rapide
- **Code splitting** automatique
- **Images optimisées** avec Next/Image
- **CSS optimisé** avec Tailwind et PurgeCSS
- **Animations performantes** avec Framer Motion et will-change

## 📱 Responsive

Le site s'adapte parfaitement à tous les écrans :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🚢 Déploiement

### Build de production
```bash
npm run build
```

### Démarrer en production
```bash
npm start
```

### Déployer sur Vercel
```bash
vercel
```

## 📄 Licence

© 2026 Easy Web - Tous droits réservés

## 🤝 Support

Pour toute question ou support, contactez-nous à : contact@easyweb.com
