import LayoutDefault from '../../layouts/Default';
import { HStack } from '@chakra-ui/react';
import GameCard from '../../components/GameCard';

const GamesPage = () => {
  return (
    <LayoutDefault>
      <HStack spacing="6" alignItems="stretch">
        <GameCard
          title="Plinko"
          description="This sofa is perfect for modern tropical spaces."
          url="/games/plinko"
        />
        <GameCard
          title="Dice"
          description="This sofa is perfect for modern tropical spaces."
          url="/games/dice"
        />
      </HStack>
    </LayoutDefault>
  );
};

export default GamesPage;
