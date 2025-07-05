// src/app/page.tsx
'use client';

import { HeroSection } from './components/sections/Hero/HeroSection';
import { DelegaciasSection } from './components/sections/Delegacias/DelegaciasSection';
import { ContatosSection } from './components/sections/Contatos/ContatosSection';
import { DicasSection } from './components/sections/Dicas/DicasSection';
import { useApiData } from './hooks/useApiData';
import { FooterSection } from './components/sections/Footer/FooterSection';
import { HeroButtons } from './components/sections/Hero/HeroButtons';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/Loading/LoadingSpinner';


export default function Home() {
  const { delegacias, contatos, dicas, isLoading, error } = useApiData();

  if (error) {
    return <ErrorBoundary error={error} />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <HeroSection />
      
      {/* Adicione os botões abaixo do HeroSection ou onde preferir */}
      <div className="container mx-auto px-4 py-8">
        <HeroButtons />
      </div>

      {isLoading.global ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <>
          <DelegaciasSection delegacias={delegacias} isLoading={isLoading.delegacias} />
          <ContatosSection contatos={contatos} isLoading={isLoading.contatos} />
          <DicasSection 
            dicas={dicas} 
            isLoading={isLoading.dicas} 
          />
        </>
      )}
      
      <FooterSection />
    </main>
  );
}