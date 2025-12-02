import React from "react";
import "../style.css";
import { useGlobal } from "./ContextoGlobal";

export default function Tabla() {
  const { idioma, traducciones } = useGlobal();

  if (!traducciones) return <p>Cargando...</p>;

  const t = (clave) => traducciones[clave]?.[idioma] || "";

  const filas = [
    // ✔ EXISTENTES
    {
      dep: t("tabla_fila_lima_dep"),
      clima: t("tabla_fila_lima_clima"),
      comida: t("tabla_fila_lima_comida"),
      destino: t("tabla_fila_lima_destino"),
    },
    {
      dep: t("tabla_fila_cusco_dep"),
      clima: t("tabla_fila_cusco_clima"),
      comida: t("tabla_fila_cusco_comida"),
      destino: t("tabla_fila_cusco_destino"),
    },
    {
      dep: t("tabla_fila_arequipa_dep"),
      clima: t("tabla_fila_arequipa_clima"),
      comida: t("tabla_fila_arequipa_comida"),
      destino: t("tabla_fila_arequipa_destino"),
    },
    {
      dep: t("tabla_fila_puno_dep"),
      clima: t("tabla_fila_puno_clima"),
      comida: t("tabla_fila_puno_comida"),
      destino: t("tabla_fila_puno_destino"),
    },
    {
      dep: t("tabla_fila_ica_dep"),
      clima: t("tabla_fila_ica_clima"),
      comida: t("tabla_fila_ica_comida"),
      destino: t("tabla_fila_ica_destino"),
    },

    {
      dep: t("tabla_fila_lambayeque_dep"),
      clima: t("tabla_fila_lambayeque_clima"),
      comida: t("tabla_fila_lambayeque_comida"),
      destino: t("tabla_fila_lambayeque_destino"),
    },
    {
      dep: t("tabla_fila_loreto_dep"),
      clima: t("tabla_fila_loreto_clima"),
      comida: t("tabla_fila_loreto_comida"),
      destino: t("tabla_fila_loreto_destino"),
    },
    {
      dep: t("tabla_fila_sanmartin_dep"),
      clima: t("tabla_fila_sanmartin_clima"),
      comida: t("tabla_fila_sanmartin_comida"),
      destino: t("tabla_fila_sanmartin_destino"),
    },
    {
      dep: t("tabla_fila_junin_dep"),
      clima: t("tabla_fila_junin_clima"),
      comida: t("tabla_fila_junin_comida"),
      destino: t("tabla_fila_junin_destino"),
    },
    {
      dep: t("tabla_fila_ayacucho_dep"),
      clima: t("tabla_fila_ayacucho_clima"),
      comida: t("tabla_fila_ayacucho_comida"),
      destino: t("tabla_fila_ayacucho_destino"),
    },
  ];

  return (
    <section className="seccion-tabla mostrar-tabla">
      <h2>{t("tabla_titulo")}</h2>

      <table id="tabla-comparativa">
        <thead>
          <tr>
            <th>{t("tabla_cols_departamento")}</th>
            <th>{t("tabla_cols_clima")}</th>
            <th>{t("tabla_cols_comida")}</th>
            <th>{t("tabla_cols_destino")}</th>
          </tr>
        </thead>

        <tbody>
          {filas.map((fila, i) => (
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
  );
}

