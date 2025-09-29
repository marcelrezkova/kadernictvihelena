import React, { useState } from 'react';
import { Check, Star, Filter, Search } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { pricingCategories, pricingInfo, PricingCategory } from '../data/pricingData';

const Pricing: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCategories = pricingCategories.filter(category => {
    if (activeCategory !== 'all' && category.id !== activeCategory) return false;
    if (searchTerm) {
      return category.services.some(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || category.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  const categoryTabs = [
    { id: 'all', label: 'Všechny služby', icon: '🔍' },
    { id: 'damske', label: 'Dámské', icon: '✂️' },
    { id: 'barveni', label: 'Barvení', icon: '🎨' },
    { id: 'panske', label: 'Pánské', icon: '👨' },
    { id: 'detske', label: 'Dětské', icon: '👶' },
    { id: 'pece', label: 'Péče', icon: '💆‍♀️' },
    { id: 'spolecenske', label: 'Společenské', icon: '👑' },
    { id: 'specialni', label: 'Speciální', icon: '⭐' }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-inter font-medium mb-3 sm:mb-4">
              Ceník
            </span>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-800 dark:text-white mb-4 sm:mb-6">
              Transparentní
              <span className="block text-primary-600 dark:text-primary-400">ceny služeb</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl lg:max-w-3xl mx-auto font-inter leading-relaxed px-4">
              Všechny naše ceny jsou finální a zahrnují konzultaci, produkty i následnou péči. 
              Žádné skryté poplatky.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 sm:mb-12">
            <div className="max-w-4xl mx-auto">
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
                {categoryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-inter font-medium text-xs sm:text-sm transition-all duration-300 ${
                      activeCategory === tab.id
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    }`}
                  >
                    <span className="mr-1 sm:mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-20">
            {filteredCategories.map((category, categoryIndex) => (
              <ServiceCategory
                key={category.id}
                category={category}
                isVisible={isVisible}
                animationDelay={categoryIndex * 100}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="font-playfair font-bold text-xl sm:text-2xl lg:text-3xl text-neutral-800 dark:text-white mb-6 sm:mb-8">
                Důležité informace
              </h3>
              
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left mb-8 sm:mb-12">
                {Object.values(pricingInfo).map((info, index) => (
                  <div key={index} className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-white text-lg sm:text-xl">{info.icon}</span>
                    </div>
                    <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2 text-sm sm:text-base text-center">
                      {info.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToBooking}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg sm:rounded-full font-inter font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
              >
                Objednat se na termín
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Category Component
interface ServiceCategoryProps {
  category: PricingCategory;
  isVisible: boolean;
  animationDelay: number;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category, isVisible, animationDelay }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? category.services : category.services.slice(0, 8);

  return (
    <div
      className={`bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-xl sm:rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 overflow-hidden ${
        isVisible ? 'animate-fade-in-up' : ''
      }`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Category Header */}
      <div className={`bg-gradient-to-r ${category.color} p-4 sm:p-6 text-center`}>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <span className="text-white text-xl sm:text-2xl">{category.icon}</span>
        </div>
        <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white mb-1 sm:mb-2">
          {category.title}
        </h3>
        <p className="text-white/80 font-inter text-xs sm:text-sm mb-2">
          {category.description}
        </p>
        <div className="text-white/70 font-inter text-xs">
          {category.services.length} služeb
        </div>
      </div>

      {/* Services Grid */}
      <div className="p-4 sm:p-6">
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {displayedServices.map((service, serviceIndex) => (
            <ServiceCard key={serviceIndex} service={service} />
          ))}
        </div>

        {/* Show More Button */}
        {category.services.length > 8 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg font-inter font-medium text-sm transition-colors"
            >
              {showAll ? 'Zobrazit méně' : `Zobrazit všech ${category.services.length} služeb`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Service Card Component
interface ServiceCardProps {
  service: {
    name: string;
    price: string;
    duration?: string;
    popular?: boolean;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`relative bg-white/70 dark:bg-neutral-700/50 rounded-lg p-3 sm:p-4 hover:bg-white/90 dark:hover:bg-neutral-700/70 transition-colors border border-neutral-200/50 dark:border-neutral-600/50 hover:border-neutral-300 dark:hover:border-neutral-500 ${
      service.popular ? 'ring-2 ring-primary-400 ring-opacity-50' : ''
    }`}>
      {service.popular && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-inter font-medium flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Oblíbené
          </div>
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <div className="flex-1 mb-2">
          <div className="font-inter font-medium text-xs sm:text-sm text-neutral-800 dark:text-white leading-tight">
            {service.name}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-inter font-bold text-primary-600 dark:text-primary-400 text-xs sm:text-sm">
            {service.price}
          </div>
          {service.duration && (
            <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center ml-2">
              <span className="w-1 h-1 bg-primary-400 rounded-full mr-1"></span>
              {service.duration}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;