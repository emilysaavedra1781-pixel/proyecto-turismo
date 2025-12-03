import React, { useState, useEffect } from "react";
import DepartamentosDetalle from "./DepartamentosDetalle";
import "../style.css";
import { useGlobal } from "./ContextoGlobal.jsx";
import { supabase } from './supabaseClient';

export default function Departamentos() {
  const { idioma, traducciones } = useGlobal();

  if (!traducciones || Object.keys(traducciones).length === 0) {
    return <p>Cargando contenidos...</p>;
  }

  const t = traducciones;

  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const [guestId, setGuestId] = useState(null);

  // ⭐ FAVORITOS 
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    let currentGuestId = localStorage.getItem("guest_id");
    
    if (!currentGuestId) {
      currentGuestId = crypto.randomUUID(); 
      localStorage.setItem("guest_id", currentGuestId);
    }
    
    setGuestId(currentGuestId);
    fetchFavoritos(currentGuestId);
  }, []);

  async function fetchFavoritos(currentGuestId) {
    if (!currentGuestId) return;

    const { data, error } = await supabase
      .from('departamentos_favoritos')
      .select('departamento_id')
      .eq('guest_id', currentGuestId);

    if (error) {
      console.error("Error al cargar favoritos desde Supabase:", error);
      return;
    }

    const favNombres = data.map(row => row.departamento_id);
    setFavoritos(favNombres);
  }

  async function toggleFavorito(nombre) {
    if (!guestId) {
      console.error("ID de invitado no cargado, no se puede guardar.");
      return;
    }
    
    let nuevosFav;
    
    if (favoritos.includes(nombre)) {
      // Remover de Supabase (DELETE)
      const { error } = await supabase
        .from('departamentos_favoritos')
        .delete()
        .eq('guest_id', guestId)       // Filtra por ID de invitado
        .eq('departamento_id', nombre);

      if (error) {
        console.error("Error al remover favorito:", error);
        return;
      }
      nuevosFav = favoritos.filter((f) => f !== nombre);
    } else {
      // Añadir a Supabase (INSERT)
      const { error } = await supabase
        .from('departamentos_favoritos')
        .insert([
          { guest_id: guestId, departamento_id: nombre } // Usa guest_id
        ]);

      if (error) {
        console.error("Error al añadir favorito:", error);
        return;
      }
      nuevosFav = [...favoritos, nombre];
    }

    setFavoritos(nuevosFav);
  }

  function esFavorito(nombre) {
    return favoritos.includes(nombre);
  }

  function mostrarDetalleDepartamento() {
    setMostrarDetalle(true);
  }

  // 📌 LISTA DE DEPARTAMENTOS CON TRADUCCIÓN
  const departamentos = [
    { nombre: "Cusco", img: "Imagen/cusco.jpg", desc: t.departamentos_lista_cusco_desc?.[idioma] },
    { nombre: "Lima", img: "Imagen/lima.jpg", desc: t.departamentos_lista_lima_desc?.[idioma] },
    { nombre: "Puno", img: "Imagen/puno.jpeg", desc: t.departamentos_lista_puno_desc?.[idioma] },
    { nombre: "Arequipa", img: "Imagen/d4.jpg", desc: t.departamentos_lista_arequipa_desc?.[idioma] },
    { nombre: "Ica", img: "Imagen/ica.jpeg", desc: t.departamentos_lista_ica_desc?.[idioma] },
    { nombre: "Lambayeque", img: "Imagen/ciudad-de-chiclayo-23nov20-card.webp", desc: t.departamentos_lista_lambayeque_desc?.[idioma] },
    { nombre: "Loreto", img: "Imagen/04231eca-42e5-4b00-9e7a-b093240dc642.jpg", desc: t.departamentos_lista_loreto_desc?.[idioma] },
    { nombre: "San Martín", img: "Imagen/San-Martín-Portada.jpg", desc: t.departamentos_lista_sanmartin_desc?.[idioma] },
    { nombre: "Junín", img: "Imagen/junin.jpeg", desc: t.departamentos_lista_junin_desc?.[idioma] },
    { nombre: "Ayacucho", img: "Imagen/ayacucho.jpg", desc: t.departamentos_lista_ayacucho_desc?.[idioma] },
  ];

  return (
    <div className="container">
      {!mostrarDetalle && (
        <section id="departamentos" className="departamentos container">
          <h1>{t.departamentos_titulo?.[idioma]}</h1>

          <div className="departamentos-grid">
            {departamentos.map((dep) => (
              <div className="departamento-card" key={dep.nombre}>

                <img src={dep.img} alt={dep.nombre} />
                <h3>{dep.nombre}</h3>
                <p>{dep.desc}</p>

                {/* ⭐ BOTÓN DE FAVORITO */}
                <button
                  className="estrella-btn"
                  disabled={guestId === null}
                  onClick={() => toggleFavorito(dep.nombre)}
                >
                  {esFavorito(dep.nombre) ? "⭐" : "☆"}
                </button>

                <button className="btn-1" onClick={mostrarDetalleDepartamento}>
                  {t.departamentos_verMas?.[idioma]}
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