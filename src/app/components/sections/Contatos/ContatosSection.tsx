// src/app/components/sections/Contatos/ContatosSection.tsx
'use client';

import { ContatoCard } from './ContatoCard';
import { Contato } from '../../../lib/types';
import { LoadingSpinner } from '@/app/components/ui/Loading/LoadingSpinner';

interface ContatosSectionProps {
  contatos: Contato[];
  isLoading?: boolean;
}

export const ContatosSection = ({ 
  contatos, 
  isLoading = false 
}: ContatosSectionProps) => {
  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <LoadingSpinner className="mx-auto" />
        </div>
      </section>
    );
  }

  return (
    <section id="contatos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
          Contatos de Emergência
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contatos.map((contato) => (
            <ContatoCard key={contato.id} contato={contato} />
          ))}
        </div>
      </div>
    </section>
  );
};



