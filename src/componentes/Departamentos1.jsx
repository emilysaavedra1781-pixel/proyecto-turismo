import React, { useState, useEffect } from "react";
import DepartamentosDetalle from "./DepartamentosDetalle";
import "../style.css";
import { useGlobal } from "./ContextoGlobal.jsx";
import { textos } from "../data/traducciones.js";

export default function Departamentos() {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const { idioma } = useGlobal();

  // --------------------------
  // ⭐ FAVORITOS (localStorage)
  // --------------------------
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favGuardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favGuardados);
  }, []);

  function toggleFavorito(nombre) {
    let nuevosFav = [];

    if (favoritos.includes(nombre)) {
      nuevosFav = favoritos.filter((f) => f !== nombre);
    } else {
      nuevosFav = [...favoritos, nombre];
    }

    setFavoritos(nuevosFav);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFav));
  }

  function esFavorito(nombre) {
    return favoritos.includes(nombre);
  }

  function mostrarDetalleDepartamento() {
    setMostrarDetalle(true);
  }

  // Lista de departamentos (para evitar repetir código)
  const departamentos = [
    { nombre: "Cusco", img: "Imagen/cusco.jpg", desc: textos[idioma].departamentos_lista.cusco_desc },
    { nombre: "Lima", img: "Imagen/lima.jpg", desc: textos[idioma].departamentos_lista.lima_desc },
    { nombre: "Puno", img: "Imagen/puno.jpeg", desc: textos[idioma].departamentos_lista.puno_desc },
    { nombre: "Arequipa", img: "Imagen/d4.jpg", desc: textos[idioma].departamentos_lista.arequipa_desc },
    { nombre: "Ica", img: "Imagen/ica.jpeg", desc: textos[idioma].departamentos_lista.ica_desc },
    { nombre: "Lambayeque", img: "Imagen/ciudad-de-chiclayo-23nov20-card.webp", desc: textos[idioma].departamentos_lista.lambayeque_desc },
    { nombre: "Loreto", img: "Imagen/04231eca-42e5-4b00-9e7a-b093240dc642.jpg", desc: textos[idioma].departamentos_lista.loreto_desc },
    { nombre: "San Martín", img: "Imagen/San-Martín-Portada.jpg", desc: textos[idioma].departamentos_lista.sanmartin_desc },
    { nombre: "Junín", img: "Imagen/junin.jpeg", desc: textos[idioma].departamentos_lista.junin_desc },
    { nombre: "Ayacucho", img: "Imagen/ayacucho.jpg", desc: textos[idioma].departamentos_lista.ayacucho_desc },
  ];

  return (
    <div className="container">
      {!mostrarDetalle && (
        <section id="departamentos" className="departamentos container">
          <h1>{textos[idioma].departamentos_titulo}</h1>

          <div className="departamentos-grid">
            {departamentos.map((dep) => (
              <div className="departamento-card" key={dep.nombre}>

                <img src={dep.img} alt={dep.nombre} />
                <h3>{dep.nombre}</h3>
                <p>{dep.desc}</p>

                {/* ⭐ BOTÓN DE FAVORITO */}
                <button
                  className="estrella-btn"
                  onClick={() => toggleFavorito(dep.nombre)}
                >
                  {esFavorito(dep.nombre) ? "⭐" : "☆"}
                </button>

                <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                  {textos[idioma].departamentos_verMas}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {mostrarDetalle && <DepartamentosDetalle />}
    </div>
  );
}
