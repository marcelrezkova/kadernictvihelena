export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'damske-strihy' | 'panske-strihy' | 'detske-strihy' | 'barveni' | 'spolecenske' | 'kratkovlasky' | 'meliry';
}

export const galleryImages: GalleryImage[] = [
  // Dámské střihy - Bob
  {
    id: 'damsky-bob-1',
    src: '/gallery/dámský střih bob.jpg',
    alt: 'Dámský střih bob',
    title: 'Klasický Bob',
    description: 'Elegantní střih bob',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-2',
    src: '/gallery/dámský střih bob(1).jpg',
    alt: 'Dámský střih bob - variace',
    title: 'Bob s Vrstvami',
    description: 'Bob střih s jemnými vrstvami',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-3',
    src: '/gallery/dámský střih bob(2).jpg',
    alt: 'Dámský střih bob - moderní',
    title: 'Moderní Bob',
    description: 'Současný přístup k bobu',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-4',
    src: '/gallery/dámský střih bob(3).jpg',
    alt: 'Dámský střih bob - stylový',
    title: 'Stylový Bob',
    description: 'Trendy variace bobu',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-5',
    src: '/gallery/dámský střih bob(4).jpg',
    alt: 'Dámský střih bob - elegantní',
    title: 'Elegantní Bob',
    description: 'Sofistikovaný bob střih',
    category: 'damske-strihy'
  },

  // Krátkovlásky
  {
    id: 'kratkovlasky-1',
    src: '/gallery/krátkovlásky.jpg',
    alt: 'Krátkovlasý střih',
    title: 'Krátký Střih',
    description: 'Odvážný krátký účes',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-2',
    src: '/gallery/krátkovlásky(1).jpg',
    alt: 'Krátké vlasy - pixie',
    title: 'Pixie Cut',
    description: 'Moderní pixie střih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-3',
    src: '/gallery/krátkovlásky(2).jpg',
    alt: 'Krátké vlasy - undercut',
    title: 'Undercut Style',
    description: 'Trendy undercut',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-4',
    src: '/gallery/krátkovlásky(3).jpg',
    alt: 'Krátké vlasy - elegantní',
    title: 'Elegantní Krátký Střih',
    description: 'Jemný krátký účes',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-5',
    src: '/gallery/krátkovlásky(4).jpg',
    alt: 'Krátké vlasy - textured',
    title: 'Texturovaný Střih',
    description: 'Střih s texturou',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-6',
    src: '/gallery/krátkovlásky(5).jpg',
    alt: 'Krátké vlasy - asymetrický',
    title: 'Asymetrický Střih',
    description: 'Asymetrie pro krátké vlasy',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-7',
    src: '/gallery/krátkovlásky(6).jpg',
    alt: 'Krátké vlasy - praktický',
    title: 'Praktický Střih',
    description: 'Snadno udržovatelný',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-8',
    src: '/gallery/krátkovlásky(7).jpg',
    alt: 'Krátké vlasy - chic',
    title: 'Chic Krátký Střih',
    description: 'Stylový a elegantní',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-9',
    src: '/gallery/krátkovlásky(8).jpg',
    alt: 'Krátké vlasy - mladistvý',
    title: 'Mladistvý Střih',
    description: 'Osvěžující vzhled',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-10',
    src: '/gallery/krátkovlásky(9).jpg',
    alt: 'Krátké vlasy - odvážný',
    title: 'Odvážný Střih',
    description: 'Pro sebevědomé ženy',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-11',
    src: '/gallery/krátkovlásky(10).jpg',
    alt: 'Krátké vlasy - klasický',
    title: 'Klasický Krátký Střih',
    description: 'Nadčasový střih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-12',
    src: '/gallery/krátkovlásky(11).jpg',
    alt: 'Krátké vlasy - trendy',
    title: 'Trendy Krátký Střih',
    description: 'Aktuální módní trend',
    category: 'kratkovlasky'
  },

  // Pánské střihy
  {
    id: 'pansky-stih-pred-1',
    src: '/gallery/pánský střih před.jpg',
    alt: 'Pánský střih - před',
    title: 'Pánský Střih - Před',
    description: 'Výchozí stav',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-stih-po-1',
    src: '/gallery/pánský střih po.jpg',
    alt: 'Pánský střih - po',
    title: 'Pánský Střih - Po',
    description: 'Moderní pánský střih',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-stih-po-2',
    src: '/gallery/pánský střih po(1).jpg',
    alt: 'Pánský střih - detail',
    title: 'Pánský Střih - Detail',
    description: 'Detailní pohled',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-stih-pred-2',
    src: '/gallery/pánský střih před2.jpg',
    alt: 'Pánský střih - před úpravou',
    title: 'Před Úpravou',
    description: 'Původní stav',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-stih-po-3',
    src: '/gallery/pánský střih po2.jpg',
    alt: 'Pánský střih - po úpravě',
    title: 'Po Úpravě',
    description: 'Čistý profesionální střih',
    category: 'panske-strihy'
  },
  {
    id: 'foto-po-pansky',
    src: '/gallery/foto po pánský střih.jpg',
    alt: 'Pánský střih - výsledek',
    title: 'Finální Výsledek',
    description: 'Dokonalý pánský střih',
    category: 'panske-strihy'
  },
  {
    id: 'foto-pred-panske',
    src: '/gallery/foto před pánské2.jpg',
    alt: 'Před pánským střihem',
    title: 'Před Střihem',
    description: 'Stav před úpravou',
    category: 'panske-strihy'
  },

  // Dětské střihy
  {
    id: 'detsky-1',
    src: '/gallery/dětský střih.jpg',
    alt: 'Dětský střih',
    title: 'Dětský Střih',
    description: 'Šetrný přístup k dětem',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-2',
    src: '/gallery/dětský střih(1).jpg',
    alt: 'Dětský střih - moderní',
    title: 'Moderní Dětský Střih',
    description: 'Trendy střih pro děti',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-3',
    src: '/gallery/dětský střih(2).jpg',
    alt: 'Dětský střih - praktický',
    title: 'Praktický Dětský Střih',
    description: 'Snadno udržovatelný',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-4',
    src: '/gallery/dětský střih(3).jpg',
    alt: 'Dětský střih - stylový',
    title: 'Stylový Dětský Střih',
    description: 'Moderní a praktický',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-5',
    src: '/gallery/dětský střih(4).jpg',
    alt: 'Dětský střih - cool',
    title: 'Cool Dětský Střih',
    description: 'Trendy pro mladé',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-6',
    src: '/gallery/dětský střih(5).jpg',
    alt: 'Dětský střih - klasický',
    title: 'Klasický Dětský Střih',
    description: 'Nadčasový dětský střih',
    category: 'detske-strihy'
  },
  {
    id: 'foto-detske-pred',
    src: '/gallery/foto před dětské.jpg',
    alt: 'Před dětským střihem',
    title: 'Před Střihem',
    description: 'Výchozí stav',
    category: 'detske-strihy'
  },
  {
    id: 'foto-detske-po-1',
    src: '/gallery/foto po dětské.jpg',
    alt: 'Po dětském střihu',
    title: 'Po Střihu',
    description: 'Krásný výsledek',
    category: 'detske-strihy'
  },
  {
    id: 'foto-detske-po-2',
    src: '/gallery/foto po dětské(1).jpg',
    alt: 'Po dětském střihu - detail',
    title: 'Detail Střihu',
    description: 'Detailní pohled',
    category: 'detske-strihy'
  },

  // Barvení - Cool Blond
  {
    id: 'cool-blond-pred-1',
    src: '/gallery/cool blond před.jpg',
    alt: 'Cool blond - před',
    title: 'Cool Blond - Před',
    description: 'Výchozí barva',
    category: 'barveni'
  },
  {
    id: 'cool-blond-pred-2',
    src: '/gallery/cool bond před.jpg',
    alt: 'Cool blond - před barvením',
    title: 'Před Barvením',
    description: 'Původní odstín',
    category: 'barveni'
  },
  {
    id: 'cool-blond-po-1',
    src: '/gallery/cool blond po.jpg',
    alt: 'Cool blond - po',
    title: 'Cool Blond - Po',
    description: 'Krásný chladný blond',
    category: 'barveni'
  },
  {
    id: 'cool-blond-po-2',
    src: '/gallery/cool blond po(1).jpg',
    alt: 'Cool blond - detail',
    title: 'Cool Blond - Detail',
    description: 'Detailní pohled na barvu',
    category: 'barveni'
  },
  {
    id: 'cool-blond-po-3',
    src: '/gallery/cool blond po(2).jpg',
    alt: 'Cool blond - výsledek',
    title: 'Cool Blond - Výsledek',
    description: 'Dokonalý chladný tón',
    category: 'barveni'
  },
  {
    id: 'cool-blond-po-4',
    src: '/gallery/cool blond po(3).jpg',
    alt: 'Cool blond - finální',
    title: 'Cool Blond - Finální',
    description: 'Perfektní výsledek',
    category: 'barveni'
  },

  // Barvení - Vanilla Blond
  {
    id: 'vanilla-blond-pred',
    src: '/gallery/foto vanila blond před.jpg',
    alt: 'Vanilla blond - před',
    title: 'Vanilla Blond - Před',
    description: 'Výchozí barva vlasů',
    category: 'barveni'
  },
  {
    id: 'vanilla-blond-po-1',
    src: '/gallery/foto vanila blond po.jpg',
    alt: 'Vanilla blond - po',
    title: 'Vanilla Blond - Po',
    description: 'Teplý vanilkový blond',
    category: 'barveni'
  },
  {
    id: 'vanilla-blond-po-2',
    src: '/gallery/foto po vanila blond.jpg',
    alt: 'Vanilla blond - výsledek',
    title: 'Vanilla Blond - Výsledek',
    description: 'Krásný teplý odstín',
    category: 'barveni'
  },
  {
    id: 'vanilla-blond-po-3',
    src: '/gallery/foto po vanila blond(1).jpg',
    alt: 'Vanilla blond - detail',
    title: 'Vanilla Blond - Detail',
    description: 'Detailní pohled',
    category: 'barveni'
  },
  {
    id: 'vanilla-blond-po-4',
    src: '/gallery/foto po vanila blond(2).jpg',
    alt: 'Vanilla blond - finální',
    title: 'Vanilla Blond - Finální',
    description: 'Perfektní vanilkový tón',
    category: 'barveni'
  },

  // Melíry - Mikromelír
  {
    id: 'mikromelir-1',
    src: '/gallery/mikromelír.jpg',
    alt: 'Mikromelír',
    title: 'Mikromelír',
    description: 'Jemné přírodní reflexy',
    category: 'meliry'
  },
  {
    id: 'mikromelir-2',
    src: '/gallery/mikro melír.jpg',
    alt: 'Mikro melír',
    title: 'Mikro Melír',
    description: 'Subtilní melírování',
    category: 'meliry'
  },
  {
    id: 'mikromelir-3',
    src: '/gallery/mikromelír(1).jpg',
    alt: 'Mikromelír - detail',
    title: 'Mikromelír - Detail',
    description: 'Jemné světlé pramínky',
    category: 'meliry'
  },
  {
    id: 'mikromelir-4',
    src: '/gallery/mikromelír(2).jpg',
    alt: 'Mikromelír - výsledek',
    title: 'Mikromelír - Výsledek',
    description: 'Přirozený vzhled',
    category: 'meliry'
  },
  {
    id: 'mikromelir-5',
    src: '/gallery/mikromelír(3).jpg',
    alt: 'Mikromelír - finální',
    title: 'Mikromelír - Finální',
    description: 'Dokonalé jemné reflexy',
    category: 'meliry'
  },

  // Melíry - Foliage/Folayge
  {
    id: 'folayge-pred-1',
    src: '/gallery/foto před folayge.jpg',
    alt: 'Foliage - před',
    title: 'Foliage - Před',
    description: 'Výchozí stav vlasů',
    category: 'meliry'
  },
  {
    id: 'folayge-po-1',
    src: '/gallery/foto po folayge.jpg',
    alt: 'Foliage - po',
    title: 'Foliage - Po',
    description: 'Krásné přechody',
    category: 'meliry'
  },
  {
    id: 'falayge-po',
    src: '/gallery/foto po falayge.jpg',
    alt: 'Foliage technika',
    title: 'Foliage Technika',
    description: 'Profesionální melírování',
    category: 'meliry'
  },
  {
    id: 'folayge-pred-2',
    src: '/gallery/foto před folayge2.jpg',
    alt: 'Foliage 2 - před',
    title: 'Foliage - Před Úpravou',
    description: 'Původní barva',
    category: 'meliry'
  },
  {
    id: 'folayge-po-2',
    src: '/gallery/foto po folayge2.jpg',
    alt: 'Foliage 2 - po',
    title: 'Foliage - Po Úpravě',
    description: 'Nádherné přírodní přechody',
    category: 'meliry'
  },
  {
    id: 'folayge-pred-3',
    src: '/gallery/foto před folayge2(1).jpg',
    alt: 'Foliage 3 - před',
    title: 'Před Foliage',
    description: 'Výchozí stav',
    category: 'meliry'
  },
  {
    id: 'folayge-po-3',
    src: '/gallery/foto po folayge2(1).jpg',
    alt: 'Foliage 3 - po',
    title: 'Po Foliage',
    description: 'Krásný výsledek',
    category: 'meliry'
  },

  // Melíry - Freehand
  {
    id: 'freehand-pred-1',
    src: '/gallery/foto před freehand.jpg',
    alt: 'Freehand - před',
    title: 'Freehand - Před',
    description: 'Výchozí barva vlasů',
    category: 'meliry'
  },
  {
    id: 'freehand-po-1',
    src: '/gallery/foto po freehand.jpg',
    alt: 'Freehand - po',
    title: 'Freehand - Po',
    description: 'Umělecké melírování',
    category: 'meliry'
  },
  {
    id: 'freehand-po-2',
    src: '/gallery/foto po freehand(1).jpg',
    alt: 'Freehand - detail',
    title: 'Freehand - Detail',
    description: 'Detailní pohled',
    category: 'meliry'
  },
  {
    id: 'freehand-po-3',
    src: '/gallery/foto po freehand(2).jpg',
    alt: 'Freehand - výsledek',
    title: 'Freehand - Výsledek',
    description: 'Kreativní přechody',
    category: 'meliry'
  },
  {
    id: 'freehand-zrz-pred-1',
    src: '/gallery/foto před freehand zrz.jpg',
    alt: 'Freehand zrzavé - před',
    title: 'Freehand Zrzavé - Před',
    description: 'Výchozí stav',
    category: 'meliry'
  },
  {
    id: 'freehand-zrz-pred-2',
    src: '/gallery/foto před freehand zrz(1).jpg',
    alt: 'Freehand zrzavé - před úpravou',
    title: 'Před Zrzavým Freehand',
    description: 'Původní barva',
    category: 'meliry'
  },
  {
    id: 'freehand-zrz-po',
    src: '/gallery/foto po freehand zrz.jpg',
    alt: 'Freehand zrzavé - po',
    title: 'Freehand Zrzavé - Po',
    description: 'Krásné zrzavé tóny',
    category: 'meliry'
  },

  // Společenské účesy
  {
    id: 'spolecensky-1',
    src: '/gallery/společenský účes.jpg',
    alt: 'Společenský účes',
    title: 'Společenský Účes',
    description: 'Elegantní účes pro speciální příležitosti',
    category: 'spolecenske'
  },
  {
    id: 'spolecensky-2',
    src: '/gallery/společenský účes(1).jpg',
    alt: 'Společenský účes - svatební',
    title: 'Svatební Účes',
    description: 'Romantický účes pro nevěsty',
    category: 'spolecenske'
  },

  // Další fotografie
  {
    id: 'img-2653',
    src: '/gallery/IMG_2653.jpg',
    alt: 'Dámský účes',
    title: 'Elegantní Účes',
    description: 'Stylový dámský účes',
    category: 'damske-strihy'
  },
  {
    id: 'img-2655',
    src: '/gallery/IMG_2655.jpg',
    alt: 'Moderní účes',
    title: 'Moderní Styling',
    description: 'Současné trendy',
    category: 'damske-strihy'
  },
  {
    id: 'img-2740',
    src: '/gallery/IMG_2740.jpg',
    alt: 'Dlouhé vlasy',
    title: 'Dlouhé Vlasy',
    description: 'Péče o dlouhé vlasy',
    category: 'damske-strihy'
  },
  {
    id: 'img-2758',
    src: '/gallery/IMG_2758.jpg',
    alt: 'Střední délka',
    title: 'Polodlouhé Vlasy',
    description: 'Praktická délka',
    category: 'damske-strihy'
  },
  {
    id: 'img-2761',
    src: '/gallery/IMG_2761.jpg',
    alt: 'Vlnité vlasy',
    title: 'Přírodní Vlny',
    description: 'Jemné vlny',
    category: 'damske-strihy'
  },
  {
    id: 'img-2764',
    src: '/gallery/IMG_2764.jpg',
    alt: 'Barvené vlasy',
    title: 'Změna Barvy',
    description: 'Nová barva vlasů',
    category: 'barveni'
  },
  {
    id: 'alei6657',
    src: '/gallery/ALEI6657.jpg',
    alt: 'Kadeřnický salon',
    title: 'Naše Studio',
    description: 'Profesionální prostředí',
    category: 'damske-strihy'
  },
  {
    id: 'kcsm0452',
    src: '/gallery/KCSM0452.jpg',
    alt: 'Kadeřnické služby',
    title: 'Profesionální Péče',
    description: 'Kvalitní služby',
    category: 'damske-strihy'
  },
  {
    id: 'lbxa3910',
    src: '/gallery/LBXA3910.jpg',
    alt: 'Úprava vlasů',
    title: 'Profesionální Úprava',
    description: 'Odborná péče o vlasy',
    category: 'damske-strihy'
  },
  {
    id: 'xkfk8742',
    src: '/gallery/XKFK8742.jpg',
    alt: 'Styling vlasů',
    title: 'Kreativní Styling',
    description: 'Originální přístup',
    category: 'damske-strihy'
  },
  {
    id: 'xyzz3594',
    src: '/gallery/XYZZ3594.jpg',
    alt: 'Kadeřnické umění',
    title: 'Umění Kadeřnictví',
    description: 'Profesionální výsledky',
    category: 'damske-strihy'
  },
  {
    id: 'dols1184',
    src: '/gallery/DOLS1184.jpg',
    alt: 'Moderní účes',
    title: 'Trendy Účes',
    description: 'Aktuální módní trendy',
    category: 'damske-strihy'
  },
  {
    id: 'acrz3289',
    src: '/gallery/ACRZ3289.jpg',
    alt: 'Profesionální střih',
    title: 'Profesionální Přístup',
    description: 'Odborné provedení',
    category: 'damske-strihy'
  },
  {
    id: 'ja-hb',
    src: '/gallery/Já HB.jpg',
    alt: 'Kadeřnice POHODA',
    title: 'O Nás',
    description: 'Profesionální kadeřnice',
    category: 'damske-strihy'
  },
  {
    id: 'uvodni',
    src: '/gallery/úvodní foto.jpg',
    alt: 'Kadeřnictví POHODA',
    title: 'Vítejte v POHODĚ',
    description: 'Váš kadeřnický salon',
    category: 'damske-strihy'
  }
];

// Pomocné funkce pro filtrování
export const getImagesByCategory = (category: GalleryImage['category']): GalleryImage[] => {
  return galleryImages.filter(image => image.category === category);
};

export const getAllCategories = (): GalleryImage['category'][] => {
  return ['damske-strihy', 'panske-strihy', 'detske-strihy', 'barveni', 'meliry', 'kratkovlasky', 'spolecenske'];
};

export const getCategoryLabel = (category: GalleryImage['category']): string => {
  const labels = {
    'damske-strihy': 'Dámské Střihy',
    'panske-strihy': 'Pánské Střihy',
    'detske-strihy': 'Dětské Střihy',
    'barveni': 'Barvení',
    'meliry': 'Melíry',
    'kratkovlasky': 'Krátkovlásky',
    'spolecenske': 'Společenské Účesy'
  };
  return labels[category];
};
