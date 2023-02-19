import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Portal,
  Button,
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';
import ConnectButton from '../ConnectButton';
import { useEthers } from '@usedapp/core';

const AccountMenu = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();

  return account ? (
    <Menu>
      <MenuButton as={Button} rightIcon={<TriangleDownIcon />}>
        {account ? 'Connected' : 'Disconected'}
      </MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuDivider />
          {account ? (
            <MenuItem onClick={deactivate}>Disconnect</MenuItem>
          ) : (
            <MenuItem onClick={activateBrowserWallet}>Connect</MenuItem>
          )}
        </MenuList>
      </Portal>
    </Menu>
  ) : (
    <ConnectButton />
  );
};

export default AccountMenu;
