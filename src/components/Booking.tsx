import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Booking: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Dámský střih',
    'Barvení vlasů',
    'Melírování',
    'Kosmetické ošetření',
    'Anti-aging péče',
    'Večerní makeup',
    'Svatební balíček',
    'VIP proměna',
    'Jiné (upřesním v poznámce)'
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the integration with Google Calendar API or booking system
    console.log('Booking data:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-inter font-medium mb-4">
              Rezervace
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-neutral-800 dark:text-white mb-6">
              Objednejte se
              <span className="block text-primary-600 dark:text-primary-400">na váš termín</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Vyplňte jednoduchý formulář a my se vám ozveme s potvrzením termínu. 
              Těšíme se na setkání s vámi!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Booking Form */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-700">
                  <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-6">
                    Rezervační formulář
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-neutral-700 dark:text-neutral-300 font-inter font-medium mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Jméno a příjmení *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="Zadejte vaše jméno"
                        />
                      </div>
                      <div>
                        <label className="block text-neutral-700 dark:text-neutral-300 font-inter font-medium mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="+420 123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-neutral-700 dark:text-neutral-300 font-inter font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="vas@email.cz"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-neutral-700 dark:text-neutral-300 font-inter font-medium mb-2">
                        Požadovaná služba *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Vyberte službu</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-neutral-700 dark:text-neutral-300 font-inter font-medium mb-2">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Preferovaný datum *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={today}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-neutral-700 dark:text-neutral-300 font-inter font-medium mb-2">
                          <Clock className="w-4 h-4 inline mr-2" />
                          Preferovaný čas *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Vyberte čas</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-neutral-700 dark:text-neutral-300 font-inter font-medium mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Poznámka (volitelné)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Máte nějaké speciální požadavky nebo dotazy?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-xl font-inter font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Odeslat rezervaci</span>
                    </button>
                  </form>
                </div>

                {/* Booking Info */}
                <div className="space-y-8">
                  {/* Opening Hours */}
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                    <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                      Otevírací doba
                    </h4>
                    <div className="space-y-2 text-neutral-600 dark:text-neutral-300 font-inter">
                      <div className="flex justify-between">
                        <span>Pondělí - Pátek:</span>
                        <span className="font-semibold">8:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sobota:</span>
                        <span className="font-semibold">9:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Neděle:</span>
                        <span className="font-semibold text-red-500">Zavřeno</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                    <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                      Kontaktní údaje
                    </h4>
                    <div className="space-y-3 text-neutral-600 dark:text-neutral-300 font-inter">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary-500" />
                        <span>+420 123 456 789</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary-500" />
                        <span>info@studio-bosinova.cz</span>
                      </div>
                    </div>
                  </div>

                  {/* Important Notes */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6">
                    <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                      Důležité informace
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 font-inter">
                      <li>Rezervaci potvrdíme telefonicky nebo e-mailem do 24 hodin</li>
                      <li>Stornování je možné do 24 hodin před termínem</li>
                      <li>Při opožděním nad 15 minut může být termín zrušen</li>
                      <li>Přijímáme hotovost i platební karty</li>
                      <li>První konzultace je vždy zdarma</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              // Success Message
              <div className="text-center bg-white dark:bg-neutral-800 rounded-2xl p-12 shadow-xl border border-neutral-200 dark:border-neutral-700 max-w-2xl mx-auto">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-4">
                  Rezervace odeslána!
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed mb-6">
                  Děkujeme za vaši rezervaci. Ozveme se vám do 24 hodin s potvrzením termínu 
                  a dalšími informacemi.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4">
                  <p className="text-sm text-green-700 dark:text-green-300 font-inter">
                    Potvrzovací e-mail byl odeslán na adresu: <strong>{formData.email}</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;