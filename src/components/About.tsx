import React, { useState, useEffect } from 'react';
import { Award, Users, Clock, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const aboutImages = [
    '/gallery/Já HB.jpg',
    '/gallery/ALEI6657.jpg'
  ];

  const stats = [
    { icon: Award, value: '15+', label: 'Let zkušeností' },
    { icon: Users, value: '500+', label: 'Spokojených klientek' },
    { icon: Clock, value: '2000+', label: 'Hodin školení' },
    { icon: Heart, value: '98%', label: 'Spokojenost' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [aboutImages.length]);

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

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
              Váš partner pro péči
              <span className="block text-primary-600 dark:text-primary-400">o vlasy</span>
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
                  Helena Bošinová
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed mb-6">
                  Jmenuji se Helena Bošinová a kadeřnictví se věnuji přes 15 let. Do Liberce jsme se
                  přistěhovali v roce 2013, nechala jsem se zaměstnat v kadeřnictví IrisHair. Pak přišli
                  děti, mateřská atd. Momentálně mě najdete v Kadeřnictví Pohoda v Moskevské 637/6,
                  kde mě mezi sebe přijala parta úžasných holek a kadeřnic.
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed">
                  Stále nabírám novou klientelu. Stříhám dámské, pánské, dětské. Barvím, odbarvuji,
                  melíruji, foukám, natáčím, češu společenské i svatební účesy a věnuji se i líčení
                  a péči o pokožku. Každý účes je vytvořen klientce na míru.
                </p>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="font-inter font-semibold text-lg text-neutral-800 dark:text-white mb-4">
                  Služby:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Dámské kadeřnictví',
                    'Pánské kadeřnictví',
                    'Dětské kadeřnictví',
                    'Barvení a odbarvování',
                    'Melírování',
                    'Společenské účesy',
                    'Svatební účesy'
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
                  Přístup k práci:
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300 font-inter text-sm leading-relaxed">
                  Neustále se školím v nových technologiích a rozvíjím svůj cit pro krásu a estetiku.
                  Sleduji nové trendy o vlasech a módě. Umím pracovat s barvami a dokážu klientce
                  poradit s celkovou vizáží, navrhnu vhodný typ střihu a barvy vlasů.
                </p>
              </div>
            </div>

            {/* Image Carousel & Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-3xl blur-2xl opacity-20"></div>

                <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
                  {aboutImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Helena Bošinová ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ))}

                  {aboutImages.length > 1 && (
                    <>
                      <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group z-10"
                      >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group z-10"
                      >
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                        {aboutImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
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
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-neutral-800 dark:text-white mb-6">
                Můj cíl
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed">
                "Mým cílem je pomáhat lidem skrz vlasy a make-up. Protože když člověk vypadá lépe,
                cítí se lépe a svět ho bere v tom lepším světle. Když se cítí člověk dobře, jde mu vše
                lépe od ruky, je spokojený a šťastnější. Stále na sobě pracuji, pro svou práci se snažím
                dělat maximum a chci být v ní ta nejlepší."
              </p>
              <div className="mt-6">
                <span className="font-playfair italic text-primary-600 dark:text-primary-400">
                  - Helena Bošinová
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
