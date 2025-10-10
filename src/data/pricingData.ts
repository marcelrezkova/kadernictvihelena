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
    icon: '',
    color: 'from-pink-500 to-rose-500',
    description: 'Kompletní péče o dámské vlasy',
    services: [
      { name: 'Mytí, střih, foukání, styling – krátké vlasy', price: '430 Kč', duration: '60 min', popular: true },
      { name: 'Mytí, střih, foukání, styling – polodlouhé vlasy', price: '550 Kč', duration: '60 min', popular: true },
      { name: 'Mytí, střih, foukání, styling – dlouhé vlasy', price: '650 Kč', duration: '60 min', popular: true },
      { name: 'Mytí, foukání, styling – krátké vlasy', price: '300 Kč', duration: '45 min' },
      { name: 'Mytí, foukání, styling – polodlouhé vlasy', price: '370 Kč', duration: '45 min' },
      { name: 'Mytí, foukání, styling – dlouhé vlasy', price: '410 Kč', duration: '45 min' },
      { name: 'Mytí, střih, foukání, žehlení, styling – krátké vlasy', price: '450 Kč', duration: '75 min' },
      { name: 'Mytí, střih, foukání, žehlení, styling – polodlouhé vlasy', price: '580 Kč', duration: '75 min' },
      { name: 'Mytí, střih, foukání, žehlení, styling – dlouhé vlasy', price: '650 Kč', duration: '75 min' },
      { name: 'Mytí, foukání, žehlení, styling – krátké vlasy', price: '350 Kč', duration: '60 min' },
      { name: 'Mytí, foukání, žehlení, styling – polodlouhé vlasy', price: '400 Kč', duration: '60 min' },
      { name: 'Mytí, foukání, žehlení, styling – dlouhé vlasy', price: '440 Kč', duration: '60 min' },
      { name: 'Zastřižení ofiny', price: '70 Kč', duration: '15 min' },
      { name: 'Masáž hlavy', price: '70 Kč', duration: '15 min' }
    ]
  },
  {
    id: 'barveni',
    title: 'Barvení a melírování',
    icon: '',
    color: 'from-purple-500 to-indigo-500',
    description: 'Profesionální barvení všech typů',
    services: [
      { name: 'Melír – zesvětlení vlasů', price: '1000–2000 Kč', duration: '2,5–3,5 h', popular: true },
      { name: 'Folayage', price: '2000–4500 Kč', duration: '3–4,5 h', popular: true },
      { name: 'Balayage', price: '1300–2500 Kč', duration: '2–3,5 h' },
      { name: 'Mikromelír', price: '2500–4500 Kč', duration: '3–4,5 h' },
      { name: 'Freehand technika', price: '1500–3500 Kč', duration: '2–3,5 h' },
      { name: 'Melír přes čepici', price: '390 Kč', duration: '90 min' },
      { name: 'Melír – krátké vlasy', price: '500–590 Kč', duration: '120 min' },
      { name: 'Melír – polodlouhé vlasy', price: '600–700 Kč', duration: '120 min' },
      { name: 'Melír – dlouhé vlasy', price: '750–850 Kč', duration: '120 min' },
      { name: 'Částečný melír (vršek, strany) – krátké vlasy', price: '300 Kč', duration: '90 min' },
      { name: 'Částečný melír (vršek, strany) – polodlouhé vlasy', price: '500 Kč', duration: '90 min' },
      { name: 'Částečný melír (vršek, strany) – dlouhé vlasy', price: '600 Kč', duration: '90 min' },
      { name: 'Barevný melír – krátké vlasy', price: '650 Kč', duration: '120 min' },
      { name: 'Barevný melír – polodlouhé vlasy', price: '700–800 Kč', duration: '120 min' },
      { name: 'Barevný melír – dlouhé vlasy', price: '850–950 Kč', duration: '120 min' },
      { name: 'Barva odrost – krátké vlasy', price: '400 Kč', duration: '90 min' },
      { name: 'Kombinované barvení – krátké vlasy', price: '500 Kč', duration: '150 min' },
      { name: 'Kombinované barvení – polodlouhé vlasy', price: '600 Kč', duration: '150 min' },
      { name: 'Kombinované barvení – dlouhé vlasy', price: '750–850 Kč', duration: '150 min' },
      { name: 'Přeliv, barva – krátké vlasy', price: '400 Kč', duration: '120 min' },
      { name: 'Přeliv, barva – polodlouhé vlasy', price: '500 Kč', duration: '120 min' },
      { name: 'Přeliv, barva – dlouhé vlasy', price: '600 Kč', duration: '120 min' },
      { name: 'Stahování barvy – krátké vlasy', price: '500 Kč', duration: '120 min' },
      { name: 'Stahování barvy – polodlouhé vlasy', price: '600 Kč', duration: '120 min' },
      { name: 'Stahování barvy – dlouhé vlasy', price: '900 Kč', duration: '120 min' }
    ]
  },
  {
    id: 'pece',
    title: 'Péče o vlasy',
    icon: '',
    color: 'from-green-500 to-emerald-500',
    description: 'Regenerační a keratinové ošetření',
    services: [
      { name: 'Keratinová kúra – krátké vlasy', price: '250 Kč', duration: '90 min', popular: true },
      { name: 'Keratinová kúra – polodlouhé vlasy', price: '350 Kč', duration: '90 min', popular: true },
      { name: 'Keratinová kúra – dlouhé vlasy', price: '450 Kč', duration: '90 min', popular: true },
      { name: 'Trvalá – krátké vlasy', price: '580 Kč', duration: '120 min' },
      { name: 'Trvalá – polodlouhé vlasy', price: '690 Kč', duration: '120 min' },
      { name: 'Trvalá – dlouhé vlasy', price: '850 Kč', duration: '120 min' }
    ]
  },
  {
    id: 'spolecenske',
    title: 'Společenské účesy',
    icon: '',
    color: 'from-amber-500 to-orange-500',
    description: 'Účesy pro speciální příležitosti',
    services: [
      { name: 'Společenské účesy (dle náročnosti)', price: '500–1000 Kč', duration: '60–90 min', popular: true }
    ]
  },
  {
    id: 'panske',
    title: 'Pánské kadeřnictví',
    icon: '',
    color: 'from-blue-500 to-indigo-500',
    description: 'Klasické i moderní pánské střihy',
    services: [
      { name: 'Pánský střih', price: '280 Kč', duration: '30 min', popular: true },
      { name: 'Střih strojkem', price: '200 Kč', duration: '20 min' },
      { name: 'Úprava vousů', price: '160 Kč', duration: '15 min' },
      { name: 'Styling – vosk, gel, lak, lesk atd.', price: '50 Kč', duration: '10 min' },
      { name: 'Komplet – střih, mytí, sušení, mytí', price: '400 Kč', duration: '45 min' }
    ]
  },
  {
    id: 'detske',
    title: 'Dětské kadeřnictví',
    icon: '',
    color: 'from-pink-400 to-purple-400',
    description: 'Šetrné střihy pro nejmenší',
    services: [
      { name: 'Dětský střih', price: '250 Kč', duration: '20 min', popular: true }
    ]
  },
  {
    id: 'specialni',
    title: 'Speciální služby',
    icon: '',
    color: 'from-violet-500 to-purple-500',
    description: 'Příplatky a speciální služby',
    services: [
      { name: 'Příplatek za razantní změnu / dlouhé husté vlasy', price: '50–200 Kč' }
    ]
  }
];

export const pricingInfo = {
  cancellation: {
    title: 'Rezervace a storno podmínky',
    description: 'Rezervace lze stornovat do 24 hodin před termínem zdarma. Později účtujeme 50 % z ceny služby.',
    icon: ''
  },
  payment: {
    title: 'Platební možnosti',
    description: 'Přijímáme hotovost, platební karty i bezhotovostní převod.',
    icon: ''
  },
  consultation: {
    title: 'Konzultace',
    description: 'První konzultace je vždy zdarma. Ceny jsou konečné.',
    icon: ''
  }
};

