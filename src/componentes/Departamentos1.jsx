import React, { useState } from "react";
import DepartamentosDetalle from "./DepartamentosDetalle";
import "../style.css";

export default function Departamentos() {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  function mostrarDetalleDepartamento() {
    setMostrarDetalle(true);
  }

  return (
    <div className="container">
      {!mostrarDetalle && (
        <section id="departamentos" className="departamentos container">
          <h1>Los 10 departamentos más concurridos por turistas</h1>

          <div className="departamentos-grid">
            
            <div className="departamento-card">
              <img src="Imagen/cusco.jpg" alt="Cusco" />
              <h3>Cusco</h3>
              <p>Breve descripción turística de Cusco.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/lima.jpg" alt="Lima" />
              <h3>Lima</h3>
              <p>Breve descripción turística de Lima.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/puno.jpeg" alt="Puno" />
              <h3>Puno</h3>
              <p>Breve descripción turística de Puno.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/d4.jpg" alt="Arequipa" />
              <h3>Arequipa</h3>
              <p>Breve descripción turística de Arequipa.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/ica.jpeg" alt="Ica" />
              <h3>Ica</h3>
              <p>Breve descripción turística de Ica.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/ciudad-de-chiclayo-23nov20-card.webp" alt="Lambayeque" />
              <h3>Lambayeque</h3>
              <p>Breve descripción turística de Lambayeque.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/04231eca-42e5-4b00-9e7a-b093240dc642.jpg" alt="Loreto" />
              <h3>Loreto</h3>
              <p>Breve descripción turística de Loreto.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/San-Martín-Portada.jpg" alt="San Martín" />
              <h3>San Martín</h3>
              <p>Breve descripción turística de San Martín.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/junin.jpeg" alt="Junín" />
              <h3>Junín</h3>
              <p>Breve descripción turística de Junín.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>

            <div className="departamento-card">
              <img src="Imagen/ayacucho.jpg" alt="Ayacucho" />
              <h3>Ayacucho</h3>
              <p>Breve descripción turística de Ayacucho.</p>
              <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                Ver más
              </button>
            </div>
          </div>
        </section>
      )}

      {mostrarDetalle && <DepartamentosDetalle />}
    </div>
  );
}

