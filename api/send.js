import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Permitir OPTIONS (CORS)
  if (req.method === "OPTIONS") {
    return res.status(200).send("ok");
  }

  // Aceptar solo POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { nombre, correo, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: correo,
      subject: `Hola ${nombre} 👋`,
      html: `<h2>Hola ${nombre}</h2><p>${mensaje}</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Error enviando correo" });
  }
}
