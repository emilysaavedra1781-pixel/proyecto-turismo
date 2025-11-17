import React from "react";

export default function Festividades() {
  return (
    <section className="blog-container">
      <h2>Perú en sus Festividades</h2>
      <p>
        "Perú combina patrimonio milenario, devoción viva y rituales que conectan lo ancestral
        y lo contemporáneo. Desde la majestuosidad del Inti Raymi en Cusco y el colorido fervor
        de la Fiesta de la Candelaria en Puno hasta la espiritualidad que fluye por
        la peregrinación de Quyllurit’i, cada tradición revela la riqueza cultural y
        la pasión de un país que celebra su historia con orgullo."
      </p>

      <div className="blog-content">
        <div className="blog-item">
          <img src="Imagen/images (3).jpeg" alt="" />
          <h3>Inti Raymi – El Festival del Sol</h3>
          <p>
            Celebrado cada 24 de junio en Cusco, este ritual incaico honra al dios Inti
            (el Sol) con danzas, rituales, música ancestral y trajes coloridos.
          </p>
        </div>

        <div className="blog-item">
          <img src="Imagen/calendaria.jpg" alt="" />
          <h3>Fiesta de la Virgen de la Candelaria (Puno)</h3>
          <p>
            Cada febrero, Puno se llena de color y fe durante esta festividad declarada Patrimonio Cultural
            Inmaterial de la Humanidad. Participan más de 100,000 danzarines y 10,000 músicos.
          </p>
        </div>

        <div className="blog-item">
          <img src="Imagen/Peregrinacion-al-Senor-de-Qoyllur-Riti.webp" alt="" />
          <h3>Quyllurit’i – Peregrinación a la Montaña Sagrada</h3>
          <p>
            Miles de peregrinos de comunidades quechua y aimara suben al nevado Ausangate
            en una fusión ancestral de cosmovisión andina y fe católica.
          </p>
        </div>
      </div>

      <a href="#" className="btn-1">Información</a>
    </section>
  );
}
