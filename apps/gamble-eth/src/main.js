import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

import { DAppProvider, Sepolia } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

const config = {
  readOnlyChainId: getDefaultProvider('sepolia'),
  readOnlyUrls: {
    [Sepolia.chainId]: getDefaultProvider('sepolia'),
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <DAppProvider config={config}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DAppProvider>
  </StrictMode>
);
