import { ApiResponse, ApiError } from '@/types/apiTypes';

// Configuração base do cliente HTTP
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

// Função para tratamento de erros
const handleError = (response: Response): Promise<never> => {
  if (!response.ok) {
    return response.json().then(
      (errorData) => {
        throw {
          message: errorData.message || 'API request failed',
          status: response.status,
          details: errorData
        } as ApiError;
      },
      () => {
        throw {
          message: response.statusText,
          status: response.status
        } as ApiError;
      }
    );
  }
  return Promise.reject(new Error('Unknown error'));
};

// Cliente HTTP genérico
export const fetchApiData = async <T extends ApiResponse>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {})
      }
    });

    if (!response.ok) {
      return handleError(response);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error('API request error:', error);
    throw {
      message: (error as Error).message || 'Network error',
      status: 0
    } as ApiError;
  }
};

// Métodos específicos para cada rota (exemplo)
export const fetchRoute1Data = async (): Promise<Route1Data[]> => {
  return fetchApiData<Route1Data[]>('/route1');
};

export const fetchRoute2Data = async (): Promise<Route2Data[]> => {
  return fetchApiData<Route2Data[]>('/route2');
};

export const fetchRoute3Data = async (): Promise<Route3Data[]> => {
  return fetchApiData<Route3Data[]>('/route3');
};

// Método para dados paginados (opcional)
export const fetchPaginatedData = async <T extends ApiResponse>(
  endpoint: string,
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<T>> => {
  const url = `${endpoint}?page=${page}&limit=${limit}`;
  return fetchApiData<PaginatedResponse<T>>(url);
};