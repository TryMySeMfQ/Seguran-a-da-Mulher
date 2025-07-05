'use client';

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 p-8">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Ocorreu um erro</h2>
        <p className="text-gray-700 mb-6">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
};