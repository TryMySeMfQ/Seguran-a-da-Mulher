'use client';

import { DicaItem } from './DicaItem';
import { Dica } from '../../../lib/types';
import { LoadingSpinner } from '../../ui/Loading/LoadingSpinner';

interface DicasSectionProps {
  dicas: string[]; // Recebe array de strings
  isLoading?: boolean;
}

export const DicasSection = ({ 
  dicas, 
  isLoading = false 
}: DicasSectionProps) => {
  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <LoadingSpinner className="mx-auto" />
        </div>
      </section>
    );
  }

  // Transformação segura com TypeScript
  const transformarDicas = (dicasStrings: string[]): Dica[] => {
    return dicasStrings.map((texto, index) => ({
      id: `dica-${index + 1}`,
      titulo: `Dica ${index + 1}`,
      descricao: texto,
      categoria: 'Geral'
    }));
  };

  const dicasFormatadas: Dica[] = transformarDicas(dicas);

  return (
    <section id="dicas" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
          Dicas de Segurança
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {dicasFormatadas.map((dica) => (
            <DicaItem key={dica.id} dica={dica} />
          ))}
        </div>
      </div>
    </section>
  );
};




