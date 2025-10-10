export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'damske-strihy' | 'panske-strihy' | 'detske-strihy' | 'barveni' | 'meliry' | 'spolecenske-ucesy' | 'kratkovlasky';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'damsky-bob-1',
    src: '/gallery/dámský střih bob.jpg',
    alt: 'Dámský střih bob',
    title: 'Elegantní bob',
    description: 'Klasický dámský střih bob',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-2',
    src: '/gallery/dámský střih bob(1).jpg',
    alt: 'Dámský střih bob',
    title: 'Moderní bob',
    description: 'Stylový bob střih',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-3',
    src: '/gallery/dámský střih bob(2).jpg',
    alt: 'Dámský střih bob',
    title: 'Bob s vrstvami',
    description: 'Bob střih s jemnými vrstvami',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-4',
    src: '/gallery/dámský střih bob(3).jpg',
    alt: 'Dámský střih bob',
    title: 'Asymetrický bob',
    description: 'Moderní asymetrický bob',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-5',
    src: '/gallery/dámský střih bob(4).jpg',
    alt: 'Dámský střih bob',
    title: 'Texturovaný bob',
    description: 'Bob s texturou',
    category: 'damske-strihy'
  },
  {
    id: 'kratkovlasky-1',
    src: '/gallery/krátkovlásky.jpg',
    alt: 'Krátkovlasý střih',
    title: 'Krátký střih',
    description: 'Praktický krátký střih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-2',
    src: '/gallery/krátkovlásky(1).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Pixie střih',
    description: 'Odvážný pixie',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-3',
    src: '/gallery/krátkovlásky(2).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Krátký layered',
    description: 'Vrstvený střih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-4',
    src: '/gallery/krátkovlásky(3).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Elegantní krátký',
    description: 'Sofistikovaný účes',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-5',
    src: '/gallery/krátkovlásky(4).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Moderní short cut',
    description: 'Trendy střih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-6',
    src: '/gallery/krátkovlásky(5).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Asymetrický krátký',
    description: 'Asymetrie',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-7',
    src: '/gallery/krátkovlásky(6).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Texturovaný krátký',
    description: 'S texturou',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-8',
    src: '/gallery/krátkovlásky(7).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Undercut pro dámy',
    description: 'Moderní undercut',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-9',
    src: '/gallery/krátkovlásky(8).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Krátký s ofinou',
    description: 'Se stylovou ofinou',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-10',
    src: '/gallery/krátkovlásky(9).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Messy short',
    description: 'Rozcuchaný look',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-11',
    src: '/gallery/krátkovlásky(10).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Slick short',
    description: 'Uhlazený střih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-12',
    src: '/gallery/krátkovlásky(11).jpg',
    alt: 'Krátkovlasý střih',
    title: 'Krátký s objemem',
    description: 'Objemný účes',
    category: 'kratkovlasky'
  },
  {
    id: 'pansky-strih-1',
    src: '/gallery/foto po pánský střih.jpg',
    alt: 'Pánský střih po',
    title: 'Pánský střih',
    description: 'Profesionální střih',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-2',
    src: '/gallery/foto před pánské2.jpg',
    alt: 'Pánský střih před',
    title: 'Před úpravou',
    description: 'Výchozí stav',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-3',
    src: '/gallery/pánský střih po.jpg',
    alt: 'Pánský střih po',
    title: 'Moderní pánský střih',
    description: 'Výsledek střihu',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-4',
    src: '/gallery/pánský střih po(1).jpg',
    alt: 'Pánský střih po',
    title: 'Klasický střih',
    description: 'Elegantní účes',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-5',
    src: '/gallery/pánský střih po2.jpg',
    alt: 'Pánský střih po',
    title: 'Trendy střih',
    description: 'Moderní styling',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-6',
    src: '/gallery/pánský střih před.jpg',
    alt: 'Pánský střih před',
    title: 'Před úpravou',
    description: 'Výchozí stav',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-7',
    src: '/gallery/pánský střih před2.jpg',
    alt: 'Pánský střih před',
    title: 'Před střihem',
    description: 'Před úpravou',
    category: 'panske-strihy'
  },
  {
    id: 'detsky-strih-1',
    src: '/gallery/dětský střih.jpg',
    alt: 'Dětský střih',
    title: 'Dětský střih',
    description: 'Profesionální střihání',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-2',
    src: '/gallery/dětský střih(1).jpg',
    alt: 'Dětský střih',
    title: 'Dětský účes',
    description: 'Hravý střih',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-3',
    src: '/gallery/dětský střih(2).jpg',
    alt: 'Dětský střih',
    title: 'Moderní dětský',
    description: 'Stylový střih',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-4',
    src: '/gallery/dětský střih(3).jpg',
    alt: 'Dětský střih',
    title: 'Klasický dětský',
    description: 'Praktický střih',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-5',
    src: '/gallery/dětský střih(4).jpg',
    alt: 'Dětský střih',
    title: 'Trendy dětský',
    description: 'Módní účes',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-6',
    src: '/gallery/dětský střih(5).jpg',
    alt: 'Dětský střih',
    title: 'Cool dětský',
    description: 'Stylový účes',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-foto-1',
    src: '/gallery/foto po dětské.jpg',
    alt: 'Dětský střih po',
    title: 'Výsledek',
    description: 'Po úpravě',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-foto-2',
    src: '/gallery/foto po dětské(1).jpg',
    alt: 'Dětský střih po',
    title: 'Účes hotový',
    description: 'Finální výsledek',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-foto-3',
    src: '/gallery/foto před dětské.jpg',
    alt: 'Dětský střih před',
    title: 'Před střihem',
    description: 'Výchozí stav',
    category: 'detske-strihy'
  },
  {
    id: 'cool-blond-1',
    src: '/gallery/cool blond po.jpg',
    alt: 'Cool blond po',
    title: 'Cool blond',
    description: 'Chladné blond tóny',
    category: 'barveni'
  },
  {
    id: 'cool-blond-2',
    src: '/gallery/cool blond po(1).jpg',
    alt: 'Cool blond po',
    title: 'Cool blond styling',
    description: 'Chladné tóny',
    category: 'barveni'
  },
  {
    id: 'cool-blond-3',
    src: '/gallery/cool blond po(2).jpg',
    alt: 'Cool blond po',
    title: 'Cool blond efekt',
    description: 'Perfektní chladné blond',
    category: 'barveni'
  },
  {
    id: 'cool-blond-4',
    src: '/gallery/cool blond po(3).jpg',
    alt: 'Cool blond po',
    title: 'Cool blond výsledek',
    description: 'Zářivé blond',
    category: 'barveni'
  },
  {
    id: 'cool-blond-5',
    src: '/gallery/cool blond před.jpg',
    alt: 'Cool blond před',
    title: 'Před cool blond',
    description: 'Stav před barvením',
    category: 'barveni'
  },
  {
    id: 'cool-bond-1',
    src: '/gallery/cool bond před.jpg',
    alt: 'Cool bond před',
    title: 'Před úpravou',
    description: 'Výchozí stav',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-1',
    src: '/gallery/foto po vanila blond.jpg',
    alt: 'Vanila blond po',
    title: 'Vanila blond',
    description: 'Teplé vanilkové tóny',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-2',
    src: '/gallery/foto po vanila blond(1).jpg',
    alt: 'Vanila blond po',
    title: 'Vanila blond styling',
    description: 'Jemné odstíny',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-3',
    src: '/gallery/foto po vanila blond(2).jpg',
    alt: 'Vanila blond po',
    title: 'Vanila blond efekt',
    description: 'Krásné tóny',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-4',
    src: '/gallery/foto vanila blond po.jpg',
    alt: 'Vanila blond hotový',
    title: 'Vanila blond výsledek',
    description: 'Finální blond',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-5',
    src: '/gallery/foto vanila blond před.jpg',
    alt: 'Vanila blond před',
    title: 'Před vanila blond',
    description: 'Stav před barvením',
    category: 'barveni'
  },
  {
    id: 'freehand-1',
    src: '/gallery/foto po freehand.jpg',
    alt: 'Freehand technika po',
    title: 'Freehand barvení',
    description: 'Volná ruka technika',
    category: 'barveni'
  },
  {
    id: 'freehand-2',
    src: '/gallery/foto po freehand(1).jpg',
    alt: 'Freehand technika po',
    title: 'Freehand styling',
    description: 'Kreativní barvení',
    category: 'barveni'
  },
  {
    id: 'freehand-3',
    src: '/gallery/foto po freehand(2).jpg',
    alt: 'Freehand technika po',
    title: 'Freehand efekt',
    description: 'Přírodní přechody',
    category: 'barveni'
  },
  {
    id: 'freehand-4',
    src: '/gallery/foto před freehand.jpg',
    alt: 'Freehand před',
    title: 'Před freehand',
    description: 'Stav před úpravou',
    category: 'barveni'
  },
  {
    id: 'freehand-zrz-1',
    src: '/gallery/foto po freehand zrz.jpg',
    alt: 'Freehand zrzavá po',
    title: 'Freehand zrzavá',
    description: 'Zrzavé tóny',
    category: 'barveni'
  },
  {
    id: 'freehand-zrz-2',
    src: '/gallery/foto před freehand zrz.jpg',
    alt: 'Freehand zrzavá před',
    title: 'Před freehand zrzavá',
    description: 'Výchozí stav',
    category: 'barveni'
  },
  {
    id: 'freehand-zrz-3',
    src: '/gallery/foto před freehand zrz(1).jpg',
    alt: 'Freehand zrzavá před',
    title: 'Před úpravou',
    description: 'Před aplikací',
    category: 'barveni'
  },
  {
    id: 'folayge-1',
    src: '/gallery/foto po folayge.jpg',
    alt: 'Foliage technika po',
    title: 'Foliage',
    description: 'Moderní foliage',
    category: 'meliry'
  },
  {
    id: 'folayge-2',
    src: '/gallery/foto před folayge.jpg',
    alt: 'Foliage před',
    title: 'Před foliage',
    description: 'Stav před úpravou',
    category: 'meliry'
  },
  {
    id: 'folayge-3',
    src: '/gallery/foto po folayge2.jpg',
    alt: 'Foliage po',
    title: 'Foliage styling',
    description: 'Profesionální foliage',
    category: 'meliry'
  },
  {
    id: 'folayge-4',
    src: '/gallery/foto před folayge2.jpg',
    alt: 'Foliage před',
    title: 'Před foliage',
    description: 'Výchozí stav',
    category: 'meliry'
  },
  {
    id: 'folayge-5',
    src: '/gallery/foto po folayge2(1).jpg',
    alt: 'Foliage po',
    title: 'Foliage efekt',
    description: 'Krásné přechody',
    category: 'meliry'
  },
  {
    id: 'folayge-6',
    src: '/gallery/foto před folayge2(1).jpg',
    alt: 'Foliage před',
    title: 'Před aplikací',
    description: 'Před technikou',
    category: 'meliry'
  },
  {
    id: 'falayge-1',
    src: '/gallery/foto po falayge.jpg',
    alt: 'Balayage po',
    title: 'Balayage',
    description: 'Profesionální balayage',
    category: 'meliry'
  },
  {
    id: 'mikromelir-1',
    src: '/gallery/mikromelír.jpg',
    alt: 'Mikromelír',
    title: 'Mikromelír',
    description: 'Jemný mikromelír',
    category: 'meliry'
  },
  {
    id: 'mikromelir-2',
    src: '/gallery/mikromelír(1).jpg',
    alt: 'Mikromelír',
    title: 'Jemný melír',
    description: 'Subtilní melírování',
    category: 'meliry'
  },
  {
    id: 'mikromelir-3',
    src: '/gallery/mikromelír(2).jpg',
    alt: 'Mikromelír',
    title: 'Přírodní melír',
    description: 'Přirozené pramínky',
    category: 'meliry'
  },
  {
    id: 'mikromelir-4',
    src: '/gallery/mikromelír(3).jpg',
    alt: 'Mikromelír',
    title: 'Decentní melír',
    description: 'Nenápadné zesvětlení',
    category: 'meliry'
  },
  {
    id: 'mikro-melir',
    src: '/gallery/mikro melír.jpg',
    alt: 'Mikro melír',
    title: 'Mikro melír',
    description: 'Extra jemný melír',
    category: 'meliry'
  },
  {
    id: 'spolecensky-uces-1',
    src: '/gallery/společenský účes.jpg',
    alt: 'Společenský účes',
    title: 'Společenský účes',
    description: 'Elegantní účes',
    category: 'spolecenske-ucesy'
  },
  {
    id: 'spolecensky-uces-2',
    src: '/gallery/společenský účes(1).jpg',
    alt: 'Společenský účes',
    title: 'Slavnostní účes',
    description: 'Profesionální styling',
    category: 'spolecenske-ucesy'
  },
  {
    id: 'img-2653',
    src: '/gallery/IMG_2653.jpg',
    alt: 'Dámský účes',
    title: 'Stylový účes',
    description: 'Moderní styling',
    category: 'damske-strihy'
  },
  {
    id: 'img-2655',
    src: '/gallery/IMG_2655.jpg',
    alt: 'Elegantní účes',
    title: 'Elegance',
    description: 'Profesionální účes',
    category: 'damske-strihy'
  },
  {
    id: 'img-2740',
    src: '/gallery/IMG_2740.jpg',
    alt: 'Objemný účes',
    title: 'Objem',
    description: 'Dokonalý objem',
    category: 'damske-strihy'
  },
  {
    id: 'img-2758',
    src: '/gallery/IMG_2758.jpg',
    alt: 'Moderní střih',
    title: 'Moderní look',
    description: 'Trendy střih',
    category: 'damske-strihy'
  },
  {
    id: 'img-2761',
    src: '/gallery/IMG_2761.jpg',
    alt: 'Stylový účes',
    title: 'Stylový look',
    description: 'Profesionální styling',
    category: 'damske-strihy'
  },
  {
    id: 'img-2764',
    src: '/gallery/IMG_2764.jpg',
    alt: 'Krásný účes',
    title: 'Krásný styling',
    description: 'Elegantní úprava',
    category: 'damske-strihy'
  },
  {
    id: 'alei-6657',
    src: '/gallery/ALEI6657.jpg',
    alt: 'Profesionální práce',
    title: 'Naše práce',
    description: 'Výsledek péče',
    category: 'damske-strihy'
  },
  {
    id: 'kcsm-0452',
    src: '/gallery/KCSM0452.jpg',
    alt: 'Kadeřnická práce',
    title: 'Profesionální úprava',
    description: 'Kvalitní práce',
    category: 'damske-strihy'
  },
  {
    id: 'lbxa-3910',
    src: '/gallery/LBXA3910.jpg',
    alt: 'Styling',
    title: 'Moderní styling',
    description: 'Trendy účes',
    category: 'damske-strihy'
  },
  {
    id: 'xkfk-8742',
    src: '/gallery/XKFK8742.jpg',
    alt: 'Účes',
    title: 'Stylový účes',
    description: 'Profesionální péče',
    category: 'damske-strihy'
  },
  {
    id: 'xyzz-3594',
    src: '/gallery/XYZZ3594.jpg',
    alt: 'Kadeřnická péče',
    title: 'Naše péče',
    description: 'Kvalitní služby',
    category: 'damske-strihy'
  },
  {
    id: 'acrz-3289',
    src: '/gallery/ACRZ3289.jpg',
    alt: 'Profesionální střih',
    title: 'Profesionální práce',
    description: 'Kvalitní střih',
    category: 'damske-strihy'
  },
  {
    id: 'dols-1184',
    src: '/gallery/DOLS1184.jpg',
    alt: 'Moderní účes',
    title: 'Moderní styling',
    description: 'Trendy účes',
    category: 'damske-strihy'
  },
  {
    id: 'featured',
    src: '/gallery/494411993_9616073661780900_4629982627161214151_n.jpg',
    alt: 'Vybraná práce',
    title: 'Vybraná práce',
    description: 'Naše oblíbená práce',
    category: 'damske-strihy'
  }
];

export const getImagesByCategory = (category: GalleryImage['category']): GalleryImage[] => {
  return galleryImages.filter(image => image.category === category);
};

export const getAllCategories = (): GalleryImage['category'][] => {
  return ['damske-strihy', 'panske-strihy', 'detske-strihy', 'barveni', 'meliry', 'spolecenske-ucesy', 'kratkovlasky'];
};

export const getCategoryLabel = (category: GalleryImage['category']): string => {
  const labels = {
    'damske-strihy': 'Dámské střihy',
    'panske-strihy': 'Pánské střihy',
    'detske-strihy': 'Dětské střihy',
    'barveni': 'Barvení',
    'meliry': 'Melíry',
    'spolecenske-ucesy': 'Společenské účesy',
    'kratkovlasky': 'Krátkovlásky'
  };
  return labels[category];
};
