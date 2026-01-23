const TELEFONO_RECIBE = "34600000000";
const API_KEY_BOT = "TU_API_KEY";

export const sendReservationToBot = async (data, startDate) => {
  const fechaFormat = startDate.toLocaleDateString('es-ES', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });

  const mensaje = 
    `*NUEVA RESERVA - CASA SIMÓN*%0A` +
    `--------------------------%0A` +
    `👤 *Nombre:* ${data.nombre}%0A` +
    `📞 *Tel:* ${data.telefono.replace(/\s+/g, '')}%0A` +
    `📅 *Fecha:* ${fechaFormat}%0A` +
    `🕒 *Hora:* ${data.hora}%0A` +
    `👥 *Personas:* ${data.personas}%0A` +
    `📍 *Lugar:* ${data.lugar}%0A` +
    `👶 *Silla bebé:* ${data.sillaBebe ? 'Sí' : 'No'}`;

  const url = `https://api.callmebot.com/whatsapp.php?phone=${TELEFONO_RECIBE}&text=${mensaje}&apikey=${API_KEY_BOT}`;

  try {
    const response = await fetch(url, { mode: 'no-cors' });
    return { success: true, response };
  } catch (error) {
    console.error("Error en reservationService:", error);
    throw error;
  }
};