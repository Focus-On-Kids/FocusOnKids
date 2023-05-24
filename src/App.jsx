import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Belen from './pages/Belen';
import AcercaDe from './pages/AcercaDe';
import Supervisiones from './pages/Supervisiones';
import Formaciones from './pages/Formaciones';

import './App.css';
import Evaluaciones from './pages/Evaluaciones';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/belen" element={<Belen />} />
        <Route path="/servicios/evaluaciones" element={<Evaluaciones />} />
        <Route path="/servicios/supervisiones" element={<Supervisiones />} />
        <Route path="/servicios/formaciones" element={<Formaciones />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
