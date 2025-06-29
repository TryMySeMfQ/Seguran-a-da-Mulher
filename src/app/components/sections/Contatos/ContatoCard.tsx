'use client';

import { BaseCard } from '../../ui/Card/BaseCard';

interface Contato {
  id: string;
  nome: string;
  telefone: string;
  descricao: string;
}

interface ContatoCardProps {
  contato: Contato;
}

export const ContatoCard = ({ contato }: ContatoCardProps) => (
  <BaseCard 
    className="p-6" 
    hoverEffect={true} 
    rounded="lg" 
    variant="default"
  >
    <h3 className="font-bold text-xl text-purple-800 mb-3">{contato.nome}</h3>

    <div className="flex items-center space-x-2 mb-2 text-purple-600 font-semibold">
      <svg
        className="w-5 h-5 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 13.05 13.05 0 001.24 3.84 2 2 0 01-.45 2.11L9.91 10.09a16 16 0 006 6l1.43-1.43a2 2 0 012.11-.45 13.05 13.05 0 003.84 1.24A2 2 0 0122 16.92z" />
      </svg>
      <span>{contato.telefone}</span>
    </div>

    {contato.descricao && (
      <div className="flex items-start space-x-2 text-gray-600 text-sm">
        <svg
          className="w-4 h-4 mt-1 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <p>{contato.descricao}</p>
      </div>
    )}
  </BaseCard>
);
