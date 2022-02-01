import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './errors.styles';

const ErrorFallback = ({error, resetErrorBoundary}) => {
  return <ErrorImageOverlay role='alert'>
      <ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png" />
        <pre>{error.message}</pre>
        <ErrorImageText>Sorry, you seem to be lost!</ErrorImageText>
        <button onClick={resetErrorBoundary}>Try Again</button>
  </ErrorImageOverlay>;
};

export default ErrorFallback;
