import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'
import AnadirAtributos from './components/AnadirAtributos';
import Home from './components/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/añadir-atributos" element={<AnadirAtributos />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
