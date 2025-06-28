// src/app/components/Map/MapComponent.tsx
'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([-12.9714, -38.5014], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} className="h-96 w-full rounded-lg shadow-lg" />;
};