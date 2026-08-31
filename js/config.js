/* =========================================================
   CONFIG — EDITAR ESTO PARA CADA EVENTO NUEVO
   Es lo único que hay que tocar para reutilizar esta página
   para un evento distinto.
   ========================================================= */
const CONFIG = {
  // URL del Web App de Google Apps Script que recibe la inscripción y la
  // guarda en la Sheet (se consigue en el editor del script, con
  // Implementar > Nueva implementación > Aplicación web).
  apiBaseUrl: "https://script.google.com/macros/s/AKfycbwLe8qQBBiPE4sQogtdpxP1v-JpDpIHsij9qjTzHupVHpxeFtLA8OjWNoJXauvSyq4f/exec",

  eventName: "Convidame Run",
  // Bajada corta debajo del título. Dejar "" para ocultarla.
  eventTag: "",
  eventDate: "Sáb 24 de octubre · 9:00 hs",
  eventPlace: "Espacio Mixtura, Plottier",
  priceLabel: "$40.000 por persona",

  // Bajada opcional del evento. Dejar "" para ocultar la sección.
  description: "Un día para compartir, moverte y disfrutar en comunidad.",

  cupoNote: "Completá tus datos. Nos vamos a contactar por mail o teléfono para coordinar el pago y confirmar tu lugar.",

  // Campos extra además de nombre/apellido/DNI/email/teléfono.
  // type puede ser "text" o "select". Vacío = sin campos extra.
  //
  // OJO: estos campos se muestran en el formulario pero sus valores NO se
  // incluyen todavía en lo que se manda al Apps Script — es un lugar
  // reservado por si hace falta más adelante.
  extraFields: []
};
/* ========================================================= */
