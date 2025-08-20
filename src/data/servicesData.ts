import { Scissors, Users, Heart, Palette, Sparkles, Star } from 'lucide-react';

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
    id: 'damske-kadernctvi',
    title: 'Dámské kadeřnictví',
    description: 'Střihy, mytí, foukaná a styling pro dámy',
    icon: Scissors,
    features: [
      'Střihy pro všechny délky vlasů',
      'Mytí a foukaná',
      'Styling a žehlení',
      'Zastřižení ofiny'
    ],
    price: 'od 150 Kč'
  },
  {
    id: 'panske-kadernctvi',
    title: 'Pánské kadeřnictví',
    description: 'Pánské střihy a úprava vousů',
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
    id: 'detske-kadernctvi',
    title: 'Dětské kadeřnictví',
    description: 'Dětské střihy',
    icon: Heart,
    features: [
      'Dětské střihy',
      'Mytí vlasů',
      'Styling',
      'Trpělivý přístup'
    ],
    price: 'od 200 Kč'
  },
  {
    id: 'barveni-melirovani',
    title: 'Barvení a melírování',
    description: 'Barvení, odbarvování a melírování vlasů',
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
    id: 'pece-vlasy',
    title: 'Péče o vlasy',
    description: 'Regenerace a ošetření vlasů',
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
    id: 'spolecenske-ucesy',
    title: 'Společenské účesy',
    description: 'Společenské a svatební účesy',
    icon: Star,
    features: [
      'Společenské účesy',
      'Svatební účesy',
      'Vodová ondulace',
      'Natáčení vlasů'
    ],
    price: 'od 500 Kč'
  }
];