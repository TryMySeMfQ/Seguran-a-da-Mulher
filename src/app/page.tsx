// src/app/page.tsx
import { HeroSection } from './components/sections/Hero/HeroSection';
import { FeaturesSection } from './components/sections/Features/FeaturesSection';
import { ApiSection } from './components/sections/Api/ApiSection';
import { FooterSection } from './components/sections/Footer/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ApiSection />
      <FooterSection />
    </main>
  );
}