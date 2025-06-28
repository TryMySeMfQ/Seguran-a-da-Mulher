// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração do Turbopack (Next.js 15+)
  turbopack: {
    // Opções específicas do Turbopack podem ser adicionadas aqui
  },
  
  // Configuração do Webpack (para compatibilidade)
  webpack: (config) => {
    // Regra para assets estáticos
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|ico|woff|woff2|eot|ttf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    // Regra específica para CSS (opcional)
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    });

    return config;
  },
  
  // Outras configurações globais
  images: {
    domains: ['images.unsplash.com'], // Domínios permitidos para otimização de imagem
  },
  
  // Configurações de compilação
  compiler: {
    styledComponents: true, // Se usar styled-components
  }
};

export default nextConfig;
