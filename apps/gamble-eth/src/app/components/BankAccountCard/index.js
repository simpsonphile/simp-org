import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  VStack,
} from '@chakra-ui/react';
import Skeleton from './Skeleton';
import ShortAddress from '../ShortAddress';
import useBankBalance from '../../hooks/bankBalance';
import useJackpotBalance from '../../hooks/jackpotBalance';
import TipModal from '../TipModal';
import { useState } from 'react';
import Amount from '../Amount';

const BankAccountCard = () => {
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);
  const { value: balance } = useBankBalance();
  const { value: jackpotBalance } = useJackpotBalance();

  const address = process.env.NX_GAME_BANK_ACCOUNT_ADDRESS;
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Bank account</Heading>
      </CardHeader>

      <CardBody>
        <VStack alignItems="flex-start">
          <div>
            <Heading size="sm">address:</Heading>
            <ShortAddress>{address}</ShortAddress>
          </div>
          <div>
            <Heading size="sm">main balance:</Heading>
            <Amount amount={balance} />
          </div>
          <div>
            <Heading size="sm">jackpot:</Heading>
            <Amount amount={jackpotBalance} />
          </div>
        </VStack>
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
