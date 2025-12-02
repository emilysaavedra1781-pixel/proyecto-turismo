// src/componentes/Resenas.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { sanitizeText, limitar, validarRating, campoVacio } from "../utils/seguridad";

export default function Resenas({ departamento }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ nombre: "", comentario: "", rating: 5 });
  const [error, setError] = useState("");
  const MAX_COMENT = 300;
  const MAX_NOMBRE = 40;

  useEffect(() => {
    let mounted = true;
    async function cargar() {
      const { data, error } = await supabase
        .from("reseñas")
        .select("*")
        .eq("departamento", departamento)
        .order("created_at", { ascending: false });
      if (!error && mounted) setReviews(data || []);
    }
    cargar();
    return () => { mounted = false; };
  }, [departamento]);

  async function enviar() {
    setError("");
    if (campoVacio(form.nombre)) { setError("Ingresa tu nombre."); return; }
    if (campoVacio(form.comentario)) { setError("Escribe un comentario."); return; }
    if (!validarRating(form.rating)) { setError("Rating inválido."); return; }

    const cleanNombre = limitar(form.nombre, MAX_NOMBRE);
    const cleanComentario = limitar(form.comentario, MAX_COMENT);

    const payload = { departamento, nombre: cleanNombre, comentario: cleanComentario, rating: form.rating };

    const { data, error } = await supabase
      .from("reseñas")
      .insert([payload])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      setError("Error al guardar reseña. Intenta más tarde.");
      return;
    }

    if (data && data[0]) setReviews((prev) => [data[0], ...prev]);
    setForm({ nombre: "", comentario: "", rating: 5 });
  }

  async function eliminarResena(id) {
    // Si eres admin y tienes permisos para borrar:
    const { error } = await supabase.from("reseñas").delete().eq("id", id);
    if (!error) setReviews((r) => r.filter((x) => x.id !== id));
  }

  return (
    <div className="review-box">
      <h3>Comparte tu reseña</h3>

      <input
        type="text"
        placeholder="Tu nombre"
        value={form.nombre}
        maxLength={MAX_NOMBRE}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      />

      <textarea
        placeholder="Escribe un comentario"
        value={form.comentario}
        maxLength={MAX_COMENT}
        onChange={(e) => setForm({ ...form, comentario: e.target.value })}
      />

      <div style={{ marginTop: 6 }}>
        <label>⭐ Calificación: </label>
        <select
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
        >
          <option value={5}>5 ⭐</option>
          <option value={4}>4 ⭐</option>
          <option value={3}>3 ⭐</option>
          <option value={2}>2 ⭐</option>
          <option value={1}>1 ⭐</option>
        </select>
      </div>

      <div className="meta-row">
        <span className="contador">{form.comentario.length}/{MAX_COMENT}</span>
        {error && <span className="error">{error}</span>}
      </div>

      <div style={{ marginTop: 8 }}>
        <button className="btn-1" type="button" onClick={enviar}>Enviar</button>
      </div>

      <h3 style={{ marginTop: 12 }}>Reseñas</h3>
      <div className="review-list">
        {reviews.map((r) => (
          <div key={r.id || r.created_at} className="review-item">
            <p><strong>{r.nombre}</strong> ({r.rating}⭐) — {new Date(r.created_at).toLocaleString()}<br/>{r.comentario}</p>
            {r.id && <button className="small" onClick={() => eliminarResena(r.id)}>Eliminar</button>}
          </div>
        ))}
      </div>
    </div>
  );
}
