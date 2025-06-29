// src/app/components/ui/Loading/LoadingSpinner.tsx
import { cn } from '../../../lib/utils';

type LoadingSpinnerProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'white';
};

export const LoadingSpinner = ({
  className,
  size = 'md',
  variant = 'primary',
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const variantClasses = {
    primary: 'text-purple-600',
    secondary: 'text-purple-300',
    white: 'text-white',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        className
      )}
      role="status"
      aria-label="Carregando"
    >
      <svg
        className={cn(
          'animate-spin',
          sizeClasses[size],
          variantClasses[variant]
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">Carregando...</span>
    </div>
  );
};

// Componente de carregamento em tela cheia
export const FullPageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
    <LoadingSpinner size="lg" />
  </div>
);