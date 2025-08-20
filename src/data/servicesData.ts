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
    description: 'Kompletní péče o vaše vlasy od profesionálních střihů po kreativní barvení',
    icon: Scissors,
    features: [
      'Střihy pro všechny věkové kategorie',
      'Barvení a melírování',
      'Regenerační kúry',
      'Slavnostní účesy'
    ],
    price: 'od 800 Kč'
  },
  {
    id: 'kosmetika',
    title: 'Kosmetika',
    description: 'Profesionální ošetření pleti přizpůsobené vašim individuálním potřebám',
    icon: Sparkles,
    features: [
      'Hloubkové čištění pleti',
      'Anti-aging ošetření',
      'Hydratační kúry',
      'Péče o problematickou pleť'
    ],
    price: 'od 1200 Kč'
  },
  {
    id: 'liceni',
    title: 'Líčení',
    description: 'Dokonalý makeup pro každou příležitost s důrazem na vaši přirozenou krásu',
    icon: Heart,
    features: [
      'Denní makeup',
      'Večerní líčení',
      'Svatební makeup',
      'Kurzy líčení'
    ],
    price: 'od 600 Kč'
  },
  {
    id: 'anti-aging',
    title: 'Anti-aging péče',
    description: 'Moderní metody pro zachování mladistvého vzhledu a zdraví pleti',
    icon: Zap,
    features: [
      'Radiofrekvence',
      'Mikrojehličková mezoterapie',
      'Kyselina hyaluronová',
      'Botox aplikace'
    ],
    price: 'od 2000 Kč'
  },
  {
    id: 'wellness',
    title: 'Wellness',
    description: 'Relaxační procedury pro tělo i duši v klidném prostředí našeho studia',
    icon: Star,
    features: [
      'Relaxační masáže',
      'Aromaterapie',
      'Lymfodrenáže',
      'Reflexní terapie'
    ],
    price: 'od 900 Kč'
  },
  {
    id: 'specialni',
    title: 'Speciální péče',
    description: 'Individuální přístup k řešení specifických potřeb a požadavků',
    icon: Moon,
    features: [
      'Konzultace dermatokosmetika',
      'Péče pro citlivou pleť',
      'Ošetření akné',
      'Poradenství domácí péče'
    ],
    price: 'na dotaz'
  }
];