# 📋 Guide des Best Practices - Easy Web

## 🎯 À Respecter pour Maintenir la Qualité

### 1. ⚡ Ajout de Nouveaux Composants

#### Toujours utiliser Dynamic Import pour les composants lourds
```tsx
// ❌ MAUVAIS
import MonComposantLourd from './MonComposantLourd'

// ✅ BON
import dynamic from 'next/dynamic'
const MonComposantLourd = dynamic(() => import('./MonComposantLourd'), { 
  ssr: false // Si le composant utilise des APIs du navigateur
})
```

#### Entourer les sections critiques avec ErrorBoundary
```tsx
// ✅ BON
<ErrorBoundary>
  <NouveauComposant />
</ErrorBoundary>
```

---

### 2. 🖼️ Gestion des Images

#### Toujours utiliser next/image
```tsx
// ❌ MAUVAIS
<img src="/photo.jpg" alt="Description" />

// ✅ BON
import Image from 'next/image'
<Image 
  src="/photo.jpg" 
  alt="Description précise pour accessibilité"
  width={800}
  height={600}
  loading="lazy"
/>
```

---

### 3. 🎨 Animations Performantes

#### Utiliser transform3d pour les animations GPU
```css
/* ✅ BON - Utilise le GPU */
.animated-element {
  transform: translate3d(0, 0, 0);
  will-change: transform;
  animation: slide 2s ease;
}

/* ❌ MAUVAIS - Utilise le CPU */
.animated-element {
  animation: slide 2s ease;
}
@keyframes slide {
  from { left: 0; }
  to { left: 100px; }
}
```

---

### 4. ✅ Validation de Formulaires

#### Pattern de validation robuste
```tsx
const validateForm = () => {
  const errors: { [key: string]: string } = {}
  
  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailPattern.test(email)) {
    errors.email = 'Email invalide'
  }
  
  // URL
  const urlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/
  if (!url || !urlPattern.test(url)) {
    errors.url = 'URL invalide'
  }
  
  // Téléphone (optionnel)
  if (phone && !/^[+]?[0-9\s()-]{8,}$/.test(phone)) {
    errors.phone = 'Téléphone invalide'
  }
  
  return errors
}
```

#### Affichage des erreurs
```tsx
<input
  type="email"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value)
    if (errors.email) setErrors({ ...errors, email: '' })
  }}
  aria-invalid={!!errors.email}
  className={errors.email ? 'border-red-500' : 'border-gray-300'}
/>
{errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
```

---

### 5. ♿ Accessibilité (A11y)

#### Checklist pour chaque composant interactif

##### Boutons
```tsx
// ✅ BON
<button aria-label="Fermer le menu">
  <X className="w-6 h-6" />
</button>

// ❌ MAUVAIS (icône sans label)
<button>
  <X className="w-6 h-6" />
</button>
```

##### Formulaires
```tsx
// ✅ BON
<label htmlFor="user-email">Email *</label>
<input 
  id="user-email"
  type="email"
  aria-label="Adresse email"
  aria-invalid={!!errors.email}
  aria-describedby={errors.email ? "email-error" : undefined}
/>
{errors.email && <p id="email-error">{errors.email}</p>}
```

##### Liens
```tsx
// ✅ BON - Texte descriptif
<Link href="/contact" aria-label="Contactez-nous pour un devis">
  <Button>Contact</Button>
</Link>
```

##### États dynamiques
```tsx
// ✅ BON
<button 
  aria-expanded={isOpen}
  aria-label={isOpen ? 'Fermer' : 'Ouvrir'}
>
```

---

### 6. 📱 Responsive Design

#### Toujours tester sur
- 📱 Mobile (375px - 767px)
- 📱 Tablette (768px - 1023px)
- 💻 Desktop (1024px+)

#### Utiliser les breakpoints Tailwind
```tsx
// ✅ BON
<div className="text-sm md:text-base lg:text-lg">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div className="px-4 sm:px-6 lg:px-8">

// ❌ ÉVITER les largeurs fixes
<div style={{ width: '600px' }}>
```

