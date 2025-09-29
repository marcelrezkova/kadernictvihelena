import { Scissors, Users, Heart, Palette, Sparkles, Star, Zap, Crown } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  price?: string;
  category: 'damske' | 'panske' | 'detske' | 'barveni' | 'pece' | 'spolecenske' | 'specialni';
}

export const servicesData: Service[] = [
  // Dámské kadeřnictví
  {
    id: 'damske-strihy',
    title: 'Dámské střihy',
    description: 'Střihy pro všechny délky vlasů s mytím a stylingem',
    icon: Scissors,
    category: 'damske',
    features: [
      'Střih krátké vlasy (150 Kč)',
      'Střih polodlouhé vlasy (160 Kč)',
      'Střih dlouhé vlasy (190 Kč)',
      'Top/mix střih (+30 Kč)',
      'Dámský střih na sucho (+100 Kč)'
    ],
    price: 'od 150 Kč'
  },
  {
    id: 'damske-komplet',
    title: 'Kompletní služby',
    description: 'Mytí, střih, foukaná a styling',
    icon: Crown,
    category: 'damske',
    features: [
      'Mytí + střih + foukaná + styling',
      'Krátké vlasy (420 Kč)',
      'Polodlouhé vlasy (480 Kč)',
      'Dlouhé vlasy (570 Kč)',
      'S žehlením (+30-80 Kč)'
    ],
    price: 'od 420 Kč'
  },
  {
    id: 'damske-foukana',
    title: 'Foukaná a styling',
    description: 'Mytí, foukaná a styling bez střihu',
    icon: Sparkles,
    category: 'damske',
    features: [
      'Mytí + foukaná + styling',
      'Krátké vlasy (280 Kč)',
      'Polodlouhé vlasy (330 Kč)',
      'Dlouhé vlasy (410 Kč)',
      'Žehlení (+10-20 Kč)'
    ],
    price: 'od 280 Kč'
  },

  // Barvení a melírování
  {
    id: 'meliry',
    title: 'Melírování',
    description: 'Klasické a barevné melíry všech typů',
    icon: Palette,
    category: 'barveni',
    features: [
      'Melír přes čepici (290 Kč)',
      'Klasický melír (500-850 Kč)',
      'Částečný melír (300-600 Kč)',
      'Barevný melír (550-850 Kč)',
      'Podle délky vlasů'
    ],
    price: 'od 290 Kč'
  },
  {
    id: 'barveni',
    title: 'Barvení vlasů',
    description: 'Barvení, odbarvování a kombinované techniky',
    icon: Zap,
    category: 'barveni',
    features: [
      'Barva odrost (310-380 Kč)',
      'Kombinované barvení (500-850 Kč)',
      'Přeliv/barva (400-600 Kč)',
      'Stahování barvy (500-900 Kč)',
      'Barevné tunely (100-200 Kč)'
    ],
    price: 'od 310 Kč'
  },

  // Pánské kadeřnictví
  {
    id: 'panske-strihy',
    title: 'Pánské střihy',
    description: 'Klasické i moderní pánské střihy',
    icon: Users,
    category: 'panske',
    features: [
      'Pánský střih (250 Kč)',
      'Střih strojkem (200 Kč)',
      'Moderní střih (300 Kč)',
      'Komplet s mytím (400 Kč)',
      'Úprava vousů (110 Kč)'
    ],
    price: 'od 200 Kč'
  },
  {
    id: 'panske-meliry',
    title: 'Pánské melíry',
    description: 'Melírování pro pány',
    icon: Palette,
    category: 'panske',
    features: [
      'Melír přes čepici (350-480 Kč)',
      'Styling (50 Kč)',
      'Profesionální produkty',
      'Moderní techniky'
    ],
    price: 'od 350 Kč'
  },

  // Dětské kadeřnictví
  {
    id: 'detske-strihy',
    title: 'Dětské střihy',
    description: 'Šetrné střihy pro děti',
    icon: Heart,
    category: 'detske',
    features: [
      'Dětský střih (200 Kč)',
      'Mytí vlasů (50 Kč)',
      'Styling (30 Kč)',
      'Trpělivý přístup',
      'Bezpečné produkty'
    ],
    price: 'od 200 Kč'
  },

  // Péče o vlasy
  {
    id: 'pece-regenerace',
    title: 'Péče a regenerace',
    description: 'Keratinové kúry a regenerační ošetření',
    icon: Sparkles,
    category: 'pece',
    features: [
      'Keratinová kúra (250-450 Kč)',
      'Regenerace vlasů (40-60 Kč)',
      'Masáž hlavy (50 Kč)',
      'Přípravek Powerplex (50-100 Kč)',
      'Trvalá ondulace (380-650 Kč)'
    ],
    price: 'od 40 Kč'
  },

  // Společenské účesy
  {
    id: 'spolecenske-ucesy',
    title: 'Společenské účesy',
    description: 'Účesy pro speciální příležitosti',
    icon: Star,
    category: 'spolecenske',
    features: [
      'Společenské účesy (500-1000 Kč)',
      'Svatební účesy',
      'Vodová ondulace (130-180 Kč)',
      'Narovnání vlasů (250-550 Kč)',
      'Dle náročnosti'
    ],
    price: 'od 500 Kč'
  },

  // Speciální služby
  {
    id: 'specialni-sluzby',
    title: 'Speciální služby',
    description: 'Prodloužení vlasů a další speciální služby',
    icon: Crown,
    category: 'specialni',
    features: [
      'Prodloužení vlasů (2500-4000 Kč)',
      'Sundávání nastavených vlasů (700-2500 Kč)',
      'Zastřižení ofiny (60-70 Kč)',
      'Příplatek za změnu (+50-100 Kč)',
      'Individuální přístup'
    ],
    price: 'od 60 Kč'
  }
];

// Kategorie pro filtrování
export const serviceCategories = [
  { id: 'damske', label: 'Dámské kadeřnictví', icon: Scissors },
  { id: 'panske', label: 'Pánské kadeřnictví', icon: Users },
  { id: 'detske', label: 'Dětské kadeřnictví', icon: Heart },
  { id: 'barveni', label: 'Barvení a melíry', icon: Palette },
  { id: 'pece', label: 'Péče o vlasy', icon: Sparkles },
  { id: 'spolecenske', label: 'Společenské účesy', icon: Star },
  { id: 'specialni', label: 'Speciální služby', icon: Crown }
];

// Pomocná funkce pro získání služeb podle kategorie
export const getServicesByCategory = (category: string) => {
  return servicesData.filter(service => service.category === category);
};