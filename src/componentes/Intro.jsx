import React from "react";

export default function Intro() {
  return (
    <section id="Intro" className="intro">
      <div
        className="intro-content container"
        style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}
      >
        <h2>Una mirada hacia Perú 🗺️</h2>
        <p className="txt-p">
          “Perú es un país lleno de historia, cultura y paisajes únicos. Desde las antiguas
          civilizaciones como los Incas hasta la diversidad de su gastronomía, música y
          tradiciones, cada región ofrece experiencias inolvidables que reflejan la riqueza y la
          identidad de la nación. 💕”
        </p>
      </div>

      <div className="intro-grupo container grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="intro-1 text-center p-4 rounded-2xl shadow">
          <img src="Imagen/musica-como-identidad-1024x1024-removebg-preview.png" alt="Musica" className="mx-auto" />
          <h3 className="text-xl font-semibold mt-3">Música 🎶</h3>
          <p>
            “La cantante Susana Baca ha llevado la música afroperuana a escenarios internacionales,
            preservando y difundiendo las raíces culturales de Perú a través de su voz y
            composiciones. ♥️”
          </p>
        </div>

        <div className="intro-1 text-center p-4 rounded-2xl shadow">
          <img src="Imagen/Fondo_3-removebg-preview.png" alt="Historia" className="mx-auto" />
          <h3 className="text-xl font-semibold mt-3">Historia 🧑‍🏫</h3>
          <p>
            “Perú es cuna de antiguas civilizaciones como los Incas, cuyo legado incluye Machu Picchu,
            la Ciudadela de Cusco y una rica tradición arquitectónica y cultural que sigue inspirando
            al mundo. ❤️”
          </p>
        </div>

        <div className="intro-1 text-center p-4 rounded-2xl shadow">
          <img src="Imagen/ceviche.png" alt="Gastronomía" className="mx-auto" />
          <h3 className="text-xl font-semibold mt-3">Gastronomía ❤️</h3>
          <p>
            “El chef Gastón Acurio ha puesto la gastronomía peruana en el mapa mundial, promoviendo
            platos como el ceviche y la causa limeña, y destacando la diversidad de ingredientes del
            país. 👍”
          </p>
        </div>
      </div>

      <div className="intro-boton container text-center mt-6">
        <button className="btn-1 px-6 py-2 rounded-xl shadow bg-blue-500 text-white" onClick={() => mostrarDepartamento()}>
          Departamentos
        </button>
      </div>
    </section>
  );
}
