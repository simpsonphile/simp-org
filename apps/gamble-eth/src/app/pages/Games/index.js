import LayoutDefault from '../../layouts/Default';
import SlotMachine from '../../components/SlotMachine';

const GamesPage = () => {
  return (
    <LayoutDefault>
      <SlotMachine isTurnedOn={true} />
    </LayoutDefault>
  );
};

export default GamesPage;
