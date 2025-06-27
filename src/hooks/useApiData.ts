import { useState, useEffect } from 'react';
import { ApiResponse, ApiError } from '@/types/apiTypes';
import { fetchApiData } from '@/utils/api';

const useApiData = <T extends ApiResponse>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchApiData<T>(endpoint);
        setData(result);
      } catch (err) {
        setError({
          message: (err as Error).message || 'Failed to fetch data',
          status: (err as any).status || 500
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cancelar requisição se o componente for desmontado
      // (implementação básica - em produção considere usar AbortController)
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useApiData;