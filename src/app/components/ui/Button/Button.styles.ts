// src/app/components/ui/Button/Button.styles.ts
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'px-6 py-3 rounded-lg font-medium transition-colors duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-purple-600 text-white hover:bg-purple-700',
        outline: 'border border-purple-600 text-purple-600 hover:bg-purple-50'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);