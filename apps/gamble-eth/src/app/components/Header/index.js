import { Heading, Flex, Button, HStack } from '@chakra-ui/react';
import AccountMenu from '../AccountMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Flex justifyContent="space-between" py="4">
      <Heading as={Link} to="/">
        Gamble Eth
      </Heading>

      <HStack>
        <Button colorScheme="blue" as={Link} to="/games">
          Play
        </Button>
        <AccountMenu />
      </HStack>
    </Flex>
  );
};

export default Header;
