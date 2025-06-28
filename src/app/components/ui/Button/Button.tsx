// src/app/components/ui/Button/Button.tsx
'use client';

import { ButtonHTMLAttributes } from 'react';
import { buttonVariants } from './Button.styles';

type ButtonProps = {
  variant?: 'primary' | 'outline';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, className })} {...props} />
  );
};