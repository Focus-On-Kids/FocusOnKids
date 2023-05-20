// ? react, dependencias
import { HashRouter, Route, Routes } from 'react-router-dom';
// ? componentes
import Home from './pages/Home';
import Belen from './pages/Belen';
import AcercaDe from './pages/AcercaDe';
// ? estilos
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca de" element={<AcercaDe />} />
        <Route path="/belen" element={<Belen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
