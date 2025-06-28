import type { ApiEndpoint } from '../../../lib/types';

export const EndpointCard = ({ method, path, description }: ApiEndpoint) => {
  const methodColor = {
    GET: 'bg-green-100 text-green-800',
    POST: 'bg-blue-100 text-blue-800',
    PUT: 'bg-yellow-100 text-yellow-800',
    DELETE: 'bg-red-100 text-red-800',
    PATCH: 'bg-purple-100 text-purple-800',
  }[method];

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-start">
        <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${methodColor}`}>
          {method}
        </span>
        <span className="ml-4 font-mono text-gray-800 break-all">{path}</span>
      </div>
      <p className="mt-1 ml-12 text-gray-600 text-sm">{description}</p>
    </div>
  );
};