import { Card, Button, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import Slot from 'react-slot-machine';
import styles from './index.module.scss';

const SlotMachine = () => {
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  const [times, setTimes] = useState(0);
  const symbols = [1, 2, 3, 4];
  const symbolEls = symbols.map((symbol) => (
    <div key={symbol} style={{ width: '100%', height: '100%' }}>
      {symbol}
    </div>
  ));

  return (
    <Card>
      <HStack gap={4} justifyContent="stretch" className={styles.SlotMachine}>
        <Slot
          target={1}
          duration={2000}
          times={isTurnedOn ? times : 0}
          onEnd={console.log}
        >
          {symbolEls}
        </Slot>
        <Slot
          target={2}
          duration={2000}
          times={isTurnedOn ? times : 0}
          onEnd={console.log}
        >
          {symbolEls}
        </Slot>
        <Slot
          target={3}
          duration={2000}
          times={isTurnedOn ? times : 0}
          onEnd={console.log}
        >
          {symbolEls}
        </Slot>
      </HStack>
      <Button
        onClick={() => {
          if (!isTurnedOn) setTimes((prev) => prev + 1);
          setIsTurnedOn((prev) => !prev);
        }}
      >
        {isTurnedOn ? 'Stop' : 'Play'}
      </Button>
    </Card>
  );
};

export default SlotMachine;
