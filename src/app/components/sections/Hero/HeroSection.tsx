// src/app/components/sections/Hero/HeroSection.tsx
'use client';

import dynamic from 'next/dynamic';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroButtons } from './HeroButtons';
import { MapLoading } from '../../Map/MapLoading';

const DynamicMap = dynamic(() => import('../../Map/MapComponent').then(mod => mod.MapComponent), {
  ssr: false,
  loading: () => <MapLoading />
});


export const HeroSection = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 space-y-6">
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
      </div>
      <div className="md:w-1/2">
        <DynamicMap />
      </div>
    </div>
  </section>
);