'use client';

import { ApiEndpoints } from './ApiEndpoints';
import { API_ENDPOINT  } from '../../../lib/constants';

export const ApiSection = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
          Integração com API
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-800 text-white px-6 py-3">
            <span className="font-mono">Endpoints Disponíveis</span>
          </div>
          <div className="p-6 space-y-6">
            <ApiEndpoints endpoints={API_ENDPOINT} />
          </div>
        </div>
      </div>
    </section>
  );
};