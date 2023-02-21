import { contract } from './contract';
import { useCall } from '@usedapp/core';

const useJackpotBalance = () => {
  const balance = useCall({ contract, method: 'getJackpot', args: [] });

  return {
    value: balance && Array.isArray(balance.value) ? balance.value[0] : 0,
  };
};

export default useJackpotBalance;
