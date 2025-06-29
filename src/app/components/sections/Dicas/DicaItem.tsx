// src/components/sections/Dicas/DicaItem.tsx
import React from 'react';

type Dica = {
  id: string;
  titulo: string;
  conteudo: string;
};

type Props = {
  dica: Dica;
};

export const DicaItem = ({ dica }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-purple-700 mb-2">{dica.titulo}</h3>
      <p className="text-gray-700">{dica.conteudo}</p>
    </div>
  );
};

