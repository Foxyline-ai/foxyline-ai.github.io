# Guide pour ajouter Radiologie La Cambre

## 📸 Étape 1: Ajouter les captures d'écran

Ajoutez ces deux fichiers dans `/src/assets/`:
- `radiologielacambre-before.png` → Capture de la **page d'accueil** (Home)
- `radiologielacambre-after.png` → Capture de l'**interface de prise de rendez-vous**

💡 **Note**: Contrairement aux autres cas, ici on montre le parcours utilisateur:
- **"Home"** = Point de départ (page d'accueil)
- **"Prise de RDV"** = Destination (interface de réservation)

## 📝 Étape 2: Décommenter le code

### Dans `src/pages/index.astro`:

1. **Ligne 15-16**: Décommentez les imports
```javascript
// AVANT (commenté)
// import lacambreBefore from '../assets/radiologielacambre-before.png';
// import lacambreAfter from '../assets/radiologielacambre-after.png';

// APRÈS (décommenté)
import lacambreBefore from '../assets/radiologielacambre-before.png';
import lacambreAfter from '../assets/radiologielacambre-after.png';
```

2. **Ligne 372**: Décommentez le spacer
```javascript
// AVANT
<!-- <div class="h-16"></div> -->

// APRÈS
<div class="h-16"></div>
```

3. **Lignes 375-390**: Décommentez le UseCase complet
```javascript
// AVANT
<!-- <UseCase
  id="lacambre"
  ...
/> -->

// APRÈS
<UseCase
  id="lacambre"
  ...
/>
```

## ✅ C'est tout!

Le site sera automatiquement recompilé et vous verrez le 4ème cas d'usage apparaître!

## 📊 Informations du cas La Cambre

- **Titre**: Radiologie La Cambre
- **Spécialité**: Radiologie & Imagerie
- **Localisation**: Ixelles, Bruxelles (Avenue Louise)
- **Focus**: Refonte site + nouvelle interface de prise de RDV
- **Résultats**:
  - +210% RDV en ligne
  - -65% taux d'abandon
  - -70% temps de réservation
  - -55% appels téléphoniques

## 🎨 Layout

Le cas s'affichera en **reverse** (image à gauche, texte à droite) pour alterner avec les autres.
