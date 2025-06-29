// src/app/components/ui/Button/Button.tsx
'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { buttonVariants } from './Button.styles';
import { cn } from '../../../lib/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', className, asChild = false, children, ...props },
    ref
  ) => {
    if (asChild) {
      // Filtra apenas as props seguras para div
      const safeDivProps = {
        className: cn(buttonVariants({ variant, size }), className),
        children
      };
      
      return <div {...safeDivProps} />;
    }

    // Todas as props são válidas para button
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';