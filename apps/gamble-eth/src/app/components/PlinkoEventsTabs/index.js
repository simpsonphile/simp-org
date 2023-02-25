import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
  CardBody,
} from '@chakra-ui/react';
import PlinkoEvents from '../PlinkoEvents';
import { useEthers } from '@usedapp/core';

const PlinkoEventsTabs = () => {
  const { account } = useEthers();

  return (
    <Card>
      <CardBody>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Your games</Tab>
            <Tab>All games</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PlinkoEvents
                filterFunction={(logs) =>
                  logs.filter((log) => log?.data?.player === account)
                }
              />
            </TabPanel>
            <TabPanel>
              <PlinkoEvents />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default PlinkoEventsTabs;
