import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

app.post("/send", async (req, res) => {
  try {
    const { nombre, correo, mensaje } = req.body;
    if (!nombre || !correo || !mensaje) return res.status(400).json({ error: "Faltan datos" });

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

    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error enviando correo" });
  }
});

export default app;
