import React, { useState } from "react";
import "../style.css";
import { useGlobal } from "./ContextoGlobal.jsx";
import Resenas from "./resenas.jsx";

export default function DepartamentosDetalle() {
  const { idioma, traducciones } = useGlobal();

  if (!traducciones || Object.keys(traducciones).length === 0) {
    return <p>Cargando...</p>;
  }

  const t = (clave) => traducciones[clave]?.[idioma] || "";
  const res = (clave) => traducciones[`resenas_${clave}`]?.[idioma] || "";

  // 🔹 PLANTILLA PARA CADA DEPARTAMENTO
  function TarjetaDetalle({ nombre, prefijo, img }) {
    const [reviews, setReviews] = useState(() => {
      const guardadas = localStorage.getItem(`reviews_${nombre}`);
      return guardadas ? JSON.parse(guardadas) : [];
    });

    const [form, setForm] = useState({ nombre: "", comentario: "" });

    function enviarReseña() {
      if (!form.nombre || !form.comentario) return;

      const nueva = { nombre: form.nombre, comentario: form.comentario };
      const nuevasReseñas = [...reviews, nueva];

      setReviews(nuevasReseñas);
      localStorage.setItem(`reviews_${nombre}`, JSON.stringify(nuevasReseñas));
      setForm({ nombre: "", comentario: "" });
    }

    return (
      <div className="departamento-detalle">
        <img src={img} alt={nombre} />

        <div className="departamento-texto">
          <h1>{t(`${prefijo}_titulo`)}</h1>

          <h2>{t(`${prefijo}_sub_caracteristicas`)}</h2>
          <p>{t(`${prefijo}_caracteristicas`)}</p>

          <h2>{t(`${prefijo}_sub_gastronomia`)}</h2>
          <p>{t(`${prefijo}_gastronomia`)}</p>

          <h2>{t(`${prefijo}_sub_festividades`)}</h2>
          <p>{t(`${prefijo}_festividades`)}</p>

          <h2>{t(`${prefijo}_sub_hoteles`)}</h2>
          <p>
            {t(`${prefijo}_hoteles`)}{" "}
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              Booking.com
            </a>
          </p>

          
        </div>
      </div>
    );
  }

  // 🔹 LISTA DE TARJETAS
  return (
    <section className="departamento-detalle-container">
      <TarjetaDetalle nombre="Cusco" prefijo="dep_cusco" img="Imagen/cusco.jpg" /><Resenas departamento="Cusco" />
      <TarjetaDetalle nombre="Lima" prefijo="dep_lima" img="Imagen/lima.jpg" /><Resenas departamento="Lima" />
      <TarjetaDetalle nombre="Puno" prefijo="dep_puno" img="Imagen/puno.jpeg" /><Resenas departamento="Puno" />
      <TarjetaDetalle nombre="Arequipa" prefijo="dep_arequipa" img="Imagen/d4.jpg" /><Resenas departamento="Arequipa" />
      <TarjetaDetalle nombre="Ica" prefijo="dep_ica" img="Imagen/ica.jpeg" /><Resenas departamento="Ica" />
      <TarjetaDetalle nombre="Lambayeque" prefijo="dep_lambayeque" img="Imagen/Lambayeque.jpg" /><Resenas departamento="Lambayeque" />
      <TarjetaDetalle nombre="Loreto" prefijo="dep_loreto" img="Imagen/Loreto.jpg" /><Resenas departamento="Loreto" />
      <TarjetaDetalle nombre="San Martín" prefijo="dep_sanmartin" img="Imagen/San-Martin.jpg" /><Resenas departamento="San Martín" />
      <TarjetaDetalle nombre="Junín" prefijo="dep_junin" img="Imagen/Junin.jpg" /><Resenas departamento="Junín" />
      <TarjetaDetalle nombre="Ayacucho" prefijo="dep_ayacucho" img="Imagen/Ayacucho1.jpg" /><Resenas departamento="Ayacucho" />
    </section>
  );
}


