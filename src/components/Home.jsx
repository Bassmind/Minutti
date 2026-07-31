import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const opciones = [
    {
      titulo: "Propiedades",
      descripcion: "Agregar, editar y eliminar propiedades.",
      ruta: "/añadir-atributos",
      icono: "📦",
    },
    {
      titulo: "Nuevo presupuesto",
      descripcion: "Seleccionar propiedades y generar un presupuesto.",
      ruta: "/nuevo-presupuesto",
      icono: "📝",
    },
  ];

  return (
    <main className="app-shell">
      <section className="card">
        <h1>Minutti</h1>
        <p>Hola Mony, esta es la aplicación de presupuestos.</p>

        <div className="menu-grid">
          {opciones.map((opcion) => (
            <Link
              key={opcion.ruta}
              to={opcion.ruta}
              className="menu-card"
            >
              <div className="icon">{opcion.icono}</div>
              <h2>{opcion.titulo}</h2>
              <p>{opcion.descripcion}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
