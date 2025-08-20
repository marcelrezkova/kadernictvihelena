import React from 'react';
import { Check, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Pricing: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const pricingData = [
    {
      category: 'Dámské kadeřnictví',
      icon: 'Scissors',
      services: [
        { name: 'Střih - krátké/polodlouhé/dlouhé', price: '150/160/190 Kč', duration: '30 min' },
        { name: 'Top, mix střih - krátké/polodlouhé/dlouhé', price: '180/210/240 Kč', duration: '30 min' },
        { name: 'Dámský střih na sucho - krátké/polodlouhé/dlouhé', price: '250/280/290 Kč', duration: '30 min' },
        { name: 'Mytí, střih, foukaná, styling - krátké/polodlouhé/dlouhé', price: '420/480/570 Kč', duration: '60 min' },
        { name: 'Mytí, foukaná, styling - krátké/polodlouhé/dlouhé', price: '280/330/410 Kč', duration: '45 min' },
        { name: 'Mytí, střih, foukaná, žehlení, styling - krátké/polodlouhé/dlouhé', price: '450/530/650 Kč', duration: '75 min' },
        { name: 'Mytí, foukaná, žehlení, styling - krátké/polodlouhé/dlouhé', price: '290/350/440 Kč', duration: '60 min' },
        { name: 'Melír přes čepici', price: '290 Kč', duration: '90 min' },
        { name: 'Melír - krátké/polodlouhé/dlouhé', price: '500-590/600-700/750-850 Kč', duration: '120 min' },
        { name: 'Částečný melír (vršek, strany) - krátké/polodlouhé/dlouhé', price: '300/500/600 Kč', duration: '90 min' },
        { name: 'Barevný melír - krátké/polodlouhé/dlouhé', price: '550/600-700/750-850 Kč', duration: '120 min' },
        { name: 'Barva odrost - krátké/polodlouhé/dlouhé', price: '310/330/380 Kč', duration: '90 min' },
        { name: 'Kombinované barvení - krátké/polodlouhé/dlouhé', price: '500/600/750-850 Kč', duration: '150 min' },
        { name: 'Barevné tunely - krátké/polodlouhé/dlouhé', price: '100/150/200 Kč', duration: '30 min' },
        { name: 'Přeliv, barva - krátké/polodlouhé/dlouhé', price: '400/500/600 Kč', duration: '120 min' },
        { name: 'Trvalá - krátké/polodlouhé/dlouhé', price: '380/490/650 Kč', duration: '120 min' },
        { name: 'Stahování barvy - krátké/polodlouhé/dlouhé', price: '500/600/900 Kč', duration: '120 min' },
        { name: 'Narovnání vlasů - krátké/polodlouhé/dlouhé', price: '250/400/550 Kč', duration: '60 min' },
        { name: 'Společenské účesy dle náročnosti', price: '500-1000 Kč', duration: '60-90 min' },
        { name: 'Mytí vlasů - krátké/polodlouhé/dlouhé', price: '80/100/130 Kč', duration: '15 min' },
        { name: 'Foukaná - krátké/polodlouhé/dlouhé', price: '150/220/350 Kč', duration: '30 min' },
        { name: 'Vodová - krátké/polodlouhé/dlouhé', price: '130/160/180 Kč', duration: '45 min' },
        { name: 'Žehlení - krátké/polodlouhé/dlouhé', price: '80/100/120 Kč', duration: '30 min' },
        { name: 'Sušení - krátké/polodlouhé/dlouhé', price: '70/95/110 Kč', duration: '20 min' },
        { name: 'Styling (gel, guma, lak, vosk, lesk, tužidlo)', price: '40 Kč', duration: '10 min' },
        { name: 'Masáž hlavy', price: '50 Kč', duration: '15 min' },
        { name: 'Regenerace - krátké/polodlouhé/dlouhé', price: '40/50/60 Kč', duration: '15 min' },
        { name: 'Keratinová kúra - krátké/polodlouhé/dlouhé', price: '250/350/450 Kč', duration: '90 min' },
        { name: 'Přípravek Powerplex', price: '50-100 Kč', duration: '30 min' },
        { name: 'Zastřižení ofiny - krátké/polodlouhé/dlouhé', price: '60/60/70 Kč', duration: '15 min' },
        { name: 'Prodloužení vlasů dle náročnosti', price: '2500-4000 Kč', duration: '180-240 min' },
        { name: 'Sundávání nastavených vlasů dle náročnosti', price: '700-2500 Kč', duration: '90-180 min' },
        { name: 'Příplatek za razantní změnu a za velmi dlouhé nebo husté vlasy', price: '50-100 Kč', duration: '' }
      ]
    },
    {
      category: 'Pánské kadeřnictví',
      icon: 'Users',
      services: [
        { name: 'Pánský střih', price: '250 Kč', duration: '30 min' },
        { name: 'Střih strojkem', price: '200 Kč', duration: '20 min' },
        { name: 'Moderní střih', price: '300 Kč', duration: '45 min' },
        { name: 'Úprava vousů', price: '110 Kč', duration: '15 min' },
        { name: 'Komplet (střih, mytí, sušení)', price: '400 Kč', duration: '45 min' },
        { name: 'Melír přes čepici', price: '350-480 Kč', duration: '90 min' },
        { name: 'Styling (vosk, gel, lak)', price: '50 Kč', duration: '10 min' }
      ]
    },
    {
      category: 'Dětské kadeřnictví',
      icon: 'Heart',
      services: [
        { name: 'Dětský střih', price: '200 Kč', duration: '20 min' },
        { name: 'Mytí vlasů', price: '50 Kč', duration: '10 min' },
        { name: 'Styling', price: '30 Kč', duration: '10 min' }
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
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {pricingData.map((category, categoryIndex) => (
              <div 
                key={category.category}
                className={`bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {category.icon === 'Scissors' && <span className="text-white text-xl">✂</span>}
                    {category.icon === 'Users' && <span className="text-white text-xl">👨</span>}
                    {category.icon === 'Heart' && <span className="text-white text-xl">👶</span>}
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3">
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
                    Konzultace
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    První konzultace je vždy zdarma. 
                    Ceny jsou konečné včetně všech služeb.
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