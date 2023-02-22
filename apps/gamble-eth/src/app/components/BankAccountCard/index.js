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
import useJackpotBalance from '../../hooks/jackpotBalance';
import TipModal from '../TipModal';
import { useState } from 'react';

const BankAccountCard = () => {
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);
  const { value: balance } = useBankBalance();
  const { value: jackpotbalance } = useJackpotBalance();

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
        <Button onClick={() => setIsTipModalOpen(true)}>Tip</Button>
      </CardFooter>

      {isTipModalOpen && (
        <TipModal
          isOpen={isTipModalOpen}
          onClose={() => setIsTipModalOpen(false)}
        />
      )}
    </Card>
  );
};

BankAccountCard.Skeleton = Skeleton;

export default BankAccountCard;
