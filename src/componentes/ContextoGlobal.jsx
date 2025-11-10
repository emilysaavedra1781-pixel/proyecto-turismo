import React, { createContext, useState, useContext } from "react";

// exportacion
export const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // Idioma
  const [idioma, setIdioma] = useState("es"); // es o en

  // Modo claro / oscuro
  const [modoOscuro, setModoOscuro] = useState(false);

  // Alternar idioma
  const cambiarIdioma = () => {
    setIdioma((prev) => (prev === "es" ? "en" : "es"));
  };

  // Alternar modo oscuro
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

