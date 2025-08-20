import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { icon: Award, value: '15+', label: 'Let zkušeností' },
    { icon: Users, value: '500+', label: 'Spokojených klientek' },
    { icon: Clock, value: '2000+', label: 'Hodin školení' },
    { icon: Heart, value: '98%', label: 'Spokojenost' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-inter font-medium mb-4">
              O studiu
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-neutral-800 dark:text-white mb-6">
              Váš partner v cestě 
              <span className="block text-primary-600 dark:text-primary-400">za krásou</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              S více než 15letou praxí v oboru krásy vám nabízím profesionální péči 
              v příjemném a moderním prostředí našeho studia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-4">
                  Paní Bošínová
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed mb-6">
                  Jsem certifikovaná kadeřnice a kosmetička s dlouholetou praxí. Mou vášní je pomáhat 
                  ženám objevit jejich přirozenou krásu a cítit se sebevědomě. V našem studiu se zaměřujem 
                  na individuální přístup ke každé klientce.
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed">
                  Pravidelně se vzdělávám v nejnovějších trendech a technikách, abych vám mohla nabídnout 
                  ty nejlepší služby. Věřím, že krása vychází zevnitř, a mým úkolem je ji pouze podtrhnout.
                </p>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="font-inter font-semibold text-lg text-neutral-800 dark:text-white mb-4">
                  Moje specializace:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Kreativní barvení vlasů',
                    'Anti-aging kosmetika',
                    'Svatební styling',
                    'Regenerační kúry',
                    'Permanentní makeup',
                    'Poradenství péče'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-neutral-600 dark:text-neutral-300 font-inter text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-6">
                <h4 className="font-inter font-semibold text-lg text-neutral-800 dark:text-white mb-4">
                  Certifikace & vzdělání:
                </h4>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-300 font-inter text-sm">
                  <li>• Certifikovaná kadeřnice (SOŠ Kadeřnická Praha)</li>
                  <li>• Specializace v kolorimetrii (L'Oréal Professional)</li>
                  <li>• Certifikovaná kosmetička (Institut krásy Praha)</li>
                  <li>• Kurz permanentního makeupu (PhiBrows Academy)</li>
                </ul>
              </div>
            </div>

            {/* Image & Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/3992865/pexels-photo-3992865.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Paní Bošínová v salonu"
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                    <div className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 font-inter text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 md:p-12">
              <div className="text-4xl mb-6">💎</div>
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-neutral-800 dark:text-white mb-6">
                Moje filozofie
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed">
                "Věřím, že každá žena je krásná ve své jedinečnosti. Mým posláním není měnit vaši přirozenou krásu, 
                ale pomoci vám ji objevit, podtrhnout a cítit se ve své kůži sebevědomě. V našem studiu vytváříme 
                prostředí, kde se můžete uvolnit a nechat se rozmazlovat."
              </p>
              <div className="mt-6">
                <span className="font-playfair italic text-primary-600 dark:text-primary-400">
                  - Paní Bošínová
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;