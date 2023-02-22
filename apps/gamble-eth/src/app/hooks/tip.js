import { utils } from 'ethers';
import { useSendTransaction } from '@usedapp/core';
import { useEffect } from 'react';
import useToast from './toast';

const useTip = ({ onSuccess, onError }) => {
  const toast = useToast();
  const { sendTransaction, state, resetState } = useSendTransaction();
  const { status } = state || {};

  const isLoading = [
    'PendingSignature',
    'Mining',
    'CollectingSignaturePool',
  ].includes(status);

  useEffect(() => {
    if (status === 'Success') {
      toast({
        status: 'Success',
        title: 'Successfully tipped bank',
      });
    }
  }, [status]);

  useEffect(() => {
    resetState();
  }, []);

  useEffect(() => {
    if (status === 'Success') onSuccess?.();
    if (['Fail', 'Exception'].includes(status)) onError?.();
  }, [status]);

  return {
    isLoading,
    send: (value) =>
      sendTransaction({
        to: process.env.NX_GAME_BANK_ACCOUNT_ADDRESS,
        value: utils.parseEther(value),
      }),
  };
};

export default useTip;
