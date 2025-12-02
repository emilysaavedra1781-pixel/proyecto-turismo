export default async function handler(req, res) {
  console.log("====== DEBUG SEND FUNCTION ======");
  console.log("USER:", process.env.GMAIL_USER);
  console.log("PASS:", process.env.GMAIL_APP_PASSWORD ? "OK" : "MISSING");
  console.log("Method:", req.method);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: req.body.email,
      subject: "Prueba",
      text: "Hola!",
    });

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log("====== ERROR ENVIANDO CORREO ======");
    console.log(error); // <-- aquí verás exactamente el motivo del error
    return res.status(500).json({ error: error.message });
  }
}
