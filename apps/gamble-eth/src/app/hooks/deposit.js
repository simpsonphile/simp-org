import { utils } from 'ethers';
import useContract from './contract';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

const useDeposit = ({ onSuccess, onError } = {}) => {
  const toast = useToast();
  const { state, send, resetState, events } = useContract('deposit');

  const { status } = state || {};

  useEffect(() => {
    if (events && events?.length) {
      toast({
        position: 'top-right',
        status: 'success',
        title: 'Withdraw success',
        description: `Successfully deposited ${utils.formatEther(
          events[0].args[1]
        )} ETH`,
        duration: 5000,
      });
    }
  }, [events]);

  useEffect(() => {
    if (status === 'Success') onSuccess?.();
    if (['Fail', 'Exception'].includes(status)) onError?.();
  }, [status]);

  const isLoading = [
    'PendingSignature',
    'Mining',
    'CollectingSignaturePool',
  ].includes(status);

  useEffect(() => {
    resetState();
  }, []);

  return {
    isLoading,
    send: (value) => send({ value: utils.parseEther(value) }),
  };
};

export default useDeposit;
