import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Car, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulace odeslání formuláře
      console.log('Zpráva odeslána:', formData);
      
      // Simulace API volání
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Chyba při odesílání zprávy:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Spojte se
              <span className="block text-primary-600 dark:text-primary-400">s námi</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Máte dotazy nebo si chcete domluvit termín? Neváhejte nás kontaktovat. 
              Rádi vám poradíme a najdeme řešení na míru.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-6">
                  Kadeřnice a kosmetická poradkyně MK<br />
                  Helena Bošínová
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-1">
                        Adresa
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-300 font-inter">
                        Kadeřnictví POHODA<br />
                        Moskevská 637, Liberec
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
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
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-1">
                        Otevírací doba
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-300 font-inter">
                        Dle objednávek
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-neutral-800 dark:text-white mb-1">
                        Parkování
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-300 font-inter">
                        Bezplatné parkování v obchodním domě Plaza
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6">
                <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                  Naše služby
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Dámské kadeřnictví',
                    'Pánské kadeřnictví',
                    'Dětské kadeřnictví',
                    'Holičství'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-neutral-600 dark:text-neutral-300 font-inter text-sm">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-6">
                Napište nám
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="font-inter font-semibold text-lg text-neutral-800 dark:text-white mb-2">
                    Zpráva úspěšně odeslána!
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-300 font-inter">
                    Děkujeme za vaši zprávu. Odpovíme vám co nejdříve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-inter font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white font-inter"
                      placeholder="Vaše jméno"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white font-inter"
                      placeholder="vas@email.cz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Zpráva *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white font-inter resize-none"
                      placeholder="Vaše zpráva nebo dotaz..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-neutral-400 disabled:to-neutral-500 text-white rounded-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Odesílám...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Odeslat zprávu</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-16">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-2">
                Najdete nás v centru Liberce
              </h4>
              <p className="text-neutral-600 dark:text-neutral-300 font-inter">
                Kadeřnictví POHODA, Moskevská 637, Liberec<br />
                Bezplatné parkování v obchodním domě Plaza
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;