// src/services/whatsappService.js

const CONFIG = {
  // Solo números, sin el "+" para evitar errores de codificación en la URL
  TELEFONO_RESTAURANTE: "34603421647" 
};

export const enviarReservaWhatsApp = (data, date) => {
  // 1. Formateamos la fecha
  const fechaStr = date.toLocaleDateString('es-ES', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });

  // 2. Diseñamos el mensaje (usamos \n para saltos de línea y * para negritas)
  const mensaje = 
    ` *Nombre:* ${data.nombre}\n` +
    ` *Teléfono:* ${data.telefono.replace(/\s+/g, '')}\n` +
    ` *Fecha:* ${fechaStr}\n` +
    ` *Hora:* ${data.hora}\n` +
    ` *Comensales:* ${data.personas}\n` +
    ` *Zona:* ${data.lugar}\n` +
    ` *Silla bebé:* ${data.sillaBebe ? 'Sí' : 'No'}`;

  // 3. LA MAGIA: Codificamos el mensaje para que sea una URL válida
  const mensajeCodificado = encodeURIComponent(mensaje);

  // 4. Creamos el enlace final de wa.me
  const urlWhatsApp = `https://wa.me/${CONFIG.TELEFONO_RESTAURANTE}?text=${mensajeCodificado}`;

  // 5. Abrimos la ventana de WhatsApp (App o Web)
  window.open(urlWhatsApp, '_blank');
  
  // Devolvemos éxito para que el formulario sepa que puede resetearse
  return { success: true };
};