import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-900">
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
              Jak nás
              <span className="block text-primary-600 dark:text-primary-400">najdete</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Naše studio se nachází v klidné části města s dobrým parkováním. 
              Těšíme se na vaši návštěvu!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Studio Info */}
              <div className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-6">
                  Studio Bošínová
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-inter font-medium text-neutral-800 dark:text-white">
                        Adresa studia
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-300 text-sm">
                        Krásná ulice 123<br />
                        110 00 Praha 1<br />
                        Česká republika
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-inter font-medium text-neutral-800 dark:text-white">
                        Telefon
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-300 text-sm">
                        +420 123 456 789
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-inter font-medium text-neutral-800 dark:text-white">
                        E-mail
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-300 text-sm">
                        info@studio-bosinova.cz
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-inter font-medium text-neutral-800 dark:text-white">
                        IČ
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-300 text-sm">
                        74335821
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-6 flex items-center">
                  <Clock className="w-5 h-5 text-primary-500 mr-2" />
                  Otevírací doba
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600 dark:text-neutral-300 font-inter">Pondělí</span>
                    <span className="font-inter font-semibold text-neutral-800 dark:text-white">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600 dark:text-neutral-300 font-inter">Úterý</span>
                    <span className="font-inter font-semibold text-neutral-800 dark:text-white">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600 dark:text-neutral-300 font-inter">Středa</span>
                    <span className="font-inter font-semibold text-neutral-800 dark:text-white">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600 dark:text-neutral-300 font-inter">Čtvrtek</span>
                    <span className="font-inter font-semibold text-neutral-800 dark:text-white">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600 dark:text-neutral-300 font-inter">Pátek</span>
                    <span className="font-inter font-semibold text-neutral-800 dark:text-white">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600 dark:text-neutral-300 font-inter">Sobota</span>
                    <span className="font-inter font-semibold text-neutral-800 dark:text-white">9:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-neutral-200 dark:border-neutral-700 pt-3">
                    <span className="text-neutral-600 dark:text-neutral-300 font-inter">Neděle</span>
                    <span className="font-inter font-semibold text-red-500">Zavřeno</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <p className="text-sm text-primary-700 dark:text-primary-300 font-inter">
                    💡 <strong>Tip:</strong> Pro rezervaci mimo otevírací dobu nás kontaktujte telefonicky.
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-6">
                  Sledujte nás
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/studio_bosinova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-inter font-medium text-neutral-800 dark:text-white">
                        Instagram
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-300 text-sm">
                        @studio_bosinova
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://facebook.com/studiobosinova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-inter font-medium text-neutral-800 dark:text-white">
                        Facebook
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-300 text-sm">
                        Studio Bošínová
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-xl">
                  <p className="text-sm text-secondary-700 dark:text-secondary-300 font-inter">
                    📸 Sledujte naše nejnovější práce a inspirujte se pro vaši proměnu!
                  </p>
                </div>
              </div>
            </div>

            {/* Map and Transport */}
            <div className="lg:col-span-2 space-y-8">
              {/* Google Maps */}
              <div className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-6">
                  Kde nás najdete
                </h3>
                
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.1419392875944!2d14.420025915571945!3d50.08765097942859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94d31c8f5b43%3A0x6b16d8c9b76b8a15!2sPrague%2C%20Czech%20Republic!5e0!3m2!1sen!2scz!4v1635789456789!5m2!1sen!2scz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>

                <div className="mt-4 text-center">
                  <a
                    href="https://maps.google.com/?q=Krásná+ulice+123,+Praha+1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-inter font-medium transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Otevřít v Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Transport Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-playfair font-bold text-lg text-neutral-800 dark:text-white mb-4">
                    🚗 Parkování
                  </h4>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-300 font-inter text-sm">
                    <li>• Bezplatné parkování před studiem</li>
                    <li>• Parkovací místa pro klientky</li>
                    <li>• Bezbariérový přístup</li>
                    <li>• Dobré dopravní spojení</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-playfair font-bold text-lg text-neutral-800 dark:text-white mb-4">
                    🚌 MHD
                  </h4>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-300 font-inter text-sm">
                    <li>• Zastávka "Krásná" - 2 min chůze</li>
                    <li>• Metro A - Náměstí Míru (10 min)</li>
                    <li>• Autobus 123, 456 přímo k nám</li>
                    <li>• Tram 11, 16 do centra</li>
                  </ul>
                </div>
              </div>

              {/* Special Notice */}
              <div className="bg-gradient-to-r from-primary-50 via-secondary-50 to-primary-50 dark:from-primary-900/20 dark:via-secondary-900/20 dark:to-primary-900/20 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-3xl mb-4">🎉</div>
                  <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-4">
                    Speciální pozvánka
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed mb-6">
                    Při první návštěvě našeho studia vás rádi provedeme prostory, 
                    ukážeme vám naše služby a poskytneme bezplatnou konzultaci o vhodné péči.
                  </p>
                  <button
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-inter font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Objednat první návštěvu
                  </button>
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