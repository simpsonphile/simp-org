import { Heading, Flex, Button } from '@chakra-ui/react';
import AccountMenu from '../AccountMenu';

const Header = () => (
  <Flex justifyContent="space-between" py="4">
    <Heading>Gamble Eth</Heading>

    <div>
      <Button mr="4">Play</Button>
      <AccountMenu />
    </div>
  </Flex>
);

export default Header;
