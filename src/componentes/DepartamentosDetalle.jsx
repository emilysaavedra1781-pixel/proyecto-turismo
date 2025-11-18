import React, { useState } from "react";
import { textos } from "../data/traducciones.js";
import { useGlobal } from "./ContextoGlobal.jsx";

export default function DepartamentosDetalle() {
  const { idioma } = useGlobal();
  const t = textos[idioma].departamentos_detalle;

  // -------------------------------
  // 💬 SISTEMA DE RESEÑAS (useState)
  // -------------------------------
  const [reviews, setReviews] = useState({
    Cusco: [],
    Lima: [],
    Puno: [],
    Arequipa: [],
    Ica: [],
    Lambayeque: [],
    Loreto: [],
    "San Martín": [],
    Junín: [],
    Ayacucho: [],
  });

  const [form, setForm] = useState({ nombre: "", comentario: "" });

  function enviarReseña(destino) {
    if (!form.nombre || !form.comentario) return;

    const nueva = { nombre: form.nombre, comentario: form.comentario };

    setReviews({
      ...reviews,
      [destino]: [...reviews[destino], nueva],
    });

    setForm({ nombre: "", comentario: "" });
  }

  // ---------
  // Plantilla
  // ---------
function TarjetaDetalle({ nombre, datos, img }) {

  // 🔥 Cargar reseñas desde localStorage al iniciar
  const [reviews, setReviews] = useState(() => {
    const guardadas = localStorage.getItem(`reviews_${nombre}`);
    return guardadas ? JSON.parse(guardadas) : [];
  });

  // 🔥 Formulario interno
  const [form, setForm] = useState({ nombre: "", comentario: "" });

  // 🔥 Función para enviar reseña
  function enviarReseña() {
    if (!form.nombre || !form.comentario) return;

    const nueva = { nombre: form.nombre, comentario: form.comentario };

    const nuevasReseñas = [...reviews, nueva];

    setReviews(nuevasReseñas);

    // 🔥 Guardar en localStorage
    localStorage.setItem(`reviews_${nombre}`, JSON.stringify(nuevasReseñas));

    // Limpiar formulario
    setForm({ nombre: "", comentario: "" });
  }

  return (
    <div className="departamento-detalle">

      <img src={img} alt={nombre} />

      <div className="departamento-texto">
        <h1>{datos.titulo}</h1>

        <h2>{datos.sub_caracteristicas}</h2>
        <p>{datos.caracteristicas}</p>

        <h2>{datos.sub_gastronomia}</h2>
        <p>{datos.gastronomia}</p>

        <h2>{datos.sub_festividades}</h2>
        <p>{datos.festividades}</p>

        <h2>{datos.sub_hoteles}</h2>
        <p>
          {datos.hoteles}{" "}
          <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
            Booking.com
          </a>
        </p>

        {/* 💬 FORMULARIO DE RESEÑAS */}
        <div className="review-box">
          <h3>Reseñas</h3>

          <input
            type="text"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />

          <textarea
            placeholder="Escribe un comentario"
            value={form.comentario}
            onChange={(e) => setForm({ ...form, comentario: e.target.value })}
          ></textarea>

          <button className="btn-1" type="button" onClick={enviarReseña}>
            Enviar
          </button>

          {/* Lista de reseñas */}
          <div className="review-list">
            {reviews.map((r, i) => (
              <p key={i}>
                <strong>{r.nombre}:</strong> {r.comentario}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


  return (
    <section className="departamento-detalle-container">
      <TarjetaDetalle nombre="Cusco" datos={t.cusco} img="Imagen/cusco.jpg" />
      <TarjetaDetalle nombre="Lima" datos={t.lima} img="Imagen/lima.jpg" />
      <TarjetaDetalle nombre="Puno" datos={t.puno} img="Imagen/puno.jpeg" />
      <TarjetaDetalle nombre="Arequipa" datos={t.arequipa} img="Imagen/d4.jpg" />
      <TarjetaDetalle nombre="Ica" datos={t.ica} img="Imagen/ica.jpeg" />
      <TarjetaDetalle nombre="Lambayeque" datos={t.lambayeque} img="Imagen/Lambayeque.jpg" />
      <TarjetaDetalle nombre="Loreto" datos={t.loreto} img="Imagen/Loreto.jpg" />
      <TarjetaDetalle nombre="San Martín" datos={t.sanmartin} img="Imagen/San Martin.jpg" />
      <TarjetaDetalle nombre="Junín" datos={t.junin} img="Imagen/Junin.jpg" />
      <TarjetaDetalle nombre="Ayacucho" datos={t.ayacucho} img="Imagen/Ayacucho1.jpg" />
    </section>
  );
}
