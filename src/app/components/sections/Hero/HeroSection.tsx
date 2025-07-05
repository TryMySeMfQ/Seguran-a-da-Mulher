'use client';

import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import Image from 'next/image';


export const HeroSection = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 space-y-8">
        <HeroTitle />
        <HeroDescription />
      </div>
      <div className="md:w-1/2">
               {/* Imagem da capa */}
        <div className="relative rounded-xl aspect-video overflow-hidden">
          <Image
            src="/img/capa.png"  // Caminho a partir da pasta public
            alt="Imagem de capa do projeto"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);