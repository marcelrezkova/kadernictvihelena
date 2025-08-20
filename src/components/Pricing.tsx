import React from 'react';
import { Check, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Pricing: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const pricingData = [
    {
      category: 'Kadeřnictví',
      icon: '✂️',
      services: [
        { name: 'Dámský střih', price: '800 Kč', duration: '60 min' },
        { name: 'Dámský střih + foukaná', price: '1.200 Kč', duration: '90 min' },
        { name: 'Barvení celé hlavy', price: '1.800 Kč', duration: '180 min' },
        { name: 'Melírování', price: '2.200 Kč', duration: '240 min' },
        { name: 'Balayage', price: '2.800 Kč', duration: '300 min' },
        { name: 'Keratin kúra', price: '3.500 Kč', duration: '240 min' },
        { name: 'Slavnostní účes', price: '1.500 Kč', duration: '120 min' },
        { name: 'Úprava konečků', price: '400 Kč', duration: '30 min' }
      ]
    },
    {
      category: 'Kosmetika',
      icon: '✨',
      services: [
        { name: 'Základní ošetření pleti', price: '1.200 Kč', duration: '75 min' },
        { name: 'Hloubkové čištění', price: '1.500 Kč', duration: '90 min' },
        { name: 'Anti-aging ošetření', price: '2.200 Kč', duration: '105 min' },
        { name: 'Hydratační maska', price: '800 Kč', duration: '45 min' },
        { name: 'Chemický peeling', price: '1.800 Kč', duration: '60 min' },
        { name: 'Mikrodermabráze', price: '1.600 Kč', duration: '75 min' },
        { name: 'LED terapie', price: '600 Kč', duration: '30 min' },
        { name: 'Ošetření akné', price: '1.400 Kč', duration: '90 min' }
      ]
    },
    {
      category: 'Líčení & Permanentní makeup',
      icon: '💄',
      services: [
        { name: 'Denní makeup', price: '800 Kč', duration: '45 min' },
        { name: 'Večerní makeup', price: '1.200 Kč', duration: '60 min' },
        { name: 'Svatební makeup', price: '2.500 Kč', duration: '120 min' },
        { name: 'Svatební zkouška', price: '1.500 Kč', duration: '90 min' },
        { name: 'Permanentní obočí', price: '4.500 Kč', duration: '180 min' },
        { name: 'Permanentní linky', price: '3.500 Kč', duration: '150 min' },
        { name: 'Permanentní rty', price: '4.000 Kč', duration: '180 min' },
        { name: 'Korekce permanentního makeup', price: '1.500 Kč', duration: '90 min' }
      ]
    },
    {
      category: 'Wellness & Masáže',
      icon: '🌸',
      services: [
        { name: 'Relaxační masáž obličeje', price: '900 Kč', duration: '60 min' },
        { name: 'Lymfodrenáž obličeje', price: '1.100 Kč', duration: '75 min' },
        { name: 'Japonská masáž obličeje', price: '1.400 Kč', duration: '90 min' },
        { name: 'Reflexní masáž', price: '800 Kč', duration: '45 min' },
        { name: 'Aromaterapie', price: '600 Kč', duration: '30 min' },
        { name: 'Gua sha ošetření', price: '1.200 Kč', duration: '75 min' },
        { name: 'Kompletní wellness balíček', price: '3.500 Kč', duration: '240 min' }
      ]
    }
  ];

  const packages = [
    {
      name: 'Svatební balíček',
      price: '6.500 Kč',
      originalPrice: '7.800 Kč',
      description: 'Kompletní příprava nevěsty pro ten nejkrásnější den',
      features: [
        'Konzultace a plánování',
        'Zkouška svatebního makeupu',
        'Zkouška svatebního účesu',
        'Svatební den - makeup a účes',
        'Kosmetické ošetření před svatbou',
        'Manikúra',
        'Fotografování výsledku'
      ],
      popular: true
    },
    {
      name: 'VIP Proměna',
      price: '4.200 Kč',
      originalPrice: '5.000 Kč',
      description: 'Kompletní transformace pro speciální příležitosti',
      features: [
        'Konzultace a analýza',
        'Nový střih a styling',
        'Profesionální barvení',
        'Kosmetické ošetření',
        'Večerní makeup',
        'Fotografování před/po',
        'Poradenství domácí péče'
      ]
    },
    {
      name: 'Měsíční péče',
      price: '2.800 Kč',
      originalPrice: '3.400 Kč',
      description: 'Pravidelná péče pro udržení dokonalého vzhledu',
      features: [
        'Střih a styling',
        'Základní kosmetické ošetření',
        'Hydratační maska',
        'Styling produkty',
        'Prioritní rezervace termínů',
        '15% sleva na další služby'
      ]
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-inter font-medium mb-4">
              Ceník
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-neutral-800 dark:text-white mb-6">
              Transparentní
              <span className="block text-primary-600 dark:text-primary-400">ceny služeb</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Všechny naše ceny jsou finální a zahrnují konzultaci, produkty i následnou péči. 
              Žádné skryté poplatky.
            </p>
          </div>

          {/* Services Pricing */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {pricingData.map((category, categoryIndex) => (
              <div 
                key={category.category}
                className={`bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-inter font-medium text-sm text-neutral-800 dark:text-white">
                          {service.name}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          {service.duration}
                        </div>
                      </div>
                      <div className="font-inter font-bold text-primary-600 dark:text-primary-400 text-sm ml-2">
                        {service.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Package Deals */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-playfair font-bold text-3xl text-neutral-800 dark:text-white mb-4">
                Výhodné balíčky
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 font-inter">
                Kombinace služeb s výraznou slevou pro maximální spokojenost
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    pkg.popular ? 'ring-2 ring-primary-400 dark:ring-primary-500' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-inter font-medium flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Nejoblíbenější</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-2">
                      {pkg.name}
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300 font-inter text-sm mb-4">
                      {pkg.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="font-playfair font-bold text-3xl text-primary-600 dark:text-primary-400">
                        {pkg.price}
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 line-through text-lg">
                        {pkg.originalPrice}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-600 dark:text-neutral-300 font-inter text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToBooking}
                    className={`w-full py-3 rounded-xl font-inter font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white'
                    }`}
                  >
                    Objednat balíček
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-6">
                Důležité informace
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2">
                    Rezervace a stornovací podmínky
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Rezervace lze stornovat do 24 hodin před termínem zdarma. 
                    Později účtujeme 50% z ceny služby.
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2">
                    Platební možnosti
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Přijímáme hotovost, platební karty i bezhotovostní převod. 
                    Stravenky bohužel nepřijímáme.
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2">
                    Slevy a akce
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Sledujte naše sociální sítě pro aktuální akce. 
                    Sleva pro studenty a seniory 10%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;