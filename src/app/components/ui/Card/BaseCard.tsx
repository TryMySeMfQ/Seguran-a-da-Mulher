// src/app/components/ui/Card/BaseCard.tsx
'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../../lib/utils';

type BaseCardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'outline' | 'ghost';
  hoverEffect?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  (
    {
      className,
      variant = 'default',
      hoverEffect = false,
      rounded = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      default: 'bg-white shadow-sm',
      outline: 'border border-gray-200',
      ghost: 'bg-transparent',
    };

    const roundedClasses = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'transition-all duration-200',
          variantClasses[variant],
          roundedClasses[rounded],
          hoverEffect && 'hover:shadow-md hover:transform hover:-translate-y-1',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BaseCard.displayName = 'BaseCard';