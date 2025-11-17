import React from "react";
import "../style.css";

export default function Contacto() {
  return (
    <main>
      <section className="formulario-contacto">
        <h1>Formulario de Contacto</h1>

        <form id="contactFormPage" action="form.php" method="post" noValidate>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}
