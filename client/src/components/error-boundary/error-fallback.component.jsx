import React from 'react';

const ErrorFallback = ({error, resetErrorBoundary}) => {
  return <div role='alert'>
      <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try Again</button>
  </div>;
};

export default ErrorFallback;
