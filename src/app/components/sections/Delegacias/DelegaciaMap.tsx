// src/app/components/sections/Delegacias/DelegaciaMap.tsx
'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Delegacia } from '../../../lib/types';
import { LoadingSpinner } from '@/app/components/ui/Loading/LoadingSpinner';

// Corrige ícones padrão do Leaflet
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface DelegaciaMapProps {
  delegacias: Delegacia[];
}

const DelegaciaMap = ({ delegacias }: DelegaciaMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || delegacias.length === 0) return;

    // Inicializa o mapa
    mapRef.current = L.map(containerRef.current).setView(
      [-12.9714, -38.5014], // Coordenadas padrão (Salvador)
      13 // Zoom inicial
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapRef.current);

    // Adiciona marcadores
    delegacias.forEach(delegacia => {
      L.marker([delegacia.latitude, delegacia.longitude], { icon: defaultIcon })
        .addTo(mapRef.current!)
        .bindPopup(`
          <div class="space-y-1">
            <h3 class="font-bold">${delegacia.nome}</h3>
            <p class="text-sm">${delegacia.endereco}</p>
            <p class="text-sm text-purple-600">${delegacia.telefone}</p>
            <a 
              href="https://www.google.com/maps?q=${delegacia.latitude},${delegacia.longitude}" 
              target="_blank" 
              class="text-sm text-blue-500 hover:underline"
            >
              Ver rotas
            </a>
          </div>
        `);
    });

    return () => {
      mapRef.current?.remove();
    };
  }, [delegacias]);

  if (delegacias.length === 0) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Localização no Mapa</h3>
      <div 
        ref={containerRef} 
        className="h-96 w-full rounded-lg shadow-md border border-gray-200"
      />
    </div>
  );
};

export default DelegaciaMap;