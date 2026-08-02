import React from 'react'
import { NavLink } from 'react-router-dom';
import './../css/Navcard.css'; // Optional if using standard CSS

export default function Nav() {
    const opciones = [
    {
      titulo: "Propiedades",
      descripcion: "Agregar, editar y eliminar propiedades.",
      ruta: "/añadir-atributos",
      icono: "📦",
    },
    {
      titulo: "Globos",
      descripcion: "Añadir tipos de globos.",
      ruta: "/globos",
      icono: "🎈",
    },
    {
      titulo: "Nuevo Presupuesto",
      descripcion: "Seleccionar propiedades y generar un presupuesto.",
      ruta: "/nuevo-presupuesto",
      icono: "📝",
    },
  ];

  return (
    <div>
        <section className="card">
            <h1>Menú</h1>

            <div className="menu-grid">
            {opciones.map((opcion) => (
                <NavLink
                key={opcion.ruta}
                to={opcion.ruta}
                className="nav-card"
                >
                <div className="icon">{opcion.icono}</div>
                <h2>{opcion.titulo}</h2>
                </NavLink>
            ))}
            </div>
            </section>
    </div>
  )
}