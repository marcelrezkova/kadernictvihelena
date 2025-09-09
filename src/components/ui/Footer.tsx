import React from 'react';
import { cn } from '../../utils/cn';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  brand?: React.ReactNode;
  sections?: FooterSection[];
  bottom?: React.ReactNode;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brand,
  sections = [],
  bottom,
  className,
}) => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={cn('bg-card border-t border-border', className)}>
      <div className="container section">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          {brand && (
            <div className="lg:col-span-2">
              {brand}
            </div>
          )}

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-serif font-bold text-fg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted hover:text-brand transition-colors duration-fast text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        {bottom && (
          <div className="border-t border-border mt-8 pt-8">
            {bottom}
          </div>
        )}
      </div>
    </footer>
  );
};