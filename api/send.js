// api/send.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  // ✅ CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ✅ PERMITIMOS GET PARA PRUEBAS
  if (req.method === "GET") {
    return res.status(200).json({
      mensaje: "✅ API SEND funcionando correctamente"
    });
  }

  // ✅ SOLO POST PARA FUNCIONALIDAD REAL
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, correo } = req.body;

  if (!nombre || !correo) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  try {
    // ✅ Guardar en Supabase
    const { data, error } = await supabase
      .from("contacto")
      .insert([{ nombre, correo }]);

    if (error) throw error;

    // ✅ Enviar correo con Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Proyecto Turismo <onboarding@resend.dev>",
        to: [correo],
        subject: "Bienvenido a Proyecto Turismo",
        html: `<p>Hola <b>${nombre}</b>, gracias por registrarte 🎉</p>`,
      }),
    });

    const emailData = await response.json();

    return res.status(200).json({
      ok: true,
      supabase: data,
      email: emailData
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
