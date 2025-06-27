// Tipo base para respostas da API
export interface ApiResponse {
  [key: string]: any;
}

// Tipo para erros da API
export interface ApiError {
  message: string;
  status?: number;
  details?: any;
}

// Tipos específicos para rotas da API (exemplo - ajuste conforme sua API real)
export interface Route1Data {
  id: string;
  name: string;
  value: number;
  description?: string;
  createdAt: string;
}

export interface Route2Data {
  id: string;
  metric: string;
  currentValue: number;
  previousValue: number;
  changePercentage: number;
  unit: string;
}

export interface Route3Data {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

// Tipo para dados paginados (caso sua API use paginação)
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}