import LayoutDefault from '../../layouts/Default';
import { VStack } from '@chakra-ui/react';
import Plinko from '../../components/Plinko';
import PlinkoEventsTabs from '../../components/PlinkoEventsTabs';

const PlinkoGamePage = () => {
  return (
    <LayoutDefault>
      <VStack spacing="6" alignItems="stretch">
        <Plinko />
        <PlinkoEventsTabs />
      </VStack>
    </LayoutDefault>
  );
};

export default PlinkoGamePage;
