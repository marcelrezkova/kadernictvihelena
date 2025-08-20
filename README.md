# Kadeřnictví POHODA - Helena Bošínová

Moderní webová stránka pro kadeřnictví POHODA v Liberci.

## 🚀 Nasazení na Netlify

### Rychlé nasazení:
1. Nahraj celou složku projektu na Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Node version: 18

### Nebo pomocí Git:
1. Nahraj projekt na GitHub
2. Připoj GitHub repo k Netlify
3. Automatické nasazení při každém commitu

## 📁 Struktura projektu

```
├── src/
│   ├── components/     # React komponenty
│   ├── hooks/         # Custom hooks
│   ├── data/          # Data pro služby a galerii
│   └── services/      # API služby (Google Calendar)
├── public/            # Statické soubory
├── dist/              # Build výstup
├── netlify.toml       # Netlify konfigurace
└── _redirects         # SPA routing
```

## 🔧 Konfigurace

### Environment Variables (pro Google integrace):
```
REACT_APP_GOOGLE_API_KEY=your_api_key
REACT_APP_GOOGLE_CLIENT_ID=your_client_id
REACT_APP_GOOGLE_CALENDAR_ID=primary
REACT_APP_GOOGLE_MAPS_API_KEY=your_maps_key
```

## 📞 Kontakt

Helena Bošínová  
Kadeřnice a kosmetická poradkyně MK  
Kadeřnictví POHODA  
Moskevská 637, Liberec  
Tel.: 739 469 932

## 🛠️ Technologie

- React 18 + TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
- Framer Motion (animace)

## 📋 Funkce

- ✅ Responzivní design
- ✅ Tmavý/světlý režim
- ✅ Rezervační formulář
- ✅ Galerie před/po
- ✅ Kompletní ceník
- ✅ Kontaktní formulář
- 🔄 Google Calendar integrace (připraveno)
- 🔄 Google Maps integrace (připraveno)

## 🚀 Spuštění lokálně

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
npm run preview
```