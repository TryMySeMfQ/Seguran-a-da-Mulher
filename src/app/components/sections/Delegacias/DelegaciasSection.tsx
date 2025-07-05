// src/app/components/sections/Delegacias/DelegaciasSection.tsx
'use client';

import dynamic from 'next/dynamic';
import { DelegaciasList } from './DelegaciasList';
import { LoadingSpinner } from '../../ui/Loading/LoadingSpinner';
import { Delegacia } from '../../../lib/types';

const DelegaciaMap = dynamic(() => import('./DelegaciaMap'), { ssr: false });

interface DelegaciasSectionProps {
  delegacias: Delegacia[];
  isLoading: boolean;
}

export const DelegaciasSection = ({ delegacias, isLoading }: DelegaciasSectionProps) => {
  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <LoadingSpinner className="mx-auto" />
        </div>
      </section>
    );
  }

  return (
    <section id="delegacias" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
          Delegacias Especializadas
        </h2>
         <div className="flex flex-col gap-8">
          <DelegaciasList delegacias={delegacias} />
          <DelegaciaMap delegacias={delegacias} />
        </div>
      </div>
    </section>
  );
};
