import useBalance from '../../hooks/balance';
import { formatEther } from '@ethersproject/units';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';
const AccountBalance = () => {
  const { value: balance } = useBalance();

  return (
    <Stat>
      <StatLabel>balance</StatLabel>
      <StatNumber>{balance ? formatEther(balance) : 0} ETH</StatNumber>
    </Stat>
  );
};

export default AccountBalance;