---

### 7. 🎯 Performance Checklist

#### Avant chaque commit
- [ ] Lazy loading appliqué sur composants lourds ?
- [ ] Images avec next/image ou lazy loading ?
- [ ] Animations optimisées GPU (transform3d) ?
- [ ] Pas de console.log en production ?
- [ ] ErrorBoundary sur sections critiques ?
- [ ] Validation des formulaires robuste ?
- [ ] ARIA labels présents ?
- [ ] Responsive testé ?

---

### 8. 🚫 Anti-Patterns à Éviter

#### Ne JAMAIS faire
```tsx
// ❌ Import synchrone de gros composants
import HugeLibrary from 'huge-library'

// ❌ Animations non optimisées
.box { animation: moveBox 2s; }
@keyframes moveBox {
  from { top: 0; } // Mauvais: top/left
  to { top: 100px; }
}

// ❌ Images sans optimisation
<img src="/large-photo.jpg" />

// ❌ Formulaire sans validation
const submit = () => {
  sendToAPI(formData) // Pas de vérification !
}

// ❌ Bouton sans label
<button onClick={...}><Icon /></button>

// ❌ Largeurs fixes problématiques
<div className="w-[800px]"> // Déborde sur mobile !
```

---

### 9. 📦 Structure de Composant Idéale

```tsx
'use client' // Si nécessaire

import dynamic from 'next/dynamic'
import { useState } from 'react'

// Lazy load des dépendances lourdes
const HeavyComponent = dynamic(() => import('./HeavyComponent'))

interface Props {
  // Types TypeScript
}

/**
 * Description claire du composant
 * - Fonctionnalité 1
 * - Fonctionnalité 2
 */
export default function MyComponent({ prop }: Props) {
  // États
  const [value, setValue] = useState('')
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  
  // Validation
  const validate = () => {
    // Logique de validation
  }
  
  // Handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    // Traitement
  }
  
  return (
    <section className="responsive-classes" aria-label="Section description">
      {/* Contenu */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="field-id">Label</label>
        <input
          id="field-id"
          aria-label="Description"
          aria-invalid={!!errors.field}
        />
        {errors.field && <p role="alert">{errors.field}</p>}
      </form>
    </section>
  )
}
```

---

### 10. 🔍 Tests Manuels Essentiels

#### Avant mise en production
1. ⚡ **Performance**
   - Lighthouse score > 90
   - Page charge en < 2s
   - Animations fluides 60 FPS

2. ♿ **Accessibilité**
   - Navigation clavier complète (Tab)
   - Lecteur d'écran (NVDA/VoiceOver)
   - Contraste des couleurs (WCAG AA)

3. 📱 **Responsive**
   - Test sur iPhone (Safari)
   - Test sur Android (Chrome)
   - Test sur iPad
   - Test sur Desktop (Chrome, Firefox, Safari)

4. ✅ **Formulaires**
   - Soumettre avec données valides ✓
   - Soumettre avec données invalides ✗
   - Messages d'erreur clairs
   - Nettoyage des erreurs à la modification

5. 🛡️ **Robustesse**
   - Tester avec connexion lente (3G)
   - Tester sans JavaScript (dégradation gracieuse)
   - Vérifier qu'une erreur ne crash pas tout

---

## 🎓 Ressources

### Documentation officielle
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Web.dev Performance](https://web.dev/performance/)

### Outils de test
- **Lighthouse** (Chrome DevTools) : Performance + A11y
- **axe DevTools** : Tests d'accessibilité détaillés
- **React DevTools** : Profiler les performances
- **WebPageTest** : Performance en conditions réelles

---

## ✅ Maintenir la Qualité

**Règle d'or** : Chaque nouvelle feature doit respecter ces standards.
- Code review systématique
- Tests manuels avant merge
- Documentation à jour

**Votre site est Production-Ready. Gardez-le ainsi ! 🚀**
