import { useEthers } from '@usedapp/core';
import { Button } from '@chakra-ui/react';
const ConnectButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  // 'account' being undefined means that we are not connected.
  if (account) return <Button onClick={() => deactivate()}>Disconnect</Button>;
  else return <Button onClick={() => activateBrowserWallet()}>Connect</Button>;
};

export default ConnectButton;
