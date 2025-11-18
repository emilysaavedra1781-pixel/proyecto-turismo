import React from "react";
import { textos } from "../data/traducciones.js";
import { useGlobal } from "./ContextoGlobal.jsx";

export default function DepartamentosDetalle() {
  const { idioma } = useGlobal();
  const t = textos[idioma].departamentos_detalle;

  return (
    <section className="departamento-detalle-container">

      {/* CUSCO */}
      <div className="departamento-detalle">
        <img src="Imagen/cusco.jpg" alt="Cusco" />
        <div className="departamento-texto">

          <h1>{t.cusco.titulo}</h1>

          <h2>{t.cusco.sub_caracteristicas}</h2>
          <p>{t.cusco.caracteristicas}</p>

          <h2>{t.cusco.sub_gastronomia}</h2>
          <p>{t.cusco.gastronomia}</p>

          <h2>{t.cusco.sub_festividades}</h2>
          <p>{t.cusco.festividades}</p>

          <h2>{t.cusco.sub_hoteles}</h2>
          <p>
            {t.cusco.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

      {/* LIMA */}
      <div className="departamento-detalle">
        <img src="Imagen/lima.jpg" alt="Lima" />
        <div className="departamento-texto">

          <h1>{t.lima.titulo}</h1>

          <h2>{t.lima.sub_caracteristicas}</h2>
          <p>{t.lima.caracteristicas}</p>

          <h2>{t.lima.sub_gastronomia}</h2>
          <p>{t.lima.gastronomia}</p>

          <h2>{t.lima.sub_festividades}</h2>
          <p>{t.lima.festividades}</p>

          <h2>{t.lima.sub_hoteles}</h2>
          <p>
            {t.lima.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

      {/* PUNO */}
      <div className="departamento-detalle">
        <img src="Imagen/puno.jpeg" alt="Puno" />
        <div className="departamento-texto">

          <h1>{t.puno.titulo}</h1>

          <h2>{t.puno.sub_caracteristicas}</h2>
          <p>{t.puno.caracteristicas}</p>

          <h2>{t.puno.sub_gastronomia}</h2>
          <p>{t.puno.gastronomia}</p>

          <h2>{t.puno.sub_festividades}</h2>
          <p>{t.puno.festividades}</p>

          <h2>{t.puno.sub_hoteles}</h2>
          <p>
            {t.puno.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

      {/* AREQUIPA */}
      <div className="departamento-detalle">
        <img src="Imagen/d4.jpg" alt="Arequipa" />
        <div className="departamento-texto">

          <h1>{t.arequipa.titulo}</h1>

          <h2>{t.arequipa.sub_caracteristicas}</h2>
          <p>{t.arequipa.caracteristicas}</p>

          <h2>{t.arequipa.sub_gastronomia}</h2>
          <p>{t.arequipa.gastronomia}</p>

          <h2>{t.arequipa.sub_festividades}</h2>
          <p>{t.arequipa.festividades}</p>

          <h2>{t.arequipa.sub_hoteles}</h2>
          <p>
            {t.arequipa.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

      {/* ICA */}
      <div className="departamento-detalle">
        <img src="Imagen/ica.jpeg" alt="Ica" />
        <div className="departamento-texto">

          <h1>{t.ica.titulo}</h1>

          <h2>{t.ica.sub_caracteristicas}</h2>
          <p>{t.ica.caracteristicas}</p>

          <h2>{t.ica.sub_gastronomia}</h2>
          <p>{t.ica.gastronomia}</p>

          <h2>{t.ica.sub_festividades}</h2>
          <p>{t.ica.festividades}</p>

          <h2>{t.ica.sub_hoteles}</h2>
          <p>
            {t.ica.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

      {/* LAMBAYEQUE */}
      <div className="departamento-detalle">
        <img src="Imagen/Lambayeque.jpg" alt="Lambayeque" />
        <div className="departamento-texto">

          <h1>{t.lambayeque.titulo}</h1>

          <h2>{t.lambayeque.sub_caracteristicas}</h2>
          <p>{t.lambayeque.caracteristicas}</p>

          <h2>{t.lambayeque.sub_gastronomia}</h2>
          <p>{t.lambayeque.gastronomia}</p>

          <h2>{t.lambayeque.sub_festividades}</h2>
          <p>{t.lambayeque.festividades}</p>

          <h2>{t.lambayeque.sub_hoteles}</h2>
          <p>
            {t.lambayeque.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

      {/* LORETO */}
      <div className="departamento-detalle">
        <img src="Imagen/Loreto.jpg" alt="Loreto" />
        <div className="departamento-texto">

          <h1>{t.loreto.titulo}</h1>

          <h2>{t.loreto.sub_caracteristicas}</h2>
          <p>{t.loreto.caracteristicas}</p>

          <h2>{t.loreto.sub_gastronomia}</h2>
          <p>{t.loreto.gastronomia}</p>

          <h2>{t.loreto.sub_festividades}</h2>
          <p>{t.loreto.festividades}</p>

          <h2>{t.loreto.sub_hoteles}</h2>
          <p>
            {t.loreto.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

      {/* SAN MARTÍN */}
      <div className="departamento-detalle">
        <img src="Imagen/San Martin.jpg" alt="San Martín" />
        <div className="departamento-texto">

          <h1>{t.sanmartin.titulo}</h1>

          <h2>{t.sanmartin.sub_caracteristicas}</h2>
          <p>{t.sanmartin.caracteristicas}</p>

          <h2>{t.sanmartin.sub_gastronomia}</h2>
          <p>{t.sanmartin.gastronomia}</p>

          <h2>{t.sanmartin.sub_festividades}</h2>
          <p>{t.sanmartin.festividades}</p>

          <h2>{t.sanmartin.sub_hoteles}</h2>
          <p>
            {t.sanmartin.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

      {/* JUNÍN */}
      <div className="departamento-detalle">
        <img src="Imagen/Junin.jpg" alt="Junín" />
        <div className="departamento-texto">

          <h1>{t.junin.titulo}</h1>

          <h2>{t.junin.sub_caracteristicas}</h2>
          <p>{t.junin.caracteristicas}</p>

          <h2>{t.junin.sub_gastronomia}</h2>
          <p>{t.junin.gastronomia}</p>

          <h2>{t.junin.sub_festividades}</h2>
          <p>{t.junin.festividades}</p>

          <h2>{t.junin.sub_hoteles}</h2>
          <p>
            {t.junin.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

      {/* AYACUCHO */}
      <div className="departamento-detalle">
        <img src="Imagen/Ayacucho1.jpg" alt="Ayacucho" />
        <div className="departamento-texto">

          <h1>{t.ayacucho.titulo}</h1>

          <h2>{t.ayacucho.sub_caracteristicas}</h2>
          <p>{t.ayacucho.caracteristicas}</p>

          <h2>{t.ayacucho.sub_gastronomia}</h2>
          <p>{t.ayacucho.gastronomia}</p>

          <h2>{t.ayacucho.sub_festividades}</h2>
          <p>{t.ayacucho.festividades}</p>

          <h2>{t.ayacucho.sub_hoteles}</h2>
          <p>
            {t.ayacucho.hoteles}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

        </div>
      </div>

    </section>
  );
}

