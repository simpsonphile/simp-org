import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
  CardBody,
} from '@chakra-ui/react';
import DiceRollEvents from '../DiceRollEvents';
import { useEthers } from '@usedapp/core';

const DiceRollEventsTabs = () => {
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
              <DiceRollEvents
                filterFunction={(logs) =>
                  logs.filter((log) => log?.data?.player === account)
                }
              />
            </TabPanel>
            <TabPanel>
              <DiceRollEvents />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default DiceRollEventsTabs;
