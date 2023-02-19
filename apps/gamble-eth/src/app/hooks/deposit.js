import { contract } from './contract';
import { useContractFunction } from '@usedapp/core';
import { utils } from 'ethers';

const useDeposit = () => {
  const { send } = useContractFunction(contract, 'deposit');

  return {
    // state,
    deposit: (value) => send({ value: utils.parseEther(value) }),
  };
};

export default useDeposit;
