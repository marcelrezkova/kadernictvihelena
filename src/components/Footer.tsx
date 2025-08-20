import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">Kadeřnictví POHODA</h3>
                <p className="text-neutral-400 text-sm font-inter">Helena Bošínová</p>
              </div>
            </div>
            <p className="text-neutral-300 font-inter text-sm leading-relaxed mb-6">
              Helena Bošínová se kadeřnicině věnuje přes 20 let. Specializuje se na dámské, 
              pánské i dětské kadeřnictví v Kadeřnictví POHODA v Liberci.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/studio_bosinova"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/studiobosinova"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-6">Rychlé odkazy</h4>
            <ul className="space-y-3">
              {[
                { label: 'Domů', href: 'home' },
                { label: 'O mně', href: 'about' },
                { label: 'Služby', href: 'services' },
                { label: 'Galerie', href: 'gallery' },
                { label: 'Ceník', href: 'pricing' },
                { label: 'Rezervace', href: 'booking' }
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 font-inter text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-6">Naše služby</h4>
            <ul className="space-y-3">
              {[
                'Kadeřnictví',
                'Kosmetika',
                'Líčení',
                'Anti-aging péče',
                'Wellness',
                'Svatební balíčky'
              ].map((service) => (
                <li key={service}>
                  <span className="text-neutral-300 font-inter text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-neutral-300 font-inter text-sm">
                  Krásná ulice 123<br />
                  Moskevská 637/6<br />
                  Liberec
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300 font-inter text-sm">
                  739 469 932
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300 font-inter text-sm">
                  helena.bosinova@email.cz
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-neutral-800 rounded-xl">
              <h5 className="font-inter font-semibold text-white mb-2">Otevírací doba</h5>
              <div className="text-neutral-300 font-inter text-sm space-y-1">
                <div>Dle objednávek</div>
                <div>Tel: 739 469 932</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 font-inter text-sm">
              © {currentYear} Helena Bošínová - Kadeřnictví POHODA. Všechna práva vyhrazena.
            </div>
            <div className="flex items-center space-x-1 text-neutral-400 font-inter text-sm">
              <span>Vytvořeno s</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>pro vaši krásu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
    </footer>
  );
};

export default Footer;