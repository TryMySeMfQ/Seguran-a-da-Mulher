import { EndpointCard } from '@/app/components/ui/Card/EndpointCard';
import type { ApiEndpoint } from '../../../lib/types';

type ApiEndpointsProps = {
  endpoints: ApiEndpoint[];
};

export const ApiEndpoints = ({ endpoints }: ApiEndpointsProps) => {
  return (
    <>
      {endpoints.map((endpoint, index) => (
        <EndpointCard
          key={index}
          method={endpoint.method}
          path={endpoint.path}
          description={endpoint.description}
        />
      ))}
    </>
  );
};