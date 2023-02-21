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
import ETHInput from '../ETHInput';
import useBalance from '../../hooks/balance';
import { formatEther } from '@ethersproject/units';
import useDice from '../../hooks/dice';

const DiceRoll = () => {
  const { send, isLoading } = useDice();
  const [value, setValue] = useState('');
  const [currentMultiplier, setCurrentMultiplier] = useState(2);
  const multipliers = [1000, 100, 50, 25, 10, 5, 3, 2];
  const { value: balance } = useBalance();
  const multiplyCurrentValue = [
    { label: 'min', modify: () => 0.01 },
    { label: 'x1/2', modify: (val) => val * 0.5 },
    { label: '2', modify: (val) => val * 2 },
    { label: 'max', modify: () => formatEther(balance) }, //todo compute so max is not higher than possible win (so bank dont have negative balance)
  ];

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
          <HStack justify="center">
            <ETHInput value={value} onChange={({ value }) => setValue(value)} />

            {multiplyCurrentValue.map((el) => (
              <Button key={el.label} onClick={() => setValue(el.modify)}>
                {el.label}
              </Button>
            ))}
          </HStack>
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
