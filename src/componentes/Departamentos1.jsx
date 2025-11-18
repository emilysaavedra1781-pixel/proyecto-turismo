import React, { useState } from "react";
import DepartamentosDetalle from "./DepartamentosDetalle";
import "../style.css";
import { useGlobal } from "./ContextoGlobal.jsx";
import { textos } from "../data/traducciones.js";

export default function Departamentos() {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const { idioma } = useGlobal();

  function mostrarDetalleDepartamento() {
    setMostrarDetalle(true);
  }

  return (
    <div className="container">
      {!mostrarDetalle && (
        <section id="departamentos" className="departamentos container">
          
          <h1>{textos[idioma].departamentos_titulo}</h1>

          <div className="departamentos-grid">
            
            <div className="departamento-card">
              <img src="Imagen/cusco.jpg" alt="Cusco" />
              <h3>Cusco</h3>
              <p>{textos[idioma].departamentos_lista.cusco_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/lima.jpg" alt="Lima" />
              <h3>Lima</h3>
              <p>{textos[idioma].departamentos_lista.lima_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/puno.jpeg" alt="Puno" />
              <h3>Puno</h3>
              <p>{textos[idioma].departamentos_lista.puno_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/d4.jpg" alt="Arequipa" />
              <h3>Arequipa</h3>
              <p>{textos[idioma].departamentos_lista.arequipa_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/ica.jpeg" alt="Ica" />
              <h3>Ica</h3>
              <p>{textos[idioma].departamentos_lista.ica_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/ciudad-de-chiclayo-23nov20-card.webp" alt="Lambayeque" />
              <h3>Lambayeque</h3>
              <p>{textos[idioma].departamentos_lista.lambayeque_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/04231eca-42e5-4b00-9e7a-b093240dc642.jpg" alt="Loreto" />
              <h3>Loreto</h3>
              <p>{textos[idioma].departamentos_lista.loreto_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/San-Martín-Portada.jpg" alt="San Martín" />
              <h3>San Martín</h3>
              <p>{textos[idioma].departamentos_lista.sanmartin_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/junin.jpeg" alt="Junín" />
              <h3>Junín</h3>
              <p>{textos[idioma].departamentos_lista.junin_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/ayacucho.jpg" alt="Ayacucho" />
              <h3>Ayacucho</h3>
              <p>{textos[idioma].departamentos_lista.ayacucho_desc}</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                {textos[idioma].departamentos_verMas}
              </button>
            </div>

          </div>
        </section>
      )}

      {mostrarDetalle && <DepartamentosDetalle />}
    </div>
  );
}

