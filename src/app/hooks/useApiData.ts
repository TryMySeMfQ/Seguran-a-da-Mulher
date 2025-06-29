import { useState, useEffect } from 'react';
import { Delegacia, Contato, Dica } from '@/app/lib/types';
import { apiClient } from '../components/sections/Api/ApiClient';

type ApiData = {
  delegacias: Delegacia[];
  contatos: Contato[]; // array de contatos
  dicas: Dica[];
};

type LoadingState = {
  delegacias: boolean;
  contatos: boolean;
  dicas: boolean;
};

export const useApiData = () => {
  const [data, setData] = useState<ApiData>({
    delegacias: [],
    contatos: [],
    dicas: []
  });

  const [isLoading, setIsLoading] = useState<LoadingState>({
    delegacias: true,
    contatos: true,
    dicas: true
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const delegacias = await apiClient.get<Delegacia[]>('delegacias');

        // Contatos vem como objeto { policia: '190', ... }
        const contatosObj = await apiClient.get<Record<string, string>>('contatos');

        // Transforma o objeto em array [{ nome: 'policia', telefone: '190' }, ...]
        const contatos: Contato[] = Object.entries(contatosObj).map(([nome, telefone], index) => ({
        id: String(index),   // gera um id simples baseado no índice
        nome,
        telefone,
        descricao: ''        // ou omita se for opcional
        }));

        const dicas = await apiClient.get<Dica[]>('dicas');

        setData({ delegacias, contatos, dicas });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido');
      } finally {
        setIsLoading({ delegacias: false, contatos: false, dicas: false });
      }
    };

    fetchData();
  }, []);

  return { ...data, isLoading, error };
};
