import useDeposit from '../../hooks/deposit';
import { formatEther } from '@ethersproject/units';
import TransferModal from '../TransferModal';
import { useEtherBalance, useEthers } from '@usedapp/core';

const DepositModal = ({ isOpen, onClose }) => {
  const { account } = useEthers();
  const balance = useEtherBalance(account);

  return (
    <TransferModal
      isOpen={isOpen}
      hook={useDeposit}
      min="0.01"
      max={formatEther(balance)}
      title="Deposit"
      buttonText="deposit"
      errorToastTitle="error while depositing"
      onClose={onClose}
    />
  );
};

export default DepositModal;
