import { Routes, Route, BrowserRouter } from 'react-router-dom';
import OverviewPage from './pages/Overview';
import GamesPage from './pages/Games';
import PlinkoGamePage from './pages/Games/Plinko';
import DiceGamePage from './pages/Games/Dice';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OverviewPage />} exact />
        <Route path="/games" element={<GamesPage />} exact />
        <Route path="/games/plinko" element={<PlinkoGamePage />} exact />
        <Route path="/games/dice" element={<DiceGamePage />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
