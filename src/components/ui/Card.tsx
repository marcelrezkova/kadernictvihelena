import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'default' | 'lg';
  as?: keyof JSX.IntrinsicElements;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'default',
  as: Component = 'div',
}) => {
  const baseStyles = 'bg-card text-card-fg border-card-border rounded-lg';
  
  const variantStyles = {
    default: 'border shadow-sm',
    elevated: 'border shadow-lg',
    outlined: 'border-2',
  };

  const paddingStyles = {
    sm: 'p-3',
    default: 'p-4',
    lg: 'p-6',
  };

  return (
    <Component
      className={cn(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </Component>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 pb-4', className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle: React.FC<CardTitleProps> = ({ 
  children, 
  className, 
  as: Component = 'h3' 
}) => {
  return (
    <Component className={cn('font-serif font-bold leading-tight', className)}>
      {children}
    </Component>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ 
  children, 
  className 
}) => {
  return (
    <p className={cn('text-sm text-muted', className)}>
      {children}
    </p>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={cn('flex items-center pt-4', className)}>
      {children}
    </div>
  );
};