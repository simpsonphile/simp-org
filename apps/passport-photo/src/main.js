import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import PassportPhotoContextProvider from './app/contexts/PassportPhotoContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <PassportPhotoContextProvider>
      <App />
    </PassportPhotoContextProvider>
  </StrictMode>
);
