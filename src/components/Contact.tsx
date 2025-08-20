import React from 'react';
import { Award, Users, Clock, Heart, MapPin } from 'lucide-react';
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
                  Helena Bošínová
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed mb-6">
                  Jmenuji se Helena Bošínová a kadeřnicině se věnuji přes 20 let. Do Liberce jsme se 
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
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-neutral-800 dark:text-white mb-6">
                Můj cíl
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed">
                "Mým cílem je pomáhat lidem skrz vlasy a make-up. Protože když člověk vypadá lépe, 
                cítí se lépe a je šťastnější."
              </p>
              <div className="mt-6">
                <span className="font-playfair italic text-primary-600 dark:text-primary-400">
                  - Helena Bošínová
                </span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-20">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700">
              <div className="p-6 text-center border-b border-neutral-200 dark:border-neutral-700">
                <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-2">
                  Najdete nás v centru Liberce
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300 font-inter text-sm">
                  Kadeřnictví POHODA, Moskevská 637, Liberec<br />
                  Bezplatné parkování v obchodním domě Plaza
                </p>
              </div>
              
              {/* Google Maps Embed */}
              <div className="relative h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.8234567890123!2d15.0558!3d50.7663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e81c8b8b8b8b8%3A0x1234567890abcdef!2sMoskevsk%C3%A1%20637%2C%20460%2001%20Liberec!5e0!3m2!1scs!2scz!4v1234567890123!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kadeřnictví POHODA - Moskevská 637, Liberec"
                  className="absolute inset-0"
                ></iframe>
              </div>
              
              {/* Map Footer */}
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900">
                <div className="flex items-center justify-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span>Moskevská 637, Liberec</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Bezplatné parkování Plaza</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;