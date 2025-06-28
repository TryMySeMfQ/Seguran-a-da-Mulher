import { Feature, ApiEndpoint } from './types';

export const FEATURES: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Delegacias no Mapa",
    description: "Localize delegacias especializadas próximas a você"
  },
  // Adicione mais features conforme necessário
];

export const API_ENDPOINT: ApiEndpoint[] = [
  { method: 'GET', path: '/api/delegacias', description: 'Lista todas as delegacias cadastradas' },
  // Adicione mais endpoints conforme necessário
];
