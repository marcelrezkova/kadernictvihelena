import { Scissors, Sparkles, Heart, Zap, Star, Moon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  price?: string;
}

export const servicesData: Service[] = [
  {
    id: 'kadernictvi',
    title: 'Dámské kadeřnictví',
    description: 'Kompletní dámské kadeřnické služby s více než 20letou praxí',
    icon: Scissors,
    features: [
      'Dámské střihy všech délek',
      'Barvení, melírování, kombinované barvení',
      'Keratinové kúry a regenerace vlasů',
      'Společenské a svatební účesy'
    ],
    price: 'od 150 Kč'
  },
  {
    id: 'panske',
    title: 'Pánské kadeřnictví',
    description: 'Moderní pánské střihy a úprava vousů',
    icon: Sparkles,
    features: [
      'Klasické i moderní pánské střihy',
      'Střih strojkem',
      'Úprava vousů',
      'Kompletní služby včetně mytí'
    ],
    price: 'od 200 Kč'
  },
  {
    id: 'detske',
    title: 'Dětské kadeřnictví',
    description: 'Šetrné a trpělivé kadeřnictví pro nejmenší',
    icon: Heart,
    features: [
      'Dětské střihy',
      'Trpělivý přístup k dětem',
      'Bezpečné produkty',
      'Příjemné prostředí pro děti'
    ],
    price: 'od 200 Kč'
  },
  {
    id: 'barveni',
    title: 'Barvení vlasů',
    description: 'Profesionální barvení, melírování a odbarvování',
    icon: Zap,
    features: [
      'Melírování přes čepici i folií',
      'Barevné melíry a tunely',
      'Kombinované barvení',
      'Stahování a odbarvování'
    ],
    price: 'od 310 Kč'
  },
  {
    id: 'specialni',
    title: 'Speciální služby',
    description: 'Prodloužení vlasů, trvalé ondulace a další speciální úpravy',
    icon: Star,
    features: [
      'Prodloužení vlasů',
      'Trvalá ondulace',
      'Narovnání vlasů',
      'Sundávání nastavených vlasů'
    ],
    price: 'od 380 Kč'
  },
  {
    id: 'liceni',
    title: 'Líčení a kosmetika',
    description: 'Profesionální líčení a péče o pokožku',
    icon: Moon,
    features: [
      'Denní i večerní líčení',
      'Svatební makeup',
      'Péče o pokožku',
      'Poradenství pro celkovou vizáž'
    ],
    price: 'na dotaz'
  }
];