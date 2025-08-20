import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { servicesData } from '../data/servicesData';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-inter font-medium mb-4">
              Naše služby
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-neutral-800 dark:text-white mb-6">
              Kompletní péče
              <span className="block text-primary-600 dark:text-primary-400">o vaši krásu</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Nabízíme širokou škálu profesionálních služeb přizpůsobených vašim individuálním potřebám 
              a přáním pro vaši dokonalou krásu.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className={`group bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-100 dark:border-neutral-700 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 font-inter text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-neutral-600 dark:text-neutral-400 font-inter">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 font-inter">
                        Cena {service.price}
                      </span>
                    </div>
                    <button
                      onClick={scrollToBooking}
                      className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-inter font-medium text-sm group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <span>Objednat</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offers */}
          <div className="bg-gradient-to-r from-primary-50 via-secondary-50 to-primary-50 dark:from-primary-900/20 dark:via-secondary-900/20 dark:to-primary-900/20 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <div className="text-4xl mb-6">🎁</div>
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-neutral-800 dark:text-white mb-6">
                Speciální nabídky
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2">
                    První návštěva
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                    20% sleva na všechny služby
                  </p>
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    Platí do konce měsíce
                  </span>
                </div>
                <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2">
                    Svatební balíček
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                    Kompletní příprava nevěsty
                  </p>
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    Vlasy + makeup + zkouška
                  </span>
                </div>
                <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-2">
                    Věrnostní program
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                    Každá 10. návštěva zdarma
                  </p>
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    Pro stálé klientky
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;