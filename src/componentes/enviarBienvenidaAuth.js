// src/utils/enviarBienvenidaAuth.js
import { supabase } from "../supabaseClient";
import enviarBienvenida from "./enviarBienvenida";

export function iniciarEnvioBienvenida() {
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === "SIGNED_IN" && session?.user) {
      const usuario = session.user;

      // Obtenemos correo y nombre (puedes usar otro campo si lo tienes en tu perfil)
      const correo = usuario.email;
      const nombre = usuario.user_metadata?.full_name || "Usuario";

      console.log("Enviando correo de bienvenida a:", correo);

      const success = await enviarBienvenida(correo, nombre);

      if (success) {
        console.log("Correo de bienvenida enviado correctamente!");
      } else {
        console.log("No se pudo enviar el correo de bienvenida.");
      }
    }
  });
}
