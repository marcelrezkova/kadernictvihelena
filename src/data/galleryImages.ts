export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'before-after' | 'hairstyles' | 'salon' | 'products';
}

export const galleryImages: GalleryImage[] = [
  // Účesy a střihy
  {
    id: 'hair-1',
    src: '/gallery/IMG_2604.jpg',
    alt: 'Moderní dámský střih',
    title: 'Stylový bob střih',
    description: 'Elegantní bob s jemnými vlnami',
    category: 'hairstyles'
  },
  {
    id: 'hair-2',
    src: '/gallery/IMG_2605.jpg',
    alt: 'Dlouhé vlasy s melírem',
    title: 'Balayage technika',
    description: 'Přírodní přechody pro dlouhé vlasy',
    category: 'hairstyles'
  },
  {
    id: 'hair-3',
    src: '/gallery/IMG_2617.jpg',
    alt: 'Společenský účes',
    title: 'Svatební účes',
    description: 'Elegantní účes pro speciální příležitosti',
    category: 'hairstyles'
  },
  {
    id: 'hair-4',
    src: '/gallery/IMG_2618.jpg',
    alt: 'Krátký moderní střih',
    title: 'Pixie cut',
    description: 'Odvážný krátký střih',
    category: 'hairstyles'
  },
  {
    id: 'hair-5',
    src: '/gallery/IMG_2619.jpg',
    alt: 'Melírované vlasy',
    title: 'Klasický melír',
    description: 'Profesionální melírování',
    category: 'hairstyles'
  },
  {
    id: 'hair-6',
    src: '/gallery/IMG_2647.jpg',
    alt: 'Polodlouhé vlasy',
    title: 'Moderní střih',
    description: 'Trendy střih pro polodlouhé vlasy',
    category: 'hairstyles'
  },
  {
    id: 'hair-7',
    src: '/gallery/IMG_2648.jpg',
    alt: 'Barvené vlasy',
    title: 'Barevné reflexy',
    description: 'Krásné barevné akcenty',
    category: 'hairstyles'
  },
  {
    id: 'hair-8',
    src: '/gallery/IMG_2650.jpg',
    alt: 'Kudrnaté vlasy',
    title: 'Péče o kudrny',
    description: 'Stylizace kudrnatých vlasů',
    category: 'hairstyles'
  },
  {
    id: 'hair-9',
    src: '/gallery/IMG_2653.jpg',
    alt: 'Rovné vlasy',
    title: 'Hladký střih',
    description: 'Perfektně rovné vlasy',
    category: 'hairstyles'
  },
  {
    id: 'hair-10',
    src: '/gallery/IMG_2655.jpg',
    alt: 'Vlnité vlasy',
    title: 'Přírodní vlny',
    description: 'Jemné vlny pro každodenní nošení',
    category: 'hairstyles'
  },
  {
    id: 'hair-11',
    src: '/gallery/IMG_2663.jpg',
    alt: 'Moderní účes',
    title: 'Trendy styling',
    description: 'Aktuální módní trendy',
    category: 'hairstyles'
  },
  {
    id: 'hair-12',
    src: '/gallery/IMG_2664.jpg',
    alt: 'Elegantní účes',
    title: 'Společenský styling',
    description: 'Pro speciální příležitosti',
    category: 'hairstyles'
  },
  {
    id: 'hair-13',
    src: '/gallery/IMG_2665.jpg',
    alt: 'Barevné vlasy',
    title: 'Kreativní barvení',
    description: 'Originální barevné řešení',
    category: 'hairstyles'
  },
  {
    id: 'hair-14',
    src: '/gallery/IMG_2666.jpg',
    alt: 'Střih s ofinou',
    title: 'Moderní ofina',
    description: 'Stylová ofina pro mladý vzhled',
    category: 'hairstyles'
  },
  {
    id: 'hair-15',
    src: '/gallery/IMG_2667.jpg',
    alt: 'Dlouhé zdravé vlasy',
    title: 'Péče o dlouhé vlasy',
    description: 'Zdravé a lesklé dlouhé vlasy',
    category: 'hairstyles'
  },
  {
    id: 'hair-16',
    src: '/gallery/IMG_2668.jpg',
    alt: 'Asymetrický střih',
    title: 'Asymetrie',
    description: 'Moderní asymetrický střih',
    category: 'hairstyles'
  },
  {
    id: 'hair-17',
    src: '/gallery/IMG_2740.jpg',
    alt: 'Objemný účes',
    title: 'Objem a lesk',
    description: 'Dokonalý objem pro jemné vlasy',
    category: 'hairstyles'
  },
  {
    id: 'hair-18',
    src: '/gallery/IMG_2744.jpg',
    alt: 'Retro účes',
    title: 'Vintage styling',
    description: 'Klasický retro účes',
    category: 'hairstyles'
  },
  {
    id: 'hair-19',
    src: '/gallery/IMG_2758.jpg',
    alt: 'Moderní melír',
    title: 'Foliage technika',
    description: 'Pokročilá melírovací technika',
    category: 'hairstyles'
  },
  {
    id: 'hair-20',
    src: '/gallery/IMG_2761.jpg',
    alt: 'Krátký střih',
    title: 'Praktický střih',
    description: 'Snadná údržba, stylový vzhled',
    category: 'hairstyles'
  },
  {
    id: 'hair-21',
    src: '/gallery/IMG_2764.jpg',
    alt: 'Barvené vlasy',
    title: 'Intenzivní barva',
    description: 'Výrazná změna barvy',
    category: 'hairstyles'
  },
  {
    id: 'hair-22',
    src: '/gallery/IMG_2803.jpg',
    alt: 'Společenský účes',
    title: 'Večerní styling',
    description: 'Elegance pro večerní příležitosti',
    category: 'hairstyles'
  },
  {
    id: 'hair-23',
    src: '/gallery/IMG_2804.jpg',
    alt: 'Přírodní vlny',
    title: 'Beach waves',
    description: 'Nepřinucené přírodní vlny',
    category: 'hairstyles'
  },
  {
    id: 'hair-24',
    src: '/gallery/IMG_2805.jpg',
    alt: 'Moderní bob',
    title: 'Textured bob',
    description: 'Bob s texturou a pohybem',
    category: 'hairstyles'
  },
  {
    id: 'hair-25',
    src: '/gallery/IMG_2806.jpg',
    alt: 'Dlouhé vlasy',
    title: 'Zdravé dlouhé vlasy',
    description: 'Péče o dlouhé vlasy',
    category: 'hairstyles'
  },
  {
    id: 'hair-26',
    src: '/gallery/IMG_2809.jpg',
    alt: 'Melírované vlasy',
    title: 'Jemný melír',
    description: 'Subtilní melírování',
    category: 'hairstyles'
  },
  {
    id: 'hair-27',
    src: '/gallery/IMG_2810.jpg',
    alt: 'Kudrnaté vlasy',
    title: 'Definované kudrny',
    description: 'Krásně tvarované kudrny',
    category: 'hairstyles'
  },
  {
    id: 'hair-28',
    src: '/gallery/IMG_2811.jpg',
    alt: 'Rovné vlasy',
    title: 'Sleek look',
    description: 'Dokonale hladké vlasy',
    category: 'hairstyles'
  },
  {
    id: 'hair-29',
    src: '/gallery/IMG_2812.jpg',
    alt: 'Barevné vlasy',
    title: 'Fashion colors',
    description: 'Módní barevné trendy',
    category: 'hairstyles'
  },
  {
    id: 'hair-30',
    src: '/gallery/IMG_2813.jpg',
    alt: 'Střih s vrstvami',
    title: 'Vrstvený střih',
    description: 'Objem díky vrstvám',
    category: 'hairstyles'
  },
  {
    id: 'hair-31',
    src: '/gallery/IMG_2814.jpg',
    alt: 'Elegantní účes',
    title: 'Klasická elegance',
    description: 'Nadčasový elegantní účes',
    category: 'hairstyles'
  },
  {
    id: 'hair-32',
    src: '/gallery/IMG_2816.jpg',
    alt: 'Moderní střih',
    title: 'Contemporary cut',
    description: 'Současné trendy v kadeřnictví',
    category: 'hairstyles'
  },
  {
    id: 'hair-33',
    src: '/gallery/IMG_2818.jpg',
    alt: 'Vlnité vlasy',
    title: 'Soft waves',
    description: 'Jemné romantické vlny',
    category: 'hairstyles'
  },
  {
    id: 'hair-34',
    src: '/gallery/IMG_2824.jpg',
    alt: 'Krátký střih',
    title: 'Chic short cut',
    description: 'Elegantní krátký střih',
    category: 'hairstyles'
  },
  {
    id: 'hair-35',
    src: '/gallery/IMG_2825.jpg',
    alt: 'Barvené vlasy',
    title: 'Color transformation',
    description: 'Dramatická změna barvy',
    category: 'hairstyles'
  },
  {
    id: 'hair-36',
    src: '/gallery/IMG_2826.jpg',
    alt: 'Polodlouhé vlasy',
    title: 'Medium length',
    description: 'Praktická délka pro každý den',
    category: 'hairstyles'
  },
  {
    id: 'hair-37',
    src: '/gallery/IMG_2830.jpg',
    alt: 'Společenský účes',
    title: 'Updo styling',
    description: 'Profesionální společenský účes',
    category: 'hairstyles'
  },
  {
    id: 'hair-38',
    src: '/gallery/IMG_2857.jpg',
    alt: 'Moderní účes',
    title: 'Trendy hairstyle',
    description: 'Nejnovější módní trendy',
    category: 'hairstyles'
  },
  {
    id: 'hair-39',
    src: '/gallery/IMG_2858.jpg',
    alt: 'Přírodní vzhled',
    title: 'Natural beauty',
    description: 'Zdůraznění přirozené krásy',
    category: 'hairstyles'
  },
  {
    id: 'hair-40',
    src: '/gallery/IMG_2914.jpg',
    alt: 'Melírované vlasy',
    title: 'Highlights',
    description: 'Profesionální melírování',
    category: 'hairstyles'
  },
  {
    id: 'hair-41',
    src: '/gallery/IMG_2915.jpg',
    alt: 'Kudrnaté vlasy',
    title: 'Curly hair care',
    description: 'Specializovaná péče o kudrny',
    category: 'hairstyles'
  },
  {
    id: 'hair-42',
    src: '/gallery/IMG_2916.jpg',
    alt: 'Rovné vlasy',
    title: 'Straight perfection',
    description: 'Dokonale rovné vlasy',
    category: 'hairstyles'
  },
  {
    id: 'hair-43',
    src: '/gallery/IMG_2919.jpg',
    alt: 'Barevné vlasy',
    title: 'Creative coloring',
    description: 'Kreativní přístup k barvení',
    category: 'hairstyles'
  },
  {
    id: 'hair-44',
    src: '/gallery/IMG_2921.jpg',
    alt: 'Elegantní střih',
    title: 'Sophisticated cut',
    description: 'Sofistikovaný přístup ke střihu',
    category: 'hairstyles'
  },
  {
    id: 'hair-45',
    src: '/gallery/IMG_2923.jpg',
    alt: 'Moderní účes',
    title: 'Modern styling',
    description: 'Současné trendy v úpravě vlasů',
    category: 'hairstyles'
  },
  {
    id: 'hair-46',
    src: '/gallery/IMG_2924.jpg',
    alt: 'Přírodní vlny',
    title: 'Effortless waves',
    description: 'Nepřinucené přírodní vlny',
    category: 'hairstyles'
  },
  {
    id: 'hair-47',
    src: '/gallery/IMG_3537.jpg',
    alt: 'Krátký střih',
    title: 'Bold short cut',
    description: 'Odvážný krátký střih',
    category: 'hairstyles'
  },
  {
    id: 'hair-48',
    src: '/gallery/IMG_3538.jpg',
    alt: 'Barvené vlasy',
    title: 'Vibrant color',
    description: 'Živé a zářivé barvy',
    category: 'hairstyles'
  },
  {
    id: 'hair-49',
    src: '/gallery/IMG_3539.jpg',
    alt: 'Dlouhé vlasy',
    title: 'Long hair beauty',
    description: 'Krása dlouhých vlasů',
    category: 'hairstyles'
  },
  {
    id: 'hair-50',
    src: '/gallery/IMG_3540.jpg',
    alt: 'Melírované vlasy',
    title: 'Balayage highlights',
    description: 'Moderní melírovací technika',
    category: 'hairstyles'
  },
  {
    id: 'hair-51',
    src: '/gallery/IMG_3541.jpg',
    alt: 'Vlnité vlasy',
    title: 'Textured waves',
    description: 'Vlny s texturou a objemem',
    category: 'hairstyles'
  },
  {
    id: 'hair-52',
    src: '/gallery/IMG_3542.jpg',
    alt: 'Elegantní účes',
    title: 'Timeless elegance',
    description: 'Nadčasová elegance',
    category: 'hairstyles'
  },
  {
    id: 'hair-53',
    src: '/gallery/IMG_3543.jpg',
    alt: 'Moderní střih',
    title: 'Fashion forward',
    description: 'Módní pokrokovost',
    category: 'hairstyles'
  },
  {
    id: 'hair-54',
    src: '/gallery/IMG_3544.jpg',
    alt: 'Přírodní vzhled',
    title: 'Effortless beauty',
    description: 'Nepřinucená přirozená krása',
    category: 'hairstyles'
  },

  // Před a po transformace
  {
    id: 'before-after-1',
    src: '/gallery/20514.jpg',
    alt: 'Transformace vlasů - před a po',
    title: 'Dramatická změna',
    description: 'Kompletní proměna účesu',
    category: 'before-after'
  },
  {
    id: 'before-after-2',
    src: '/gallery/20516.jpg',
    alt: 'Změna barvy vlasů',
    title: 'Barevná transformace',
    description: 'Profesionální změna barvy',
    category: 'before-after'
  },
  {
    id: 'before-after-3',
    src: '/gallery/20517.jpg',
    alt: 'Střih a styling',
    title: 'Nový střih',
    description: 'Moderní střih s novým stylingem',
    category: 'before-after'
  },
  {
    id: 'before-after-4',
    src: '/gallery/20726.jpg',
    alt: 'Melírování před a po',
    title: 'Melírovací transformace',
    description: 'Profesionální melírování',
    category: 'before-after'
  },
  {
    id: 'before-after-5',
    src: '/gallery/20727.jpg',
    alt: 'Regenerace vlasů',
    title: 'Obnova zdraví vlasů',
    description: 'Keratinová regenerace',
    category: 'before-after'
  },
  {
    id: 'before-after-6',
    src: '/gallery/20728.jpg',
    alt: 'Kompletní změna',
    title: 'Celková proměna',
    description: 'Střih, barva a styling',
    category: 'before-after'
  },
  {
    id: 'before-after-7',
    src: '/gallery/20792.jpg',
    alt: 'Krátký střih transformace',
    title: 'Z dlouhých na krátké',
    description: 'Odvážná změna délky',
    category: 'before-after'
  },
  {
    id: 'before-after-8',
    src: '/gallery/20793.jpg',
    alt: 'Barevná změna',
    title: 'Nová barva',
    description: 'Výrazná změna odstínu',
    category: 'before-after'
  },
  {
    id: 'before-after-9',
    src: '/gallery/20797.jpg',
    alt: 'Styling transformace',
    title: 'Nový styling',
    description: 'Moderní přístup k úpravě',
    category: 'before-after'
  },
  {
    id: 'before-after-10',
    src: '/gallery/20799.jpg',
    alt: 'Péče o vlasy',
    title: 'Regenerační ošetření',
    description: 'Obnova poškozených vlasů',
    category: 'before-after'
  },
  {
    id: 'before-after-11',
    src: '/gallery/20800.jpg',
    alt: 'Kompletní makeover',
    title: 'Celková proměna',
    description: 'Kompletní změna vzhledu',
    category: 'before-after'
  },

  // Studio a prostředí
  {
    id: 'salon-1',
    src: '/gallery/ALEI6657.jpg',
    alt: 'Interiér kadeřnictví POHODA',
    title: 'Naše studio',
    description: 'Moderní a příjemné prostředí',
    category: 'salon'
  },
  {
    id: 'salon-2',
    src: '/gallery/CTFR3137.jpg',
    alt: 'Kadeřnické křeslo',
    title: 'Profesionální vybavení',
    description: 'Kvalitní nástroje a pohodlí',
    category: 'salon'
  },
  {
    id: 'salon-3',
    src: '/gallery/DUGK3375.jpg',
    alt: 'Pracovní místo kadeřnice',
    title: 'Profesionální prostředí',
    description: 'Vše pro dokonalý výsledek',
    category: 'salon'
  },
  {
    id: 'salon-4',
    src: '/gallery/FCPS1025.jpg',
    alt: 'Atmosféra studia',
    title: 'Příjemná atmosféra',
    description: 'Relaxační prostředí pro klienty',
    category: 'salon'
  },
  {
    id: 'salon-5',
    src: '/gallery/FDHV3878.jpg',
    alt: 'Kadeřnické nástroje',
    title: 'Profesionální nástroje',
    description: 'Kvalitní vybavení pro nejlepší výsledky',
    category: 'salon'
  },
  {
    id: 'salon-6',
    src: '/gallery/FFII2567.jpg',
    alt: 'Prostředí kadeřnictví',
    title: 'Moderní design',
    description: 'Stylové a funkční prostředí',
    category: 'salon'
  },

  // Produkty a péče
  {
    id: 'products-1',
    src: '/gallery/FQSV1709.jpg',
    alt: 'Profesionální produkty',
    title: 'Kvalitní kosmetika',
    description: 'Používáme pouze prémiové produkty',
    category: 'products'
  },
  {
    id: 'products-2',
    src: '/gallery/GSMK9718.jpg',
    alt: 'Péče o vlasy',
    title: 'Regenerační ošetření',
    description: 'Speciální péče pro zdravé vlasy',
    category: 'products'
  },
  {
    id: 'products-3',
    src: '/gallery/IHNZ9223.jpg',
    alt: 'Keratinová kúra',
    title: 'Keratinové ošetření',
    description: 'Intenzivní regenerace vlasů',
    category: 'products'
  },
  {
    id: 'products-4',
    src: '/gallery/KCSM0452.jpg',
    alt: 'Barvicí produkty',
    title: 'Profesionální barvy',
    description: 'Kvalitní barvicí produkty',
    category: 'products'
  },
  {
    id: 'products-5',
    src: '/gallery/LBXA3910.jpg',
    alt: 'Stylingové produkty',
    title: 'Styling produkty',
    description: 'Pro dokonalý styling',
    category: 'products'
  },
  {
    id: 'products-6',
    src: '/gallery/MCRR8216.jpg',
    alt: 'Péče o pokožku hlavy',
    title: 'Péče o pokožku',
    description: 'Speciální ošetření pokožky hlavy',
    category: 'products'
  }
];

// Pomocné funkce pro filtrování
export const getImagesByCategory = (category: GalleryImage['category']): GalleryImage[] => {
  return galleryImages.filter(image => image.category === category);
};

export const getAllCategories = (): GalleryImage['category'][] => {
  return ['before-after', 'hairstyles', 'salon', 'products'];
};

export const getCategoryLabel = (category: GalleryImage['category']): string => {
  const labels = {
    'before-after': 'Před a po',
    'hairstyles': 'Účesy',
    'salon': 'Studio',
    'products': 'Produkty'
  };
  return labels[category];
};