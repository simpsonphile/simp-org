import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import useWithdraw from '../../hooks/withdraw';
import { useState } from 'react';
import useBalance from '../../hooks/balance';
import { formatEther } from '@ethersproject/units';
import ETHInput from '../ETHInput';

const ClaimWithdrawModal = ({ isOpen, onClose }) => {
  const toast = useToast();
  const [value, setValue] = useState('');
  const { send: claimWithdraw, isLoading } = useWithdraw({
    onSuccess: onClose,
    onError: toast({
      status: 'error',
      position: 'top-right',
      title: 'Error while withdraw',
    }),
  });
  const { value: balance } = useBalance();

  console.log(value);

  const onWithdraw = () => {
    claimWithdraw(value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Withdraw</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>your current balance is {formatEther(balance)} ETH</p>
          <p>minimum withdraw is 0.01 ETH</p>
          <ETHInput
            value={value}
            disabled={isLoading}
            onChange={({ value }) => {
              setValue(value);
            }}
          />
          {/* <Button onClick={setValueToBalance}>Max</Button> */}
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            disabled={isLoading}
            leftIcon={isLoading && <Spinner />}
            colorScheme="blue"
            onClick={onWithdraw}
          >
            Withdraw
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ClaimWithdrawModal;
