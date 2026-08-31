// Única llamada que hace este frontend: un POST al Web App de Google Apps
// Script (CONFIG.apiBaseUrl), que guarda los datos de la inscripción en la Sheet.
//
// Content-Type "text/plain" a propósito, aunque el body sea JSON: un POST
// con Content-Type "application/json" hace que el navegador dispare un
// preflight OPTIONS antes del POST real, y los Web Apps de Apps Script no
// responden ese preflight — el pedido termina fallando por CORS. Con
// "text/plain" no hay preflight, y del lado del Apps Script el JSON se lee
// igual parseando e.postData.contents.
async function enviarInscripcion(datosPersonales) {
  const respuesta = await fetch(CONFIG.apiBaseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(datosPersonales),
  });

  if (!respuesta.ok) {
    throw new Error('Ocurrió un error al enviar tus datos. Probá de nuevo en unos minutos.');
  }

  let datos = {};
  try {
    datos = await respuesta.json();
  } catch (error) {
    // Si el Apps Script no devuelve JSON, asumimos que igual guardó los
    // datos correctamente mientras el status HTTP haya sido 200.
    return {};
  }

  if (datos.ok === false) {
    throw new Error(datos.mensaje || 'Ocurrió un error al enviar tus datos. Probá de nuevo en unos minutos.');
  }

  return datos;
}
