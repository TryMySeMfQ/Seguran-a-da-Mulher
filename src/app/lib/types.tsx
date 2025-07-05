// Tipos para Delegacia
export interface Delegacia {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  tipo: 'DEAM' | 'Comum' | 'Especializada'; // Valores específicos
  horarioFuncionamento: string;
  latitude: number;
  longitude: number;
  descricao?: string;
  createdAt?: Date; // Adicionando campo de data opcional
  updatedAt?: Date;
}

// Tipos para Contato
export interface Contato {
  id: string;
  nome: string;
  telefone: string;
  descricao: string;
  categoria?: 'emergencia' | 'informacao' | 'apoio'; // Categorias pré-definidas
  prioritario?: boolean;
}

// Tipos para Dica
export interface Dica {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
}

// Tipos para Variantes de Botão
export const ButtonVariants = {
  PRIMARY: 'primary',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  LINK: 'link',
} as const;

export type ButtonVariant = typeof ButtonVariants[keyof typeof ButtonVariants];

// Tipo para resposta da API
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
}

// Tipo para erros da API
export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
  timestamp: string;
  path: string;
}