
// src/utils/enviarBienvenida.js
export default async function enviarBienvenida(correo, nombre) {
  try {
    const response = await fetch(
      "https://umunbkwbnvsrjwkvgodg.supabase.co/functions/v1/smooth-function",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, nombre }),
      }
    );

    if (!response.ok) {
      console.error("Error enviando correo:", response.status, response.statusText);
      return false;
    }

    const data = await response.json();
    console.log("Respuesta de la función:", data);
    return data.success;
  } catch (error) {
    console.error("Error fetch enviarBienvenida:", error);
    return false;
  }
}
