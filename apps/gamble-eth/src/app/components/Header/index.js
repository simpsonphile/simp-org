import { Heading, Flex, Button } from '@chakra-ui/react';
import AccountMenu from '../AccountMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Flex justifyContent="space-between" py="4">
      <Heading as={Link} to="/">
        Gamble Eth
      </Heading>

      <div>
        <Button colorScheme="blue" mr="4" as={Link} to="/games">
          Play
        </Button>
        <AccountMenu />
      </div>
    </Flex>
  );
};

export default Header;
