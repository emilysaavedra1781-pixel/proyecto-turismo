// src/componentes/DepartamentosVista.jsx

import React, { useState, useMemo } from "react";
// Usar el nombre de archivo actualizado
import { departamentos } from "../data/listaDestinos"; 
import Buscador from "./Buscador";
import { useGlobal } from "./ContextoGlobal";

export default function DepartamentosVista() {
  const { idioma } = useGlobal();
  const [searchTerm, setSearchTerm] = useState("");

  // Lógica de filtrado
  const filteredDepartamentos = useMemo(() => {
    // ... (la lógica de filtrado es la misma, usando 'departamentos')
    if (!searchTerm) {
        return departamentos;
    }
    const lowerCaseTerm = searchTerm.toLowerCase();
    return departamentos.filter((dep) => {
        const nombre = dep.nombre.toLowerCase();
        const descripcion = idioma === 'es' ? dep.descripcion_es.toLowerCase() : dep.descripcion_en.toLowerCase();
        const tags = dep.tags.join(" ").toLowerCase();

        return (
            nombre.includes(lowerCaseTerm) ||
            descripcion.includes(lowerCaseTerm) ||
            tags.includes(lowerCaseTerm)
        );
    });
  }, [searchTerm, idioma]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="departamentos">
      <h2 style={{ textAlign: 'center' }}>
          {idioma === 'es' ? 'Explora nuestros destinos' : 'Explore our destinations'}
      </h2>
      <Buscador onSearch={handleSearch} />

      <div className="container">
        {filteredDepartamentos.length > 0 ? (
          <div className="departamentos-grid">
            {filteredDepartamentos.map((dep) => (
              <div className="departamento-card" key={dep.id}>
                <img src={dep.imagen} alt={dep.nombre} />
                <h3>{dep.nombre}</h3>
                <p>
                  {idioma === 'es' ? dep.descripcion_es.substring(0, 100) + '...' : dep.descripcion_en.substring(0, 100) + '...'}
                </p>
                <a href={`/departamentos/${dep.id}`} className="btn-1">
                  {idioma === 'es' ? 'Ver Más' : 'View More'}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="txt-p">
            {idioma === 'es' ? 'No se encontraron destinos.' : 'No destinations found.'}
          </p>
        )}
      </div>
    </div>
  );
}
