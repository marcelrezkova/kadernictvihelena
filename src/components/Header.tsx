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
        ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >
            <div className={`transition-all duration-300 rounded-full backdrop-blur-sm ${
              isScrolled
                ? (isDark ? 'bg-white/25 p-2 shadow-lg' : 'bg-transparent')
                : 'bg-white/25 p-2 shadow-lg'
            }`}>
              <img
                src="/logo.png"
                alt="Logo Kadernictvi Pohoda"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? 'h-8 sm:h-10 lg:h-12'
                    : 'h-10 sm:h-12 lg:h-14'
                } ${
                  isDark
                    ? 'brightness-200 contrast-125 saturate-110'
                    : !isScrolled
                    ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]'
                    : ''
                }`}
              />
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-all duration-200 font-inter font-medium hover:text-primary-600 dark:hover:text-primary-400 ${
                  isScrolled
                    ? 'text-neutral-700 dark:text-neutral-300'
                    : 'text-white dark:text-neutral-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-3 text-sm transition-all duration-200 ${
              isScrolled
                ? 'text-neutral-600 dark:text-neutral-400'
                : 'text-white dark:text-neutral-400'
            }`}>
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
