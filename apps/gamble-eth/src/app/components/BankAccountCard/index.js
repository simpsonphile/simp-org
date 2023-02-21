import { useSendTransaction } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
} from '@chakra-ui/react';
import Skeleton from './Skeleton';
import ShortAddress from '../ShortAddress';
import useBankBalance from '../../hooks/bankBalance';
import { utils } from 'ethers';
import useJackpotBalance from '../../hooks/jackpotBalance';
const BankAccountCard = () => {
  const { value: balance } = useBankBalance();
  const { value: jackpotbalance } = useJackpotBalance();

  const { sendTransaction } = useSendTransaction();

  const address = process.env.NX_GAME_BANK_ACCOUNT_ADDRESS;
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Bank account</Heading>
      </CardHeader>
      <CardBody>
        <Heading size="sm">address:</Heading>
        <ShortAddress>{address}</ShortAddress>

        <Heading size="sm">main balance:</Heading>
        <p className="bold">{formatEther(balance)} ETH</p>

        <Heading size="sm">jackpot:</Heading>
        <p className="bold">{formatEther(jackpotbalance)} ETH</p>
      </CardBody>
      <CardFooter>
        <Button
          onClick={() =>
            sendTransaction({
              to: process.env.NX_GAME_BANK_ACCOUNT_ADDRESS,
              value: utils.parseEther('0.1'),
            })
          }
        >
          Tip 0.1 ETH
        </Button>
      </CardFooter>
    </Card>
  );
};

BankAccountCard.Skeleton = Skeleton;

export default BankAccountCard;
