import { Button } from '@chakra-ui/react';
import Game from '@simp-org/plinko-game';
import { useEffect, useRef, useState } from 'react';
import Bet from '../Bet';

const Plinko = () => {
  const ref = useRef(null);
  const isInit = useRef(false);
  const [game, setGame] = useState({});
  const [value, setValue] = useState('');

  useEffect(() => {
    if (ref.current && !isInit.current) {
      isInit.current = true;
      const game = new Game({ element: ref.current, width: 800, height: 400 });
      setGame(game);
    }
  }, [ref]);

  return (
    <div>
      <canvas ref={ref} />
      <Bet value={value} setValue={setValue} />
      {isInit.current && (
        <Button colorScheme="blue" width="100%" onClick={game.play.bind(game)}>
          Play
        </Button>
      )}
    </div>
  );
};

export default Plinko;
