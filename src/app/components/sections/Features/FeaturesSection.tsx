'use client';

import { FeaturesGrid } from './FeaturesGrid';
import { FEATURES } from '../../../lib/constants';

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
          Recursos Principais
        </h2>
        <FeaturesGrid features = {FEATURES} />
      </div>
    </section>
  );
};
