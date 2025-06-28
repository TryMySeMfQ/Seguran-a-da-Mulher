// src/app/components/Map/MapLoading.tsx
import { ReactElement } from 'react';

export const MapLoading = (): ReactElement => (
  <div className="h-96 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
    <span className="text-gray-500">Carregando mapa...</span>
  </div>
);