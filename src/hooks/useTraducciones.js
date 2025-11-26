import { useEffect, useState } from "react";
import { supabase } from "../supabase/client.js";

export function useTraducciones(idioma) {
  const [textos, setTextos] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarTraducciones() {
      setCargando(true);

      const { data, error } = await supabase
        .from("traducciones") 
        .select("*")
        .eq("idioma", idioma); 

      if (error) {
        console.error("Error cargando traducciones:", error);
        setCargando(false);
        return;
      }

      const traduccion = data[0]?.texto_json ? JSON.parse(data[0].texto_json) : null;

      setTextos(traduccion);
      setCargando(false);
    }

    cargarTraducciones();
  }, [idioma]);

  return { textos, cargando };
}
