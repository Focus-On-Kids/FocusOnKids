import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Belen from './pages/Belen';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/belen" element={ <Belen/> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
