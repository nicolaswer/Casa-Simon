// src/services/whatsappService.js

const CONFIG = {
  TELEFONO_RECIBE: "+34671328991", // <--- ASEGÚRATE de que este número sea el tuyo con prefijo
  API_KEY: "4903539"              
};

export const enviarReservaWhatsApp = async (data, date) => {
  const fechaStr = date.toLocaleDateString('es-ES', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });

  // 1. Construimos el mensaje en texto plano primero
  const mensajePlano = 
    `*NUEVA RESERVA - CASA SIMÓN*\n` +
    `--------------------------\n` +
    `👤 *Nombre:* ${data.nombre}\n` +
    `📞 *Teléfono:* ${data.telefono.replace(/\s+/g, '')}\n` +
    `📅 *Fecha:* ${fechaStr}\n` +
    `🕒 *Hora:* ${data.hora}\n` +
    `👥 *Comensales:* ${data.personas}\n` +
    `📍 *Zona:* ${data.lugar}\n` +
    `👶 *Silla bebé:* ${data.sillaBebe ? 'Sí' : 'No'}`;

  // 2. Codificamos el mensaje para que sea seguro en una URL
  // Esto convierte los espacios en %20, los saltos de línea en %0A, etc.
  const mensajeCodificado = encodeURIComponent(mensajePlano);

  const url = `https://api.callmebot.com/whatsapp.php?phone=${CONFIG.TELEFONO_RECIBE}&text=${mensajeCodificado}&apikey=${CONFIG.API_KEY}`;

  try {
    // Usamos 'no-cors' porque CallMeBot no envía cabeceras de permiso al navegador.
    // Con 'no-cors', la petición se envía, pero no podemos leer la respuesta (siempre parecerá "exitosa").
    await fetch(url, { 
      method: 'GET',
      mode: 'no-cors' 
    });
    
    return { success: true };
  } catch (error) {
    console.error("Error en el servicio de WhatsApp:", error);
    throw error;
  }
};