# Easy Web - Transformation Digitale & IA

Landing page moderne et performante pour une agence de transformation digitale et d'intelligence artificielle. Développée avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## ✨ Fonctionnalités Principales

- **Hero Section** avec effet Glassmorphism et animations fluides
- **Section Avant/Après** avec slider interactif pour démontrer la transformation digitale
- **Calculateur ROI IA** pour estimer les économies d'automatisation en temps réel
- **Section Services** avec cartes 3D interactives et effet tilt
- **Background animé** avec système de particules et gradient dynamique
- **Animations au scroll** optimisées avec Framer Motion
- **Design Responsive** adapté à tous les appareils
- **Performance optimale** et SEO-friendly
- **Système de notifications** pour l'engagement utilisateur
- **Curseur personnalisé** pour une expérience unique
- **Scanner d'audit IA** pour analyser les sites web

## 🛠️ Stack Technique

- **[Next.js 14](https://nextjs.org/)** - Framework React avec App Router et Server Components
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique pour un code robuste et maintenable
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitaire pour un design moderne
- **[Framer Motion](https://www.framer.com/motion/)** - Bibliothèque d'animations fluides et performantes
- **[Lucide React](https://lucide.dev/)** - Icônes modernes et personnalisables

## 📦 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet** :
```bash
git clone [url-du-projet]
cd easy-web
```

2. **Installer les dépendances** :
```bash
npm install
# ou
yarn install
```

3. **Lancer le serveur de développement** :
```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir dans le navigateur** :
```
http://localhost:3000
```

## 🏗️ Structure du Projet

```
easy-web/
├── app/                          # Next.js App Router
│   ├── globals.css              # Styles globaux et Tailwind
│   ├── layout.tsx               # Layout principal de l'application
│   ├── page.tsx                 # Page d'accueil
│   ├── a-propos/                # Page À propos
│   ├── automatisations/         # Page Automatisations
│   ├── conditions/              # Conditions générales
│   ├── confidentialite/         # Politique de confidentialité
│   ├── contact/                 # Page Contact
│   ├── etudes-cas/              # Études de cas
│   ├── modernisation/           # Page Modernisation
│   ├── services/                # Page Services détaillés
│   └── tarifs/                  # Page Tarifs
├── components/                   # Composants réutilisables
│   ├── ActivityNotifications.tsx # Système de notifications
│   ├── AIAuditScanner.tsx       # Scanner d'audit IA
│   ├── AIAutomationSection.tsx  # Section automatisation IA
│   ├── AnimatedBackground.tsx   # Fond animé avec particules
│   ├── BeforeAfterSection.tsx   # Slider comparatif
│   ├── ContactSection.tsx       # Formulaire de contact
│   ├── CustomCursor.tsx         # Curseur personnalisé
│   ├── ErrorBoundary.tsx        # Gestion d'erreurs
│   ├── Footer.tsx               # Pied de page
│   ├── Header.tsx               # En-tête et navigation
│   ├── HeroSection.tsx          # Section hero
│   ├── PageLoader.tsx           # Loader de page
│   ├── ROICalculator.tsx        # Calculateur de ROI
│   ├── ScrollToTop.tsx          # Bouton retour en haut
│   └── ServicesSection.tsx      # Section services
├── public/                       # Fichiers statiques
├── .github/                      # Configuration GitHub
├── tailwind.config.ts           # Configuration Tailwind CSS
├── tsconfig.json                # Configuration TypeScript
├── next.config.js               # Configuration Next.js
├── postcss.config.js            # Configuration PostCSS
└── package.json                 # Dépendances et scripts
```

## 🎨 Composants Principaux

### HeroSection
Section d'accueil avec effet glassmorphism, animations fluides et statistiques clés.
- Design moderne avec gradient animé
- Appel à l'action (CTA) avec effet de lueur
- Cartes statistiques avec effet glass
- Animations d'apparition optimisées

### BeforeAfterSection
Démonstration interactive de la transformation digitale.
- Slider draggable pour comparer avant/après
- Support tactile mobile et desktop
- Animations fluides avec Framer Motion
- Métriques de transformation en temps réel

### ServicesSection
Présentation des services avec cartes 3D interactives.
- Effet 3D tilt au survol de souris
- 6 services détaillés avec icônes personnalisées
- Animations d'apparition au scroll
- Background avec effets de lueur dynamiques

### ROICalculator
Calculateur interactif pour estimer le retour sur investissement.
- Formulaire avec sliders personnalisés
- Calculs en temps réel des économies
- Affichage visuel des résultats
- Design glassmorphism cohérent

### AnimatedBackground
Fond animé avec système de particules Canvas.
- Particules animées avec physique réaliste
- Connexions dynamiques entre particules
- Gradient animé en arrière-plan
- Optimisé pour les performances

### AIAuditScanner
Scanner d'audit IA pour analyser les sites web.
- Analyse en temps réel de sites web
- Métriques de performance et SEO
- Recommandations d'amélioration
- Interface moderne et intuitive

### ContactSection
Formulaire de contact moderne et accessible.
- Validation des champs en temps réel
- Design responsive et accessible
- Animations de feedback utilisateur
- Intégration avec services d'email

### Header & Footer
Navigation et pied de page cohérents.
- Navigation responsive avec menu mobile
- Liens vers toutes les pages du site
- Footer avec informations légales
- Optimisation SEO et accessibilité

## ⚡ Performance et Optimisations

- **Server-Side Rendering (SSR)** avec Next.js pour un chargement instantané
- **Code splitting automatique** pour réduire le bundle initial
- **Images optimisées** avec le composant Next/Image
- **CSS optimisé** avec Tailwind et PurgeCSS automatique
- **Animations performantes** avec Framer Motion et propriété will-change
- **Lazy loading** des composants non critiques
- **Préchargement** des ressources critiques
- **Optimisation des fonts** avec next/font

## 📱 Design Responsive

Le site s'adapte automatiquement à tous les types d'écrans :

- **Mobile** (< 768px) : Navigation simplifiée, composants empilés
- **Tablette** (768px - 1024px) : Layout adapté avec grille flexible
- **Desktop** (> 1024px) : Expérience complète avec tous les effets
- **Large Desktop** (> 1440px) : Layout optimisé pour grands écrans

Tous les composants sont testés sur :
- iOS Safari, Chrome Mobile
- Android Chrome, Firefox Mobile
- Desktop Chrome, Firefox, Safari, Edge

## 🚢 Déploiement

### Build de production
```bash
npm run build
# ou
yarn build
```

### Tester en local (mode production)
```bash
npm start
# ou
yarn start
```

### Déploiement sur Vercel (Recommandé)
Le projet est optimisé pour Vercel :
```bash
npm install -g vercel
vercel
```

### Autres plateformes
Le projet peut être déployé sur :
- **Netlify** : Compatible avec la configuration Next.js
- **AWS Amplify** : Support complet de Next.js
- **Docker** : Dockerfile disponible pour conteneurisation

## 🧪 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm start        # Serveur de production
npm run lint     # Vérification du code
```

## 🔧 Configuration

### Variables d'environnement
Créer un fichier `.env.local` à la racine :
```env
NEXT_PUBLIC_SITE_URL=https://votresite.com
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

## 📄 Licence

© 2026 Easy Web - Tous droits réservés

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 🤝 Support & Contact

Pour toute question, support ou demande de renseignements :

- **Email** : contact@easyweb.com
- **Site Web** : https://www.easyweb.com
- **LinkedIn** : [Easy Web](https://linkedin.com/company/easyweb)

---

Développé avec ❤️ par l'équipe Easy Web
