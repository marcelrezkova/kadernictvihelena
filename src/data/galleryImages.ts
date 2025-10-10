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
    src: '/gallery/dĂˇmskĂ˝ stĹ™ih bob.jpg',
    alt: 'DĂˇmskĂ˝ stĹ™ih bob',
    title: 'ElegantnĂ­ bob',
    description: 'KlasickĂ˝ dĂˇmskĂ˝ stĹ™ih bob',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-2',
    src: '/gallery/dĂˇmskĂ˝ stĹ™ih bob(1).jpg',
    alt: 'DĂˇmskĂ˝ stĹ™ih bob',
    title: 'ModernĂ­ bob',
    description: 'StylovĂ˝ bob stĹ™ih',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-3',
    src: '/gallery/dĂˇmskĂ˝ stĹ™ih bob(2).jpg',
    alt: 'DĂˇmskĂ˝ stĹ™ih bob',
    title: 'Bob s vrstvami',
    description: 'Bob stĹ™ih s jemnĂ˝mi vrstvami',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-4',
    src: '/gallery/dĂˇmskĂ˝ stĹ™ih bob(3).jpg',
    alt: 'DĂˇmskĂ˝ stĹ™ih bob',
    title: 'AsymetrickĂ˝ bob',
    description: 'ModernĂ­ asymetrickĂ˝ bob',
    category: 'damske-strihy'
  },
  {
    id: 'damsky-bob-5',
    src: '/gallery/dĂˇmskĂ˝ stĹ™ih bob(4).jpg',
    alt: 'DĂˇmskĂ˝ stĹ™ih bob',
    title: 'TexturovanĂ˝ bob',
    description: 'Bob s texturou',
    category: 'damske-strihy'
  },
  {
    id: 'kratkovlasky-1',
    src: '/gallery/krĂˇtkovlĂˇsky.jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'KrĂˇtkĂ˝ stĹ™ih',
    description: 'PraktickĂ˝ krĂˇtkĂ˝ stĹ™ih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-2',
    src: '/gallery/krĂˇtkovlĂˇsky(1).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'Pixie stĹ™ih',
    description: 'OdvĂˇĹľnĂ˝ pixie',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-3',
    src: '/gallery/krĂˇtkovlĂˇsky(2).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'KrĂˇtkĂ˝ layered',
    description: 'VrstvenĂ˝ stĹ™ih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-4',
    src: '/gallery/krĂˇtkovlĂˇsky(3).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'ElegantnĂ­ krĂˇtkĂ˝',
    description: 'SofistikovanĂ˝ ĂşÄŤes',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-5',
    src: '/gallery/krĂˇtkovlĂˇsky(4).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'ModernĂ­ short cut',
    description: 'Trendy stĹ™ih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-6',
    src: '/gallery/krĂˇtkovlĂˇsky(5).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'AsymetrickĂ˝ krĂˇtkĂ˝',
    description: 'Asymetrie',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-7',
    src: '/gallery/krĂˇtkovlĂˇsky(6).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'TexturovanĂ˝ krĂˇtkĂ˝',
    description: 'S texturou',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-8',
    src: '/gallery/krĂˇtkovlĂˇsky(7).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'Undercut pro dĂˇmy',
    description: 'ModernĂ­ undercut',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-9',
    src: '/gallery/krĂˇtkovlĂˇsky(8).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'KrĂˇtkĂ˝ s ofinou',
    description: 'Se stylovou ofinou',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-10',
    src: '/gallery/krĂˇtkovlĂˇsky(9).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'Messy short',
    description: 'RozcuchanĂ˝ look',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-11',
    src: '/gallery/krĂˇtkovlĂˇsky(10).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'Slick short',
    description: 'UhlazenĂ˝ stĹ™ih',
    category: 'kratkovlasky'
  },
  {
    id: 'kratkovlasky-12',
    src: '/gallery/krĂˇtkovlĂˇsky(11).jpg',
    alt: 'KrĂˇtkovlasĂ˝ stĹ™ih',
    title: 'KrĂˇtkĂ˝ s objemem',
    description: 'ObjemnĂ˝ ĂşÄŤes',
    category: 'kratkovlasky'
  },
  {
    id: 'pansky-strih-1',
    src: '/gallery/foto po pĂˇnskĂ˝ stĹ™ih.jpg',
    alt: 'PĂˇnskĂ˝ stĹ™ih po',
    title: 'PĂˇnskĂ˝ stĹ™ih',
    description: 'ProfesionĂˇlnĂ­ stĹ™ih',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-2',
    src: '/gallery/foto pĹ™ed pĂˇnskĂ©2.jpg',
    alt: 'PĂˇnskĂ˝ stĹ™ih pĹ™ed',
    title: 'PĹ™ed Ăşpravou',
    description: 'VĂ˝chozĂ­ stav',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-3',
    src: '/gallery/pĂˇnskĂ˝ stĹ™ih po.jpg',
    alt: 'PĂˇnskĂ˝ stĹ™ih po',
    title: 'ModernĂ­ pĂˇnskĂ˝ stĹ™ih',
    description: 'VĂ˝sledek stĹ™ihu',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-4',
    src: '/gallery/pĂˇnskĂ˝ stĹ™ih po(1).jpg',
    alt: 'PĂˇnskĂ˝ stĹ™ih po',
    title: 'KlasickĂ˝ stĹ™ih',
    description: 'ElegantnĂ­ ĂşÄŤes',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-5',
    src: '/gallery/pĂˇnskĂ˝ stĹ™ih po2.jpg',
    alt: 'PĂˇnskĂ˝ stĹ™ih po',
    title: 'Trendy stĹ™ih',
    description: 'ModernĂ­ styling',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-6',
    src: '/gallery/pĂˇnskĂ˝ stĹ™ih pĹ™ed.jpg',
    alt: 'PĂˇnskĂ˝ stĹ™ih pĹ™ed',
    title: 'PĹ™ed Ăşpravou',
    description: 'VĂ˝chozĂ­ stav',
    category: 'panske-strihy'
  },
  {
    id: 'pansky-strih-7',
    src: '/gallery/pĂˇnskĂ˝ stĹ™ih pĹ™ed2.jpg',
    alt: 'PĂˇnskĂ˝ stĹ™ih pĹ™ed',
    title: 'PĹ™ed stĹ™ihem',
    description: 'PĹ™ed Ăşpravou',
    category: 'panske-strihy'
  },
  {
    id: 'detsky-strih-1',
    src: '/gallery/dÄ›tskĂ˝ stĹ™ih.jpg',
    alt: 'DÄ›tskĂ˝ stĹ™ih',
    title: 'DÄ›tskĂ˝ stĹ™ih',
    description: 'ProfesionĂˇlnĂ­ stĹ™ihĂˇnĂ­',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-2',
    src: '/gallery/dÄ›tskĂ˝ stĹ™ih(1).jpg',
    alt: 'DÄ›tskĂ˝ stĹ™ih',
    title: 'DÄ›tskĂ˝ ĂşÄŤes',
    description: 'HravĂ˝ stĹ™ih',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-3',
    src: '/gallery/dÄ›tskĂ˝ stĹ™ih(2).jpg',
    alt: 'DÄ›tskĂ˝ stĹ™ih',
    title: 'ModernĂ­ dÄ›tskĂ˝',
    description: 'StylovĂ˝ stĹ™ih',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-4',
    src: '/gallery/dÄ›tskĂ˝ stĹ™ih(3).jpg',
    alt: 'DÄ›tskĂ˝ stĹ™ih',
    title: 'KlasickĂ˝ dÄ›tskĂ˝',
    description: 'PraktickĂ˝ stĹ™ih',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-5',
    src: '/gallery/dÄ›tskĂ˝ stĹ™ih(4).jpg',
    alt: 'DÄ›tskĂ˝ stĹ™ih',
    title: 'Trendy dÄ›tskĂ˝',
    description: 'MĂłdnĂ­ ĂşÄŤes',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-strih-6',
    src: '/gallery/dÄ›tskĂ˝ stĹ™ih(5).jpg',
    alt: 'DÄ›tskĂ˝ stĹ™ih',
    title: 'Cool dÄ›tskĂ˝',
    description: 'StylovĂ˝ ĂşÄŤes',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-foto-1',
    src: '/gallery/foto po dÄ›tskĂ©.jpg',
    alt: 'DÄ›tskĂ˝ stĹ™ih po',
    title: 'VĂ˝sledek',
    description: 'Po ĂşpravÄ›',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-foto-2',
    src: '/gallery/foto po dÄ›tskĂ©(1).jpg',
    alt: 'DÄ›tskĂ˝ stĹ™ih po',
    title: 'ĂšÄŤes hotovĂ˝',
    description: 'FinĂˇlnĂ­ vĂ˝sledek',
    category: 'detske-strihy'
  },
  {
    id: 'detsky-foto-3',
    src: '/gallery/foto pĹ™ed dÄ›tskĂ©.jpg',
    alt: 'DÄ›tskĂ˝ stĹ™ih pĹ™ed',
    title: 'PĹ™ed stĹ™ihem',
    description: 'VĂ˝chozĂ­ stav',
    category: 'detske-strihy'
  },
  {
    id: 'cool-blond-1',
    src: '/gallery/cool blond po.jpg',
    alt: 'Cool blond po',
    title: 'Cool blond',
    description: 'ChladnĂ© blond tĂłny',
    category: 'barveni'
  },
  {
    id: 'cool-blond-2',
    src: '/gallery/cool blond po(1).jpg',
    alt: 'Cool blond po',
    title: 'Cool blond styling',
    description: 'ChladnĂ© tĂłny',
    category: 'barveni'
  },
  {
    id: 'cool-blond-3',
    src: '/gallery/cool blond po(2).jpg',
    alt: 'Cool blond po',
    title: 'Cool blond efekt',
    description: 'PerfektnĂ­ chladnĂ© blond',
    category: 'barveni'
  },
  {
    id: 'cool-blond-4',
    src: '/gallery/cool blond po(3).jpg',
    alt: 'Cool blond po',
    title: 'Cool blond vĂ˝sledek',
    description: 'ZĂˇĹ™ivĂ© blond',
    category: 'barveni'
  },
  {
    id: 'cool-blond-5',
    src: '/gallery/cool blond pĹ™ed.jpg',
    alt: 'Cool blond pĹ™ed',
    title: 'PĹ™ed cool blond',
    description: 'Stav pĹ™ed barvenĂ­m',
    category: 'barveni'
  },
  {
    id: 'cool-bond-1',
    src: '/gallery/cool bond pĹ™ed.jpg',
    alt: 'Cool bond pĹ™ed',
    title: 'PĹ™ed Ăşpravou',
    description: 'VĂ˝chozĂ­ stav',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-1',
    src: '/gallery/foto po vanila blond.jpg',
    alt: 'Vanila blond po',
    title: 'Vanila blond',
    description: 'TeplĂ© vanilkovĂ© tĂłny',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-2',
    src: '/gallery/foto po vanila blond(1).jpg',
    alt: 'Vanila blond po',
    title: 'Vanila blond styling',
    description: 'JemnĂ© odstĂ­ny',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-3',
    src: '/gallery/foto po vanila blond(2).jpg',
    alt: 'Vanila blond po',
    title: 'Vanila blond efekt',
    description: 'KrĂˇsnĂ© tĂłny',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-4',
    src: '/gallery/foto vanila blond po.jpg',
    alt: 'Vanila blond hotovĂ˝',
    title: 'Vanila blond vĂ˝sledek',
    description: 'FinĂˇlnĂ­ blond',
    category: 'barveni'
  },
  {
    id: 'vanila-blond-5',
    src: '/gallery/foto vanila blond pĹ™ed.jpg',
    alt: 'Vanila blond pĹ™ed',
    title: 'PĹ™ed vanila blond',
    description: 'Stav pĹ™ed barvenĂ­m',
    category: 'barveni'
  },
  {
    id: 'freehand-1',
    src: '/gallery/foto po freehand.jpg',
    alt: 'Freehand technika po',
    title: 'Freehand barvenĂ­',
    description: 'VolnĂˇ ruka technika',
    category: 'barveni'
  },
  {
    id: 'freehand-2',
    src: '/gallery/foto po freehand(1).jpg',
    alt: 'Freehand technika po',
    title: 'Freehand styling',
    description: 'KreativnĂ­ barvenĂ­',
    category: 'barveni'
  },
  {
    id: 'freehand-3',
    src: '/gallery/foto po freehand(2).jpg',
    alt: 'Freehand technika po',
    title: 'Freehand efekt',
    description: 'PĹ™Ă­rodnĂ­ pĹ™echody',
    category: 'barveni'
  },
  {
    id: 'freehand-4',
    src: '/gallery/foto pĹ™ed freehand.jpg',
    alt: 'Freehand pĹ™ed',
    title: 'PĹ™ed freehand',
    description: 'Stav pĹ™ed Ăşpravou',
    category: 'barveni'
  },
  {
    id: 'folayge-1',
    src: '/gallery/foto po folayge.jpg',
    alt: 'Foliage technika po',
    title: 'Foliage',
    description: 'ModernĂ­ foliage',
    category: 'meliry'
  },
  {
    id: 'folayge-2',
    src: '/gallery/foto pĹ™ed folayge.jpg',
    alt: 'Foliage pĹ™ed',
    title: 'PĹ™ed foliage',
    description: 'Stav pĹ™ed Ăşpravou',
    category: 'meliry'
  },
  {
    id: 'folayge-3',
    src: '/gallery/foto po folayge2.jpg',
    alt: 'Foliage po',
    title: 'Foliage styling',
    description: 'ProfesionĂˇlnĂ­ foliage',
    category: 'meliry'
  },
  {
    id: 'folayge-4',
    src: '/gallery/foto pĹ™ed folayge2.jpg',
    alt: 'Foliage pĹ™ed',
    title: 'PĹ™ed foliage',
    description: 'VĂ˝chozĂ­ stav',
    category: 'meliry'
  },
  {
    id: 'folayge-5',
    src: '/gallery/foto po folayge2(1).jpg',
    alt: 'Foliage po',
    title: 'Foliage efekt',
    description: 'KrĂˇsnĂ© pĹ™echody',
    category: 'meliry'
  },
  {
    id: 'folayge-6',
    src: '/gallery/foto pĹ™ed folayge2(1).jpg',
    alt: 'Foliage pĹ™ed',
    title: 'PĹ™ed aplikacĂ­',
    description: 'PĹ™ed technikou',
    category: 'meliry'
  },
  {
    id: 'falayge-1',
    src: '/gallery/foto po falayge.jpg',
    alt: 'Balayage po',
    title: 'Balayage',
    description: 'ProfesionĂˇlnĂ­ balayage',
    category: 'meliry'
  },
  {
    id: 'mikromelir-1',
    src: '/gallery/mikromelĂ­r.jpg',
    alt: 'MikromelĂ­r',
    title: 'MikromelĂ­r',
    description: 'JemnĂ˝ mikromelĂ­r',
    category: 'meliry'
  },
  {
    id: 'mikromelir-2',
    src: '/gallery/mikromelĂ­r(1).jpg',
    alt: 'MikromelĂ­r',
    title: 'JemnĂ˝ melĂ­r',
    description: 'SubtilnĂ­ melĂ­rovĂˇnĂ­',
    category: 'meliry'
  },
  {
    id: 'mikromelir-3',
    src: '/gallery/mikromelĂ­r(2).jpg',
    alt: 'MikromelĂ­r',
    title: 'PĹ™Ă­rodnĂ­ melĂ­r',
    description: 'PĹ™irozenĂ© pramĂ­nky',
    category: 'meliry'
  },
  {
    id: 'mikromelir-4',
    src: '/gallery/mikromelĂ­r(3).jpg',
    alt: 'MikromelĂ­r',
    title: 'DecentnĂ­ melĂ­r',
    description: 'NenĂˇpadnĂ© zesvÄ›tlenĂ­',
    category: 'meliry'
  },
  {
    id: 'mikro-melir',
    src: '/gallery/mikro melĂ­r.jpg',
    alt: 'Mikro melĂ­r',
    title: 'Mikro melĂ­r',
    description: 'Extra jemnĂ˝ melĂ­r',
    category: 'meliry'
  },
  {
    id: 'spolecensky-uces-1',
    src: '/gallery/spoleÄŤenskĂ˝ ĂşÄŤes.jpg',
    alt: 'SpoleÄŤenskĂ˝ ĂşÄŤes',
    title: 'SpoleÄŤenskĂ˝ ĂşÄŤes',
    description: 'ElegantnĂ­ ĂşÄŤes',
    category: 'spolecenske-ucesy'
  },
  {
    id: 'spolecensky-uces-2',
    src: '/gallery/spoleÄŤenskĂ˝ ĂşÄŤes(1).jpg',
    alt: 'SpoleÄŤenskĂ˝ ĂşÄŤes',
    title: 'SlavnostnĂ­ ĂşÄŤes',
    description: 'ProfesionĂˇlnĂ­ styling',
    category: 'spolecenske-ucesy'
  },
  {
    id: 'img-2653',
    src: '/gallery/IMG_2653.jpg',
    alt: 'DĂˇmskĂ˝ ĂşÄŤes',
    title: 'StylovĂ˝ ĂşÄŤes',
    description: 'ModernĂ­ styling',
    category: 'damske-strihy'
  },
  {
    id: 'img-2655',
    src: '/gallery/IMG_2655.jpg',
    alt: 'ElegantnĂ­ ĂşÄŤes',
    title: 'Elegance',
    description: 'ProfesionĂˇlnĂ­ ĂşÄŤes',
    category: 'damske-strihy'
  },
  {
    id: 'img-2740',
    src: '/gallery/IMG_2740.jpg',
    alt: 'ObjemnĂ˝ ĂşÄŤes',
    title: 'Objem',
    description: 'DokonalĂ˝ objem',
    category: 'damske-strihy'
  },
  {
    id: 'img-2758',
    src: '/gallery/IMG_2758.jpg',
    alt: 'ModernĂ­ stĹ™ih',
    title: 'ModernĂ­ look',
    description: 'Trendy stĹ™ih',
    category: 'damske-strihy'
  },
  {
    id: 'img-2761',
    src: '/gallery/IMG_2761.jpg',
    alt: 'StylovĂ˝ ĂşÄŤes',
    title: 'StylovĂ˝ look',
    description: 'ProfesionĂˇlnĂ­ styling',
    category: 'damske-strihy'
  },
  {
    id: 'img-2764',
    src: '/gallery/IMG_2764.jpg',
    alt: 'KrĂˇsnĂ˝ ĂşÄŤes',
    title: 'KrĂˇsnĂ˝ styling',
    description: 'ElegantnĂ­ Ăşprava',
    category: 'damske-strihy'
  },
  {
    id: 'alei-6657',
    src: '/gallery/ALEI6657.jpg',
    alt: 'ProfesionĂˇlnĂ­ prĂˇce',
    title: 'NaĹˇe prĂˇce',
    description: 'VĂ˝sledek pĂ©ÄŤe',
    category: 'damske-strihy'
  },
  {
    id: 'kcsm-0452',
    src: '/gallery/KCSM0452.jpg',
    alt: 'KadeĹ™nickĂˇ prĂˇce',
    title: 'ProfesionĂˇlnĂ­ Ăşprava',
    description: 'KvalitnĂ­ prĂˇce',
    category: 'damske-strihy'
  },
  {
    id: 'lbxa-3910',
    src: '/gallery/LBXA3910.jpg',
    alt: 'Styling',
    title: 'ModernĂ­ styling',
    description: 'Trendy ĂşÄŤes',
    category: 'damske-strihy'
  },
  {
    id: 'xkfk-8742',
    src: '/gallery/XKFK8742.jpg',
    alt: 'ĂšÄŤes',
    title: 'StylovĂ˝ ĂşÄŤes',
    description: 'ProfesionĂˇlnĂ­ pĂ©ÄŤe',
    category: 'damske-strihy'
  },
  {
    id: 'xyzz-3594',
    src: '/gallery/XYZZ3594.jpg',
    alt: 'KadeĹ™nickĂˇ pĂ©ÄŤe',
    title: 'NaĹˇe pĂ©ÄŤe',
    description: 'KvalitnĂ­ sluĹľby',
    category: 'damske-strihy'
  },
  {
    id: 'acrz-3289',
    src: '/gallery/ACRZ3289.jpg',
    alt: 'ProfesionĂˇlnĂ­ stĹ™ih',
    title: 'ProfesionĂˇlnĂ­ prĂˇce',
    description: 'KvalitnĂ­ stĹ™ih',
    category: 'damske-strihy'
  },
  {
    id: 'dols-1184',
    src: '/gallery/DOLS1184.jpg',
    alt: 'ModernĂ­ ĂşÄŤes',
    title: 'ModernĂ­ styling',
    description: 'Trendy ĂşÄŤes',
    category: 'damske-strihy'
  },
  {
    id: 'featured',
    src: '/gallery/494411993_9616073661780900_4629982627161214151_n.jpg',
    alt: 'VybranĂˇ prĂˇce',
    title: 'VybranĂˇ prĂˇce',
    description: 'NaĹˇe oblĂ­benĂˇ prĂˇce',
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
    'damske-strihy': 'DĂˇmskĂ© stĹ™ihy',
    'panske-strihy': 'PĂˇnskĂ© stĹ™ihy',
    'detske-strihy': 'DÄ›tskĂ© stĹ™ihy',
    'barveni': 'BarvenĂ­',
    'meliry': 'MelĂ­ry',
    'spolecenske-ucesy': 'SpoleÄŤenskĂ© ĂşÄŤesy',
    'kratkovlasky': 'KrĂˇtkovlĂˇsky'
  };
  return labels[category];
};
