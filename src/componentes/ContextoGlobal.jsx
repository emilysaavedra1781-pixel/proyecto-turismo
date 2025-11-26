import React, { createContext, useState, useContext, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


export const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [idioma, setIdioma] = useState("es");
  const [modoOscuro, setModoOscuro] = useState(false);

  const [traducciones, setTraducciones] = useState({});

  useEffect(() => {
    async function obtenerTraducciones() {
      const { data, error } = await supabase.from("Traducciones").select("*");

      if (error) {
        console.error("❌ Error al obtener traducciones:", error);
        return;
      }

      const obj = {};
      data.forEach((item) => {
        obj[item.clave] = { es: item.es, en: item.en };
      });

      setTraducciones(obj);
    }

    obtenerTraducciones();
  }, []);

  //  idioma
  const cambiarIdioma = () => {
    setIdioma((prev) => (prev === "es" ? "en" : "es"));
  };

  //  modo oscuro
  const cambiarModo = () => {
    setModoOscuro((prev) => !prev);
    document.body.classList.toggle("modo-oscuro");
  };

  return (
    <GlobalContext.Provider
      value={{
        idioma,
        cambiarIdioma,
        modoOscuro,
        cambiarModo,
        traducciones, 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

