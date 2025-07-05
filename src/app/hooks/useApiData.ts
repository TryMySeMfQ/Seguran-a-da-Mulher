import { useState, useEffect } from 'react';
import { Delegacia, Contato } from '../lib/types'; // Removido Dica não utilizado
import { apiClient } from '../components/sections/Api/ApiClient';

type ApiData = {
  delegacias: Delegacia[];
  contatos: Contato[];
  dicas: string[]; // Mantido como string[] conforme necessidade
};

type LoadingState = {
  global: boolean;
  delegacias: boolean;
  contatos: boolean;
  dicas: boolean;
};

type ErrorState = Error | null;

export const useApiData = () => {
  const [data, setData] = useState<ApiData>({
    delegacias: [],
    contatos: [],
    dicas: []
  });

  const [isLoading, setIsLoading] = useState<LoadingState>({
    global: true,
    delegacias: true,
    contatos: true,
    dicas: true
  });

  const [error, setError] = useState<ErrorState>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading({
          global: true,
          delegacias: true,
          contatos: true,
          dicas: true
        });

        // Fetch paralelo para melhor performance
        const [delegacias, contatosResponse, dicas] = await Promise.all([
          apiClient.get<Delegacia[]>('delegacias'),
          apiClient.get<Record<string, string>>('contatos'),
          apiClient.get<string[]>('dicas')
        ]);

        // Transformação otimizada de contatos
       const contatos = Object.entries(contatosResponse).map(([key, value], index) => ({
        id: `contato-${index}`,
        nome: formatContactName(key),
        telefone: value,
        tipo: getContactType(key),
        descricao: `Contato de ${getContactType(key).toLowerCase()}` // Adicionando descrição
      }));

        setData({ delegacias, contatos, dicas });

      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro ao carregar dados'));
        console.error('API Error:', err);
      } finally {
        setIsLoading({
          global: false,
          delegacias: false,
          contatos: false,
          dicas: false
        });
      }
    };

    fetchData();

    // Função de limpeza para abortar requisições se necessário
    return () => {
      // Aqui você poderia adicionar lógica para cancelar requisições
    };
  }, []);

  return { 
    ...data, 
    isLoading,
    error 
  };
};

// Funções auxiliares (podem ser movidas para um arquivo utils)
const formatContactName = (key: string): string => {
  return key.split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getContactType = (key: string): string => {
  const types: Record<string, string> = {
    policia: 'Emergência',
    samu: 'Saúde',
    bombeiros: 'Emergência',
    violencia: 'Apoio'
  };
  return types[key] || 'Geral';
};