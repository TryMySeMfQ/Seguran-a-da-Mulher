import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  className = '' 
}: FeatureCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition ${className}`}>
      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}