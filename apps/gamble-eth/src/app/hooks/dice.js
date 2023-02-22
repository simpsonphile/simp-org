import useContract from './contract';
import { utils } from 'ethers';
import { BigNumber } from 'ethers';
import useToast from './toast';
import { useEffect } from 'react';
import { convertToReadableGameStatus } from '../services/convertToReadableGameStatus';

const useDice = ({ onSuccess, onError } = {}) => {
  const { state, send, resetState, events } = useContract('rollDice');
  const { status } = state || {};
  const toast = useToast();

  const isLoading = [
    'PendingSignature',
    'Mining',
    'CollectingSignaturePool',
  ].includes(status);

  useEffect(() => {
    if (events && events?.length) {
      const event = events[0];
      const status = event.args.status;
      const readableStatus = convertToReadableGameStatus(status);
      if (readableStatus === 'WIN') {
        toast({
          status: 'success',
          title: 'You won',
          description: `Successfully won ${utils.formatEther(
            events[0].args.amount
          )} ETH`,
        });
      } else {
        toast({
          status: 'error',
          title: 'You lost',
          description: `Lost ${utils.formatEther(events[0].args.amount)} ETH`,
        });
      }
    }
  }, [events]);

  useEffect(() => {
    resetState();
  }, []);

  useEffect(() => {
    if (status === 'Success') onSuccess?.();
    if (['Fail', 'Exception'].includes(status)) onError?.();
  }, [status]);

  return {
    isLoading,
    send: (value, multiplier) => {
      send(utils.parseEther(String(value)), BigNumber.from(multiplier));
    },
  };
};

export default useDice;
