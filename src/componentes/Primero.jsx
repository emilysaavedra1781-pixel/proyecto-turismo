import React from "react";

export default function Primero() {
  return (
    <main id="primero" className="Primero">
      <div className="Primero-content container">
        <h2>Presentación</h2>

        <div className="Primero-grupo">
          <div className="Primero-1">
            <img src="Imagen/lulu.png" alt="Patrimonio" />
            <h3>Patrimonio y Naturaleza 🐆</h3>
          </div>

          <div className="Primero-2">
            <img src="Imagen/3-removebg-preview.png" alt="Gastronomía" />
            <h3>Gastronomía mundial 🍜</h3>
          </div>

          <div className="Primero-3">
            <img src="Imagen/2.png" alt="Cultura Viva" />
            <h3>Cultura Viva ❤️</h3>
          </div>
        </div>

        <p>
          “Perú combina patrimonio histórico, naturaleza impresionante, gastronomía
          reconocida mundialmente y una cultura vibrante que se refleja en sus festivales
          y tradiciones. Desde las alturas de la Cordillera Blanca y la Amazonía hasta
          los sabores de Maido y Central, y las celebraciones del Inti Raymi o
          el Festival del Cajón Peruano, cada experiencia invita a descubrir
          la riqueza y diversidad que hacen de Perú un destino turístico único e inolvidable.👌”
        </p>

        <a href="#" className="btn-1">Más Información</a>
      </div>
    </main>
  );
}
