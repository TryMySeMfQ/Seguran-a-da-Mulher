export interface Delegacia {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  tipo: string;
  horarioFuncionamento: string;
  latitude: number;
  longitude: number;
  descricao?: string;
}

export interface Contato {
  id: string;
  nome: string;
  telefone: string;
  descricao: string;
}

export interface Dica {
  id: string;
  titulo: string;
  conteudo: string;
}

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'link';