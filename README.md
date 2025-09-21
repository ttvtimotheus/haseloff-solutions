# Haseloff Software Solutions

Eine moderne Portfolio-Website für Haseloff Software Solutions, entwickelt mit Next.js 15, TypeScript und Tailwind CSS.

## Features

- 🌐 **Mehrsprachigkeit**: Deutsch und Englisch mit automatischer Browser-Erkennung
- 🎨 **Pixel-Perfect Design**: Angelehnt an das kantige Logo mit dem "fehlenden Pixel" Motiv
- ⚡ **Performance**: Optimiert für Lighthouse Score 90+
- 📱 **Responsive**: Vollständig responsiv von 320px bis 1440px+
- ♿ **Accessibility**: ARIA-Labels, semantisches HTML, Keyboard-Navigation
- 🔒 **Type-Safe**: Vollständig typisiert mit TypeScript
- 🎯 **SEO-Optimiert**: Meta-Tags, Open Graph, strukturierte Daten

## Technologie-Stack

- **Framework**: Next.js 15 mit App Router
- **Sprache**: TypeScript (strict mode)
- **Styling**: Tailwind CSS mit Custom Design System
- **Internationalisierung**: next-intl
- **Font**: Space Grotesk (Display) + Inter (Body)
- **Animationen**: Framer Motion kompatible CSS Animationen

## Installation

```bash
# Abhängigkeiten installieren
npm install
# oder
yarn install
# oder
pnpm install
```

## Entwicklung

```bash
# Entwicklungsserver starten
npm run dev
# oder
yarn dev
# oder
pnpm dev
```

Die Anwendung ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Build

```bash
# Production Build erstellen
npm run build
# oder
yarn build
# oder
pnpm build

# Production Server starten
npm run start
# oder
yarn start
# oder
pnpm start
```

## Projektstruktur

```
src/
├── app/                  # Next.js App Router
│   ├── [locale]/        # Lokalisierte Routen
│   │   ├── layout.tsx   # Root Layout
│   │   ├── page.tsx     # Homepage
│   │   ├── kontakt/     # Kontaktseite
│   │   ├── impressum/   # Impressum
│   │   └── datenschutz/ # Datenschutz
│   └── api/             # API Routes
│       └── contact/     # Kontaktformular Endpoint
├── components/          # React Komponenten
│   ├── PixelButton.tsx  # Signature Button mit Pixel-Effekt
│   ├── PixelCard.tsx    # Card mit fehlendem Pixel
│   ├── GridBackground.tsx # Animiertes Grid
│   └── ...
├── lib/                 # Utilities und Daten
│   ├── utils.ts        # Helper Funktionen
│   └── projects.ts     # Projekt-Daten
├── messages/           # Übersetzungen
│   ├── de.json        # Deutsche Texte
│   └── en.json        # Englische Texte
├── i18n/              # Internationalisierung
│   ├── request.ts     # i18n Config
│   └── navigation.ts  # Navigation Helper
└── styles/            # Global Styles
    └── globals.css    # Tailwind und Custom CSS
```

## Design System

### Farben
- **Primary**: Schwarz (#000000)
- **Secondary**: Blau (#2563eb)
- **Accent**: Türkis (#06b6d4)
- **Signal**: Orange (sparsam eingesetzt)

### Typografie
- **Headlines**: Space Grotesk Bold
- **Body**: Inter

### Komponenten
- **PixelButton**: Buttons mit abgeschnittener Ecke
- **PixelCard**: Cards mit "fehlendem Pixel"
- **GridBackground**: Animiertes Pixel-Grid

## Performance

Die Website ist optimiert für:
- Lighthouse Performance Score: 90+
- Lighthouse Best Practices: 90+
- First Contentful Paint < 1.5s
- Cumulative Layout Shift < 0.1

## Browser-Unterstützung

- Chrome (letzten 2 Versionen)
- Firefox (letzten 2 Versionen)
- Safari (letzten 2 Versionen)
- Edge (letzten 2 Versionen)

## Lizenz

© 2024 Haseloff Software Solutions. Alle Rechte vorbehalten.
