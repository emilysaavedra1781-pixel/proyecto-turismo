// api/send.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(200).end();

  const { nombre, correo } = req.body;
  if (!nombre || !correo) return res.status(400).json({ error: "Faltan datos" });

  try {
    // Guardar en Supabase
    const { data, error } = await supabase.from("contacto").insert([{ nombre, correo }]);
    if (error) throw error;

    // Enviar correo usando Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "tu-correo-verificado@tudominio.com",
        to: [correo],
        subject: "Bienvenido a Proyecto Turismo",
        html: `<p>Hola <b>${nombre}</b>, bienvenido a tu proyecto!</p>`,
      }),
    });

    const emailData = await response.json();

    return res.status(200).json({ supabase: data, email: emailData });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
