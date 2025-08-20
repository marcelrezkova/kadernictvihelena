import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { googleCalendarService, BookingData } from '../services/googleCalendar';

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
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const services = [
    { name: 'Dámský střih', duration: '60 min', price: 'od 800 Kč' },
    { name: 'Pánský střih', duration: '45 min', price: 'od 600 Kč' },
    { name: 'Dětský střih', duration: '30 min', price: 'od 400 Kč' },
    { name: 'Barvení', duration: '120 min', price: 'od 1200 Kč' },
    { name: 'Melírování', duration: '150 min', price: 'od 1500 Kč' },
    { name: 'Společenský účes', duration: '90 min', price: 'od 1000 Kč' },
    { name: 'Svatební účes', duration: '120 min', price: 'od 1500 Kč' }
  ];

  const timeSlots = [
    '8:00', '8:30', '9:00', '9:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30'
  ];

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Když se změní datum, načti dostupné časy
    if (e.target.name === 'date' && e.target.value) {
      await loadAvailableSlots(e.target.value);
    }
  };

  const loadAvailableSlots = async (date: string) => {
    try {
      setIsLoading(true);
      const slots = await googleCalendarService.getAvailableSlots(date);
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Error loading available slots:', error);
      setAvailableSlots(timeSlots); // Fallback na všechny časy
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Kontrola dostupnosti termínu
      const isAvailable = await googleCalendarService.checkAvailability(formData.date, formData.time);
      
      if (!isAvailable) {
        setError('Vybraný termín již není dostupný. Prosím vyberte jiný čas.');
        setIsLoading(false);
        return;
      }

      // Vytvoření rezervace v Google Calendar
      const bookingData: BookingData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        message: formData.message
      };

      const eventId = await googleCalendarService.createBooking(bookingData);
      
      console.log('Booking created with ID:', eventId);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
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
        setError(null);
      }, 5000);

    } catch (error) {
      console.error('Booking error:', error);
      setError('Nepodařilo se vytvořit rezervaci. Prosím zkuste to znovu nebo nás kontaktujte telefonicky.');
    } finally {
      setIsLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-white dark:bg-neutral-900">
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
              do 24 hodin na váš e-mail nebo telefon.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-3xl p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
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
                          placeholder="Vaše jméno"
                        />
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

                    {/* Service Selection */}
                    <div>
                      <label className="block text-neutral-700 dark:text-neutral-300 font-inter font-medium mb-2">
                        Služba *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Vyberte službu</option>
                        {services.map((service, index) => (
                          <option key={index} value={service.name}>
                            {service.name} - {service.duration} ({service.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date & Time Selection */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-neutral-700 dark:text-neutral-300 font-inter font-medium mb-2">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Datum *
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
                          Čas *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          disabled={!formData.date || isLoading}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">
                            {isLoading ? 'Načítám dostupné časy...' : 'Vyberte čas'}
                          </option>
                          {(availableSlots.length > 0 ? availableSlots : timeSlots).map((time) => (
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
                        Poznámka
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

                    {/* Error Message */}
                    {error && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                        <p className="text-red-600 dark:text-red-400 font-inter text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-neutral-400 disabled:to-neutral-500 text-white py-4 rounded-xl font-inter font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <Send className="w-5 h-5" />
                      <span>{isLoading ? 'Vytvářím rezervaci...' : 'Odeslat rezervaci'}</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-4">
                      Rezervace odeslána!
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 font-inter">
                      Děkujeme za vaši rezervaci. Potvrzení obdržíte do 24 hodin.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6">
                <h3 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                  Kontakt
                </h3>
                <div className="space-y-3 text-neutral-600 dark:text-neutral-300 font-inter">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-500" />
                    <span>739 469 932</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-500" />
                    <span>helena.bosinova@email.cz</span>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6">
                <h3 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                  Otevírací doba
                </h3>
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 font-inter">
                  <div className="flex justify-between">
                    <span>Pondělí - Pátek</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota</span>
                    <span>8:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Neděle</span>
                    <span>Zavřeno</span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
                <h3 className="font-playfair font-bold text-lg text-amber-800 dark:text-amber-400 mb-3">
                  Důležité informace
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 font-inter">
                  <li>Rezervaci potvrdíme telefonicky nebo e-mailem do 24 hodin</li>
                  <li>Stornování je možné do 24 hodin před termínem</li>
                  <li>Systém automaticky kontroluje dostupnost termínů</li>
                  <li>Při opožděním nad 15 minut může být termín zrušen</li>
                  <li>Přijímáme hotovost i platební karty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;