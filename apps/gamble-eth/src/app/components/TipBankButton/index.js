import { Button } from '@chakra-ui/react';
import { utils } from 'ethers';
import { useSendTransaction } from '@usedapp/core';

const TipBankButton = () => {
  const { sendTransaction } = useSendTransaction();

  return (
    <Button
      onClick={() =>
        sendTransaction({
          to: process.env.NX_GAME_BANK_ACCOUNT_ADDRESS,
          value: utils.parseEther('0.01'),
        })
      }
    >
      tip bank 0.01eth
    </Button>
  );
};

export default TipBankButton;
