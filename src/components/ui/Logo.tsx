import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = false
}) => {
  const { isDark } = useTheme();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <img
          src="/images/logo.png"
          alt="Helena Bošínová - Kadeřnictví POHODA"
          className={`${sizeClasses[size]} object-contain transition-all duration-200 ${
            isDark
              ? 'filter invert'
              : ''
          }`}
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-playfair font-bold text-neutral-800 dark:text-white ${textSizeClasses[size]}`}>
            Helena Bošínová
          </span>
          <span className={`font-inter text-neutral-600 dark:text-neutral-300 ${
            size === 'lg' ? 'text-sm' : 'text-xs'
          }`}>
            Kadeřnictví POHODA
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;