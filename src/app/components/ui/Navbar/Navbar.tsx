'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { navItems } from './constants';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed w-full z-50 bg-white shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
      {/* Logo como imagem */}
      <Link href="/" className="flex items-center">
        <Image
          src="/img/favicon.png" // Caminho relativo à pasta public
          alt="Logo SegurançaBA"
          width={40} // Largura em pixels
          height={40} // Altura em pixels
          className="h-10 w-auto" // Classes adicionais para controle de tamanho
          priority // Importante para imagens acima do scroll
        />
        <span className="ml-2 text-2xl font-bold text-purple-700">SegurançaBA</span>
      </Link>
          
          {/* Navegação Desktop */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};