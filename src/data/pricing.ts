export interface PricingService {
  name: string;
  price: string;
  duration?: string;
  popular?: boolean;
  category: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
}

// Dámské služby
export const damskeSluzby: PricingService[] = [
  // Kompletní balíčky
  { name: 'Mytí, střih, foukání, styling – krátké vlasy', price: '430 Kč', duration: '60 min', category: 'damske', popular: true },
  { name: 'Mytí, střih, foukání, styling – polodlouhé vlasy', price: '550 Kč', duration: '60 min', category: 'damske', popular: true },
  { name: 'Mytí, střih, foukání, styling – dlouhé vlasy', price: '650 Kč', duration: '60 min', category: 'damske', popular: true },

  // Mytí a foukání
  { name: 'Mytí, foukání, styling – krátké vlasy', price: '300 Kč', duration: '45 min', category: 'damske' },
  { name: 'Mytí, foukání, styling – polodlouhé vlasy', price: '370 Kč', duration: '45 min', category: 'damske' },
  { name: 'Mytí, foukání, styling – dlouhé vlasy', price: '410 Kč', duration: '45 min', category: 'damske' },

  // Se žehlením
  { name: 'Mytí, střih, foukání, žehlení, styling – krátké vlasy', price: '450 Kč', duration: '75 min', category: 'damske' },
  { name: 'Mytí, střih, foukání, žehlení, styling – polodlouhé vlasy', price: '580 Kč', duration: '75 min', category: 'damske' },
  { name: 'Mytí, střih, foukání, žehlení, styling – dlouhé vlasy', price: '650 Kč', duration: '75 min', category: 'damske' },
  { name: 'Mytí, foukání, žehlení, styling – krátké vlasy', price: '350 Kč', duration: '60 min', category: 'damske' },
  { name: 'Mytí, foukání, žehlení, styling – polodlouhé vlasy', price: '400 Kč', duration: '60 min', category: 'damske' },
  { name: 'Mytí, foukání, žehlení, styling – dlouhé vlasy', price: '440 Kč', duration: '60 min', category: 'damske' },

  // Doplňkové
  { name: 'Zastřižení ofiny', price: '70 Kč', duration: '15 min', category: 'damske' },
  { name: 'Masáž hlavy', price: '70 Kč', duration: '15 min', category: 'damske' },
];

// Barvení a melíry
export const barveniSluzby: PricingService[] = [
  // Prémiové techniky
  { name: 'Melír – zesvětlení vlasů', price: '1000–2000 Kč', duration: '2,5–3,5 h', category: 'barveni', popular: true },
  { name: 'Folayage', price: '2000–4500 Kč', duration: '3–4,5 h', category: 'barveni', popular: true },
  { name: 'Balayage', price: '1300–2500 Kč', duration: '2–3,5 h', category: 'barveni' },
  { name: 'Mikromelír', price: '2500–4500 Kč', duration: '3–4,5 h', category: 'barveni' },
  { name: 'Freehand technika', price: '1500–3500 Kč', duration: '2–3,5 h', category: 'barveni' },

  // Standardní melíry dle délek
  { name: 'Melír přes čepici', price: '390 Kč', duration: '90 min', category: 'barveni' },
  { name: 'Melír – krátké vlasy', price: '500–590 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Melír – polodlouhé vlasy', price: '600–700 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Melír – dlouhé vlasy', price: '750–850 Kč', duration: '120 min', category: 'barveni' },

  { name: 'Částečný melír (vršek, strany) – krátké vlasy', price: '300 Kč', duration: '90 min', category: 'barveni' },
  { name: 'Částečný melír (vršek, strany) – polodlouhé vlasy', price: '500 Kč', duration: '90 min', category: 'barveni' },
  { name: 'Částečný melír (vršek, strany) – dlouhé vlasy', price: '600 Kč', duration: '90 min', category: 'barveni' },

  { name: 'Barevný melír – krátké vlasy', price: '650 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Barevný melír – polodlouhé vlasy', price: '700–800 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Barevný melír – dlouhé vlasy', price: '850–950 Kč', duration: '120 min', category: 'barveni' },

  // Barvy
  { name: 'Barva odrost – krátké vlasy', price: '400 Kč', duration: '90 min', category: 'barveni' },
  { name: 'Kombinované barvení – krátké vlasy', price: '500 Kč', duration: '150 min', category: 'barveni' },
  { name: 'Kombinované barvení – polodlouhé vlasy', price: '600 Kč', duration: '150 min', category: 'barveni' },
  { name: 'Kombinované barvení – dlouhé vlasy', price: '750–850 Kč', duration: '150 min', category: 'barveni' },
  { name: 'Přeliv, barva – krátké vlasy', price: '400 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Přeliv, barva – polodlouhé vlasy', price: '500 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Přeliv, barva – dlouhé vlasy', price: '600 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Stahování barvy – krátké vlasy', price: '500 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Stahování barvy – polodlouhé vlasy', price: '600 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Stahování barvy – dlouhé vlasy', price: '900 Kč', duration: '120 min', category: 'barveni' },
];

