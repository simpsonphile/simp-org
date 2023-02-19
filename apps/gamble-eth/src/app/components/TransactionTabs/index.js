import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
  CardBody,
} from '@chakra-ui/react';
import Transactions from '../../components/Transactions';
import { useEthers } from '@usedapp/core';

const TransactionTabs = () => {
  const { account } = useEthers();

  return (
    <Card>
      <CardBody>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Deposit</Tab>
            <Tab>Withdrawal</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Transactions
                event="Deposit"
                filterFunction={(logs) =>
                  logs.filter((log) => log?.data?.depositor === account)
                }
              />
            </TabPanel>
            <TabPanel>
              <Transactions
                event="Withdrawal"
                filterFunction={(logs) =>
                  logs.filter((log) => log?.data?.withdrawer === account)
                }
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default TransactionTabs;
