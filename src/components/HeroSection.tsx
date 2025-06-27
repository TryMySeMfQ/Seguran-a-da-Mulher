'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            Transforme dados em <span className="text-blue-600">insights</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nossa plataforma oferece a solução completa para análise e visualização de dados em tempo real, ajudando você a tomar decisões mais inteligentes.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="#route1" 
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explorar Dados
            </Link>
            <Link 
              href="#features" 
              className="px-8 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 shadow hover:shadow-md"
            >
              Conhecer Recursos
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 md:mt-24 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-full max-w-4xl h-64 md:h-96 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
              <div className="grid grid-cols-3 gap-4 p-6 w-full">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i}
                    className="h-16 bg-blue-100 rounded-lg animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;