// Péče o vlasy
export const peceSluzby: PricingService[] = [
  { name: 'Keratinová kúra – krátké vlasy', price: '250 Kč', duration: '90 min', category: 'pece', popular: true },
  { name: 'Keratinová kúra – polodlouhé vlasy', price: '350 Kč', duration: '90 min', category: 'pece', popular: true },
  { name: 'Keratinová kúra – dlouhé vlasy', price: '450 Kč', duration: '90 min', category: 'pece', popular: true },

  { name: 'Trvalá – krátké vlasy', price: '580 Kč', duration: '120 min', category: 'pece' },
  { name: 'Trvalá – polodlouhé vlasy', price: '690 Kč', duration: '120 min', category: 'pece' },
  { name: 'Trvalá – dlouhé vlasy', price: '850 Kč', duration: '120 min', category: 'pece' },
];

// Společenské účesy
export const spolecenskeSluzby: PricingService[] = [
  { name: 'Společenské účesy (dle náročnosti)', price: '500–1000 Kč', duration: '60–90 min', category: 'spolecenske', popular: true },
];

// Speciální
export const specialniSluzby: PricingService[] = [
  { name: 'Příplatek za razantní změnu / dlouhé husté vlasy', price: '50–200 Kč', duration: '', category: 'specialni' },
];

// Pánské a dětské
export const panskeDetskeSluzby: PricingService[] = [
  // Pánské
  { name: 'Pánský střih', price: '280 Kč', duration: '30 min', category: 'panske', popular: true },
  { name: 'Střih strojkem', price: '200 Kč', duration: '20 min', category: 'panske' },
  { name: 'Úprava vousů', price: '160 Kč', duration: '15 min', category: 'panske' },
  { name: 'Styling – vosk, gel, lak, lesk atd.', price: '50 Kč', duration: '10 min', category: 'panske' },
  { name: 'Komplet – střih, mytí, sušení, mytí', price: '400 Kč', duration: '45 min', category: 'panske' },

  // Dětské
  { name: 'Dětský střih', price: '250 Kč', duration: '20 min', category: 'detske', popular: true },
];

// Všechny služby dohromady
export const allServices: PricingService[] = [
  ...damskeSluzby,
  ...barveniSluzby,
  ...peceSluzby,
  ...spolecenskeSluzby,
  ...specialniSluzby,
  ...panskeDetskeSluzby,
];

// Kategorie ceníku
export const pricingCategories: PricingCategory[] = [
  {
    id: 'damske',
    title: 'Dámské kadeřnictví',
    icon: '',
    color: 'from-pink-500 to-rose-500',
    description: 'Střihy, mytí, foukání a styling pro dámy'
  },
  {
    id: 'barveni',
    title: 'Barvení a melírování',
    icon: '',
    color: 'from-purple-500 to-indigo-500',
    description: 'Profesionální barvení a melírování všech typů'
  },
  {
    id: 'pece',
    title: 'Péče o vlasy',
    icon: '',
    color: 'from-green-500 to-emerald-500',
    description: 'Regenerační a keratinové ošetření'
  },
  {
    id: 'spolecenske',
    title: 'Společenské účesy',
    icon: '',
    color: 'from-amber-500 to-orange-500',
    description: 'Účesy pro speciální příležitosti'
  },
  {
    id: 'panske',
    title: 'Pánské kadeřnictví',
    icon: '',
    color: 'from-blue-500 to-indigo-500',
    description: 'Klasické i moderní pánské střihy'
  },
  {
    id: 'detske',
    title: 'Dětské kadeřnictví',
    icon: '',
    color: 'from-pink-400 to-purple-400',
    description: 'Šetrné střihy pro nejmenší'
  },
  {
    id: 'specialni',
    title: 'Speciální služby',
    icon: '',
    color: 'from-violet-500 to-purple-500',
    description: 'Příplatky a speciální služby'
  }
];

// Pomocné funkce
export const getServicesByCategory = (categoryId: string): PricingService[] => {
  return allServices.filter(service => service.category === categoryId);
};

export const searchServices = (searchTerm: string): PricingService[] => {
  const term = searchTerm.toLowerCase();
  return allServices.filter(service =>
    service.name.toLowerCase().includes(term) ||
    service.category.toLowerCase().includes(term)
  );
};

export const getPopularServices = (): PricingService[] => {
  return allServices.filter(service => service.popular);
};

