# Foxyline Brand Identity - Spécifications Astro

## Vue d'ensemble du projet

Ce projet est un site pour **Foxyline.ai**, une agence de design web premium. Le site sera développé avec **Astro**.

Foxyline, c’est une agence web moderne qui crée des sites élégants, rapides et bien pensés, en utilisant l’IA comme outil intelligent, pas comme gadget.

On combine le design haut de gamme, le développement web de qualité et une touche d’IA pour aller plus vite, mieux analyser, mieux optimiser — mais l'humain reste au centre.

---

## Architecture du site

### Structure des pages
- **Single page application** scrollable
- Sections principales :
  1. Header avec logo et introduction
  2. Design Philosophy
  3. 01 — Logo System
  4. 02 — Color System
  5. 03 — Typography
  6. 04 — Applications
  7. Core Principles
  8. Footer

---

## Design System

### Palette de couleurs

| Nom | Hex | RGB | Usage |
|-----|-----|-----|-------|
| **Forest** (Primary) | `#1B3A2F` | `rgb(27, 58, 47)` | Logo, titres, couleur primaire |
| **Deep Sage** (Secondary) | `#4A6157` | `rgb(74, 97, 87)` | Éléments secondaires, texte support |
| **Copper** (Accent) | `#B87A5C` | `rgb(184, 122, 92)` | CTAs, highlights, accents |
| **Warm Stone** | `#D4C4AC` | `rgb(212, 196, 172)` | Accents doux, bordures |
| **Natural Beige** | `#E8DCC4` | `rgb(232, 220, 196)` | Arrière-plans, cartes, surfaces claires |
| **Warm White** | `#F9F7F4` | `rgb(249, 247, 244)` | Canvas, arrière-plan principal |

**Variables CSS à créer** :
```css
--color-forest: #1B3A2F;
--color-deep-sage: #4A6157;
--color-copper: #B87A5C;
--color-warm-stone: #D4C4AC;
--color-natural-beige: #E8DCC4;
--color-warm-white: #F9F7F4;
```

### Typographie

#### Police principale : **Outfit**
- Google Fonts : `family=Outfit:wght@300;400;500`
- Weights : 300 (Light), 400 (Regular), 500 (Medium)
- Caractéristiques : Géométrique sans-serif, douce et approchable

**Échelle typographique** :
```css
--font-display: 52px, weight 500, line-height 1.1, letter-spacing -0.01em
--font-h1: 40px, weight 500, line-height 1.2
--font-h2: 32px, weight 400, line-height 1.2
--font-h3: 24px, weight 400, line-height 1.3
--font-body-large: 18px, weight 300, line-height 1.7
--font-body-regular: 16px, weight 300, line-height 1.6
--font-body-small: 14px, line-height 1.5
--font-caption: 12px, uppercase, letter-spacing 0.1em
```

#### Police technique : **JetBrains Mono**
- Google Fonts : `family=JetBrains+Mono:wght@400`
- Usage : Codes couleurs, données techniques
- Weight : 400 (Regular)

### Système d'espacement
- Base : `--spacing: 0.25rem` (4px)
- Échelle : 1 unit = 4px
- Valeurs communes : 3 (12px), 4 (16px), 6 (24px), 8 (32px), 12 (48px), 16 (64px), 20 (80px), 32 (128px)

### Rayons de bordure
- `--radius: 0.625rem` (10px)

---

## Composants Astro à créer

### 1. `Logo.astro`
**Props** :
- `size` : number (default: 80)
- `color` : string (hex color, default: "#1B3A2F")
- `showWordmark` : boolean (default: true)
- `wordmarkSize` : number (default: 42)

**Structure SVG du logo** :
- ViewBox : `0 0 100 100`
- Renard géométrique composé de formes angulaires
- Éléments clés :
  - Deux oreilles triangulaires
  - Tête et corps géométriques
  - Détail en espace négatif (triangle blanc, opacity 0.2)
  - Highlight circulaire (cercle blanc à cx="56" cy="42", r="1.5", opacity 0.9) - œil
  - Élément de queue

**Wordmark** : "FOXYLINE.ai"
- "FOXYLINE" en Outfit 400
- ".ai" en Outfit 300, opacity 0.6, taille 0.85em
- Letter-spacing : 0.02em

**Chemins SVG exacts** :
```svg
<svg viewBox="0 0 100 100" fill="none">
  <!-- Oreille gauche -->
  <path d="M30 15 L40 5 L45 20 Z" />
  <!-- Oreille droite -->
  <path d="M60 15 L70 5 L65 20 Z" />
  <!-- Tête principale -->
  <path d="M25 25 L75 25 L70 45 L30 45 Z" />
  <!-- Corps -->
  <path d="M30 45 L70 45 L65 70 L35 70 Z" />
  <!-- Queue -->
  <path d="M35 70 L50 95 L65 70 Z" />
  <!-- Détail négatif -->
  <path d="M45 30 L55 30 L50 40 Z" fill="white" opacity="0.2" />
  <!-- Œil (highlight) -->
  <circle cx="56" cy="42" r="1.5" fill="white" opacity="0.9" />
</svg>
```
*Note : Les chemins ci-dessus sont des approximations. Utiliser les chemins exacts du fichier HTML source.*

