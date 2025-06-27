'use client';

import { useEffect, useState } from 'react';
import { ApiResponse } from '@/types/apiTypes';
import useApiData from '@/hooks/useApiData';
import { motion } from 'framer-motion';

interface DataSectionProps {
  endpoint: string;
  title: string;
  description: string;
  reverseLayout?: boolean;
}

const DataSection = ({ endpoint, title, description, reverseLayout = false }: DataSectionProps) => {
  const { data, loading, error } = useApiData(endpoint);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className={`py-20 ${reverseLayout ? 'bg-white' : 'bg-gray-50'}`} id={endpoint.replace('/api/', '')}>
      <div className={`container mx-auto px-4 flex flex-col ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
        <div className="md:w-1/2">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
        
        <div className="md:w-1/2 w-full">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 p-4 rounded-lg text-red-700">
              Erro ao carregar dados: {error.message}
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {data?.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title || item.name || `Item ${index + 1}`}</h3>
                  </div>
                  <p className="text-gray-600">{item.description || item.value || 'Informação disponível'}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DataSection;