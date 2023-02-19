import { useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from '@chakra-ui/react';
import Skeleton from './Skeleton';
import TipBankButton from '../TipBankButton';
import ShortAddress from '../ShortAddress';
const BankAccountCard = () => {
  const ethBankBalance = useEtherBalance(
    process.env.NX_GAME_BANK_ACCOUNT_ADDRESS
  );

  const address = process.env.NX_GAME_BANK_ACCOUNT_ADDRESS;
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Bank account</Heading>
      </CardHeader>
      <CardBody>
        <Heading size="sm">address:</Heading>

        <ShortAddress>{address}</ShortAddress>

        <Heading size="sm">balance:</Heading>

        <p className="bold">{formatEther(ethBankBalance)} ETH</p>
      </CardBody>

      <CardFooter>
        <TipBankButton />
      </CardFooter>
    </Card>
  );
};

BankAccountCard.Skeleton = Skeleton;

export default BankAccountCard;
