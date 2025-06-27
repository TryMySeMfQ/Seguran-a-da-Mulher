import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DataSection from '@/components/DataSection';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

// Dados mockados para exemplo (substitua pelos dados da sua API)
const mockRoute1Data = [
  {
    id: '1',
    name: 'Total de Usuários',
    value: 1245,
    description: 'Usuários ativos nos últimos 30 dias',
    createdAt: '2023-10-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Taxa de Conversão',
    value: 32.6,
    description: 'Percentual de conversão mensal',
    createdAt: '2023-10-15T10:30:00Z'
  }
];

const mockRoute2Data = [
  {
    id: '1',
    metric: 'Tempo Médio de Sessão',
    currentValue: 4.8,
    previousValue: 4.2,
    changePercentage: 14.3,
    unit: 'min'
  },
  {
    id: '2',
    metric: 'Novos Usuários',
    currentValue: 342,
    previousValue: 298,
    changePercentage: 14.8,
    unit: ''
  }
];

const mockRoute3Data = [
  {
    id: '1',
    author: 'Carlos Silva',
    role: 'CEO - Empresa X',
    content: 'A plataforma revolucionou nossa forma de analisar dados. Altamente recomendado!',
    rating: 5,
    date: '2023-09-20'
  },
  {
    id: '2',
    author: 'Ana Oliveira',
    role: 'Gerente de Marketing - Empresa Y',
    content: 'Ferramenta essencial para nossa equipe. Os dashboards são incríveis!',
    rating: 4,
    date: '2023-10-05'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Seção para dados da API - Rota 1 */}
        <DataSection 
          title="Dados Principais"
          description="Informações essenciais do nosso serviço"
          data={mockRoute1Data}
          id="route1"
        />
        
        {/* Seção para dados da API - Rota 2 */}
        <DataSection 
          title="Estatísticas"
          description="Números que comprovam nossa eficiência"
          data={mockRoute2Data}
          reverseLayout
          id="route2"
        />
        
        {/* Seção para dados da API - Rota 3 */}
        <DataSection 
          title="Depoimentos"
          description="O que nossos clientes dizem"
          data={mockRoute3Data}
          id="route3"
        />
        
        <Features />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}