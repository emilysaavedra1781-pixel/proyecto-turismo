// src/utils/seguridad.js
// Sanitización y validación centralizada (Persona 2)

const MALAS_PALABRAS = [
  "tonto","idiota","estupido","estúpido","mierda","puta","imbecil","joder"
];

export function sanitizeText(text = "") {
  if (typeof text !== "string") return "";

  // 1) eliminar scripts
  let t = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  // 2) eliminar tags HTML
  t = t.replace(/<[^>]+>/g, "");
  // 3) neutralizar malas palabras
  MALAS_PALABRAS.forEach((p) => {
    const re = new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    t = t.replace(re, "****");
  });
  // 4) quitar chars invisibles/control
  t = t.replace(/[\u200B-\u200D\uFEFF]/g, "");
  t = t.replace(/[\x00-\x08\x0E-\x1F\x7F]/g, "");
  return t.trim();
}

export function limitar(text = "", max = 300) {
  const s = sanitizeText(text);
  return s.length > max ? s.slice(0, max) : s;
}

export function campoVacio(text) {
  return !text || String(text).trim() === "";
}

export function validarRating(r) {
  const n = Number(r);
  return Number.isInteger(n) && n >= 1 && n <= 5;
}
