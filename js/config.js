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

  eventName: "SOCIAL MOVE",
  // Bajada corta debajo del título. Dejar "" para ocultarla.
  eventTag: "4K SESSION",
  eventDate: "Sáb 24 de octubre · 9:00 hs",
  eventPlace: "Espacio Mixtura, Plottier",

  // Bajada opcional del evento. Dejar "" para ocultar la sección.
  description: "Arrancá el sábado de otra manera: un encuentro para moverse, desayunar rico, disfrutar al aire libre y compartir con otras personas. Una mañana con 4 kilómetros recreativos, alimentación saludable, café, música, juegos, kit de regalo y actividades para conectar.",

  cupoNote: "Completá el formulario y nos ponemos en contacto con vos.",

  // Campos extra además de nombre/apellido/DNI/email/teléfono.
  // type puede ser "text" o "select". Vacío = sin campos extra.
  //
  // OJO: estos campos se muestran en el formulario pero sus valores NO se
  // incluyen todavía en lo que se manda al Apps Script — es un lugar
  // reservado por si hace falta más adelante.
  extraFields: []
};
/* ========================================================= */
