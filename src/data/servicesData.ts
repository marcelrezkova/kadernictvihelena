import { Scissors, Users, Palette, Sparkles, Star, Heart } from 'lucide-react';

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
    id: 'damske',
    title: 'Dámské kadeřnictví',
    description: 'Kompletní dámské kadeřnické služby pro všechny délky vlasů',
    icon: Scissors,
    features: [
      'Střihy pro krátké, polodlouhé i dlouhé vlasy',
      'Mytí, foukaná, styling',
      'Žehlení a vodová ondulace',
      'Společenské účesy'
    ],
    price: 'od 150 Kč'
  },
  {
    id: 'panske',
    title: 'Pánské kadeřnictví',
    description: 'Klasické i moderní pánské střihy a péče',
    icon: Users,
    features: [
      'Pánské střihy',
      'Moderní střihy',
      'Střih strojkem',
      'Úprava vousů'
    ],
    price: 'od 200 Kč'
  },
  {
    id: 'detske',
    title: 'Dětské kadeřnictví',
    description: 'Šetrné kadeřnictví pro nejmenší',
    icon: Heart,
    features: [
      'Dětské střihy',
      'Trpělivý přístup',
      'Příjemné prostředí',
      'Bezpečné produkty'
    ],
    price: 'od 200 Kč'
  },
  {
    id: 'barveni',
    title: 'Barvení a melírování',
    description: 'Profesionální barvení všech typů',
    icon: Palette,
    features: [
      'Melírování přes čepici i klasické',
      'Barevné melíry a tunely',
      'Kombinované barvení',
      'Stahování barvy'
    ],
    price: 'od 290 Kč'
  },
  {
    id: 'pece',
    title: 'Péče o vlasy',
    description: 'Regenerační a ošetřující procedury',
    icon: Sparkles,
    features: [
      'Keratinová kúra',
      'Regenerace vlasů',
      'Masáž hlavy',
      'Přípravek Powerplex'
    ],
    price: 'od 40 Kč'
  },
  {
    id: 'specialni',
    title: 'Speciální služby',
    description: 'Pokročilé kadeřnické techniky',
    icon: Star,
    features: [
      'Prodloužení vlasů',
      'Trvalá ondulace',
      'Narovnání vlasů',
      'Sundávání nastavených vlasů'
    ],
    price: 'od 380 Kč'
  }
];