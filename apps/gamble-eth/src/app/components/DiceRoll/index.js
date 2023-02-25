import {
  HStack,
  VStack,
  Button,
  Tooltip,
  Spinner,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { useState } from 'react';
import useDice from '../../hooks/dice';
import Bet from '../Bet';

const DiceRoll = () => {
  const { send, isLoading } = useDice();
  const [value, setValue] = useState('');
  const [currentMultiplier, setCurrentMultiplier] = useState(2);
  const multipliers = [1000, 100, 50, 25, 10, 5, 3, 2];

  return (
    <Card>
      <CardHeader>
        <Heading size="lg">DiceRoll Game</Heading>
      </CardHeader>
      <CardBody>
        <VStack gap="5">
          <Heading size="md">Multipliers</Heading>
          <HStack justify="center">
            {multipliers.map((multiplier) => (
              <Tooltip
                key={multiplier}
                label={`${100 / multiplier} % change to win`}
              >
                <Button
                  variant={
                    currentMultiplier === multiplier ? 'solid' : 'outline'
                  }
                  onClick={() => setCurrentMultiplier(multiplier)}
                >
                  x{multiplier}
                </Button>
              </Tooltip>
            ))}
          </HStack>

          <Heading size="md">Bet:</Heading>
          <Bet value={value} setValue={setValue} />
        </VStack>
      </CardBody>

      <CardFooter>
        <Button
          colorScheme="blue"
          leftIcon={isLoading && <Spinner />}
          disabled={isLoading}
          width="100%"
          onClick={() => send(value, currentMultiplier)}
        >
          Roll!
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiceRoll;
