import React, { useState } from 'react';
import { Calendar, Search, Star, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Pricing: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const scrollToBooking = (serviceName?: string) => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Můžeme předvyplnit službu v rezervačním formuláři
      if (serviceName) {
        setTimeout(() => {
          const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement;
          if (serviceSelect) {
            serviceSelect.value = serviceName;
            serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }, 500);
      }
    }
  };

  // Kompletní ceník dat
  const pricingData = {
    damske: {
      title: 'Dámské kadeřnictví',
      icon: '✂️',
      color: 'from-pink-500 to-rose-500',
      services: [
        { name: 'Střih krátké vlasy', price: '150 Kč', time: '30 min' },
        { name: 'Střih polodlouhé vlasy', price: '160 Kč', time: '30 min' },
        { name: 'Střih dlouhé vlasy', price: '190 Kč', time: '30 min' },
        { name: 'Top/mix střih krátké vlasy', price: '180 Kč', time: '30 min' },
        { name: 'Top/mix střih polodlouhé vlasy', price: '210 Kč', time: '30 min' },
        { name: 'Top/mix střih dlouhé vlasy', price: '240 Kč', time: '30 min' },
        { name: 'Střih na sucho krátké vlasy', price: '250 Kč', time: '30 min' },
        { name: 'Střih na sucho polodlouhé vlasy', price: '280 Kč', time: '30 min' },
        { name: 'Střih na sucho dlouhé vlasy', price: '290 Kč', time: '30 min' },
        { name: 'Komplet krátké vlasy (mytí + střih + foukaná)', price: '420 Kč', time: '60 min', popular: true },
        { name: 'Komplet polodlouhé vlasy', price: '480 Kč', time: '60 min', popular: true },
        { name: 'Komplet dlouhé vlasy', price: '570 Kč', time: '60 min', popular: true },
        { name: 'Mytí + foukaná krátké vlasy', price: '280 Kč', time: '45 min' },
        { name: 'Mytí + foukaná polodlouhé vlasy', price: '330 Kč', time: '45 min' },
        { name: 'Mytí + foukaná dlouhé vlasy', price: '410 Kč', time: '45 min' },
        { name: 'Žehlení krátké vlasy', price: '80 Kč', time: '30 min' },
        { name: 'Žehlení polodlouhé vlasy', price: '100 Kč', time: '30 min' },
        { name: 'Žehlení dlouhé vlasy', price: '120 Kč', time: '30 min' },
        { name: 'Styling (gel, lak, vosk)', price: '40 Kč', time: '10 min' },
        { name: 'Masáž hlavy', price: '50 Kč', time: '15 min' }
      ]
    },
    barveni: {
      title: 'Barvení a melírování',
      icon: '🎨',
      color: 'from-purple-500 to-indigo-500',
      services: [
        { name: 'Melír přes čepici', price: '290 Kč', time: '90 min' },
        { name: 'Melír krátké vlasy', price: '500-590 Kč', time: '120 min', popular: true },
        { name: 'Melír polodlouhé vlasy', price: '600-700 Kč', time: '120 min', popular: true },
        { name: 'Melír dlouhé vlasy', price: '750-850 Kč', time: '120 min', popular: true },
        { name: 'Částečný melír krátké vlasy', price: '300 Kč', time: '90 min' },
        { name: 'Částečný melír polodlouhé vlasy', price: '500 Kč', time: '90 min' },
        { name: 'Částečný melír dlouhé vlasy', price: '600 Kč', time: '90 min' },
        { name: 'Barevný melír krátké vlasy', price: '550 Kč', time: '120 min' },
        { name: 'Barevný melír polodlouhé vlasy', price: '600-700 Kč', time: '120 min' },
        { name: 'Barevný melír dlouhé vlasy', price: '750-850 Kč', time: '120 min' },
        { name: 'Barva odrost krátké vlasy', price: '310 Kč', time: '90 min' },
        { name: 'Barva odrost polodlouhé vlasy', price: '330 Kč', time: '90 min' },
        { name: 'Barva odrost dlouhé vlasy', price: '380 Kč', time: '90 min' },
        { name: 'Kombinované barvení krátké vlasy', price: '500 Kč', time: '150 min' },
        { name: 'Kombinované barvení polodlouhé vlasy', price: '600 Kč', time: '150 min' },
        { name: 'Kombinované barvení dlouhé vlasy', price: '750-850 Kč', time: '150 min' },
        { name: 'Přeliv/barva krátké vlasy', price: '400 Kč', time: '120 min' },
        { name: 'Přeliv/barva polodlouhé vlasy', price: '500 Kč', time: '120 min' },
        { name: 'Přeliv/barva dlouhé vlasy', price: '600 Kč', time: '120 min' },
        { name: 'Stahování barvy krátké vlasy', price: '500 Kč', time: '120 min' },
        { name: 'Stahování barvy polodlouhé vlasy', price: '600 Kč', time: '120 min' },
        { name: 'Stahování barvy dlouhé vlasy', price: '900 Kč', time: '120 min' },
        { name: 'Barevné tunely krátké vlasy', price: '100 Kč', time: '30 min' },
        { name: 'Barevné tunely polodlouhé vlasy', price: '150 Kč', time: '30 min' },
        { name: 'Barevné tunely dlouhé vlasy', price: '200 Kč', time: '30 min' }
      ]
    },
    pece: {
      title: 'Péče a regenerace',
      icon: '💆‍♀️',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Keratinová kúra krátké vlasy', price: '250 Kč', time: '90 min', popular: true },
        { name: 'Keratinová kúra polodlouhé vlasy', price: '350 Kč', time: '90 min', popular: true },
        { name: 'Keratinová kúra dlouhé vlasy', price: '450 Kč', time: '90 min', popular: true },
        { name: 'Regenerace krátké vlasy', price: '40 Kč', time: '15 min' },
        { name: 'Regenerace polodlouhé vlasy', price: '50 Kč', time: '15 min' },
        { name: 'Regenerace dlouhé vlasy', price: '60 Kč', time: '15 min' },
        { name: 'Přípravek Powerplex', price: '50-100 Kč', time: '30 min' },
        { name: 'Trvalá krátké vlasy', price: '380 Kč', time: '120 min' },
        { name: 'Trvalá polodlouhé vlasy', price: '490 Kč', time: '120 min' },
        { name: 'Trvalá dlouhé vlasy', price: '650 Kč', time: '120 min' },
        { name: 'Narovnání vlasů krátké vlasy', price: '250 Kč', time: '60 min' },
        { name: 'Narovnání vlasů polodlouhé vlasy', price: '400 Kč', time: '60 min' },
        { name: 'Narovnání vlasů dlouhé vlasy', price: '550 Kč', time: '60 min' }
      ]
    },
    spolecenske: {
      title: 'Společenské účesy',
      icon: '👑',
      color: 'from-amber-500 to-orange-500',
      services: [
        { name: 'Společenské účesy dle náročnosti', price: '500-1000 Kč', time: '60-90 min', popular: true },
        { name: 'Vodová krátké vlasy', price: '130 Kč', time: '45 min' },
        { name: 'Vodová polodlouhé vlasy', price: '160 Kč', time: '45 min' },
        { name: 'Vodová dlouhé vlasy', price: '180 Kč', time: '45 min' },
        { name: 'Mytí vlasů krátké vlasy', price: '80 Kč', time: '15 min' },
        { name: 'Mytí vlasů polodlouhé vlasy', price: '100 Kč', time: '15 min' },
        { name: 'Mytí vlasů dlouhé vlasy', price: '130 Kč', time: '15 min' },
        { name: 'Foukaná krátké vlasy', price: '150 Kč', time: '30 min' },
        { name: 'Foukaná polodlouhé vlasy', price: '220 Kč', time: '30 min' },
        { name: 'Foukaná dlouhé vlasy', price: '350 Kč', time: '30 min' }
      ]
    },
    panske: {
      title: 'Pánské kadeřnictví',
      icon: '👨',
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'Pánský střih', price: '250 Kč', time: '30 min', popular: true },
        { name: 'Střih strojkem', price: '200 Kč', time: '20 min' },
        { name: 'Moderní střih', price: '300 Kč', time: '45 min' },
        { name: 'Úprava vousů', price: '110 Kč', time: '15 min' },
        { name: 'Komplet (střih + mytí + sušení)', price: '400 Kč', time: '45 min' },
        { name: 'Melír přes čepici', price: '350-480 Kč', time: '90 min' },
        { name: 'Styling (vosk, gel, lak)', price: '50 Kč', time: '10 min' }
      ]
    },
    detske: {
      title: 'Dětské kadeřnictví',
      icon: '👶',
      color: 'from-pink-400 to-purple-400',
      services: [
        { name: 'Dětský střih', price: '200 Kč', time: '20 min', popular: true },
        { name: 'Mytí vlasů', price: '50 Kč', time: '10 min' },
        { name: 'Styling', price: '30 Kč', time: '10 min' }
      ]
    },
    specialni: {
      title: 'Speciální služby',
      icon: '⭐',
      color: 'from-violet-500 to-purple-500',
      services: [
        { name: 'Prodloužení vlasů dle náročnosti', price: '2500-4000 Kč', time: '180-240 min' },
        { name: 'Sundávání nastavených vlasů', price: '700-2500 Kč', time: '90-180 min' },
        { name: 'Zastřižení ofiny krátké vlasy', price: '60 Kč', time: '15 min' },
        { name: 'Zastřižení ofiny polodlouhé vlasy', price: '60 Kč', time: '15 min' },
        { name: 'Zastřižení ofiny dlouhé vlasy', price: '70 Kč', time: '15 min' },
        { name: 'Příplatek za razantní změnu', price: '50-100 Kč', time: '' },
        { name: 'Sušení krátké vlasy', price: '70 Kč', time: '20 min' },
        { name: 'Sušení polodlouhé vlasy', price: '95 Kč', time: '20 min' },
        { name: 'Sušení dlouhé vlasy', price: '110 Kč', time: '20 min' }
      ]
    }
  };

  const categories = [
    { id: 'all', label: 'Všechny služby', icon: '🔍' },
    { id: 'damske', label: 'Dámské', icon: '✂️' },
    { id: 'barveni', label: 'Barvení', icon: '🎨' },
    { id: 'pece', label: 'Péče', icon: '💆‍♀️' },
    { id: 'spolecenske', label: 'Společenské', icon: '👑' },
    { id: 'panske', label: 'Pánské', icon: '👨' },
    { id: 'detske', label: 'Dětské', icon: '👶' },
    { id: 'specialni', label: 'Speciální', icon: '⭐' }
  ];

  // Filtrování služeb
  const getFilteredServices = () => {
    let allServices: any[] = [];
    
    Object.entries(pricingData).forEach(([categoryId, category]) => {
      if (activeCategory === 'all' || activeCategory === categoryId) {
        category.services.forEach(service => {
          allServices.push({
            ...service,
            category: category.title,
            categoryId,
            categoryColor: category.color
          });
        });
      }
    });

    if (searchTerm) {
      allServices = allServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allServices;
  };

  const filteredServices = getFilteredServices();

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-inter font-medium mb-4">
              Ceník služeb
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-neutral-800 dark:text-white mb-6">
              Transparentní
              <span className="block text-primary-600 dark:text-primary-400">ceny služeb</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Všechny ceny jsou finální a zahrnují konzultaci, produkty i následnou péči. 
              Klikněte na službu pro rychlou rezervaci.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Hledat službu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white font-inter"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services List - Rolovací ceník */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-center">
                <h3 className="font-playfair font-bold text-2xl text-white mb-2">
                  Kompletní ceník služeb
                </h3>
                <p className="text-white/80 font-inter text-sm">
                  {filteredServices.length} služeb • Klikněte na službu pro rezervaci
                </p>
              </div>

              {/* Scrollable Services List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredServices.length > 0 ? (
                  <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {filteredServices.map((service, index) => (
                      <div
                        key={index}
                        onClick={() => scrollToBooking(service.name)}
                        className="p-4 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-inter font-medium text-neutral-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                  {service.name}
                                </h4>
                                {service.popular && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                                    <Star className="w-3 h-3 mr-1" />
                                    Oblíbené
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                {service.category}
                              </span>
                              {service.time && (
                                <div className="flex items-center space-x-1 text-sm text-neutral-500 dark:text-neutral-400">
                                  <Clock className="w-3 h-3" />
                                  <span>{service.time}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <div className="font-inter font-bold text-lg text-primary-600 dark:text-primary-400">
                                {service.price}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="p-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors group-hover:scale-105 transform duration-200">
                                <Calendar className="w-4 h-4" />
                              </button>
                              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-500 transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="text-neutral-400 dark:text-neutral-500 mb-2">
                      <Search className="w-12 h-12 mx-auto mb-4" />
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 font-inter">
                      Nenašli jsme žádné služby odpovídající vašemu hledání.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-neutral-50 dark:bg-neutral-900 p-4 text-center border-t border-neutral-200 dark:border-neutral-700">
                <button
                  onClick={() => scrollToBooking()}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Objednat se na termín
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-neutral-800 dark:text-white mb-8">
                Důležité informace
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2 text-center">
                    Rezervace
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                    Rezervace lze stornovat do 24 hodin před termínem zdarma.
                  </p>
                </div>

                <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">💳</span>
                  </div>
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2 text-center">
                    Platba
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                    Přijímáme hotovost, platební karty i bezhotovostní převod.
                  </p>
                </div>

                <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2 text-center">
                    Konzultace
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                    První konzultace je vždy zdarma. Ceny jsou konečné.
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