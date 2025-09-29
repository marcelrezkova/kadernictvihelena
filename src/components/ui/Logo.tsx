import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'default' | 'compact' | 'minimal';
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'default'
}) => {
  const { isDark } = useTheme();

  const sizeConfig = {
    sm: {
      logo: 'w-8 h-8',
      text: 'text-sm',
      subtext: 'text-xs'
    },
    md: {
      logo: 'w-12 h-12',
      text: 'text-lg',
      subtext: 'text-sm'
    },
    lg: {
      logo: 'w-16 h-16',
      text: 'text-xl',
      subtext: 'text-base'
    },
    xl: {
      logo: 'w-20 h-20',
      text: 'text-2xl',
      subtext: 'text-lg'
    }
  };

  const currentSize = sizeConfig[size];

  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      {/* Logo Image with Modern Styling */}
      <div className={`${currentSize.logo} relative flex-shrink-0 mr-4`}>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl transform rotate-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105"></div>
        <div className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg dark:shadow-xl p-3 transform transition-all duration-300 group-hover:scale-105 border border-neutral-100 dark:border-neutral-700">
          <img
            src="/images/logo.png"
            alt="Helena Bošínová - Kadeřnictví POHODA"
            className={`w-full h-full object-contain transition-all duration-300 ${
              isDark
                ? 'filter brightness-0 invert'
                : 'filter brightness-0'
            }`}
          />
        </div>
      </div>

      {/* Text Content */}
      {showText && variant !== 'minimal' && (
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col">
            <span className={`font-playfair font-bold text-neutral-800 dark:text-white ${currentSize.text} leading-tight tracking-wide`}>
              Helena Bošínová
            </span>
            {variant === 'default' && (
              <span className={`font-inter text-rose-600 dark:text-rose-400 ${currentSize.subtext} font-medium tracking-wide`}>
                Kadeřnictví POHODA
              </span>
            )}
          </div>
          {variant === 'default' && size !== 'sm' && (
            <span className="font-inter text-neutral-500 dark:text-neutral-400 text-xs mt-1 leading-relaxed">
              Profesionální péče o vaše vlasy
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;