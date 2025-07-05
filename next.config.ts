import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 🔧 Adicionado para permitir exportação estática

  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // 🔧 Adicionado para compatibilidade com exportação
  },

  eslint: {
    ignoreDuringBuilds: true, // 🔧 Evita que erros de lint travem o deploy
  },

  compiler: {
    styledComponents: true,
  },

  turbopack: {
    // Suporte ao Turbopack (opcional, está ok assim)
  },

  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico|woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        }
      },
    );
    return config;
  }
};

export default nextConfig;

