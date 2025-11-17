import React, { createContext, useState, useContext } from "react";

// exportacion
export const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [idioma, setIdioma] = useState("es");
  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarIdioma = () => {
    setIdioma((prev) => (prev === "es" ? "en" : "es"));
  };

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
