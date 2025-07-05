// src/app/components/sections/Contatos/ContatoCard.tsx
'use client';

import { BaseCard } from '@/app/components/ui/Card/BaseCard';
import { Contato } from '../../../lib/types';
import { PhoneIcon } from '@heroicons/react/24/solid';

interface ContatoCardProps {
  contato: Contato;
}

export const ContatoCard = ({ contato }: ContatoCardProps) => (
  <BaseCard className="p-6 hover:shadow-lg transition-shadow h-full">
    <div className="flex items-start gap-4">
      <div className="bg-purple-100 p-3 rounded-full">
        <PhoneIcon className="h-5 w-5 text-purple-600" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg">{contato.nome}</h3>
        <a 
          href={`tel:${contato.telefone}`}
          className="mt-2 text-purple-600 font-medium block hover:text-purple-800 transition-colors"
        >
          {contato.telefone}
        </a>
        {contato.descricao && (
          <p className="text-sm text-gray-600 mt-2">{contato.descricao}</p>
        )}
      </div>
    </div>
  </BaseCard>
);
