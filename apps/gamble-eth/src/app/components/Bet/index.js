import { HStack, Button } from '@chakra-ui/react';
import ETHInput from '../ETHInput';
import useBalance from '../../hooks/balance';
import { formatEther } from '@ethersproject/units';

const Bet = ({ value, setValue }) => {
  const { value: balance } = useBalance();

  const multiplyCurrentValue = [
    { label: 'min', modify: () => 0.01 },
    { label: 'x1/2', modify: (val) => val * 0.5 },
    { label: '2', modify: (val) => val * 2 },
    { label: 'max', modify: () => formatEther(balance) }, //todo compute so max is not higher than possible win (so bank dont have negative balance)
  ];

  return (
    <HStack justify="center">
      <ETHInput value={value} onChange={({ value }) => setValue(value)} />

      {multiplyCurrentValue.map((el) => (
        <Button key={el.label} onClick={() => setValue(el.modify)}>
          {el.label}
        </Button>
      ))}
    </HStack>
  );
};

export default Bet;
