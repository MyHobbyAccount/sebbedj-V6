import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error }) => {
  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-bold text-red-600 mb-2">Något gick fel</h2>
      <p className="text-gray-600">{error.message}</p>
    </div>
  );
};

export const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};