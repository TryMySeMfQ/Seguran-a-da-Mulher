import React from 'react';
import { Contato } from '../../../lib/types';

type ContatosSectionProps = {
  contatos: Contato[];
  isLoading: boolean;
};

export const ContatosSection = ({ contatos, isLoading }: ContatosSectionProps) => {
  if (isLoading) return <p>Carregando contatos...</p>;

  return (
    <section>
      <h2>Contatos</h2>
      {contatos.map((contato, index) => (
        <div key={index}>
          <strong>{contato.nome.replace(/_/g, ' ')}</strong>: {contato.telefone}
        </div>
      ))}
    </section>
  );
};



