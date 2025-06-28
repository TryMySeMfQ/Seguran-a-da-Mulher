import FeatureCard from '../../ui/Card/FeatureCard';
import type { Feature } from '../../../lib/types';

type FeaturesGridProps = {
  features: Feature[];
};

export const FeaturesGrid = ({ features }: FeaturesGridProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};