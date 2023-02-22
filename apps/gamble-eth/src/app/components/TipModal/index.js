import useTip from '../../hooks/tip';
import { formatEther } from '@ethersproject/units';
import TransferModal from '../TransferModal';
import { useEtherBalance, useEthers } from '@usedapp/core';

const TipModal = ({ isOpen, onClose }) => {
  const { account } = useEthers();
  const balance = useEtherBalance(account);

  return (
    <TransferModal
      isOpen={isOpen}
      hook={useTip}
      min="0.01"
      max={formatEther(balance)}
      title="Tip Bank"
      buttonText="tip"
      errorToastTitle="error while tipping bank"
      onClose={onClose}
    />
  );
};

export default TipModal;
