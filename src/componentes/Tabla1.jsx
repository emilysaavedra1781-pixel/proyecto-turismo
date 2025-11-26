import React from "react";
import "../style.css";

import { useGlobal } from "./ContextoGlobal";
import { textos } from "../data/traducciones";

export default function Tabla() {
  const { idioma } = useGlobal();

  const filas = textos[idioma].tabla_filas;

  return (
    <>
   

      <section className="seccion-tabla mostrar-tabla">
        <h2>{textos[idioma].tabla_titulo}</h2>

        <table id="tabla-comparativa">
          <thead>
            <tr>
              <th>{textos[idioma].tabla_cols.departamento}</th>
              <th>{textos[idioma].tabla_cols.clima}</th>
              <th>{textos[idioma].tabla_cols.comida}</th>
              <th>{textos[idioma].tabla_cols.destino}</th>
            </tr>
          </thead>

          <tbody>
            {Object.values(filas).map((fila, i) => (
              <tr key={i}>
                <td>{fila.dep}</td>
                <td>{fila.clima}</td>
                <td>{fila.comida}</td>
                <td>{fila.destino}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}