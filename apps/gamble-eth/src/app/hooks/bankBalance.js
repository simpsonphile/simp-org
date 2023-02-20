import { contract } from './contract';
import { useCall } from '@usedapp/core';
const useBankBalance = () => {
  const balance = useCall({ contract, method: 'getBankBalance', args: [] });

  return {
    value: balance && Array.isArray(balance.value) ? balance.value[0] : 0,
  };
};

export default useBankBalance;
