export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'before-after' | 'hairstyles' | 'salon' | 'products';
}

export const galleryImages: GalleryImage[] = [
  // Zde budete moci přidat své obrázky
  // Příklad struktury:
  {
    id: 'hair-1',
    src: 'https://images.pexels.com/photos/3992856/pexels-photo-3992856.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Elegantní dámský střih',
    title: 'Moderní bob střih',
    description: 'Stylový bob s jemnými vlnami',
    category: 'hairstyles'
  },
  {
    id: 'hair-2',
    src: 'https://images.pexels.com/photos/3992865/pexels-photo-3992865.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Dlouhé vlasy s melírem',
    title: 'Balayage technika',
    description: 'Přírodní přechody pro dlouhé vlasy',
    category: 'hairstyles'
  },
  {
    id: 'hair-3',
    src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Společenský účes',
    title: 'Svatební účes',
    description: 'Elegantní účes pro speciální příležitosti',
    category: 'hairstyles'
  },
  {
    id: 'hair-4',
    src: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Krátký pixie střih',
    title: 'Pixie cut',
    description: 'Odvážný krátký střih',
    category: 'hairstyles'
  },
  {
    id: 'salon-1',
    src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interiér salonu',
    title: 'Naše studio',
    description: 'Moderní a příjemné prostředí',
    category: 'salon'
  },
  {
    id: 'salon-2',
    src: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Kadeřnické křeslo',
    title: 'Profesionální vybavení',
    description: 'Kvalitní nástroje a pohodlí',
    category: 'salon'
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