import React, { useState } from 'react';
import { MapPin, Phone, Mail, Heart, Shield, FileText, Cookie } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCookieSettings = () => {
    localStorage.removeItem('cookieConsent');
    window.location.reload();
  };

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <h3 className="font-playfair font-bold text-xl">Helena Bošinová</h3>
                <p className="text-neutral-400 text-sm">Kadeřnictví POHODA</p>
              </div>
            </div>
            <p className="text-neutral-300 font-inter text-sm leading-relaxed mb-4">
              Kadeřnice a kosmetická poradkyně MK s více než 20letou praxí. 
              Specializuji se na dámské, pánské a dětské kadeřnictví.
            </p>
            <div className="flex items-center space-x-2 text-sm text-neutral-400">
              <Heart className="w-4 h-4 text-primary-400" />
              <span>Každý účes na míru</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-6">Rychlé odkazy</h4>
            <nav className="space-y-3">
              {[
                { label: 'Domů', href: 'home' },
                { label: 'O mně', href: 'about' },
                { label: 'Galerie', href: 'gallery' },
                { label: 'Ceník', href: 'pricing' },
                { label: 'Rezervace', href: 'booking' }
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-neutral-300 hover:text-primary-400 transition-colors font-inter text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300 font-inter text-sm">
                    Kadeřnictví POHODA<br />
                    Moskevská 637, Liberec
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:739469932" 
                  className="text-neutral-300 hover:text-primary-400 transition-colors font-inter text-sm"
                >
                  739 469 932
                </a>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4 mt-6">
                <p className="text-neutral-300 font-inter text-sm mb-2">
                  <strong>Otevírací doba:</strong> Dle objednávek
                </p>
                <p className="text-neutral-400 font-inter text-xs">
                  Bezplatné parkování v Plaza
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setShowPrivacy(true)}
                className="flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors font-inter text-sm"
              >
                <Shield className="w-4 h-4" />
                Ochrana osobních údajů
              </button>
              <button
                onClick={() => setShowTerms(true)}
                className="flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors font-inter text-sm"
              >
                <FileText className="w-4 h-4" />
                Obchodní podmínky
              </button>
              <button
                onClick={openCookieSettings}
                className="flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors font-inter text-sm"
              >
                <Cookie className="w-4 h-4" />
                Nastavení cookies
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col items-center md:items-start space-y-2">
                <p className="text-neutral-400 font-inter text-sm">
                  © {new Date().getFullYear()} Helena Bošinová - Kadeřnictví POHODA. Všechna práva vyhrazena.
                </p>
                <p className="text-neutral-500 font-inter text-xs">
                  Made by{' '}
                  <a
                    href="https://smooth-development.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                  >
                    Smooth Development
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-4 text-neutral-400 text-sm">
                <span>Dámské • Pánské • Dětské • Holičství</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsOfService onClose={() => setShowTerms(false)} />}
    </footer>
  );
};

export default Footer;