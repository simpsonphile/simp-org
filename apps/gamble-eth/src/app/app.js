import { Routes, Route, BrowserRouter } from 'react-router-dom';
import OverviewPage from './pages/Overview';
import GamesPage from './pages/Games';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OverviewPage />} exact />
        <Route path="/games" element={<GamesPage />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
