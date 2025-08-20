export interface GalleryItem {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
}

export interface GallerySection {
  id: string;
  title: string;
  items: GalleryItem[];
}

export const galleryData: GallerySection[] = [
  {
    id: 'vlasy',
    title: 'Vlasy',
    items: [
      {
        id: 'hair-1',
        before: 'https://images.pexels.com/photos/3992866/pexels-photo-3992866.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3992856/pexels-photo-3992856.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Kompletní změna barvy',
        description: 'Přechod z tmavé na světlou barvu s profesionálním postupem'
      },
      {
        id: 'hair-2',
        before: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Moderní sestřih',
        description: 'Stylový bob s barevnými reflexy'
      },
      {
        id: 'hair-3',
        before: 'https://images.pexels.com/photos/3992865/pexels-photo-3992865.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3992851/pexels-photo-3992851.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Balayage technika',
        description: 'Přírodní přechody pro dlouhé vlasy'
      },
      {
        id: 'hair-4',
        before: 'https://images.pexels.com/photos/3065212/pexels-photo-3065212.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Keratin péče',
        description: 'Vyhlazení a regenerace poškozených vlasů'
      }
    ]
  }
];