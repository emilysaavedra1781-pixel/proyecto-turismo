//Esto permitirá que todos los componentes accedan al idioma y modo visual sin tener que pasarlo manualmente.

import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // Idioma
  const [idioma, setIdioma] = useState("es"); // es o en

  // blanco o escuro
  const [modoOscuro, setModoOscuro] = useState(false);

  // Alternar idioma
  const cambiarIdioma = () => {
    setIdioma((prev) => (prev === "es" ? "en" : "es"));
  };

  // Alternar 
  const cambiarModo = () => {
    setModoOscuro((prev) => !prev);
    document.body.classList.toggle("modo-oscuro");
  };

  return (
    <GlobalContext.Provider value={{ idioma, cambiarIdioma, modoOscuro, cambiarModo }}>
      {children}
    </GlobalContext.Provider>
  );
};
