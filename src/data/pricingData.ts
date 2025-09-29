import { Video as LucideIcon } from 'lucide-react';

export interface PricingService {
  name: string;
  price: string;
  duration?: string;
  popular?: boolean;
}

export interface PricingCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  services: PricingService[];
}

export const pricingCategories: PricingCategory[] = [
  {
    id: 'damske',
    title: 'Dámské kadeřnictví',
    icon: '✂️',
    color: 'from-pink-500 to-rose-500',
    description: 'Kompletní péče o dámské vlasy',
    services: [
      { name: 'Střih krátké vlasy', price: '150 Kč', duration: '30 min' },
      { name: 'Střih polodlouhé vlasy', price: '160 Kč', duration: '30 min' },
      { name: 'Střih dlouhé vlasy', price: '190 Kč', duration: '30 min' },
      { name: 'Top/mix střih krátké vlasy', price: '180 Kč', duration: '30 min' },
      { name: 'Top/mix střih polodlouhé vlasy', price: '210 Kč', duration: '30 min' },
      { name: 'Top/mix střih dlouhé vlasy', price: '240 Kč', duration: '30 min' },
      { name: 'Střih na sucho krátké vlasy', price: '250 Kč', duration: '30 min' },
      { name: 'Střih na sucho polodlouhé vlasy', price: '280 Kč', duration: '30 min' },
      { name: 'Střih na sucho dlouhé vlasy', price: '290 Kč', duration: '30 min' },
      { name: 'Komplet krátké vlasy (mytí + střih + foukaná)', price: '420 Kč', duration: '60 min', popular: true },
      { name: 'Komplet polodlouhé vlasy', price: '480 Kč', duration: '60 min', popular: true },
      { name: 'Komplet dlouhé vlasy', price: '570 Kč', duration: '60 min', popular: true },
      { name: 'Mytí + foukaná krátké vlasy', price: '280 Kč', duration: '45 min' },
      { name: 'Mytí + foukaná polodlouhé vlasy', price: '330 Kč', duration: '45 min' },
      { name: 'Mytí + foukaná dlouhé vlasy', price: '410 Kč', duration: '45 min' },
      { name: 'Žehlení krátké vlasy', price: '80 Kč', duration: '30 min' },
      { name: 'Žehlení polodlouhé vlasy', price: '100 Kč', duration: '30 min' },
      { name: 'Žehlení dlouhé vlasy', price: '120 Kč', duration: '30 min' },
      { name: 'Styling (gel, lak, vosk)', price: '40 Kč', duration: '10 min' },
      { name: 'Masáž hlavy', price: '50 Kč', duration: '15 min' }
    ]
  },
  {
    id: 'barveni',
    title: 'Barvení a melírování',
    icon: '🎨',
    color: 'from-purple-500 to-indigo-500',
    description: 'Profesionální barvení všech typů',
    services: [
      { name: 'Melír přes čepici', price: '290 Kč', duration: '90 min' },
      { name: 'Melír krátké vlasy', price: '500-590 Kč', duration: '120 min', popular: true },
      { name: 'Melír polodlouhé vlasy', price: '600-700 Kč', duration: '120 min', popular: true },
      { name: 'Melír dlouhé vlasy', price: '750-850 Kč', duration: '120 min', popular: true },
      { name: 'Částečný melír krátké vlasy', price: '300 Kč', duration: '90 min' },
      { name: 'Částečný melír polodlouhé vlasy', price: '500 Kč', duration: '90 min' },
      { name: 'Částečný melír dlouhé vlasy', price: '600 Kč', duration: '90 min' },
      { name: 'Barevný melír krátké vlasy', price: '550 Kč', duration: '120 min' },
      { name: 'Barevný melír polodlouhé vlasy', price: '600-700 Kč', duration: '120 min' },
      { name: 'Barevný melír dlouhé vlasy', price: '750-850 Kč', duration: '120 min' },
      { name: 'Barva odrost krátké vlasy', price: '310 Kč', duration: '90 min' },
      { name: 'Barva odrost polodlouhé vlasy', price: '330 Kč', duration: '90 min' },
      { name: 'Barva odrost dlouhé vlasy', price: '380 Kč', duration: '90 min' },
      { name: 'Kombinované barvení krátké vlasy', price: '500 Kč', duration: '150 min' },
      { name: 'Kombinované barvení polodlouhé vlasy', price: '600 Kč', duration: '150 min' },
      { name: 'Kombinované barvení dlouhé vlasy', price: '750-850 Kč', duration: '150 min' },
      { name: 'Přeliv/barva krátké vlasy', price: '400 Kč', duration: '120 min' },
      { name: 'Přeliv/barva polodlouhé vlasy', price: '500 Kč', duration: '120 min' },
      { name: 'Přeliv/barva dlouhé vlasy', price: '600 Kč', duration: '120 min' },
      { name: 'Stahování barvy krátké vlasy', price: '500 Kč', duration: '120 min' },
      { name: 'Stahování barvy polodlouhé vlasy', price: '600 Kč', duration: '120 min' },
      { name: 'Stahování barvy dlouhé vlasy', price: '900 Kč', duration: '120 min' },
      { name: 'Barevné tunely krátké vlasy', price: '100 Kč', duration: '30 min' },
      { name: 'Barevné tunely polodlouhé vlasy', price: '150 Kč', duration: '30 min' },
      { name: 'Barevné tunely dlouhé vlasy', price: '200 Kč', duration: '30 min' }
    ]
  },
  {
    id: 'pece',
    title: 'Péče a regenerace',
    icon: '💆‍♀️',
    color: 'from-green-500 to-emerald-500',
    description: 'Regenerační a keratinové ošetření',
    services: [
      { name: 'Keratinová kúra krátké vlasy', price: '250 Kč', duration: '90 min', popular: true },
      { name: 'Keratinová kúra polodlouhé vlasy', price: '350 Kč', duration: '90 min', popular: true },
      { name: 'Keratinová kúra dlouhé vlasy', price: '450 Kč', duration: '90 min', popular: true },
      { name: 'Regenerace krátké vlasy', price: '40 Kč', duration: '15 min' },
      { name: 'Regenerace polodlouhé vlasy', price: '50 Kč', duration: '15 min' },
      { name: 'Regenerace dlouhé vlasy', price: '60 Kč', duration: '15 min' },
      { name: 'Přípravek Powerplex', price: '50-100 Kč', duration: '30 min' },
      { name: 'Trvalá krátké vlasy', price: '380 Kč', duration: '120 min' },
      { name: 'Trvalá polodlouhé vlasy', price: '490 Kč', duration: '120 min' },
      { name: 'Trvalá dlouhé vlasy', price: '650 Kč', duration: '120 min' },
      { name: 'Narovnání vlasů krátké vlasy', price: '250 Kč', duration: '60 min' },
      { name: 'Narovnání vlasů polodlouhé vlasy', price: '400 Kč', duration: '60 min' },
      { name: 'Narovnání vlasů dlouhé vlasy', price: '550 Kč', duration: '60 min' }
    ]
  },
  {
    id: 'spolecenske',
    title: 'Společenské účesy',
    icon: '👑',
    color: 'from-amber-500 to-orange-500',
    description: 'Účesy pro speciální příležitosti',
    services: [
      { name: 'Společenské účesy dle náročnosti', price: '500-1000 Kč', duration: '60-90 min', popular: true },
      { name: 'Vodová krátké vlasy', price: '130 Kč', duration: '45 min' },
      { name: 'Vodová polodlouhé vlasy', price: '160 Kč', duration: '45 min' },
      { name: 'Vodová dlouhé vlasy', price: '180 Kč', duration: '45 min' },
      { name: 'Mytí vlasů krátké vlasy', price: '80 Kč', duration: '15 min' },
      { name: 'Mytí vlasů polodlouhé vlasy', price: '100 Kč', duration: '15 min' },
      { name: 'Mytí vlasů dlouhé vlasy', price: '130 Kč', duration: '15 min' },
      { name: 'Foukaná krátké vlasy', price: '150 Kč', duration: '30 min' },
      { name: 'Foukaná polodlouhé vlasy', price: '220 Kč', duration: '30 min' },
      { name: 'Foukaná dlouhé vlasy', price: '350 Kč', duration: '30 min' }
    ]
  },
  {
    id: 'panske',
    title: 'Pánské kadeřnictví',
    icon: '👨',
    color: 'from-blue-500 to-indigo-500',
    description: 'Klasické i moderní pánské střihy',
    services: [
      { name: 'Pánský střih', price: '250 Kč', duration: '30 min', popular: true },
      { name: 'Střih strojkem', price: '200 Kč', duration: '20 min' },
      { name: 'Moderní střih', price: '300 Kč', duration: '45 min' },
      { name: 'Úprava vousů', price: '110 Kč', duration: '15 min' },
      { name: 'Komplet (střih + mytí + sušení)', price: '400 Kč', duration: '45 min' },
      { name: 'Melír přes čepici', price: '350-480 Kč', duration: '90 min' },
      { name: 'Styling (vosk, gel, lak)', price: '50 Kč', duration: '10 min' }
    ]
  },
  {
    id: 'detske',
    title: 'Dětské kadeřnictví',
    icon: '👶',
    color: 'from-pink-400 to-purple-400',
    description: 'Šetrné střihy pro nejmenší',
    services: [
      { name: 'Dětský střih', price: '200 Kč', duration: '20 min', popular: true },
      { name: 'Mytí vlasů', price: '50 Kč', duration: '10 min' },
      { name: 'Styling', price: '30 Kč', duration: '10 min' }
    ]
  },
  {
    id: 'specialni',
    title: 'Speciální služby',
    icon: '⭐',
    color: 'from-violet-500 to-purple-500',
    description: 'Prodloužení vlasů a další speciální služby',
    services: [
      { name: 'Prodloužení vlasů dle náročnosti', price: '2500-4000 Kč', duration: '180-240 min' },
      { name: 'Sundávání nastavených vlasů', price: '700-2500 Kč', duration: '90-180 min' },
      { name: 'Zastřižení ofiny krátké vlasy', price: '60 Kč', duration: '15 min' },
      { name: 'Zastřižení ofiny polodlouhé vlasy', price: '60 Kč', duration: '15 min' },
      { name: 'Zastřižení ofiny dlouhé vlasy', price: '70 Kč', duration: '15 min' },
      { name: 'Příplatek za razantní změnu', price: '50-100 Kč', duration: '' },
      { name: 'Sušení krátké vlasy', price: '70 Kč', duration: '20 min' },
      { name: 'Sušení polodlouhé vlasy', price: '95 Kč', duration: '20 min' },
      { name: 'Sušení dlouhé vlasy', price: '110 Kč', duration: '20 min' }
    ]
  }
];

export const pricingInfo = {
  cancellation: {
    title: 'Rezervace a stornovací podmínky',
    description: 'Rezervace lze stornovat do 24 hodin před termínem zdarma. Později účtujeme 50% z ceny služby.',
    icon: '📅'
  },
  payment: {
    title: 'Platební možnosti',
    description: 'Přijímáme hotovost, platební karty i bezhotovostní převod. Stravenky bohužel nepřijímáme.',
    icon: '💳'
  },
  consultation: {
    title: 'Konzultace',
    description: 'První konzultace je vždy zdarma. Ceny jsou konečné včetně všech služeb.',
    icon: '💬'
  }
};