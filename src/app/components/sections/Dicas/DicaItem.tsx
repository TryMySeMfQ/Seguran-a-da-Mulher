// src/app/components/sections/Dicas/DicaItem.tsx
'use client';

import { BaseCard } from '@/app/components/ui/Card/BaseCard';
import { Dica } from '../../../lib/types';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

interface DicaItemProps {
  dica: Dica;
}

export const DicaItem = ({ dica }: DicaItemProps) => (
  <BaseCard className="p-6 hover:shadow-md transition-shadow">
    <div className="flex gap-4">
      <ShieldCheckIcon className="h-6 w-6 text-purple-600 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-lg text-purple-900">{dica.titulo}</h3>
        <p className="text-gray-700 mt-2">{dica.descricao}</p>
      </div>
    </div>
  </BaseCard>
);

