import { Scissors, Sparkles, Heart, Zap, Star, Moon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  price?: string;
}

export const servicesData: Service[] = [
  {
    id: 'kadernictvi',
    title: 'Kadeřnictví',
    description: 'Dámské, pánské i dětské kadeřnictví s více než 20letou praxí',
    icon: Scissors,
    features: [
      'Dámské, pánské, dětské střihy',
      'Barvení, odbarvování, melírování',
      'Keratinové kúry a regenerace',
      'Slavnostní účesy'
    ],
    price: 'od 150 Kč'
  },
  {
    id: 'barveni',
    title: 'Barvení vlasů',
    description: 'Profesionální barvení, melírování a odbarvování všech typů vlasů',
    icon: Sparkles,
    features: [
      'Melírování přes čepici i folií',
      'Barevné melíry a tunely',
      'Kombinované barvení',
      'Stahování a odbarvování'
    ],
    price: 'od 310 Kč'
  },
  {
    id: 'liceni',
    title: 'Líčení',
    description: 'Profesionální líčení a péče o pokožku pro každou příležitost',
    icon: Heart,
    features: [
      'Denní i večerní líčení',
      'Svatební makeup',
      'Péče o pokožku',
      'Poradenství pro celkovou vizáž'
    ],
    price: 'na dotaz'
  },
  {
    id: 'specialni',
    title: 'Speciální služby',
    description: 'Prodloužení vlasů, trvalé ondulace a další speciální úpravy',
    icon: Zap,
    features: [
      'Prodloužení vlasů',
      'Trvalá ondulace',
      'Narovnání vlasů',
      'Sundávání nastavených vlasů'
    ],
    price: 'od 380 Kč'
  },
  {
    id: 'pece',
    title: 'Péče o vlasy',
    description: 'Regenerační kúry, masáže a speciální ošetření pro zdravé vlasy',
    icon: Star,
    features: [
      'Keratinové kúry',
      'Masáž hlavy',
      'Regenerace vlasů',
      'Přípravky Powerplex'
    ],
    price: 'od 40 Kč'
  },
  {
    id: 'ucesy',
    title: 'Společenské účesy',
    description: 'Slavnostní a svatební účesy vytvořené na míru každé klientce',
    icon: Moon,
    features: [
      'Svatební účesy',
      'Společenské účesy',
      'Účesy na míru',
      'Konzultace a návrh'
    ],
    price: '500-1000 Kč'
  }
];