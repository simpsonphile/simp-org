import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
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
} from '@chakra-ui/react';
import useDeposit from '../../hooks/deposit';
import useBalance from '../../hooks/balance';
import Skeleton from './Skeleton';
const AccountCard = () => {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const { account } = useEthers();
  const { deposit } = useDeposit();
  const { value: balance } = useBalance();

  const ethBalance = useEtherBalance(account);

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Your account</Heading>
      </CardHeader>
      <CardBody>
        <Heading size="sm">address:</Heading>
        <ShortAddress>{account}</ShortAddress>

        <Heading size="sm">wallet balance:</Heading>
        <p className="bold">{formatEther(ethBalance)} ETH</p>

        <Heading size="sm">balance:</Heading>
        <p className="bold">{formatEther(balance)} ETH</p>
      </CardBody>

      <CardFooter>
        <Button mr="3" onClick={() => setShowWithdrawModal(true)}>
          withdraw
        </Button>
        <Button onClick={() => deposit('1')}>deposit</Button>
      </CardFooter>

      {showWithdrawModal && (
        <ClaimWithdrawModal
          isOpen={showWithdrawModal}
          onClose={() => setShowWithdrawModal(false)}
        />
      )}
    </Card>
  );
};

AccountCard.Skeleton = Skeleton;

export default AccountCard;
