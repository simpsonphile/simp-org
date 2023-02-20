import LayoutDefault from '../../layouts/Default';
import DiceRoll from '../../components/DiceRoll';
import DiceRollEvents from '../../components/DiceRollEvents';
import { useEthers } from '@usedapp/core';

const GamesPage = () => {
  const { account } = useEthers();
  return (
    <LayoutDefault>
      <DiceRoll />
      <DiceRollEvents
        filterFunction={(logs) =>
          logs.filter((log) => log?.data?.player === account)
        }
      />
    </LayoutDefault>
  );
};

export default GamesPage;
