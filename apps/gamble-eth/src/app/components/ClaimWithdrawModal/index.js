import useWithdraw from '../../hooks/withdraw';
import useBalance from '../../hooks/balance';
import { formatEther } from '@ethersproject/units';
import TransferModal from '../TransferModal';

const ClaimWithdrawModal = ({ isOpen, onClose }) => {
  const { value: balance } = useBalance();

  return (
    <TransferModal
      isOpen={isOpen}
      hook={useWithdraw}
      min="0.01"
      max={formatEther(balance)}
      title="Withdraw"
      buttonText="withdraw"
      errorToastTitle="error while withdrawing"
      onClose={onClose}
    />
  );
};

export default ClaimWithdrawModal;
