import React, { useState } from "react";
import { useGlobal } from "./ContextoGlobal";

export default function Buscador({ onSearch }) {
  const { idioma, textos } = useGlobal();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  return (
    <div className="seccion-buscador container">
      <h2 style={{ color: '#323337', margin: '40px 0 20px', fontSize: '30px' }}>
        {idioma === 'es' ? 'Buscador de Destinos' : 'Destination Finder'}
      </h2>
      <input
        type="text"
        placeholder={idioma === 'es' ? 'Busca un departamento...' : 'Search for a department...'}
        value={searchTerm}
        onChange={handleInputChange}
        className="input-buscador"
      />
      {/* Estilos para el input-buscador (para que se vea bien) */}
      <style jsx="true">{`
        .input-buscador {
          width: 80%;
          max-width: 600px;
          padding: 12px 20px;
          margin-bottom: 30px;
          border: 2px solid #ce967b;
          border-radius: 25px;
          font-size: 16px;
          text-align: center;
          transition: all 0.3s;
        }
        .input-buscador:focus {
          border-color: #bd6538;
          box-shadow: 0 0 10px rgba(206, 150, 123, 0.5);
          outline: none;
        }
        .seccion-buscador {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
