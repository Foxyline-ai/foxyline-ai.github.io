# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Foxyline website - a multilingual marketing/portfolio site built with Astro, Tailwind CSS, and i18next. The site showcases web design services with a modern, animated UI featuring custom branding ("fox" theme with orange accents).

**Tech Stack:**
- Astro 5.14.5 (Static Site Generator)
- Tailwind CSS for styling
- i18next for internationalization (en, fr, nl)
- AOS (Animate on Scroll) for animations
- TypeScript

**Site:** https://foxyline.ai

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- [command]
```

## Architecture

### Internationalization (i18n)

The site uses a prefix-based routing system for all locales including the default:
- `/en/` - English (default locale, but prefixed)
- `/fr/` - French
- `/nl/` - Dutch

**Key files:**
- `src/i18n/config.ts` - Central translation dictionary and i18next setup
- `astro.config.mjs` - i18n routing configuration

**Translation system:**
- All translations stored in `src/i18n/config.ts` as nested objects under `ui.en`, `ui.fr`, `ui.nl`
- Use the `t()` helper function: `t('nav.services', lang)`
- Translation keys follow dot notation: `'hero.title'`, `'services.showcase.title'`, etc.

### Page Structure

Pages are organized by language under `src/pages/[lang]/`:
```
src/pages/
├── index.astro           # Root redirect
├── en/
│   ├── index.astro       # Homepage
│   ├── services/
│   ├── portfolio/
│   └── contact.astro
├── fr/                   # Same structure
└── nl/                   # Same structure
```

Each language page imports the same components but passes the appropriate `lang` prop.

### Components

Core components in `src/components/`:
- `Layout.astro` - Main layout wrapper (in `src/layouts/`)
- `Navigation.astro` - Header with language switcher
- `Footer.astro` - Site footer
- `Welcome.astro` - Hero/landing section
- `FoxDecorations.astro` - Animated fox-themed SVG decorations
- `LanguagePicker.astro` - Language selector dropdown

All components accept a `lang` prop of type `Language` for i18n.

### Styling & Design System

**Custom color palette** (defined in `tailwind.config.mjs`):
- `fox` - Primary brand orange (#FF6B35)
- `matrix` - Dark blue-black backgrounds (#1A1F2C)
- `modern` - Light gray tones
- `neon` - Cyan accents (#35D0FF)
- `accent` - Purple highlights (#8B5CF6)

**Typography:**
- Headings: Space Grotesk Variable
- Body: Geist Sans

**Custom utilities** (in `Layout.astro` global styles):
- `.gradient-text` - Animated gradient text
- `.glass-card` - Glassmorphism effect
- `.hover-lift` - Hover animation
- `.neon-glow` - Pulsing glow animation
- `.mesh-overlay` - Subtle mesh pattern

**Animations:**
- AOS library initialized in Layout.astro
- Custom Tailwind animations: `gradient`, `float`, `dash`, `glow`

### Assets

- `public/` - Static assets (logos, favicon)
- `src/assets/` - Processed images (portfolio screenshots)

## Deployment

The site is configured for GitHub Pages deployment:
- Built to `./dist/`
- Sitemap integration enabled
- Base URL: `https://foxyline.ai`

## Adding New Content

**New page:**
1. Create page in all three language folders: `src/pages/en/`, `src/pages/fr/`, `src/pages/nl/`
2. Add translations to `src/i18n/config.ts` under all three language objects
3. Update navigation in `Navigation.astro` if needed

**New translation keys:**
- Add to all three language objects in `src/i18n/config.ts` (en, fr, nl)
- Follow existing dot notation pattern
- Arrays are supported for lists (e.g., `'services.showcase.features'`)
