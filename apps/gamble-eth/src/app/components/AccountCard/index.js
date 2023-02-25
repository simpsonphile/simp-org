import { useEtherBalance, useEthers } from '@usedapp/core';
import ClaimWithdrawModal from '../ClaimWithdrawModal';
import ShortAddress from '../ShortAddress';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  VStack,
} from '@chakra-ui/react';
import useBalance from '../../hooks/balance';
import Skeleton from './Skeleton';
import DepositModal from '../DepositModal';
import Amount from '../Amount';

const AccountCard = () => {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const { account } = useEthers();
  const { value: balance } = useBalance();

  const walletBalance = useEtherBalance(account);

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Your account</Heading>
      </CardHeader>
      <CardBody>
        <VStack alignItems="flex-start">
          <div>
            <Heading size="sm">address:</Heading>
            <ShortAddress>{account}</ShortAddress>
          </div>
          <div>
            <Heading size="sm">wallet balance:</Heading>
            <Amount amount={walletBalance} />
          </div>

          <div>
            <Heading size="sm">balance:</Heading>
            <Amount amount={balance} />
          </div>
        </VStack>
      </CardBody>

      <CardFooter>
        <Button mr="3" onClick={() => setShowWithdrawModal(true)}>
          withdraw
        </Button>
        <Button onClick={() => setShowDepositModal(true)}>deposit</Button>
      </CardFooter>

      {showWithdrawModal && (
        <ClaimWithdrawModal
          isOpen={showWithdrawModal}
          onClose={() => setShowWithdrawModal(false)}
        />
      )}
      {showDepositModal && (
        <DepositModal
          isOpen={showDepositModal}
          onClose={() => setShowDepositModal(false)}
        />
      )}
    </Card>
  );
};

AccountCard.Skeleton = Skeleton;

export default AccountCard;
