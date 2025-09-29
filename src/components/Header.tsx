import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone, Mail } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Domů', href: 'home' },
    { label: 'O mně', href: 'about' },
    { label: 'Galerie', href: 'gallery' },
    { label: 'Ceník', href: 'pricing' },
    { label: 'Rezervace', href: 'booking' },
    { label: 'Kontakt', href: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-neutral-200/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-lg">B</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-inter font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>739 469 932</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>helena.bosinova@email.cz</span>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              Helena Bošínová
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800"
            >
              Kadeřnictví POHODA
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-t dark:border-neutral-800">
            <nav className="py-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors font-inter"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-3 border-t dark:border-neutral-800 mt-2">
                <div className="flex flex-col space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>739 469 932</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>helena.bosinova@email.cz</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;