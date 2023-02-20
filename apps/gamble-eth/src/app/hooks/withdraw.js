import useContract from './contract';
import { utils } from 'ethers';
import { useEffect } from 'react';
import useToast from './toast';

const useWithdraw = ({ onSuccess, onError } = {}) => {
  const toast = useToast();
  const { state, send, resetState, events } = useContract('withdraw', {
    transactionName: 'wrap',
  });

  const { status } = state || {};

  const isLoading = [
    'PendingSignature',
    'Mining',
    'CollectingSignaturePool',
  ].includes(status);

  useEffect(() => {
    resetState();
  }, []);

  useEffect(() => {
    if (events && events?.length) {
      toast({
        status: 'success',
        title: 'Withdraw success',
        description: `Successfully withdraw ${utils.formatEther(
          events[0].args[1]
        )} ETH`,
      });
    }
  }, [events]);

  useEffect(() => {
    if (status === 'Success') onSuccess?.();
    if (['Fail', 'Exception'].includes(status)) onError?.();
  }, [status]);

  return {
    isLoading,
    send: (val) => {
      console.log(utils.parseEther(val));
      send(utils.parseEther(val));
    },
  };
};

export default useWithdraw;
