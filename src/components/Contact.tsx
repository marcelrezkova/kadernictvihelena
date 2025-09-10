import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-inter font-medium mb-4">
              Kontakt
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-neutral-800 dark:text-white mb-6">
              Kde nás
              <span className="block text-primary-600 dark:text-primary-400">najdete</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Navštivte nás v kadeřnictví POHODA v centru Liberce. Těšíme se na vás!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 mb-16">
              <div>
                <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-6">
                  Kontaktní informace
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-1">
                        Adresa
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-300 font-inter">
                        Kadeřnictví POHODA<br />
                        Moskevská 637, Liberec
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 font-inter mt-1">
                        Bezplatné parkování v Plaza
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-1">
                        Telefon
                      </h4>
                      <a 
                        href="tel:739469932" 
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-inter transition-colors"
                      >
                        739 469 932
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-1">
                        E-mail
                      </h4>
                      <a 
                        href="mailto:helena.bosinova@email.cz" 
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-inter transition-colors"
                      >
                        helena.bosinova@email.cz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6">
                <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                  Otevírací doba
                </h4>
                <div className="text-neutral-600 dark:text-neutral-300 font-inter">
                  <p className="mb-2">Dle objednávek</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Dámské • Pánské • Dětské kadeřnictví
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div>
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

export default Contact;