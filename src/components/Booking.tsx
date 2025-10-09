import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { allServices } from '../data/pricing';
import { useGoogleCalendar } from '../hooks/useGoogleCalendar';
import { googleCalendarService } from '../services/googleCalendar';

const BOOKING_EMAIL = 'rezervace@test.cz';

const Booking: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { isInitialized } = useGoogleCalendar();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [availableTimes, setAvailableTimes] = useState<string[]>([
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30'
  ]);

  useEffect(() => {
    if (formData.date && isInitialized) {
      loadAvailableSlots(formData.date);
    }
  }, [formData.date, isInitialized]);

  const loadAvailableSlots = async (date: string) => {
    setIsLoading(true);
    try {
      const slots = await googleCalendarService.getAvailableSlots(date);
      setAvailableTimes(slots.length > 0 ? slots : [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30'
      ]);
    } catch (error) {
      console.error('Error loading available slots:', error);
      setAvailableTimes([
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30'
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedService = allServices.find(s => s.name === formData.service);
    const serviceName = selectedService?.name || formData.service;

    const formattedDate = new Date(formData.date).toLocaleDateString('cs-CZ', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const emailSubject = encodeURIComponent(`Žádost o rezervaci - ${serviceName}`);
    const emailBody = encodeURIComponent(
      `Dobrý den,\n\n` +
      `žádám o rezervaci termínu v kadeřnictví POHODA.\n\n` +
      `KONTAKTNÍ ÚDAJE:\n` +
      `Jméno: ${formData.name}\n` +
      `Telefon: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `POŽADOVANÝ TERMÍN:\n` +
      `Služba: ${serviceName}\n` +
      `Datum: ${formattedDate}\n` +
      `Čas: ${formData.time}\n\n` +
      `${formData.message ? `POZNÁMKA:\n${formData.message}\n\n` : ''}` +
      `S pozdravem,\n${formData.name}`
    );

    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              <span className="block text-primary-600 dark:text-primary-400">na termín</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Vyberte si službu a termín, který vám vyhovuje. Odešleme za vás žádost o rezervaci emailem.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-playfair font-bold text-2xl text-neutral-800 dark:text-white mb-6">
                  Rezervační formulář
                </h3>

                {!isInitialized && (
                  <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin flex-shrink-0 mt-0.5"></div>
                      <p className="text-sm text-blue-700 dark:text-blue-300 font-inter">
                        Načítám dostupné termíny z kalendáře...
                      </p>
                    </div>
                  </div>
                )}

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
                        {allServices.map((service) => (
                          <option key={service.name} value={service.name}>
                            {service.name}
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
                      disabled={!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time}
                      className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-neutral-400 disabled:to-neutral-500 text-white rounded-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Odeslat žádost o rezervaci</span>
                    </button>

                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-700 dark:text-blue-300 font-inter">
                          Po kliknutí na tlačítko se otevře váš emailový klient s předvyplněnou zprávou.
                          Stačí ji odeslat a my vás budeme kontaktovat pro potvrzení termínu.
                        </p>
                      </div>
                    </div>
                  </form>
              </div>

              {/* Booking Information */}
              <div className="space-y-8">
                {/* Calendar Info */}
                {isLoading && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-sm text-blue-700 dark:text-blue-300 font-inter">
                        Načítám dostupné termíny...
                      </p>
                    </div>
                  </div>
                )}

                {/* Important Information */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6">
                  <h4 className="font-playfair font-bold text-xl text-neutral-800 dark:text-white mb-4">
                    Jak to funguje
                  </h4>
                  <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300 font-inter">
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                      <span>Vyplňte formulář s vašimi údaji a vyberte termín</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                      <span>Otevře se emailová aplikace s předvyplněnou zprávou</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                      <span>Odešlete email a my vás budeme kontaktovat pro potvrzení</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                      <span>Termíny jsou orientační - zobrazují obsazenost kalendáře</span>
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