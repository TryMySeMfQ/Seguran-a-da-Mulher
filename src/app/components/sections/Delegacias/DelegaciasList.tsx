// src/app/components/sections/Delegacias/DelegaciasList.tsx
'use client';

import { Delegacia } from '../../../lib/types';
import { Button } from '@/app/components/ui/Button/Button';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface DelegaciasListProps {
  delegacias: Delegacia[];
}

export const DelegaciasList = ({ delegacias }: DelegaciasListProps) => {
  const handleOpenMaps = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">Lista Completa</h3>
      <ul className="space-y-4">
        {delegacias.map((delegacia) => (
          <li 
            key={delegacia.id} 
            className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-purple-900">{delegacia.nome}</h4>
                <p className="text-sm text-gray-600 mt-1 flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {delegacia.endereco}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleOpenMaps(delegacia.latitude, delegacia.longitude)}
                  aria-label="Abrir no mapa"
                >
                  <MapPinIcon className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  asChild
                >
                  <a href={`tel:${delegacia.telefone}`} aria-label="Ligar">
                    <PhoneIcon className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {delegacia.tipo}
              </span>
              <p className="ml-2 text-sm text-gray-500">
                {delegacia.horarioFuncionamento}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};