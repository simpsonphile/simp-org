import LayoutDefault from '../../layouts/Default';
import DiceRoll from '../../components/DiceRoll';
import DiceRollEventsTabs from '../../components/DiceRollEventsTabs';
import { VStack } from '@chakra-ui/react';
const GamesPage = () => {
  return (
    <LayoutDefault>
      <VStack spacing="6" alignItems="stretch">
        <DiceRoll />
        <DiceRollEventsTabs />
      </VStack>
    </LayoutDefault>
  );
};

export default GamesPage;
