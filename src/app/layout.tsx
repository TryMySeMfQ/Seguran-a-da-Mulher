// src/app/layout.tsx
import './styles/globals.css';
import type { Metadata } from 'next';
import { Navbar } from './components/ui/Navbar/Navbar';


export const metadata: Metadata = {
  title: 'Segurança Feminina',
  description: 'Plataforma de segurança para mulheres',
  icons: {
   icon: '/img/favicon.png' 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="pt-20"> {/* Espaço para a navbar fixa */}
          {children}
        </main>
      </body>
    </html>
  );
}
