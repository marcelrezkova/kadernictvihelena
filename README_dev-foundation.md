# 🎨 Design Foundation - Usage Guide

## 📋 Přehled

Tento dokument popisuje design system foundation pro Kadeřnictví POHODA. Obsahuje design tokens, layout systém a základní komponenty pro konzistentní a přístupný vývoj.

## 🎯 Design Tokens

### Barvy

Všechny barvy jsou definovány jako CSS proměnné v `src/styles/theme.css`:

```css
/* Základní barvy */
--bg: #ffffff;           /* Pozadí */
--fg: #0f0f0f;          /* Text */
--muted: #6b7280;       /* Ztlumený text */
--border: #e5e7eb;      /* Ohraničení */

/* Brand barvy */
--brand: #ec4899;       /* Primární brand */
--brand-fg: #ffffff;    /* Text na brand pozadí */

/* Karty */
--card: #ffffff;        /* Pozadí karet */
--card-fg: #0f0f0f;     /* Text v kartách */
```

### Spacing

Konzistentní spacing škála:

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.5rem;   /* 24px */
--space-6: 2rem;     /* 32px */
```

### Typografie

Fluid typografie s clamp():

```css
--text-base: clamp(1rem, 1vw + 0.9rem, 1.125rem);
--text-lg: clamp(1.125rem, 1.2vw + 1rem, 1.25rem);
--text-xl: clamp(1.25rem, 1.5vw + 1.1rem, 1.5rem);
--text-2xl: clamp(1.5rem, 2.5vw + 1.2rem, 2.25rem);
```

## 📱 Breakpoints

```javascript
screens: {
  'sm': '480px',
  'md': '768px', 
  'lg': '1024px',
  'xl': '1280px',
}
```

## 🏗️ Layout System

### Container

```tsx
import { Container } from '@/components/ui/Container';

// Standardní container (80ch)
<Container>
  <p>Obsah</p>
</Container>

// Široký container (1280px)
<Container variant="wide">
  <p>Široký obsah</p>
</Container>
```

### Section

```tsx
import { Section } from '@/components/ui/Section';

// Základní sekce
<Section id="about">
  <Container>
    <h2>O nás</h2>
  </Container>
</Section>

// Sekce s variantami
<Section variant="alt" size="lg">
  <Container>
    <h2>Speciální sekce</h2>
  </Container>
</Section>
```

### 12-Column Grid

```css
/* CSS třídy */
.grid-12           /* 12-column grid */
.col-span-6        /* Zabere 6 sloupců */
.md:col-span-4     /* Na md+ zabere 4 sloupce */
```

```tsx
<div className="grid-12">
  <div className="col-span-12 md:col-span-6 lg:col-span-4">
    <Card>Obsah</Card>
  </div>
</div>
```

## 🧩 Komponenty

### Button

```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="lg">
  Primární tlačítko
</Button>

<Button variant="ghost" loading>
  Loading tlačítko
</Button>
```

**Varianty:** `primary`, `ghost`, `outline`, `success`, `warning`, `error`
**Velikosti:** `sm`, `default`, `lg`

### Card

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/Card';

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Nadpis karty</CardTitle>
    <CardDescription>Popis karty</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Obsah karty</p>
  </CardContent>
</Card>
```

### Navbar

```tsx
import { Navbar } from '@/components/ui/Navbar';

const navItems = [
  { label: 'Domů', href: '#home' },
  { label: 'O nás', href: '#about' },
];

<Navbar
  brand={<Logo />}
  items={navItems}
  actions={<ThemeToggle />}
/>
```

### Footer

```tsx
import { Footer } from '@/components/ui/Footer';

const sections = [
  {
    title: 'Navigace',
    links: [
      { label: 'O nás', href: '#about' },
      { label: 'Služby', href: '#services' },
    ],
  },
];

<Footer
  brand={<Brand />}
  sections={sections}
  bottom={<Copyright />}
/>
```

## 🎨 Utility Classes

### Layout

```css
.stack > * + * { margin-top: var(--space-4); }
.stack-sm > * + * { margin-top: var(--space-2); }
.stack-lg > * + * { margin-top: var(--space-6); }

.cluster { display: flex; flex-wrap: wrap; gap: var(--space-3); }
.flex-center { display: flex; align-items: center; justify-content: center; }
.flex-between { display: flex; align-items: center; justify-content: space-between; }
```

### Použití

```tsx
<div className="stack">
  <h2>Nadpis</h2>
  <p>Odstavec s automatickým marginem</p>
  <Button>Tlačítko</Button>
</div>

<div className="cluster">
  <Button>Tlačítko 1</Button>
  <Button>Tlačítko 2</Button>
</div>
```

## 🌙 Dark Mode

Dark mode se přepína pomocí `data-theme` atributu:

```tsx
import { useTheme } from '@/hooks/useTheme';

const { isDark, toggleTheme } = useTheme();

<Button onClick={toggleTheme}>
  {isDark ? <Sun /> : <Moon />}
</Button>
```

## ♿ Accessibility

### Focus States

Všechny interaktivní elementy mají viditelné focus stavy:

```css
:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### Skip Link

Automaticky přidán skip link pro klávesnicovou navigaci:

```tsx
<a href="#main-content" className="skip-link">
  Přejít na hlavní obsah
</a>
```

### ARIA Labels

```tsx
<Button 
  aria-label="Přepnout na tmavý režim"
  onClick={toggleTheme}
>
  <Moon />
</Button>
```

## 🚀 Best Practices

### Import Paths

```tsx
// ✅ Správně
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

// ❌ Špatně
import Button from '../ui/Button';
```

### ClassName Merge

```tsx
import { cn } from '@/utils/cn';

<Button className={cn('custom-class', isActive && 'active')}>
  Tlačítko
</Button>
```

### Semantic HTML

```tsx
// ✅ Správně
<Section as="main" id="content">
  <Container>
    <h1>Hlavní nadpis</h1>
  </Container>
</Section>

// ❌ Špatně
<div className="section">
  <div className="container">
    <div className="heading">Nadpis</div>
  </div>
</div>
```

## 📊 Performance

- Všechny CSS proměnné jsou definovány v `:root`
- Fluid typografie eliminuje layout shifts
- Komponenty jsou tree-shakeable
- Minimální bundle size díky CSS proměnným

## 🔧 Rozšíření

Pro přidání nových tokenů:

1. Přidej CSS proměnnou do `src/styles/theme.css`
2. Mapuj ji v `tailwind.config.js`
3. Použij v komponentách

```css
/* theme.css */
:root {
  --new-color: #123456;
}
```

```javascript
// tailwind.config.js
colors: {
  'new-color': 'var(--new-color)',
}
```

```tsx
// Komponenta
<div className="bg-new-color">
  Obsah
</div>
```