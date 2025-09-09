import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'alt' | 'brand' | 'accent';
  size?: 'sm' | 'default' | 'lg';
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  as: Component = 'section',
  id,
}) => {
  const sizeClass = {
    sm: 'section-sm',
    default: 'section',
    lg: 'section-lg',
  }[size];

  return (
    <Component
      id={id}
      className={cn(sizeClass, className)}
      data-variant={variant !== 'default' ? variant : undefined}
    >
      {children}
    </Component>
  );
};