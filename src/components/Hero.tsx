import React from 'react';
import { Calendar, Award, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3992856/pexels-photo-3992856.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Elegantní kadeřnické studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent dark:from-black/80 dark:via-black/60"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div ref={ref} className={`max-w-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-400/20 backdrop-blur-sm rounded-full text-primary-100 text-sm font-inter font-medium mb-4">
              ✨ Profesionální péče o vaši krásu
            </span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Váš sen o
            <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              dokonalé kráse
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-200 mb-8 font-inter leading-relaxed">
            Objevte svou přirozenou krásu v našem moderním studiu. Specializujeme se na individuální přístup 
            a poskytujeme kompletní služby v oblasti kadeřnictví, kosmetiky a wellness.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center space-x-2 text-white">
              <Award className="w-5 h-5 text-primary-400" />
              <span className="font-inter font-medium">15+ let zkušeností</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Heart className="w-5 h-5 text-primary-400" />
              <span className="font-inter font-medium">500+ spokojených klientek</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToBooking}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full font-inter font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Objednat se</span>
              </span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/30 hover:border-white text-white hover:bg-white/10 rounded-full font-inter font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Naše služby
            </button>
          </div>
        </div>

        {/* Floating Card */}
        <div className={`absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm border border-white/20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="font-playfair font-bold text-white text-lg mb-2">
                Speciální nabídka
              </h3>
              <p className="text-neutral-200 text-sm font-inter mb-4">
                První návštěva s 20% slevou na všechny služby
              </p>
              <button
                onClick={scrollToBooking}
                className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-inter font-medium transition-colors"
              >
                Využít nabídku
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;