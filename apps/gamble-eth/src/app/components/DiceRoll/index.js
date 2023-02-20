import {
  HStack,
  VStack,
  Button,
  Tooltip,
  Spinner,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import ETHInput from '../ETHInput';
import useBalance from '../../hooks/balance';
import { formatEther } from '@ethersproject/units';
import useDice from '../../hooks/dice';

const minBet = 0.01;

const DiceRoll = () => {
  const { send, isLoading } = useDice();
  const [value, setValue] = useState('');
  const [currentMultiplier, setCurrentMultiplier] = useState(2);
  const multipliers = [1000, 100, 50, 25, 10, 5, 3, 2];
  const { value: balance } = useBalance();
  const multiplyCurrentValue = [
    { label: 'min', modify: () => minBet },
    { label: 'x1/2', modify: (val) => val * 0.5 },
    { label: '2', modify: (val) => val * 2 },
    { label: 'max', modify: () => formatEther(balance) }, //todo compute so max is not higher than possible win (so bank dont have negative balance)
  ];

  return (
    <VStack>
      <Heading>Multipliers</Heading>
      <HStack justify="center">
        {multipliers.map((multiplier) => (
          <Tooltip
            key={multiplier}
            label={`${100 / multiplier} % change to win`}
          >
            <Button
              variant={currentMultiplier === multiplier ? 'solid' : 'outline'}
              onClick={() => setCurrentMultiplier(multiplier)}
            >
              x{multiplier}
            </Button>
          </Tooltip>
        ))}
      </HStack>

      <Heading>Bet:</Heading>
      <HStack justify="center">
        <ETHInput value={value} onChange={({ value }) => setValue(value)} />

        {multiplyCurrentValue.map((el) => (
          <Button key={el.label} onClick={() => setValue(el.modify)}>
            {el.label}
          </Button>
        ))}
      </HStack>

      <Heading>Posible win:</Heading>
      <Heading>{Number(value) * currentMultiplier}</Heading>

      <Button
        leftIcon={isLoading && <Spinner />}
        disabled={isLoading}
        width="100%"
        onClick={() => send(value, currentMultiplier)}
      >
        Roll!
      </Button>
    </VStack>
  );
};

export default DiceRoll;
