import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/App';
import TimelapseContextProvider from './app/contexts/TimelapseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <TimelapseContextProvider>
      <App />
    </TimelapseContextProvider>
  </StrictMode>
);
