import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AnadirAtributos from './components/AnadirAtributos';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/añadir-atributos" element={<AnadirAtributos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
