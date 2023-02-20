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
} from '@chakra-ui/react';
import { useState } from 'react';
import ETHInput from '../ETHInput';
import useToast from '../../hooks/toast';

const TransferModal = ({
  isOpen,
  onClose,
  hook,
  errorToastTitle,
  title,
  buttonText,
  max,
  min,
}) => {
  const toast = useToast();
  const [value, setValue] = useState('');
  const { send: claimWithdraw, isLoading } = hook({
    onSuccess: onClose,
    onError: () =>
      toast({
        status: 'error',
        position: 'top-right',
        title: errorToastTitle || 'error while transferring',
      }),
  });

  const onWithdraw = () => {
    claimWithdraw(value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title || 'Transfer'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {max && <p>max {max} ETH</p>}
          {min && <p>minimum {min} ETH</p>}
          <ETHInput
            value={value}
            disabled={isLoading}
            onChange={({ value }) => {
              setValue(value);
            }}
          />
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
            {buttonText || 'transfer'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TransferModal;
