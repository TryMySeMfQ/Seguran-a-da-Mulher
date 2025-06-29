import React from 'react';
import { Dica } from '@/app/lib/types';

type DicasSectionProps = {
  dicas: Dica[];
  isLoading: boolean;
};

export const DicasSection = ({ dicas, isLoading }: DicasSectionProps) => {
  if (isLoading) return <p>Carregando dicas...</p>;

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-4">Dicas de Segurança</h2>
      <div className="grid gap-4">
        {dicas.map((dica, index) => (
          <div key={dica.id ?? index}>
            <h3 className="text-lg font-semibold">{dica.titulo}</h3>
            <p>{dica.conteudo}</p>
          </div>
        ))}
      </div>
    </section>
  );
};



