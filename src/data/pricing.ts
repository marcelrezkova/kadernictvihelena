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

// Dámské služby podle damsky_cenik.csv
export const damskeSluzby: PricingService[] = [
  // Kompletní služby
  { name: 'Mytí, střih, foukaná, styling - krátké vlasy', price: '420 Kč', duration: '60 min', category: 'damske', popular: true },
  { name: 'Mytí, střih, foukaná, styling - polodlouhé vlasy', price: '480 Kč', duration: '60 min', category: 'damske', popular: true },
  { name: 'Mytí, střih, foukaná, styling - dlouhé vlasy', price: '570 Kč', duration: '60 min', category: 'damske', popular: true },
  
  // Mytí, foukaná, styling
  { name: 'Mytí, foukaná, styling - krátké vlasy', price: '280 Kč', duration: '45 min', category: 'damske' },
  { name: 'Mytí, foukaná, styling - polodlouhé vlasy', price: '330 Kč', duration: '45 min', category: 'damske' },
  { name: 'Mytí, foukaná, styling - dlouhé vlasy', price: '410 Kč', duration: '45 min', category: 'damske' },
  
  // S žehlením
  { name: 'Mytí, střih, foukaná, žehlení, styling - krátké vlasy', price: '450 Kč', duration: '75 min', category: 'damske' },
  { name: 'Mytí, střih, foukaná, žehlení, styling - polodlouhé vlasy', price: '530 Kč', duration: '75 min', category: 'damske' },
  { name: 'Mytí, střih, foukaná, žehlení, styling - dlouhé vlasy', price: '650 Kč', duration: '75 min', category: 'damske' },
  
  { name: 'Mytí, foukaná, žehlení, styling - krátké vlasy', price: '290 Kč', duration: '60 min', category: 'damske' },
  { name: 'Mytí, foukaná, žehlení, styling - polodlouhé vlasy', price: '350 Kč', duration: '60 min', category: 'damske' },
  { name: 'Mytí, foukaná, žehlení, styling - dlouhé vlasy', price: '440 Kč', duration: '60 min', category: 'damske' },
  
  // Střihy
  { name: 'Střih - krátké vlasy', price: '150 Kč', duration: '30 min', category: 'damske' },
  { name: 'Střih - polodlouhé vlasy', price: '160 Kč', duration: '30 min', category: 'damske' },
  { name: 'Střih - dlouhé vlasy', price: '190 Kč', duration: '30 min', category: 'damske' },
  
  { name: 'Top, mix střih - krátké vlasy', price: '180 Kč', duration: '30 min', category: 'damske' },
  { name: 'Top, mix střih - polodlouhé vlasy', price: '210 Kč', duration: '30 min', category: 'damske' },
  { name: 'Top, mix střih - dlouhé vlasy', price: '240 Kč', duration: '30 min', category: 'damske' },
  
  { name: 'Dámský střih na sucho - krátké vlasy', price: '250 Kč', duration: '30 min', category: 'damske' },
  { name: 'Dámský střih na sucho - polodlouhé vlasy', price: '280 Kč', duration: '30 min', category: 'damske' },
  { name: 'Dámský střih na sucho - dlouhé vlasy', price: '290 Kč', duration: '30 min', category: 'damske' },
  
  // Ostatní služby
  { name: 'Zastřižení ofiny - krátké vlasy', price: '60 Kč', duration: '15 min', category: 'damske' },
  { name: 'Zastřižení ofiny - polodlouhé vlasy', price: '60 Kč', duration: '15 min', category: 'damske' },
  { name: 'Zastřižení ofiny - dlouhé vlasy', price: '70 Kč', duration: '15 min', category: 'damske' },
  
  { name: 'Styling (gel, guma, lak, vosk, lesk, tužidlo)', price: '40 Kč', duration: '10 min', category: 'damske' },
  { name: 'Foukaná - krátké vlasy', price: '150 Kč', duration: '30 min', category: 'damske' },
  { name: 'Foukaná - polodlouhé vlasy', price: '220 Kč', duration: '30 min', category: 'damske' },
  { name: 'Foukaná - dlouhé vlasy', price: '350 Kč', duration: '30 min', category: 'damske' },
  
  { name: 'Vodová - krátké vlasy', price: '130 Kč', duration: '45 min', category: 'damske' },
  { name: 'Vodová - polodlouhé vlasy', price: '160 Kč', duration: '45 min', category: 'damske' },
  { name: 'Vodová - dlouhé vlasy', price: '180 Kč', duration: '45 min', category: 'damske' },
  
  { name: 'Žehlení - krátké vlasy', price: '80 Kč', duration: '30 min', category: 'damske' },
  { name: 'Žehlení - polodlouhé vlasy', price: '100 Kč', duration: '30 min', category: 'damske' },
  { name: 'Žehlení - dlouhé vlasy', price: '120 Kč', duration: '30 min', category: 'damske' },
  
  { name: 'Sušení - krátké vlasy', price: '70 Kč', duration: '20 min', category: 'damske' },
  { name: 'Sušení - polodlouhé vlasy', price: '95 Kč', duration: '20 min', category: 'damske' },
  { name: 'Sušení - dlouhé vlasy', price: '110 Kč', duration: '20 min', category: 'damske' },
  
  { name: 'Mytí vlasů - krátké vlasy', price: '80 Kč', duration: '15 min', category: 'damske' },
  { name: 'Mytí vlasů - polodlouhé vlasy', price: '100 Kč', duration: '15 min', category: 'damske' },
  { name: 'Mytí vlasů - dlouhé vlasy', price: '130 Kč', duration: '15 min', category: 'damske' },
  
  { name: 'Masáž hlavy', price: '50 Kč', duration: '15 min', category: 'damske' },
  { name: 'Příplatek za razantní změnu / dlouhé husté vlasy', price: '50-100 Kč', duration: '', category: 'damske' },
];

