import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { servicesData } from '../data/servicesData';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulace odeslání formuláře
      console.log('Rezervace odeslána:', formData);
      
      // Simulace API volání
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    } catch (error) {
      console.error('Chyba při odesílání rezervace:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Dostupné časy (později bude načítáno z API)
  const availableTimes = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30'
  ];

  // Minimální datum (dnes)
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
              <span className="block text-primary-600 dark:text-primary-400">na termín</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Vyberte si službu a termín, který vám vyhovuje. Potvrzení rezervace obdržíte 
              na váš e-mail do několika minut.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-6">
                  Rezervační formulář
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="font-inter font-semibold text-lg text-neutral-800 dark:text-white mb-2">
                      Rezervace úspěšně odeslána!
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300 font-inter mb-4">
                      Děkujeme za vaši rezervaci. Potvrzení obdržíte na e-mail do několika minut.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-left">
                      <h5 className="font-inter font-semibold text-green-800 dark:text-green-300 mb-2">
                        Detaily rezervace:
                      </h5>
                      <div className="space-y-1 text-sm text-green-700 dark:text-green-400">
                        <p><strong>Služba:</strong> {formData.service}</p>
                        <p><strong>Datum:</strong> {formData.date}</p>
                        <p><strong>Čas:</strong> {formData.time}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-inter font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Jméno a příjmení *
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
                          <Phone className="w-4 h-4 inline mr-2" />
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white font-inter"
                          placeholder="123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
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

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-inter font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Služba *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white font-inter"
                      >
                        <option value="">Vyberte službu</option>
                        {servicesData.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-inter font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Datum *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={today}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white font-inter"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-inter font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          <Clock className="w-4 h-4 inline mr-2" />
                          Čas *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white font-inter"
                        >
                          <option value="">Vyberte čas</option>
                          {availableTimes.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-inter font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Poznámka (volitelné)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white font-inter resize-none"
                        placeholder="Máte nějaké speciální požadavky nebo poznámky?"
                      />
                    </div>

                    {/* Submit Button */}
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
                          <Calendar className="w-5 h-5" />
                          <span>Odeslat rezervaci</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Booking Information */}
              <div className="space-y-8">
                {/* Important Information */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6">
                  <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                    Důležité informace
                  </h4>
                  <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300 font-inter">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Potvrzení rezervace obdržíte na e-mail do 15 minut</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rezervaci lze zrušit zdarma do 24 hodin před termínem</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Při prvním návštěvě je konzultace zdarma</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>Prosíme, dostavte se 5 minut před termínem</span>
                    </div>
                  </div>
                </div>

                {/* Contact for Questions */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                    Máte dotazy?
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-300 font-inter text-sm mb-4">
                    Pokud máte jakékoliv dotazy nebo potřebujete poradit s výběrem služby, 
                    neváhejte nás kontaktovat.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-primary-500" />
                      <a href="tel:739469932" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-inter">
                        739 469 932
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-primary-500" />
                      <span className="text-neutral-600 dark:text-neutral-300 font-inter">
                        helena.bosinova@email.cz
                      </span>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                    Otevírací doba
                  </h4>
                  <div className="text-neutral-600 dark:text-neutral-300 font-inter text-sm">
                    <p className="mb-2">Dle objednávek</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Dámské, pánské, dětské kadeřnictví
                    </p>
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

export default Booking;