### 2. `ColorSwatch.astro`
**Props** :
- `name` : string
- `hex` : string
- `rgb` : string
- `usage` : string

**Structure** :
- Card avec aspect-square
- Hauteur : 160px (40 spacing units)
- Rounded corners
- Hover : shadow transition
- Contenu :
  - Nom de la couleur (Outfit, weight 500)
  - Code hex (JetBrains Mono, 11px, opacity 0.5)
  - Description d'usage (13px)

### 3. `TypeSpecimen.astro`
**Props** :
- `level` : "display" | "h1" | "h2" | "h3" | "body-large" | "body-regular" | "body-small" | "caption"
- `text` : string
- `weight` : number (optional)

### 4. `Card.astro`
**Props** :
- `background` : string (color)
- `bordered` : boolean (default: false)
- `padding` : number (default: 6)
- `rounded` : boolean (default: true)
- `shadow` : boolean (default: false)
- `hoverShadow` : boolean (default: false)

### 5. `Section.astro`
**Props** :
- `id` : string
- `title` : string
- `number` : string (optional, ex: "01")
- `maxWidth` : "3xl" | "4xl" | "6xl" (default: "6xl")
- `background` : string (color, default: "transparent")

### 6. `BusinessCard.astro`
**Props** :
- `variant` : "light" | "dark"
- `aspectRatio` : number (default: 1.75)

### 7. `Navigation.astro`
Navigation horizontale avec :
- Logo à gauche
- Menu items : Work, Studio, Contact
- Hover transitions sur les liens

---

## Layout Astro

### `BaseLayout.astro`
**Includes** :
- HTML head avec meta tags
- Google Fonts preconnect et imports :
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
  ```
- Tailwind CSS (Astro integration)
- CSS custom properties globales
- Body avec background Warm White (#F9F7F4)

**Structure** :
```astro
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Foxyline.ai - Brand Identity</title>
    <!-- Google Fonts -->
    <!-- Tailwind -->
  </head>
  <body class="min-h-screen" style="background-color: var(--color-warm-white);">
    <slot />
  </body>
</html>
```

---

## Sections détaillées

### Section 1 : Header
- Max-width : 72rem (1152px)
- Padding : px-8, py-20 (mobile), py-32 (desktop)
- Contenu :
  - Logo (80x80px)
  - Wordmark (42px)
  - H1 : "Brand Identity System" (responsive: clamp(36px, 5vw, 64px))
  - Paragraphe de description
- Border-bottom : Natural Beige

### Section 2 : Design Philosophy
- Layout : 2 colonnes (stacked mobile, side-by-side tablet+)
- Left : Label de section + headline
- Right : Deux paragraphes de description
- Gap : 16 units (64px)

### Section 3 : Logo System (01)
- Grid 3 colonnes (responsive : md:grid-cols-3)
- Cards montrant variations du logo :
  - Lockup primaire (Icon + Wordmark)
  - Icon Mark seul
  - Wordmark seul
- Backgrounds variés : Forest, Beige, Copper, White
- Card de guidelines : clear space et minimum size

### Section 4 : Color System (02)
- Grid : 2 colonnes (mobile) → 3 colonnes (desktop)
- 6 ColorSwatch components
- 3 cards explicatives (Primary/Neutral/Accent)

### Section 5 : Typography (03)
- Démonstration de l'échelle typographique complète
- Specimens avec texte réel
- Showcase Outfit (multiple weights)
- Showcase JetBrains Mono

### Section 6 : Applications (04)
- Business Cards (2 variants)
- Website Header mockup
- Icon Variations (4 backgrounds différents)
- Pattern Application (SVG répété, 5% opacity)
- Email Signature
- Presentation Cover (aspect 16:10)

### Section 7 : Core Principles
- Background : Forest green (#1B3A2F)
- Texte blanc
- 3 colonnes (responsive)
- Icônes + titre + description :
  - **Minimal** : Carré
  - **Considered** : Lignes
  - **Human** : Cercle avec point
- Max-width : 896px (4xl)

### Section 8 : Footer
- Border-top : Natural Beige
- Flexbox : logo left, copyright right
- Responsive : stack mobile, row desktop

---

## Responsive Design

### Breakpoints
- **Mobile first**
- **md** : 768px (48rem)

### Patterns responsive
1. **Grids** :
   - `grid-cols-2` → `md:grid-cols-3`
   - `grid-cols-2` → `md:grid-cols-4`
   - Single column → `md:grid-cols-2`

2. **Flex Direction** :
   - `flex-col` → `md:flex-row`

3. **Spacing** :
   - `py-20` → `md:py-32`
   - `p-12` → `md:p-16`

4. **Typography fluide** :
   - H1 : `clamp(36px, 5vw, 64px)`

5. **Container widths** :
   - `max-w-3xl` : 768px (Header content)
   - `max-w-4xl` : 896px (Core principles)
   - `max-w-6xl` : 1152px (Main container)
   - Tous avec `mx-auto` pour centrer

---

## Interactions et animations

### Effets hover
- Color swatches : `transition-all hover:shadow-md`
- Navigation links : `transition-colors`
- Cards : Élévation shadow sur hover

### Transitions
- Timing : `cubic-bezier(0.4, 0, 0.2, 1)`, 150ms
- Appliqué à : colors, shadows, all

### Améliorations suggérées
- Smooth scroll behavior
- Intersection observer pour fade-in
- Focus states améliorés (accessibility)
- Print stylesheet

---

## Stack technique Astro

### Configuration requise
- **Astro** : v5.x+
- **Tailwind CSS** : Integration Astro
- **TypeScript** : Optionnel mais recommandé

### Intégrations Astro
```bash
npm install @astrojs/tailwind
```

### Structure de fichiers recommandée
```
/src
  /components
    - Logo.astro
    - ColorSwatch.astro
    - TypeSpecimen.astro
    - Card.astro
    - Section.astro
    - BusinessCard.astro
    - Navigation.astro
  /layouts
    - BaseLayout.astro
  /pages
    - index.astro
  /styles
    - global.css (custom properties, Tailwind layers)
