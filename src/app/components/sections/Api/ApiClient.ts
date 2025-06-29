class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/$/, ''); // remove barra no fim
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}/api/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar ${endpoint}`);
    }
    return response.json();
  }
}

export const apiClient = new ApiClient('https://womandd-1.onrender.com/');



