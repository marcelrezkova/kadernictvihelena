import React, { useState } from 'react';
import { Calendar, Search, Star, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { allServices, pricingCategories, getServicesByCategory, searchServices } from '../data/pricing';

const Pricing: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const scrollToBooking = (serviceName?: string) => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // PĹ™edvyplnÄ›nĂ­ sluĹľby v rezervaÄŤnĂ­m formulĂˇĹ™i
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

  // FiltrovĂˇnĂ­ sluĹľeb
  const getFilteredServices = () => {
    let services = activeCategory === 'all' 
      ? allServices 
      : getServicesByCategory(activeCategory);

    if (searchTerm) {
      services = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return services;
  };

  const filteredServices = getFilteredServices();

  // Kategorie pro filtry
  const categories = [
    { id: 'all', label: 'VĹˇechny sluĹľby', icon: '' },
    ...pricingCategories.map(cat => ({
      id: cat.id,
      label: cat.title.replace('kadeĹ™nictvĂ­', '').replace('a melĂ­rovĂˇnĂ­', '').trim(),
      icon: cat.icon
    }))
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-inter font-medium mb-4">
              CenĂ­k sluĹľeb
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-neutral-800 dark:text-white mb-6">
              TransparentnĂ­
              <span className="block text-primary-600 dark:text-primary-400">ceny sluĹľeb</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              VĹˇechny ceny jsou finĂˇlnĂ­ a zahrnujĂ­ konzultaci, produkty i nĂˇslednou pĂ©ÄŤi. 
              KliknÄ›te na sluĹľbu pro rychlou rezervaci.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Hledat sluĹľbu..."
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
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services List - RolovacĂ­ cenĂ­k */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-center">
                <h3 className="font-playfair font-bold text-2xl text-white mb-2">
                  KompletnĂ­ cenĂ­k sluĹľeb
                </h3>
                <p className="text-white/80 font-inter text-sm">
                  {filteredServices.length} sluĹľeb â€˘ KliknÄ›te na sluĹľbu pro rezervaci
                </p>
              </div>

              {/* Scrollable Services List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredServices.length > 0 ? (
                  <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {filteredServices.map((service, index) => {
                      const category = pricingCategories.find(cat => cat.id === service.category);
                      return (
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
                                      OblĂ­benĂ©
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                  {category?.title || 'OstatnĂ­'}
                                </span>
                                {service.duration && (
                                  <div className="flex items-center space-x-1 text-sm text-neutral-500 dark:text-neutral-400">
                                    <Clock className="w-3 h-3" />
                                    <span>{service.duration}</span>
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
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="text-neutral-400 dark:text-neutral-500 mb-2">
                      <Search className="w-12 h-12 mx-auto mb-4" />
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 font-inter">
                      NenaĹˇli jsme ĹľĂˇdnĂ© sluĹľby odpovĂ­dajĂ­cĂ­ vaĹˇemu hledĂˇnĂ­.
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
                  Objednat se na termĂ­n
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-neutral-800 dark:text-white mb-8">
                DĹŻleĹľitĂ© informace
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">đź“…</span>
                  </div>
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2 text-center">
                    Rezervace
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                    Rezervace lze stornovat do 24 hodin pĹ™ed termĂ­nem zdarma.
                  </p>
                </div>

                <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">đź’ł</span>
                  </div>
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2 text-center">
                    Platba
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                    PĹ™ijĂ­mĂˇme hotovost a bezhotovostnĂ­ pĹ™evod.
                  </p>
                </div>

                <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">đź’¬</span>
                  </div>
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2 text-center">
                    Konzultace
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                    PrvnĂ­ konzultace je vĹľdy zdarma. Ceny jsou koneÄŤnĂ©.
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