```

---

## Optimisations

### Performance
- Google Fonts avec `display=swap`
- Inline SVG (pas d'images externes)
- CSS custom properties pour éviter répétition inline styles
- Lazy load sections si nécessaire

### SEO
- Meta tags appropriés
- Semantic HTML5
- Alt text sur éléments visuels
- Structured data pour organisation

### Accessibilité
- Contrast ratios conformes WCAG
- ARIA labels où nécessaire
- Focus states visibles
- Navigation clavier
- Screen reader friendly

---

## Contenu texte à intégrer

### Header
**H1** : "Brand Identity System"

**Description** :
"Foxyline is a web design agency that creates digital experiences with intention and clarity. Our brand identity reflects our commitment to thoughtful design that connects with people."

### Design Philosophy
"Foxyline's design philosophy centers on creating digital experiences that feel both sophisticated and approachable. We believe in the power of restraint—using natural materials, warm tones, and geometric precision to craft interfaces that breathe.

Every element serves a purpose. Our visual language draws inspiration from nature's patterns and architectural minimalism, creating a foundation that's both timeless and distinctly modern."

### Color System - Philosophie
**Primary** : "Forest green anchors our palette, bringing natural depth and sophisticated presence to every touchpoint."

**Neutral** : "Natural beige creates warmth and breathing room, allowing content to shine while maintaining visual comfort."

**Accent** : "Copper adds considered warmth, drawing attention without demanding it—perfect for calls-to-action and key moments."

### Core Principles
**Minimal** : "Every element earns its place. We remove until only the essential remains, creating clarity through intentional restraint."

**Considered** : "Design decisions are thoughtful, never arbitrary. Each choice supports both user needs and brand expression."

**Human** : "Technology should feel warm, not cold. Our designs prioritize connection and understanding over pure efficiency."

### Footer
"© 2025 Foxyline.ai — Premium web design with purpose"

---

## Notes d'implémentation

### Préserver absolument
1. Coordonnées SVG exactes du logo (copier depuis HTML source)
2. Couleurs exactes (hex codes)
3. Échelle typographique précise
4. Système d'espacement (multiples de 4px)
5. Breakpoints responsive

### À éviter
- Modifier les proportions du logo
- Ajouter des emojis (sauf demande explicite)
- Créer des fichiers markdown supplémentaires non demandés
- Modifier le système de couleurs
- Changer les weights de fonts

### Best practices Astro
- Utiliser les composants Astro (pas de framework JS nécessaire pour cette page statique)
- Props typés avec TypeScript
- Slots pour flexibilité
- CSS scoped dans components
- Global styles dans BaseLayout

---

## Checklist de développement

- [ ] Setup projet Astro avec Tailwind
- [ ] Créer BaseLayout avec fonts et custom properties
- [ ] Développer composant Logo avec SVG exact
- [ ] Créer tous les composants listés
- [ ] Implémenter page index.astro avec toutes les sections
- [ ] Tester responsive sur mobile/tablet/desktop
- [ ] Vérifier hover states et transitions
- [ ] Audit accessibilité
- [ ] Test performance (Lighthouse)
- [ ] Validation HTML/CSS
- [ ] Cross-browser testing

---

## Ressources

- **Figma Export** : `/resources/figma.html` (référence source)
- **Google Fonts** : [Outfit](https://fonts.google.com/specimen/Outfit), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Tailwind Docs** : [tailwindcss.com](https://tailwindcss.com)
- **Astro Docs** : [docs.astro.build](https://docs.astro.build)

---

**Date de création** : 2025-11-03
**Version** : 1.0
**Status** : Spécifications complètes prêtes pour développement
