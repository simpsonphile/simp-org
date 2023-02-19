import { useConfig, useEtherBalance, useEthers } from '@usedapp/core';
import {
  Container,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
  CardBody,
} from '@chakra-ui/react';
import Header from './components/Header';
import AccountCard from './components/AccountCard';
import BankAccountCard from './components/BankAccountCard';
import SlotMachine from './components/SlotMachine';
import Transactions from './components/Transactions';
const App = () => {
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
    <Container>
      <Header />

      <VStack spacing="6" alignItems="stretch">
        {ethBankBalance ? <BankAccountCard /> : <BankAccountCard.Skeleton />}
        {ethBalance ? <AccountCard /> : <AccountCard.Skeleton />}
        <SlotMachine isTurnedOn={true} />
        {ethBalance && (
          <Card>
            <CardBody>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Deposit</Tab>
                  <Tab>Withdrawal</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Transactions event="Deposit" />
                  </TabPanel>
                  <TabPanel>
                    <Transactions event="Withdrawal" />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </CardBody>
          </Card>
        )}
      </VStack>
    </Container>
  );
};

App.displayName = 'App';

export default App;
