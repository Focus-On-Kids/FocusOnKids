// ? react, dependencias
import { HashRouter, Route, Routes } from 'react-router-dom';
// ? componentes
import Home from './pages/Home';
import Belen from './pages/Belen';
import AcercaDe from './pages/AcercaDe';
// ? estilos
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
      </Routes>
    </HashRouter>
  );
}

export default App;
