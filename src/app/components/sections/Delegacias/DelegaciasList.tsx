'use client';

import { Delegacia } from '../../../lib/types';
import { Button } from '@/app/components/ui/Button/Button';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

interface DelegaciasListProps {
  delegacias: Delegacia[];
}

export const DelegaciasList = ({ delegacias }: DelegaciasListProps) => {
  const handleOpenMaps = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-purple-900 mb-8">Delegacias Disponíveis</h3>
      <ul className="grid gap-6">
        {delegacias.map((delegacia) => (
          <li 
            key={delegacia.id} 
            className="bg-white p-6 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 border border-purple-50 hover:border-purple-100"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-50 p-3 rounded-xl">
                    <MapPinIcon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-purple-800">{delegacia.nome}</h4>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {delegacia.endereco}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                    {delegacia.tipo}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-2 text-purple-400" />
                    {delegacia.horarioFuncionamento}
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-col gap-3 sm:gap-2 sm:min-w-[140px]">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full flex items-center gap-2 border-purple-200 text-purple-700 hover:border-purple-500 hover:bg-purple-50 hover:text-purple-800"
                  onClick={() => handleOpenMaps(delegacia.latitude, delegacia.longitude)}
                >
                  <MapPinIcon className="h-4 w-4" />
                  <span>Mapa</span>
                </Button>
                <Button 
                  variant="solid" 
                  size="sm"
                  className="w-full flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  asChild
                >
                  <a href={`tel:${delegacia.telefone}`}>
                    <PhoneIcon className="h-4 w-4" />
                    <span>Ligar</span>
                  </a>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};