import { contract } from './contract';
import { useCall, useEthers } from '@usedapp/core';
const useBalance = () => {
  const { account } = useEthers();
  const balance = useCall({ contract, method: 'balanceOf', args: [account] });

  return {
    value: balance && Array.isArray(balance.value) ? balance.value[0] : 0,
  };
};

export default useBalance;
