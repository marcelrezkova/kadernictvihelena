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
  },
  {
    id: 'plet',
    title: 'Pleť',
    items: [
      {
        id: 'skin-1',
        before: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Hloubkové čištění pleti',
        description: 'Kompletní kosmetické ošetření s viditelným výsledkem'
      },
      {
        id: 'skin-2',
        before: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Anti-aging péče',
        description: 'Ošetření pro zralou pleť s vypínacím efektem'
      },
      {
        id: 'skin-3',
        before: 'https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Hydratační maska',
        description: 'Intenzivní hydratace pro suchou pleť'
      }
    ]
  },
  {
    id: 'liceni',
    title: 'Líčení',
    items: [
      {
        id: 'makeup-1',
        before: 'https://images.pexels.com/photos/3997996/pexels-photo-3997996.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3997995/pexels-photo-3997995.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Večerní líčení',
        description: 'Elegantní makeup pro speciální příležitosti'
      },
      {
        id: 'makeup-2',
        before: 'https://images.pexels.com/photos/3997997/pexels-photo-3997997.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3997998/pexels-photo-3997998.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Svatební makeup',
        description: 'Romantické líčení pro nejkrásnější den'
      },
      {
        id: 'makeup-3',
        before: 'https://images.pexels.com/photos/3997999/pexels-photo-3997999.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/3998000/pexels-photo-3998000.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Denní makeup',
        description: 'Přirozený vzhled pro každodenní nošení'
      }
    ]
  }
];