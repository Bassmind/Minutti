import React from 'react'
import { useState, useEffect } from 'react'
import {allData, addPropertyAndUpdate, deleteProperty } from '../js/firebase'
import Nav from './Nav';

function AnadirAtributos() {
  const [atributos, setAtributos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await allData();
      setAtributos(data);
    };

    getData();
  }, [])

  const actualizarProperties = async(e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Precio:', precio);
    
    const data = await addPropertyAndUpdate(nombre, precio);

    setAtributos(data);
    setNombre('');
    setPrecio('');
  }

  const eliminarAtributo = async (id) => {
    if (!window.confirm("¿Eliminar esta propiedad?")) return;

    const data = await deleteProperty(id);
    setAtributos(data);
  };

  return (
    <div className="app-shell">
      <Nav />
      <div className='card'>
        <h2>En esta página puedes añadir nuevos atributos para los productos.</h2>
        <h4>Atributos existentes y su precio:</h4>
        <ul className="menu-card">
          {atributos.map((atributo) => (
            <li key={atributo.id} className="atributo-item">
              {atributo.property}: {atributo.precio}
              <button
                className="delete-button"
                onClick={() => eliminarAtributo(atributo.id)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='card'>
        <form onSubmit={actualizarProperties}>
          <h4>Añadir atributo:</h4>
          <div className="menu-card">
            <input type="text" placeholder='Nombre del atributo' id="atributo-input" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
            <input type="number" placeholder='Precio del atributo' id="precio-input" value={precio} onChange={(e) => setPrecio(e.target.value)} required/>
            <button type="submit">Añadir</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AnadirAtributos;