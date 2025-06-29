// src/app/page.tsx
'use client';

import { HeroSection } from './components/sections/Hero/HeroSection';
import { DelegaciasSection } from './components/sections/Delegacias/DelegaciasSection';
import { ContatosSection } from './components/sections/Contatos/ContatosSection';
import { DicasSection } from './components/sections/Dicas/DicasSection';
import { useApiData } from './hooks/useApiData';
import { FooterSection } from './components/sections/Footer/FooterSection';

export default function Home() {
  const {
    delegacias,
    contatos,
    dicas,
    isLoading,
    error
  } = useApiData();

  if (error) {
    return (
      <div className="error-boundary">
        {/* Componente de erro */}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <HeroSection />
      <DelegaciasSection delegacias={delegacias} isLoading={isLoading.delegacias} />
      <ContatosSection contatos={contatos} isLoading={isLoading.contatos} />
      <DicasSection dicas={dicas} isLoading={isLoading.dicas} />
      <FooterSection />
    </main>
  );
}