// Barvení a melírování podle damsky_cenik.csv a meliry_cenik.csv
export const barveniSluzby: PricingService[] = [
  // Melíry z meliry_cenik.csv
  { name: 'Melír – zesvětlení vlasů', price: '1000-2000 Kč', duration: '2,5-3,5 h', category: 'barveni', popular: true },
  { name: 'Folayge', price: '2000-4500 Kč', duration: '3-4,5 h', category: 'barveni', popular: true },
  { name: 'Balayge', price: '1300-2500 Kč', duration: '2-3,5 h', category: 'barveni', popular: true },
  { name: 'Mikromelír', price: '2500-4500 Kč', duration: '3-4,5 h', category: 'barveni' },
  { name: 'Freehand technika', price: '1500-3500 Kč', duration: '2-3,5 h', category: 'barveni' },
  
  // Melíry z damsky_cenik.csv
  { name: 'Melír přes čepici', price: '290 Kč', duration: '90 min', category: 'barveni' },
  { name: 'Melír - krátké vlasy', price: '500-590 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Melír - polodlouhé vlasy', price: '600-700 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Melír - dlouhé vlasy', price: '750-850 Kč', duration: '120 min', category: 'barveni' },
  
  { name: 'Částečný melír (vrček, strany) - krátké vlasy', price: '300 Kč', duration: '90 min', category: 'barveni' },
  { name: 'Částečný melír (vrček, strany) - polodlouhé vlasy', price: '500 Kč', duration: '90 min', category: 'barveni' },
  { name: 'Částečný melír (vrček, strany) - dlouhé vlasy', price: '600 Kč', duration: '90 min', category: 'barveni' },
  
  { name: 'Barevný melír - krátké vlasy', price: '550 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Barevný melír - polodlouhé vlasy', price: '600-700 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Barevný melír - dlouhé vlasy', price: '750-850 Kč', duration: '120 min', category: 'barveni' },
  
  // Barvení
  { name: 'Barva odrost - krátké vlasy', price: '310 Kč', duration: '90 min', category: 'barveni' },
  { name: 'Barva odrost - polodlouhé vlasy', price: '330 Kč', duration: '90 min', category: 'barveni' },
  { name: 'Barva odrost - dlouhé vlasy', price: '380 Kč', duration: '90 min', category: 'barveni' },
  
  { name: 'Kombinované barvení - krátké vlasy', price: '500 Kč', duration: '150 min', category: 'barveni' },
  { name: 'Kombinované barvení - polodlouhé vlasy', price: '600 Kč', duration: '150 min', category: 'barveni' },
  { name: 'Kombinované barvení - dlouhé vlasy', price: '750-850 Kč', duration: '150 min', category: 'barveni' },
  
  { name: 'Barevné tunely - krátké vlasy', price: '100 Kč', duration: '30 min', category: 'barveni' },
  { name: 'Barevné tunely - polodlouhé vlasy', price: '150 Kč', duration: '30 min', category: 'barveni' },
  { name: 'Barevné tunely - dlouhé vlasy', price: '200 Kč', duration: '30 min', category: 'barveni' },
  
  { name: 'Přeliv, barva - krátké vlasy', price: '400 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Přeliv, barva - polodlouhé vlasy', price: '500 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Přeliv, barva - dlouhé vlasy', price: '600 Kč', duration: '120 min', category: 'barveni' },
  
  { name: 'Stahování barvy - krátké vlasy', price: '500 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Stahování barvy - polodlouhé vlasy', price: '600 Kč', duration: '120 min', category: 'barveni' },
  { name: 'Stahování barvy - dlouhé vlasy', price: '900 Kč', duration: '120 min', category: 'barveni' },
];

