import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Belen from './pages/Belen';
import AcercaDe from './pages/AcercaDe';
import Supervisiones from './pages/Supervisiones';
import Formaciones from './pages/Formaciones';
import Evaluaciones from './pages/Evaluaciones';
import Tratamientos from './pages/Tratamientos';
import Coaching from './pages/Coaching';
import Novedades from './pages/Novedades';
import Contacto from './pages/Contacto';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/belen" element={<Belen />} />
        <Route path="/servicios/evaluaciones" element={<Evaluaciones />} />
        <Route path="/servicios/intensivos" element={<Tratamientos />} />
        <Route path="/servicios/coaching" element={<Coaching />} />
        <Route path="/servicios/supervisiones" element={<Supervisiones />} />
        <Route path="/servicios/formaciones" element={<Formaciones />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
