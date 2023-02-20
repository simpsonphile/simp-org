import { useEtherBalance, useEthers, useConfig } from '@usedapp/core';
import { HStack, VStack } from '@chakra-ui/react';
import AccountCard from '../../components/AccountCard';
import BankAccountCard from '../../components/BankAccountCard';
import LayoutDefault from '../../layouts/Default';
import TransactionTabs from '../../components/TransactionTabs';

const OverviewPage = () => {
  const config = useConfig();
  const { account, chainId } = useEthers();
  const ethBalance = useEtherBalance(account);
  const ethBankBalance = useEtherBalance(
    process.env.NX_GAME_BANK_ACCOUNT_ADDRESS
  );

  if (chainId && !config.readOnlyUrls[chainId]) {
    return '';
  }

  return (
    <LayoutDefault>
      <VStack spacing="6" alignItems="stretch">
        <HStack alignItems="stretch">
          {ethBankBalance ? <BankAccountCard /> : <BankAccountCard.Skeleton />}
          {ethBalance ? <AccountCard /> : <AccountCard.Skeleton />}
        </HStack>
        {ethBalance && <TransactionTabs />}
      </VStack>
    </LayoutDefault>
  );
};

export default OverviewPage;