// Péče o vlasy podle damsky_cenik.csv
export const peceSluzby: PricingService[] = [
  { name: 'Keratinová kúra - krátké vlasy', price: '250 Kč', duration: '90 min', category: 'pece', popular: true },
  { name: 'Keratinová kúra - polodlouhé vlasy', price: '350 Kč', duration: '90 min', category: 'pece', popular: true },
  { name: 'Keratinová kúra - dlouhé vlasy', price: '450 Kč', duration: '90 min', category: 'pece', popular: true },
  
  { name: 'Regenerace - krátké vlasy', price: '40 Kč', duration: '15 min', category: 'pece' },
  { name: 'Regenerace - polodlouhé vlasy', price: '50 Kč', duration: '15 min', category: 'pece' },
  { name: 'Regenerace - dlouhé vlasy', price: '60 Kč', duration: '15 min', category: 'pece' },
  
  { name: 'Přípravek Powerplex', price: '50-100 Kč', duration: '30 min', category: 'pece' },
  
  { name: 'Trvalá - krátké vlasy', price: '380 Kč', duration: '120 min', category: 'pece' },
  { name: 'Trvalá - polodlouhé vlasy', price: '490 Kč', duration: '120 min', category: 'pece' },
  { name: 'Trvalá - dlouhé vlasy', price: '650 Kč', duration: '120 min', category: 'pece' },
  
  { name: 'Narovnání vlasů - krátké vlasy', price: '250 Kč', duration: '60 min', category: 'pece' },
  { name: 'Narovnání vlasů - polodlouhé vlasy', price: '400 Kč', duration: '60 min', category: 'pece' },
  { name: 'Narovnání vlasů - dlouhé vlasy', price: '550 Kč', duration: '60 min', category: 'pece' },
];

// Společenské účesy podle damsky_cenik.csv
export const spolecenskeSluzby: PricingService[] = [
  { name: 'Společenské účesy dle náročnosti', price: '500-1000 Kč', duration: '60-90 min', category: 'spolecenske', popular: true },
];

// Speciální služby podle damsky_cenik.csv
export const specialniSluzby: PricingService[] = [
  { name: 'Prodloužení vlasů dle náročnosti', price: '2500-4000 Kč', duration: '180-240 min', category: 'specialni' },
  { name: 'Sundávání nastavených vlasů dle náročnosti', price: '700-2500 Kč', duration: '90-180 min', category: 'specialni' },
];

// Pánské a dětské služby podle cenik_pansky_a_detsky.csv
export const panskeDetskeSluzby: PricingService[] = [
  // Pánské
  { name: 'Pánský střih', price: '250 Kč', duration: '30 min', category: 'panske', popular: true },
  { name: 'Střih strojkem', price: '200 Kč', duration: '20 min', category: 'panske' },
  { name: 'Moderní střih', price: '300 Kč', duration: '45 min', category: 'panske' },
  { name: 'Úprava vousů', price: '110 Kč', duration: '15 min', category: 'panske' },
  { name: 'Zastřižení ofiny', price: '80 Kč', duration: '15 min', category: 'panske' },
  { name: 'Mytí vlasů', price: '80 Kč', duration: '15 min', category: 'panske' },
  { name: 'Regenerace', price: '50 Kč', duration: '15 min', category: 'panske' },
  { name: 'Foukaná', price: '90 Kč', duration: '30 min', category: 'panske' },
  { name: 'Sušení', price: '80 Kč', duration: '20 min', category: 'panske' },
  { name: 'Styling – vosk, gel, lak, lesk atd.', price: '50 Kč', duration: '10 min', category: 'panske' },
  { name: 'Melír přes čepici', price: '350-480 Kč', duration: '90 min', category: 'panske' },
  { name: 'Komplet – střih, mytí, sušení', price: '400 Kč', duration: '45 min', category: 'panske' },
  
  // Dětské
  { name: 'Dětský střih', price: '200 Kč', duration: '20 min', category: 'detske', popular: true },
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

// Kategorie
export const pricingCategories: PricingCategory[] = [
  {
    id: 'damske',
    title: 'Dámské kadeřnictví',
    icon: '✂️',
    color: 'from-pink-500 to-rose-500',
    description: 'Střihy, mytí, foukaná a styling pro dámy'
  },
  {
    id: 'barveni',
    title: 'Barvení a melírování',
    icon: '🎨',
    color: 'from-purple-500 to-indigo-500',
    description: 'Profesionální barvení a melírování všech typů'
  },
  {
    id: 'pece',
    title: 'Péče o vlasy',
    icon: '💆‍♀️',
    color: 'from-green-500 to-emerald-500',
    description: 'Regenerační a keratinové ošetření'
  },
  {
    id: 'spolecenske',
    title: 'Společenské účesy',
    icon: '👑',
    color: 'from-amber-500 to-orange-500',
    description: 'Účesy pro speciální příležitosti'
  },
  {
    id: 'panske',
    title: 'Pánské kadeřnictví',
    icon: '👨',
    color: 'from-blue-500 to-indigo-500',
    description: 'Klasické i moderní pánské střihy'
  },
  {
    id: 'detske',
    title: 'Dětské kadeřnictví',
    icon: '👶',
    color: 'from-pink-400 to-purple-400',
    description: 'Šetrné střihy pro nejmenší'
  },
  {
    id: 'specialni',
    title: 'Speciální služby',
    icon: '⭐',
    color: 'from-violet-500 to-purple-500',
    description: 'Prodloužení vlasů a další speciální služby'
  }
];

// Pomocné funkce
export const getServicesByCategory = (categoryId: string): PricingService[] => {
  return allServices.filter(service => service.category === categoryId);
};

export const searchServices = (searchTerm: string): PricingService[] => {
  return allServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getPopularServices = (): PricingService[] => {
  return allServices.filter(service => service.popular);
};