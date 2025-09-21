## Haseloff Software Solutions – Portfolio

Farbiges, charakterstarkes Portfolio mit Oversized Typography, gebaut mit Next.js 15 (App Router), TypeScript, Tailwind CSS v4 und next-intl.

### Stack
- Next.js 15 (App Router unter `src/app/`)
- TypeScript (strict)
- Tailwind CSS v4 (Theming via `@theme` Tokens in `src/styles/globals.css`)
- next-intl (i18n, automatische Locale-Erkennung per Cookie/`Accept-Language`, Fallback: `en`)
- Framer Motion (Microinteractions/Parallax, `prefers-reduced-motion`-freundlich)

### Entwicklung

```bash
pnpm dev
```

Öffne http://localhost:3000

### Produktion

```bash
pnpm build
pnpm start
```

### Linting & Formatierung

```bash
pnpm lint
pnpm format
```

### Struktur

```
src/
  app/
    layout.tsx
    page.tsx
    impressum/page.tsx
    datenschutz/page.tsx
    kontakt/page.tsx
    api/locale/route.ts
    api/contact/route.ts
    robots.ts
    sitemap.ts
  components/
    Header.tsx, Footer.tsx, Section.tsx, Hero.tsx, Projects.tsx,
    Services.tsx, Philosophy.tsx, ContactForm.tsx, Badge.tsx, Button.tsx,
    NoiseLayer.tsx, LocaleToggle.tsx, HeroMotion.tsx
  lib/
    projects.ts, utils.ts
  messages/
    de.json, en.json
  styles/
    globals.css
```

### i18n
- Locale wird aus Cookie `locale` gelesen, sonst aus `Accept-Language` (de/en, Fallback `en`).
- Manuelle Umschaltung im Header (POST an `/api/locale`).
- `html lang` wird serverseitig korrekt gesetzt.

### Inhalte
- Projekte: `src/lib/projects.ts` – hier echte Projekteinträge ergänzen (keine Beispiel-/Dummy-Daten).
- Rechtliches: `src/app/impressum`, `src/app/datenschutz`.
- Kontakt: Formular sendet an `/api/contact` mit ARIA Live-Feedback und Validierung (progressive Enhancement), alternativ `mailto`-Link.

### Designhinweise
- Nur Light Mode. Farben: Indigo (Primär), Türkis (Sekundär), warmes Orange (Akzent).
- Oversized Headlines per fluiden Clamp-Skalen.
- Glows/Verläufe/Noise via Utility-Klassen (`.bg-hero`, `.bg-noise`).

### Hinweise
- Fonts: System-Stack mit Fallbacks. Optional können später lokale Schriften (mit `font-display: swap`) eingebunden werden.
