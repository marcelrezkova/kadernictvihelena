import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'wide';
  as?: keyof JSX.IntrinsicElements;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  variant = 'default',
  as: Component = 'div',
}) => {
  return (
    <Component
      className={cn(
        variant === 'wide' ? 'container-wide' : 'container',
        className
      )}
    >
      {children}
    </Component>
  );
};