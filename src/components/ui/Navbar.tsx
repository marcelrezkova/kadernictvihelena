import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from './Button';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  brand?: React.ReactNode;
  items?: NavItem[];
  actions?: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brand,
  items = [],
  actions,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Přejít na hlavní obsah
      </a>
      
      <header
        className={cn(
          'fixed top-0 w-full z-sticky transition-all duration-normal',
          isScrolled
            ? 'bg-bg/95 backdrop-blur-sm border-b border-border shadow-sm'
            : 'bg-transparent',
          className
        )}
      >
        <nav className="container" role="navigation" aria-label="Hlavní navigace">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex-shrink-0">
              {brand}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-fg hover:text-brand transition-colors duration-fast font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {actions}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Zavřít menu' : 'Otevřít menu'}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div
              id="mobile-menu"
              className="md:hidden border-t border-border bg-bg/95 backdrop-blur-sm"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-fg hover:bg-muted hover:text-brand transition-colors duration-fast font-medium rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </button>
                ))}
                {actions && (
                  <div className="pt-4 border-t border-border mt-4">
                    {actions}
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};