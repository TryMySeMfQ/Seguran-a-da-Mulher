'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../ui/Button/Button';

export const HeroButtons = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
      <Button 
        variant="primary" 
        className="w-full sm:w-auto px-8 py-3 text-lg"
        onClick={() => router.push('/demo')}
      >
        Começar Agora
      </Button>
      
      <Button 
        variant="outline" 
        className="w-full sm:w-auto px-8 py-3 text-lg"
        onClick={() => router.push('/docs')}
      >
        Ver Documentação
      </Button>
    </div>
  );
};